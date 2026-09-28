"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import MorphGallery, { type MorphItem } from "@/components/ui/morph-gallery";
import { usePreloaderDone } from "@/components/ui/layout-preloader";

export type HeroSlide = MorphItem & {
  word: string;
  description: string;
};

/**
 * Curated wellness & recovery slides for the hero section.
 * Automatically synchronizes the single-word headline and editorial description
 * with the background WebGL noise dissolve every 4 seconds.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    word: "Recovery",
    description:
      "Advanced contrast therapy, cryo-restoration, and thermal suites engineered to accelerate cellular rejuvenation and deep systemic recovery.",
    src: "/recoverry.jpg",
    alt: "Advanced recovery and restoration therapy suite",
  },
  {
    word: "Wellness",
    description:
      "Holistic sensory sanctuaries designed to harmonize circadian rhythms, regulate autonomic tone, and cultivate deep restorative tranquility.",
    src: "/wellness.jpg",
    alt: "Holistic wellness sanctuary and sensory suite",
  },
  {
    word: "Performance",
    description:
      "Clinical-grade bio-stacking equipment and hyperbaric conditioning built for elite athletic preparation, cognitive sharpness, and peak endurance.",
    src: "/performance.jpg",
    alt: "Longevity performance and recovery space",
  },
  {
    word: "Longevity",
    description:
      "Preventative health infrastructure and biomarker-focused modalities providing turnkey longevity suites for premier clinics, resorts, and private residences.",
    src: "/longivity.png",
    alt: "AgeWell active recovery and rehabilitation sanctuary",
  },
  {
    word: "Vitality",
    description:
      "Precision physiotherapy, targeted photobiomodulation, and lymphatic drainage technologies crafted for lifetime mobility and sustained vitality.",
    src: "/vitality.jpg",
    alt: "Clinical rehabilitation and physiotherapy suite",
  },
];

export function Hero() {
  const introDone = usePreloaderDone();
  const [activeIndex, setActiveIndex] = useState(0);
  const [vh, setVh] = useState(800);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    setVh(window.innerHeight);
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 3D step-down & receding perspective as second section overrides
  const scale = useTransform(scrollY, [0, vh], [1, reducedMotion ? 1 : 0.92]);
  const y = useTransform(scrollY, [0, vh], [0, reducedMotion ? 0 : 40]);
  const opacity = useTransform(scrollY, [0, vh * 0.85, vh], [1, 0.8, 0.35]);
  const filter = useTransform(
    scrollY,
    [0, vh * 0.7],
    ["blur(0px)", reducedMotion ? "blur(0px)" : "blur(4px)"]
  );
  const dimOpacity = useTransform(scrollY, [0, vh], [0, reducedMotion ? 0 : 0.5]);

  const currentSlide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0];

  // Keep active index locked to 0 while preloader is active
  useEffect(() => {
    if (!introDone) {
      setActiveIndex(0);
    }
  }, [introDone]);

  return (
    <motion.section
      id="top"
      aria-label="Introduction"
      style={{
        scale,
        y,
        opacity,
        filter,
      }}
      className="sticky top-0 z-0 flex h-[100svh] min-h-[640px] md:min-h-[720px] w-full flex-col bg-neutral-950 p-2 sm:p-3 md:p-4 origin-center will-change-transform overflow-hidden"
    >
      {/* ── Framed Hero Canvas (Helious-inspired Architecture) ── */}
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[22px] sm:rounded-[30px] md:rounded-[38px] bg-neutral-950 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.6)]">
        {/* Background Visual: WebGL MorphGallery with 4-second automated loop (starts AFTER preloader hands off) */}
        <div className="absolute inset-0 select-none">
          <MorphGallery
            items={HERO_SLIDES}
            height="100%"
            autoplay={introDone ? 4000 : 0}
            duration={1800}
            loop={true}
            arrows={false}
            thumbnails={false}
            index={!introDone ? 0 : undefined}
            onIndexChange={setActiveIndex}
            className="absolute inset-0 h-full w-full"
          />

          {/* Top Subtle Vignette for Notch Navbar Contrast */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none z-[6]"
          />

          {/* Bottom Atmosphere Gradient — Dark Shade for Cinematic Contrast & Legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[70%] sm:h-[58%] bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-[6]"
          />

          {/* Dynamic dimming overlay as the hero steps back into depth on scroll */}
          <motion.div
            aria-hidden="true"
            style={{ opacity: dimOpacity }}
            className="pointer-events-none absolute inset-0 bg-black/70 z-[7]"
          />
        </div>

        {/* Top Spacer for Notch Navbar */}
        <div className="relative z-10 h-16 w-full pointer-events-none" />

        {/* Bottom Content Area: Dynamic Word Headline Left + Dynamic Description & CTA Right */}
        <div className="relative z-10 px-5 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-10 lg:px-14 lg:pb-12">
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Left Column: Dynamic Single Word Headline with Asterisk */}
            <div className="flex items-start select-none min-h-[3.8rem] sm:min-h-[5.5rem] md:min-h-[7rem] lg:min-h-[8.5rem] xl:min-h-[9.5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.word}
                  initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start"
                >
                  <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9.5rem] leading-[0.88] whitespace-nowrap drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {currentSlide.word}
                  </h1>
                  <span
                    aria-hidden="true"
                    className="ml-1 text-xl font-light text-white/90 sm:ml-2 sm:text-3xl md:text-4xl lg:text-6xl leading-none select-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  >
                    *
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Dynamic Editorial Paragraph + Pill Action Button */}
            <div className="flex max-w-sm flex-col items-start gap-4 sm:max-w-md lg:mb-3">
              <div className="min-h-[4.2rem] sm:min-h-[3.8rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSlide.word}
                    initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xs font-medium leading-relaxed text-white/85 sm:text-sm md:text-[0.9375rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                  >
                    {currentSlide.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div>
                <a
                  href="#equipment"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide text-neutral-950 shadow-2xl transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore equipment</span>
                  <span className="flex size-6 sm:size-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="size-3.5 sm:size-4 stroke-[2.5] text-neutral-950" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
