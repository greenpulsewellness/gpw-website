import { processSection, steps } from "@/data/home";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

/** Five steps: a row on tablet/desktop, a vertical timeline on mobile. */
export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-canvas py-20 md:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader index="05" {...processSection} />
        <ol className="relative mt-12 grid gap-0 md:mt-20 md:grid-cols-5 md:gap-4 lg:gap-8">
          {/* connecting wood line */}
          <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-wood/40 md:inset-x-0 md:bottom-auto md:top-[5px] md:h-px md:w-auto" />
          {steps.map((s, i) => (
            <li key={s.number} className="relative pb-10 pl-9 last:pb-0 md:pb-0 md:pl-0 md:pt-10">
              <Reveal delay={i * 0.07}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 size-[11px] rounded-full border border-wood bg-canvas md:top-0"
                />
                <p className="label-mono text-wood">{s.number}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight md:text-2xl lg:text-[1.625rem]">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm text-pine/70 lg:text-base">{s.line}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
