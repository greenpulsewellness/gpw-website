import type Lenis from "lenis";

let lenis: Lenis | null = null;
let isBackNavigation = false;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function setIsBackNavigation(val: boolean) {
  isBackNavigation = val;
}

export function getIsBackNavigation() {
  return isBackNavigation;
}

const STORAGE_KEY = "gpw_scroll_positions_v1";

export function getSavedScrollPositions(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const data = sessionStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveScrollPosition(path: string, y: number) {
  if (typeof window === "undefined") return;
  try {
    const map = getSavedScrollPositions();
    map[path] = Math.max(0, Math.round(y));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    // ignore sessionStorage errors
  }
}

export function getSavedScrollForPath(path: string): number | undefined {
  const map = getSavedScrollPositions();
  return map[path];
}

/** Smooth-scroll to a section id (Lenis when active, native otherwise). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    // Page height changes as media and reveals settle — refresh Lenis's cached limit first.
    lenis.resize();
  }
  // While the footer stage has the page body pinned, element rects are shifted
  // down by the pinned distance; subtract it to get the element's resting offset.
  const y = el.getBoundingClientRect().top + window.scrollY - pinnedShift();
  if (lenis) {
    lenis.scrollTo(y);
  } else {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  }
}

/** How far the footer stage's sticky page body is currently displaced from its resting spot. */
function pinnedShift() {
  const content = document.querySelector<HTMLElement>("[data-stage-content]");
  const stage = content?.parentElement;
  if (!content || !stage) return 0;
  const stageTop = stage.getBoundingClientRect().top + window.scrollY;
  const stuckTop = parseFloat(content.style.top) || 0;
  return Math.max(0, window.scrollY + stuckTop - stageTop);
}

/** Force immediate scroll to top across Lenis and window. */
export function scrollToTopImmediate() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();
  }
}

