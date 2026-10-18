import type { Product } from "./home";

/**
 * Shopper-facing product types (footer links, /products?type=…).
 * A product belongs to a type when its subCategory contains one of the keywords.
 */
export type ProductType = {
  id: string;
  label: string;
  keywords: string[];
};

export const PRODUCT_TYPES: ProductType[] = [
  { id: "saunas", label: "Saunas", keywords: ["sauna"] },
  { id: "cold-plunge", label: "Cold Plunge", keywords: ["ice bath", "cryo"] },
  { id: "red-light", label: "Red Light Therapy", keywords: ["red light", "photobiomodulation"] },
  { id: "compression-boots", label: "Compression Boots", keywords: ["compression"] },
  { id: "hyperbaric", label: "Hyperbaric Chambers", keywords: ["hyperbaric"] },
  { id: "wheelchairs", label: "Wheelchairs", keywords: ["wheelchair"] },
];

export function productTypeById(id: string | null | undefined): ProductType | undefined {
  return PRODUCT_TYPES.find((t) => t.id === id);
}

export function matchesProductType(product: Product, type: ProductType): boolean {
  const sub = (product.subCategory ?? "").toLowerCase();
  return type.keywords.some((k) => sub.includes(k));
}
