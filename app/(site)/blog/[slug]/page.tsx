import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getPosts, getRelatedPosts } from "@/lib/blog";
import { brand } from "@/data/home";
import { ArticleContent } from "@/components/blog/article-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: `Article Not Found — ${brand.name}`,
    };
  }

  return {
    title: `${post.title} — ${brand.name} Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — ${brand.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAtISO ?? post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          alt: post.coverAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, 3);

  // JSON-LD structured data for article SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAtISO ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      logo: {
        "@type": "ImageObject",
        url: brand.logo,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-canvas pt-10 sm:pt-12">
        <div className="shell">
          <ArticleContent post={post} relatedPosts={relatedPosts} />
        </div>
      </main>
    </>
  );
}
