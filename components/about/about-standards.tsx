"use client";

import { motion } from "motion/react";
import { aboutData } from "@/data/about";

export function AboutStandards() {
  const { standards } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-y border-white/5">
      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <span className="label-mono text-white font-semibold tracking-wider">
            How We Keep It Clear
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Honest Claims, Clear Specs, Careful Safety
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We describe products by what they are, document them the same way every time and put safety guidance in every project.
          </p>
        </motion.div>

        {/* Horizontal rows instead of a repeated card grid — number, text, metrics side by side */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {standards.map((standard, i) => (
            <motion.div
              key={standard.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 sm:py-10 items-start"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-2xl font-bold text-white/30">0{i + 1}</span>
              </div>

              <div className="md:col-span-6">
                <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                  {standard.category}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {standard.headline}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-xl">
                  {standard.description}
                </p>
              </div>

              <div className="md:col-span-5 grid grid-cols-3 gap-3">
                {standard.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block line-clamp-1">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white/80 mt-1 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Safety Information
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Not a substitute for medical advice. Please consult a doctor before use if you have a heart condition, are pregnant or have any health concern.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-neutral-300">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              Spec Sheet for Every Product
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              Operator Training
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              User Screening Guidance
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white">
              Honest Claims
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
