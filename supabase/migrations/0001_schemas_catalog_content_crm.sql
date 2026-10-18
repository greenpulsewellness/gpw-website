-- GreenPulse Wellness — Phase 1 schema: catalog · content · crm
-- See docs/supabase-migration-plan.md for the architecture and the run order.
--
-- Run once in the Supabase dashboard: SQL Editor → New query → paste → Run.
-- Safe to re-run: every statement is idempotent.
--
-- AFTER running: Project Settings → Data API → "Exposed schemas" → add
--   catalog, content, crm
-- Without that, supabase-js calls like db.schema("catalog") fail with "schema not found".

-- ---------------------------------------------------------------------------
-- Schemas — one per business domain, so commerce/inventory can be added later
-- (see supabase/migrations/drafts/) without touching these.
-- ---------------------------------------------------------------------------

create schema if not exists catalog;   -- what we sell: products (variants, pricing come later)
create schema if not exists content;   -- editorial: authors, blog posts, generator state
create schema if not exists crm;       -- inbound: enquiries today, quotes later (private)

-- Shared trigger function (returns `trigger`, so it cannot be called as an API route).
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ===========================================================================
-- catalog
-- ===========================================================================

-- Mirrors Product (data/home.ts) + ProductDetail (data/products-data.ts).
create table if not exists catalog.products (
  id                    text primary key,    -- URL slug: /products/<id>
  name                  text not null,
  category              text not null,
  modality              text not null,
  sub_category          text,
  brand                 text,
  description           text not null default '',
  tiers                 text[] not null default '{}',
  specs                 text[] not null default '{}',   -- 2–3 tags shown on cards
  sort_order            integer not null default 9999,
  status                text not null default 'published' check (status in ('draft', 'published')),

  -- Media: { "url": "...", "alt": "..." }; gallery is an array of the same shape.
  -- `url` holds either a /public path today or a CDN URL (R2) later.
  image                 jsonb,
  gallery               jsonb not null default '[]'::jsonb,

  -- Detail page content. Null/empty means "use the handcrafted fallback in code".
  subtitle              text,
  tagline               text,
  overview              text[] not null default '{}',
  mechanism_of_action   jsonb,               -- { heading, description, points[] }
  features              jsonb not null default '[]'::jsonb,
  benefits              jsonb not null default '[]'::jsonb,
  spec_groups           jsonb not null default '[]'::jsonb,
  whats_included        text[] not null default '{}',
  protocol              jsonb,
  suitable_environments jsonb not null default '[]'::jsonb,
  faqs                  jsonb not null default '[]'::jsonb,
  related_product_ids   text[] not null default '{}',

  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);

create index if not exists products_status_sort_idx on catalog.products (status, sort_order, name);

-- ===========================================================================
-- content
-- ===========================================================================

