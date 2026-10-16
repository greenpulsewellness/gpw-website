"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutFaq() {
  const { faqs } = aboutData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-black">
      <div className="shell relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="label-mono text-white font-semibold tracking-wider">
            Commercial Procurement
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
            Essential answers on lead times, Indian customs, warranty protocols, and turnkey installation support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-200 overflow-hidden hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`size-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 text-neutral-300 ${
                      isOpen ? "rotate-180 text-white border-white/30" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
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
