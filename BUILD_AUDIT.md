# GreenPulse Wellness — Build Audit

Audit date: 2026-10-19. Repo: `GPW WEBSITE`, branch `main`, HEAD `cd281e9`.
Scope: read-only. No source code was modified. No secret values are printed; env var **names** only.

**Method and limits**
- Read the source, ran `npm audit`, ran `tsc --noEmit` (0 errors), and queried the public Sanity dataset for counts.
- Checked rendered HTML against the already-running local dev server (`next dev`, port 3000).
- **`next build` was not run** because a dev server was using `.next`. Production-build behaviour (bundle sizes, route static/dynamic flags, conflicting-file errors) is therefore not verified.
- Vercel dashboard settings, Cloudflare dashboard settings, DNS and the live Sanity webhook were **not inspected**. They are not in the repo.
- Lighthouse / Core Web Vitals were **not measured**. Section 11 is based on code inspection.
- Hour figures in Section 12 are estimates, not time records. Git has no time tracking.

---

## 0. Items to act on first

| # | Finding | Detail |
|---|---|---|
| 1 | **Telegram bot token is committed to git** | `.env.example` is tracked and contains a populated `TELEGRAM_BOT_TOKEN` (token-shaped, 46 chars) and `TELEGRAM_CHAT_ID`. It is in commits `0796dee` and `cd281e9` (HEAD), and is identical to the value in `.env.local`. Remote `origin` is `github.com/anasaran05/gpw-website` (repo visibility not checked). The token was not tested. Treat it as exposed: revoke/regenerate it via BotFather, then replace the `.env.example` values with blanks. |
| 2 | **Supplier documents are served publicly** | `public/LIBRARY/` (177 MB, tracked in git) holds supplier email attachments, catalogues and a "BUSINESS DOCUMENTS" PDF: 13 PDF, 2 `.pages`, 2 MP4, 29 images. Anything under `public/` is reachable by URL. Also public: `public/GREENPULSE_MASTER_CONTEXT.md` and `GreenPulse_Combo_Master - Product_Names.csv`. |
| 3 | **`/robots.txt` and `/llms.txt` return HTTP 500 in dev** | Both exist as a `public/` file and as an app route (`app/robots.ts`, `app/llms.txt/route.ts`). Next throws "conflicting public file and page file". `/llms-full.txt` has the same pairing. Production behaviour not verified (no build run). |
| 4 | **Enquiry forms report success when delivery fails** | `solution-enquiry-modal.tsx` and `product-enquiry-drawer.tsx` call `setSubmitted(true)` before the fetch and never check `res.ok`. A 422/502 from the API still shows "submitted". |
| 5 | **`npm audit`: 21 vulnerabilities** (11 high, 10 moderate, 0 critical) | Direct: `next` 16.3.6 (high), `sharp` (high, via next), `sanity` / `next-sanity` / `@sanity/vision` (moderate). Detail in Section 10. |
| 6 | **Terms document and code disagree** | The maintenance terms say "31 product pages" and that the admin dashboard, database and enquiry alerts are not delivered. The code has 62 products, a Sanity Studio admin at `/studio`, Telegram enquiry alerts, and dormant Supabase wiring. See Section 14. |

---

## 1. Stack

| Item | Value |
|---|---|
| Framework | Next.js **16.3.6** (App Router, installed). `package.json` range `^16.3.6`. |
| React | 19.3.0 |
| Language | TypeScript 5.9.x, `strict: true`. `tsc --noEmit` passes with 0 errors. |
| Styling | Tailwind CSS 4.3.3 via `@tailwindcss/postcss`; one global stylesheet (141 lines); `clsx`, `tailwind-merge`, `class-variance-authority`. |
| UI libraries | `motion` 13 (Framer Motion successor), `lenis` (smooth scroll), `lucide-react`, `@radix-ui/react-slot`, `@paper-design/shaders-react` (WebGL shader cards). No component kit (no shadcn components beyond `components.json` and one `button.tsx`). |
| CMS | Sanity 6.18 (`sanity`, `next-sanity` 13, `@sanity/vision`), Studio embedded at `/studio`. |
| Database | `@supabase/supabase-js` 2.118. Wired but dormant (see Section 8). |
| Fonts | `next/font/google`: Outfit, DM Sans, Geist Mono. |
| Other deps | `server-only`, `tsx` (dev). |
| Unused deps (no imports found) | `@sanity/image-url`, `styled-components` (the latter is a Sanity Studio peer dependency). |
| Node | v22.17.0 locally. No `.nvmrc`, no `engines` field. |
| Package manager | npm (`package-lock.json`). |
| Scripts | `dev`, `build`, `start`, `import:content` (Sanity import), `sanity:webhook`, `seed:supabase`. No lint, test or typecheck script. No ESLint config, no test files. |

