import type { Metadata } from "next";
import { getAllCategories } from "@/data/blog";
import { getPosts } from "@/lib/blog";
import { brand } from "@/data/home";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: `The Journal — Recovery & Longevity Tech Insights | ${brand.name}`,
  description:
    "Curated perspectives on photobiomodulation, mild hyperbaric kinetics, pneumatic compression, and commercial wellness architecture for clinics, spas, and athletic clubs.",
  openGraph: {
    title: `The Journal — ${brand.name}`,
    description:
      "Curated perspectives on photobiomodulation, mild hyperbaric kinetics, pneumatic compression, and commercial wellness architecture.",
    type: "website",
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
      "Curated perspectives on photobiomodulation, mild hyperbaric kinetics, pneumatic compression, and commercial wellness architecture.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
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
