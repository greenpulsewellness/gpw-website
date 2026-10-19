"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gpw-cookie-consent";

export function CookieBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    // On the home page, wait for the entry animation to finish first.
    if (pathname === "/" && !window.__gpwIntroDone) {
      const show = () => setVisible(true);
      window.addEventListener("gpw:intro-done", show, { once: true });
      return () => window.removeEventListener("gpw:intro-done", show);
    }
    setVisible(true);
  }, [pathname]);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0f0c]/95 p-4 text-sm text-neutral-300 shadow-xl backdrop-blur-md print:hidden sm:left-auto sm:right-6 sm:bottom-6 sm:mx-0 sm:flex-row sm:items-center"
    >
      <p className="flex-1 text-xs leading-relaxed">
        We use essential cookies to run this site.{" "}
        <Link href="/cookies" className="text-white underline underline-offset-2">
          Cookie Policy
        </Link>
      </p>
      <div className="flex shrink-0 gap-2 [&>button]:flex-1 sm:[&>button]:flex-none">
        <button
          type="button"
          onClick={() => choose("declined")}
          className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-white/85"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
