"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { bentoSlides, type BentoSlideTile } from "@/data/home";
import { cn } from "@/lib/utils";

// Cloned first slide appended to the end for seamless right-to-left infinite loop
const extendedSlides = [...bentoSlides, bentoSlides[0]];
const slideCount = bentoSlides.length;

// Gap between slides — keeps neighbouring slides from ever touching while moving.
// Must match the `gap-*` classes on the track below.
const SLIDE_GAP = "1.5rem";

const tileBase =
  "group relative block overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900 transition-[border-color,box-shadow] duration-300 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine";

function Tile({ tile, href, wide, className }: { tile: BentoSlideTile; href: string; wide?: boolean; className?: string }) {
  return (
    <Link href={href} className={cn(tileBase, wide ? "aspect-[16/9]" : "aspect-square", className)}>
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes={wide ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          tile.fit === "contain" ? "object-contain" : "object-cover"
        )}
      />
    </Link>
  );
}

export function SolutionsBento() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isPausedRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const displayIndex = activeIndex % slideCount;
  const current = bentoSlides[displayIndex];

  const goNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev >= slideCount ? prev : prev + 1));
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev > 0) {
        setIsTransitioning(true);
        return prev - 1;
      }
      // At the first slide: jump silently to the clone, then animate back one step
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(slideCount - 1);
        });
      });
      return slideCount;
    });
  }, []);

  const goTo = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  // Auto-scroll every 5 seconds moving right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  // When transition finishes on the cloned slide, instantaneously snap back to index 0
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (activeIndex >= slideCount) {
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
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) goNext();
    else if (distance < -50) goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="solutions"
      aria-roledescription="carousel"
      aria-label="Wellness suites"
      className="relative w-full bg-canvas pt-8 sm:pt-10 md:pt-14 lg:pt-16 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div className="shell">
        {/* Header: current suite on the left, controls on the right */}
        <div className="mb-5 flex items-end justify-between gap-6 md:mb-7">
          <div className="min-w-0" aria-live="polite">
            <p className="label-mono text-[11px] text-pine/50">
              {String(displayIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
            </p>
            <h2 className="mt-2">
              <span className="block truncate text-2xl font-semibold tracking-[-0.02em] text-pine md:text-3xl">
                {current.name}
              </span>
              <span className="mt-1 block truncate text-sm text-pine/60 md:text-base">{current.audience}</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <Link
              href={current.url}
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-pine transition-colors hover:border-white/40 hover:bg-white/5 sm:inline-flex"
            >
              Explore suite
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous suite"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-pine transition-colors hover:border-white/40 hover:bg-white/5 md:size-11"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next suite"
              className="grid size-10 place-items-center rounded-full border border-white/15 text-pine transition-colors hover:border-white/40 hover:bg-white/5 md:size-11"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>

        {/* Viewport clips exactly at the shell's content edge — no neighbouring slide peeks in */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            onTransitionEnd={handleTransitionEnd}
            className={cn(
              "flex gap-6",
              isTransitioning
                ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                : "transition-none"
            )}
            style={{ transform: `translateX(calc(-${activeIndex} * (100% + ${SLIDE_GAP})))` }}
          >
            {extendedSlides.map((slide, slideIdx) => {
              const [a, b, c, d, e, f] = slide.tiles;
              const hidden = slideIdx % slideCount !== displayIndex;

              return (
                <div
                  key={`${slide.id}-${slideIdx}`}
                  className="flex w-full shrink-0 flex-col gap-2 sm:gap-3 lg:gap-4"
                  aria-hidden={hidden}
                  inert={hidden}
                >
                  {/* Row 1: [Square] [Square] [Wide 16:9] — 1 : 1 : 16/9 columns keep every tile the same height */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-[1fr_1fr_1.778fr] lg:gap-4">
                    <Tile tile={a} href={slide.url} />
                    <Tile tile={b} href={slide.url} />
                    <Tile tile={c} href={slide.url} wide className="col-span-2 lg:col-span-1" />
                  </div>

                  {/* Row 2: [Square] [Wide 16:9] [Square] */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-[1fr_1.778fr_1fr] lg:gap-4">
                    <Tile tile={d} href={slide.url} />
                    <Tile tile={e} href={slide.url} wide className="order-last col-span-2 lg:order-none lg:col-span-1" />
                    <Tile tile={f} href={slide.url} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 flex items-center justify-center gap-2 md:mt-8">
          {bentoSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${slide.name}`}
              aria-current={i === displayIndex}
              className="group flex h-6 items-center"
            >
              <span
                className={cn(
                  "block h-1 rounded-full transition-all duration-500",
                  i === displayIndex ? "w-8 bg-pine" : "w-4 bg-white/20 group-hover:bg-white/40"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
