import { CLUSTERS, type BlogPost } from "./blog-types";
import { BLOG_POSTS } from "./blog-posts";

export * from "./blog-types";
export { BLOG_POSTS };

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/**
 * Related posts: hand-picked slugs first, then the rest of the same cluster, then the same category, then anything.
 * Works on any post list so it can also serve posts that come from the CMS.
 */
export function pickRelatedPosts(posts: BlogPost[], slug: string, count = 3): BlogPost[] {
  const current = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, count);
  const picked = new Map<string, BlogPost>();
  const add = (list: (BlogPost | undefined)[]) => list.forEach((p) => p && !picked.has(p.slug) && picked.set(p.slug, p));
  add((current.relatedSlugs ?? []).map((s) => others.find((p) => p.slug === s)));
  add(others.filter((p) => current.cluster && p.cluster === current.cluster));
  add(others.filter((p) => p.category === current.category));
  add(others);
  return [...picked.values()].slice(0, count);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return pickRelatedPosts(BLOG_POSTS, currentSlug, count);
}

/** The pillar guide that anchors this post's topic cluster (undefined for posts without a cluster, or the pillar itself). */
export function getPillarPost(post: BlogPost, posts: BlogPost[] = BLOG_POSTS): BlogPost | undefined {
  if (!post.cluster || post.pillar) return undefined;
  return posts.find((p) => p.slug === CLUSTERS[post.cluster!].pillar);
}

export function getAllCategories(): string[] {
  return ["All", ...Object.values(CLUSTERS).map((c) => c.category)];
}
