import type { Tier } from "@/data/home";
import { cn } from "@/lib/utils";

const styles: Record<Tier, string> = {
  Essential: "border border-white/15 bg-white/5 text-neutral-300",
  Pro: "border border-white/30 bg-white/10 text-white font-medium",
  Signature: "bg-white text-neutral-950 font-semibold shadow-[0_0_12px_rgba(255,255,255,0.2)]",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className={cn("label-mono inline-flex h-6 items-center gap-1.5 rounded-md px-2.5 !text-[0.625rem]", styles[tier])}>
      {tier === "Signature" && <span aria-hidden="true" className="size-1.5 rounded-full bg-canvas" />}
      {tier}
    </span>
  );
}
