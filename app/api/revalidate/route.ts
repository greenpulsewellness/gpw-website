import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { BLOG_TAG, PRODUCTS_TAG } from "@/lib/sanity/client";

const CONTENT_TYPES = ["product", "post", "author"];

/**
 * Sanity webhook → refresh product and blog pages immediately after a publish.
 * Configure in sanity.io/manage → API → Webhooks:
 *   URL: https://<your-domain>/api/revalidate   Trigger: create/update/delete
 *   Filter: _type in ["product", "post", "author"]   Secret: SANITY_REVALIDATE_SECRET
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }
    if (!body?._type || !CONTENT_TYPES.includes(body._type)) {
      return NextResponse.json({ message: "Ignored", type: body?._type }, { status: 200 });
    }

    // Blog pages embed product cards, so refresh both.
    revalidateTag(PRODUCTS_TAG, "max");
    revalidateTag(BLOG_TAG, "max");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("[revalidate]", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
