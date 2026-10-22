"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import type { SolutionDetail } from "@/data/solutions-data";
import { getCuratedProductsForSolution } from "@/data/solutions-data";
import { useProducts } from "@/components/products-context";
import { TierBadge } from "@/components/home/tier-badge";
import { useSolutionEnquiry } from "./solution-context";
import type { Tier } from "@/data/home";

interface SolutionCatalogProps {
  solution: SolutionDetail;
}

const TIERS: { label: string; value: Tier | "all" }[] = [
  { label: "All Tiers", value: "all" },
  { label: "Signature", value: "Signature" },
  { label: "Pro", value: "Pro" },
  { label: "Essential", value: "Essential" },
];

export function SolutionCatalog({ solution }: SolutionCatalogProps) {
  const { openEnquiryModal } = useSolutionEnquiry();
  const { products } = useProducts();
  const allCurated = useMemo(() => getCuratedProductsForSolution(solution, products), [solution, products]);
  const [selectedTier, setSelectedTier] = useState<Tier | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allCurated.filter((p) => {
      const matchesTier = selectedTier === "all" || p.tiers.includes(selectedTier);
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTier && matchesSearch;
    });
  }, [allCurated, selectedTier, searchQuery]);

  return (
    <section id="curated-hardware" className="py-20 md:py-28">
      <div className="shell">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-2">
              Curated Hardware Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Hardware Engineered for {solution.title}
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Every product comes with a standard spec sheet covering size, power, placement needs and what is included.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal(`Full Catalog Quotation: ${solution.title}`)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white hover:text-neutral-950 hover:text-neutral-950 transition-all duration-300"
            >
              <span>Download Full Spec Sheets</span>
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 mb-10 backdrop-blur-md">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
            <input
              type="text"
              placeholder={`Search ${solution.title} hardware...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/15 bg-black pl-10 pr-4 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-white transition-all"
            />
          </div>

          {/* Tier Filters */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono text-neutral-400 mr-1 hidden lg:inline">Tier:</span>
            {TIERS.map((tier) => (
              <button
                key={tier.label}
                type="button"
                onClick={() => setSelectedTier(tier.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedTier === tier.value
                    ? "bg-white text-neutral-950 font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-[24px] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-lg hover:border-white/30 hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)] transition-all duration-300"
            >
              {/* Product Media Box */}
              <Link href={`/products/${product.id}`} className="relative aspect-[4/3] w-full overflow-hidden bg-black block">
                {product.image.src ? (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt || product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-mono text-neutral-500">
                    Product Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />

                {/* Tier Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                  {product.tiers.map((t) => (
                    <TierBadge key={t} tier={t} />
                  ))}
                </div>
              </Link>

              {/* Product Details */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-white mb-1 block">
                  {product.brand || "GreenPulse"} · {product.category}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors line-clamp-1 mb-2">
                  <Link href={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Spec Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[0.625rem] font-mono text-neutral-300 uppercase tracking-wider"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-white transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3.5 text-white" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Product Enquiry: ${product.name}`)}
                    className="rounded-full bg-white/10 hover:bg-white hover:text-neutral-950 hover:text-neutral-950 px-3 py-1.5 text-[0.6875rem] font-mono text-neutral-200 transition-colors"
                  >
                    Get Pricing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 rounded-2xl border border-white/10 bg-[#0d0d0d]">
            <p className="text-neutral-400 text-sm">No hardware matches your active filters.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedTier("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-mono text-white hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
