"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, contact, nav, solutions } from "@/data/home";
import { getLenis, scrollToId } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";
import { MediaFrame } from "./media-frame";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll + Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["recover", "agewell", "rehabilitate", "livewell"];
      const scrollPos = window.scrollY + 260;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled;

  // Close first (releases the scroll lock), then scroll to the target.
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(href.slice(1))));
  };
  const wa = whatsappUrl(contact.floatingMessage);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none transition-colors duration-500 ease-calm">
        <div className="shell flex h-16 items-center justify-between gap-6 pointer-events-auto md:h-20">
          <a href="#top" aria-label={`${brand.name} — home`} className="shrink-0">
            <Logo light={!solid} />
          </a>

          <div className="flex items-center gap-3">
            <nav aria-label="Solutions" className="hidden lg:block">
              <div
                className={cn(
                  "flex items-center rounded-full p-1 transition-all duration-300",
                  solid
                    ? "border border-pine/20 bg-pine text-white shadow-[0_4px_20px_rgba(22,57,46,0.3)] backdrop-blur-xl"
                    : "border border-white/15 bg-black/60 text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                )}
              >
                <ul className="flex items-center gap-0.5">
                  {nav.links.map((link) => {
                    const isActive = activeSection === link.solutionId;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            setActiveSection(link.solutionId);
                            goTo(e, link.href);
                          }}
                          className={cn(
                            "relative inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.07em] transition-colors duration-200",
                            isActive
                              ? "text-pine font-semibold"
                              : "text-white/75 hover:text-white hover:bg-white/10",
                          )}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeNavPill"
                              className={cn(
                                "absolute inset-0 rounded-full shadow-sm",
                                solid ? "bg-lime" : "bg-white",
                              )}
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10">{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>

            <Button asChild size="sm" className="hidden sm:inline-flex shadow-sm h-8 px-4 text-xs font-semibold">
              <a href={nav.cta.href}>{nav.cta.label}</a>
            </Button>

            <Button
              ref={toggleRef}
              variant={solid ? "outline" : "outline-light"}
              size="icon"
              className={cn("lg:hidden", solid && "border-pine/30 text-pine hover:bg-pine hover:text-white")}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-lenis-prevent
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-canvas lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell flex h-16 shrink-0 items-center justify-between md:h-20">
              <Logo />
              <Button
                ref={closeRef}
                variant="outline"
                size="icon"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>

            <nav aria-label="Solutions" className="shell flex-1 pt-6">
              <p className="label-mono text-wood">Solutions</p>
              <ul className="mt-4 border-t border-wood/30">
                {nav.links.map((link, i) => {
                  const solution = solutions.find((s) => s.id === link.solutionId)!;
                  return (
                    <motion.li
                      key={link.href}
                      className="border-b border-wood/30"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => goTo(e, link.href)}
                        className="group flex items-center gap-4 py-4"
                      >
                        <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl md:h-20 md:w-28">
                          <MediaFrame media={solution.image} sizes="112px" compact />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-xl sm:text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{link.label}</span>
                          <span className="mt-1 block text-xs sm:text-sm text-pine/60 truncate">{solution.audience}</span>
                        </span>
                        <ArrowUpRight className="size-5 shrink-0 text-wood transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="shell grid shrink-0 gap-3 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-8 sm:grid-cols-2">
              <Button asChild size="lg" className="w-full">
                <a href={nav.cta.href} onClick={(e) => goTo(e, nav.cta.href)}>
                  {nav.cta.label}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <WhatsAppColorIcon className="size-5 shrink-0" size={20} /> {contact.whatsappDisplay}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
