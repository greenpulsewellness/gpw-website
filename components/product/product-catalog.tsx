"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  Flame,
  Snowflake,
  SunMedium,
  Wind,
  Activity,
  Accessibility,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Rows3,
  X,
} from "lucide-react";
import { type Product, type ProductModality } from "@/data/home";
import { PRODUCT_TYPES, matchesProductType, productTypeById } from "@/data/product-types";
import { useProducts } from "@/components/products-context";
import { skipImageOptimization } from "@/lib/sanity/image";

export type ModalityMeta = {
  id: ProductModality | "all";
  label: string;
  icon: typeof Flame;
  subtitle?: string;
  /** Tailwind text colour for the chip icon — the only place category colour appears. */
  accent: string;
};

const MODALITIES: ModalityMeta[] = [
  {
    id: "all",
    label: "All Equipment",
    icon: Sparkles,
    subtitle: "The Full GreenPulse Catalogue",
    accent: "text-white",
  },
  {
    id: "heat",
    label: "Heat",
    icon: Flame,
    subtitle: "Full-Spectrum Infrared Saunas & Thermal Suites",
    accent: "text-orange-400",
  },
  {
    id: "cold",
    label: "Cold",
    icon: Snowflake,
    subtitle: "Commercial Ice Plunge Tubs & Cryo Chambers",
    accent: "text-sky-400",
  },
  {
    id: "light",
    label: "Light",
    icon: SunMedium,
    subtitle: "LED Red Light Panels & Light Devices",
    accent: "text-rose-400",
  },
  {
    id: "air",
    label: "Air",
    icon: Wind,
    subtitle: "Oxa Chambers: Specs & Enquiry",
    accent: "text-teal-400",
  },
  {
    id: "relax",
    label: "Relax",
    icon: Activity,
    subtitle: "Robotic 4D Massage & Compression Therapy Systems",
    accent: "text-purple-400",
  },
  {
    id: "mobility",
    label: "Mobility",
    icon: Accessibility,
    subtitle: "Chiropractic Drop Tables & Assisted Rehabilitation",
    accent: "text-emerald-400",
  },
];

/* ── Compact Product Card (Optimized for Mobile Strips & 2-Col Grid) ── */
function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col h-full overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer"
    >
      {/* Product Image */}
      <div
        className={`relative ${
          compact ? "aspect-square" : "aspect-square sm:aspect-[4/3]"
        } w-full overflow-hidden bg-black`}
      >
        {product.image?.src ? (
          <Image
            src={product.image.src}
            alt={product.name}
            fill
            sizes={
              compact
                ? "(max-width: 640px) 145px, 200px"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            }
            unoptimized={skipImageOptimization(product.image.src)}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Sparkles className="size-6 text-neutral-600" />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div
        className={`${
          compact ? "p-2 sm:p-2.5" : "p-2.5 sm:p-3.5"
        } flex flex-col justify-between flex-1 border-t border-white/5 gap-1.5`}
      >
        <h4
          className={`${
            compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"
          } font-medium tracking-tight text-white group-hover:text-white/90 line-clamp-2 leading-snug`}
        >
          {product.name}
        </h4>
        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/5">
          <span className="truncate max-w-[85px] sm:max-w-[120px]">
            {product.subCategory || product.category?.split("&")[0]?.trim()}
          </span>
          <ArrowRight className="size-3 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
        </div>
      </div>
    </Link>
  );
}

