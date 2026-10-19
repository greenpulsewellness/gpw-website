import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand } from "@/data/home";
import { getProductWithDetail, getProducts } from "@/lib/products";
import { EnquiryProvider } from "@/components/home/enquiry-context";
import { ProductDetailView } from "@/components/product/product-detail-view";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getProductWithDetail(id);

  if (!data) {
    return {
      title: "Product Not Found",
    };
  }

  const { product, detail } = data;

  return {
    title: `${product.name} — Specifications & Enquiry`,
    description: `${product.description} ${detail.tagline}`,
    keywords: [
      product.name,
      product.category,
      ...product.specs,
      "commercial wellness equipment",
      "longevity suite",
      "GreenPulse Wellness",
      "rehabilitation hardware",
    ],
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title: `${product.name} — ${brand.name}`,
      description: product.description,
      type: "website",
      url: `/products/${product.id}`,
      images: product.image.src
        ? [
            {
              url: product.image.src,
              alt: `${product.name} studio photography`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${brand.name}`,
      description: product.description,
      images: product.image.src ? [product.image.src] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getProductWithDetail(id);

  if (!data) {
    notFound();
  }

  const { product, detail } = data;
  const products = await getProducts();
  const relatedProducts = detail.relatedProductIds
    .map((relId) => products.find((p) => p.id === relId))
    .filter((p): p is typeof products[0] => Boolean(p));

  // Structured data: Product (no price is published, so no Offer), FAQ and breadcrumbs.
  const productUrl = `${SITE_URL}/products/${product.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        url: productUrl,
        name: product.name,
        image: product.image.src ? [product.image.src] : undefined,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: product.brand || brand.name,
        },
        category: product.category,
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.name, path: `/products/${product.id}` },
      ]),
      ...(detail.faqs?.length ? [faqSchema(detail.faqs)] : []),
    ],
  };

  return (
    <EnquiryProvider>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-canvas pt-12 sm:pt-14">
        <div className="shell">
          <ProductDetailView
            product={product}
            detail={detail}
            relatedProducts={relatedProducts}
          />
        </div>
      </main>
    </EnquiryProvider>
  );
}
