import "server-only";
import { cache } from "react";
import { defineQuery } from "next-sanity";
import { BLOG_POSTS, getPillarPost, pickRelatedPosts, type BlogPost } from "@/data/blog";
import { BLOG_TAG, PRODUCTS_REVALIDATE, PRODUCTS_TAG, sanityClient } from "@/lib/sanity/client";

/**
 * Blog data source.
 *
 * For now the blog lives in code (data/blog-posts/*), so Sanity is NOT read. When the posts have been moved to the
 * database (`npm run import:content`), flip USE_SANITY_BLOG to true: posts are then read from Sanity, falling back
 * to the local posts if Sanity is unreachable or has no posts yet.
 */
const USE_SANITY_BLOG = false;

type SanityPost = Omit<BlogPost, "publishedAt" | "publishedAtISO" | "author" | "relatedEquipment"> & {
  publishedAt: string;
  author: BlogPost["author"] | null;
  relatedEquipment: NonNullable<BlogPost["relatedEquipment"]> | null;
};

// Posts dated in the future stay hidden until their publish date (checked on each revalidation).
const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && publishedAt <= string::split(string(now()), "T")[0]] | order(publishedAt desc) {
    "slug": slug.current,
    title, excerpt, category, publishedAt,
    "readTime": coalesce(readTime, ""),
    "coverImage": coverImage.asset->url,
    "coverAlt": coalesce(coverImage.alt, title),
    "featured": coalesce(featured, false),
    "tags": coalesce(tags, []),
    "keyTakeaways": coalesce(keyTakeaways, []),
    "author": author->{ name, "role": coalesce(role, ""), "avatar": coalesce(avatar.asset->url, ""), "bio": coalesce(bio, "") },
    "sections": coalesce(sections[]{
      "id": coalesce(id.current, _key),
      heading,
      "content": coalesce(content, []),
      callout
    }, []),
    "relatedEquipment": relatedEquipment[]->{
      name,
      category,
      "image": coalesce(image.asset->url, ""),
      "link": "/products/" + slug.current,
      description
    }
  }
`);

const fetchOptions = { next: { revalidate: PRODUCTS_REVALIDATE, tags: [BLOG_TAG, PRODUCTS_TAG] } };

const FALLBACK_AUTHOR: BlogPost["author"] = {
  name: "GreenPulse Editorial",
  role: "GreenPulse Wellness",
  avatar: "",
  bio: "",
};

/** "2026-05-28" → "May 28, 2026" (matches the format used across the site). */
function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });
}

function toPost(doc: SanityPost): BlogPost {
  return {
    ...doc,
    publishedAt: formatDate(doc.publishedAt),
    publishedAtISO: doc.publishedAt,
    author: doc.author ?? FALLBACK_AUTHOR,
    // Drop callouts left empty in the admin.
    sections: doc.sections.map((s) => ({ ...s, callout: s.callout?.text ? s.callout : undefined })),
    relatedEquipment: (doc.relatedEquipment ?? []).filter((eq) => eq?.name),
  };
}

/** All posts, newest first. Deduped per request. */
export const getPosts = cache(async (): Promise<BlogPost[]> => {
  if (!USE_SANITY_BLOG) return BLOG_POSTS;
  try {
    const docs = await sanityClient.fetch<SanityPost[]>(POSTS_QUERY, {}, fetchOptions);
    if (docs?.length) return docs.map(toPost);
  } catch (err) {
    console.error("[blog] Sanity fetch failed, using local data:", err);
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
