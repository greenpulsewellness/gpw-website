import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/home/smooth-scroll";
import { Footer } from "@/components/home/footer";
import { FooterStage } from "@/components/home/footer-stage";
import { Nav } from "@/components/home/nav";
import { ProductsProvider } from "@/components/products-context";
import { brand, contact } from "@/data/home";
import { getProducts } from "@/lib/products";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const SITE_URL = "https://greenpulsewellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Turnkey commercial recovery, rehabilitation, and longevity equipment for wellness centres, hotel spas, athletic clubs, physiotherapy clinics, hospitals, and private residences in India. Curated, imported, installed, and serviced.",
  applicationName: brand.name,
  keywords: [
    "commercial wellness equipment",
    "longevity suite architecture",
    "full-spectrum infrared saunas India",
    "commercial cold plunge chiller",
    "mild hyperbaric oxygen chambers HBOT",
    "photobiomodulation red light therapy bed",
    "pneumatic compression boots",
    "robotic 4D massage chairs",
    "chiropractic drop tables",
    "sports recovery technology",
    "rehabilitation hardware India",
    "turnkey spa equipment installation",
  ],
  authors: [{ name: brand.name, url: SITE_URL }],
  creator: brand.name,
  publisher: brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Commercial recovery, rehabilitation, and longevity hardware imported, installed, and maintained for wellness destinations and healthcare facilities across India.",
    images: [
      {
        url: "/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} — Commercial Longevity & Recovery Hardware`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Commercial recovery, rehabilitation, and longevity hardware imported, installed, and maintained across India.",
    images: ["/logo-horizontal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: brand.logo },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Global Schema.org Knowledge Graph (Organization & WebSite)
const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: brand.name,
      legalName: brand.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo-horizontal.png`,
        caption: brand.name,
      },
      image: `${SITE_URL}/logo-horizontal.png`,
      description:
        "Commercial recovery, rehabilitation, and longevity equipment importer, space planner, and turnkey commissioning provider across India.",
      telephone: contact.phone,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: contact.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: contact.phone,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        contact.instagram,
        contact.linkedin,
      ].filter((url) => !url.includes("TODO") && url.length > 15),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: brand.name,
      description: brand.tagline,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts();

  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body>
        <ProductsProvider products={products}>
          <SmoothScroll>
            <Nav />
            <FooterStage footer={<Footer />}>{children}</FooterStage>
          </SmoothScroll>
        </ProductsProvider>
      </body>
    </html>
  );
}
