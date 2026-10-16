import Image from "next/image";
import { CheckCircle2, Quote, Compass, Layers, Zap } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutStory() {
  const { story } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-[#060606] border-y border-white/5">
      {/* Background radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="shell relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="label-mono text-white font-semibold tracking-wider">
            {story.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {story.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative text & highlights */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            <p>{story.narrative1}</p>
            <p className="text-white font-normal">{story.narrative2}</p>
            <p>{story.narrative3}</p>

            {/* Pull Quote Card */}
            <div className="relative mt-8 rounded-2xl border border-white/20 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md">
              <Quote className="size-8 text-white/40 mb-3" />
              <blockquote className="text-base sm:text-lg italic font-normal text-neutral-200 leading-relaxed">
                "{story.quote.text}"
              </blockquote>
              <cite className="mt-4 block not-italic text-xs font-mono uppercase tracking-wider text-white">
                — {story.quote.author}
              </cite>
            </div>

            {/* Core Highlights List */}
            <div className="pt-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                The GreenPulse Philosophy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {story.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-1.5 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>{h.title}</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Brand Blueprint */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden bg-neutral-900 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-wellness-sanctuary.jpg"
                  alt="Architectural wellness sanctuary equipped by GreenPulse"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-3 py-1 text-xs font-mono text-white/80 backdrop-blur-md">
                    <span>Precision Sanctuary Architecture</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Built for High-Duty Environments
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    Where biophilic timber finishes converge with military-spec pressure valves and zero-EMF heating elements.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2">
                <span className="text-neutral-400">Headquarters</span>
                <span className="text-white font-medium">Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2">
                <span className="text-neutral-400">Logistics Coverage</span>
                <span className="text-white font-medium">All 28 States & UTs (Pan-India)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Service SLA</span>
                <span className="text-white font-semibold">24-48 Hour Dedicated Technician Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
