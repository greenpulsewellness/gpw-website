import { ArrowRight } from "lucide-react";
import { experience } from "@/data/home";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "./media-frame";
import { Reveal } from "./reveal";

export function ExperienceIt() {
  return (
    <section
      id="experience"
      aria-label={experience.eyebrow}
      className="on-dark relative isolate flex min-h-[480px] items-end overflow-hidden bg-pine text-white sm:min-h-[560px] md:min-h-[640px] lg:h-[85svh]"
    >
      <MediaFrame media={experience.video} tone="pine" labelPosition="top-right" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

      <Reveal className="shell relative py-12 sm:py-14 md:py-20">
        <p className="label-mono inline-flex items-center gap-2.5 rounded-full border border-white/40 px-3.5 py-2 text-white text-xs sm:text-sm">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
          {experience.event}
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-6xl lg:text-7xl">{experience.title}</h2>
        <p className="mt-4 max-w-md text-sm text-white/85 sm:mt-5 sm:text-base md:text-lg">{experience.line}</p>
        <Button asChild size="lg" className="mt-7 w-full sm:mt-8 sm:w-auto min-h-[44px]">
          <a href={experience.cta.href}>
            {experience.cta.label} <ArrowRight />
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
