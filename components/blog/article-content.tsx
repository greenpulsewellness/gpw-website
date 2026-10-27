"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";
import { isHiddenProductHref } from "@/data/home";
import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";
import { RichText } from "./rich-text";

interface ArticleContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  /** The pillar guide for this post's topic cluster (not set on the pillar itself). */
  pillarPost?: BlogPost;
}

export function ArticleContent({ post, relatedPosts, pillarPost }: ArticleContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const focusEquipment = (post.relatedEquipment ?? []).filter((eq) => !isHiddenProductHref(eq.link));
  const [activeSection, setActiveSection] = useState<string>(
    post.sections[0]?.id || ""
  );
  const [copied, setCopied] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Check section in view
      for (const section of post.sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.sections]);

  const copyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareText = encodeURIComponent(`${post.title} — GreenPulse Wellness Journal`);

  const handleShare = (platform: "whatsapp" | "linkedin") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${shareText}%20${url}`, "_blank", "noopener,noreferrer");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* ── Fixed Reading Progress Bar ── */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-white to-neutral-300 shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="pt-2 sm:pt-4 pb-20">
        {/* ── Breadcrumb Bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-wood/15 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-wood">
            <Link href="/" className="hover:text-pine transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-pine transition-colors">
              Journal
            </Link>
            <span>/</span>
            <span className="text-pine font-medium line-clamp-1 max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          <Link
            href="/blog"
            className="text-xs font-medium text-wood hover:text-pine transition-colors"
          >
            All Articles
          </Link>
        </div>

        {/* ── Article Header Grid (Balanced 2-Column Layout) ── */}
        <header className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Category, Date, Title, Excerpt, Share */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-white px-3.5 py-1 font-semibold text-neutral-950 shadow-xs">
                  {post.category}
                </span>
                <span className="text-wood">•</span>
                <time dateTime={post.publishedAtISO ?? post.publishedAt} className="text-wood">
                  {post.publishedAt}
                </time>
                <span className="text-wood">•</span>
                <span className="text-wood font-mono text-[11px]">
                  {post.readTime}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-pine sm:text-4xl md:text-5xl md:leading-[1.14]">
                {post.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-wood">
                {post.excerpt}
              </p>
            </div>

            {/* Editorial Meta & Text-Only Professional Share Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-wood/15 py-3.5">
              <span className="label-mono text-xs font-semibold tracking-wider text-pine">
                GreenPulse Journal
              </span>

              {/* Clean Text-Only Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-wood mr-1 hidden sm:inline">Share:</span>
                <button
                  type="button"
                  onClick={copyUrl}
                  className="rounded-full border border-white/10 bg-[#0d0d0d] px-3.5 py-1 text-xs font-medium text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {copied ? "Copied Link" : "Copy Link"}
                </button>

                <button
                  type="button"
                  onClick={() => handleShare("whatsapp")}
                  className="rounded-full border border-white/10 bg-[#0d0d0d] px-3.5 py-1 text-xs font-medium text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-colors"
                >
                  WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => handleShare("linkedin")}
                  className="rounded-full border border-white/10 bg-[#0d0d0d] px-3.5 py-1 text-xs font-medium text-neutral-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-colors"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="rounded-[24px] border border-white/15 bg-[#0d0d0d]/90 p-6 sm:p-7 backdrop-blur-sm shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="label-mono text-[11px] font-semibold tracking-wider text-white">
                    Key Takeaways
                  </span>
                  <span className="label-mono text-[10px] text-wood font-medium">
                    At a Glance
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {post.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </header>

        {/* ── Main Cover Image ── */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-wood/20 bg-oat">
          <div className="relative aspect-[16/9] w-full max-h-[580px]">
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          {post.coverAlt && (
            <p className="border-t border-wood/10 bg-canvas/70 px-6 py-2.5 text-xs text-wood italic text-center">
              {post.coverAlt}
            </p>
          )}
        </div>

        {/* ── Pillar guide banner (topic cluster) ── */}
        {pillarPost && (
          <Link
            href={`/blog/${pillarPost.slug}`}
            className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#0d0d0d]/90 px-5 py-4 transition-colors hover:border-white/30"
          >
            <span className="text-xs text-neutral-400">
              <span className="label-mono mr-2 text-[10px] font-semibold tracking-wider text-white">Part of the guide</span>
              {pillarPost.title}
            </span>
            <span className="text-xs font-semibold text-white">Read the full guide →</span>
          </Link>
        )}

        {/* ── Article Layout: Sticky Nav + Body ── */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Table of Contents & Quick Action (Sticky) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* Table of Contents */}
              <div className="rounded-[20px] border border-white/10 bg-[#0d0d0d]/85 p-6 backdrop-blur-sm shadow-lg">
                <span className="label-mono text-[11px] font-semibold tracking-wider text-white block">
                  Table of Contents
                </span>
                <nav className="mt-4 space-y-2">
                  {post.sections.map((section, idx) => {
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block text-xs leading-relaxed transition-colors py-1 ${
                          isActive
                            ? "font-semibold text-white pl-2 border-l-2 border-white"
                            : "text-neutral-400 hover:text-white pl-2 border-l-2 border-transparent"
                        }`}
                      >
                        <span className="text-neutral-500 mr-1.5">{idx + 1}.</span>
                        {section.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Commercial Advisory Card in Sidebar */}
              <div className="rounded-[20px] border border-white/15 bg-[#0d0d0d]/90 p-6 shadow-xl">
                <span className="label-mono text-[10px] font-semibold tracking-wider text-white">
                  Commercial Facility Advisory
                </span>
                <p className="mt-2 text-xs font-semibold text-pine leading-relaxed">
                  Planning a commercial wellness suite?
                </p>
                <p className="mt-1 text-xs text-wood leading-relaxed">
                  Our specialists consult on space ergonomics, turnkey equipment delivery, and preventative maintenance.
                </p>
                <Button asChild variant="dark" size="sm" className="mt-4 w-full rounded-full text-xs">
                  <Link href="/contact">Consult a Specialist</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Right Column: Editorial Body with Rich Text */}
          <div className="lg:col-span-8 space-y-12">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
                <h2 className="text-2xl font-bold tracking-tight text-pine sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-base sm:text-[17px] leading-[1.8] text-pine/85 font-normal">
                  {section.content.map((paragraph, pIdx) => (
                    <RichText key={pIdx} text={paragraph} />
                  ))}
                </div>

                {/* Section Callout (Quote, Tip, Science) without emojis/icons */}
                {section.callout && (
                  <div className="my-6 rounded-2xl border-l-4 border-pine border-y border-r border-wood/20 bg-oat/50 p-6 sm:p-7">
                    {section.callout.type === "quote" && (
                      <div>
                        <p className="text-base sm:text-lg italic font-medium text-pine leading-relaxed">
                          &ldquo;{section.callout.text.replace(/^[“"]|[”"]$/g, "")}&rdquo;
                        </p>
                        {section.callout.source && (
                          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-wood">
                            — {section.callout.source}
                          </p>
                        )}
                      </div>
                    )}

                    {section.callout.type === "science" && (
                      <div>
                        <span className="label-mono text-[10px] font-semibold text-pine block mb-1">
                          Mechanism Breakdown
                        </span>
                        <p className="text-xs sm:text-sm text-pine/80 leading-relaxed font-normal">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {section.callout.type === "tip" && (
                      <div>
                        <span className="label-mono text-[10px] font-semibold text-pine block mb-1">
                          Practical Tip
                        </span>
                        <p className="text-xs sm:text-sm text-pine/80 leading-relaxed font-normal">
                          {section.callout.text}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}

            {/* ── FAQ ── */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faq" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-pine sm:text-3xl">Frequently asked questions</h2>
                <div className="divide-y divide-wood/15 rounded-2xl border border-wood/20 bg-oat/40">
                  {post.faqs.map((faq) => (
                    <details key={faq.question} className="group px-5 py-4 sm:px-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-pine [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-wood transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="mt-3 text-[15px] leading-relaxed text-pine/80">
                        <RichText text={faq.answer} />
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* ── Equipment in Focus Highlight ── */}
            {focusEquipment.length > 0 && (
              <div className="my-12 rounded-[28px] border border-pine/30 bg-oat/50 p-6 sm:p-8">
                <span className="label-mono text-[11px] font-semibold tracking-wider text-pine">
                  Equipment In Focus
                </span>
                <div className="mt-5 space-y-6">
                  {focusEquipment.map((eq) => (
                    <div
                      key={eq.name}
                      className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-canvas p-5 border border-wood/20"
                    >
                      <Link href={eq.link} className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-oat border border-wood/15 block hover:border-pine/40 transition-colors">
                        {eq.image && (
                          <Image
                            src={eq.image}
                            alt={eq.name}
                            fill
                            sizes="96px"
                            className="object-contain p-2"
                          />
                        )}
                      </Link>
                      <div className="flex-1 text-center sm:text-left">
                        <span className="label-mono text-[10px] text-wood block">
                          {eq.category}
                        </span>
                        <h4 className="text-base font-bold text-pine mt-0.5 hover:text-neutral-600 transition-colors">
                          <Link href={eq.link}>{eq.name}</Link>
                        </h4>
                        <p className="text-xs text-wood mt-1.5 leading-relaxed">
                          {eq.description}
                        </p>
                      </div>
                      <Button asChild variant="outline" size="sm" className="shrink-0 rounded-full">
                        <Link href={eq.link}>
                          Explore Specs
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tags List ── */}
            <div className="flex flex-wrap items-center gap-2 border-t border-wood/15 pt-8">
              <span className="text-xs font-semibold text-wood uppercase tracking-wider mr-2">
                Topics:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-oat px-3 py-1 font-mono text-xs text-pine/80 border border-wood/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ── Facility Consultation CTA ── */}
            <div className="rounded-[28px] bg-gradient-to-br from-white/[0.06] via-[#0d0d0d] to-black border border-white/10 p-8 sm:p-10 text-white my-12 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <span className="label-mono text-[10px] font-semibold text-white">
                Turnkey Solutions
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Planning a recovery suite or commercial wellness facility?
              </h3>
              <p className="mt-3 text-sm text-neutral-300 max-w-xl leading-relaxed">
                GreenPulse provides space layout planning, product selection, electrical planning, installation and team training for your space.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="dark" size="md">
                  <Link href="/contact">Request Facility Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href="/blog">Browse More Insights</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Articles ── */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 border-t border-wood/20 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="label-mono text-xs text-wood font-medium">Continue Reading</span>
                <h3 className="text-2xl font-bold tracking-tight text-pine mt-1">
                  Related Perspectives
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center text-xs font-semibold text-pine hover:underline"
              >
                All Articles
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
