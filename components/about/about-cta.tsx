"use client";

import Link from "@/components/ui/intent-link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { aboutData } from "@/data/about";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  const { cta } = aboutData;
  const wa = whatsappUrl(cta.secondaryCta.whatsappMessage);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 border-t border-white/15">
      {/* Radiant glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,255,255,0.18),transparent_70%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="shell relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono text-white backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <Sparkles className="size-3.5" />
          <span>{cta.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          {cta.headline}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
          {cta.subtext}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="dark">
            <Link href={cta.primaryCta.href} className="inline-flex items-center gap-2 font-semibold">
              <span>{cta.primaryCta.label}</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold"
            >
              <WhatsAppColorIcon className="size-5" size={20} />
              <span>{cta.secondaryCta.label}</span>
            </a>
          </Button>

          <Button asChild size="lg" variant="ghost">
            <Link href={cta.catalogCta.href} className="text-neutral-300 hover:text-white">
              {cta.catalogCta.label}
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-xs font-mono text-neutral-400 flex flex-wrap items-center justify-center gap-6">
          <span>Layout, Install & Launch</span>
          <span className="size-1 rounded-full bg-neutral-600" />
          <span>Clear Quote Pack</span>
          <span className="size-1 rounded-full bg-neutral-600" />
          <span>One Point of Contact</span>
        </div>
      </motion.div>
    </section>
  );
}
