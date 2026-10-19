"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";

interface SolutionFaqProps {
  solution: SolutionDetail;
}

export function SolutionFaq({ solution }: SolutionFaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="shell max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-mono text-white mb-3">
            <HelpCircle className="size-3.5" />
            <span>Facility Operator FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Technical, electrical, and procurement insights for {solution.title}.
          </p>
        </div>

        <div className="space-y-3.5">
          {solution.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`rounded-full bg-white/10 p-1.5 text-neutral-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white bg-white/15" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
