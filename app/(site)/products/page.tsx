import { Suspense } from "react";
import type { Metadata } from "next";
import { brand } from "@/data/home";
import { ProductCatalog } from "@/components/product/product-catalog";
import { ProductPromotionalBanner } from "@/components/product/product-promotional-banner";

export const metadata: Metadata = {
  title: `Commercial Wellness & Longevity Equipment Catalog | ${brand.name}`,
  description:
    "Explore our complete range of certified full-spectrum infrared saunas, hard-shell hyperbaric oxygen chambers, whole-body cryotherapy, robotic 4D massage chairs, chiropractic tables, and assistive mobility hardware.",
  openGraph: {
    title: `Commercial Equipment Catalog — ${brand.name}`,
    description:
      "Purpose-led recovery, rehabilitation, and longevity hardware engineered for high-performance facilities and private sanctuaries.",
    type: "website",
  },
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Commercial Equipment Catalog — ${brand.name}`,
  url: "https://greenpulsewellness.com/products",
  description:
    "Complete range of certified full-spectrum infrared saunas, hard-shell hyperbaric oxygen chambers, whole-body cryotherapy, robotic 4D massage chairs, chiropractic tables, and assistive mobility hardware.",
  mainEntity: {
    "@type": "ItemList",
    name: "Commercial Wellness Hardware",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Full-Spectrum Infrared Saunas",
        url: "https://greenpulsewellness.com/products#heat",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cold Plunge & Cryotherapy",
        url: "https://greenpulsewellness.com/products#cold",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hyperbaric Oxygen Chambers (HBOT)",
        url: "https://greenpulsewellness.com/products#air",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Photobiomodulation (PBM) Red Light",
        url: "https://greenpulsewellness.com/products#light",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Compression Therapy & Robotic Massage",
        url: "https://greenpulsewellness.com/products#relax",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Chiropractic Tables & Mobility Systems",
        url: "https://greenpulsewellness.com/products#mobility",
      },
    ],
  },
};

export default function ProductsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <main className="min-h-screen bg-canvas">
        {/* Full-width edge-to-edge horizontal banner strip */}
        <ProductPromotionalBanner />

        <div className="shell pt-8 sm:pt-10">
          {/* Catalog Filter & Grid */}
          <div className="pb-24">
            <Suspense
              fallback={
                <div className="py-20 text-center text-sm text-neutral-400">
                  Loading commercial catalog...
                </div>
              }
            >
              <ProductCatalog />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}

