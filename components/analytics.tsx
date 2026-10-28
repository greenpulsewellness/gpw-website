"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, GA_MEASUREMENT_ID, hasAnalyticsConsent, trackEvent } from "@/lib/analytics";

/** Loads Google Analytics only after the visitor accepts cookies, and tracks WhatsApp and call clicks. */
export function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const sync = () => setConsented(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!consented) return;

    // One delegated listener covers every WhatsApp and phone link on the site.
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(link.href)) trackEvent("whatsapp_click");
      else if (link.href.startsWith("tel:")) trackEvent("phone_click");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [consented]);

  if (!consented) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
