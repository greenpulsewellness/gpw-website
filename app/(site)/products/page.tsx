import { Suspense } from "react";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/schema";
import { brand } from "@/data/home";
import { ProductCatalog } from "@/components/product/product-catalog";
import { ProductPromotionalBanner } from "@/components/product/product-promotional-banner";
import { LoopArt } from "@/components/ui/loop-art";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: `Commercial Wellness & Longevity Equipment Catalog`,
  description:
    "Explore our complete range of certified full-spectrum infrared saunas, hard-shell hyperbaric oxygen chambers, whole-body cryotherapy, robotic 4D massage chairs, chiropractic tables, and assistive mobility hardware.",
  openGraph: {
    url: "/products",
    title: `Commercial Equipment Catalog — ${brand.name}`,
    description:
      "Purpose-led recovery, rehabilitation, and longevity hardware engineered for high-performance facilities and private sanctuaries.",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Commercial Equipment Catalog — ${brand.name}`,
  url: `${SITE_URL}/products`,
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
        url: `${SITE_URL}/products#heat`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cold Plunge & Cryotherapy",
        url: `${SITE_URL}/products#cold`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hyperbaric Oxygen Chambers (HBOT)",
        url: `${SITE_URL}/products#air`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Photobiomodulation (PBM) Red Light",
        url: `${SITE_URL}/products#light`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Compression Therapy & Robotic Massage",
        url: `${SITE_URL}/products#relax`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Chiropractic Tables & Mobility Systems",
        url: `${SITE_URL}/products#mobility`,
      },
    ],
  },
};

export default function ProductsIndexPage() {
  return (
    <>
      <JsonLd data={catalogJsonLd} />
      <main className="relative isolate min-h-screen bg-canvas">
        {/* Dark base washed with brand greens + Loop ribbons drifting through the catalog */}
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

        {/* Full-width edge-to-edge horizontal banner strip */}
        <ProductPromotionalBanner />

        <div className="pt-3 sm:pt-4">
          {/* Catalog Filter & Grid (filter panel is full-bleed, grid sits in the shell) */}
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

