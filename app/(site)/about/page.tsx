import type { Metadata } from "next";
import { brand } from "@/data/home";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutPillars } from "@/components/about/about-pillars";
import { AboutEcosystem } from "@/components/about/about-ecosystem";
import { AboutMethodology } from "@/components/about/about-methodology";
import { AboutStandards } from "@/components/about/about-standards";
import { AboutFaq } from "@/components/about/about-faq";
import { AboutCta } from "@/components/about/about-cta";
import { AboutComparison } from "@/components/about/about-comparison";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutData } from "@/data/about";
import { faqSchema, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `About Us — Designed. Equipped. Launched.`,
  description:
    "Learn about GreenPulse Wellness: we design, equip and launch recovery and wellness spaces for centres, gyms, clinics, hotels, senior living and homes across India.",
  openGraph: {
    title: `About GreenPulse Wellness`,
    description:
      "We design, equip and launch recovery and wellness spaces, with the layout planned before you build.",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
    url: `${SITE_URL}/about`,
  },
  alternates: {
    canonical: "/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: `About ${brand.name}`,
      url: `${SITE_URL}/about`,
      description:
        "Learn about GreenPulse Wellness: we design, equip and launch recovery and wellness spaces for centres, gyms, clinics, hotels, senior living and homes across India.",
      mainEntity: {
        "@type": "Organization",
        name: brand.name,
        url: SITE_URL,
        logo: `${SITE_URL}/logo-horizontal.png`,
      },
    },
    {
      "@type": "Table",
      about: "GreenPulse Wellness compared with a typical equipment-only supplier",
      name: aboutData.comparison.headline,
      description: aboutData.comparison.caption,
      url: `${SITE_URL}/about#about-comparison-heading`,
    },
    faqSchema(aboutData.faqs),
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <main className="relative isolate min-h-screen bg-[#060907]">
        <AmbientBackground className="-z-10" />
        <AboutHero />
        <AboutStory />
        <AboutPillars />
        <AboutEcosystem />
        <AboutMethodology />
        <AboutComparison />
        <AboutStandards />
        <AboutFaq />
        <AboutCta />
      </main>
    </>
  );
}
