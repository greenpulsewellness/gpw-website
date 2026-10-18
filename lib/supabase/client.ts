import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Cache tags for product and blog queries — invalidated by /api/revalidate. */
export const PRODUCTS_TAG = "products";
export const BLOG_TAG = "blog";

/** Fallback refresh interval (seconds) if the revalidate webhook isn't configured. */
export const CONTENT_REVALIDATE = 60;

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const stateless = { auth: { persistSession: false, autoRefreshToken: false } } as const;

let publicClient: SupabaseClient | null | undefined;
let adminClient: SupabaseClient | null | undefined;

/**
 * Read-only client (anon key). Row Level Security limits it to published content.
 * Returns null when env vars are missing so callers can fall back to local data
 * instead of failing the build.
 */
export function getPublicClient(): SupabaseClient | null {
  if (publicClient === undefined) {
    publicClient = url && anonKey ? createClient(url, anonKey, stateless) : null;
  }
  return publicClient;
}

/** Full-access client (service-role key). Server-only — never import into client components. */
export function getAdminClient(): SupabaseClient | null {
  if (adminClient === undefined) {
    adminClient = url && serviceKey ? createClient(url, serviceKey, stateless) : null;
  }
  return adminClient;
}
