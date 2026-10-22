"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Users, LayoutGrid, SearchCheck } from "lucide-react";
import { aboutData } from "@/data/about";

const PRINCIPLE_ICONS = [Users, LayoutGrid, SearchCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AboutStory() {
  const { story } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-y border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="shell relative z-10">
        {/* Asymmetric editorial grid: narrative text left-heavy, image bleeding right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="label-mono text-white font-semibold tracking-wider">{story.eyebrow}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-xl">
              {story.headline}
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
              <p>{story.narrative1}</p>
              <p className="text-white font-normal">{story.narrative2}</p>
              <p>{story.narrative3}</p>
            </div>

            {/* Typographic pull quote — no box, just scale and a rule */}
            <div className="mt-12 max-w-xl border-l-2 border-white/30 pl-6">
              <p className="text-xl sm:text-2xl md:text-[1.75rem] font-medium text-white leading-snug tracking-tight">
                "{story.quote.text}"
              </p>
              <cite className="mt-4 block not-italic text-xs font-mono uppercase tracking-wider text-neutral-400">
                — {story.quote.author}
              </cite>
            </div>
          </motion.div>

          {/* Image bleeding to the edge, sticky on scroll */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 -mx-4 sm:mx-0"
          >
            <div className="relative rounded-none sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl sm:border border-white/10">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-wellness-sanctuary.jpg"
                  alt="Architectural wellness sanctuary designed by Green Pulse"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono border-t border-white/15 pt-3">
                    <span className="text-neutral-400">Founded by</span>
                    <span className="text-white font-medium">Architect-led team</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Built for</span>
                    <span className="text-white font-medium">Gyms, clinics, hotels & homes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three principles — staggered diagonal reveal instead of a uniform grid */}
        <div className="mt-20 sm:mt-28">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold"
          >
            Three Values That Shape Our Work
          </motion.h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {story.highlights.map((h, i) => {
              const Icon = PRINCIPLE_ICONS[i] ?? Users;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 32 + i * 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-500">0{i + 1}</span>
                    <div className="h-px flex-1 bg-white/10 group-hover:bg-white/30 transition-colors" />
                    <Icon className="size-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-white">{h.title}</h4>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed font-light">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
