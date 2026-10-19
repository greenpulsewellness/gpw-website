import { useId } from "react";
import { brand } from "@/data/home";
import { cn } from "@/lib/utils";

/**
 * "The Loop" wordmark — one green ribbon forms the "p" and "u".
 * Inline SVG + live text so it inherits Outfit from the page; geometry is in
 * Outfit units (1000 = 1em, x-height 483, descender 202, stem ~128).
 * Size it with font-size (e.g. `text-2xl`). `tone="light"` is for navy/video backgrounds.
 * Stand-in until the client supplies final artwork.
 */
export function Logo({
  tone = "color",
  tagline = true,
  className,
}: {
  tone?: "color" | "light";
  tagline?: boolean;
  className?: string;
}) {
  const light = tone === "light";
  return (
    <span
      role="img"
      aria-label={brand.name}
      className={cn(
        "inline-block whitespace-nowrap font-display font-semibold leading-none tracking-[-0.02em]",
        tagline && "pb-[0.25em]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "bg-clip-text text-transparent",
          light ? "bg-linear-to-r from-cyan to-[#bfe6fb]" : "bg-linear-to-r from-cyan to-royal",
        )}
      >
        green
      </span>
      <span aria-hidden="true" className="relative">
        <LoopMark light={light} className="inline-block h-[0.702em] w-[0.992em] align-[-0.202em]" />
        <span className={light ? "text-white" : "text-indigo"}>lse</span>
        {tagline && (
          // Positioned in wordmark ems: starts past the p stem, sits just under the baseline.
          <span className="absolute right-0 left-[0.2em] top-[1.05em] text-right">
            <span
              className={cn(
                "block font-sans text-[0.145em] font-medium leading-none tracking-[0.06em]",
                light ? "text-white/70" : "text-neutral-600",
              )}
            >
              WELLNESS, EMPOWERED.
            </span>
          </span>
        )}
      </span>
    </span>
  );
}

/** The "pu" ribbon alone — also exported as /public/loop-mark.svg for the favicon. */
export function LoopMark({ light = false, className }: { light?: boolean; className?: string }) {
  const id = `loop${useId().replace(/[^\w-]/g, "")}`;
  return (
    <svg viewBox="0 0 992 702" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="122" y1="702" x2="870" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b5d334" />
          <stop offset="0.45" stopColor="#4cb84a" />
          <stop offset="0.75" stopColor="#2e9a48" />
          <stop offset="1" stopColor="#4cb84a" />
        </linearGradient>
      </defs>
      {/* Closes the p bowl */}
      <path
        d="M122 251A187 187 0 0 0 496 251"
        stroke={light ? "rgba(255,255,255,0.9)" : "#2e3a8c"}
        strokeWidth="128"
      />
      <path
        d="M122 702V251A187 187 0 0 1 496 251V259A187 187 0 0 0 870 259V7"
        stroke={`url(#${id})`}
        strokeWidth="128"
      />
    </svg>
  );
}
