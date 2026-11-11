import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { BLOG_POSTS_TAG, BLOG_TAG, postTag } from "@/lib/supabase/client";

/**
 * Refreshes cached blog content. Pages are rebuilt on their next visit (stale-while-revalidate), so each
 * call costs at most one small database read per affected page, however much traffic the site gets.
 *
 * POST: Supabase Database Webhook (Database → Webhooks), on tables content.blog_posts, content.authors,
 *       content.blog_pillars; events insert/update/delete; header `x-revalidate-secret: <REVALIDATE_SECRET>`.
 *       Refreshes only what changed, and ignores posts that are not live before or after the change
 *       (drafts and future-dated posts), so the blog generator saving drafts costs nothing.
 *       Products are not handled: the site reads them from code, so a product change needs a deploy.
 *
 * GET:  Vercel Cron (vercel.json, daily 00:05 UTC = 05:35 IST), `Authorization: Bearer <CRON_SECRET>`.
 *       Refreshes the post list so posts scheduled for today go live.
 */

type PostRow = { slug?: string; status?: string; published_at?: string | null } | null;
type WebhookPayload = {
  type?: "INSERT" | "UPDATE" | "DELETE";
  table?: string;
  schema?: string;
  record?: PostRow;
  old_record?: PostRow;
};

function safeEqual(given: string | null | undefined, expected: string | undefined) {
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Visible on the site right now: same rule as the RLS policy (published and dated today or earlier, UTC). */
function isLive(row: PostRow) {
  return !!row && row.status === "published" && !!row.published_at && row.published_at <= new Date().toISOString().slice(0, 10);
}

export async function POST(req: NextRequest) {
  if (!safeEqual(req.headers.get("x-revalidate-secret"), process.env.REVALIDATE_SECRET)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: WebhookPayload = {};
  try {
    body = (await req.json()) as WebhookPayload;
  } catch {
    // No body: a manual "refresh the blog" call.
  }

  const refreshed: string[] = [];
  const refresh = (tag: string) => {
    revalidateTag(tag, "max");
    refreshed.push(tag);
  };

  switch (body.table) {
    case "blog_posts": {
      const { record = null, old_record = null } = body;
      if (!isLive(record) && !isLive(old_record)) {
        return NextResponse.json({ message: "Ignored: post not live", table: body.table });
      }
      refresh(BLOG_TAG);
      for (const slug of new Set([record?.slug, old_record?.slug])) if (slug) refresh(postTag(slug));
      break;
    }
    case "authors":
    case "blog_pillars":
    case undefined:
      // Shown on every article (author box, cluster links): refresh the list and all article bodies.
      refresh(BLOG_TAG);
      refresh(BLOG_POSTS_TAG);
      break;
    default:
      return NextResponse.json({ message: "Ignored", table: body.table });
  }

  return NextResponse.json({ revalidated: refreshed, now: Date.now() });
}

export async function GET(req: NextRequest) {
  if (!safeEqual(req.headers.get("authorization"), process.env.CRON_SECRET && `Bearer ${process.env.CRON_SECRET}`)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  revalidateTag(BLOG_TAG, "max");
  return NextResponse.json({ revalidated: [BLOG_TAG], now: Date.now() });
}
