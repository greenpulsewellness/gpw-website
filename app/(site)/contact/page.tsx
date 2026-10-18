import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { ContactFormCard } from "@/components/contact/contact-form-card";

const SITE_URL = "https://greenpulsewellness.com";

export const metadata: Metadata = {
  title: `Contact & Commercial Project Consultation | ${brand.name}`,
  description:
    "Connect with GreenPulse Wellness for turnkey wellness, recovery, and longevity hardware consultation, spatial architecture, white-glove commissioning, and preventive maintenance across India.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & Commercial Consultation — ${brand.name}`,
    description:
      "Engineering turnkey commercial wellness suites and medical-grade recovery architecture. Request product information, spatial design consults, or partnership opportunities.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${brand.name}`,
  description: "Commercial recovery and longevity equipment inquiries, spatial design, and partnerships.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: brand.name,
    url: SITE_URL,
    telephone: contact.phone,
    email: contact.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <main className="relative min-h-screen bg-[#060907] text-white pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 overflow-hidden">
        {/* ── Ambient Pastel Green & Emerald Ambient Gradients ── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top-left soft pastel mint / emerald glow */}
          <div className="absolute -top-24 -left-28 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[130px]" />
          {/* Center-right pastel sage / emerald glow */}
          <div className="absolute top-1/4 -right-28 h-[500px] w-[500px] rounded-full bg-emerald-600/12 blur-[130px]" />
          {/* Bottom soft mint / lime pastel pool */}
          <div className="absolute bottom-10 left-1/4 h-[400px] w-[400px] rounded-full bg-teal-400/10 blur-[120px]" />
          {/* Subtle dark radial grid vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,9,7,0.75)_100%)]" />
        </div>

        {/* ── Content Container (Mobile & Desktop Optimized) ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactFormCard />
        </div>
      </main>
    </>
  );
}
