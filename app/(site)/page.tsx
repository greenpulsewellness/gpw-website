import { EnquiryProvider } from "@/components/home/enquiry-context";
import { EnquiryForm } from "@/components/home/enquiry-form";
import { EquipmentRail } from "@/components/home/equipment-rail";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { Nav } from "@/components/home/nav";
import { SolutionsIntro } from "@/components/home/solutions-intro";
import { SuitePackages } from "@/components/home/suite-packages";
import { WhoWeEquip } from "@/components/home/who-we-equip";
import { LayoutPreloader } from "@/components/ui/layout-preloader";
import { brand } from "@/data/home";

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
        "Turnkey commercial wellness, recovery, and rehabilitation equipment provider in India. Turnkey space design, white-glove equipment commissioning, and preventive biomedical maintenance.",
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
              description: "High-throughput contrast therapy, full-spectrum infrared saunas, and ice baths for commercial wellness operators.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AgeWell Longevity & Cellular Suites",
              url: "https://greenpulsewellness.com/solutions/agewell",
              description: "Mild hyperbaric oxygen chambers (mHBOT) and 360-degree photobiomodulation (PBM) red light canopies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rehabilitate Physical Medicine Suites",
              url: "https://greenpulsewellness.com/solutions/rehabilitate",
              description: "Electric drop chiropractic tables, 4D robotic spinal decompression loungers, and clinical recovery systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Live Well Clinical & Homecare Convalescence",
              url: "https://greenpulsewellness.com/solutions/live-well",
              description: "Zero-gravity patient recovery chairs, localized cold therapy, and month-to-month post-op equipment rentals.",
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
          name: "Does GreenPulse Wellness handle import customs and on-site installation in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GreenPulse Wellness manages complete end-to-end logistics including international freight, customs clearance, transit insurance, on-site mechanical assembly, electrical safety verification, and operational commissioning across India.",
          },
        },
        {
          "@type": "Question",
          name: "What equipment warranties and maintenance services are provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All commercial equipment is covered by comprehensive manufacturer warranties paired with our dedicated Pan-India Annual Maintenance Contracts (AMC), including scheduled quarterly preventive servicing, consumable replacements, and rapid technician dispatch.",
          },
        },
        {
          "@type": "Question",
          name: "Can facilities rent recovery equipment instead of buying outright?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer structured commercial leasing for gyms and spas as well as month-to-month clinical rentals for hospitals, post-operative patients, and home convalescence suites.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <EnquiryProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <LayoutPreloader>
        <Nav />
        <main className="relative bg-neutral-950">
          <Hero />

          {/* Overriding content layer that slides up and covers the sticky hero */}
          <div className="relative z-10 bg-canvas rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.8)] border-t border-white/10">

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
