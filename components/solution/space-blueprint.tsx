"use client";

import { useState } from "react";
import Link from "@/components/ui/intent-link";
import { 
  Building2, 
  Cpu, 
  Layers, 
  Maximize2, 
  Sparkles, 
  Volume2, 
  Wind, 
  Zap, 
  ArrowUpRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";
import { useProducts } from "@/components/products-context";
import { useSolutionEnquiry } from "./solution-context";

interface SpaceBlueprintProps {
  solution: SolutionDetail;
}

export function SpaceBlueprint({ solution }: SpaceBlueprintProps) {
  const { openEnquiryModal } = useSolutionEnquiry();
  const { products } = useProducts();
  const [activeZone, setActiveZone] = useState<number>(0);
  const plan = solution.spacePlanning;

  return (
    <section id="space-blueprint" className="py-20 md:py-28 border-y border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">
            Facility Architecture & Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            How We Blueprint & Equip Your Space
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Every square foot counts. We translate your empty shell or existing footprint into a high-performance wellness environment with comprehensive MEP and layout specifications.
          </p>
        </div>

        {/* ── Technical Infrastructure Specs Matrix ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white mb-2">
              <Maximize2 className="size-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Spatial Footprint</span>
            </div>
            <div className="text-sm font-semibold text-white">Min: {plan.minimumArea}</div>
            <div className="text-xs text-neutral-400 mt-1">Optimal: {plan.optimalArea}</div>
            <div className="text-xs text-neutral-500 mt-2">Clearance: {plan.ceilingHeight}</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white mb-2">
              <Zap className="size-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Electrical Requirements</span>
            </div>
            <div className="text-sm font-medium text-white">{plan.electrical}</div>
            <div className="text-xs text-neutral-500 mt-2">Clean isolated grounding provided with pre-install diagrams.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white mb-2">
              <Wind className="size-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">HVAC & Climate</span>
            </div>
            <div className="text-sm font-medium text-white">{plan.hvacVentilation}</div>
            <div className="text-xs text-neutral-500 mt-2">Dedicated extract ensures steady thermal stabilization.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white mb-2">
              <Volume2 className="size-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Acoustic Isolation</span>
            </div>
            <div className="text-sm font-medium text-white">{plan.acoustics}</div>
            <div className="text-xs text-neutral-500 mt-2">Maintains sensory relaxation and guest privacy.</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white mb-2">
              <Layers className="size-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Plumbing & Wet Services</span>
            </div>
            <div className="text-sm font-medium text-white">{plan.plumbingDrainage}</div>
            <div className="text-xs text-neutral-500 mt-2">Coordination drawings supplied to mechanical contractors.</div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/[0.02] p-5 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white mb-2">
                <Sparkles className="size-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Turnkey MEP Delivery</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Need our team to review your architectural DWG/PDF drawings? We provide 3D equipment placement overlays within 48 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openEnquiryModal(`Architectural CAD Consultation: ${solution.title}`)}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-white/80 transition-colors"
            >
              <span>Upload Drawings for Review</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>

        {/* ── Interactive Zoning Blueprint ── */}
        <div className="rounded-[28px] border border-white/15 bg-[#0d0d0d]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-white block mb-1">
                Spatial Programming
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Recommended Functional Zones
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {plan.zones.map((zone, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveZone(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                    activeZone === idx
                      ? "bg-white text-neutral-950 font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  Zone 0{idx + 1}: {zone.zoneName}
                </button>
              ))}
            </div>
          </div>

          {/* Active Zone Detail View */}
          {plan.zones[activeZone] && (
            <div className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-xs font-mono text-white mb-3">
                    <span>Target Area: {plan.zones[activeZone].squareFootage}</span>
                    <span>·</span>
                    <span>Modality: {plan.zones[activeZone].modality}</span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3">
                    {plan.zones[activeZone].zoneName}
                  </h4>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    {plan.zones[activeZone].description}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Zone Hardware Integration:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {plan.zones[activeZone].hardwareIds.map((hId) => {
                        const product = products.find((p) => p.id === hId);
                        if (!product) return null;
                        return (
                          <Link
                            key={hId}
                            href={`/products/${product.id}`}
                            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 px-3.5 py-2 text-xs text-neutral-200 transition-all"
                          >
                            <span className="font-medium group-hover:text-white/80 transition-colors">
                              {product.name}
                            </span>
                            <ArrowUpRight className="size-3 text-neutral-400 group-hover:text-white" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black p-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-white block mb-3">
                    Guest & Operator Flow
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {plan.layoutDescription}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="size-3.5 text-white shrink-0" />
                      <span>Dedicated clean circulation corridors</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="size-3.5 text-white shrink-0" />
                      <span>Sound-isolated mechanical and pump enclosures</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="size-3.5 text-white shrink-0" />
                      <span>Rapid turn-over sanitization pathways</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
