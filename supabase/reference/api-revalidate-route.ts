import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { BLOG_TAG, PRODUCTS_TAG } from "@/lib/supabase/client";

// PARKED — Supabase version of app/api/revalidate/route.ts. Copy over it to activate
// (see docs/supabase-migration-plan.md, Phase 3). Not routable from this folder.
const TABLES = ["products", "blog_posts", "authors"];

function validSecret(given: string | null) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Supabase Database Webhook → refresh product and blog pages right after a content change.
 * Configure in Supabase → Database → Webhooks (tables: products, blog_posts, authors):
 *   Method: POST   URL: https://<your-domain>/api/revalidate
 *   HTTP header:   x-revalidate-secret: <REVALIDATE_SECRET>
 * The blog generator can call this endpoint too, after it writes a post.
 */
export async function POST(req: NextRequest) {
  if (!validSecret(req.headers.get("x-revalidate-secret"))) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let table: string | undefined;
  try {
    table = ((await req.json()) as { table?: string })?.table;
  } catch {
    // No body: treat as a manual "refresh everything" call.
  }
  if (table && !TABLES.includes(table)) {
    return NextResponse.json({ message: "Ignored", table }, { status: 200 });
  }

  // Blog pages embed product cards, so refresh both.
  revalidateTag(PRODUCTS_TAG, "max");
  revalidateTag(BLOG_TAG, "max");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
