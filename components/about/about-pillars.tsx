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
  const flow = pillars.slice(0, 3);
  const promise = pillars[3];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
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
          <span className="label-mono text-white font-semibold tracking-wider">How We Work</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Design, Equip, Launch, and Honest Claims Behind Every Project
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light">
            We plan the whole space, equip it from one catalogue and help you open it, with clear information at every step.
          </p>
        </motion.div>

        {/* Design -> Equip -> Launch as a connected three-step flow, with the claims-and-safety promise as a full-width band */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[7%] right-[7%] top-[26px] hidden md:block h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
          {flow.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon] || ShieldCheck;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="flex size-[52px] items-center justify-center rounded-full border border-white/25 bg-black font-mono text-sm font-bold text-white">
                    {pillar.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Step {i + 1}</span>
                </div>

                <div className="mt-6 flex flex-1 flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:p-8 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white">{pillar.title}</h3>
                    <div className="size-10 shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-mono text-white/90 font-medium">{pillar.tagline}</p>
                  <p className="mt-4 mb-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">{pillar.description}</p>

                  <ul className="mt-auto space-y-2 border-t border-white/10 pt-6">
                    {pillar.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                        <Check className="size-3 shrink-0 text-white" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {promise && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] p-7 sm:p-10"
          >
            <div className="lg:col-span-5 flex items-start gap-4">
              <div className="size-12 shrink-0 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Always</span>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white">{promise.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm font-mono text-white/90 font-medium">{promise.tagline}</p>
              </div>
            </div>
            <p className="lg:col-span-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {promise.description}
            </p>
            <ul className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2">
              {promise.specs.map((spec) => (
                <li
                  key={spec}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300"
                >
                  <Check className="size-3 text-white" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
