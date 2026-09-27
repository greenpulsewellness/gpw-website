"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** Above the fold: load immediately. */
  eager?: boolean;
  /** Controlled playback (e.g. hover). Omit to autoplay while in view. */
  playing?: boolean;
};

/**
 * Muted looping background video. The source is only attached once the
 * element nears the viewport; playback pauses immediately when scrolled off-screen
 * and never starts under prefers-reduced-motion (the poster stays).
 */
export function LazyVideo({ src, poster, className, eager = false, playing }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(eager);
  const [inView, setInView] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setInView(isVisible);
        if (isVisible) {
          setNear(true);
        }
      },
      { rootMargin: "0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shouldPlay = !reduce && near && (playing ?? inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (shouldPlay) {
      el.muted = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      el.pause();
    }
  }, [shouldPlay]);

  // Pause playback when the user switches tabs or window is minimized
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleVisibility = () => {
      if (document.hidden) {
        el.pause();
      } else if (shouldPlay) {
        el.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [shouldPlay]);

  return (
    <video
      ref={ref}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      src={near ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
