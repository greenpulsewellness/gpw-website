import "server-only";
import type { EnquiryPayload } from "./enquiry";
import { getAdminClient } from "./supabase/client";

/**
 * Saves an enquiry to the Supabase `crm.enquiries` table (service-role key; RLS blocks anon).
 * Never throws — returns whether the row was stored, so a database hiccup can't lose the
 * visitor's submission when team notification still succeeds.
 */
export async function saveEnquiry(e: EnquiryPayload): Promise<boolean> {
  const db = getAdminClient();
  if (!db) return false;
  const { error } = await db.schema("crm").from("enquiries").insert({
    name: e.name,
    business: e.business,
    city: e.city || null,
    phone: e.phone,
    email: e.email || null,
    message: e.message || null,
    interest: e.interest || null,
    source: e.source || null,
  });
  if (error) console.error("[enquiry] save failed", error.message);
  return !error;
}
