"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { bentoSlides, type BentoSlideTile } from "@/data/home";
import { cn } from "@/lib/utils";

/**
 * Grid mapping per tile span in the Biotastic-inspired asymmetric bento layout:
 *
 * Desktop (12 col × 2 rows):
 *   Row 1: [Left Top (3)] [Center Top (3)] [Right Top Wide (6)]  = 12 cols
 *   Row 2: [Left Bottom (3)] [Center Bottom Wide (6)] [Right Bottom (3)] = 12 cols
 */
const tileSpans: Record<BentoSlideTile["span"], string> = {
  "left-top": "col-span-1 lg:col-span-3 lg:row-span-1 h-[170px] sm:h-[220px] md:h-[260px] lg:h-full",
  "center-top": "col-span-1 lg:col-span-3 lg:row-span-1 h-[170px] sm:h-[220px] md:h-[260px] lg:h-full",
  "right-top-wide": "col-span-2 lg:col-span-6 lg:row-span-1 h-[190px] sm:h-[240px] md:h-[280px] lg:h-full",
  "left-bottom": "col-span-1 lg:col-span-3 lg:row-span-1 h-[170px] sm:h-[220px] md:h-[260px] lg:h-full",
  "center-bottom-wide": "col-span-2 lg:col-span-6 lg:row-span-1 h-[190px] sm:h-[240px] md:h-[280px] lg:h-full",
  "right-bottom": "col-span-1 lg:col-span-3 lg:row-span-1 h-[170px] sm:h-[220px] md:h-[260px] lg:h-full",
};

// Cloned first slide appended to the end for seamless right-to-left infinite loop
const extendedSlides = [...bentoSlides, bentoSlides[0]];

export function SolutionsBento() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isPausedRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-scroll every 5 seconds (5000ms) moving right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // When transition finishes on the cloned slide (index 4), instantaneously snap back to index 0
  const handleTransitionEnd = () => {
    if (activeIndex >= bentoSlides.length) {
      setIsTransitioning(false);
      setActiveIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiping right-to-left (next)
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    } else if (distance < -50 && activeIndex > 0) {
      // Swiping left-to-right (previous)
      setIsTransitioning(true);
      setActiveIndex((prev) => prev - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden bg-canvas py-4 sm:py-6 md:py-8"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      {/* Full Bleed Corner-to-Corner Slider Container - Images Alone */}
      <div
        className="relative w-full px-1 sm:px-2 md:px-3 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={cn(
            "flex",
            isTransitioning
              ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              : "transition-none"
          )}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {extendedSlides.map((slide, slideIdx) => (
            <div key={`${slide.id}-${slideIdx}`} className="w-full shrink-0">
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-2.5 lg:grid-cols-12 lg:grid-rows-[280px_280px] lg:h-[580px] xl:h-[620px]">
                {slide.tiles.map((tile) => (
                  <Link
                    key={`${slideIdx}-${tile.id}`}
                    href={slide.url}
                    className={cn(
                      "group relative block overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900 transition-all duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]",
                      tileSpans[tile.span]
                    )}
                  >
                    <div className="relative h-full w-full overflow-hidden bg-neutral-950">
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 60vw, 100vw"
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
