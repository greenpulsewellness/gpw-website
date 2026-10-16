"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import {
  setLenis,
  getLenis,
  setIsBackNavigation,
  saveScrollPosition,
  getSavedScrollForPath,
  scrollToId,
} from "@/lib/scroll";

/** Lenis smooth scroll with smart forward/back navigation restoration. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPopStateRef = useRef(false);
  const currentPathRef = useRef(pathname);
  const isInitialMountRef = useRef(true);

  // Keep current path ref updated
  useEffect(() => {
    currentPathRef.current = pathname;
  }, [pathname]);

  // Initialize Lenis and global scroll listeners
  useEffect(() => {
    // Disable native browser automatic scroll jumping to let our controller manage it smoothly
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenisInstance: Lenis | null = null;

    if (!reduceMotion) {
      lenisInstance = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        anchors: true,
      });
      setLenis(lenisInstance);
    }

    // Detect browser back/forward buttons & swipe gestures
    const handlePopState = () => {
      isPopStateRef.current = true;
      setIsBackNavigation(true);
    };

    // Track scroll position per page
    let scrollRafId: number | null = null;
    const handleScroll = () => {
      if (scrollRafId) return;
      scrollRafId = window.requestAnimationFrame(() => {
        scrollRafId = null;
        const currentY = window.scrollY || document.documentElement.scrollTop;
        const activePath = currentPathRef.current;
        if (activePath) {
          saveScrollPosition(activePath, currentY);
        }
      });
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafId) window.cancelAnimationFrame(scrollRafId);
      if (lenisInstance) {
        lenisInstance.destroy();
        setLenis(null);
      }
    };
  }, []);

  // Handle route changes: scroll to top for new pages, restore position for back navigation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isInitial = isInitialMountRef.current;
    isInitialMountRef.current = false;

    // Check if there is an anchor hash (e.g. /#equipment)
    const hash = window.location.hash;

    if (isPopStateRef.current) {
      // ── BACK / FORWARD HISTORY NAVIGATION ──
      // Restore user's previous scroll position on this page
      isPopStateRef.current = false;
      const savedY = getSavedScrollForPath(pathname) ?? 0;

      const restore = () => {
        const l = getLenis();
        if (l) {
          l.resize();
          l.scrollTo(savedY, { immediate: true });
        }
        window.scrollTo({ top: savedY, left: 0, behavior: "instant" });
      };

      restore();
      const raf1 = requestAnimationFrame(restore);
      const t1 = setTimeout(restore, 50);
      const t2 = setTimeout(restore, 160);
      const t3 = setTimeout(restore, 320);
      const tEnd = setTimeout(() => {
        setIsBackNavigation(false);
      }, 400);

      return () => {
        cancelAnimationFrame(raf1);
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(tEnd);
      };
    } else {
      // ── FORWARD / NEW PAGE NAVIGATION ──
      setIsBackNavigation(false);

      if (hash) {
        const targetId = hash.replace(/^#/, "");
        const tHash = setTimeout(() => {
          scrollToId(targetId);
        }, isInitial ? 200 : 50);
        return () => clearTimeout(tHash);
      }

      // If initial page load without back navigation, allow normal landing or preloader to handle top
      if (isInitial) {
        return;
      }

      // Fresh forward page visit: scroll to the top of the screen
      const scrollToTop = () => {
        const l = getLenis();
        if (l) {
          l.scrollTo(0, { immediate: true });
          l.resize();
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      };

      scrollToTop();
      const raf1 = requestAnimationFrame(scrollToTop);
      const t1 = setTimeout(scrollToTop, 50);
      const t2 = setTimeout(scrollToTop, 150);

      return () => {
        cancelAnimationFrame(raf1);
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

