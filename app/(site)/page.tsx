import { EnquiryProvider } from "@/components/home/enquiry-context";
import { EnquiryForm } from "@/components/home/enquiry-form";
import { EquipmentRail } from "@/components/home/equipment-rail";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { SolutionsIntro } from "@/components/home/solutions-intro";
import { SuitePackages } from "@/components/home/suite-packages";
import { WhoWeEquip } from "@/components/home/who-we-equip";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { LayoutPreloader } from "@/components/ui/layout-preloader";
import { brand } from "@/data/home";
import { JsonLd } from "@/components/seo/json-ld";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: brand.name,
      image: "https://greenpulsewellness.com/logo-horizontal.png",
      url: "https://greenpulsewellness.com",
      telephone: "+91 75500 22504",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      description:
        "GreenPulse designs, equips and launches recovery and wellness spaces in India: layout planning, a single product catalogue, installation, training and launch support.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commercial Wellness Spatial Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Recover & Restore Contrast Suites",
              url: "https://greenpulsewellness.com/solutions/recover",
              description: "Infrared saunas, cold plunges and compression for recovery floors.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AgeWell Longevity & Cellular Suites",
              url: "https://greenpulsewellness.com/solutions/agewell",
              description: "Comfort, mobility and light products for senior living and longevity centres.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rehabilitate Physical Medicine Suites",
              url: "https://greenpulsewellness.com/solutions/rehabilitate",
              description: "Practice tables, loungers and recovery tools for physio and chiropractic practices.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Live Well Clinical & Homecare Convalescence",
              url: "https://greenpulsewellness.com/solutions/live-well",
              description: "Recovery chairs and cold products for clinics, care settings and homes.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does GreenPulse Wellness install the products and train our team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We plan the layout, install and test each product on site, run a safety check with you and train your team before you open.",
          },
        },
        {
          "@type": "Question",
          name: "What does a GreenPulse project include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A project covers the space layout, the product mix from one catalogue, installation, team training and help planning your opening. Service and warranty terms are shared in your quote pack.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tell us about your space through the contact form or WhatsApp. We will ask about your space, budget band and timeline, then send a plan.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <EnquiryProvider>
      <JsonLd data={homeJsonLd} />
      <LayoutPreloader>
        <main className="relative bg-neutral-950">
          <Hero />

          {/* Overriding content layer that slides up and covers the sticky hero */}
          <div className="relative z-10 bg-[#060907] rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.8)] border-t border-white/10">
            <AmbientBackground className="-z-10 rounded-t-[inherit]" />

            <SolutionsIntro />
            <EquipmentRail />
            <WhoWeEquip />

            {/*
              SLOT — Client logos.
              Intentionally empty. Add only with written permission from each client.
            */}

            <SuitePackages />

            {/*
              SLOT — Testimonials.
              Intentionally empty. Add only real, attributable quotes (wellness
              language only — no medical or treatment outcomes).
            */}

            <HowWeWork />

            {/*
              HIDDEN — Experience store section (components/home/experience-it.tsx).
              Re-enable when the store opens and there is a real booking route.
            */}
            <EnquiryForm />
          </div>
        </main>
      </LayoutPreloader>
    </EnquiryProvider>
  );
}
