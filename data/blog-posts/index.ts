import { CLUSTERS, type BlogPost } from "@/data/blog-types";
import type { BlogInput } from "./helpers";
import { EXTRAS } from "./extras";
import { HEAT_POSTS } from "./heat";
import { COLD_POSTS } from "./cold";
import { LIGHT_POSTS } from "./light";
import { AIR_POSTS } from "./air";
import { RECOVERY_POSTS } from "./recovery";
import { BUSINESS_POSTS } from "./business";
import { AGEING_POSTS } from "./ageing";

/**
 * All blog posts. Content lives in this folder (one file per topic cluster) until it moves to the database.
 * Cover images are generated into /public/blog by `node scripts/generate-blog-covers.mjs`.
 */

const wordCount = (p: BlogInput) =>
  [p.excerpt, ...p.keyTakeaways, ...p.sections.flatMap((s) => [s.heading, ...s.content, s.callout?.text ?? ""]), ...(p.faqs ?? []).flatMap((f) => [f.question, f.answer])]
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split(/\s+/)
    .filter(Boolean).length;

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });

/** Merge a post with its deep-dive sections (placed before the closing section) and FAQs. */
function withExtras(post: BlogInput): BlogInput {
  const extra = EXTRAS[post.slug];
  if (!extra) return post;
  const sections = [...post.sections];
  sections.splice(Math.max(sections.length - 1, 0), 0, ...extra.sections);
  return { ...post, sections, faqs: extra.faqs };
}

function build({ date, cluster, ...rest }: BlogInput): BlogPost {
  return {
    ...rest,
    cluster,
    category: CLUSTERS[cluster].category,
    publishedAt: formatDate(date),
    publishedAtISO: date,
    readTime: `${Math.max(3, Math.round(wordCount({ date, cluster, ...rest }) / 220))} min read`,
    coverImage: `/blog/${rest.slug}.jpg`,
  };
}

export const BLOG_POSTS: BlogPost[] = [
  ...HEAT_POSTS,
  ...COLD_POSTS,
  ...LIGHT_POSTS,
  ...AIR_POSTS,
  ...RECOVERY_POSTS,
  ...BUSINESS_POSTS,
  ...AGEING_POSTS,
]
  .map(withExtras)
  .map(build)
  .sort((a, b) => (b.publishedAtISO ?? "").localeCompare(a.publishedAtISO ?? ""));
