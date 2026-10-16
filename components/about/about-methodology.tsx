import { CheckCircle2, ChevronRight, FileCheck, Layers, Settings, Wrench, ShieldAlert, Cpu } from "lucide-react";
import { aboutData } from "@/data/about";

export function AboutMethodology() {
  const { methodology } = aboutData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-black">
      <div className="shell relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="label-mono text-white font-semibold tracking-wider">
            Our Turnkey Methodology
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            How We Partner With You: From Concept Blueprint to Daily Sessions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We operate as an integrated equipment partner rather than a transactional vendor. Here is our six-phase turnkey execution methodology.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {methodology.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] flex flex-col justify-between"
            >
              <div>
                {/* Header with step number & phase label */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  Phase Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-light">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-white shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
