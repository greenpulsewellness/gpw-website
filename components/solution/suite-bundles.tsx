"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock, Maximize2, Package, Sparkles } from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";
import { useSolutionEnquiry } from "./solution-context";

interface SuiteBundlesProps {
  solution: SolutionDetail;
}

export function SuiteBundles({ solution }: SuiteBundlesProps) {
  const { openEnquiryModal } = useSolutionEnquiry();

  return (
    <section id="turnkey-suites" className="py-20 md:py-28 border-t border-white/10 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">
            Turnkey Procurement & Fitouts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Pre-Configured Commercial Suites
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Eliminate vendor fragmentation. Our turnkey bundles combine complementary modalities into harmonious, revenue-generating packages delivered with single-source warranty accountability.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {solution.turnkeyBundles.map((bundle, idx) => (
            <div
              key={bundle.id}
              className={`flex flex-col rounded-[28px] border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 ${
                idx === 1
                  ? "border-white/40 bg-[#0d0d0d] shadow-[0_15px_40px_rgba(255,255,255,0.15)] relative"
                  : "border-white/10 bg-[#0d0d0d]/70 hover:border-white/20"
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-[0.6875rem] font-mono font-bold uppercase tracking-wider text-neutral-950 shadow-md">
                  <Sparkles className="size-3" />
                  <span>Most Popular Turnkey Fitout</span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-mono text-white uppercase tracking-wider block mb-1">
                  Package 0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{bundle.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {bundle.tagline}
                </p>
              </div>

              {/* Package Meta Specs */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl border border-white/10 bg-black mb-6 text-xs">
                <div>
                  <span className="text-neutral-500 font-mono block text-[0.625rem] uppercase">Footprint</span>
                  <div className="font-semibold text-white mt-0.5 flex items-center gap-1">
                    <Maximize2 className="size-3 text-white" />
                    <span>{bundle.recommendedFootprint}</span>
                  </div>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block text-[0.625rem] uppercase">Lead Time</span>
                  <div className="font-semibold text-white mt-0.5 flex items-center gap-1">
                    <Clock className="size-3 text-white" />
                    <span>{bundle.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* What is Included */}
              <div className="flex-1 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Included Systems & Scope:
                </span>
                <ul className="space-y-2.5">
                  {bundle.includedHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <div className="mt-0.5 rounded-full bg-white/15 p-0.5 text-white shrink-0">
                        <Check className="size-3" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bundle CTA */}
              <div className="pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => openEnquiryModal(`Turnkey Bundle Quote: ${bundle.name}`)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
                    idx === 1
                      ? "bg-white text-neutral-950 hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "bg-white/10 text-white hover:bg-white hover:text-neutral-950 hover:text-neutral-950"
                  }`}
                >
                  <span>Request Turnkey Quote</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
