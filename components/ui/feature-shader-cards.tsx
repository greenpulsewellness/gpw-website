"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WarpParams } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

// The WebGL shader is decorative and sits below the fold: load it in its own chunk, after the text renders.
const Warp = dynamic(() => import("@paper-design/shaders-react").then((m) => m.Warp), { ssr: false });

export type ShaderCardItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  href: string;
  icon?: React.ReactNode;
  /** 4 colours for the animated warp background */
  colors: string[];
};

// Shape/motion presets, cycled per card so neighbours never look identical
const presets: Omit<WarpParams, "colors">[] = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: "checks",
    shapeScale: 0.08,
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes",
    shapeScale: 0.12,
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks",
    shapeScale: 0.1,
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes",
    shapeScale: 0.09,
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Cards with an animated WebGL warp behind a dark glass panel. The shader pauses off-screen.
 * Phones: swipeable snap row bleeding to the screen edge, with position dots. sm+: grid.
 */
export default function FeatureShaderCards({
  items,
  className,
}: {
  items: ShaderCardItem[];
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const list = listRef.current;
    const first = list?.firstElementChild as HTMLElement | null;
    if (!list || !first) return;
    const step =
      first.offsetWidth + parseFloat(getComputedStyle(list).columnGap || "0");
    setActive(Math.min(items.length - 1, Math.round(list.scrollLeft / step)));
  };

  const scrollToCard = (index: number) => {
    const card = listRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className={className}>
      <ul
        ref={listRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto overscroll-x-contain px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:gap-4 lg:grid-cols-4"
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className="relative min-h-[320px] w-[84%] shrink-0 snap-start sm:min-h-[340px] sm:w-auto"
          >
            <Link
              href={item.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine md:rounded-3xl"
            >
              <Warp
                aria-hidden
                className="absolute inset-0"
                style={{ height: "100%", width: "100%" }}
                {...presets[index % presets.length]}
                colors={item.colors}
                scale={1}
                rotation={0}
                speed={reducedMotion ? 0 : 0.8}
              />

              <div className="relative z-10 flex h-full flex-col bg-black/80 p-5 transition-colors duration-500 group-hover:bg-black/65 sm:p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <div className="text-white drop-shadow-lg [&_svg]:size-9">
                    {item.icon}
                  </div>
                  <span className="label-mono text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 sm:mt-8 text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-1 text-sm text-white/55">{item.subtitle}</p>
                )}
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/85 md:text-[0.9375rem]">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                  Explore suite
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Position dots — phones only */}
      <div className="mt-5 flex justify-center gap-1.5 sm:hidden">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToCard(index)}
            aria-label={`Show ${item.title}`}
            aria-current={index === active}
            className="flex h-6 items-center px-1"
          >
            <span
              className={cn(
                "block h-1 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-white" : "w-3 bg-white/25",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
