"use client";

import Image from "next/image";

interface ProductPromotionalBannerProps {
  /**
   * Banner image source path or URL.
   * Default placeholder: "/products-banner.jpg" in /public/
   * Recommended dimensions:
   *  - Desktop / Ultra-wide: 1920 × 450 px (or 3840 × 900 px for 2x Retina / 4K)
   *  - Aspect ratio: ~ 4.25 : 1 (or 4 : 1 to 5 : 1 widescreen strip)
   */
  imageSrc?: string;
  altText?: string;
}

export function ProductPromotionalBanner({
  imageSrc = "/products-banner.jpg",
  altText = "GreenPulse Wellness Commercial Equipment Collection",
}: ProductPromotionalBannerProps) {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-950 border-b border-white/10 h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
      {/* Edge-to-Edge Full-Bleed Banner Image */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle cinematic gradient vignette for luxury depth & top navbar contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"
      />
    </div>
  );
}
