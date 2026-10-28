import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Outfit } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/home/smooth-scroll";
import { Footer } from "@/components/home/footer";
import { FooterStage } from "@/components/home/footer-stage";
import { Nav } from "@/components/home/nav";
import { ProductsProvider } from "@/components/products-context";
import { brand, contact } from "@/data/home";
import { getProducts } from "@/lib/products";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from '@vercel/analytics/next';
import { DEFAULT_OG_IMAGE } from "@/lib/schema";

const display = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const SITE_URL = "https://greenpulsewellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "GreenPulse designs, equips and launches recovery and wellness spaces for wellness centres, gyms, clinics, hotel spas, senior living and homes across India.",
  applicationName: brand.name,
  keywords: [
    "commercial wellness equipment",
    "longevity suite architecture",
    "full-spectrum infrared saunas India",
    "commercial cold plunge chiller",
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
      "Designed. Equipped. Launched. Recovery and wellness spaces for centres, gyms, clinics, hotels and homes across India.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Designed. Equipped. Launched. Recovery and wellness spaces across India.",
    images: [DEFAULT_OG_IMAGE],
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
  icons: { icon: "/loop-mark.svg" },
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
        "Recovery and wellness space partner in India: layout design, equipment from one catalogue, installation, training and launch support.",
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
    // The home intro's inline script may add data-intro-skip before hydration.
    <html lang="en" suppressHydrationWarning className={`dark ${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <JsonLd data={globalJsonLd} />
      </head>
      <body>
        <ProductsProvider products={products}>
          <SmoothScroll>
            <Nav />
            <FooterStage footer={<Footer />}>{children}</FooterStage>
          </SmoothScroll>
          <CookieBanner />
          <Analytics />
        </ProductsProvider>
      </body>
    </html>
  );
}
