import { ArrowRight, LifeBuoy, ListChecks, MessagesSquare, Ship, Wrench } from "lucide-react";
import { processSection, steps } from "@/data/home";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

const stepIcons = [MessagesSquare, ListChecks, Ship, Wrench, LifeBuoy];

/** Five steps as cards: a connected row on desktop, a stacked grid below. */
export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden border-t border-white/10 bg-canvas py-20 md:py-28 lg:py-32"
    >
      {/* soft top glow so the section reads as its own band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(255,255,255,0.06),transparent)]"
      />

      <div className="shell relative">
        <SectionHeader eyebrow={processSection.eyebrow} title={processSection.title} line={processSection.line} align="center" />

        <div className="relative mt-12 md:mt-16 lg:mt-20">
          {/* connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute inset-x-[10%] top-[5px] hidden h-px bg-gradient-to-r from-transparent via-white/30 to-transparent lg:block"
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((s, i) => {
              const Icon = stepIcons[i] ?? MessagesSquare;
              return (
                <li key={s.number} className="relative sm:last:col-span-2 lg:pt-9 lg:last:col-span-1">
                  {/* node on the line (desktop) */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 hidden size-[11px] -translate-x-1/2 rounded-full border-2 border-white bg-black shadow-[0_0_12px_rgba(255,255,255,0.45)] lg:block"
                  />
                  <Reveal delay={i * 0.08} className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] md:p-7">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-2 -top-4 select-none text-[6.5rem] font-semibold leading-none tracking-tighter text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.09]"
                      >
                        {s.number}
                      </span>

                      <div className="relative flex items-center justify-between">
                        <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white group-hover:text-neutral-950">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="label-mono text-white/60">Step {s.number}</span>
                      </div>

                      <h3 className="relative mt-6 text-xl font-semibold leading-tight tracking-tight text-pine md:text-[1.375rem]">
                        {s.title}
                      </h3>
                      <p className="relative mt-3 text-sm leading-relaxed text-pine/65 lg:text-[0.9375rem]">{s.line}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-10 flex justify-center md:mt-14">
          <a
            href="#enquiry"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Start with a consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
