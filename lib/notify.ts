import "server-only";
import { formatEnquiry, type EnquiryPayload } from "./enquiry";

/**
 * Delivers an enquiry to the team.
 *
 * TODO: plug in Telegram + Discord delivery here (tokens via env, never client-side).
 * Until then: logs in development, and fails in production so no enquiry is silently lost.
 */
export async function notifyTeam(enquiry: EnquiryPayload): Promise<void> {
  const text = formatEnquiry(enquiry);

  if (process.env.NODE_ENV !== "production") {
    console.info(`[enquiry]\n${text}`);
    return;
  }

  throw new Error("Enquiry delivery is not configured");
}
