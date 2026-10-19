"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutFaq() {
  const { faqs } = aboutData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="label-mono text-white font-semibold tracking-wider">
            Commercial Procurement
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
            Essential answers on lead times, Indian customs, warranty protocols, and turnkey installation support.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left py-6 sm:py-7 flex items-center justify-between gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-white/80 transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="size-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0 text-neutral-300 group-hover:border-white/30 group-hover:text-white"
                  >
                    <Plus className="size-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-7 pl-10 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
