"use client";

import { motion } from "motion/react";
import { Atom, ShieldCheck, Truck, HeartPulse, Check } from "lucide-react";
import { aboutData, type AboutPillar } from "@/data/about";

const ICON_MAP = {
  Atom: Atom,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
  HeartPulse: HeartPulse,
};

export function AboutPillars() {
  const { pillars } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-96 w-[700px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
      />

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <span className="label-mono text-white font-semibold tracking-wider">The Green Pulse Standard</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Four Non-Negotiable Pillars Governing Every Machine We Supply
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light">
            Before any system is accepted into our catalog, it undergoes rigorous inspection for biological efficacy, electrical safety, acoustic noise, and material purity.
          </p>
        </motion.div>

        {/* Asymmetric 12-col grid: pillar 1 wide, 2 narrow, 3 narrow, 4 wide — breaks the uniform-card monotony */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon] || ShieldCheck;
            const spanClass = i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6";

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:p-9 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)] flex flex-col justify-between ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                      Pillar {pillar.number}
                    </span>
                    <div className="size-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all">
                      <Icon className="size-5.5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-mono text-white/90 font-medium">{pillar.tagline}</p>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {pillar.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300"
                    >
                      <Check className="size-3 text-white" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
