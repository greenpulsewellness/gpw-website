import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import {
  BLOG_POSTS,
  getPillarPost,
  pickRelatedPosts,
  type BlogAuthor,
  type BlogCluster,
  type BlogPost,
  type BlogPostSummary,
} from "@/data/blog";
import { getProducts } from "@/lib/products";
import { BLOG_POSTS_TAG, BLOG_TAG, CONTENT_REVALIDATE, getPublicClient, postTag } from "@/lib/supabase/client";

/**
 * Blog data source: Supabase (schema "content"), falling back to the local posts in data/blog-posts
 * if Supabase is not configured, unreachable, or empty. A failed read is never cached.
 *
 * Built to keep database egress flat as traffic grows (docs/supabase-migration-plan.md, Phase 3a):
 * - Visitors get pre-built pages. Supabase is read only when content changes (webhook) or once a day.
 * - The post LIST (cards, related posts, pillar links, sitemap) selects card columns only, ~0.8 KB a post.
 * - An article BODY is read only for its own page, cached per post (tag `post:<slug>`).
 * - getPost() checks the list first, so made-up /blog/<slug> URLs never query the database.
 */

const LIST_COLUMNS =
  "slug, title, excerpt, category, published_at, read_time, cover_image, cover_alt, featured, tags, key_takeaways, " +
  "is_pillar, related_slugs, pillar:blog_pillars(slug)";

type ListRow = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogPost["category"];
  published_at: string;
  read_time: string;
  cover_image: string;
  cover_alt: string;
  featured: boolean;
  tags: string[] | null;
  key_takeaways: string[] | null;
  is_pillar: boolean;
  related_slugs: string[] | null;
  pillar: { slug: string } | null;
  author: { name: string } | null;
};

type DetailRow = Omit<ListRow, "author"> & {
  sections: BlogPost["sections"] | null;
  faqs: NonNullable<BlogPost["faqs"]> | null;
  keywords: string[] | null;
  related_product_ids: string[] | null;
  author: { name: string; role: string; avatar_url: string; bio: string } | null;
};

const FALLBACK_AUTHOR: BlogAuthor = {
  name: "GreenPulse Editorial",
  role: "GreenPulse Wellness",
  avatar: "",
  bio: "",
};

/** Today in UTC (YYYY-MM-DD): the same clock as the `published_at <= current_date` policy in Supabase. */
const today = () => new Date().toISOString().slice(0, 10);

/** Published posts dated today or earlier, newest first: list columns only. */
const fetchListRows = unstable_cache(
  async (): Promise<ListRow[]> => {
    const db = getPublicClient();
    if (!db) throw new Error("Supabase env vars are not set");
    const { data, error } = await db
      .schema("content")
      .from("blog_posts")
      .select(`${LIST_COLUMNS}, author:authors(name)`)
      .eq("status", "published")
      // RLS already hides future-dated posts; repeated so the query reads the same as the policy.
      .lte("published_at", today())
      .order("published_at", { ascending: false })
      .order("slug");
    if (error) throw error; // thrown, so a failed read is never cached
    return (data ?? []) as unknown as ListRow[];
  },
  ["blog:list:v1"],
  { tags: [BLOG_TAG], revalidate: CONTENT_REVALIDATE },
);

/** One published post with its body. Cached per slug. */
function fetchDetailRow(slug: string): Promise<DetailRow | null> {
  return unstable_cache(
    async (): Promise<DetailRow | null> => {
      const db = getPublicClient();
      if (!db) throw new Error("Supabase env vars are not set");
      const { data, error } = await db
        .schema("content")
        .from("blog_posts")
        .select(
          `${LIST_COLUMNS}, sections, faqs, keywords, related_product_ids, author:authors(name, role, avatar_url, bio)`,
        )
        .eq("slug", slug)
        .eq("status", "published")
        .lte("published_at", today())
        .maybeSingle();
      if (error) throw error;
      return data as unknown as DetailRow | null;
    },
    ["blog:post:v1", slug],
    { tags: [BLOG_POSTS_TAG, postTag(slug)], revalidate: CONTENT_REVALIDATE },
  )();
}

