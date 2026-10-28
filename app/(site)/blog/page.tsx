import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/schema";
import { getAllCategories } from "@/data/blog";
import { getPosts } from "@/lib/blog";
import { brand } from "@/data/home";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `The Journal — Planning Recovery Spaces`,
  description:
    "Practical guides on saunas, cold plunges, light devices, compression and planning a recovery space for centres, gyms, clinics and hotels.",
  openGraph: {
    title: `The Journal — ${brand.name}`,
    description:
      "Practical guides on saunas, cold plunges, light devices, compression and planning a recovery space.",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const categories = getAllCategories();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `The Journal — ${brand.name}`,
    url: "https://greenpulsewellness.com/blog",
    description:
      "Practical guides on saunas, cold plunges, light devices, compression and planning a recovery space.",
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: "https://greenpulsewellness.com/logo-horizontal.png",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://greenpulsewellness.com/blog/${post.slug}`,
      datePublished: post.publishedAtISO || post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <main className="min-h-screen bg-canvas pt-12 sm:pt-14">
        <div className="shell">
          <BlogHero />
          <div className="pb-24">
            <BlogGrid posts={posts} categories={categories} />
          </div>
        </div>
      </main>
    </>
  );
}
