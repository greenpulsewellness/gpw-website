"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { preload } from "react-dom";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { Logo } from "@/components/home/logo";
import { getLenis, getIsBackNavigation, saveScrollPosition } from "@/lib/scroll";
import { INTRO_COOKIE, PLAY_ATTR, SKIP_ATTR } from "@/lib/intro";

declare global {
  interface Window {
    __gpwIntroDone?: boolean;
  }
}

/* ------------------------------------------------------------------ */
/* Timeline (seconds)                                                  */
/* ------------------------------------------------------------------ */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

const STACK_START = 0.25; // first image enters the window
const STACK_STEP = 0.55; // gap between images
const STACK_DURATION = 0.8;
const EXPAND_DURATION = 1.1;

/** Longest the intro waits for its images before giving up and showing the page. */
const READY_TIMEOUT_MS = 2500;

type PreloaderImage = { src: string; alt: string };

// Pre-sized WebP files from scripts/generate-intro-images.mjs, served as-is so no
// visitor waits on an image being converted.
const DEFAULT_IMAGES: PreloaderImage[] = [
  { src: "/intro/vitality-intro.webp", alt: "Vitality Suite" },
  { src: "/intro/longevity-intro.webp", alt: "Longevity Infrastructure" },
  { src: "/intro/performance-intro.webp", alt: "Performance Lab" },
  { src: "/intro/wellness-intro.webp", alt: "Wellness Sanctuary" },
];

/** Centre window aspect ratio (width / height) — the intro images are 4:3. */
const WINDOW_RATIO = 4 / 3;

/** Must match the first hero slide so the hand-off is seamless. */
const DEFAULT_FINAL: PreloaderImage = {
  src: "/intro/recovery-hero.webp",
  alt: "Recovery & Cellular Rejuvenation",
};

/* ------------------------------------------------------------------ */
/* Once-per-session gate                                               */
/* ------------------------------------------------------------------ */

/** True until the first preloader mount in this document has made its decision. */
let firstMountInDocument = true;

function hasSeenIntro() {
  return document.cookie.split("; ").includes(`${INTRO_COOKIE}=1`);
}

