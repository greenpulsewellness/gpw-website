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

export const metadata: Metadata = {
  title: `About Us — Architectural Longevity & Recovery Infrastructure | ${brand.name}`,
  description:
    "Learn about GreenPulse Wellness: our founding thesis, biophysical engineering standards, and turnkey commercial deployment of hyperbarics, infrared thermal cabins, cryo, and rehabilitation hardware across India.",
  openGraph: {
    title: `About GreenPulse Wellness — Longevity Infrastructure`,
    description:
      "Curated, certified recovery and rehabilitation hardware for luxury destinations, longevity clinics, athletic clubs, and private residences.",
    type: "website",
    url: "https://greenpulsewellness.com/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${brand.name}`,
  url: "https://greenpulsewellness.com/about",
  description:
    "Learn about GreenPulse Wellness: our founding thesis, biophysical engineering standards, and turnkey commercial deployment of hyperbarics, infrared thermal cabins, cryo, and rehabilitation hardware across India.",
  mainEntity: {
    "@type": "Organization",
    name: brand.name,
    url: "https://greenpulsewellness.com",
    logo: "https://greenpulsewellness.com/logo-horizontal.png",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <main className="min-h-screen bg-canvas">
        <AboutHero />
        <AboutStory />
        <AboutPillars />
        <AboutEcosystem />
        <AboutMethodology />
        <AboutStandards />
        <AboutFaq />
        <AboutCta />
      </main>
    </>
  );
}
