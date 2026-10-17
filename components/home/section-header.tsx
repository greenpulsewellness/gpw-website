import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** One headline + one line. Eyebrow is a mono index label. */
export function SectionHeader({
  index,
  eyebrow,
  title,
  line,
  tone = "light",
  className,
  aside,
  align = "left",
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  line?: string;
  tone?: "light" | "dark";
  className?: string;
  aside?: React.ReactNode;
  align?: "left" | "center";
}) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", center && "mx-auto")}>
        <h2
          className={cn(
            "font-semibold text-[2.25rem] leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-6xl",
            dark ? "text-canvas" : "text-pine",
          )}
        >
          {title}
        </h2>
        {line && (
          <p className={cn("mt-4 max-w-md text-base md:text-lg", center && "mx-auto", dark ? "text-canvas/75" : "text-pine/70")}>
            {line}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  );
}
