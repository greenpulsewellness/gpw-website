"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { usePreloaderDone } from "@/components/ui/layout-preloader";
import { hero } from "@/data/home";
import { MediaFrame } from "./media-frame";

export function Hero() {
  const [vh, setVh] = useState(800);
  const reducedMotion = useReducedMotion();
  const introDone = usePreloaderDone();
  const { scrollY } = useScroll();

  useEffect(() => {
    setVh(window.innerHeight);
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Recessing 3D "step down & go inside" scroll effects:
  const scale = useTransform(scrollY, [0, vh], [1, reducedMotion ? 1 : 0.90]);
  const y = useTransform(scrollY, [0, vh], [0, reducedMotion ? 0 : 45]);
  const opacity = useTransform(scrollY, [0, vh * 0.85, vh], [1, 0.7, 0.35]);

  // Curve corners rapidly in the first 25% of scroll so corners are visibly smooth immediately
  const rounded = useTransform(
    scrollY,
    [0, vh * 0.25],
    ["0px", reducedMotion ? "0px" : "40px"]
  );

  // Soft depth blur as it steps down into depth to remove harsh side sharpness
  const blur = useTransform(
    scrollY,
    [0, vh * 0.6],
    ["blur(0px)", reducedMotion ? "blur(0px)" : "blur(4px)"]
  );

  // Soft ambient depth shadow around the card
  const shadow = useTransform(
    scrollY,
    [0, vh * 0.3],
    [
      "0 0 0 rgba(0,0,0,0)",
      "0 35px 80px -15px rgba(0,0,0,0.7), 0 0 50px rgba(0,0,0,0.4)",
    ]
  );

  const dimOpacity = useTransform(scrollY, [0, vh], [0, reducedMotion ? 0 : 0.45]);

  const heroMedia = hero.media ?? hero.video;

  return (
    <motion.section
      id="top"
      aria-label="Introduction"
      style={{
        scale,
        y,
        opacity,
        borderRadius: rounded,
        filter: blur,
        boxShadow: shadow,
      }}
      className="on-dark sticky top-0 z-0 flex min-h-[600px] h-svh w-full flex-col overflow-hidden bg-pine text-white origin-center sm:min-h-[660px] md:min-h-[720px] will-change-transform [isolation:isolate] [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
    >
      {/* Video buffers during the entry animation; playback starts on hand-off */}
      <MediaFrame
        media={heroMedia}
        tone="pine"
        labelPosition="top-right"
        eager
        playing={introDone ? undefined : false}
      />

      {/* Gradients ensuring strong text contrast on the left while letting media show through */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-pine/95 via-pine/70 to-pine/20 sm:from-pine/90 sm:via-pine/50 sm:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pine/80 via-transparent to-black/35"
      />

      {/* Perimeter edge vignette softening the outer sides */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] z-[1]"
      />

      {/* Dynamic dimming overlay as the hero section steps back into depth */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: dimOpacity }}
        className="pointer-events-none absolute inset-0 bg-black/60 z-[2]"
      />

      <div className="shell relative z-10 flex flex-1 flex-col justify-center pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-28 md:pt-36">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          {/* Large bold uppercase display headline */}
          <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl sm:leading-[0.96] md:text-6xl md:leading-[0.93] lg:text-[4.25rem]">
            {hero.headline}
          </h1>

          {/* Clean subtitle paragraph */}
          <p className="mt-4 max-w-lg text-sm font-normal leading-relaxed text-white/90 sm:mt-5 sm:text-base md:text-lg">
            {hero.sub}
          </p>

          {/* Hyro-style rounded rectangular CTA buttons */}
          <div className="mt-7 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-lime px-7 py-3.5 text-xs font-black uppercase tracking-wider text-pine shadow-xl shadow-black/25 transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98] sm:min-h-[52px] sm:px-8 sm:py-4 sm:text-sm"
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 stroke-[2.75] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-black/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-pine hover:scale-[1.02] active:scale-[0.98] sm:min-h-[52px] sm:px-7 sm:py-4 sm:text-sm"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
