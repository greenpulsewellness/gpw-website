"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Printer, ArrowUpRight, Clock, Calendar, CheckCircle2, MessageSquare, Mail } from "lucide-react";
import { brand, contact } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { AmbientBackground } from "@/components/ui/ambient-background";

export interface LegalSection {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
}

export const LEGAL_PAGES = [
  {
    href: "/terms",
    title: "Terms & Conditions",
    shortTitle: "Terms",
    description: "General terms of service, equipment supply, rentals, and warranties.",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
    shortTitle: "Privacy",
    description: "Data handling, digital privacy, and protection standards.",
  },
  {
    href: "/cookies",
    title: "Cookie Policy",
    shortTitle: "Cookies",
    description: "How cookies and tracking preferences operate on our website.",
  },
  {
    href: "/complaints",
    title: "Complaints & Grievance",
    shortTitle: "Complaints",
    description: "Escalation matrix, service breakdown, and Grievance Officer details.",
  },
  {
    href: "/compliance",
    title: "Regulatory Compliance",
    shortTitle: "Compliance",
    description: "Wellness classification, contraindications, and safety guidelines.",
  },
];

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  sections: LegalSection[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  version,
  sections,
  children,
}: LegalPageLayoutProps) {
  const pathname = usePathname();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="relative isolate min-h-screen bg-[#060907]">
      <AmbientBackground className="-z-10" />

      {/* ── Document Hero ── */}
      <section className="border-b border-white/10 bg-gradient-to-b from-emerald-500/[0.07] via-emerald-500/[0.02] to-transparent pb-10 pt-24 sm:pb-14 sm:pt-28">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
                {title}
              </h1>
              <p className="mt-3 text-base text-neutral-300 sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-all hover:border-white hover:bg-white/10 hover:text-white/80 print:hidden"
                title="Print or Save as PDF"
              >
                <Printer className="size-3.5" />
                <span>Print Document</span>
              </button>
              <a
                href={whatsappUrl(`Hello ${brand.name}, I have a query regarding the ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/15 hover:border-white print:hidden"
              >
                <MessageSquare className="size-3.5" />
                <span>Legal Enquiries</span>
              </a>
            </div>
          </div>

          {/* Metadata badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-400 border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5 text-white" />
              <span>Effective: <strong className="font-semibold text-white">{effectiveDate}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-white" />
              <span>Last Revised: <strong className="font-semibold text-white">{lastUpdated}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-white" />
              <span>Official Version: <strong className="font-semibold text-white">{version}</strong></span>
            </div>
          </div>

          {/* ── Policy Selector Tab Bar ── */}
          <div className="mt-8 overflow-x-auto no-scrollbar print:hidden">
            <nav className="flex items-center gap-2 border-b border-white/10 pb-3 min-w-max">
              {LEGAL_PAGES.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                      isActive
                        ? "bg-white text-neutral-950 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        : "bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* ── Main Legal Body & Sidebar ── */}
      <div className="shell py-10 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky Sidebar */}
          <aside className="lg:col-span-4 print:hidden">
            <div className="sticky top-20 space-y-6">
              {/* Table of contents card */}
              <div className="rounded-2xl border border-white/10 bg-[#0a0f0c]/80 p-5 backdrop-blur-md">
                <h2 className="label-mono text-white text-[11px] mb-3 font-semibold">Table of Contents</h2>
                <nav className="space-y-1 text-sm max-h-[50vh] overflow-y-auto no-scrollbar">
                  {sections.map((sec, idx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="font-mono text-xs text-neutral-500 group-hover:text-white">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span className="text-xs font-medium leading-relaxed">{sec.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Assistance Box */}
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.02] to-[#0a0f0c] p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-white">Need Clarification?</h3>
                <p className="mt-1.5 text-xs text-neutral-300 leading-relaxed">
                  For formal legal notices, tender compliance queries, or commercial purchase agreements:
                </p>
                <div className="mt-4 space-y-2 text-xs text-neutral-200">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="size-3.5 text-neutral-400" />
                    <span>{contact.email}</span>
                  </a>
                  <a
                    href={whatsappUrl("Hello GPW Legal team, I have a compliance inquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-medium hover:underline"
                  >
                    <ArrowUpRight className="size-3.5 text-white" />
                    <span>WhatsApp Legal Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <article className="lg:col-span-8 space-y-10 prose-pine">
            {children}

            {/* Bottom Cross-Links */}
            <div className="mt-16 rounded-2xl border border-white/10 bg-[#0a0f0c]/80 p-6 sm:p-8 print:hidden">
              <h3 className="text-sm font-semibold text-white">Related Policies & Standards</h3>
              <p className="mt-1 text-xs text-neutral-400">
                Review complementary documentation governing your interactions with {brand.name}.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {LEGAL_PAGES.filter((p) => p.href !== pathname).map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group rounded-xl border border-white/10 bg-black/40 p-3.5 transition-all hover:border-white/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white group-hover:text-white/80 transition-colors">
                        {p.title}
                      </span>
                      <ArrowUpRight className="size-3.5 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-1 text-[11px] text-neutral-400 line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