/* ── Category Horizontal Strip Row ── */
function CategoryStripRow({
  category,
  onSelectCategory,
}: {
  category: { modality: ModalityMeta; items: Product[] };
  onSelectCategory: (modalityId: ProductModality) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (category.items.length === 0) return null;

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {/* Category Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {category.modality.label}
          </h3>
          {category.modality.subtitle && (
            <p className="hidden sm:block text-xs text-neutral-400 truncate max-w-md mt-0.5">
              {category.modality.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Left/Right Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-1 mr-1">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="size-7 rounded-md border border-white/10 bg-[#0d0d0d] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              aria-label={`Scroll ${category.modality.label} left`}
            >
              <ChevronLeft className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="size-7 rounded-md border border-white/10 bg-[#0d0d0d] flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              aria-label={`Scroll ${category.modality.label} right`}
            >
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          {/* See All Category Button */}
          <button
            type="button"
            onClick={() => onSelectCategory(category.modality.id as ProductModality)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-md border border-white/10 transition-colors cursor-pointer group"
          >
            <span>See all</span>
            <ArrowRight className="size-3 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>

      {/* Horizontal Strip Scrollable Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-2.5 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {category.items.map((product) => (
            <div
              key={product.id}
              className="w-[145px] sm:w-[175px] md:w-[210px] shrink-0 snap-start"
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductCatalog() {
  const { products } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawParam = searchParams.get("category") || searchParams.get("modality") || "all";
  const initialModality = (MODALITIES.some((m) => m.id === rawParam) ? rawParam : "all") as
    | ProductModality
    | "all";

  const [selectedModality, setSelectedModality] = useState<ProductModality | "all">(initialModality);
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(
    productTypeById(searchParams.get("type"))?.id ?? null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  // Default to strip view when "all" is selected on mobile
  const [viewMode, setViewMode] = useState<"strip" | "grid">("strip");

  // Sync state if URL search query changes
  useEffect(() => {
    setSelectedTypeId(productTypeById(searchParams.get("type"))?.id ?? null);
    const cat = searchParams.get("category") || searchParams.get("modality");
    if (cat && MODALITIES.some((m) => m.id === cat)) {
      setSelectedModality(cat as ProductModality);
    } else if (!cat) {
      setSelectedModality("all");
    }
  }, [searchParams]);

  const handleModalityChange = (modalityId: ProductModality | "all") => {
    setSelectedModality(modalityId);
    setSelectedTypeId(null);
    const params = new URLSearchParams(window.location.search);
    params.delete("type");
    if (modalityId === "all") {
      params.delete("category");
      params.delete("modality");
    } else {
      params.set("category", modalityId);
      params.delete("modality");
    }
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.replace(newUrl, { scroll: false });
  };

  const selectedType = productTypeById(selectedTypeId);

  const handleTypeChange = (typeId: string | null) => {
    setSelectedTypeId(typeId);
    setSelectedModality("all");
    const params = new URLSearchParams(window.location.search);
    params.delete("category");
    params.delete("modality");
    if (typeId) params.set("type", typeId);
    else params.delete("type");
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.replace(newUrl, { scroll: false });
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedType && !matchesProductType(p, selectedType)) return false;
      const matchesModality =
        selectedModality === "all" || p.modality === selectedModality;
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesModality && matchesSearch;
    });
  }, [products, selectedModality, selectedType, searchQuery]);

  // Group products by modality for strip format
  const categorizedProducts = useMemo(() => {
    return MODALITIES.filter((m) => m.id !== "all").map((modality) => {
      return {
        modality,
        items: products.filter(
          (p) =>
            p.modality === modality.id &&
            (searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      };
    });
  }, [products, searchQuery]);

  const isBrowsingAllWithoutSearch = selectedModality === "all" && !selectedType && searchQuery === "";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ── Filter panel: search + view, category chips, product-type chips ── */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md sm:p-4 lg:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          {/* Search & view switcher — first on mobile, right-aligned on desktop */}
          <div className="flex items-center gap-2 lg:order-2 lg:w-auto">
            <div className="relative min-w-0 flex-1 lg:w-80 lg:flex-none">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                inputMode="search"
                aria-label="Search products"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-full border border-white/10 bg-black/40 pl-10 pr-9 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white/40 focus:bg-black/60 [&::-webkit-search-cancel-button]:hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Strip vs grid (only while browsing everything) */}
            {isBrowsingAllWithoutSearch && (
              <div className="flex h-10 shrink-0 items-center gap-0.5 rounded-full border border-white/10 bg-black/40 p-1" role="group" aria-label="Layout">
                {(
                  [
                    ["strip", Rows3, "Categorized rows"],
                    ["grid", LayoutGrid, "Compact grid"],
                  ] as const
                ).map(([mode, ModeIcon, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setViewMode(mode)}
                    title={label}
                    aria-label={label}
                    aria-pressed={viewMode === mode}
                    className={`flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors ${
                      viewMode === mode ? "bg-white text-neutral-950" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <ModeIcon className="size-4" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category chips: scroll sideways on mobile, wrap on desktop */}
          <div
            role="group"
            aria-label="Equipment category"
            className="no-scrollbar -mx-3 flex items-center gap-2 overflow-x-auto px-3 [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-24px),transparent)] sm:-mx-4 sm:px-4 lg:order-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:[mask-image:none]"
          >
            {MODALITIES.map((modality) => {
              const Icon = modality.icon;
              const isSelected = selectedModality === modality.id;
              return (
                <button
                  key={modality.id}
                  type="button"
                  onClick={() => handleModalityChange(modality.id)}
                  aria-pressed={isSelected}
                  className={`flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-[13px] font-medium tracking-tight transition-all duration-200 ${
                    isSelected
                      ? "border-white bg-white text-neutral-950 shadow-[0_0_24px_rgba(255,255,255,0.18)]"
                      : "border-white/10 bg-white/[0.04] text-neutral-200 hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
                  }`}
                >
                  <Icon className={`size-4 shrink-0 ${isSelected ? "text-neutral-950" : modality.accent}`} />
                  {modality.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product-type chips (footer links land here) */}
        <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3 sm:mt-4 sm:pt-4">
          <span className="label-mono hidden shrink-0 text-neutral-500 sm:block">Type</span>
          <div
            role="group"
            aria-label="Product type"
            className="no-scrollbar -mx-3 flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto px-3 [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-24px),transparent)] sm:mx-0 sm:px-0 sm:[mask-image:none] lg:flex-wrap lg:overflow-visible"
          >
            {PRODUCT_TYPES.map((t) => {
              const active = t.id === selectedTypeId;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleTypeChange(active ? null : t.id)}
                  aria-pressed={active}
                  className={`h-8 shrink-0 cursor-pointer rounded-full border px-3.5 text-xs transition-colors ${
                    active
                      ? "border-leaf/60 bg-leaf/15 font-semibold text-white"
                      : "border-white/10 text-neutral-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
            {selectedType && (
              <button
                type="button"
                onClick={() => handleTypeChange(null)}
                className="ml-1 flex h-8 shrink-0 cursor-pointer items-center gap-1 px-1 text-xs text-neutral-400 hover:text-white"
              >
                <X className="size-3.5" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Display Section ────────────────────────────── */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center rounded-md border border-white/10 bg-[#0d0d0d]">
          <h3 className="text-lg font-bold text-white">No products found</h3>
          <p className="mt-1 text-sm text-neutral-400">
            Try adjusting your category filter or search term.
          </p>
          <button
            type="button"
            onClick={() => {
              handleModalityChange("all");
              setSearchQuery("");
            }}
            className="mt-4 rounded-md border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold text-white hover:bg-white hover:text-neutral-950 transition-colors cursor-pointer"
          >
            Show All Products
          </button>
        </div>
      ) : isBrowsingAllWithoutSearch && viewMode === "strip" ? (
        /* ── Strip Format: Categorized Horizontal Rows ── */
        <div className="space-y-8 sm:space-y-10">
          {categorizedProducts.map((cat) => (
            <CategoryStripRow
              key={cat.modality.id}
              category={cat}
              onSelectCategory={(modalityId) => handleModalityChange(modalityId)}
            />
          ))}
        </div>
      ) : (
        /* ── Compact Grid Format: 2-Cols on Mobile (Reduced card size), 3-4 Cols on Desktop ── */
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
