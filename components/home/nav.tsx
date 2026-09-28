"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact, solutions } from "@/data/home";
import { getLenis, scrollToId } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon } from "./icons";
import { MediaFrame } from "./media-frame";

const NAV_ITEMS = [
  { label: "About us", href: "#solutions" },
  { label: "Equipment", href: "#equipment" },
  { label: "Suites", href: "#packages" },
  { label: "Who We Equip", href: "#who-we-equip" },
  { label: "Questions", href: "#how-we-work" },
  { label: "Contact", href: "#enquiry" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("solutions");
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Lock scroll + Escape to close while mobile menu is open
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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const ids = ["solutions", "equipment", "packages", "who-we-equip", "how-we-work", "enquiry"];
      const scrollPos = window.scrollY + 200;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(href.slice(1))));
  };

  const wa = whatsappUrl(contact.floatingMessage);

  return (
    <>
      {/* ── Notch Navbar (Top Center, Attached to Screen Bezel) ── */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
        {/* Desktop Notch */}
        <div className="relative pointer-events-auto hidden md:flex items-center">
          {/* Left Ear Fillet Curve */}
          <svg
            className="absolute -left-4 top-0 h-4 w-4 fill-neutral-950 text-neutral-950 pointer-events-none"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16,0 L0,0 C8.837,0 16,7.163 16,16 L16,0 Z" />
          </svg>

          {/* Notch Body — Clean, zero border, seamless with outer dark frame */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-6 rounded-b-[20px] bg-neutral-950 px-7 py-2.5 text-[13px] font-normal text-neutral-300 transition-all duration-300"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  className={cn(
                    "text-xs tracking-tight transition-colors duration-200",
                    isActive
                      ? "text-white font-medium"
                      : "text-neutral-400 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Ear Fillet Curve */}
          <svg
            className="absolute -right-4 top-0 h-4 w-4 fill-neutral-950 text-neutral-950 pointer-events-none scale-x-[-1]"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16,0 L0,0 C8.837,0 16,7.163 16,16 L16,0 Z" />
          </svg>
        </div>

        {/* Mobile Notch Button */}
        <div className="relative pointer-events-auto flex md:hidden items-center">
          <svg
            className="absolute -left-2.5 top-0 h-2.5 w-2.5 fill-neutral-950 text-neutral-950 pointer-events-none"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path d="M10,0 L0,0 C5.523,0 10,4.477 10,10 L10,0 Z" />
          </svg>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-b-xl bg-neutral-950 px-4 py-1.5 text-xs font-medium text-neutral-200"
            aria-label="Open navigation menu"
          >
            <span>Navigation</span>
            <Menu className="size-3.5 text-neutral-400" />
          </button>

          <svg
            className="absolute -right-2.5 top-0 h-2.5 w-2.5 fill-neutral-950 text-neutral-950 pointer-events-none scale-x-[-1]"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path d="M10,0 L0,0 C5.523,0 10,4.477 10,10 L10,0 Z" />
          </svg>
        </div>
      </header>

      {/* ── Mobile Full Menu Drawer ── */}
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-wood/20">
              <span className="label-mono text-xs font-semibold tracking-wider text-pine">
                Navigation
              </span>
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

            <nav aria-label="Mobile Navigation" className="shell flex-1 pt-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => goTo(e, item.href)}
                      className="flex items-center justify-between border-b border-wood/15 py-4 text-2xl font-semibold tracking-tight text-pine hover:text-neutral-600 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-5 text-wood" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="shell grid shrink-0 gap-3 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-8 sm:grid-cols-2">
              <Button asChild size="lg" className="w-full">
                <a href="#enquiry" onClick={(e) => goTo(e, "#enquiry")}>
                  Enquire Now
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
