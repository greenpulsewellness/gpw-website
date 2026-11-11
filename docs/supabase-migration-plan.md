# Supabase migration plan

**Status (2026-10-18):** Sanity is the live source for products and blog posts. Everything needed to move to
Supabase is built and parked in this repo, but nothing is switched on. Migrate whenever you decide to; the
steps are in [Cutover runbook](#cutover-runbook).

**Status (2026-11-11): migration started.**
- Supabase project `dfiahrijuefewsprcfys` created; keys are in `.env.local` using the new key format
  (`sb_publishable_…` in `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `sb_secret_…` in `SUPABASE_SERVICE_ROLE_KEY`).
  Both work with `supabase-js` as-is; the variable names were kept so no code changes are needed.
- Verified: the keys reach the project. The database is empty: `catalog`, `content`, `crm` don't exist yet.
- Supabase MCP server added to `.mcp.json` (project scope), so migrations and checks can be run from Claude Code
  after authenticating once with `claude /mcp` in a regular terminal.
- Ownership: the Supabase account was created through the GreenPulse Wellness GitHub account, so it belongs to
  the client, as the maintenance plan requires.
- Still to decide: how backups are handled (free plan has none; see Phase 2b).
- `0001` run manually in the SQL Editor; `catalog`, `content`, `crm` exposed. Verified over the API: anon and
  service role read `catalog`/`content`; anon gets "permission denied" on `crm`.
- Sanity export compared field by field against `data/` (see "Seed source" under Phase 2). Seed source: `data/`.
- `0002_blog_seo_fields_and_scheduling.sql` written: blog keywords/FAQs/related posts/clusters, scheduled
  publishing in RLS, `set_updated_at` search_path. Seed and parked `lib-blog.ts` updated to match.
- `0002` run manually; seeded. Verified with the public key: 63 products (3 hidden drafts invisible),
  30 posts, 7 pillars, 3 authors; every post has its author, cluster, keywords, FAQs and related posts.
  Next: Phase 1's env vars on Vercel + test enquiry, Phase 2b backup repo setup, then cutover (Phase 3).
- Backups decided: nightly JSON export to a private repo (Phase 2b). Scripts and job file are in this repo;
  the private repo still has to be created.

**Status (2026-11-11, later): blog cut over in code; products stay in code; no backups.**
- **Products are read from code (`data/`), not from Supabase or Sanity.** They change rarely, so they ship with
  each deploy: product pages are fully static and cost zero database egress. `catalog.products` stays seeded as
  a copy (refresh with `npm run seed:supabase -- --force` after editing `data/`); the site does not read it.
  Side effect: the 61 product pages that still showed the pre-2026-10-22 Sanity wording now show the corrected copy.
- **The blog is read from Supabase**, with every Phase 3a egress fix implemented and tested against the real
  database (`lib/blog.ts`, `app/api/revalidate/route.ts`, `vercel.json`). Falls back to `data/` if Supabase is
  unreachable or the env vars are missing, so deploying this is safe before the dashboard steps are done.
- **No nightly backup** (decided by the owner to keep egress down). The backup job, scripts and template were removed.
- Sanity is no longer read by the site. The Studio and packages remain until Phase 6.
- Remaining: dashboard steps in the [go-live checklist](#cutover-runbook).

Why now: the GreenPulse Blog Programme (about 30 articles a month, scheduled one per day) writes drafts
straight into `content.blog_posts` with a future `published_at`, the same pattern as the ZaneProEd pipeline.

## 1. Decisions so far

| Decision | Choice | Why |
|---|---|---|
| Content source (from 2026-11-11) | **Products: code (`data/`). Blog: Supabase.** | Products change rarely: static pages, zero egress. The blog programme writes to the database daily. |
| Backups | **None** (2026-11-11) | Owner's call, to keep egress down. Posts that also exist in `data/` can be re-seeded; database-only posts cannot. |
| Target database | **Supabase Postgres**, split into **one schema per business domain** | Commerce and inventory can be added later without reshaping blog/catalog tables. |
| Images | Stay as `/public` paths and Sanity CDN URLs for now; **Cloudflare R2** later | Image columns hold plain URLs, so R2 is a data change, not a schema change. |
| Enquiries | Saved to Supabase `crm.enquiries` as soon as env vars exist | Independent of the content migration; today `notifyTeam` throws in production, so enquiries can be lost. |
| Fallback | Local `data/*.ts` files remain the safety net | Site never renders empty if the database is down or empty. |

## 2. Target architecture

```
supabase (Postgres)
├── catalog      what we sell
│   ├── products              ← Phase 1  (mirrors Product + ProductDetail in code)
│   ├── product_variants      ← Phase E1 (SKU, price, tier)         [draft]
│   ├── categories            ← Phase E1                            [draft]
│   └── collections (+ collection_products)  ← Phase E1             [draft]
├── content      editorial
│   ├── authors               ← Phase 1
│   ├── blog_posts            ← Phase 1  (status: draft | published)
│   ├── blog_pillars          ← Phase 1  (used by the generator, Phase 5)
│   └── generation_logs       ← Phase 1  (used by the generator, Phase 5)
├── crm          inbound leads (private, service-role only)
│   ├── enquiries             ← Phase 1  (status: new → contacted → qualified → won/lost)
│   └── quotes (+ quote_items) ← Phase E2                           [draft]
├── commerce     customers, carts, orders, payments, shipments, discounts   [draft, Phase E2–E3]
└── inventory    locations, stock_levels                                    [draft, Phase E4]
```

**Dependency direction** (nothing in a lower layer points up): `content → catalog`, `crm → catalog`,
`commerce → catalog + crm`, `inventory → catalog`. `catalog` depends on nothing.

### Why separate schemas
- Each domain has its own grants and RLS, so public-facing data (`catalog`, `content`) and private data
  (`crm`, `commerce`, `inventory`) never share a permission model by accident.
- Domains can be dumped, restored or even moved to another database independently.
- The Supabase table editor groups tables by schema, which stays readable as the table count grows.

### Things to know about custom schemas (these are the sharp edges)
1. **Expose them.** Project Settings → Data API → *Exposed schemas* must list `catalog`, `content`, `crm`
   (and later `commerce`, `inventory`). Until then `supabase-js` returns "schema not found".
2. **No default grants.** Custom schemas start with none, which is why the migration grants explicitly.
   `anon` gets read-only on `catalog` and `content`; `crm` is service-role only.
3. **PostgREST cannot embed across schemas.** `select('*, author:authors(...)')` works within `content`,
   but not `content` → `catalog`. That is why `blog_posts.related_product_ids` is `text[]` (product slugs),
   resolved against the product catalogue in code ([lib/blog.ts](../lib/blog.ts)).
   Foreign keys across schemas are fine in Postgres; only the API embedding is limited.
4. **Client usage:** `db.schema("catalog").from("products")`.
5. If you later adopt the Supabase CLI, list the schemas under `[api] schemas` in `supabase/config.toml`.

## 3. What is already built

| File | Role | State |
|---|---|---|
| [supabase/migrations/0001_schemas_catalog_content_crm.sql](../supabase/migrations/0001_schemas_catalog_content_crm.sql) | Phase 1 schema, grants, RLS | Ready. Validated in a local Postgres: runs, re-runs cleanly, anon can read only published rows and cannot touch `crm`. **Not yet run on a real Supabase project.** |
| [supabase/migrations/drafts/0002_commerce_inventory.draft.sql](../supabase/migrations/drafts/0002_commerce_inventory.draft.sql) | E-commerce design sketch | Draft. Applies cleanly on top of 0001 but needs a business review before use (see §7). |
| [scripts/seed-supabase.ts](../scripts/seed-supabase.ts) | Loads authors, products, posts from `data/` | Ready. `npm run seed:supabase -- --dry` works. Default never overwrites existing rows; `--force` does. |
| [lib/products.ts](../lib/products.ts) | Products from `data/` only | Live (2026-11-11). No database or Sanity reads. |
| [lib/blog.ts](../lib/blog.ts) | Blog from Supabase: cached list + per-post detail, local fallback | Live (2026-11-11). Reads Supabase once the env vars are set on Vercel. |
| [app/api/revalidate/route.ts](../app/api/revalidate/route.ts) + [vercel.json](../vercel.json) | Supabase webhook (POST) and daily Vercel Cron (GET) | Live (2026-11-11). Needs `REVALIDATE_SECRET`, `CRON_SECRET` and the webhook. |
| [lib/supabase/client.ts](../lib/supabase/client.ts) | Public (anon) and admin (service-role) clients; cache tags | Live: returns `null` when env vars are absent. |
| [lib/enquiry-store.ts](../lib/enquiry-store.ts) + [app/api/enquiry/route.ts](../app/api/enquiry/route.ts) | Saves enquiries to `crm.enquiries` | Live but dormant: does nothing until `SUPABASE_SERVICE_ROLE_KEY` is set. Behaviour is identical to before while it is unset. |

The `supabase/reference/*` parked copies were removed once their Supabase versions went live (2026-11-11).

## 4. Phases

### Phase 0: now
Sanity live. Supabase artefacts parked. No action needed.

### Phase 1: Supabase project and enquiries (low risk, can be done on its own)
- [ ] Create the Supabase project (pick the region nearest your customers).
- [x] Run `0001_schemas_catalog_content_crm.sql` in the SQL Editor.
- [x] Run `0002_blog_seo_fields_and_scheduling.sql` in the SQL Editor.
- [x] Expose `catalog`, `content`, `crm` in the Data API settings.
- [ ] Add env vars locally and on Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
      `SUPABASE_SERVICE_ROLE_KEY`, `REVALIDATE_SECRET`.
- [ ] Submit a test enquiry; confirm a row appears in `crm.enquiries`.

Result: leads are stored even though content is still in Sanity.

### Phase 2: seed and verify content
- [x] `npm run seed:supabase -- --dry`, then `npm run seed:supabase` (2026-11-11).
- [x] Table editor shows **3** authors, **66** products (63 published, 3 hidden as draft), **7** pillars,
      **30** posts.
- [ ] Decide the seed source. The script reads local `data/`, which is what the Sanity import originally used.
      **If anyone has edited or added content in the Studio, those changes are not in `data/`.** In that case
      export from Sanity first (the dataset is public; fetch with the GROQ queries in `lib/products.ts` and
      `lib/blog.ts`) and extend the seed to read that export.

**Seed source (checked 2026-11-11): `data/`, not Sanity.** Export: 62 products, 6 posts, 3 authors, no drafts.
- Blog: the site reads `data/` (`USE_SANITY_BLOG = false`). Sanity's 6 posts are an older set that is not on
  the site; the site's 30 posts are not in Sanity. Seeding `data/` keeps the blog as it is today.
- Products: Sanity text was imported on 2026-10-17 and never edited since (the one later change, 2026-10-23,
  was an image patch, no text). `data/` was revised on 2026-10-22 (supplier model numbers and unverified
  claims such as "patented"/"VGB"/"Canadian" removed, specs corrected). **The live site still shows the
  older Sanity wording**, because Sanity wins over `data/` wherever it has a value. Seeding `data/` and
  cutting over fixes that; until then, 61 product pages show the pre-2026-10-22 copy.
- 4 products exist only in `data/` (the Cryo range and FrostFire wrap); the live site already merges them in.

### Phase 2b: backups — not used
**Decided 2026-11-11: no backups.** A nightly export was planned (JSON to a private GitHub repo) but dropped to
keep database egress down; its job file and the backup/restore scripts were removed (they are in git history,
commit 983bc10, if ever needed).

What this means:
- Products: safe. The source of truth is `data/` in git; `catalog.products` is only a copy.
- Blog posts that also exist in `data/blog-posts`: safe, re-seed with `npm run seed:supabase -- --force`.
- Posts that exist only in the database (the blog programme's output): **no copy**. A bad edit or deleted row
  cannot be undone. Mitigation when the programme starts: the generator can keep its own copy of each article it
  writes, or the client can upgrade to Supabase Pro (~US$25/month: daily backups + point-in-time recovery),
  paid by GreenPulse Wellness, only with their written approval.

### Phase 3: cut over reads
- [x] Products: switched to code only (`data/`). Nothing to do in Supabase.
- [x] Blog: `lib/blog.ts` reads Supabase with the Phase 3a fixes; `npm run build` passes against the real
      database (30 posts prerendered from Supabase).
- [ ] Dashboard steps: see the [go-live checklist](#cutover-runbook).

### Phase 3a: egress audit and fixes (implemented 2026-11-11)

**Goal:** database egress stays flat no matter how much traffic the site gets. Visitors are served pre-built
pages from Vercel; Supabase is read only when content changes (plus a small daily safety refresh).

#### Audit (2026-11-11, measured against the seeded database)

Who reads content: the site layout (every page: `getProducts` feeds the menu, footer, enquiry form and catalog),
`/products/[id]`, `/blog`, `/blog/[slug]`, `sitemap.xml`. All go through two cached queries in the parked files.

| Query in parked code | Raw size | gzip | Used for |
|---|---|---|---|
| `catalog.products select *` (63 rows) | 365 KB | 134 KB | everything, incl. card lists that need ~15% of it |
| product card columns only | 54 KB | 9 KB | what the layout, catalog, sitemap and related cards need |
| `content.blog_posts select *` + author (30 rows) | 249 KB | 102 KB | everything, incl. the list and sitemap |
| post list columns only | 24 KB | 7 KB | what `/blog`, related posts, pillar links and sitemap need |

Problems found:
1. **60-second refresh.** `CONTENT_REVALIDATE = 60` in `lib/supabase/client.ts` (Sanity today uses 24 h). In
   this Next.js version the shortest interval on a route wins, and the layout reads products, so *every page*
   becomes "refresh every minute while visited". Worst case with steady traffic: 1,440 refreshes/day × (365 +
   249) KB ≈ 0.9 GB/day ≈ 26 GB/month raw, against the free plan's 5 GB. Egress would scale with traffic.
2. **Over-fetching.** Every refresh downloads every product's full detail and every post's full body, although
   only one product/post page needs its body at a time.
3. **Blog cache will stop working as the programme grows.** Posts average ~8 KB; at ~30 a month the full post
   list passes 2 MB in about 8 months. Next.js's data cache refuses entries over 2 MB, so from then on *every*
   page render would query the database directly.
4. **Scheduled posts need a daily nudge.** With on-demand refresh only, a post scheduled for tomorrow would not
   appear until something else changes. The parked code also has no date filter of its own.
5. **Webhook noise.** Writing a draft (the generator does this daily) would refresh the live blog for nothing.
6. **Unknown URLs.** `/blog/<anything>` and `/products/<anything>` render on demand; a per-item query for a
   made-up slug would hit the database each time. Bots do this.

Already fine: product photos are served from `/public` (no Supabase Storage egress); enquiries are a single
small insert per submit, rate-limited (5 per 10 min per IP) with a honeypot; indexes exist for every query below.

#### Changes (all implemented 2026-11-11; products went further: read from code, zero egress)

Measured after implementation: post list 36 KB raw / 10 KB gzip for 30 posts (~1.2 KB a post, 2 MB reached at
~1,700 posts); one article 7.6 KB raw / 3 KB gzip.

| # | Change | Effect |
|---|---|---|
| 1 | Refresh on demand: cached queries use `revalidate: 86400` (24 h safety net, same as Sanity today) instead of 60 s; the webhook refreshes immediately after edits. | Reads depend on edits, not traffic. |
| 2 | Split each domain into a **list** query (card/list columns only, explicit `select`, not `*`) and a **detail** query cached **per item** (`product:<id>`, `post:<slug>` tags). Layout, catalog, sitemap, related cards, `generateStaticParams` use the list; only the detail page loads its own body. | A refresh moves ~80 KB instead of ~600 KB; editing one product re-reads ~60 KB. |
| 3 | `getPost(slug)` / `getProductWithDetail(id)` check the cached list first and only query the detail if the item exists. | Made-up URLs never reach the database. |
| 4 | Post list stays small as the blog grows (~0.8 KB per post vs ~8 KB with bodies). | 1,000 posts ≈ 0.8 MB: safely under the 2 MB cache limit for years. |
| 5 | Webhook handler: refresh `products` list + `product:<id>` (or `blog` list + `post:<slug>`) for the changed row only; **ignore** changes where the row is a draft before and after. | Daily drafts cost nothing; one edit = one list + one item re-read. |
| 6 | Daily Vercel Cron at 00:05 UTC (05:35 IST) calls `/api/revalidate` for the blog list, so scheduled posts go live on their date. RLS already hides them before then (0002); the list query adds the same date filter. | One ~25 KB read per day. |
| 7 | Keep fallbacks: on a database error the site uses `data/` and the error is not cached. | Never renders empty. |

Not changed now (noted for later): migrating `unstable_cache` to `'use cache'` (Next 16 recommends it, but it
needs `cacheComponents` and touches every page; do it separately). The layout ships all product cards to the
browser on every page (~50 KB of page weight, Vercel bandwidth rather than database egress); worth trimming
when the catalog grows.

#### Egress budget after the changes

| Source | Per month (raw, worst case) |
|---|---|
| Products | **0** (read from code, never from the database) |
| Daily safety refresh: post list (~36 KB) and, at most, every visited article (~8 KB each, 30 now) | ~8 MB |
| Blog edits: ~45 KB per published or edited post (list + that article) | < 2 MB at normal editing |
| Blog programme: 30 published posts a month (drafts and scheduled posts cost nothing) | ~1.5 MB |
| Deploys: each build prerenders every article once (~0.3 MB at 30 posts) | ~2 MB at ~6 deploys |
| **Total** | **~15 MB of the 5 GB free allowance (~0.3%)**, the same at 100 or 100,000 visits a day |

Growth: the list grows ~1.2 KB per post and each deploy re-reads every article, so at 1,000 posts expect
~60 MB/month (still ~1%). Free projects pause after a week with no activity; any daily visit to the blog
after the 05:35 IST refresh, or any enquiry, keeps it awake.

#### Verify after cutover
- [x] `npm run build` lists `/products/[id]` and `/blog/[slug]` as SSG (●), not dynamic (ƒ); products have no
      revalidate at all, blog and sitemap 1 day (checked locally 2026-11-11).
- [x] Locally against the real database: draft and future-dated webhooks ignored, product webhooks ignored,
      a live edit refreshes only `blog` + `post:<slug>`, `/blog/<made-up>` 404s without a query, `/blog` carries no
      article bodies.
- [ ] Supabase → Reports → API: request count stays flat while browsing many pages; rises by ~2 after one edit.
- [ ] Edit one live post: its page and `/blog` update on the next visits; other articles make no query.
- [ ] Save a draft post: no API requests from Vercel.
- [ ] Schedule a post for tomorrow (status `published`): hidden today, visible after 05:35 IST tomorrow.
- [ ] Usage → Egress after a week: well under 100 MB.

### Phase 4: images to Cloudflare R2
- [ ] Create the bucket, attach a custom domain (e.g. `cdn.<yourdomain>`), not the `r2.dev` URL.
- [ ] Script: download every image URL in `catalog.products.image/gallery`, `content.blog_posts.cover_image`,
      `content.authors.avatar_url`; resize/convert (WebP/AVIF) with `sharp`; upload with the S3 SDK using
      content-hashed names; rewrite the column values.
- [ ] Add the CDN host to `images.remotePatterns` in `next.config.ts`, and update `skipImageOptimization`
      in `lib/sanity/image.ts` (move it to `lib/images.ts` when Sanity is removed).
- [ ] Keep R2 write keys server-side only.

### Phase 5: automated blog generator
- [ ] Seed `content.blog_pillars`.
- [ ] Script/route that, per pillar and cluster keyword, generates an article, uploads its cover to R2, and
      inserts into `content.blog_posts` with `status = 'draft'`, logging tokens and errors to
      `content.generation_logs`.
- [ ] Human review step: a draft becomes `published` only after approval, then call `/api/revalidate`.
- [ ] Watch quality and volume: mass-produced thin articles risk Google's scaled-content spam policy.

### Phase 6: retire Sanity
Only after Phase 3 has run cleanly for a while and the team has another way to edit content (see §7).
- [ ] Remove `app/(studio)`, `sanity/`, `sanity.config.ts`, `sanity.cli.ts`, `lib/sanity/`,
      `scripts/import-content.ts`, `scripts/create-revalidate-webhook.mjs`, the `sanity` / `next-sanity` /
      `@sanity/*` packages, the `cdn.sanity.io` entry in `next.config.ts`, and the `SANITY_*` env vars.
- [ ] Do this as its own commit so it is easy to revert.

### Phase E1–E4: e-commerce (only when the business model is decided)
| Phase | Adds | Notes |
|---|---|---|
| E1 | `catalog.product_variants`, `categories`, `collections` | Variants map to the Essential/Pro/Signature tiers or model codes. `price_minor` null means "price on request". |
| E2 | `crm.quotes`, `quote_items`, `commerce.customers`, `addresses` | Quote-first fits high-ticket equipment: enquiry → quote → accepted → order. Supabase Auth for buyers. |
| E3 | `commerce.carts`, `orders`, `order_items`, `payments`, `shipments`, `discounts` | Orders snapshot name/SKU/price. Money is integer minor units. Payment webhooks write with the service role. |
| E4 | `inventory.locations`, `stock_levels` | Only if you hold stock; skip for made-to-order items. |

All four are sketched in [the draft](../supabase/migrations/drafts/0002_commerce_inventory.draft.sql).
Convert it to numbered migrations (`0002_…`, `0003_…`) per phase rather than running it whole.

## 5. Sanity → Supabase field mapping

| Sanity | Supabase |
|---|---|
| `product.slug.current` | `catalog.products.id` |
| `product.order` | `sort_order` |
| `product.image{alt, asset->url}` | `image` jsonb `{url, alt}` |
| `product.gallery[]` | `gallery` jsonb `[{url, alt}]` |
| `product.mechanismOfAction / features / benefits / specGroups / protocol / suitableEnvironments / faqs` | same-named snake_case jsonb columns |
| `product.relatedProducts[]->slug` | `related_product_ids text[]` |
| `post.slug.current` | `content.blog_posts.slug` |
| `post.publishedAt` | `published_at date` |
| `post.coverImage{alt, asset->url}` | `cover_image`, `cover_alt` |
| `post.author->` | `author_id` → `content.authors.id` |
| `post.sections[]` (`id.current`, heading, content, callout) | `sections` jsonb |
| `post.relatedEquipment[]->slug` | `related_product_ids text[]` |
| (none) | `status`, `seo_title`, `seo_description`, `pillar_id`, `cluster_keyword` are new |

## 6. Cutover runbook

The code is already switched (2026-11-11). Until the steps below are done the blog quietly uses `data/`.

1. **Vercel → Settings → Environment Variables** (Production and Preview):
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (values from
   `.env.local`), `REVALIDATE_SECRET` (any long random string), `CRON_SECRET` (another long random string).
   Redeploy after adding them.
2. **Supabase → Database → Webhooks → Create**: name `revalidate-blog`; table `content.blog_posts`; events
   insert, update, delete; type HTTP request, `POST https://www.greenpulsewellness.com/api/revalidate`;
   header `x-revalidate-secret: <REVALIDATE_SECRET>`. Repeat for `content.authors` and `content.blog_pillars`.
   **Do not** add one for `catalog.products` (the site doesn't read it).
3. **Vercel → Settings → Cron Jobs**: confirm `/api/revalidate` is listed at `5 0 * * *` (from `vercel.json`).
4. **sanity.io/manage → API → Webhooks**: delete the old revalidate webhook (it now gets 401s).
5. Check: edit a live post's excerpt in the table editor; `/blog` shows it on the second visit (first visit
   triggers the rebuild). Then run the "Verify after cutover" list in Phase 3a.

**Rollback:** `git revert` the cutover commit and redeploy (Sanity data is untouched until Phase 6). Or, for the
blog only, remove `NEXT_PUBLIC_SUPABASE_URL` on Vercel and redeploy: the blog falls back to `data/`.

## 7. Open decisions (needed before E1+)

1. **How will the team edit content after Sanity?** Supabase's table editor is functional but not a CMS.
   Options: keep Sanity for authoring and sync into Supabase, build a small `/admin`, or accept the table editor.
   This is the main reason to delay Phase 6.
2. **Pricing model.** Public list prices, "price on request", or quote-only? Drives `product_variants` and
   whether a cart makes sense at all.
3. **Currency and tax.** The draft assumes INR and integer minor units; confirm, and decide how GST is
   calculated and shown.
4. **Payment provider.** Needed before `commerce.payments` is finalised (the draft is provider-agnostic).
5. **Guest checkout?** The draft allows guest carts (`customer_id` null) but orders need a customer or an
   email snapshot; settle this with the checkout design.
6. **Region and backups.** Free-tier projects pause after a week of inactivity and have no backups; a live
   store should be on a paid plan.

## 8. Environment variables

```env
# Phase 1+
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>          # public; RLS limits it to published content
SUPABASE_SERVICE_ROLE_KEY=<service role key>      # server only; never NEXT_PUBLIC_, never in client code
# Phase 3+
REVALIDATE_SECRET=<random string>                 # same value in the Supabase webhook header
CRON_SECRET=<random string>                       # Vercel sends it to /api/revalidate on the daily cron
# Phase 4+
R2_ACCOUNT_ID= R2_ACCESS_KEY_ID= R2_SECRET_ACCESS_KEY= R2_BUCKET= NEXT_PUBLIC_CDN_URL=
```
