"use client";

import { useRef } from "react";
import Link from "@/components/ui/intent-link";
import { useInView } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { spotlight, spotlightSection, type SpotlightItem } from "@/data/home";
import { useProducts } from "@/components/products-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "./enquiry-context";
import { MediaFrame } from "./media-frame";
import { Reveal } from "./reveal";
import { TierBadge } from "./tier-badge";

/**
 * Sticky scroll (Aceternity "Sticky Scroll Reveal" pattern, rebuilt to brand):
 * one machine per screen — media pinned on one side while three benefit
 * lines scroll past on the other. Stacks naturally below lg.
 */
export function Spotlight() {
  return (
    <section id="spotlight" aria-label="Spotlight" className="bg-canvas pt-12 md:pt-16 lg:pt-20">
      {spotlight.map((item, i) => (
        <Machine key={item.productId} item={item} index={i} />
      ))}
    </section>
  );
}

function Machine({ item, index }: { item: SpotlightItem; index: number }) {
  const { enquireProduct } = useEnquiry();
  const { productById } = useProducts();
  const product = productById(item.productId);
  const flip = index % 2 === 1;

  return (
    <article className="shell grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-0">
      {/* Pinned media */}
      <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-panel sm:aspect-[16/11] lg:sticky lg:top-24 lg:my-12 lg:aspect-auto lg:h-[calc(100svh-8rem)]">
          <Link href={`/products/${item.productId}`} className="block h-full w-full group/media">
            <MediaFrame media={item.media} sizes="(min-width: 1024px) 58vw, 100vw" />
          </Link>
          <span className="label-mono absolute left-4 top-4 rounded-full bg-black/80 border border-white/15 px-3 py-1.5 text-white backdrop-blur-md md:left-5 md:top-5 shadow-md">
            {String(index + 1).padStart(2, "0")} / {String(spotlight.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Scrolling copy */}
      <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <Reveal className="lg:flex lg:min-h-[55svh] lg:flex-col lg:justify-end lg:pb-10">
          <div className="flex flex-wrap gap-1.5">
            {product.tiers.map((t) => (
              <TierBadge key={t} tier={t} />
            ))}
          </div>
          <h2 className="mt-5 font-semibold text-3xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl text-white">
            <Link href={`/products/${item.productId}`} className="hover:text-white/80 transition-colors">
              {item.name}
            </Link>
          </h2>
          <p className="mt-4 max-w-sm text-neutral-300 md:text-lg">{item.line}</p>
        </Reveal>

        <ol className="mt-8 border-t border-white/15 lg:mt-0">
          {item.benefits.map((b, i) => (
            <Benefit key={b} text={b} index={i} />
          ))}
        </ol>

        <div className="pt-8 lg:flex lg:min-h-[45svh] lg:items-start lg:pt-12 flex flex-col sm:flex-row gap-3">
          <Button variant="dark" size="lg" className="w-full sm:w-auto min-h-[44px]" onClick={() => enquireProduct(item.productId)}>
            Enquire<span className="sr-only"> about {item.name}</span> <ArrowRight />
          </Button>
          <Link
            href={`/products/${item.productId}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/10 hover:text-white transition-colors min-h-[44px]"
          >
            <span>Explore Full Specs</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Benefit({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: "-42% 0px -42% 0px" });

  return (
    <li
      ref={ref}
      className={cn(
        "flex gap-4 border-b border-white/15 py-4 transition-opacity duration-500 sm:gap-5 sm:py-5 md:py-6 lg:min-h-[42svh] lg:items-center lg:py-0",
        active ? "lg:opacity-100" : "lg:opacity-30",
      )}
    >
      <span className="label-mono flex shrink-0 items-center gap-2 pt-1 text-neutral-400 sm:pt-1.5 lg:pt-0">
        <span
          aria-hidden="true"
          className={cn("size-1.5 rounded-full transition-colors duration-500", active ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "bg-neutral-600")}
        />
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-base font-medium leading-snug tracking-tight sm:text-xl md:text-2xl lg:text-[1.875rem] lg:leading-tight text-white">{text}</p>
    </li>
  );
}
