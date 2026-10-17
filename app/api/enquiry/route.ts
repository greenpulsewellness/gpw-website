import { NextResponse } from "next/server";
import { enquiry as enquiryCopy } from "@/data/home";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";
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
    business: str(body.business, 80),
    city: str(body.city, 120),
    phone: str(body.phone, 40),
    interest: str(body.interest, 200),
    source: str(body.source, 200),
    company: str(body.company, 200),
  };

  // Honeypot filled → pretend success, drop silently
  if (payload.company) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(payload);
  if (!(enquiryCopy.businessTypes as readonly string[]).includes(payload.business)) {
    errors.business = "Please choose a business type.";
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await notifyTeam(payload);
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
