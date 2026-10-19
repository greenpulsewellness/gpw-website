"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { audiences, audienceSection, contact } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { useEnquiry } from "./enquiry-context";
import { MediaFrame } from "./media-frame";
import { SectionHeader } from "./section-header";

export function WhoWeEquip() {
  const { enquireAs } = useEnquiry();
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  // Phones (< md) get a section height matched to the rail travel
  const [isMobile, setIsMobile] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (progress) => -progress * maxScroll);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = Math.max(0, totalWidth - viewportWidth);
      setMaxScroll(distance);
    };

    update();
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  if (reducedMotion) {
    return (
      <section id="who-we-equip" className="relative py-20 md:py-28 lg:py-32">
        <div className="shell relative z-10">
          <SectionHeader index="04" {...audienceSection} align="center" />
          <ul className="no-scrollbar mt-12 flex gap-4 overflow-x-auto pb-4 md:mt-16 md:gap-6">
            {audiences.map((a) => (
              <li key={a.id} className="w-[82vw] shrink-0 sm:w-[46vw] lg:w-[380px]">
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                    <MediaFrame
                      media={a.image}
                      tone="wood"
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 82vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-pine md:text-2xl">
                        {a.name}
                      </h3>
                      {a.cta.kind === "rental" ? (
                        <a
                          href={whatsappUrl(contact.rentalMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="label-mono inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white px-3 py-2 text-neutral-950 font-semibold transition-all hover:bg-neutral-200 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                        >
                          {a.cta.label} <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => enquireAs(a.businessType)}
                          className="label-mono group relative inline-flex shrink-0 items-center gap-1.5 self-start border-b border-white/25 pb-1 text-neutral-300 transition-colors hover:border-white hover:text-white mt-1"
                        >
                          {a.cta.label}
                          <span className="sr-only"> as {a.name}</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // Scroll-driven track: vertical scroll pins the section and slides the cards sideways.
  // Desktop: 280vh. Phones: height = one screen + rail travel, so 1px down moves the rail 1px across.
  return (
      <section
        id="who-we-equip"
        ref={targetRef}
        className="relative"
        style={{ height: isMobile && maxScroll > 0 ? `calc(100svh + ${maxScroll}px)` : "280vh" }}
      >
      <div className="sticky top-0 flex h-svh w-full flex-col justify-between py-10 md:h-screen md:py-14">
        {/* Header */}
        <div className="shell shrink-0 relative z-10">
          <SectionHeader
            index="04"
            {...audienceSection}
            align="center"
          />
        </div>

        {/* Horizontal moving cards rail */}
        <div className="my-auto w-full overflow-x-clip py-2">
          <motion.ul
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 px-4 sm:gap-6 md:px-8 xl:px-[max(3rem,calc((100vw-88rem)/2+3rem))]"
          >
            {audiences.map((a) => (
              <li
                key={a.id}
                className="w-[82vw] shrink-0 sm:w-[46vw] lg:w-[clamp(320px,26vw,400px)]"
              >
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[4/5] max-h-[46vh] w-full overflow-hidden rounded-card border border-white/10 bg-[#0d0d0d] transition-transform duration-300 hover:scale-[1.01]">
                    <MediaFrame
                      media={a.image}
                      tone="wood"
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 82vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
                        {a.name}
                      </h3>
                      {a.cta.kind === "rental" ? (
                        <a
                          href={whatsappUrl(contact.rentalMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="label-mono inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white px-3 py-2 text-neutral-950 font-semibold transition-all hover:bg-neutral-200 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                        >
                          {a.cta.label} <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => enquireAs(a.businessType)}
                          className="label-mono group relative inline-flex shrink-0 items-center gap-1.5 self-start border-b border-white/25 pb-1 text-neutral-300 transition-colors hover:border-white hover:text-white mt-1"
                        >
                          {a.cta.label}
                          <span className="sr-only"> as {a.name}</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
