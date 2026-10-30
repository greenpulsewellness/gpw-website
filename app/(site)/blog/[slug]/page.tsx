import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPillar, getPost, getPosts, getRelatedPosts } from "@/lib/blog";
import { brand } from "@/data/home";
import { ArticleContent } from "@/components/blog/article-content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";

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
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords?.length ? post.keywords : post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      url: `/blog/${post.slug}`,
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

  const [relatedPosts, pillarPost] = await Promise.all([getRelatedPosts(post.slug, 3), getPillar(post)]);

  // JSON-LD structured data for article SEO
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        mainEntityOfPage: postUrl,
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage.startsWith("http") ? post.coverImage : `${SITE_URL}${post.coverImage}`,
        datePublished: post.publishedAtISO ?? post.publishedAt,
        dateModified: post.publishedAtISO ?? post.publishedAt,
        articleSection: post.category,
        keywords: (post.keywords?.length ? post.keywords : post.tags).join(", "),
        wordCount: post.sections.reduce((n, s) => n + s.content.join(" ").split(/\s+/).length, 0),
        ...(pillarPost ? { isPartOf: { "@type": "BlogPosting", "@id": `${SITE_URL}/blog/${pillarPost.slug}#article` } } : {}),
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
            url: `${SITE_URL}${brand.logo}`,
          },
        },
      },
      ...(post.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${postUrl}#faq`,
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") },
              })),
            },
          ]
        : []),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-canvas pt-10 sm:pt-12">
        <div className="shell">
          <ArticleContent post={post} relatedPosts={relatedPosts} pillarPost={pillarPost} />
        </div>
      </main>
    </>
  );
}
