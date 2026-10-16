"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, contact, solutions } from "@/data/home";
import { useProducts } from "@/components/products-context";
import { whatsappUrl } from "@/lib/whatsapp";
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from "./icons";

const TRENDING_EQUIPMENT_COUNT = 5;

export function Footer() {
  const year = new Date().getFullYear();
  const { products } = useProducts();
  const trendingEquipment = products.slice(0, TRENDING_EQUIPMENT_COUNT);

  return (
    <footer className="relative overflow-hidden bg-black text-neutral-300 pt-16 sm:pt-20">
      {/* ── Subtle Ambient Gradient Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div className="shell relative z-10">
        {/* ── Top Link Columns ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-10">
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
                {trendingEquipment.map((p) => (
                  <li key={p.id}>
                    <Link href={`/products/${p.id}`} className="hover:text-white transition-colors line-clamp-1">
                      {p.name}
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

            {/* Column 4: Policies & Trust */}
            <div>
              <h3 className="text-xs font-normal tracking-wide text-neutral-400 mb-4 sm:mb-5">
                Policies & Trust
              </h3>
              <ul className="space-y-3 text-sm font-normal text-neutral-200">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/complaints" className="hover:text-white transition-colors">
                    Grievance & Complaints
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-white transition-colors">
                    Safety & Compliance
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
                  <a href={whatsappUrl(contact.floatingMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp Desk
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors truncate block">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <Link href="/#enquiry" className="inline-flex items-center gap-1 text-white hover:text-white/70 transition-colors">
                    <span>Book a Demo</span>
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
          <div className="flex items-center gap-2.5 text-neutral-300">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xs"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xs"
            >
              <svg className="size-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xs"
            >
              <InstagramIcon className="size-3.5" />
            </a>
            <a
              href={whatsappUrl(contact.floatingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:border-white/40 hover:bg-white/10 hover:text-white transition-all shadow-xs"
            >
              <WhatsAppIcon className="size-3.5" />
            </a>
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
