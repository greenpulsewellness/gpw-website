"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutMethodology() {
  const { methodology } = aboutData;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <span className="label-mono text-white font-semibold tracking-wider">
            Our Process
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            From First Conversation to First Session
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            One team from first conversation to opening day. Here are our six steps.
          </p>
        </motion.div>

        {/* Vertical timeline with scroll-progress line */}
        <div ref={containerRef} className="relative">
          <div className="absolute left-[27px] sm:left-[31px] top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] sm:left-[31px] top-0 w-px bg-white"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-14">
            {methodology.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-0 top-0 flex size-14 sm:size-16 items-center justify-center rounded-full border border-white/20 bg-black font-mono text-lg sm:text-xl font-bold text-white">
                  {step.number}
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {step.phase}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-300"
                      >
                        <CheckCircle2 className="size-3 text-white shrink-0" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
