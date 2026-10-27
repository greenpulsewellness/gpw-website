import "server-only";
import { cache } from "react";
import { defineQuery } from "next-sanity";
import { hiddenProductIds, products as localProducts, type MediaSlot, type Product } from "@/data/home";
import { getProductDetail, synthesizeProductDetail, type ProductDetail } from "@/data/products-data";
import { PRODUCTS_REVALIDATE, PRODUCTS_TAG, sanityClient } from "@/lib/sanity/client";

/**
 * Product data source. Reads from Sanity; falls back to the local files in /data
 * if Sanity is unreachable or has no products yet, so the site never renders empty.
 */

type SanityImage = { alt?: string; url?: string } | null;

type SanityProduct = Omit<Product, "image" | "url" | "gallery"> & {
  image: SanityImage;
  gallery: SanityImage[] | null;
};

type SanityProductDetail = SanityProduct & Partial<Omit<ProductDetail, "id">>;

const PRODUCT_FIELDS = /* groq */ `
  "id": slug.current,
  name, category, modality, subCategory, brand, description,
  "tiers": coalesce(tiers, []),
  "specs": coalesce(specs, []),
  image{ alt, "url": asset->url },
  gallery[]{ alt, "url": asset->url }
`;

const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && defined(slug.current)] | order(coalesce(order, 9999) asc, name asc) { ${PRODUCT_FIELDS} }
`);

const PRODUCT_DETAIL_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $id][0] {
    ${PRODUCT_FIELDS},
    subtitle, tagline, overview, mechanismOfAction, features, benefits, specGroups,
    whatsIncluded, protocol, suitableEnvironments, faqs,
    "relatedProductIds": relatedProducts[]->slug.current
  }
`);

const fetchOptions = { next: { revalidate: PRODUCTS_REVALIDATE, tags: [PRODUCTS_TAG] } };

const visibleLocalProducts = localProducts.filter((p) => !hiddenProductIds.has(p.id));

function toMediaSlot(id: string, name: string, img: SanityImage, index = 0): MediaSlot {
  return {
    id: index ? `product-${id}-${index}` : `product-${id}`,
    kind: "image",
    label: `${name} — product 4:5`,
    aspect: "4:5",
    alt: img?.alt || `${name} photographed on a neutral backdrop`,
    src: img?.url || undefined,
  };
}

function toProduct(doc: SanityProduct): Product {
  const { image, gallery, ...rest } = doc;
  // Product photography is served from /public/GreenPulse (see data/home.ts), not Sanity —
  // keeps image traffic off the Sanity CDN. Sanity images are only used for products without it.
  const local = localProducts.find((p) => p.id === doc.id);
  const localShots = local?.image.src?.startsWith("/GreenPulse/") ? local : null;
  return {
    ...rest,
    subCategory: rest.subCategory ?? undefined,
    brand: rest.brand ?? undefined,
    url: `/products/${doc.id}`,
    image: localShots?.image ?? toMediaSlot(doc.id, doc.name, image),
    gallery:
      localShots?.gallery ??
      (localShots ? [] : (gallery ?? []).filter((g) => g?.url).map((g, i) => toMediaSlot(doc.id, doc.name, g, i + 1))),
  };
}

/**
 * Adds products that exist in data/home.ts but haven't been created in Sanity yet,
 * each placed after the product that precedes it locally.
 */
function withLocalOnly(fromSanity: Product[]): Product[] {
  const merged = [...fromSanity];
  const ids = new Set(merged.map((p) => p.id));
  localProducts.forEach((p, i) => {
    if (ids.has(p.id)) return;
    const prev = localProducts.slice(0, i).reverse().find((q) => ids.has(q.id));
    merged.splice(prev ? merged.findIndex((q) => q.id === prev.id) + 1 : merged.length, 0, p);
    ids.add(p.id);
  });
  return merged;
}

/** All products, catalog-ordered. Deduped per request. */
export const getProducts = cache(async (): Promise<Product[]> => {
  try {
    const docs = await sanityClient.fetch<SanityProduct[]>(PRODUCTS_QUERY, {}, fetchOptions);
    if (docs?.length) return withLocalOnly(docs.map(toProduct)).filter((p) => !hiddenProductIds.has(p.id));
  } catch (err) {
    console.error("[products] Sanity fetch failed, using local data:", err);
  }
  return visibleLocalProducts;
});

/** One product plus its full detail content, or null if it doesn't exist. */
export const getProductWithDetail = cache(
  async (id: string): Promise<{ product: Product; detail: ProductDetail } | null> => {
    const all = await getProducts();
    const product = all.find((p) => p.id === id);
    if (!product) return null;

    // Products came from local data — use the local detail too.
    if (all === visibleLocalProducts) return { product, detail: getProductDetail(id) };

    let doc: SanityProductDetail | null = null;
    try {
      doc = await sanityClient.fetch<SanityProductDetail | null>(PRODUCT_DETAIL_QUERY, { id }, fetchOptions);
    } catch (err) {
      console.error(`[products] Sanity detail fetch failed for "${id}":`, err);
    }

    // Any section left empty in the admin falls back to handcrafted or generated content.
    const base = getProductDetail(product.id);
    const isEmpty = (v: unknown) => v == null || v === "" || (Array.isArray(v) && v.length === 0);
    const pick = <K extends keyof ProductDetail>(key: K): ProductDetail[K] => {
      const value = doc?.[key] as ProductDetail[K] | null | undefined;
      if (isEmpty(value)) return base[key];
      // Objects (protocol, mechanismOfAction): fill any blank sub-field from the fallback.
      if (typeof value === "object" && !Array.isArray(value)) {
        const merged: Record<string, unknown> = { ...(base[key] as object) };
        for (const [k, v] of Object.entries(value as object)) if (!isEmpty(v)) merged[k] = v;
        return merged as ProductDetail[K];
      }
      return value as ProductDetail[K];
    };

    return {
      product,
      detail: {
        id,
        subtitle: pick("subtitle"),
        tagline: pick("tagline"),
        overview: pick("overview"),
        mechanismOfAction: pick("mechanismOfAction"),
        features: pick("features"),
        benefits: pick("benefits"),
        specGroups: pick("specGroups"),
        whatsIncluded: pick("whatsIncluded"),
        protocol: pick("protocol"),
        suitableEnvironments: pick("suitableEnvironments"),
        faqs: pick("faqs"),
        relatedProductIds: (doc?.relatedProductIds ?? []).filter(Boolean).length
          ? doc!.relatedProductIds!.filter(Boolean)
          : base.relatedProductIds,
      },
    };
  },
);
