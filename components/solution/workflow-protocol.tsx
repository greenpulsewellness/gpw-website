"use client";

import { CheckCircle2, Clock, Sparkles, TrendingUp, ShieldCheck, Cpu, Layers } from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";

interface WorkflowProtocolProps {
  solution: SolutionDetail;
}

export function WorkflowProtocol({ solution }: WorkflowProtocolProps) {
  return (
    <section className="py-20 md:py-28 border-t border-white/10 relative">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Workflow Protocol Timeline */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">
              Operational Best Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Session Flow & Protocol Guidance
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              We provide comprehensive standard operating procedures (SOPs) and client progression protocols written for recovery and rehabilitation spaces.
            </p>

            <div className="space-y-4">
              {solution.workflowProtocols.map((protocol, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl border border-white/10 bg-[#0d0d0d]/80 p-5 backdrop-blur-md hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold text-white">
                      {protocol.phase}
                    </h3>
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-mono text-white">
                      <Clock className="size-3" />
                      <span>{protocol.duration}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {protocol.guideline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Operator Commercial Benefits */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">
              Commercial Viability & ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Why Facility Directors Choose This Architecture
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              Maximizing revenue per square foot while maintaining effortless operational simplicity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solution.operatorBenefits.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="rounded-2xl border border-white/10 bg-[#0d0d0d]/70 p-5 backdrop-blur-md"
                >
                  <div className="rounded-xl bg-white/10 p-2.5 text-white w-fit mb-3">
                    <Sparkles className="size-4" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Target Venues Pill List */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-5">
              <span className="text-xs font-mono uppercase tracking-wider text-white block mb-3">
                Proven Suitability For:
              </span>
              <div className="space-y-3">
                {solution.targetVenues.map((v, vIdx) => (
                  <div key={vIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="size-3.5 text-white shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium">{v.type}:</strong>{" "}
                      <span className="text-neutral-400">{v.rationale}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
