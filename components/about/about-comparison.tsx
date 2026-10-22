"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutComparison() {
  const { comparison } = aboutData;

  return (
    <section
      aria-labelledby="about-comparison-heading"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-14"
        >
          <span className="label-mono text-white font-semibold tracking-wider">{comparison.eyebrow}</span>
          <h2
            id="about-comparison-heading"
            className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            {comparison.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">{comparison.intro}</p>
        </motion.div>

        {/*
          One real <table> for every screen size. On small screens each row becomes a stacked card
          (CSS only), so crawlers and screen readers always see the same table markup.
        */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="md:rounded-3xl md:border md:border-white/10 md:bg-white/[0.02] md:overflow-hidden"
        >
          <table className="block md:table w-full border-collapse text-left">
            <caption className="sr-only">{comparison.caption}</caption>
            <thead className="sr-only md:not-sr-only md:table-header-group">
              <tr className="md:table-row border-b border-white/15">
                <th scope="col" className="px-6 py-4 text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold md:w-[20%]">
                  {comparison.columns.topic}
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-bold text-white bg-white/[0.06] md:w-[40%]">
                  {comparison.columns.greenpulse}
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-neutral-400 md:w-[40%]">
                  {comparison.columns.typical}
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group space-y-4 md:space-y-0">
              {comparison.rows.map((row) => (
                <tr
                  key={row.topic}
                  className="block md:table-row rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden md:rounded-none md:border-0 md:border-b md:border-white/10 md:bg-transparent md:last:border-b-0"
                >
                  <th
                    scope="row"
                    className="block md:table-cell px-5 pt-5 pb-3 md:px-6 md:py-5 md:align-top text-sm font-bold text-white md:font-semibold"
                  >
                    {row.topic}
                  </th>
                  <td className="block md:table-cell px-5 py-3 md:px-6 md:py-5 md:align-top bg-white/[0.05] md:bg-white/[0.04] text-sm text-white font-light leading-relaxed">
                    <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-neutral-400 md:hidden">
                      {comparison.columns.greenpulse}
                    </span>
                    <span className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2FD27A] text-black">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span>{row.greenpulse}</span>
                    </span>
                  </td>
                  <td className="block md:table-cell px-5 pt-3 pb-5 md:px-6 md:py-5 md:align-top text-sm text-neutral-400 font-light leading-relaxed">
                    <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 md:hidden">
                      {comparison.columns.typical}
                    </span>
                    <span className="flex items-start gap-2.5">
                      <X aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-500" strokeWidth={3} />
                      <span>{row.typical}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-300 font-light leading-relaxed">{comparison.summary}</p>
      </div>
    </section>
  );
}
