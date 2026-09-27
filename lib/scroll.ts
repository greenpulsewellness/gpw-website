import type Lenis from "lenis";

// Anchors land below the fixed nav via `scroll-padding-top` on <html>
// (globals.css) — Lenis and native scrolling both honour it.

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

/** Smooth-scroll to a section id (Lenis when active, native otherwise). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    // Page height changes as media and reveals settle — refresh Lenis's cached limit first.
    lenis.resize();
    lenis.scrollTo(el);
  } else {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
}
