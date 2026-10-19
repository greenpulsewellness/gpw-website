/**
 * Enquiry form contract, shared by the form (client) and /api/enquiry (server).
 */

export type EnquiryField = "name" | "business" | "city" | "phone";
export type EnquiryErrors = Partial<Record<EnquiryField | "email" | "message", string>>;

export type EnquiryPayload = {
  name: string;
  business: string;
  city?: string;
  phone: string;
  email?: string;
  message?: string;
  /** Human-readable product or combo the visitor is interested in */
  interest?: string;
  /** Page the enquiry was sent from */
  source?: string;
  /** Honeypot — real visitors never fill this */
  company?: string;
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(v: Partial<EnquiryPayload>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if ((v.name ?? "").trim().length < 2) errors.name = "Please enter your name.";
  if (!v.business) errors.business = "Please choose a business type.";
  if (v.city !== undefined && v.city !== "" && (v.city ?? "").trim().length < 2) {
    errors.city = "Please enter your city.";
  }
  if (v.email && !EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  const phone = (v.phone ?? "").trim();
  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Please enter a phone number.";
  else if (!/^\+?[\d\s\-()]+$/.test(phone) || digits.length < 8 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

/** Plain-text summary used by notification channels */
export function formatEnquiry(e: EnquiryPayload): string {
  return [
    "New enquiry — GreenPulse Wellness",
    `Name: ${e.name.trim()}`,
    e.email ? `Email: ${e.email.trim()}` : null,
    `Business: ${e.business}`,
    `Interested in: ${e.interest?.trim() || "Not specified"}`,
    e.city ? `City: ${e.city.trim()}` : null,
    `Phone: ${e.phone.trim()}`,
    e.message ? `Message: ${e.message.trim()}` : null,
    e.source ? `Page: ${e.source}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
