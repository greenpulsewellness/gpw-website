import Link from "next/link";
import { Accessibility, ArrowUpRight, Bone, HeartPulse, ThermometerSnowflake } from "lucide-react";
import FeatureShaderCards, { type ShaderCardItem } from "@/components/ui/feature-shader-cards";
import { solutions, solutionsSection, type SolutionId } from "@/data/home";
import { Reveal } from "./reveal";

// Per-suite icon and warp palette: heat-to-ice, sage, brand green, calm blue
const suiteStyle: Record<SolutionId, Pick<ShaderCardItem, "icon" | "colors">> = {
  recover: {
    icon: <ThermometerSnowflake aria-hidden />,
    colors: ["hsl(18, 90%, 35%)", "hsl(30, 100%, 55%)", "hsl(200, 90%, 30%)", "hsl(190, 100%, 60%)"],
  },
  agewell: {
    icon: <Accessibility aria-hidden />,
    colors: ["hsl(170, 70%, 22%)", "hsl(160, 60%, 50%)", "hsl(185, 70%, 30%)", "hsl(150, 50%, 65%)"],
  },
  rehabilitate: {
    icon: <Bone aria-hidden />,
    colors: ["hsl(120, 70%, 22%)", "hsl(140, 80%, 48%)", "hsl(100, 70%, 28%)", "hsl(130, 70%, 62%)"],
  },
  livewell: {
    icon: <HeartPulse aria-hidden />,
    colors: ["hsl(215, 80%, 28%)", "hsl(205, 90%, 58%)", "hsl(225, 70%, 35%)", "hsl(200, 90%, 70%)"],
  },
};

const suiteCards: ShaderCardItem[] = solutions.map((solution) => ({
  id: solution.id,
  title: solution.name,
  subtitle: solution.audience,
  description: solutionsSection.suites[solution.id].summary,
  tags: solutionsSection.suites[solution.id].highlights,
  href: solution.url,
  ...suiteStyle[solution.id],
}));

/** Text-led intro after the hero: what we do, why us, and the four suites. */
export function SolutionsIntro() {
  return (
    <section id="solutions" className="relative py-14 sm:py-20 md:py-28 lg:py-32">

      <div className="shell relative z-10">
        {/* Statement + supporting copy */}
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="label-mono text-pine/50">01 — {solutionsSection.eyebrow}</p>
            <h2 className="mt-4 text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.03em] text-pine sm:mt-5 sm:text-[2.25rem] sm:leading-[1.06] md:text-5xl lg:text-[3.5rem]">
              {solutionsSection.title}
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-10" delay={0.1}>
            <p className="text-[0.9375rem] leading-relaxed text-pine/70 sm:text-base md:text-lg">{solutionsSection.line}</p>
            <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/10 pt-6 sm:mt-8 sm:gap-x-8 sm:gap-y-6 sm:pt-8">
              {solutionsSection.proof.map((item) => (
                <div key={item.title}>
                  <dt className="text-sm font-semibold text-pine">{item.title}</dt>
                  <dd className="mt-1 text-[0.8125rem] leading-snug text-pine/55 sm:text-sm sm:leading-relaxed">{item.line}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Four suites */}
        <div className="mt-12 sm:mt-16 md:mt-24">
          <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5 md:mb-6">
            <p className="label-mono text-pine/50">{solutionsSection.suitesLabel}</p>
            <Link
              href="#equipment"
              className="inline-flex items-center gap-1 text-sm font-medium text-pine/70 transition-colors hover:text-pine"
            >
              View all equipment
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>

          <Reveal>
            <FeatureShaderCards items={suiteCards} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
