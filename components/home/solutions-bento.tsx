"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { solutions, solutionsSection, type Solution } from "@/data/home";
import { cn } from "@/lib/utils";
import { MediaFrame } from "./media-frame";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

/**
 * Bento grid (Magic UI "Bento Grid" pattern, rebuilt to brand): tiles sized by
 * priority. Pointer devices play a short loop on hover.
 *
 *   desktop (12 col × 2 rows)      tablet (6 col)          mobile (2 col)
 *   ┌───────────┬───────┐          ┌───────────────┐       ┌───────────┐
 *   │           │ Age   │          │   Recover     │       │  Recover  │
 *   │  Recover  ├────┬──┤          ├───────┬───────┤       ├───────────┤
 *   │           │Live│Re│          │ Age   │ Live  │       │  AgeWell  │
 *   └───────────┴────┴──┘          │ Well  ├───────┤       ├─────┬─────┤
 *                                  │       │ Rehab │       │Live │Rehab│
 *                                  └───────┴───────┘       └─────┴─────┘
 */
const layout: Record<Solution["priority"], string> = {
  1: "col-span-2 h-[300px] sm:h-[380px] md:col-span-6 md:h-[440px] lg:col-span-6 lg:row-span-2 lg:h-auto",
  2: "col-span-2 h-[260px] sm:h-[320px] md:col-span-3 md:row-span-2 md:h-auto lg:col-span-6 lg:row-span-1",
  3: "col-span-2 h-[220px] sm:col-span-1 sm:h-[260px] md:col-span-3 md:h-[260px] lg:col-span-3 lg:h-auto",
  4: "col-span-2 h-[220px] sm:col-span-1 sm:h-[260px] md:col-span-3 md:h-[260px] lg:col-span-3 lg:h-auto",
};

export function SolutionsBento() {
  return (
    <section id="solutions" className="bg-canvas py-20 md:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader index="01" {...solutionsSection} />
        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4 lg:grid-cols-12 lg:grid-rows-[340px_300px]">
          {[...solutions]
            .sort((a, b) => a.priority - b.priority)
            .map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06} className={layout[s.priority]}>
                <Tile solution={s} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ solution }: { solution: Solution }) {
  const [hover, setHover] = useState(false);
  const small = solution.priority >= 3;

  return (
    <a
      id={solution.id}
      href="#equipment"
      className="group relative block h-full overflow-hidden rounded-panel bg-oat"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-calm group-hover:scale-[1.02]">
        <MediaFrame
          media={solution.image}
          sizes="(min-width: 1024px) 58vw, (min-width: 768px) 100vw, 100vw"
        />
        {/* Hover loop — only mounted into view on hover */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hover ? "opacity-100" : "opacity-0",
          )}
        >
          <MediaFrame media={solution.hoverVideo} tone="wood" playing={hover} />
        </div>
      </div>

      {/* Caption plate — frosted glassmorphism with blur and slight transparency */}
      <div
        className={cn(
          "absolute inset-x-2 bottom-2 flex items-end justify-between gap-2.5 rounded-card border border-white/50 bg-canvas/75 shadow-[0_8px_24px_rgba(22,57,46,0.08)] backdrop-blur-md transition-all duration-300 group-hover:bg-canvas/85 md:inset-x-3 md:bottom-3",
          small ? "p-3 sm:p-3.5 md:p-3.5" : "p-3.5 sm:p-4 md:p-5",
        )}
      >
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "font-semibold leading-tight tracking-tight text-pine",
              small ? "text-lg sm:text-base md:text-lg lg:text-xl" : "text-xl sm:text-2xl md:text-3xl",
            )}
          >
            {solution.name}
          </h3>
          <p className={cn("mt-1 text-pine/75", small ? "text-xs sm:text-xs md:text-xs lg:text-sm" : "text-xs sm:text-sm")}>
            {solution.audience}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            "grid shrink-0 place-items-center rounded-full border border-pine/15 bg-white/60 text-pine shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:border-lime group-hover:bg-lime",
            small ? "size-8 md:size-9" : "size-9 md:size-10",
          )}
        >
          <ArrowUpRight className={cn(small ? "size-3.5" : "size-4")} />
        </span>
      </div>
    </a>
  );
}
