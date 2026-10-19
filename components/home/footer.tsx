"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, contact, solutions } from "@/data/home";
import { PRODUCT_TYPES } from "@/data/product-types";
import { useProducts } from "@/components/products-context";
import { whatsappUrl } from "@/lib/whatsapp";
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from "./icons";
import { AmbientBackground } from "@/components/ui/ambient-background";

export function Footer() {
  const year = new Date().getFullYear();
  const { products } = useProducts();

  return (
    <footer className="relative overflow-hidden bg-[#060907] text-neutral-300 pt-16 sm:pt-20 rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[48px] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.8)]">
      <AmbientBackground />

      <div className="shell relative z-10">
        {/* ── Top Link Columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-10">
            {/* Column 1: Solutions */}
            <div>
              <h3 className="text-xs font-normal tracking-wide text-neutral-400 mb-4 sm:mb-5">
                Solutions
              </h3>
              <ul className="space-y-3 text-sm font-normal text-neutral-200">
                {solutions.map((s) => (
                  <li key={s.id}>
                    <Link href={s.url} className="hover:text-white transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/blog" className="inline-flex items-center gap-1 text-white hover:text-white/70 transition-colors">
                    <span>The Journal & Blog</span>
                    <ArrowUpRight className="size-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Equipment */}
            <div>
              <h3 className="text-xs font-normal tracking-wide text-neutral-400 mb-4 sm:mb-5">
                Equipment
              </h3>
              <ul className="space-y-3 text-sm font-normal text-neutral-200">
                {PRODUCT_TYPES.map((t) => (
                  <li key={t.id}>
                    <Link href={`/products?type=${t.id}`} className="hover:text-white transition-colors line-clamp-1">
                      {t.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link href="/products" className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors">
                    <span>All {products.length} products</span>
                    <ArrowUpRight className="size-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Who We Equip */}
            <div>
              <h3 className="text-xs font-normal tracking-wide text-neutral-400 mb-4 sm:mb-5">
                Who We Equip
              </h3>
              <ul className="space-y-3 text-sm font-normal text-neutral-200">
                <li>
                  <Link href="/#who-we-equip" className="hover:text-white transition-colors">
                    Longevity Centres
                  </Link>
                </li>
                <li>
                  <Link href="/#who-we-equip" className="hover:text-white transition-colors">
                    Hotel & Resort Spas
                  </Link>
                </li>
                <li>
                  <Link href="/#who-we-equip" className="hover:text-white transition-colors">
                    Athletic Training Clubs
                  </Link>
                </li>
                <li>
                  <Link href="/#who-we-equip" className="hover:text-white transition-colors">
                    Physiotherapy Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/#who-we-equip" className="hover:text-white transition-colors">
                    Senior Living & Care
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Company & Contact */}
            <div>
              <h3 className="text-xs font-normal tracking-wide text-neutral-400 mb-4 sm:mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm font-normal text-neutral-200">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About GreenPulse
                  </Link>
                </li>
                <li>
                  <a href={`tel:${contact.phoneRaw}`} className="hover:text-white transition-colors">
                    Call {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors block break-all">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-white hover:text-white/70 transition-colors">
                    <span>Contact & Demo</span>
                    <ArrowUpRight className="size-3" />
                  </Link>
                </li>
              </ul>
          </div>
        </div>

        {/* ── Horizontal Divider ── */}
        <div className="mt-12 sm:mt-16 border-t border-white/10" />

        {/* ── Middle Utility Bar (Copyright + Socials) ── */}
        <div className="flex flex-col gap-4 py-6 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-neutral-400">
            © {year} {brand.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
          <div className="flex items-center gap-5 text-neutral-300">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-300">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-8 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity shadow-xs"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-8 items-center justify-center rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)] text-white hover:opacity-80 transition-opacity shadow-xs"
            >
              <InstagramIcon className="size-3.5" />
            </a>
            <a
              href={whatsappUrl(contact.floatingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-8 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-80 transition-opacity shadow-xs"
            >
              <WhatsAppIcon className="size-3.5" />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* ── GIANT BRAND WATERMARK ── */}
      <div className="relative mt-8 sm:mt-12 w-full overflow-hidden select-none pointer-events-none pb-4 sm:pb-8 flex justify-center items-center text-center">
        <div className="w-full text-center px-4">
          {/* Giant Brand Typography Alone (Centered) */}
          <span className="inline-block font-bold tracking-tighter leading-none text-[15vw] text-center whitespace-nowrap bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent bg-clip-text text-transparent">
            GreenPulse
          </span>
        </div>
      </div>
    </footer>
  );
}
