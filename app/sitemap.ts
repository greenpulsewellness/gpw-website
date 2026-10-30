import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";
import { getProducts } from "@/lib/products";
import { getPosts } from "@/lib/blog";
import { getAllSolutions } from "@/data/solutions-data";

/**
 * Dynamic Next.js Sitemap
 * Generates https://www.greenpulsewellness.com/sitemap.xml
 * lastModified is only set for blog posts (real publish dates); other pages omit it rather than report "now".
 * Enumerates all static landing pages, dynamic solution suites, equipment catalog items, and journal articles.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/combos`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compliance`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/complaints`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Dynamic Solutions
  const solutions = getAllSolutions();
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Equipment Products
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await getProducts();
    productRoutes = products.map((prod) => ({
      url: `${baseUrl}/products/${prod.id}`,
      changeFrequency: "weekly",
      priority: 0.85,
    }));
  } catch (err) {
    console.error("[sitemap] Failed fetching products for sitemap:", err);
  }

  // Dynamic Blog Posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAtISO ? new Date(post.publishedAtISO) : undefined,
      changeFrequency: "monthly",
      priority: 0.75,
    }));
  } catch (err) {
    console.error("[sitemap] Failed fetching blog posts for sitemap:", err);
  }

  return [...staticRoutes, ...solutionRoutes, ...productRoutes, ...blogRoutes];
}
