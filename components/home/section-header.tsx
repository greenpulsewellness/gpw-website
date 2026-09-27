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
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  line?: string;
  tone?: "light" | "dark";
  className?: string;
  aside?: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <h2
          className={cn(
            "font-semibold text-[2.25rem] leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-6xl",
            dark ? "text-canvas" : "text-pine",
          )}
        >
          {title}
        </h2>
        {line && (
          <p className={cn("mt-4 max-w-md text-base md:text-lg", dark ? "text-canvas/75" : "text-pine/70")}>
            {line}
          </p>
        )}
      </div>
      {aside}
    </Reveal>
  );
}
