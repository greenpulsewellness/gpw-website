import { hero } from "@/data/home";
import { MediaFrame } from "./media-frame";
import { Reveal } from "./reveal";

export function Hero() {
  const heroMedia = hero.media ?? hero.video;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="on-dark relative isolate flex min-h-[540px] flex-col overflow-hidden bg-pine text-white h-svh sm:min-h-[600px] md:min-h-[680px]"
    >
      <MediaFrame media={heroMedia} tone="pine" labelPosition="top-right" eager />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pine/85 via-pine/30 to-black/20"
      />

      <div className="shell relative flex flex-1 flex-col justify-end pb-10 pt-24 sm:pb-16 sm:pt-28 md:pb-20">
        <Reveal className="max-w-xl">
          <h1 className="text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            Built for bodies that keep going.
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/80 sm:text-base md:text-lg">
            {hero.sub}
          </p>
          <div className="mt-6 flex flex-col items-stretch sm:flex-row sm:items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/75 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-pine"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 sm:border-transparent px-5 py-2.5 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