create table if not exists content.authors (
  id          text primary key,              -- slug, e.g. "marcus-vance"
  name        text not null,
  role        text not null default '',
  avatar_url  text not null default '',
  bio         text not null default '',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Core wellness themes the automated generator writes clusters of articles for.
create table if not exists content.blog_pillars (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique,
  title            text not null,
  description      text not null default '',
  target_audience  text not null default '',
  created_at       timestamptz not null default now()
);

create table if not exists content.blog_posts (
  id                  uuid primary key default gen_random_uuid(),
  slug                text not null unique,
  title               text not null,
  excerpt             text not null,
  category            text not null,
  published_at        date not null default current_date,
  read_time           text not null default '',
  cover_image         text not null default '',
  cover_alt           text not null default '',
  featured            boolean not null default false,
  tags                text[] not null default '{}',
  key_takeaways       text[] not null default '{}',
  sections            jsonb not null default '[]'::jsonb,   -- [{ id, heading, content[], callout? }]
  author_id           text references content.authors (id) on update cascade on delete set null,
  pillar_id           uuid references content.blog_pillars (id) on delete set null,
  cluster_keyword     text,
  -- Product slugs (catalog.products.id). Kept as text[] on purpose: PostgREST cannot embed
  -- across schemas, and the site already resolves these against the live catalog in code.
  related_product_ids text[] not null default '{}',

  -- Publishing workflow. Generated posts land as 'draft' until a human approves them.
  status              text not null default 'draft' check (status in ('draft', 'published')),
  seo_title           text,
  seo_description     text,

  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create index if not exists blog_posts_status_published_idx on content.blog_posts (status, published_at desc);
create index if not exists blog_posts_pillar_idx on content.blog_posts (pillar_id);

-- One row per generator run, for cost tracking and debugging.
create table if not exists content.generation_logs (
  id             uuid primary key default gen_random_uuid(),
  pillar_id      uuid references content.blog_pillars (id) on delete set null,
  post_id        uuid references content.blog_posts (id) on delete set null,
  topic_prompt   text not null,
  model          text,
  input_tokens   integer,
  output_tokens  integer,
  status         text not null default 'started' check (status in ('started', 'succeeded', 'failed')),
  error          text,
  created_at     timestamptz not null default now()
);

create index if not exists generation_logs_created_idx on content.generation_logs (created_at desc);

-- ===========================================================================
-- crm  (private: no anon access at all)
-- ===========================================================================

create table if not exists crm.enquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  business    text not null,
  city        text,
  phone       text not null,
  email       text,
  message     text,
  interest    text,
  source      text,
  status      text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'won', 'lost')),
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists enquiries_created_idx on crm.enquiries (created_at desc);
create index if not exists enquiries_status_idx on crm.enquiries (status, created_at desc);

-- ===========================================================================
-- updated_at triggers
-- ===========================================================================

drop trigger if exists products_set_updated_at on catalog.products;
create trigger products_set_updated_at before update on catalog.products
  for each row execute function public.set_updated_at();

drop trigger if exists authors_set_updated_at on content.authors;
create trigger authors_set_updated_at before update on content.authors
  for each row execute function public.set_updated_at();

drop trigger if exists blog_posts_set_updated_at on content.blog_posts;
create trigger blog_posts_set_updated_at before update on content.blog_posts
  for each row execute function public.set_updated_at();

drop trigger if exists enquiries_set_updated_at on crm.enquiries;
create trigger enquiries_set_updated_at before update on crm.enquiries
  for each row execute function public.set_updated_at();

-- ===========================================================================
-- Privileges — custom schemas get NO default grants in Supabase, so be explicit.
-- anon/authenticated: read-only on public-facing schemas. crm: service_role only.
-- ===========================================================================

grant usage on schema catalog, content, crm to service_role;
grant usage on schema catalog, content to anon, authenticated;

grant all on all tables    in schema catalog, content, crm to service_role;
grant all on all sequences in schema catalog, content, crm to service_role;
grant select on all tables in schema catalog, content to anon, authenticated;

-- Same grants for tables created by later migrations.
alter default privileges in schema catalog, content, crm grant all on tables    to service_role;
alter default privileges in schema catalog, content, crm grant all on sequences to service_role;
alter default privileges in schema catalog, content grant select on tables to anon, authenticated;

-- ===========================================================================
-- Row Level Security
-- Anon sees only published content. Anything without a policy is invisible to anon;
-- service_role bypasses RLS and is used server-side only.
-- ===========================================================================

alter table catalog.products       enable row level security;
alter table content.authors        enable row level security;
alter table content.blog_pillars   enable row level security;
alter table content.blog_posts     enable row level security;
alter table content.generation_logs enable row level security;   -- no policy: private
alter table crm.enquiries          enable row level security;   -- no policy: private

drop policy if exists "published products are public" on catalog.products;
create policy "published products are public" on catalog.products
  for select to anon, authenticated using (status = 'published');

drop policy if exists "authors are public" on content.authors;
create policy "authors are public" on content.authors
  for select to anon, authenticated using (true);

drop policy if exists "pillars are public" on content.blog_pillars;
create policy "pillars are public" on content.blog_pillars
  for select to anon, authenticated using (true);

drop policy if exists "published posts are public" on content.blog_posts;
create policy "published posts are public" on content.blog_posts
  for select to anon, authenticated using (status = 'published');
