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

Why now: the GreenPulse Blog Programme (about 30 articles a month, scheduled one per day) writes drafts
straight into `content.blog_posts` with a future `published_at`, the same pattern as the ZaneProEd pipeline.

## 1. Decisions so far

| Decision | Choice | Why |
|---|---|---|
| Content source today | **Sanity** (unchanged) | Hand-curated products and a Studio UI the team can use. No reason to rush. |
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
   resolved against the live catalog in code ([supabase/reference/lib-blog.ts](../supabase/reference/lib-blog.ts)).
   Foreign keys across schemas are fine in Postgres; only the API embedding is limited.
4. **Client usage:** `db.schema("catalog").from("products")`.
5. If you later adopt the Supabase CLI, list the schemas under `[api] schemas` in `supabase/config.toml`.

## 3. What is already built

| File | Role | State |
|---|---|---|
| [supabase/migrations/0001_schemas_catalog_content_crm.sql](../supabase/migrations/0001_schemas_catalog_content_crm.sql) | Phase 1 schema, grants, RLS | Ready. Validated in a local Postgres: runs, re-runs cleanly, anon can read only published rows and cannot touch `crm`. **Not yet run on a real Supabase project.** |
| [supabase/migrations/drafts/0002_commerce_inventory.draft.sql](../supabase/migrations/drafts/0002_commerce_inventory.draft.sql) | E-commerce design sketch | Draft. Applies cleanly on top of 0001 but needs a business review before use (see §7). |
| [scripts/seed-supabase.ts](../scripts/seed-supabase.ts) | Loads authors, products, posts from `data/` | Ready. `npm run seed:supabase -- --dry` works. Default never overwrites existing rows; `--force` does. |
| [supabase/reference/lib-products.ts](../supabase/reference/lib-products.ts) | Supabase version of `lib/products.ts` | Parked. Typechecked, not imported. |
| [supabase/reference/lib-blog.ts](../supabase/reference/lib-blog.ts) | Supabase version of `lib/blog.ts` | Parked. |
| [supabase/reference/api-revalidate-route.ts](../supabase/reference/api-revalidate-route.ts) | Supabase webhook version of `app/api/revalidate/route.ts` | Parked. |
| [lib/supabase/client.ts](../lib/supabase/client.ts) | Public (anon) and admin (service-role) clients; cache tags | Live but dormant: returns `null` when env vars are absent. |
| [lib/enquiry-store.ts](../lib/enquiry-store.ts) + [app/api/enquiry/route.ts](../app/api/enquiry/route.ts) | Saves enquiries to `crm.enquiries` | Live but dormant: does nothing until `SUPABASE_SERVICE_ROLE_KEY` is set. Behaviour is identical to before while it is unset. |

The live `lib/products.ts`, `lib/blog.ts` and `app/api/revalidate/route.ts` are the original Sanity versions.

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

### Phase 2b: backups (before cutover)
Once content lives in the database, edits are no longer in git history, and the free Supabase plan has no
backups. The maintenance plan promises that any earlier version can be restored.

**Chosen (2026-11-11): nightly JSON export to a private GitHub repo.** Not a branch of `gpw-website`: that repo
is public, and a backup there would publish draft posts and hidden products. A private repo also avoids
GitHub switching off scheduled jobs after 60 quiet days (public repos only).

How it works: at 02:00 IST a GitHub Action in the private repo fetches
[scripts/backup-content.mjs](../scripts/backup-content.mjs) from `gpw-website`, dumps `catalog` and `content`
(drafts included, `crm` excluded: it is customers' personal data) to `data/<schema>/<table>.json`, and commits
only if something changed. One commit = one night's content edits; a failed run emails the repo owner. The
daily query should also stop the free project pausing for inactivity. Uses ~1 Actions minute a night.

Setup (needs someone with admin on the `greenpulsewellness` GitHub account):
- [ ] Create a **private** repo `greenpulsewellness/gpw-content-backups` (with a README so it has a `main`).
- [ ] Settings → Secrets and variables → Actions: add `SUPABASE_URL` (`https://dfiahrijuefewsprcfys.supabase.co`)
      and `SUPABASE_SERVICE_ROLE_KEY` (the `sb_secret_…` key from `.env.local`).
- [ ] Copy [supabase/backup/nightly-content-backup.yml](../supabase/backup/nightly-content-backup.yml) to
      `.github/workflows/nightly-content-backup.yml` in that repo.
- [ ] Actions → *Nightly content backup* → **Run workflow**; confirm a commit with `data/` appears.

Note: the job runs whatever `scripts/backup-content.mjs` is on `gpw-website` main with the service key, so treat
changes to that file like any change that touches production credentials.

Restoring (run from this repo, with `.env.local` in place):
```bash
git clone https://github.com/greenpulsewellness/gpw-content-backups.git ../gpw-content-backups
git -C ../gpw-content-backups checkout <commit>      # the night to go back to; `git log -- data/` lists them
npm run restore:content -- ../gpw-content-backups/data                                   # preview
npm run restore:content -- ../gpw-content-backups/data --apply --only content.blog_posts # write one table
```
Restore upserts rows by primary key; it does not delete rows created after the backup (remove those by hand).
Tested 2026-11-11: two backups in a row are byte-identical, and a changed row was put back exactly.

Upgrade path: Supabase Pro (~US$25/month, daily backups + point-in-time recovery), paid by GreenPulse Wellness,
only with their written approval. The JSON export stays useful either way as readable history.

### Phase 3: cut over reads
See the [runbook](#cutover-runbook). Reversible by restoring three files.

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

Prerequisites: Phases 1 and 2 done.

```bash
# 1. Swap the data layer to Supabase
cp supabase/reference/lib-products.ts          lib/products.ts
cp supabase/reference/lib-blog.ts              lib/blog.ts
cp supabase/reference/api-revalidate-route.ts  app/api/revalidate/route.ts

# 2. Check
npx tsc --noEmit
npm run dev        # visit /products, /products/<any>, /blog, /blog/<any>, /sitemap.xml
npm run build
```

3. In Supabase → Database → Webhooks, create a webhook on tables `products`, `blog_posts`, `authors`
   (insert/update/delete): `POST https://<domain>/api/revalidate`, header `x-revalidate-secret: <REVALIDATE_SECRET>`.
4. Deploy a Vercel preview with the env vars, verify, then promote to production.
5. Edit a product row in Supabase and confirm the live page updates within seconds.

**Rollback:** `git checkout HEAD -- lib/products.ts lib/blog.ts app/api/revalidate/route.ts` and redeploy.
Sanity data is never written to by this migration, so it is intact until Phase 6.

**Side effect to expect:** the cutover reads `status = 'published'` only. Anything still in Sanity but not
seeded will disappear from the site, so complete Phase 2's "export from Sanity" check first.

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
# Phase 4+
R2_ACCOUNT_ID= R2_ACCESS_KEY_ID= R2_SECRET_ACCESS_KEY= R2_BUCKET= NEXT_PUBLIC_CDN_URL=
```