---

## 2. Pages and routes

### Page routes

| Route | Type | What it does |
|---|---|---|
| `/` | Static | Home: preloader, WebGL hero gallery, solutions intro/bento, equipment rail, suite packages, who-we-equip, how-we-work, enquiry form. Carries `ProfessionalService`, `OfferCatalog` and `FAQPage` JSON-LD. |
| `/products` | Static (client-side filtering) | Catalogue of all products. Category chips, product-type chips, text search, strip/grid view. `CollectionPage` + `ItemList` JSON-LD. |
| `/products/[id]` | Dynamic template, `generateStaticParams` (62 params) | Product detail: gallery, specs, features, benefits, protocol, environments, FAQ accordion, related products, enquiry drawer. `Product` JSON-LD. |
| `/solutions/[id]` | Dynamic template, `generateStaticParams` (4 slugs: `recover`, `agewell`, `rehabilitate`, `live-well`) | Solution landing: hero, space blueprint, workflow protocol, suite bundles, FAQ, cross-nav, enquiry modal. `BreadcrumbList`, `Service`, `Audience` JSON-LD. |
| `/combos` | Static | 30 equipment combos with segment/tier explorer. `CollectionPage` + `ItemList`. |
| `/about` | Static | Story, pillars, methodology, standards, ecosystem, FAQ, CTA. `AboutPage` JSON-LD. |
| `/blog` | Static (ISR, 60 s) | Journal index: hero, featured post, grid, newsletter card. `Blog` JSON-LD. |
| `/blog/[slug]` | Dynamic template, `generateStaticParams` (6 slugs) | Article with TOC, key takeaways, callouts, related equipment, related posts. `BlogPosting` JSON-LD. |
| `/contact` | Static | Contact form and WhatsApp/phone/email links. `ContactPage` JSON-LD. |
| `/privacy`, `/terms`, `/cookies`, `/compliance`, `/complaints` | Static | Legal pages via `legal-page-layout.tsx`. |
| `/studio/[[...tool]]` | `force-static`, own layout `(studio)` | Sanity Studio admin UI. Login handled by Sanity. |

Route groups: `(site)` (public site layout) and `(studio)` (Studio layout). No `loading.tsx`, `error.tsx`, `not-found.tsx` or `opengraph-image` files exist.

### Non-page routes

