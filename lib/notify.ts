import "server-only";
import { formatEnquiry, type EnquiryPayload } from "./enquiry";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatTelegramHtml(e: EnquiryPayload): string {
  const fields = [
    `🌿 <b>New Enquiry — GreenPulse Wellness</b>`,
    ``,
    `👤 <b>Name:</b> ${escapeHtml(e.name.trim())}`,
    e.phone ? `📞 <b>Phone:</b> <code>${escapeHtml(e.phone.trim())}</code>` : "",
    e.email ? `✉️ <b>Email:</b> ${escapeHtml(e.email.trim())}` : "",
    e.business ? `🏢 <b>Business:</b> ${escapeHtml(e.business.trim())}` : "",
    e.interest ? `🎯 <b>Interested in:</b> ${escapeHtml(e.interest.trim())}` : "",
    e.city ? `📍 <b>City:</b> ${escapeHtml(e.city.trim())}` : "",
    e.source ? `🌐 <b>Page / Source:</b> ${escapeHtml(e.source.trim())}` : "",
    e.message ? `\n💬 <b>Message:</b>\n${escapeHtml(e.message.trim())}` : "",
  ].filter(Boolean);

  return fields.join("\n");
}

/**
 * Sends enquiry details to Telegram via the Bot API.
 */
async function sendTelegramNotification(enquiry: EnquiryPayload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return false;
  }

  const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

  // Try sending formatted HTML first
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramHtml(enquiry),
        parse_mode: "HTML",
      }),
    });

    if (res.ok) {
      return true;
    }

    // If HTML parsing failed on Telegram's side, fall back to plain text
    const plainText = formatEnquiry(enquiry);
    const retryRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        chat_id: chatId,
        text: plainText,
      }),
    });

    if (retryRes.ok) {
      return true;
    }

    const errText = await retryRes.text();
    console.error("[telegram] delivery failed:", retryRes.status, errText);
    return false;
  } catch (error) {
    // Log the error type only: the request URL contains the bot token.
    console.error("[telegram] network error:", error instanceof Error ? error.name : "unknown");
    return false;
  }
}

/**
 * Delivers an enquiry to the team.
 * Dispatches to Telegram and logs to console.
 */
export async function notifyTeam(enquiry: EnquiryPayload): Promise<void> {
  // Log metadata only: names, phone numbers and messages must not end up in platform logs.
  console.info("[enquiry received]", { source: enquiry.source || "unknown", business: enquiry.business });

  const hasTelegram =
    Boolean(process.env.TELEGRAM_BOT_TOKEN?.trim()) &&
    Boolean(process.env.TELEGRAM_CHAT_ID?.trim());

  if (hasTelegram) {
    const delivered = await sendTelegramNotification(enquiry);
    if (!delivered) {
      throw new Error("Telegram delivery failed");
    }
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "[enquiry] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing. Enquiry logged to console only."
    );
    return;
  }

  throw new Error("Enquiry delivery is not configured (missing TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)");
}


/**
 * Newsletter sign-up alert. Delivered to the same Telegram chat until a mailing-list
 * provider is connected. Returns false when delivery isn't configured or fails.
 */
export async function notifyNewsletterSignup(email: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) return false;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        chat_id: chatId,
        text: `📬 <b>Newsletter sign-up — GreenPulse Wellness</b>\n\n✉️ ${escapeHtml(email.trim())}`,
        parse_mode: "HTML",
      }),
    });
    return res.ok;
  } catch (error) {
    console.error("[telegram] newsletter error:", error instanceof Error ? error.name : "unknown");
    return false;
  }
}
