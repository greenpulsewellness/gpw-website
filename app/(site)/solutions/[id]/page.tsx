import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand } from "@/data/home";
import {
  getAllSolutions,
  getSolutionBySlug,
  type SolutionDetail,
} from "@/data/solutions-data";
import { SolutionProvider } from "@/components/solution/solution-context";
import { SolutionHero } from "@/components/solution/solution-hero";
import { SpaceBlueprint } from "@/components/solution/space-blueprint";
import { SolutionCatalog } from "@/components/solution/solution-catalog";
import { SuiteBundles } from "@/components/solution/suite-bundles";
import { WorkflowProtocol } from "@/components/solution/workflow-protocol";
import { SolutionFaq } from "@/components/solution/solution-faq";
import { SolutionCrossNav } from "@/components/solution/solution-cross-nav";
import { SolutionEnquiryModal } from "@/components/solution/solution-enquiry-modal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const all = getAllSolutions();
  const params: { id: string }[] = [];

  for (const sol of all) {
    params.push({ id: sol.slug });
    for (const alias of sol.aliases) {
      params.push({ id: alias });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const solution = getSolutionBySlug(id);

  if (!solution) {
    return {
      title: `Solution Not Found — ${brand.name}`,
    };
  }

  const siteUrl = "https://greenpulsewellness.com";
  const canonicalUrl = `${siteUrl}/solutions/${solution.slug}`;

  return {
    title: `${solution.title} Commercial Equipment & Space Architecture | ${brand.name}`,
    description: `${solution.headline}. ${solution.tagline} Curated for ${solution.audience}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      solution.title,
      solution.badge,
      "commercial wellness space planning",
      "turnkey recovery suite",
      "longevity equipment installation",
      "GreenPulse Wellness",
      solution.audience,
    ],
    openGraph: {
      title: `${solution.title} — ${solution.headline} | ${brand.name}`,
      description: solution.tagline,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: solution.heroImage,
          alt: `${solution.title} Space Architecture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} — ${brand.name}`,
      description: solution.tagline,
      images: [solution.heroImage],
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { id } = await params;
  const solution = getSolutionBySlug(id);

  if (!solution) {
    notFound();
  }

  const siteUrl = "https://greenpulsewellness.com";

  // Structured Data (Schema.org) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${siteUrl}/#solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: solution.title,
            item: `${siteUrl}/solutions/${solution.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: `${solution.title} Turnkey Space Fitouts`,
        provider: {
          "@type": "Organization",
          name: brand.name,
          url: siteUrl,
        },
        description: solution.tagline,
        serviceType: "Commercial Wellness Space Architecture & Hardware Commissioning",
        areaServed: "India",
        audience: {
          "@type": "Audience",
          audienceType: solution.audience,
        },
      },
    ],
  };

  return (
    <SolutionProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black">
        <SolutionHero solution={solution} />
        <SpaceBlueprint solution={solution} />
        <SolutionCatalog solution={solution} />
        <SuiteBundles solution={solution} />
        <WorkflowProtocol solution={solution} />
        <SolutionFaq solution={solution} />
        <SolutionCrossNav currentSolutionId={solution.id} />
      </main>
      <SolutionEnquiryModal solutionTitle={solution.title} />
    </SolutionProvider>
  );
}
