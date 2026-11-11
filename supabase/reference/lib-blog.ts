import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { BLOG_POSTS, getPillarPost, pickRelatedPosts, type BlogAuthor, type BlogCluster, type BlogPost } from "@/data/blog";
import { getProducts } from "@/lib/products";
import { BLOG_TAG, CONTENT_REVALIDATE, PRODUCTS_TAG, getPublicClient } from "@/lib/supabase/client";

/**
 * PARKED — Supabase version of lib/blog.ts. Copy over lib/blog.ts to activate
 * (see docs/supabase-migration-plan.md, Phase 3). Not imported anywhere while Sanity is live.
 *
 * Blog data source. Reads from Supabase (schema "content"); falls back to the local posts in data/blog.ts
 * if Supabase is unreachable or has no posts yet.
 */

type PostRow = {
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
  sections: BlogPost["sections"] | null;
  related_product_ids: string[] | null;
  keywords: string[] | null;
  related_slugs: string[] | null;
  faqs: NonNullable<BlogPost["faqs"]> | null;
  is_pillar: boolean;
  pillar: { slug: string } | null;
  author: { name: string; role: string; avatar_url: string; bio: string } | null;
};

const FALLBACK_AUTHOR: BlogAuthor = {
  name: "GreenPulse Editorial",
  role: "GreenPulse Wellness",
  avatar: "",
  bio: "",
};

/** Published posts, newest first. Cached across requests; revalidated via BLOG_TAG. */
const fetchPostRows = unstable_cache(
  async (): Promise<PostRow[]> => {
    const db = getPublicClient();
    if (!db) throw new Error("Supabase env vars are not set");
    const { data, error } = await db
      .schema("content")
      .from("blog_posts")
      .select("*, author:authors(name, role, avatar_url, bio), pillar:blog_pillars(slug)")
      .eq("status", "published")
      // RLS hides future-dated posts too; repeated here so the query reads the same as the policy.
      .lte("published_at", new Date().toISOString().slice(0, 10))
      .order("published_at", { ascending: false });
    if (error) throw error; // thrown, so a failed read is never cached
    return (data ?? []) as unknown as PostRow[];
  },
  ["blog:rows"],
  { tags: [BLOG_TAG, PRODUCTS_TAG], revalidate: CONTENT_REVALIDATE },
);

/** "2026-05-28" → "May 28, 2026" (matches the format used across the site). */
function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });
}

/** All posts, newest first. Deduped per request. */
export const getPosts = cache(async (): Promise<BlogPost[]> => {
  if (!getPublicClient()) return BLOG_POSTS;
  try {
    const rows = await fetchPostRows();
    if (rows.length) {
      // Related-equipment cards are built from the live catalog so they never go stale.
      const catalog = new Map((await getProducts()).map((p) => [p.id, p]));
      return rows.map((row): BlogPost => ({
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
        author: row.author
          ? { name: row.author.name, role: row.author.role, avatar: row.author.avatar_url, bio: row.author.bio }
          : FALLBACK_AUTHOR,
        // Drop callouts left empty in the database.
        sections: (row.sections ?? []).map((s) => ({ ...s, callout: s.callout?.text ? s.callout : undefined })),
        // Topic cluster = pillar slug (heat, cold, light, ...); drives pillar links and related posts.
        cluster: (row.pillar?.slug as BlogCluster | undefined) ?? undefined,
        pillar: row.is_pillar || undefined,
        relatedSlugs: row.related_slugs ?? [],
        keywords: row.keywords ?? [],
        faqs: row.faqs ?? [],
        relatedEquipment: (row.related_product_ids ?? []).flatMap((id) => {
          const p = catalog.get(id);
          return p ? [{ name: p.name, category: p.category, image: p.image.src ?? "", link: p.url, description: p.description }] : [];
        }),
      }));
    }
  } catch (err) {
    console.error("[blog] Supabase fetch failed, using local data:", err);
  }
  return BLOG_POSTS;
});

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}

/** Hand-picked related posts first, then same cluster / category. */
export async function getRelatedPosts(slug: string, count = 3): Promise<BlogPost[]> {
  return pickRelatedPosts(await getPosts(), slug, count);
}

/** The pillar guide for a post's topic cluster, if it has one. */
export async function getPillar(post: BlogPost): Promise<BlogPost | undefined> {
  return getPillarPost(post, await getPosts());
}
