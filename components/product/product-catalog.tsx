"use client";

import { useMemo, useState, useEffect } from "react";
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
  X,
} from "lucide-react";
import { type ProductModality } from "@/data/home";
import { useProducts } from "@/components/products-context";
import { skipImageOptimization } from "@/lib/sanity/image";

export type ModalityMeta = {
  id: ProductModality | "all";
  label: string;
  icon: typeof Flame;
};

const MODALITIES: ModalityMeta[] = [
  {
    id: "all",
    label: "All Equipment",
    icon: Sparkles,
  },
  {
    id: "heat",
    label: "Heat",
    icon: Flame,
  },
  {
    id: "cold",
    label: "Cold",
    icon: Snowflake,
  },
  {
    id: "light",
    label: "Light",
    icon: SunMedium,
  },
  {
    id: "air",
    label: "Air",
    icon: Wind,
  },
  {
    id: "relax",
    label: "Relax",
    icon: Activity,
  },
  {
    id: "mobility",
    label: "Mobility",
    icon: Accessibility,
  },
];

export function ProductCatalog() {
  const { products } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawParam = searchParams.get("category") || searchParams.get("modality") || "all";
  const initialModality = (MODALITIES.some((m) => m.id === rawParam) ? rawParam : "all") as
    | ProductModality
    | "all";

  const [selectedModality, setSelectedModality] = useState<ProductModality | "all">(initialModality);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state if URL search query changes
  useEffect(() => {
    const cat = searchParams.get("category") || searchParams.get("modality");
    if (cat && MODALITIES.some((m) => m.id === cat)) {
      setSelectedModality(cat as ProductModality);
    } else if (!cat) {
      setSelectedModality("all");
    }
  }, [searchParams]);

  const handleModalityChange = (modalityId: ProductModality | "all") => {
    setSelectedModality(modalityId);
    const params = new URLSearchParams(window.location.search);
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

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesModality =
        selectedModality === "all" || p.modality === selectedModality;
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesModality && matchesSearch;
    });
  }, [products, selectedModality, searchQuery]);

  return (
    <div className="space-y-8">
      {/* ── Category Filter Bar & Search ────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Modality Selector with subtle small-curve styling */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {MODALITIES.map((modality) => {
            const Icon = modality.icon;
            const isSelected = selectedModality === modality.id;
            const count =
              modality.id === "all"
                ? products.length
                : products.filter((p) => p.modality === modality.id).length;

            return (
              <button
                key={modality.id}
                type="button"
                onClick={() => handleModalityChange(modality.id)}
                className={`group flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-medium transition-all duration-200 shrink-0 border cursor-pointer ${
                  isSelected
                    ? "bg-white text-neutral-950 border-white font-semibold shadow-xs"
                    : "bg-[#0d0d0d] text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{modality.label}</span>
                <span
                  className={`label-mono text-[0.625rem] rounded px-1.5 py-0.5 ${
                    isSelected ? "bg-black/15 text-neutral-950 font-bold" : "bg-white/5 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input with small curves */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-white/15 bg-[#0d0d0d] pl-10 pr-9 py-2 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              aria-label="Clear search"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Product Grid: Plain Image & Small Corner Curves (NO double placeholder) ── */}
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
            className="mt-4 rounded-md border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold text-white hover:bg-white hover:text-neutral-950 transition-colors"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              {/* Plain Image Presentation — Clean edge, no inner nested placeholder box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                {product.image.src ? (
                  <Image
                    src={product.image.src}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized={skipImageOptimization(product.image.src)}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Sparkles className="size-8 text-neutral-600" />
                  </div>
                )}
              </div>

              {/* Product Name Title Bar */}
              <div className="p-3.5 flex items-center justify-between gap-2 border-t border-white/5">
                <h3 className="text-sm font-medium tracking-tight text-white group-hover:text-white/90 transition-colors truncate">
                  {product.name}
                </h3>
                <ArrowRight className="size-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
