import type { Tier } from "@/data/home";
import { cn } from "@/lib/utils";

const styles: Record<Tier, string> = {
  Essential: "border border-wood/50 bg-canvas text-pine",
  Pro: "bg-oat text-pine border border-wood/30",
  Signature: "bg-pine text-canvas",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className={cn("label-mono inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 !text-[0.625rem]", styles[tier])}>
      {tier === "Signature" && <span aria-hidden="true" className="size-1.5 rounded-full bg-lime" />}
      {tier}
    </span>
  );
}
