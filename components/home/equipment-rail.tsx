"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { equipmentSection, products, type Product, type ProductCategory } from "@/data/home";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEnquiry } from "./enquiry-context";
import { MediaFrame } from "./media-frame";
import { SectionHeader } from "./section-header";

const CATEGORIES: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All Equipment", value: "all" },
  { label: "Wellness & Recovery", value: "Wellness & Recovery Technology" },
  { label: "Rehabilitation", value: "Rehabilitation & Physical Therapy" },
  { label: "Mobility & Assist", value: "Mobility & Assistive Technology" },
];

/**
 * Horizontal scroll-snap rail (Aceternity/21st.dev carousel pattern, rebuilt
 * on native scroll-snap so touch swipe, trackpads and keyboards all just work).
 */
export function EquipmentRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Reset scroll when category changes
  const handleCategoryChange = (cat: ProductCategory | "all") => {
    setSelectedCategory(cat);
    if (railRef.current) {
      railRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const step = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="equipment" className="overflow-hidden bg-oat py-20 md:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="02"
          {...equipmentSection}
          aside={
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="outline" size="icon" aria-label="Previous equipment" disabled={edges.start} onClick={() => step(-1)}>
                <ArrowLeft />
              </Button>
              <Button variant="outline" size="icon" aria-label="Next equipment" disabled={edges.end} onClick={() => step(1)}>
                <ArrowRight />
              </Button>
            </div>
          }
        />

        {/* Category filter pills - scrollable with edge bleed on mobile, wrapping on md+ */}
        <div className="no-scrollbar -mx-4 mt-8 flex items-center gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === "all"
                ? products.length
                : products.filter((p) => p.category === cat.value).length;
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleCategoryChange(cat.value)}
                className={cn(
                  "inline-flex h-9 shrink-0 items-center gap-2 rounded-full border px-4 text-xs font-medium transition-colors md:text-sm",
                  active
                    ? "border-pine bg-pine text-canvas"
                    : "border-wood/35 bg-canvas/80 text-pine/80 hover:border-pine hover:bg-canvas hover:text-pine",
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "label-mono text-[0.6875rem] tabular-nums",
                    active ? "text-canvas/70" : "text-pine/50",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <ul
        ref={railRef}
        onScroll={update}
        aria-label="Equipment"
        className="no-scrollbar relative mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scroll-px-4 sm:mt-10 md:mt-12 md:px-8 md:scroll-px-8 xl:px-[max(3rem,calc((100vw-88rem)/2+3rem))] xl:scroll-px-[max(3rem,calc((100vw-88rem)/2+3rem))]"
      >
        {filteredProducts.map((p, i) => (
          <li key={p.id} className="w-[84vw] max-w-[360px] shrink-0 snap-start sm:w-[340px] lg:w-[360px]">
            <ProductCard product={p} index={i} />
          </li>
        ))}
      </ul>

      {/* Progress: wood track, pine indicator */}
      <div className="shell mt-6 flex items-center gap-4 sm:mt-8">
        <span className="label-mono tabular-nums text-pine/60">
          {String(Math.min(filteredProducts.length, Math.round(progress * (filteredProducts.length - 1)) + 1)).padStart(2, "0")}
          {" / "}
          {String(filteredProducts.length).padStart(2, "0")}
        </span>
        <div className="relative h-px flex-1 bg-wood/40">
          <div
            className="absolute inset-y-[-1px] left-0 bg-pine"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { enquireProduct } = useEnquiry();
  return (
    <article className="flex h-full flex-col rounded-panel bg-canvas p-2.5">
      <div className="relative aspect-[1/1] overflow-hidden rounded-card sm:aspect-[4/5]">
        <MediaFrame media={product.image} sizes="(min-width: 640px) 360px, 80vw" />
        <span className="label-mono absolute right-4 top-4 text-pine/50">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-3.5 sm:pt-4">
        <span className="label-mono text-[0.6875rem] text-wood font-medium">
          {product.category}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug tracking-tight sm:text-lg md:text-xl">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-pine/70">{product.description}</p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Key specs">
          {product.specs.map((s) => (
            <li key={s} className="label-mono rounded-md border border-wood/35 px-2 py-0.5 !text-[0.625rem] text-pine/70 sm:py-1">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 pt-4 sm:pt-5">
          <Button variant="dark" size="md" className="flex-1 min-h-[44px]" onClick={() => enquireProduct(product.id)}>
            Enquire
            <span className="sr-only"> about {product.name}</span>
            <ArrowRight />
          </Button>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-wood/35 bg-canvas text-pine transition-colors hover:border-pine hover:bg-pine hover:text-canvas"
              aria-label={`View details for ${product.name} on external site`}
              title="View details"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
