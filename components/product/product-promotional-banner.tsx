"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "@/components/ui/intent-link";
import { motion, AnimatePresence } from "motion/react";

export interface BannerSlide {
  id: string;
  /** Banner artwork, 21:9 (e.g. 2520x1080) */
  src: string;
  /** Optional taller artwork (16:9) shown below the md breakpoint */
  mobileSrc?: string;
  alt: string;
  title: string;
  subtitle?: string;
  href: string;
}

const DEFAULT_SLIDES: BannerSlide[] = [
  // All artwork is 21:9 (~1916x821). Add more slides here (5-6 planned).
  {
    id: "arctic-tub",
    src: "/banners/arctic-tub-banner.webp",
    alt: "Arctic Tub Cold Plunge Ice Bath Tub",
    title: "Arctic Tub Cold Plunge Ice Bath Tub",
    href: "/products/cold-plunge-tub-new-ice-bath",
  },
  {
    id: "frostfire-pad",
    src: "/banners/frostfire-pad-banner.webp",
    alt: "Frostfire Pad Cold, Heat & Red Light Therapy Pad - Relieve, Recover, Rejuvenate",
    title: "Frostfire Pad Cold, Heat & Red Light Therapy Pad",
    subtitle: "3 Therapies, 4 Temperature Levels, Portable semiconductor recovery",
    href: "/products/cold-therapy-unit-806pro",
  },
  {
    id: "luma-cocoon-pro",
    src: "/banners/luma-cocoon-pro-banner.webp",
    alt: "Luma Cocoon Pro Full Body LED Light Therapy Bed with PEMF",
    title: "Luma Cocoon Pro Full Body LED Light Therapy Bed with PEMF",
    href: "/products/led-therapy-full-body-clam-2-m6l",
  },
  {
    id: "oxa-cube-duo",
    src: "/banners/oxa-cube-duo-banner.webp",
    alt: "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
    title: "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
    href: "/products/hbot-double-cube-chamber",
  },
];

interface ProductPromotionalBannerProps {
  slides?: BannerSlide[];
  intervalMs?: number;
  className?: string;
}

export function ProductPromotionalBanner({
  slides = DEFAULT_SLIDES,
  intervalMs = 6000,
  className = "",
}: ProductPromotionalBannerProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Wrap index safely within bounds
  const currentIndex = ((page % slides.length) + slides.length) % slides.length;
  const currentSlide = slides[currentIndex];
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
    },
    []
  );

  // 6-second auto slide timer
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [paginate, isPaused, intervalMs, slides.length, page]);

  // Drag / swipe (mouse + touch). A drag past the threshold changes slide; the
  // click that follows a drag is swallowed so it doesn't open the product link.
  const didDrag = useRef(false);
  const SWIPE_DISTANCE = 60;
  const SWIPE_VELOCITY = 400;

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const { offset, velocity } = info;
    if (offset.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY) paginate(1);
    else if (offset.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY) paginate(-1);
    setTimeout(() => {
      didDrag.current = false;
    }, 0);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
      scale: 0.99,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.99,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Promotional Banners"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className={`group relative w-full overflow-hidden bg-neutral-950 rounded-b-[1.5rem] sm:rounded-b-[2.25rem] lg:rounded-b-[3rem] select-none ${className}`}
    >
      {/*
        Banner art is 21:9 and spans the full page width edge to edge. The box keeps that exact ratio and
        the image is contained, so nothing is ever cropped or tinted. Slides with
        a mobileSrc switch to a 16:9 box below md so text stays readable.
      */}
      <div
        className={`relative w-full aspect-[21/9] ${
          currentSlide.mobileSrc ? "max-md:aspect-[16/9]" : ""
        }`}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={slides.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            dragMomentum={false}
            onDragStart={() => {
              didDrag.current = true;
            }}
            onDragEnd={handleDragEnd}
            style={{ touchAction: "pan-y" }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            <Link
              href={currentSlide.href}
              className="relative block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              tabIndex={0}
              draggable={false}
              onClick={(e) => {
                if (didDrag.current) e.preventDefault();
              }}
              aria-label={`View ${currentSlide.title}`}
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                priority={currentIndex === 0}
                sizes="100vw"
                draggable={false}
                className={`object-contain object-center ${
                  currentSlide.mobileSrc ? "max-md:hidden" : ""
                }`}
              />
              {currentSlide.mobileSrc && (
                <Image
                  src={currentSlide.mobileSrc}
                  alt={currentSlide.alt}
                  fill
                  priority={currentIndex === 0}
                  sizes="100vw"
                  draggable={false}
                  className="object-contain object-center md:hidden"
                />
              )}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Lazy-load the upcoming slide off-screen so it's cached before the carousel advances. */}
        {slides.length > 1 && (
          <Image
            key={nextSlide.id}
            src={nextSlide.mobileSrc ?? nextSlide.src}
            alt=""
            aria-hidden
            fill
            loading="lazy"
            sizes="100vw"
            className={`invisible pointer-events-none ${nextSlide.mobileSrc ? "md:hidden" : ""}`}
          />
        )}
        {slides.length > 1 && nextSlide.mobileSrc && (
          <Image
            src={nextSlide.src}
            alt=""
            aria-hidden
            fill
            loading="lazy"
            sizes="100vw"
            className="invisible pointer-events-none max-md:hidden"
          />
        )}
      </div>

    </section>
  );
}