function markIntroSeen() {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${INTRO_COOKIE}=1; path=/; SameSite=Lax${secure}`;
}

function shouldPlayIntro() {
  const firstMount = firstMountInDocument;
  firstMountInDocument = false;

  // A full load of the home page was already decided by the head script.
  const html = document.documentElement;
  if (firstMount && html.hasAttribute(PLAY_ATTR)) return true;
  if (firstMount && html.hasAttribute(SKIP_ATTR)) return false;

  // Client-side navigation to the home page: play only if it hasn't played since
  // the last refresh (the head script clears the cookie on every refresh).
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (getIsBackNavigation()) return false;
  return !hasSeenIntro();
}

/** Resolves once the image is downloaded and decoded, so it paints on its first frame. */
function whenReady(src: string) {
  return new Promise<void>((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => img.decode().then(resolve, resolve);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Waits up to READY_TIMEOUT_MS for the images. Returns the ones ready in time, in
 * order, ending with the final image — or null when the final image isn't ready,
 * since the intro can't hand off to the hero without it.
 */
async function readySequence(images: PreloaderImage[], finalImage: PreloaderImage) {
  const all = [...images, finalImage];
  const ready = new Set<string>();
  const loads = all.map((img) => whenReady(img.src).then(() => void ready.add(img.src), () => {}));
  await Promise.race([
    Promise.all(loads),
    new Promise((resolve) => window.setTimeout(resolve, READY_TIMEOUT_MS)),
  ]);
  if (!ready.has(finalImage.src)) return null;
  return all.filter((img) => ready.has(img.src));
}

/* ------------------------------------------------------------------ */
/* Context — lets the hero hold its video + headline until the intro   */
/* ------------------------------------------------------------------ */

const PreloaderContext = createContext(true);

/** `true` once the entry animation has handed off to the page. */
export function usePreloaderDone() {
  return useContext(PreloaderContext);
}

type LayoutPreloaderProps = {
  children: React.ReactNode;
  /** Images flashed in the centre window before the final one (4:3 works best) */
  images?: PreloaderImage[];
  /** The image that expands to full screen (use the hero poster) */
  finalImage?: PreloaderImage;
};

/**
 * Entry animation: images stack into a small centre window, the last one
 * (the hero poster) expands to full bleed, then the overlay fades to reveal
 * the hero video — which has been buffering underneath the whole time.
 */
export function LayoutPreloader({
  children,
  images = DEFAULT_IMAGES,
  finalImage = DEFAULT_FINAL,
}: LayoutPreloaderProps) {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [rect, setRect] = useState<{ x: number; y: number; w: number; h: number; vw: number; vh: number } | null>(null);
  // The images that will actually play: null until they've loaded (or timed out).
  const [layers, setLayers] = useState<PreloaderImage[] | null>(null);

  // Start downloading during server render, long before this component hydrates.
  // A visitor skipping the intro saw it earlier this session, so these are cached.
  preload(finalImage.src, { as: "image", fetchPriority: "high" });
  images.forEach((img, i) => preload(img.src, { as: "image", fetchPriority: i === 0 ? "high" : "auto" }));

  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => String(Math.round(v)).padStart(3, "0"));
  // Decided once per mount, so Strict Mode's effect re-run doesn't flip it.
  const playRef = useRef<boolean | null>(null);

  // Before paint, so a skipped intro never flashes its black overlay.
  useLayoutEffect(() => {
    if (playRef.current === null) playRef.current = shouldPlayIntro();
    const html = document.documentElement;
    if (playRef.current) {
      html.setAttribute(PLAY_ATTR, "");
      html.removeAttribute(SKIP_ATTR);
    } else {
      html.setAttribute(SKIP_ATTR, "");
      html.removeAttribute(PLAY_ATTR);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!playRef.current) {
      setVisible(false);
      setDone(true);
      return;
    }

    markIntroSeen();

    // Centre box size in px so it can animate to the full viewport.
    const W = window.innerWidth;
    const H = window.innerHeight;
    // 4:3, ~36% of the viewport width on desktop, wider on phones.
    let w = Math.min(W * (W < 640 ? 0.86 : 0.36), 680);
    let h = w / WINDOW_RATIO;
    if (h > H * 0.6) {
      h = H * 0.6;
      w = h * WINDOW_RATIO;
    }
    setRect({ x: (W - w) / 2, y: (H - h) / 2, w, h, vw: W, vh: H });

    // Lock scrolling while the intro runs so user gestures don't leak into scrollY
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Prevent wheel, touchmove and scroll keyboard keys during animation
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const preventKeys = (e: KeyboardEvent) => {
      if (["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys);

    const resetToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const currentLenis = getLenis();
      if (currentLenis) {
        currentLenis.scrollTo(0, { immediate: true });
        currentLenis.resize();
      }
      saveScrollPosition("/", 0);
    };

    const finish = () => {
      // Enforce scroll top right before unlocking
      resetToTop();

      setDone(true); // hero video starts playing under the overlay
      setVisible(false); // overlay fades out; SKIP_ATTR is set once the fade completes
      document.documentElement.removeAttribute(PLAY_ATTR); // nav fades in under the overlay

      // Clean up listeners & unlock scrolling
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";

      const currentLenis = getLenis();
      currentLenis?.start();

      // Enforce hero at the top across several frames to eliminate any buffered momentum
      resetToTop();
      requestAnimationFrame(resetToTop);
      setTimeout(resetToTop, 50);
      setTimeout(resetToTop, 120);
      setTimeout(resetToTop, 250);
    };

    // The timeline starts only once its images can paint; until then the
    // overlay holds on the logo with the counter at 000.
    let cancelled = false;
    let counterAnim: ReturnType<typeof animate> | undefined;
    let tExpand = 0;
    let tDone = 0;

    void readySequence(images, finalImage).then((sequence) => {
      if (cancelled) return;
      // Too slow to load: skip straight to the page rather than play over blanks.
      if (!sequence) {
        finish();
        return;
      }

      const expandAt = STACK_START + (sequence.length - 1) * STACK_STEP + STACK_DURATION + 0.25;
      setLayers(sequence);
      counterAnim = animate(progress, 100, {
        duration: expandAt,
        ease: [0.45, 0, 0.2, 1],
      });
      tExpand = window.setTimeout(() => setExpanded(true), expandAt * 1000);
      tDone = window.setTimeout(finish, (expandAt + EXPAND_DURATION) * 1000);
    });

    return () => {
      cancelled = true;
      document.documentElement.removeAttribute(PLAY_ATTR);
      counterAnim?.stop();
      window.clearTimeout(tExpand);
      window.clearTimeout(tDone);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      getLenis()?.start();
    };
  }, [images, finalImage, progress]);

  // Let other components (e.g. the cookie banner) know the intro has finished.
  useEffect(() => {
    if (!done) return;
    window.__gpwIntroDone = true;
    window.dispatchEvent(new Event("gpw:intro-done"));
    return () => {
      window.__gpwIntroDone = false;
    };
  }, [done]);

  return (
    <PreloaderContext.Provider value={done}>
      {/* The overlay comes before the page in the HTML, so the browser paints it
          before any of the hero; globals.css hides it or the nav from the first paint. */}
      {/* SKIP_ATTR hides the overlay with display:none, so it is set only after the
          exit fade — setting it earlier cuts the fade and jerks into the hero.
          Later visits to the home page in this tab then hide the overlay before it paints. */}
      <AnimatePresence onExitComplete={() => document.documentElement.setAttribute(SKIP_ATTR, "")}>
        {visible && (
          <motion.div
            key="preloader"
            aria-hidden="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }}
            className="gpw-preloader fixed inset-0 z-[100] overflow-hidden bg-black"
          >
            {/* Film grain */}
            <div className="pointer-events-none absolute -inset-[20%] z-30 animate-noise opacity-[0.07] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

            {/* 4:3 image box — every image fills it fully; after the last one
                lands, the box itself grows to full screen, carrying the image */}
            {rect && layers && (
              <motion.div
                className="absolute overflow-hidden"
                initial={{ left: rect.x, top: rect.y, width: rect.w, height: rect.h, borderRadius: 14 }}
                animate={
                  expanded
                    ? { left: 0, top: 0, width: rect.vw, height: rect.vh, borderRadius: 0 }
                    : { left: rect.x, top: rect.y, width: rect.w, height: rect.h, borderRadius: 14 }
                }
                transition={{ duration: EXPAND_DURATION, ease: EASE_IN_OUT }}
              >
                {layers.map((img, i) => {
                  return (
                    <motion.div
                      key={img.src}
                      className="absolute inset-0"
                      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                      transition={{
                        duration: STACK_DURATION,
                        ease: EASE_IN_OUT,
                        delay: STACK_START + i * STACK_STEP,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1.25 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: STACK_DURATION + 0.4,
                          ease: EASE_OUT,
                          delay: STACK_START + i * STACK_STEP,
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          loading="eager"
                          className="object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Brand + counter */}
            <motion.div
              className="label-mono pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-5 text-neutral-400 sm:p-8"
              initial={false}
              animate={expanded ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <Logo tone="light" className="text-3xl normal-case tracking-[-0.02em] sm:text-4xl" />
              <span className="text-3xl font-light tabular-nums tracking-normal text-white sm:text-5xl">
                <motion.span>{counter}</motion.span>
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  );
}

