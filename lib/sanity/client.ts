import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/** Read-only client for published content (dataset is public; served via the Sanity CDN). */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

/** Cache tags for product and blog queries — invalidated by /api/revalidate. */
export const PRODUCTS_TAG = "products";
export const BLOG_TAG = "blog";

/** Fallback refresh interval (seconds) if the webhook isn't configured. */
export const PRODUCTS_REVALIDATE = 60;
