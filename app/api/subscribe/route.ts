import { NextResponse } from "next/server";
import { EMAIL_RE } from "@/lib/enquiry";
import { notifyNewsletterSignup } from "@/lib/notify";
import { clientIp, isCrossSite, isRateLimited } from "@/lib/request-guard";

// 3 sign-ups per IP per 10 minutes
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  if (isCrossSite(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  if (isRateLimited(`subscribe:${clientIp(req)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("bad body");
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled → pretend success, drop silently
  if (typeof body.company === "string" && body.company) return NextResponse.json({ ok: true });

  const email = typeof body.email === "string" ? body.email.trim().slice(0, 120) : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  const delivered = await notifyNewsletterSignup(email);
  if (!delivered) {
    return NextResponse.json({ ok: false, error: "Sign-up failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
