"use client";

import { useEffect, useState } from "react";
import Link from "@/components/ui/intent-link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Layers,
  ShieldAlert,
  Sparkles,
  Zap,
  Activity,
  ChevronDown,
} from "lucide-react";
import type { Product } from "@/data/home";
import type { ProductDetail } from "@/data/products-data";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { ProductGallery } from "./product-gallery";
import { skipImageOptimization } from "@/lib/sanity/image";
import { ProductSpecsTable } from "./product-specs-table";
import { ProductEnquiryDrawer } from "./product-enquiry-drawer";

interface ProductDetailViewProps {
  product: Product;
  detail: ProductDetail;
  relatedProducts: Product[];
}

const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

// Stagger container for the hero content column
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_LUXURY },
  },
};

export function ProductDetailView({
  product,
  detail,
  relatedProducts,
}: ProductDetailViewProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Monitor scroll for sticky action bar and tab tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }

      // Check active section
      const sections = ["overview", "features", "benefits", "specs", "protocols", "environments", "faqs"];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 100) {
            setActiveTab(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const whatsappMessage = `Hi GreenPulse Wellness, I would like to enquire about the ${product.name} (${product.category}). Please share commercial pricing and delivery timelines.`;

  return (
    <div className="relative pb-24 overflow-hidden">
      {/* Top Ambient Glow Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent blur-3xl opacity-80"
      />

      {/* Top Breadcrumbs */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_LUXURY }}
        aria-label="Breadcrumb"
        className="py-4 border-b border-white/10 mb-8 sm:mb-12"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Equipment
          </Link>
          <span>/</span>
          <span className="text-neutral-500">{product.category}</span>
          <span>/</span>
          <span className="font-medium text-white truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </motion.nav>

      {/* Hero Showcase Section */}
      <section className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Left: Interactive Media Gallery */}
        <div className="lg:col-span-6">
          <ProductGallery
            name={product.name}
            category={product.category}
            tiers={product.tiers}
            primaryImage={product.image}
            gallery={product.gallery}
            specs={product.specs}
          />
        </div>

        {/* Right: Product Headline & Key Purchasing Actions */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col justify-start"
        >
          {/* Title */}
          <motion.h1
            variants={heroItem}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]"
          >
            {product.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={heroItem}
            className="mt-3 text-lg sm:text-xl font-medium text-neutral-400 leading-snug"
          >
            {detail.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroItem}
            className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300"
          >
            {product.description}
          </motion.p>

          {/* Value Assurances Box — Small corner curves */}
          <motion.div
            variants={heroItem}
            className="mt-6 rounded-md border border-white/10 bg-[#0d0d0d] p-4 sm:p-5 space-y-2.5 transition-all hover:border-white/20"
          >
            <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium">
              <CheckCircle className="size-4 text-white shrink-0" />
              <span>Commercial-Grade Build for Daily Use</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium">
              <CheckCircle className="size-4 text-white shrink-0" />
              <span>Delivery, On-Site Installation & Setup</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-200 font-medium">
              <CheckCircle className="size-4 text-white shrink-0" />
              <span>Dedicated Operational Staff Protocols & Post-Commissioning Training</span>
            </div>
          </motion.div>

          {/* Primary Action Buttons — Small corner curves */}
          <motion.div
            variants={heroItem}
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Button
              variant="dark"
              size="lg"
              onClick={() => setIsDrawerOpen(true)}
              className="flex-1 rounded-md min-h-[48px] text-sm font-semibold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-transform"
            >
              <span>Enquire for Commercial Pricing</span>
              <ArrowRight className="size-4 ml-1.5" />
            </Button>

            <a
              href={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/15 shadow-sm min-h-[48px] hover:scale-[1.01] active:scale-[0.99]"
            >
              <WhatsAppColorIcon className="size-4.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-3 flex items-center justify-between text-xs text-neutral-400 px-1"
          >
            <span>Direct support from the GreenPulse team</span>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="underline hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <FileText className="size-3.5" />
              Request Spec Dossier
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Sticky Navigation Tabs — Small corner curves */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE_LUXURY }}
        className="sticky top-20 z-30 mt-14 sm:mt-20 border-y border-white/10 bg-black/95 backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          {[
            { id: "overview", label: "Overview" },
            { id: "features", label: "Features & Tech" },
            { id: "benefits", label: "Clinical Benefits" },
            { id: "specs", label: "Specifications" },
            { id: "protocols", label: "Protocols & Usage" },
            { id: "environments", label: "Suitability" },
            { id: "faqs", label: "FAQs" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollToSection(tab.id)}
              className={`label-mono whitespace-nowrap rounded-md px-3.5 py-1.5 !text-[0.6875rem] font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white text-neutral-950 font-semibold"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Section 1: Detailed Overview & Mechanism of Action */}
      <motion.section
        id="overview"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-14 scroll-mt-36"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="label-mono text-neutral-400 text-[0.6875rem]">Comprehensive Engineering</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Architectural Design & Therapeutic Intent
            </h2>
            {detail.overview.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base leading-relaxed text-neutral-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-md border border-white/10 bg-[#0d0d0d] p-6 shadow-xs">
              <div className="flex items-center gap-2 text-white font-semibold mb-3">
                <Activity className="size-4.5 text-white" />
                <h3 className="text-base sm:text-lg tracking-tight">{detail.mechanismOfAction.heading}</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                {detail.mechanismOfAction.description}
              </p>
              <ul className="space-y-2.5">
                {detail.mechanismOfAction.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="flex size-4.5 shrink-0 items-center justify-center rounded-md bg-white text-neutral-950 text-[10px] font-mono font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Features Grid */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Hardware Highlights</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Engineered Capabilities & Advanced Controls
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detail.features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE_LUXURY }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between rounded-md border border-white/10 bg-[#0d0d0d] p-5 transition-all hover:border-white/25 hover:shadow-md"
            >
              <div>
                <div className="size-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3.5">
                  <Zap className="size-4" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400">
                  {feat.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="label-mono text-[0.625rem] text-neutral-500">Turnkey Tested</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 3: Clinical & Recovery Benefits */}
      <motion.section
        id="benefits"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Physiological Efficacy</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Evidence-Based Biological Benefits
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detail.benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE_LUXURY }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-md border border-white/10 bg-[#0d0d0d] p-5 flex flex-col justify-between transition-all hover:border-white/25 hover:shadow-sm"
            >
              <div>
                {b.metric && (
                  <div className="inline-block rounded-md bg-white text-neutral-950 px-2 py-0.5 text-xs font-mono font-semibold mb-3 shadow-xs">
                    {b.metric}
                  </div>
                )}
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: Specifications Table */}
      <motion.section
        id="specs"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Engineering Blueprint</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Full Technical Specifications
          </h2>
        </div>

        <ProductSpecsTable specGroups={detail.specGroups} />

        {/* What's in the Box — Small corner curves */}
        <div className="mt-6 rounded-md border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-white mb-4 flex items-center gap-2">
            <Layers className="size-4.5 text-white" />
            <span>Turnkey Delivery & Included Components</span>
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {detail.whatsIncluded.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle className="size-4 text-white shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5: Protocol & Usage Guide */}
      <motion.section
        id="protocols"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Clinical Methodology</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Recommended Session Protocols
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Cadence & Frequency */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="rounded-md border border-white/10 bg-[#0d0d0d] p-5">
              <span className="label-mono text-neutral-400 text-[0.625rem]">Optimal Session Time</span>
              <div className="mt-1 text-xl font-bold text-white">
                {detail.protocol.recommendedDuration}
              </div>
              <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                Calibrated to maximize therapeutic outcome without triggering biological exhaustion.
              </p>
            </div>

            <div className="rounded-md border border-white/10 bg-[#0d0d0d] p-5">
              <span className="label-mono text-neutral-400 text-[0.625rem]">Weekly Cadence</span>
              <div className="mt-1 text-xl font-bold text-white">
                {detail.protocol.frequency}
              </div>
              <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                Cumulative regenerative benefits compound with consistent weekly integration.
              </p>
            </div>

            <div className="rounded-md border border-amber-500/20 bg-amber-950/10 p-4">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
                <ShieldAlert className="size-4 text-amber-400" />
                <span>Safety Notice & Contraindications</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-200/80">
                {detail.protocol.contraindications.map((contra, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>•</span>
                    <span>{contra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="lg:col-span-8 rounded-md border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-4">
              Step-by-Step Operator & User Procedure
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="label-mono text-neutral-400 text-[0.6875rem] mb-2">Pre-Session Checklist</h4>
                <ul className="space-y-1.5">
                  {detail.protocol.preparation.map((prep, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle className="size-4 text-neutral-500 shrink-0 mt-0.5" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="label-mono text-neutral-400 text-[0.6875rem] mb-3">Session Execution Steps</h4>
                <div className="space-y-3.5">
                  {detail.protocol.protocolSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white/10 border border-white/15 text-xs font-mono font-bold text-white">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="font-semibold text-sm text-white block">{step.step}</span>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 leading-relaxed">{step.instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 6: Commercial Suitability */}
      <motion.section
        id="environments"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Spatial Architecture</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Turnkey Facility Integration
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detail.suitableEnvironments.map((env, idx) => (
            <motion.div
              key={env.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE_LUXURY }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-md border border-white/10 bg-[#0d0d0d] p-5 flex flex-col justify-between hover:border-white/25 hover:shadow-sm transition-all"
            >
              <div>
                <span className="label-mono text-[0.625rem] text-neutral-500 block mb-1.5">Setting</span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{env.type}</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {env.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[11px] font-semibold text-neutral-300 inline-flex items-center gap-1">
                  Ready to deploy →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 7: FAQs Accordion */}
      <motion.section
        id="faqs"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        className="mt-16 scroll-mt-36"
      >
        <div className="mb-6">
          <span className="label-mono text-neutral-400 text-[0.6875rem]">Direct Clarifications</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2.5 max-w-4xl">
          {detail.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE_LUXURY }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-neutral-300 border-t border-white/10 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Section 8: Related Products — Plain image, small corner curves, no double placeholder */}
      {relatedProducts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE_LUXURY }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="label-mono text-neutral-400 text-[0.6875rem]">Recovery Synergies</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Frequently Paired Equipment
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
            >
              <span>Explore full catalog</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((rel, idx) => (
              <motion.div
                key={rel.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: EASE_LUXURY }}
              >
                <Link
                  href={`/products/${rel.id}`}
                  className="group flex flex-col rounded-md border border-white/10 bg-[#0d0d0d] overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-lg h-full"
                >
                  {/* Plain image container — no nested frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    {rel.image.src ? (
                      <Image
                        src={rel.image.src}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        unoptimized={skipImageOptimization(rel.image.src)}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-4 text-center">
                        <Sparkles className="size-5 text-neutral-500" />
                      </div>
                    )}
                    <span className="label-mono absolute top-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-[0.625rem] text-neutral-200 backdrop-blur-sm">
                      {rel.tiers[0]}
                    </span>
                  </div>

                  <div className="p-3.5 flex flex-1 flex-col justify-between">
                    <div>
                      <span className="label-mono text-[0.625rem] text-neutral-400">{rel.category}</span>
                      <h3 className="mt-1 text-sm font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                        {rel.name}
                      </h3>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
                      <span className="text-[11px] font-mono text-neutral-400">{rel.specs[0]}</span>
                      <span className="text-xs font-semibold text-white inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        View Specs →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Sticky Bottom Enquiry Bar on Scroll */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_LUXURY }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 backdrop-blur-lg px-4 py-2.5 shadow-xl"
          >
            <div className="shell flex items-center justify-between gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-md border border-white/10 bg-[#0d0d0d] shrink-0">
                  {product.image.src ? (
                    <Image
                      src={product.image.src}
                      alt={product.name}
                      fill
                      sizes="40px"
                      unoptimized={skipImageOptimization(product.image.src)}
                      className="object-cover"
                    />
                  ) : (
                    <Sparkles className="size-4 m-auto text-neutral-400" />
                  )}
                </div>
                <div>
                  <span className="label-mono block text-[0.625rem] text-neutral-400">{product.category}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight leading-none">{product.name}</h4>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <a
                  href={whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:border-white/40 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppColorIcon className="size-4.5" />
                </a>

                <Button
                  variant="dark"
                  size="md"
                  onClick={() => setIsDrawerOpen(true)}
                  className="flex-1 sm:flex-initial rounded-md px-5 min-h-[40px] text-xs sm:text-sm font-semibold hover:scale-[1.01] active:scale-[0.99] transition-transform"
                >
                  <span>Enquire for Commercial Pricing</span>
                  <ArrowRight className="size-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Enquiry Drawer / Modal */}
      <ProductEnquiryDrawer
        productName={product.name}
        productId={product.id}
        category={product.category}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
