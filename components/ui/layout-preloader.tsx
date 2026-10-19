"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { Logo } from "@/components/home/logo";
import { getLenis, getIsBackNavigation, saveScrollPosition } from "@/lib/scroll";

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

type PreloaderImage = { src: string; alt: string };

const DEFAULT_IMAGES: PreloaderImage[] = [
  { src: "/vitality.jpg", alt: "Vitality Suite" },
  { src: "/longivity.png", alt: "Longevity Infrastructure" },
  { src: "/performance.png", alt: "Performance Lab" },
  { src: "/wellness.png", alt: "Wellness Sanctuary" },
];

/** Centre window aspect ratio (width / height) — the intro images are 4:3. */
const WINDOW_RATIO = 4 / 3;

/** Must match the first hero slide so the hand-off is seamless. */
const DEFAULT_FINAL: PreloaderImage = {
  src: "/recovery.png",
  alt: "Recovery & Cellular Rejuvenation",
};

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

  const layers = [...images, finalImage];
  const finalDelay = STACK_START + images.length * STACK_STEP;
  const expandAt = finalDelay + STACK_DURATION + 0.25;
  const expandDuration = 1.1;

  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => String(Math.round(v)).padStart(3, "0"));

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user has reduced motion preference
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check if this is a browser reload vs in-session navigation
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      if (navEntries.length > 0 && navEntries[0].type === "reload") {
        isReload = true;
      }
    } catch {
      // ignore
    }

    const isBack = getIsBackNavigation();
    const alreadySeen = sessionStorage.getItem("gpw_intro_seen") === "true";

    // If back navigation or already viewed in this session (and not a hard reload), skip preloader
    if (reduce || isBack || (alreadySeen && !isReload)) {
      setVisible(false);
      setDone(true);
      return;
    }

    sessionStorage.setItem("gpw_intro_seen", "true");

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

    const counterAnim = animate(progress, 100, {
      duration: expandAt,
      ease: [0.45, 0, 0.2, 1],
    });

    const resetToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const currentLenis = getLenis();
      if (currentLenis) {
        currentLenis.scrollTo(0, { immediate: true });
        currentLenis.resize();
      }
      saveScrollPosition("/", 0);
    };

    const tExpand = window.setTimeout(() => setExpanded(true), expandAt * 1000);
    const tDone = window.setTimeout(
      () => {
        // Enforce scroll top right before unlocking
        resetToTop();

        setDone(true); // hero video starts playing under the overlay
        setVisible(false); // overlay fades out

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
      },
      (expandAt + expandDuration) * 1000,
    );

    return () => {
      counterAnim.stop();
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
  }, [expandAt, progress]);

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
      {children}

      {/* The nav lives in the root layout, outside this overlay's stacking
          context, so hide it while the intro runs. */}
      {visible && <style>{".site-nav{opacity:0;pointer-events:none!important}"}</style>}

      <AnimatePresence>
        {visible && (
          <motion.div
            key="preloader"
            aria-hidden="true"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }}
            className="fixed inset-0 z-[100] overflow-hidden bg-black"
          >
            {/* Film grain */}
            <div className="pointer-events-none absolute -inset-[20%] z-30 animate-noise opacity-[0.07] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

            {/* 4:3 image box — every image fills it fully; after the last one
                lands, the box itself grows to full screen, carrying the image */}
            {rect && (
              <motion.div
                className="absolute overflow-hidden"
                initial={{ left: rect.x, top: rect.y, width: rect.w, height: rect.h, borderRadius: 14 }}
                animate={
                  expanded
                    ? { left: 0, top: 0, width: rect.vw, height: rect.vh, borderRadius: 0 }
                    : { left: rect.x, top: rect.y, width: rect.w, height: rect.h, borderRadius: 14 }
                }
                transition={{ duration: expandDuration, ease: EASE_IN_OUT }}
              >
                {layers.map((img, i) => {
                  const isFinal = i === layers.length - 1;
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
                          sizes={isFinal ? "100vw" : "(max-width: 640px) 90vw, 680px"}
                          priority
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
              initial={{ opacity: 0, y: 12 }}
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
    </PreloaderContext.Provider>
  );
}