/** "2026-05-28" → "May 28, 2026" (matches the format used across the site). */
function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });
}

function toSummary(row: ListRow | DetailRow): Omit<BlogPostSummary, "author"> {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    publishedAt: formatDate(row.published_at),
    publishedAtISO: row.published_at,
    readTime: row.read_time,
    coverImage: row.cover_image,
    coverAlt: row.cover_alt || row.title,
    featured: row.featured,
    tags: row.tags ?? [],
    keyTakeaways: row.key_takeaways ?? [],
    // Topic cluster = pillar slug (heat, cold, light, ...); drives pillar links and related posts.
    cluster: (row.pillar?.slug as BlogCluster | undefined) ?? undefined,
    pillar: row.is_pillar || undefined,
    relatedSlugs: row.related_slugs ?? [],
  };
}

async function toPost(row: DetailRow): Promise<BlogPost> {
  // Related-equipment cards are built from the product catalogue in code, so they never go stale.
  const catalog = new Map((await getProducts()).map((p) => [p.id, p]));
  return {
    ...toSummary(row),
    author: row.author
      ? { name: row.author.name, role: row.author.role, avatar: row.author.avatar_url, bio: row.author.bio }
      : FALLBACK_AUTHOR,
    // Drop callouts left empty in the database.
    sections: (row.sections ?? []).map((s) => ({ ...s, callout: s.callout?.text ? s.callout : undefined })),
    keywords: row.keywords ?? [],
    faqs: row.faqs ?? [],
    relatedEquipment: (row.related_product_ids ?? []).flatMap((id) => {
      const p = catalog.get(id);
      return p ? [{ name: p.name, category: p.category, image: p.image.src ?? "", link: p.url, description: p.description }] : [];
    }),
  };
}

type PostList = { posts: BlogPostSummary[]; fromDatabase: boolean };

/** The post list and where it came from. Deduped per request. */
const getPostList = cache(async (): Promise<PostList> => {
  if (getPublicClient()) {
    try {
      const rows = await fetchListRows();
      if (rows.length) {
        return {
          fromDatabase: true,
          posts: rows.map((row) => ({ ...toSummary(row), author: { name: row.author?.name ?? FALLBACK_AUTHOR.name } })),
        };
      }
    } catch (err) {
      console.error("[blog] Supabase list fetch failed, using local data:", err);
    }
  }
  return { fromDatabase: false, posts: BLOG_POSTS };
});

/** All published posts, newest first, without article bodies. */
export async function getPosts(): Promise<BlogPostSummary[]> {
  return (await getPostList()).posts;
}

/** One full post, or undefined if it isn't published. Unknown slugs never reach the database. */
export const getPost = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const { posts, fromDatabase } = await getPostList();
  if (!posts.some((p) => p.slug === slug)) return undefined;
  if (!fromDatabase) return BLOG_POSTS.find((p) => p.slug === slug);

  try {
    const row = await fetchDetailRow(slug);
    if (row) return toPost(row);
  } catch (err) {
    console.error(`[blog] Supabase fetch failed for "${slug}":`, err);
    const local = BLOG_POSTS.find((p) => p.slug === slug);
    if (local) return local;
    // Not in the local fallback either: fail this render so the last good page keeps being served.
    throw err;
  }
  return undefined;
});

/** Hand-picked related posts first, then same cluster / category. */
export async function getRelatedPosts(slug: string, count = 3): Promise<BlogPostSummary[]> {
  return pickRelatedPosts(await getPosts(), slug, count);
}

/** The pillar guide for a post's topic cluster, if it has one. */
export async function getPillar(post: BlogPostSummary): Promise<BlogPostSummary | undefined> {
  return getPillarPost(post, await getPosts());
}
