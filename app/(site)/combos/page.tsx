import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/schema";
import { ArrowDown, ArrowRight } from "lucide-react";
import { brand } from "@/data/home";
import { combos, comboSafetyNote, comboSegments, comboTiers, type ComboTier } from "@/data/combos";
import { EnquiryProvider } from "@/components/home/enquiry-context";
import { EnquiryForm } from "@/components/home/enquiry-form";
import { ComboExplorer } from "@/components/combos/combo-explorer";
import { TierPill } from "@/components/combos/combo-card";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Wellness Equipment Combos",
  description: `${combos.length} ready-made wellness and recovery equipment combos for gyms, spas, longevity centres, physio practices, senior living, corporate offices, sports teams and homecare. Supplied, installed and serviced across India by ${brand.name}.`,
  alternates: { canonical: "/combos" },
  openGraph: {
    url: "/combos",
    title: `Wellness Equipment Combos — ${brand.name}`,
    description: "Ready-made heat, cold, light, oxygen and recovery bundles for every kind of wellness space.",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Wellness Equipment Combos — ${brand.name}`,
  url: `${SITE_URL}/combos`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: combos.length,
    itemListElement: combos.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      description: c.pitch,
      url: `${SITE_URL}/combos#${c.id}`,
    })),
  },
};

const tierCopy: Record<ComboTier, string> = {
  Essentials: "A complete starter zone in one corner, at the lowest upfront cost.",
  Signature: "The full experience. Where most spaces should start.",
  Elite: "Flagship floors that make your space a destination.",
};

const stats = [
  { value: String(combos.length), label: "Ready-made combos" },
  { value: String(comboSegments.length), label: "Kinds of space" },
  { value: String(comboTiers.length), label: "Tiers" },
  { value: "Buy · Lease · Rent", label: "Your choice" },
];

export default function CombosPage() {
  return (
    <EnquiryProvider>
      <JsonLd data={jsonLd} />
      <main className="relative min-h-screen overflow-x-clip bg-canvas">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 md:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.12] blur-[120px]" />
            <div className="absolute top-40 right-[-10%] h-[360px] w-[480px] rounded-full bg-amber-300/[0.07] blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
          </div>

          <div className="shell relative text-center">
            <p className="label-mono inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-white/70">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" aria-hidden />
              Combos
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance bg-gradient-to-b from-white to-white/60 bg-clip-text text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-transparent sm:text-6xl lg:text-7xl">
              Ready-made combos for every wellness space.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              {combos.length} curated equipment bundles, from a gym&apos;s first recovery corner to a full longevity
              institute. Each one is installed, commissioned and serviced by us, and tailored to your floor.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#combo-explorer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                Browse combos
                <ArrowDown className="size-4" aria-hidden />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Talk to our team
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>

            <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={[
                    "px-4 py-5 md:py-6",
                    i % 2 === 1 ? "border-l border-white/10" : "",
                    i >= 2 ? "border-t border-white/10 md:border-t-0" : "",
                    i === 2 ? "md:border-l" : "",
                  ].join(" ")}
                >
                  <dt className="label-mono text-[10px] text-white/45">{s.label}</dt>
                  <dd className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Tier explainer */}
        <section className="shell pb-12 md:pb-16">
          <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
            {comboTiers.map((tier) => (
              <li key={tier} className="rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 md:p-6">
                <TierPill tier={tier} />
                <p className="mt-3 text-sm leading-relaxed text-white/70">{tierCopy[tier]}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Explorer */}
        <section className="shell pb-20 md:pb-28">
          <ComboExplorer />
          <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-white/40">{comboSafetyNote}</p>
        </section>

        {/* Closing CTA */}
        <section className="shell pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#10201a] via-[#0b0b0b] to-[#1d170b] px-6 py-14 text-center md:px-12 md:py-20">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[100px]" />
            <h2 className="relative mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Don&apos;t see your exact fit?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/65 md:text-lg">
              Every combo is a starting point. We&apos;ll map your space, clients and budget, and build the right mix.
            </p>
            <a
              href="/contact"
              className="relative mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Build my combo
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </section>

        <EnquiryForm />
      </main>
    </EnquiryProvider>
  );
}
