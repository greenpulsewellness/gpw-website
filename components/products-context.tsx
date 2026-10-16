"use client";

import { createContext, useContext, useMemo } from "react";
import { products as localProducts, type Product, type ProductId } from "@/data/home";

type ProductsValue = {
  products: Product[];
  productById: (id: ProductId) => Product;
};

const ProductsContext = createContext<ProductsValue | null>(null);

/** Makes the Sanity-backed product list (fetched in the site layout) available to client components. */
export function ProductsProvider({ products, children }: { products: Product[]; children: React.ReactNode }) {
  const value = useMemo<ProductsValue>(
    () => ({
      products,
      productById: (id) =>
        products.find((p) => p.id === id) || localProducts.find((p) => p.id === id) || products[0],
    }),
    [products],
  );
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts(): ProductsValue {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used inside <ProductsProvider>");
  return ctx;
}
