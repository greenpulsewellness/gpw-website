import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
import { getPosts } from "@/lib/blog";
import { getAllSolutions } from "@/data/solutions-data";

/**
 * Dynamic Next.js Sitemap
 * Generates https://greenpulsewellness.com/sitemap.xml
 * Enumerates all static landing pages, dynamic solution suites, equipment catalog items, and journal articles.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://greenpulsewellness.com";
  const now = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/combos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/complaints`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Dynamic Solutions
  const solutions = getAllSolutions();
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Equipment Products
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const products = await getProducts();
    productRoutes = products.map((prod) => ({
      url: `${baseUrl}/products/${prod.id}`,
      lastModified: now,
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
      lastModified: post.publishedAtISO ? new Date(post.publishedAtISO) : now,
      changeFrequency: "monthly",
      priority: 0.75,
    }));
  } catch (err) {
    console.error("[sitemap] Failed fetching blog posts for sitemap:", err);
  }

  return [...staticRoutes, ...solutionRoutes, ...productRoutes, ...blogRoutes];
}
