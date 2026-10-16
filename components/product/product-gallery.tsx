"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { MediaSlot, Tier } from "@/data/home";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { skipImageOptimization } from "@/lib/sanity/image";

interface ProductGalleryProps {
  name: string;
  category: string;
  tiers?: Tier[];
  primaryImage: MediaSlot;
  gallery?: MediaSlot[];
  specs?: string[];
}

export function ProductGallery({
  name,
  category,
  primaryImage,
  gallery = [],
}: ProductGalleryProps) {
  const [imgError, setImgError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbListRef = useRef<HTMLDivElement>(null);

  // Combine primary image and any extra gallery images
  const images = [primaryImage, ...gallery].filter((img) => Boolean(img?.src));
  const active = images[activeIndex] ?? primaryImage;
  const imageSrc = active.src;

  const hasMultipleImages = images.length > 1;

  // Scroll active thumbnail into view inside the vertical rail
  useEffect(() => {
    const container = thumbListRef.current;
    if (!container) return;
    const activeBtn = container.children[activeIndex] as HTMLElement | undefined;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Gallery Showcase: Vertical Thumbnails on Left + Main Image on Right */}
      <div className="flex flex-row gap-3 sm:gap-4 items-start w-full">
        {/* Left: Vertical Thumbnails Rail — Clean images alone */}
        {hasMultipleImages && (
          <div className="w-14 sm:w-16 md:w-20 shrink-0 select-none">
            <div
              ref={thumbListRef}
              role="tablist"
              aria-label={`${name} thumbnails`}
              className="flex flex-col gap-2 overflow-y-auto no-scrollbar max-h-[380px] sm:max-h-[460px] lg:max-h-[500px] py-1 scroll-smooth w-full items-center"
            >
              {images.map((img, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={img.id || `${img.src}-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show image ${i + 1} of ${images.length}`}
                    onClick={() => {
                      setActiveIndex(i);
                      setImgError(false);
                      setIsZoomed(false);
                    }}
                    className={cn(
                      "group relative aspect-[3/2] w-full overflow-hidden rounded-md border bg-[#0d0d0d] transition-all cursor-pointer focus:outline-hidden shrink-0",
                      isActive
                        ? "border-white ring-1 ring-white/60 shadow-md opacity-100"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/40"
                    )}
                  >
                    <Image
                      src={img.src!}
                      alt={img.alt || `${name} thumbnail ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 56px, 80px"
                      unoptimized={skipImageOptimization(img.src)}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Right: Main Image Container — Completely clean without pills */}
        <div className="flex-1 relative aspect-[3/2] w-full overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] shadow-md transition-all group/gallery">
          {imageSrc && !imgError ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "relative h-full w-full transition-transform duration-500 ease-out cursor-zoom-in",
                  isZoomed && "scale-115 cursor-zoom-out"
                )}
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? "Click to zoom out" : "Click to zoom in"}
              >
                <Image
                  src={imageSrc}
                  alt={active.alt || `${name} — commercial equipment`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  unoptimized={skipImageOptimization(imageSrc)}
                  onError={() => setImgError(true)}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-[#0d0d0d]">
              <div className="size-12 rounded-md border border-white/10 bg-white/5 flex items-center justify-center mb-3 text-white">
                <Sparkles className="size-5" />
              </div>
              <span className="label-mono text-[0.625rem] text-neutral-400">{category}</span>
              <h4 className="mt-1 text-sm font-semibold text-white">{name}</h4>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
