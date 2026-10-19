import Image from "next/image";
import { cn } from "@/lib/utils";

/** Transparent "Loop" ribbon art in /public/loop — same ribbon language as the logo. */
const ART = {
  wave: { w: 1200, h: 900 },
  "wave-outline": { w: 1200, h: 900 },
  "wave-glow": { w: 1200, h: 900 },
  band: { w: 2400, h: 640 },
  "band-line": { w: 2400, h: 640 },
} as const;

/**
 * Decorative ribbon behind a section. Fills its nearest positioned ancestor and clips
 * the art to it; position/size the art itself with `className`. Keep content above it
 * with `relative z-10` (the `shell` wrappers already do).
 */
export function LoopArt({
  variant,
  className,
  frameClassName,
}: {
  variant: keyof typeof ART;
  className?: string;
  frameClassName?: string;
}) {
  const { w, h } = ART[variant];
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 select-none overflow-hidden", frameClassName)}>
      <Image
        src={`/loop/loop-${variant}.svg`}
        alt=""
        width={w}
        height={h}
        unoptimized
        className={cn("absolute h-auto max-w-none", className)}
      />
    </div>
  );
}
