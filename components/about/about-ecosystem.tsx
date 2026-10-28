"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "@/components/ui/intent-link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/about";
import { Button } from "@/components/ui/button";

export function AboutEcosystem() {
  const { ecosystem } = aboutData;
  const [activeId, setActiveId] = useState<string>(ecosystem[0].id);

  const activeSector = ecosystem.find((s) => s.id === activeId) || ecosystem[0];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 border-y border-white/5">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="label-mono text-white font-semibold tracking-wider">
            Spaces We Transform
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Planned for Six Kinds of Space
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            From wellness centres and gyms to hotels, care settings and private homes, every layout and product mix is planned around your business.
          </p>
        </motion.div>

        {/* Desktop Vertical Selector Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 pb-8 border-b border-white/10">
          {ecosystem.map((sector) => {
            const isSelected = sector.id === activeId;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveId(sector.id)}
                className={`cursor-pointer rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 border flex items-center gap-2 ${
                  isSelected
                    ? "bg-white/10 border-white/40 text-white/80 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span className={`size-1.5 rounded-full ${isSelected ? "bg-white" : "bg-neutral-600"}`} />
                <span>{sector.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Card Layout */}
        <div className="mt-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait">
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 space-y-6">
              <div>
                <span className="label-mono text-xs font-semibold text-white">
                  Target Vertical
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {activeSector.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-mono text-white/90 font-medium">
                  {activeSector.tagline}
                </p>
              </div>

              <p className="text-base text-neutral-300 font-light leading-relaxed">
                {activeSector.description}
              </p>

              {/* Modalities tags */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Typical Modality Mix
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSector.modalities.map((mod) => (
                    <span
                      key={mod}
                      className="rounded-lg border border-white/20 bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-white/80"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footprint & Operational Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">
                    Recommended Footprint
                  </span>
                  <span className="text-sm font-semibold text-white mt-1 block">
                    {activeSector.typicalFootprint}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">
                    Key Operator Impact
                  </span>
                  <ul className="mt-1 space-y-1 text-xs text-neutral-300">
                    {activeSector.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3 text-white shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Button asChild size="md" variant="outline">
                  <Link href="/#who-we-equip" className="inline-flex items-center gap-2">
                    <span>See Who We Equip</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
                <Button asChild size="md" variant="ghost">
                  <Link href="/products">Browse the Catalogue</Link>
                </Button>
              </div>
            </motion.div>
            </AnimatePresence>

            {/* Right Media Image: all sectors stacked and cross-faded so switching never waits on a fetch */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
                {ecosystem.map((sector) => (
                  <Image
                    key={sector.id}
                    src={sector.image}
                    alt={sector.id === activeId ? sector.title : ""}
                    aria-hidden={sector.id !== activeId}
                    fill
                    loading="lazy"
                    className={`object-cover object-center transition-opacity duration-500 ${
                      sector.id === activeId ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(min-width: 1024px) 35vw, 90vw"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10 text-xs font-mono text-white">
                  <span>Space Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
