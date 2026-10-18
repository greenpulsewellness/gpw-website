import { NextResponse } from "next/server";
import { enquiry as enquiryCopy } from "@/data/home";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";
import { saveEnquiry } from "@/lib/enquiry-store";
import { notifyTeam } from "@/lib/notify";

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const payload: EnquiryPayload = {
    name: str(body.name, 120),
    business: str(body.business, 80) || "General Inquiry",
    city: str(body.city, 120),
    phone: str(body.phone, 40),
    email: str(body.email, 120),
    message: str(body.message, 2000),
    interest: str(body.interest, 200),
    source: str(body.source, 200),
    company: str(body.company, 200),
  };

  // Honeypot filled → pretend success, drop silently
  if (payload.company) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(payload);
  if (!payload.business || payload.business.trim().length === 0) {
    errors.business = "Please choose a business type.";
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Store it and notify the team; the visitor only sees a failure if neither worked.
  const [saved, notified] = await Promise.all([
    saveEnquiry(payload),
    notifyTeam(payload).then(
      () => true,
      (err) => {
        console.error("[enquiry] delivery failed", err);
        return false;
      },
    ),
  ]);
  if (!saved && !notified) {
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
