"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { type Combo, type ComboTier, comboProductId, comboUnits, siteNeedLabels } from "@/data/combos";
import { hiddenProductIds } from "@/data/home";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/home/enquiry-context";
import { cn } from "@/lib/utils";

/** Per-tier accent: Essentials silver, Signature emerald, Elite gold */
export const tierStyle: Record<ComboTier, { dot: string; text: string; ring: string }> = {
  Essentials: {
    dot: "bg-zinc-300",
    text: "text-zinc-300",
    ring: "border-zinc-300/25",
  },
  Signature: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    ring: "border-emerald-400/30",
  },
  Elite: {
    dot: "bg-amber-300",
    text: "text-amber-200",
    ring: "border-amber-300/30",
  },
};

export function TierPill({ tier, className }: { tier: ComboTier; className?: string }) {
  const t = tierStyle[tier];
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-1.5 rounded-full border bg-black/40 px-2.5 py-1 text-[10px]",
        t.ring,
        t.text,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", t.dot)} aria-hidden />
      {tier}
    </span>
  );
}

export function ComboCard({
  combo,
  featured,
  detailed = false,
}: {
  combo: Combo;
  featured?: boolean;
  /** Combos page: also show how it's used and site needs */
  detailed?: boolean;
}) {
  const { enquirePackage } = useEnquiry();
  return (
    <div className="relative h-full transition-transform duration-500 hover:-translate-y-1">
      {/* Recommended sits on the card's top edge, outside the clipped card */}
      {featured && (
        <span className="label-mono absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-neutral-950 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <Sparkles className="size-3" aria-hidden />
          Recommended
        </span>
      )}
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-5 transition-[border-color,box-shadow] duration-500 sm:p-6 md:rounded-[28px] md:p-7",
        featured
          ? "border-white/35 shadow-[0_0_60px_-12px_rgba(52,211,153,0.35)]"
          : "border-white/10 hover:border-white/25",
      )}
    >
      <header className="relative flex justify-center">
        <TierPill tier={combo.tier} />
      </header>

      <h3 className="relative mt-6 sm:mt-8 text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-[1.75rem]">
        {combo.name}
      </h3>
      <p className="relative mt-1.5 text-sm text-white/55">{combo.audience}</p>
      <p className="relative mt-4 text-sm leading-relaxed text-white/80 md:text-[0.9375rem]">{combo.pitch}</p>

      {/* What's inside */}
      <div className="relative mt-6">
        <p className="label-mono mb-2 text-[10px] text-white/40">What&apos;s inside</p>
        <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {combo.items.map(([name, qty]) => {
            const id = comboProductId(name);
            const qtyLabel = (
              <span className="label-mono w-7 shrink-0 text-[11px] tabular-nums text-white/45">{qty}×</span>
            );
            return (
              <li key={name}>
                {/* Hidden products stay in the combo but have no page to link to. */}
                {hiddenProductIds.has(id) ? (
                  <div className="flex items-center gap-3 py-2.5 text-sm text-white/85">
                    {qtyLabel}
                    <span className="flex-1">{name}</span>
                  </div>
                ) : (
                  <Link
                    href={`/products/${id}`}
                    className="group/item flex items-center gap-3 py-2.5 text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {qtyLabel}
                    <span className="flex-1">{name}</span>
                    <ArrowUpRight
                      className="size-3.5 text-white/0 transition-all group-hover/item:text-white/60 group-hover/item:-translate-y-px"
                      aria-hidden
                    />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {detailed && (
        <div className="relative mt-5 space-y-4">
          <div className="rounded-2xl bg-white/[0.04] p-4">
            <p className="label-mono text-[10px] text-white/40">How it&apos;s used</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">{combo.usage}</p>
          </div>
          {combo.needs.length > 0 && (
            <details className="group/needs rounded-2xl border border-white/[0.07] px-4 py-3 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white/70 transition-colors hover:text-white">
                Site requirements
                <ChevronDown className="size-4 transition-transform group-open/needs:rotate-180" aria-hidden />
              </summary>
              <ul className="mt-3 space-y-1.5">
                {combo.needs.map((n) => (
                  <li key={n} className="flex gap-2 text-[0.8125rem] leading-snug text-white/55">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-white/40" aria-hidden />
                    {siteNeedLabels[n]}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}

      <div className="relative mt-auto pt-6">
        <p className="label-mono mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/45">
          <span>{combo.items.length} products</span>
          <span aria-hidden>·</span>
          <span>{comboUnits(combo)} units</span>
          <span aria-hidden>·</span>
          <span className="text-white/70">{combo.acquisition}</span>
        </p>
        <Button
          variant={featured ? "primary" : "outline"}
          size="lg"
          className="w-full min-h-[44px]"
          onClick={() => enquirePackage(combo.id)}
        >
          Get a quote
          <span className="sr-only"> for {combo.name}</span>
          <ArrowRight />
        </Button>
      </div>
    </article>
    </div>
  );
}
