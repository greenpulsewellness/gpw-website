/**
 * Enquiry form contract, shared by the form (client) and /api/enquiry (server).
 */

export type EnquiryField = "name" | "business" | "city" | "phone";
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export type EnquiryPayload = {
  name: string;
  business: string;
  city: string;
  phone: string;
  /** Human-readable product or combo the visitor is interested in */
  interest?: string;
  /** Page the enquiry was sent from */
  source?: string;
  /** Honeypot — real visitors never fill this */
  company?: string;
};

export function validateEnquiry(v: Pick<EnquiryPayload, EnquiryField>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if ((v.name ?? "").trim().length < 2) errors.name = "Please enter your name.";
  if (!v.business) errors.business = "Please choose a business type.";
  if ((v.city ?? "").trim().length < 2) errors.city = "Please enter your city.";
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
    `Business: ${e.business}`,
    `Interested in: ${e.interest?.trim() || "Not specified"}`,
    `City: ${e.city.trim()}`,
    `Phone: ${e.phone.trim()}`,
    e.source ? `Page: ${e.source}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
