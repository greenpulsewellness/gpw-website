"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Compass, FileText, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";
import { useSolutionEnquiry } from "./solution-context";

interface SolutionHeroProps {
  solution: SolutionDetail;
}

export function SolutionHero({ solution }: SolutionHeroProps) {
  const { openEnquiryModal } = useSolutionEnquiry();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="shell relative z-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumbs" className="mb-6 sm:mb-8 flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3 text-neutral-600" />
          <Link href="/#solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <ChevronRight className="size-3 text-neutral-600" />
          <span className="text-white font-semibold">{solution.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-mono text-white backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Sparkles className="size-3.5" />
              <span>{solution.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {solution.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              {solution.tagline}
            </p>

            {/* Target Audience Callout */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0d0d0d]/80 p-4 backdrop-blur-md max-w-xl">
              <div className="mt-0.5 rounded-lg bg-white/10 p-2 text-white shrink-0">
                <Compass className="size-4" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Primary Facility Focus
                </span>
                <p className="text-sm font-medium text-neutral-200">
                  {solution.audience}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openEnquiryModal(`Solution Space Planning: ${solution.title}`)}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:bg-neutral-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] transition-all duration-300 w-full sm:w-auto"
              >
                <span>Request Space Layout & CAD</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="#curated-hardware"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all w-full sm:w-auto"
              >
                <span>Explore Curated Hardware</span>
              </a>
            </div>

            {/* Trust Assurance */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-white" />
                <span>Commercial Certified Equipment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="size-3.5 text-white" />
                <span>Custom MEP / CAD Packages</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Media Canvas */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-[28px] border border-white/15 bg-[#0d0d0d] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={solution.heroImage}
                  alt={`${solution.title} Suite layout`}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge on Media */}
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-neutral-950/80 px-3.5 py-1 text-xs font-mono text-white backdrop-blur-md">
                {solution.badge}
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl border border-white/10 bg-black/85 backdrop-blur-md">
                <p className="text-xs font-mono text-white mb-0.5">Turnkey Space Architecture</p>
                <p className="text-sm font-medium text-white line-clamp-2">
                  Precision-calibrated layouts tailored for maximum client retention and floor throughput.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Operational Metrics Strip ── */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {solution.metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-[#0d0d0d]/70 p-4 sm:p-5 backdrop-blur-md hover:border-white/20 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {metric.label}
              </div>
              <div className="mt-1 text-xs text-neutral-400">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
