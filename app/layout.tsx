import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/home/smooth-scroll";
import { brand } from "@/data/home";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description:
    "Recovery, rehabilitation and longevity equipment for wellness centres, hotel spas, gyms, clinics, senior living and homecare. Curated, imported, installed and serviced.",
  icons: { icon: brand.logo },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
