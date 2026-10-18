"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Pins the page body once its bottom edge reaches the viewport bottom, so the
 * footer card scrolls up over it instead of the page simply ending.
 *
 * The body is `position: sticky` with `top = min(0, viewport − bodyHeight)`:
 * tall pages pin by their bottom edge, short ones pin at the top.
 */
export function FooterStage({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const update = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // 0 while the footer is below the fold → 1 once its top edge reaches the top.
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div className="relative">
      <div ref={contentRef} data-stage-content className="sticky">
        {children}
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            style={{ opacity: dim }}
            className="pointer-events-none absolute inset-0 z-[90] bg-black"
          />
        )}
      </div>
      <div ref={footerRef} className="relative z-10">
        {footer}
      </div>
    </div>
  );
}
