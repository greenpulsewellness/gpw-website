import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cache tags, invalidated by /api/revalidate (Supabase webhook + daily Vercel Cron).
 * - BLOG_TAG:        the post list (blog index, related posts, pillar links, sitemap, static params)
 * - BLOG_POSTS_TAG:  every cached article body (only refreshed when an author or cluster changes)
 * - postTag(slug):   one article body
 */
export const BLOG_TAG = "blog";
export const BLOG_POSTS_TAG = "blog:posts";
export const postTag = (slug: string) => `post:${slug}`;

/**
 * Safety-net refresh interval (seconds) for cached content. Edits refresh pages straight away through the
 * webhook, so this only bounds staleness if a webhook call is missed. Keep it long: with on-demand refresh,
 * database reads depend on edits, not on traffic. Route files repeat this as a literal (it must be static).
 */
export const CONTENT_REVALIDATE = 86400;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const stateless = { auth: { persistSession: false, autoRefreshToken: false } } as const;

let publicClient: SupabaseClient | null | undefined;
let adminClient: SupabaseClient | null | undefined;

/**
 * Read-only client (publishable key). Row Level Security limits it to published content.
 * Returns null when env vars are missing so callers can fall back to local data
 * instead of failing the build.
 */
export function getPublicClient(): SupabaseClient | null {
  if (publicClient === undefined) {
    publicClient = url && anonKey ? createClient(url, anonKey, stateless) : null;
  }
  return publicClient;
}

/** Full-access client (secret key). Server-only — never import into client components. */
export function getAdminClient(): SupabaseClient | null {
  if (adminClient === undefined) {
    adminClient = url && serviceKey ? createClient(url, serviceKey, stateless) : null;
  }
  return adminClient;
}
