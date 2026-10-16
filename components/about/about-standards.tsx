import { ShieldCheck, Zap, Gauge, Award, Check } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutStandards() {
  const { standards } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-[#060606] border-y border-white/5">
      <div className="shell relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="label-mono text-white font-semibold tracking-wider">
            Material & Engineering Standards
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Verified Biophysical Safety, Material Purity, and Engineering Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Every material that touches a human body or radiates thermal energy is tested against strict biocompatibility and electromagnetic benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {standards.map((standard) => (
            <div
              key={standard.category}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                {standard.category}
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                {standard.headline}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {standard.description}
              </p>

              {/* Metrics Grid */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
                {standard.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-black/40 border border-white/5 p-3 text-center">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block line-clamp-1">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white/80 mt-1 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance Badges Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Full Spectrum Commercial Certification
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              All electronic systems operate natively on Indian 220V–240V 50Hz single/three-phase standards with CE & RoHS conformity.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-neutral-300">
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              CE Certified
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              RoHS Compliant
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              ISO 9001 / 13485
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white">
              Low-EMF &lt; 0.2 mG
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
