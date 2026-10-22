"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, ShieldCheck, Award } from "lucide-react";
import { aboutData } from "@/data/about";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  const { hero } = aboutData;
  const wa = whatsappUrl(aboutData.cta.secondaryCta.whatsappMessage);
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
      <div className="shell relative z-10">
        <nav aria-label="Breadcrumbs" className="mb-6 sm:mb-8 flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3 text-neutral-600" />
          <span className="text-white font-semibold">About Green Pulse</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              {hero.lead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button asChild size="lg" variant="dark">
                <Link href="/products" className="inline-flex items-center gap-2 font-semibold">
                  <span>Explore the Catalogue</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <WhatsAppColorIcon className="size-4.5" size={18} />
                  <span>Talk with Our Team</span>
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-white" />
                <span>Layout, Install &amp; Launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4 text-white" />
                <span>One Point of Contact</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white animate-pulse" />
                <span>Honest Claims</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div
              ref={imgRef}
              className="relative mx-auto w-full max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-900">
                <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
                  <Image
                    src="/sauna hero.jpg"
                    alt="Green Pulse Wellness architectural recovery sanctuary"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-black/80 p-3 sm:p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white flex items-center gap-1.5 font-semibold">
                      <span className="size-2 rounded-full bg-white" />
                      The GreenPulse Way
                    </span>
                    <span className="text-neutral-400">Design · Equip · Launch</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-200 font-medium">
                    Warm Timber Finishes · Spaces Planned Before They Are Built
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
