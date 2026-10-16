import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, PhoneCall, Award } from "lucide-react";
import { aboutData } from "@/data/about";
import { contact } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  const { hero } = aboutData;
  const wa = whatsappUrl(aboutData.cta.secondaryCta.whatsappMessage);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 bg-black">
      {/* ── Ambient Radial Atmosphere ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[650px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.15),transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="shell relative z-10">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumbs" className="mb-6 sm:mb-8 flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3 text-neutral-600" />
          <span className="text-white font-semibold">About GreenPulse Wellness</span>
        </nav>

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-mono text-white backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Sparkles className="size-3.5" />
              <span>{hero.badge}</span>
              <span className="hidden sm:inline text-white/80">|</span>
              <span className="hidden sm:inline text-neutral-300">{hero.subBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              {hero.lead}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button asChild size="lg" variant="dark">
                <Link href="/products" className="inline-flex items-center gap-2 font-semibold">
                  <span>Explore Equipment Catalog</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsAppColorIcon className="size-4.5" size={18} />
                  <span>Talk with an Engineer</span>
                </a>
              </Button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-white" />
                <span>Pan-India Turnkey Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4 text-white" />
                <span>CE & ISO 9001 Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white animate-pulse" />
                <span>Zero-EMF Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-900">
                <Image
                  src="/sauna hero.jpg"
                  alt="GreenPulse Wellness architectural recovery sanctuary"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Overlaid Live Spec Tag */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-black/80 p-3 sm:p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white flex items-center gap-1.5 font-semibold">
                      <span className="size-2 rounded-full bg-white" />
                      GreenPulse Benchmark
                    </span>
                    <span className="text-neutral-400">Low-EMF &lt; 0.2 mG</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-200 font-medium">
                    Canadian Cedar & Hemlock Craftsmanship · Calibrated Biological Irradiance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Impact Numbers Strip ── */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-white group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-neutral-400 leading-relaxed font-light">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
