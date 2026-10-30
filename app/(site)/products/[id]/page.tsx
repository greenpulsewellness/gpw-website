import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand } from "@/data/home";
import { getProductWithDetail, getProducts } from "@/lib/products";
import { EnquiryProvider } from "@/components/home/enquiry-context";
import { ProductDetailView } from "@/components/product/product-detail-view";
import { LoopArt } from "@/components/ui/loop-art";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/schema";

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
        : [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — ${brand.name}`,
      description: product.description,
      images: product.image.src ? [product.image.src] : [DEFAULT_OG_IMAGE],
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

  // Structured data: Service, FAQ and breadcrumbs. Prices are quote-only, and Google flags Product
  // markup without offers, review or aggregateRating as invalid, so each product is described as
  // the supply-and-install service GreenPulse provides for it.
  const productUrl = `${SITE_URL}/products/${product.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${productUrl}#service`,
        url: productUrl,
        name: product.name,
        image: product.image.src ? [new URL(product.image.src, SITE_URL).href] : undefined,
        description: product.description,
        serviceType: "Commercial wellness equipment supply and installation",
        category: product.category,
        brand: {
          "@type": "Brand",
          name: product.brand || brand.name,
        },
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
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
      <main className="relative isolate min-h-screen bg-canvas pt-12 sm:pt-14">
        {/* Same green-washed dark base + Loop ribbons as the catalog page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 70% 900px at 0% 300px, rgba(76,184,74,0.20), transparent 70%)",
              "radial-gradient(ellipse 60% 1000px at 100% 45%, rgba(46,154,72,0.16), transparent 70%)",
              "radial-gradient(ellipse 80% 800px at 30% 100%, rgba(181,211,52,0.10), transparent 70%)",
              "linear-gradient(180deg, #000 0%, #020a05 40%, #03100a 100%)",
            ].join(","),
          }}
        />
        <LoopArt variant="wave-outline" frameClassName="-z-10" className="-right-[10%] top-[340px] w-[min(120vw,900px)] opacity-35 md:top-[420px]" />
        <LoopArt
          variant="band-line"
          frameClassName="-z-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
          className="left-1/2 top-[48%] w-[2400px] -translate-x-1/2 opacity-30"
        />
        <LoopArt variant="wave-glow" frameClassName="-z-10" className="-bottom-[120px] -left-[14%] w-[min(130vw,1000px)] opacity-20" />
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
