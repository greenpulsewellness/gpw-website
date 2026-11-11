-- GreenPulse Wellness — 0002: blog SEO fields, topic clusters, scheduled publishing, hardening.
-- Run after 0001. Safe to re-run: every statement is idempotent.
--
-- Why:
-- 1. The local blog (data/blog-posts) carries fields 0001 had no columns for: target keywords,
--    hand-picked related posts, "People also ask" FAQs (rendered + FAQPage structured data), and the
--    topic cluster / pillar-guide links. Seeding without them would drop those features at cutover.
-- 2. Topic clusters map onto content.blog_pillars (one row per cluster: heat, cold, light, ...).
--    blog_posts.pillar_id says which cluster a post belongs to; is_pillar marks the cluster's guide.
-- 3. Scheduled posts: a post marked 'published' with a future published_at stays hidden from the public
--    API until that date, matching the Sanity query this replaces.
-- 4. Pins set_updated_at's search_path (Supabase security advisor: function_search_path_mutable).

-- ---------------------------------------------------------------------------
-- content.blog_pillars: the category each cluster files its posts under
-- ---------------------------------------------------------------------------

alter table content.blog_pillars
  add column if not exists category text not null default '';

-- ---------------------------------------------------------------------------
-- content.blog_posts: SEO and internal-linking fields
-- ---------------------------------------------------------------------------

alter table content.blog_posts
  add column if not exists keywords      text[]  not null default '{}',   -- <meta keywords> + structured data
  add column if not exists related_slugs text[]  not null default '{}',   -- hand-picked "Continue reading", in order
  add column if not exists faqs          jsonb   not null default '[]'::jsonb,   -- [{ question, answer }]
  add column if not exists is_pillar     boolean not null default false;  -- the cluster's pillar guide

-- At most one pillar guide per cluster.
create unique index if not exists blog_posts_one_pillar_per_cluster
  on content.blog_posts (pillar_id) where is_pillar;

-- ---------------------------------------------------------------------------
-- Scheduled publishing: published AND dated today or earlier.
-- ---------------------------------------------------------------------------

drop policy if exists "published posts are public" on content.blog_posts;
create policy "published posts are public" on content.blog_posts
  for select to anon, authenticated
  using (status = 'published' and published_at <= current_date);

-- ---------------------------------------------------------------------------
-- Hardening
-- ---------------------------------------------------------------------------

alter function public.set_updated_at() set search_path = '';
