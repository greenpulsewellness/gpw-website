import "server-only";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { products as localProducts, type MediaSlot, type Product } from "@/data/home";
import { getProductDetail, type ProductDetail } from "@/data/products-data";
import { CONTENT_REVALIDATE, PRODUCTS_TAG, getPublicClient } from "@/lib/supabase/client";

/**
 * PARKED — Supabase version of lib/products.ts. Copy over lib/products.ts to activate
 * (see docs/supabase-migration-plan.md, Phase 3). Not imported anywhere while Sanity is live.
 *
 * Product data source. Reads from Supabase (schema "catalog"); falls back to the local files in /data
 * if Supabase is unreachable or has no products yet, so the site never renders empty.
 */

type DbImage = { url?: string; alt?: string } | null;

export type ProductRow = {
  id: string;
  name: string;
  category: Product["category"];
  modality: Product["modality"];
  sub_category: string | null;
  brand: string | null;
  description: string;
  tiers: Product["tiers"];
  specs: string[];
  image: DbImage;
  gallery: DbImage[] | null;
  subtitle: string | null;
  tagline: string | null;
  overview: string[] | null;
  mechanism_of_action: ProductDetail["mechanismOfAction"] | null;
  features: ProductDetail["features"] | null;
  benefits: ProductDetail["benefits"] | null;
  spec_groups: ProductDetail["specGroups"] | null;
  whats_included: string[] | null;
  protocol: ProductDetail["protocol"] | null;
  suitable_environments: ProductDetail["suitableEnvironments"] | null;
  faqs: ProductDetail["faqs"] | null;
  related_product_ids: string[] | null;
};

/** All published rows, catalog-ordered. Cached across requests; revalidated via PRODUCTS_TAG. */
const fetchProductRows = unstable_cache(
  async (): Promise<ProductRow[]> => {
    const db = getPublicClient();
    if (!db) throw new Error("Supabase env vars are not set");
    const { data, error } = await db
      .schema("catalog")
      .from("products")
      .select("*")
      .eq("status", "published")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });
    if (error) throw error; // thrown, so a failed read is never cached
    return (data ?? []) as ProductRow[];
  },
  ["products:rows"],
  { tags: [PRODUCTS_TAG], revalidate: CONTENT_REVALIDATE },
);

const getProductRows = cache(async (): Promise<ProductRow[] | null> => {
  if (!getPublicClient()) return null;
  try {
    const rows = await fetchProductRows();
    if (rows.length) return rows;
  } catch (err) {
    console.error("[products] Supabase fetch failed, using local data:", err);
  }
  return null;
});

function toMediaSlot(id: string, name: string, img: DbImage, index = 0): MediaSlot {
  return {
    id: index ? `product-${id}-${index}` : `product-${id}`,
    kind: "image",
    label: `${name} — product 4:5`,
    aspect: "4:5",
    alt: img?.alt || `${name} photographed on a neutral backdrop`,
    src: img?.url || undefined,
  };
}

function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    modality: row.modality,
    subCategory: row.sub_category ?? undefined,
    brand: row.brand ?? undefined,
    description: row.description,
    tiers: row.tiers ?? [],
    specs: row.specs ?? [],
    url: `/products/${row.id}`,
    image: toMediaSlot(row.id, row.name, row.image),
    gallery: (row.gallery ?? []).filter((g) => g?.url).map((g, i) => toMediaSlot(row.id, row.name, g, i + 1)),
  };
}

/** All products, catalog-ordered. Deduped per request. */
export const getProducts = cache(async (): Promise<Product[]> => {
  const rows = await getProductRows();
  return rows ? rows.map(toProduct) : localProducts;
});

/** One product plus its full detail content, or null if it doesn't exist. */
export const getProductWithDetail = cache(
  async (id: string): Promise<{ product: Product; detail: ProductDetail } | null> => {
    const rows = await getProductRows();

    // Products came from local data — use the local detail too.
    if (!rows) {
      const product = localProducts.find((p) => p.id === id);
      return product ? { product, detail: getProductDetail(id) } : null;
    }

    const row = rows.find((r) => r.id === id);
    if (!row) return null;

    // Any section left empty in the database falls back to handcrafted or generated content.
    const base = getProductDetail(id);
    const isEmpty = (v: unknown) => v == null || v === "" || (Array.isArray(v) && v.length === 0);
    const pick = <K extends keyof ProductDetail>(key: K, value: ProductDetail[K] | null | undefined): ProductDetail[K] => {
      if (isEmpty(value)) return base[key];
      // Objects (protocol, mechanismOfAction): fill any blank sub-field from the fallback.
      if (typeof value === "object" && !Array.isArray(value)) {
        const merged: Record<string, unknown> = { ...(base[key] as object) };
        for (const [k, v] of Object.entries(value as object)) if (!isEmpty(v)) merged[k] = v;
        return merged as ProductDetail[K];
      }
      return value as ProductDetail[K];
    };

    const known = new Set(rows.map((r) => r.id));
    const related = (row.related_product_ids ?? []).filter((rid) => known.has(rid));

    return {
      product: toProduct(row),
      detail: {
        id,
        subtitle: pick("subtitle", row.subtitle),
        tagline: pick("tagline", row.tagline),
        overview: pick("overview", row.overview),
        mechanismOfAction: pick("mechanismOfAction", row.mechanism_of_action),
        features: pick("features", row.features),
        benefits: pick("benefits", row.benefits),
        specGroups: pick("specGroups", row.spec_groups),
        whatsIncluded: pick("whatsIncluded", row.whats_included),
        protocol: pick("protocol", row.protocol),
        suitableEnvironments: pick("suitableEnvironments", row.suitable_environments),
        faqs: pick("faqs", row.faqs),
        relatedProductIds: related.length ? related : base.relatedProductIds,
      },
    };
  },
);
