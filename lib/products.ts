import "server-only";
import { hiddenProductIds, products as localProducts, type Product } from "@/data/home";
import { getProductDetail, type ProductDetail } from "@/data/products-data";

/**
 * Product data source: the catalogue lives in code (data/home.ts and data/products-data.ts).
 *
 * Products change rarely, so they ship with each deploy: product pages are fully static and make
 * no database or CMS requests, however much traffic the site gets.
 *
 * A copy is kept in Supabase (catalog.products) for future use (e-commerce, admin); the site does not
 * read it. After editing products in data/, refresh that copy with `npm run seed:supabase -- --force`.
 */

const visibleProducts = localProducts.filter((p) => !hiddenProductIds.has(p.id));

/** All visible products, catalog-ordered. */
export async function getProducts(): Promise<Product[]> {
  return visibleProducts;
}

/** One product plus its full detail content, or null if it doesn't exist (or is hidden). */
export async function getProductWithDetail(id: string): Promise<{ product: Product; detail: ProductDetail } | null> {
  const product = visibleProducts.find((p) => p.id === id);
  return product ? { product, detail: getProductDetail(product.id) } : null;
}
