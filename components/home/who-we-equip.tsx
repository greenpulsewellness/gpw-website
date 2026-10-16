"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { audiences, audienceSection, contact } from "@/data/home";
import { getLenis } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "./enquiry-context";
import { MediaFrame } from "./media-frame";
import { SectionHeader } from "./section-header";

export function WhoWeEquip() {
  const { enquireAs } = useEnquiry();
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const mobileRailRef = useRef<HTMLUListElement>(null);
  const [mobileCard, setMobileCard] = useState(1);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeCard, setActiveCard] = useState(1);
  const [progressRatio, setProgressRatio] = useState(0);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (progress) => -progress * maxScroll);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressRatio(latest);
    const cardIndex = Math.min(
      audiences.length,
      Math.max(1, Math.round(latest * (audiences.length - 3)) + 1),
    );
    setActiveCard(cardIndex);
  });

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

  const step = (dir: 1 | -1) => {
    if (!targetRef.current) return;
    const target = targetRef.current;
    const totalTravel = target.offsetHeight - window.innerHeight;
    if (totalTravel <= 0) return;
    const stepAmount = totalTravel / 3;
    const rect = target.getBoundingClientRect();
    const currentTravel = -rect.top;
    const newTravel = Math.max(0, Math.min(totalTravel, currentTravel + dir * stepAmount));
    const targetScrollY = window.scrollY + rect.top + newTravel;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetScrollY, { duration: 0.7 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }
  };

  if (reducedMotion) {
    return (
      <section id="who-we-equip" className="bg-oat py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader index="04" {...audienceSection} />
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

  const scrollMobile = (dir: 1 | -1) => {
    const el = mobileRailRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onMobileScroll = () => {
    const el = mobileRailRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width + 16;
    const idx = Math.min(audiences.length, Math.max(1, Math.round(el.scrollLeft / cardWidth) + 1));
    setMobileCard(idx);
  };

  return (
    <>
      {/* Mobile view: native touch-scroll snapping carousel */}
      <section id="who-we-equip" className="block bg-oat py-16 md:hidden">
        <div className="shell">
          <SectionHeader
            index="04"
            {...audienceSection}
            aside={
              <div className="flex items-center gap-2">
                <span className="label-mono text-pine/60 tabular-nums">
                  0{mobileCard} / 0{audiences.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Previous audience"
                  disabled={mobileCard <= 1}
                  onClick={() => scrollMobile(-1)}
                >
                  <ArrowLeft />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Next audience"
                  disabled={mobileCard >= audiences.length}
                  onClick={() => scrollMobile(1)}
                >
                  <ArrowRight />
                </Button>
              </div>
            }
          />
        </div>

        <ul
          ref={mobileRailRef}
          onScroll={onMobileScroll}
          aria-label="Who we equip"
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-px-4"
        >
          {audiences.map((a) => (
            <li key={a.id} className="w-[82vw] shrink-0 snap-start">
              <div className="flex h-full flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-white/10 bg-[#0d0d0d]">
                  <MediaFrame
                    media={a.image}
                    tone="wood"
                    sizes="82vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
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
      </section>

      {/* Desktop & Tablet view: full 280vh scroll-driven motion track */}
      <section ref={targetRef} className="hidden md:block relative bg-oat" style={{ height: "280vh" }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden py-8 sm:py-10 md:py-14">
        {/* Header */}
        <div className="shell shrink-0">
          <SectionHeader
            index="04"
            {...audienceSection}
            aside={
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="label-mono text-pine/60 tabular-nums">
                  0{activeCard} / 0{audiences.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Previous audience"
                  disabled={progressRatio <= 0.05}
                  onClick={() => step(-1)}
                >
                  <ArrowLeft />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Next audience"
                  disabled={progressRatio >= 0.95}
                  onClick={() => step(1)}
                >
                  <ArrowRight />
                </Button>
              </div>
            }
          />
        </div>

        {/* Horizontal moving cards rail */}
        <div className="my-auto w-full overflow-hidden py-2">
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
    </>
  );
}