| Route | Purpose |
|---|---|
| `POST /api/enquiry` | Receives all enquiry forms. |
| `POST /api/revalidate` | Sanity webhook receiver; calls `revalidateTag` for products and blog. |
| `/sitemap.xml` | `app/sitemap.ts`. 82 URLs = 10 static + 4 solutions + 62 products + 6 posts. |
| `/robots.txt` | `app/robots.ts` and `public/robots.txt` (conflict, Section 0 #3). |
| `/llms.txt`, `/llms-full.txt` | `app/llms*.txt/route.ts` read `public/llms*.txt` (140 and 237 lines). Same conflict. |

### Route templates

`products/[id]`, `solutions/[id]`, `blog/[slug]`.

Observed in dev: `/products/` redirects 308 to `/products`.

---

## 3. Products

| Item | Value |
|---|---|
| Storage | **Sanity** is the live source (GROQ, CDN, `revalidate: 60` plus tag `products`). Local TypeScript files in `data/` are a fallback. If Sanity returns nothing or errors, the site renders from `data/`. |
| Live Sanity counts | **62 products**, 6 blog posts, 3 authors, 0 drafts. |
| Local fallback | `data/home.ts` holds 62 products; detail content is in `data/products-data.ts` and six `*-details.ts` files (9,082 lines in `data/` in total). |
| Product count | **62** (matches in Sanity and local). |
| With main image | 34 of 62. The other 28 render a placeholder icon in the catalogue. |
| With extra gallery images | 0 in Sanity, 3 in local data. |
| With overview, FAQs, related products (Sanity) | 62 / 62 / 62 |
| Prices | None stored or shown. Combos are "quoted on enquiry". Tiers (Essential / Pro / Signature) are labels only. |

### Categories (6 in use; the type defines 8)

| Category | Products |
|---|---|
| Active Recovery & Massage (Relax) | 20 |
| Light & Photobiomodulation | 17 |
| Mobility & Assistive Technology | 8 |
| Heat & Thermal Therapy | 7 |
| Cold & Cryo Therapy | 5 |
| Oxygen & Hyperbaric (Air) | 5 |
| Wellness & Recovery Technology | 0 (defined, unused) |
| Rehabilitation & Physical Therapy | 0 (defined, unused) |

### Sub-categories (12)

| Sub-category | Products |
|---|---|
| Pneumatic Compression Systems | 12 |
| Targeted Photobiomodulation Panels & Devices | 12 |
| Full Spectrum Infrared Saunas | 5 |
| Photobiomodulation & Red Light Therapy | 5 |
| Hyperbaric Oxygen Therapy (HBOT) | 5 |
| Robotic & SL-Track Massage Systems | 5 |
| Power Wheelchairs & Assistive Mobility | 5 |
| Cryo & Ice Bath Systems | 4 |
| Percussion Massage Therapy | 3 |
| Standing Wheelchairs | 3 |
| Thermal & Red Light Blankets | 2 |
| Contrast Therapy Devices | 1 |

Twelve brands/product lines: LUMA (14), PULSEWAVE (12), HALO, OXA, SERENE, GLIDE (5 each), ARCTIC (4), THRUM, RISE, LUMA BEAM (3 each), EMBER / AURORA (2), FROSTFIRE (1).

### Search, filter, related

| Feature | Status |
|---|---|
| Text search | Yes. Client-side substring match on product **name** only (`product-catalog.tsx`). |
| Category (modality) filter | Yes. URL param `category` / `modality`. |
| Product-type filter | Yes. URL param `type` (`data/product-types.ts`). |
| Sort, price filter, pagination | No. |
| Related products on product page | Yes. `relatedProductIds` (Sanity reference, with generated fallback). |
| Related equipment inside blog posts | Yes. 4 of 6 posts have it set. |
| Combos | 30 combos, 10 segments, 3 tiers (`data/combos.ts`). |

---

## 4. Components

Totals: 66 component files in `components/` (82 `.tsx` files including `app/`). 52 files are `"use client"`.

| Folder | Files | Contents |
|---|---|---|
| `home/` | 23 | nav, hero, footer + footer stage, enquiry form/context, equipment rail, solutions bento/intro, suite packages, who-we-equip, how-we-work, floating WhatsApp, lazy video, media frame, reveal, spotlight, smooth scroll, icons, logo |
| `product/` | 6 | catalogue, detail view (797 lines), gallery, specs table, enquiry drawer, promotional banner |
| `solution/` | 9 | catalogue, hero, space blueprint, workflow protocol, suite bundles, FAQ, cross-nav, enquiry modal, context |
| `about/` | 8 | hero, story, pillars, methodology, standards, ecosystem, FAQ, CTA |
| `blog/` | 7 | article content, rich text, card, grid, hero, featured post, newsletter card |
| `ui/` | 8 | button, morph-gallery (+ demo), gallery-modal-accordion, feature-shader-cards, ambient-background, layout-preloader, loop-art |
| `combos/`, `contact/`, `legal/` | 2 / 1 / 1 | combo explorer + card, contact form card, legal layout |
| root | 1 | `products-context.tsx` |

**Notable custom pieces**

| Component | What it is |
|---|---|
| `ui/morph-gallery.tsx` (667 lines) | Raw-WebGL morphing image gallery used in the hero. No gallery library. Falls back when images cannot be uploaded to WebGL. |
| `ui/feature-shader-cards.tsx` | Cards with an animated WebGL shader background (`@paper-design/shaders-react`). |
| `ui/layout-preloader.tsx` | Entry preloader; hero autoplay waits for it (commit `3297706`). |
| `home/smooth-scroll.tsx` | Lenis smooth scrolling wrapper around the whole site. |
| `home/hero.tsx`, `home/footer-stage.tsx` | Scroll-driven hero and footer reveal. |
| `solution/space-blueprint.tsx` | Interactive space layout view. |
| `product/product-detail-view.tsx` | Sticky section nav, scroll-spy, FAQ accordion, drawer. |
| `home/lazy-video.tsx` | IntersectionObserver-driven video loading. |
| `ui/loop-art.tsx` | New, untracked at audit time. |

No 3D (Three.js) library. WebGL is hand-written or via the shader package.

---

## 5. Blog system

| Item | Value |
|---|---|
| Content store | Sanity documents `post` and `author`. Fallback: `data/blog.ts` (6 posts). Not MDX. |
| Live content | 6 posts, 3 authors, 6/6 with cover image. |
| Post structure | title, slug, excerpt (max 300), category (4 fixed), publish date, read time, author, featured flag, cover image + alt, tags, key takeaways, sections (heading, anchor id, paragraphs, optional callout of type tip / science / quote), related equipment. |
| Body format | Plain-text paragraphs with a small markup subset: `**bold**`, lines starting `• ` or `1. ` become lists (`rich-text.tsx`). No images inside body. |
| Creating and publishing | Editor writes in Studio at `/studio` and clicks Publish. Page refresh then comes from (a) the Sanity webhook to `/api/revalidate` (HMAC-verified with `SANITY_REVALIDATE_SECRET`), or (b) the 60-second ISR fallback. Webhook creation script: `scripts/create-revalidate-webhook.mjs`. **Whether the webhook exists in the Sanity project was not verified.** |
| Scheduled publishing | No. The posts query has no `publishedAt <= now()` filter, so a post with a future date would still appear immediately. |
| Cron jobs | None. |
| AI generation / automation | **None in code.** `docs/supabase-migration-plan.md` describes a future "generator (Phase 5)" with `blog_pillars` and `generation_logs` tables. Not built. |
| Bulk import | `scripts/import-content.ts` (`sanity exec`) imports from `data/`. |
| Newsletter | `newsletter-card.tsx` is **not functional**: it validates `includes("@")`, waits 600 ms with `setTimeout`, and shows "You are on the list". Nothing is sent or stored. |
| Post SEO | `generateMetadata` (title, description, OG `article` with publishedTime and author, Twitter card); `BlogPosting` JSON-LD with Person author and Organization publisher; sitemap entry with `lastModified` = publish date; related posts by category; related equipment links to product pages. Titles observed with the brand name twice (see Section 6). |

---

## 6. SEO and AEO

| Item | Status |
|---|---|
| Metadata | Root layout sets `metadataBase`, title template `%s \| GreenPulse Wellness`, description, keywords, authors, robots (`max-image-preview: large`, etc.), icons. Per-page metadata on `/about`, `/blog`, `/combos`, `/contact`, `/products`, legal pages, and dynamic `generateMetadata` on products, solutions and posts. |
| Open Graph / Twitter | Site-wide default image `/logo-horizontal.png` declared 1200×630 (actual pixel size not checked). Product pages use the product image; posts use the cover image. No `opengraph-image` generator. Product OG omits `url`. |
| Canonicals | Root layout sets `canonical: "./"`. Explicit canonicals on `/contact`, `/combos`, `/about`, solutions. Observed in dev on `/`, `/blog`, `/contact` and a product page: canonical present and correct. |
| JSON-LD types in use | `Organization`, `WebSite`, `ContactPoint`, `PostalAddress`, `ImageObject` (all pages); `ProfessionalService`, `OfferCatalog`, `Offer`, `Service`, `FAQPage`, `Question`, `Answer` (home); `CollectionPage`, `ItemList` (products, combos); `Product`, `Brand`, `AggregateOffer` (product); `BreadcrumbList`, `Service`, `Audience` (solution); `Blog`, `BlogPosting`, `Person` (blog); `AboutPage`; `ContactPage`. |
| Sitemap | Dynamic, 82 URLs, priorities and change frequencies set. `lastModified` is `new Date()` (build/request time) for everything except posts. |
| robots | Allows all, disallows `/studio` and `/api`, names 23 AI/search crawlers explicitly, lists the sitemap. Defined twice (`app/robots.ts` and `public/robots.txt`), which conflicts. |
| AEO | `llms.txt` (140 lines) and `llms-full.txt` (237 lines); `FAQPage` schema on home only; FAQ sections on product pages (62 products have FAQs), solution pages and about, **without** FAQ schema; blog `keyTakeaways` field. |
| Internal linking | Nav, footer, solution cross-nav, product→related products, post→related equipment, post→related posts, home→product rail. No `BreadcrumbList` on products or posts. |

**Observed defects**
- Duplicate brand suffix: `/blog` renders "…Insights | GreenPulse Wellness | GreenPulse Wellness". Same on `/contact` and product pages, because the page title already contains the brand and the root template adds it again.
- `Product` JSON-LD has `AggregateOffer` with `availability: InStock` but no price, `lowPrice`, `sku` or `url`. No price exists on the site, so the offer is incomplete for Google product rich results.
- Product page title says "Full Specifications & Commercial Pricing", but the page shows no pricing.
- Organization `address` has only the country. The contact block in `data/home.ts` has `address: "TODO: Studio address, City, State, PIN"` and an email marked "TODO: placeholder — confirm".
- `sameAs` LinkedIn value is a personal profile URL (`/in/…`), not a company page.
- Icons: only `/loop-mark.svg`. No apple-touch icon, web manifest or favicon.ico.
- JSON-LD is written with `JSON.stringify` into `dangerouslySetInnerHTML` without escaping `<`. CMS text containing `</script>` would break the page (editor-controlled input, low likelihood).

---

## 7. Forms and integrations

| Form | Location | Submits to | Handles failure? |
|---|---|---|---|
| Home enquiry form | `home/enquiry-form.tsx` | `POST /api/enquiry` | Yes, checks `res.ok` |
| Contact form | `contact/contact-form-card.tsx` | `POST /api/enquiry` | Yes, checks `res.ok` |
| Product enquiry drawer | `product/product-enquiry-drawer.tsx` | `POST /api/enquiry` | **No**, always shows success |
| Solution enquiry modal | `solution/solution-enquiry-modal.tsx` | `POST /api/enquiry` | **No**, always shows success |
| Newsletter | `blog/newsletter-card.tsx` | Nowhere (fake) | n/a |

Server-side flow in `app/api/enquiry/route.ts`:
1. Truncate fields (name 120, business 80, city 120, phone 40, email 120, message 2000).
2. Honeypot field `company`: if filled, silently returns `{ok: true}`.
3. Validate name ≥ 2 chars, business present, phone 8–15 digits (regex). Email is **not** validated server-side.
4. In parallel: `saveEnquiry` (Supabase `crm.enquiries`, only if the service-role key exists) and `notifyTeam` (Telegram).
5. Returns 502 only if both fail.

| Integration | Status |
|---|---|
| Telegram Bot API | **Live path.** HTML message, plain-text fallback. In production, missing token/chat id makes `notifyTeam` throw (502 unless Supabase saved it). |
| Supabase `crm.enquiries` | Code present; inactive until `SUPABASE_SERVICE_ROLE_KEY` is set. Migration not confirmed run on a real project (per `docs/supabase-migration-plan.md`). |
| WhatsApp | `wa.me` click-to-chat links only (`lib/whatsapp.ts`, floating button). No WhatsApp API, no automation. Number is in `data/home.ts`. |
| Email service | **None** (no Resend, SendGrid, SMTP or nodemailer). Enquiry emails are not sent. |
| Google Analytics 4 | **Not present.** |
| Meta Pixel | **Not present.** |
| Other analytics (Vercel Analytics, Speed Insights, Clarity, Plausible, Hotjar) | **Not present.** |
| Payment gateway | **None** (no Razorpay, Stripe, Cashfree). |
| Captcha (Turnstile, reCAPTCHA, hCaptcha) | None. |
| Sanity | Content API (CDN, read, published perspective), Studio, webhook. |

---

## 8. Backend

| Item | Status |
|---|---|
| API routes | 2: `/api/enquiry`, `/api/revalidate`. Plus route handlers for `llms.txt` and `llms-full.txt`. |
| Server actions | None (`"use server"` not used). |
| Database | **Supabase Postgres, prepared but not active.** `supabase/migrations/0001_…sql` (schemas `catalog`, `content`, `crm`, with grants and RLS); `drafts/0002_commerce_inventory.draft.sql` (commerce/inventory sketch); `scripts/seed-supabase.ts`; parked replacement libs in `supabase/reference/`. `lib/supabase/client.ts` returns `null` when env vars are absent. Product and blog reads still come from Sanity. |
| ORM | None (raw `supabase-js` client). |
| Auth | None in the app. Studio login is handled by Sanity. No user accounts. |
| Admin panel | **Sanity Studio at `/studio`**: all products, products by category, blog posts, authors, plus Vision (GROQ). Schemas: `product` (253 lines), `post`, `author`. Access control is Sanity project membership, which was not inspected. |
| Middleware / proxy | None (`middleware.ts` and `proxy.ts` absent). |
| Scripts | `import-content.ts`, `seed-supabase.ts`, `create-revalidate-webhook.mjs`, and `generate_excel.py` (builds a spreadsheet from an embedded list of third-party fitness clubs with names, emails and phone numbers; unrelated to the site). |

---

## 9. Infrastructure

| Item | Status |
|---|---|
| `vercel.json` | None. |
| `next.config.ts` | Image formats AVIF/WebP; `remotePatterns` for `greenpulsewellness.com`, `*.greenpulsewellness.com`, `img.icons8.com`, `cdn.sanity.io` (project-scoped path); `allowedDevOrigins` for `*.trycloudflare.com`, `*.ngrok-free.app`, `localhost` (dev tunnels only). No headers, redirects, rewrites or custom `cacheLife`. |
| Env var names (`.env.example` / `.env.local`) | `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_REVALIDATE_SECRET`, `SANITY_API_WRITE_TOKEN`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `REVALIDATE_SECRET`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`. `.env.local` contains the same 11 names. `.env.local` is gitignored and was never committed. |
| Env vars set in Vercel | Not checked. |
| Cron jobs | None (`vercel.json` absent, no cron routes). |
| Edge / middleware | None. All routes use the default Node runtime. |
| Image optimization | `next/image` with AVIF/WebP. External non-Sanity URLs bypass optimization (`skipImageOptimization`). |
| Caching | Sanity fetches: `next.revalidate = 60` with tags `products` and `blog`, plus `useCdn: true`. On-demand invalidation through the webhook. `llms.txt` route sends `Cache-Control: public, max-age=3600, s-maxage=86400`. |
| Cloudflare | No Cloudflare config in the repo. |
| Domain | `https://greenpulsewellness.com` is hardcoded in `layout.tsx`, `sitemap.ts`, `robots.ts`, `llms*.txt` and the `next.config` image patterns. No domain notes in the repo. |
| Git remote | `github.com/anasaran05/gpw-website`. |

---

## 10. Security

| Check | Result |
|---|---|
| Security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) | **None set in code** (no `headers()` in config, no middleware). Whatever Vercel or Cloudflare add was not verified. |
| CSP | None. |
| Input validation | Client-side validation on all forms. Server-side: length caps plus name, business and phone checks. No server-side email check. Free-text fields go to Telegram escaped for HTML. |
| Rate limiting | **None** on `/api/enquiry`. |
| Spam protection | Honeypot only. No captcha, no origin or referer check. Each valid POST triggers a Telegram message. |
| Logging of personal data | `notifyTeam` does `console.info` with the full enquiry (name, phone, email, message) on every submission. It lands in platform logs. |
| Exposed keys | **Telegram bot token and chat id committed** in `.env.example` (Section 0 #1). Supabase project URL is also committed (public by design, not a secret). A pattern scan of tracked source found no other keys. `.env.local` never entered git history. |
| `/api/revalidate` | HMAC signature verified with `parseBody`; invalid or missing signature returns 401. |
| Studio | `/studio` is publicly reachable; protected by Sanity login. `robots` disallows it. |
| Sanity dataset | Readable without a token (the public queries in this audit worked). Intended for published content. |
| Public files | `public/LIBRARY/` supplier material and internal docs are web-accessible (Section 0 #2). |
| Supabase RLS | Written in the migration (anon read of published rows; `crm` service-role only). Not applied to a real project. |
| `npm audit` | **21 total: 11 high, 10 moderate, 0 critical.** `--omit=dev` gives the same 21 because `sanity` is a runtime dependency. |

`npm audit` details (direct dependencies and the notable highs):

| Package | Severity | Note | Fix offered |
|---|---|---|---|
| `next` 16.3.6 | high (direct) | Range 16.0.0–16.3.7. Advisories: `use cache` fill can leak Draft Mode content (GHSA-3w37-wq28-93x7); cache poisoning of SSG/ISR pages in **self-hosted** deployments (GHSA-4jqv-mc3x-m676). | Newer `next` patch (non-breaking) |
| `sharp` | high | `<0.35.5`, librsvg CVE (GHSA-wq5f-xc86-pv6w), pulled in by `next` | `npm audit fix` |
| `sanity`, `next-sanity`, `@sanity/vision` | moderate (direct) | Carry the transitive highs below | `--force` suggests `sanity@5.14.1` (a **downgrade**/breaking change; do not apply blindly) |
| `braces`, `micromatch`, `fast-glob`, `globby`, `chokidar`, `smol-toml`, `js-yaml`, `@sanity/cli`, `@sanity/codegen` | high (transitive) | DoS and prototype-pollution class issues in tooling packages reached through `sanity` | Same as above |
| `uuid`, `sprintf-js`, `argparse`, `typeid-js` | moderate (transitive) | | Same |

Which advisories reach the deployed runtime vs only build/CLI tooling has not been analysed. The Next cache-poisoning advisory is stated as applying to self-hosted setups.

---

## 11. Performance

| Item | Observation |
|---|---|
| Image handling | `next/image` used in 18 files; 4 raw `<img>` tags. 7 `unoptimized` usages (external URLs, `loop-art`). `priority` set on hero/LCP images in 8 components. |
| Public asset weight | `public/` is **478 MB** (315 files); the `.git` directory is 413 MB. `catalog-images` 186 MB, `LIBRARY` 177 MB, `GPW Product mockup` 77 MB. |
| Oversized sources | 76 non-LIBRARY images/videos over 1 MB. Examples: `catalog-images/hbot-nextme-cube.png` 12 MB, `icebath-yg-round.png` 11 MB, `cryome-icechill-chamber.png` 8.5 MB, several 3–5 MB PNGs. They are optimised on demand by `next/image`, but the originals are large for the optimizer and for any unoptimized use. Hero PNGs at the root (`wellness.png`, `vitality.png`, `longivity.png`, `performance.png`) are 1.9–2.5 MB each. |
| Lazy loading | `lazy-video.tsx` (IntersectionObserver, `preload="none"`), one `loading="lazy"`, default `next/image` lazy loading. **No `next/dynamic` usage**, so no explicit code splitting of the WebGL gallery, shader cards or preloader. |
| Client JS | 52 client components. Heavy client pieces on the home page: raw-WebGL gallery, shader cards, `motion`, Lenis, preloader. |
| Data passed to client | Root layout awaits `getProducts()` and passes all 62 products into `ProductsProvider` (a client context) on every page. |
| HTML size (dev) | `/` 246 KB, `/blog` 169 KB, a product page 160 KB. Dev-mode figures, indicative only. |
| Fonts | Three Google fonts via `next/font` (self-hosted at build), `display: swap`. |
| Likely Core Web Vitals risks (inference, not measured) | LCP: full-bleed hero with WebGL gallery behind an entry preloader, plus multi-MB source images. INP/TBT: smooth-scroll library plus several WebGL/animated sections. CLS: media frames use fixed aspect ratios (lower risk). |

---

## 12. Size and effort

### Code size (tracked files, excluding `package-lock.json` and `public/`)

| Type | Files | Lines |
|---|---|---|
| `.tsx` | 82 | 12,707 |
| `.ts` | 44 | 11,142 |
| `.sql` | 2 | 511 |
| `.md` | 4 | 317 |
| `.py` | 1 | 263 |
| `.css` | 1 | 141 |
| `.json` | 3 | 85 |
| `.mjs` | 2 | 77 |
| **Total tracked files (incl. `public/`)** | **411** | |

By directory: `app` 24 files / 2,784 lines; `components` 66 / 10,414; `data` 13 / 9,082; `lib` 11 / 580; `sanity` 6 / 440; `scripts` 4 / 687; `supabase` 5 / 828; `docs` 1 / 206.

At audit time, 13 tracked files had uncommitted changes and `components/ui/loop-art.tsx`, `public/loop-mark.svg` and `public/loop/` were untracked.

### Git

| Item | Value |
|---|---|
| Commits | **8**, one author (`zaneproed`) |
| Date range | 2026-09-27 to 2026-10-18 (commits on 09-27 ×2, 09-28 ×2, 10-17 ×3, 10-18 ×1) |
| Largest commit | `0796dee` (10-17): 322 files, +271,823 lines (bulk asset import) |
| Commit messages | Mostly "updated files" (5 of 8) |

### Estimated developer hours (estimate, not logged time)

Basis: roughly 24k lines of TS/TSX at mixed design-heavy and data-heavy density, plus asset and content work.

| Area | Est. hours |
|---|---|
| Design system, layout, nav/footer, home page, animations (WebGL gallery, shaders, preloader, smooth scroll) | 110 |
| Product catalogue + product detail templates + enquiry drawer | 45 |
| Product data entry (62 products, detail content, specs, FAQs), image sourcing/processing | 70 |
| Solutions pages and combos (30 combos) | 30 |
| About, contact and 5 legal pages | 20 |
| Blog system (schemas, templates, article renderer, 6 posts) | 30 |
| Sanity Studio setup, import script, webhook, revalidation | 20 |
| SEO / AEO (metadata, JSON-LD, sitemap, robots, llms files) | 20 |
| Enquiry API, Telegram, WhatsApp | 12 |
| Supabase groundwork (migrations, seed, reference code, plan doc) | 25 |
| Deploy prep, QA, fixes | 15 |
| **Total** | **~397** |

---

## 13. Pending work

### Unfinished or placeholder

- Contact data placeholders in `data/home.ts`: studio address (`TODO`), email "placeholder — confirm", and a "confirm highlights with the supply team" TODO.
- 28 of 62 products have no image.
- Newsletter form is non-functional.
- Product-type categories "Wellness & Recovery Technology" and "Rehabilitation & Physical Therapy" are defined but empty.
- Supabase layer built but not activated. Commerce/inventory SQL is a draft that needs business review.
- Sanity webhook to `/api/revalidate` not confirmed. Without it, edits take up to 60 s to appear.
- `MEDIA_NEEDED.md` lists media slots still to supply.

### Security fixes required before launch

1. Revoke and regenerate the Telegram bot token; blank the values in `.env.example`; decide whether to purge git history.
2. Remove `public/LIBRARY/`, the master-context `.md` and the combo CSV from `public/` (and from git history, given they are already committed).
3. Resolve the `robots.txt` / `llms.txt` / `llms-full.txt` duplicates (keep one source for each).
4. Add rate limiting and a stronger spam control to `/api/enquiry`; add server-side email validation; stop logging full enquiry contents.
5. Fix the product drawer and solution modal to check `res.ok`.
6. Update `next` to a patched version; run `npm audit fix` for `sharp`; review the Sanity dependency chain without applying the downgrade suggested by `--force`.
7. Add security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, frame protections), in config or at Cloudflare.

### SEO / content fixes

- Remove the duplicate brand suffix in titles.
- Complete `Product` offers (or drop `offers`); fix the "Commercial Pricing" wording.
- Add `FAQPage` schema to product, solution and about pages; add `BreadcrumbList` to products and posts.
- Use real `lastModified` values in the sitemap.
- Add favicon/apple-touch/manifest; confirm OG image dimensions.

### Optimization

- Compress or resize the 76 images over 1 MB (largest 12 MB); consider keeping originals outside `public/`.
- Lazy-load the WebGL gallery and shader cards with `next/dynamic`.
- Stop sending the full 62-product list through the root layout context to every page.
- Add `loading.tsx`, `error.tsx`, `not-found.tsx`, and a lint/test script.
- Consider a `publishedAt <= now()` filter for scheduled posts.

---

## 14. Not built (absent from the code)

| Feature | Status |
|---|---|
| Google Analytics 4 | Absent |
| Meta Pixel / conversion tracking | Absent |
| Any analytics or speed-monitoring script | Absent |
| Payments / checkout / cart / orders | Absent (only a draft SQL sketch) |
| Prices on any product | Absent |
| Email sending (enquiry confirmation, notifications) | Absent |
| Enquiry **instant alert** | **Present** via Telegram (not in the maintenance terms' delivered list) |
| Enquiry storage | **Dormant**: Supabase code exists, inactive until the service-role key is set |
| Admin dashboard | **Partially present**: Sanity Studio for products and blog posts. No enquiry dashboard, no order management. |
| Database | **Prepared, not live** (Supabase) |
| WhatsApp API / enquiry automation | Absent (click-to-chat link only) |
| Customer reviews / testimonials section | Absent |
| User accounts / login for site visitors | Absent |
| Blog automation / AI generation / scheduled posts / cron | Absent |
| Working newsletter | Absent (fake form) |
| Rate limiting, captcha, CSP / security headers | Absent |
| Middleware / edge logic | Absent |
| Multilingual / hreflang | Absent |
| Tests, lint, CI config | Absent |
| Cloudflare or Vercel config files | Absent |

**Differences against the "Website Maintenance & Future Development Terms" (dated 2026-10-19)**

| Terms statement | Code reality |
|---|---|
| "31 product pages" | 62 products and 62 generated product routes |
| Admin dashboard and database not part of delivery | Sanity Studio admin exists; Supabase schema and wiring exist but are inactive |
| Enquiry alerts not part of delivery | Telegram alerts are implemented |
| Blog system delivered; "advanced blog automation" optional | Blog is a manual Sanity workflow; no automation |
| Google Analytics, Meta Pixel not part of delivery | Confirmed absent |
| Payments not part of delivery | Confirmed absent |

---

## One-page summary

| Area | What exists | Est. hours | Pending |
|---|---|---|---|
| Stack | Next 16.3.6, React 19.3, TS strict, Tailwind 4, Sanity 6, Supabase client; 8 commits | n/a | Patch `next`/`sharp`; no lint/test/engines |
| Pages and routes | 11 static pages, 3 dynamic templates (62 products, 4 solutions, 6 posts), Studio, 2 APIs, sitemap | 50 (about, contact, legal, solutions, combos) | No `loading`/`error`/`not-found`; robots and llms route conflicts |
| Products | 62 products in Sanity (+ local fallback), 6 categories, 12 sub-categories; search and filters; related products; 30 combos | 70 (data) + 45 (templates) | 28 products lack images; no prices; 2 empty categories |
| Components | 66 component files, 52 client; WebGL gallery, shader cards, preloader, Lenis | 110 | Code splitting; heavy client JS |
| Blog | Sanity-managed, 6 posts, 3 authors, TOC, takeaways, related equipment; webhook revalidation | 30 | No automation, scheduling or cron; fake newsletter; webhook not verified |
| SEO / AEO | Metadata, OG, 20+ schema types, sitemap (82 URLs), robots, llms.txt, home `FAQPage` | 20 | Duplicate title suffix; incomplete `Product` offers; no FAQ/breadcrumb schema on products; robots/llms 500 in dev |
| Forms and integrations | 4 live enquiry entry points to one API; Telegram alerts; WhatsApp links; Supabase save (dormant) | 12 | 2 forms ignore failures; no email, GA4, Meta Pixel, payments |
| Backend | 2 API routes, Sanity Studio admin, Supabase schema/seed/RLS prepared | 20 (Sanity) + 25 (Supabase) | Activate or drop Supabase; no enquiry dashboard; no auth beyond Sanity |
| Infrastructure | `next.config` image config; ISR 60 s + tag revalidation; no `vercel.json`, cron, middleware or Cloudflare config | 15 | Verify Vercel env vars, webhook, domain and Cloudflare outside repo |
| Security | Honeypot, HMAC-verified revalidate hook, HTML-escaped Telegram text, `.env.local` ignored | n/a | **Telegram token in git**; public supplier files; no rate limit, no headers/CSP; 21 audit findings (11 high) |
| Performance | `next/image` AVIF/WebP, lazy video, `next/font` | n/a | 76 images over 1 MB (up to 12 MB); 478 MB `public/`; no dynamic imports; all products sent to client on every page |
| **Total** | 24k lines TS/TSX, 9k lines data, 411 tracked files | **~397** | Items in Sections 0 and 13 |
