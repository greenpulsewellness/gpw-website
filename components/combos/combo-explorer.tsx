"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";
import {
  type Combo,
  type ComboSegment,
  type ComboTier,
  combos,
  comboSegments,
  comboTiers,
  featuredComboId,
} from "@/data/combos";
import { getLenis } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { ComboCard, tierStyle } from "./combo-card";

type Acquisition = Combo["acquisition"];
const tierRank: Record<ComboTier, number> = { Essentials: 0, Signature: 1, Elite: 2 };

function Chip({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
        active
          ? "border-white bg-white font-medium text-neutral-950"
          : "border-white/15 bg-white/[0.03] text-white/70 hover:border-white/35 hover:text-white",
      )}
    >
      {children}
      {count !== undefined && (
        <span className={cn("label-mono text-[10px] tabular-nums", active ? "text-neutral-500" : "text-white/35")}>
          {count}
        </span>
      )}
    </button>
  );
}

export function ComboExplorer() {
  const [segment, setSegment] = useState<ComboSegment | "all">("all");
  const [tier, setTier] = useState<ComboTier | "all">("all");
  const [acquisition, setAcquisition] = useState<Acquisition | "all">("all");

  const filtered = useMemo(
    () =>
      combos.filter(
        (c) =>
          (segment === "all" || c.segment === segment) &&
          (tier === "all" || c.tier === tier) &&
          (acquisition === "all" || c.acquisition === acquisition),
      ),
    [segment, tier, acquisition],
  );

  // Group by space, each group laddered Essentials → Elite
  const groups = useMemo(
    () =>
      comboSegments
        .map((seg) => ({
          ...seg,
          items: filtered.filter((c) => c.segment === seg.id).sort((a, b) => tierRank[a.tier] - tierRank[b.tier]),
        }))
        .filter((g) => g.items.length > 0),
    [filtered],
  );

  // Chip counts respect the tier and buy/rent filters
  const segmentCount = (id: ComboSegment | "all") =>
    combos.filter(
      (c) =>
        (id === "all" || c.segment === id) &&
        (tier === "all" || c.tier === tier) &&
        (acquisition === "all" || c.acquisition === acquisition),
    ).length;

  // Filter bar stays in place; once it scrolls out of view (while the results are on screen),
  // a small floating pill offers a way back to it.
  const barRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const bar = barRef.current?.getBoundingClientRect();
      const root = rootRef.current?.getBoundingClientRect();
      if (!bar || !root) return;
      setShowPill(bar.bottom < 0 && root.bottom > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const backToFilters = () => {
    const el = barRef.current;
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -96 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const summary = [
    segment === "all" ? "All spaces" : comboSegments.find((x) => x.id === segment)?.label,
    tier !== "all" ? tier : null,
    acquisition !== "all" ? acquisition : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const reset = () => {
    setSegment("all");
    setTier("all");
    setAcquisition("all");
  };

  return (
    <div id="combo-explorer" ref={rootRef} className="scroll-mt-24">
      {/* Filter bar — sits in place (not sticky) */}
      <div
        ref={barRef}
        className="scroll-mt-24 rounded-[24px] border border-white/10 bg-white/[0.02] p-3 sm:p-4"
      >
        <div className="no-scrollbar -mx-3 flex gap-2 overflow-x-auto px-3 sm:-mx-4 sm:px-4 md:mx-0 md:flex-wrap md:px-0">
          <Chip active={segment === "all"} onClick={() => setSegment("all")} count={segmentCount("all")}>
            All spaces
          </Chip>
          {comboSegments.map((seg) => (
            <Chip key={seg.id} active={segment === seg.id} onClick={() => setSegment(seg.id)} count={segmentCount(seg.id)}>
              {seg.label}
            </Chip>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1" role="group" aria-label="Tier">
              {(["all", ...comboTiers] as const).map((tt) => (
                <button
                  key={tt}
                  type="button"
                  onClick={() => setTier(tt)}
                  aria-pressed={tier === tt}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-colors sm:text-[0.8125rem]",
                    tier === tt ? "bg-white/15 text-white" : "text-white/55 hover:text-white",
                  )}
                >
                  {tt !== "all" && <span className={cn("size-1.5 rounded-full", tierStyle[tt].dot)} aria-hidden />}
                  {tt === "all" ? "All tiers" : tt}
                </button>
              ))}
            </div>
            <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1" role="group" aria-label="Buy or rent">
              {(["all", "Buy or lease", "Rent"] as const).map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAcquisition(a)}
                  aria-pressed={acquisition === a}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs transition-colors sm:text-[0.8125rem]",
                    acquisition === a ? "bg-white/15 text-white" : "text-white/55 hover:text-white",
                  )}
                >
                  {a === "all" ? "Buy, lease or rent" : a}
                </button>
              ))}
            </div>
          </div>
          <p className="label-mono text-[10px] text-white/45" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "combo" : "combos"}
          </p>
        </div>
      </div>

      {/* Results */}
      <motion.div
        key={`${segment}-${tier}-${acquisition}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-16 pt-10 md:space-y-24 md:pt-14"
      >
        {groups.length === 0 && (
          <div className="rounded-[28px] border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="text-lg font-medium text-white">No combos match those filters.</p>
            <p className="mt-2 text-sm text-white/55">Every combo can be tailored, so tell us what you need.</p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-colors hover:border-white/50"
            >
              Clear filters
            </button>
          </div>
        )}

        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`seg-${group.id}`}>
            <div className="mb-6 flex items-center gap-4">
              <h2 id={`seg-${group.id}`} className="text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                {group.label}
              </h2>
              <span className="label-mono text-[10px] text-white/40">
                {group.items.length} {group.items.length === 1 ? "combo" : "combos"}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" aria-hidden />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((combo) => (
                <li key={combo.id} id={combo.id} className="scroll-mt-48">
                  <ComboCard combo={combo} featured={combo.id === featuredComboId} detailed />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </motion.div>

      {/* Floating way back to the filters */}
      <AnimatePresence>
        {showPill && (
          <motion.button
            type="button"
            onClick={backToFilters}
            initial={{ opacity: 0, y: 16, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 16, x: "-50%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-1/2 z-40 inline-flex max-w-[calc(100vw-10rem)] items-center gap-2.5 rounded-full border border-white/15 bg-[#111]/90 py-2.5 pl-4 pr-3 text-sm text-white shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <SlidersHorizontal className="size-4 shrink-0 text-white/70" aria-hidden />
            <span className="truncate">{summary}</span>
            <span className="label-mono shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold tabular-nums text-neutral-950">
              {filtered.length}
            </span>
            <span className="sr-only">— change filters</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
