import { sendGAEvent } from "@next/third-parties/google";

export const GA_MEASUREMENT_ID = "G-J2SWRMHRY5";

/** Shared with the cookie banner: "accepted" | "declined", absent until the visitor chooses. */
export const CONSENT_STORAGE_KEY = "gpw-cookie-consent";
/** Fired on window when the visitor makes a cookie choice. */
export const CONSENT_EVENT = "gpw:consent";

export function hasAnalyticsConsent() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

/**
 * Enquiry events read by the monthly report: whatsapp_click, phone_click and
 * generate_lead (form submitted). No-op until the visitor accepts analytics cookies.
 */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!hasAnalyticsConsent()) return;
  sendGAEvent("event", name, params);
}
