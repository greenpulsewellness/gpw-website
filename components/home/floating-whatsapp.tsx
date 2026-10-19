"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/home";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/** Fixed bottom-right on every breakpoint, smoothly tucks away on mobile when the enquiry submit CTA is visible. */
export function FloatingWhatsApp() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const target = document.getElementById("enquiry-submit");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      id="floating-whatsapp"
      href={whatsappUrl(contact.floatingMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GreenPulse Wellness on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-40 block transition-all duration-300 ease-calm hover:scale-110 active:scale-95 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] md:bottom-6 md:right-6",
        hide && "pointer-events-none translate-y-16 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100",
      )}
    >
      <WhatsAppColorIcon size={48} className="size-11 md:size-12" />
    </a>
  );
}
