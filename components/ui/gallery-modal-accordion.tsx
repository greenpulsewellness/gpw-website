"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ModalityItem {
  id: string;
  number: string;
  name: string;
  url: string;
}

export const MODALITIES: ModalityItem[] = [
  {
    id: "heat",
    number: "01",
    name: "Heat",
    url: "/catalog-images/modality/heat-sauna-real.jpg",
  },
  {
    id: "cold",
    number: "02",
    name: "Cold",
    url: "/catalog-images/modality/cold-plunge-real.jpg",
  },
  {
    id: "light",
    number: "03",
    name: "Light",
    url: "/catalog-images/modality/light-therapy-real.jpg",
  },
  {
    id: "air",
    number: "04",
    name: "Air",
    url: "/catalog-images/modality/air-hbot-real.jpg",
  },
  {
    id: "relax",
    number: "05",
    name: "Relax",
    url: "/catalog-images/modality/relax-chair-real.jpg",
  },
  {
    id: "mobility",
    number: "06",
    name: "Mobility",
    url: "/catalog-images/modality/mobility-rehab-real.jpg",
  },
];

export default function GalleryModalAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* ── Desktop & Tablet Horizontal Accordion ── */}
      <div className="hidden md:flex h-[520px] lg:h-[580px] w-full gap-2.5 overflow-hidden rounded-[26px] p-2 bg-black border border-white/10">
        {MODALITIES.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <Link
              key={item.id}
              href={`/products?category=${item.id}`}
              onMouseEnter={() => setActiveIndex(idx)}
              className={cn(
                "group relative h-full overflow-hidden rounded-[20px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none border block",
                isActive
                  ? "flex-[4.2] border-white/40 shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
                  : "flex-1 border-white/10 hover:border-white/30",
              )}
            >
              {/* Background Image — Clear and unblurred in all states */}
              <div className="absolute inset-0 h-full w-full bg-[#0d0d0d]">
                <Image
                  src={item.url}
                  alt={`${item.name} modality`}
                  fill
                  sizes="(min-width: 1024px) 700px, 400px"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    isActive ? "scale-105" : "scale-100",
                  )}
                  priority={idx < 2}
                />

                {/* Subtle vignette for idle legibility — NO blur, NO grayscale */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                    isActive
                      ? "opacity-0"
                      : "bg-gradient-to-b from-black/50 via-transparent to-black/60 opacity-80",
                  )}
                />
              </div>

              {/* ── IDLE STATE: Vertical Bold Label (Hides smoothly on hover) ── */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-between items-center py-8 z-10 transition-all duration-300 pointer-events-none",
                  isActive ? "opacity-0 scale-95" : "opacity-100 scale-100",
                )}
              >
                <span className="label-mono text-xs font-semibold text-white/70 drop-shadow-md">
                  {item.number}
                </span>
                <span
                  style={{ writingMode: "vertical-rl" }}
                  className="rotate-180 uppercase tracking-[0.28em] text-lg lg:text-xl font-bold text-white whitespace-nowrap drop-shadow-lg"
                >
                  {item.name}
                </span>
                <span className="size-1.5 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>

              {/* ── HOVERED STATE: Clean image only, NO text inside image ── */}
            </Link>
          );
        })}
      </div>

      {/* ── Mobile Vertical Cards (Direct Navigation to Category Page) ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-3">
        {MODALITIES.map((item) => (
          <Link
            key={item.id}
            href={`/products?category=${item.id}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0d0d] transition-all hover:border-white/30"
          >
            <Image
              src={item.url}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 flex flex-col">
              <span className="label-mono text-[10px] text-white/50">{item.number}</span>
              <span className="font-bold text-sm text-white uppercase tracking-wider">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { GalleryModalAccordion as AccordionModal };
