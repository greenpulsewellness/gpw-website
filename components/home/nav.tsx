"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/data/home";
import { getLenis, scrollToId } from "@/lib/scroll";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon } from "./icons";
import { Logo } from "./logo";
import { MediaFrame } from "./media-frame";

const NAV_ITEMS = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "About us", href: "/about", sectionId: "about" },
  { label: "Products", href: "/products", sectionId: "products" },
  { label: "Combos", href: "/combos", sectionId: "combos" },
  { label: "Blog", href: "/blog", sectionId: "blog" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // The notch (desktop and mobile) alternates between the links/menu button and the
  // logo. Hover, keyboard focus or an open mobile menu holds the links; otherwise it
  // flips every 5s.
  const [engaged, setEngaged] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    if (engaged || open) {
      setShowBrand(false);
      return;
    }
    const t = window.setTimeout(() => setShowBrand((b) => !b), 5000);
    return () => window.clearTimeout(t);
  }, [engaged, open, showBrand]);

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

  // Track active section on scroll if on home page
  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const enquiryEl = document.getElementById("enquiry");
      if (enquiryEl) {
        const top = enquiryEl.offsetTop;
        const height = enquiryEl.offsetHeight;
        const scrollPos = window.scrollY + 300;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection("enquiry");
          return;
        }
      }
      setActiveSection("home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    setOpen(false);
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(sectionId)));
    } else if (href === "/" && isHome) {
      e.preventDefault();
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const wa = whatsappUrl(contact.floatingMessage);

  return (
    <>
      {/* ── Notch Navbar (Top Center, Attached to Screen Bezel) ── */}
      <header className="site-nav fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none transition-opacity duration-500">
        {/* Desktop Notch */}
        <div className="relative pointer-events-auto hidden md:flex items-center">
          {/* Left Ear Fillet Curve */}
          <svg
            className="absolute -left-4 top-0 h-4 w-4 fill-white text-white pointer-events-none"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16,0 L0,0 C8.837,0 16,7.163 16,16 L16,0 Z" />
          </svg>

          {/* Notch Body — White background with black text */}
          <nav
            aria-label="Main Navigation"
            onMouseEnter={() => setEngaged(true)}
            onMouseLeave={() => setEngaged(false)}
            onFocus={() => setEngaged(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEngaged(false);
            }}
            className="grid items-center rounded-b-[20px] bg-white px-7 py-2.5 text-[13px] font-normal text-black shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          >
            <div
              className={cn(
                "col-start-1 row-start-1 flex items-center gap-6 transition-all duration-700 ease-out motion-reduce:transition-opacity",
                showBrand ? "translate-y-2 opacity-0 blur-[3px]" : "translate-y-0 opacity-100 blur-0",
              )}
            >
            {NAV_ITEMS.map((item) => {
              const isActive = isHome
                ? activeSection === item.sectionId
                : item.sectionId === "home"
                  ? pathname === "/"
                  : item.sectionId === "about"
                    ? pathname?.startsWith("/about")
                    : item.sectionId === "products"
                      ? pathname?.startsWith("/products")
                      : item.sectionId === "combos"
                        ? pathname?.startsWith("/combos")
                        : item.sectionId === "blog"
                          ? pathname?.startsWith("/blog")
                          : item.sectionId === "contact"
                            ? pathname?.startsWith("/contact")
                            : false;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => goTo(e, item.href, item.sectionId)}
                  className={cn(
                    "text-xs tracking-tight transition-colors duration-200",
                    isActive
                      ? "text-black font-bold"
                      : "text-neutral-600 hover:text-black font-medium",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            </div>


            {/* Brand name: decorative duplicate of the site name, never intercepts clicks */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none col-start-1 row-start-1 flex items-center justify-center gap-2 text-[13px] font-semibold tracking-tight text-black transition-all duration-700 ease-out motion-reduce:transition-opacity",
                showBrand ? "translate-y-0 opacity-100 blur-0" : "-translate-y-2 opacity-0 blur-[3px]",
              )}
            >
              <Logo tagline={false} className="text-[22px]" />
            </span>
          </nav>

          {/* Right Ear Fillet Curve */}
          <svg
            className="absolute -right-4 top-0 h-4 w-4 fill-white text-white pointer-events-none scale-x-[-1]"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16,0 L0,0 C8.837,0 16,7.163 16,16 L16,0 Z" />
          </svg>
        </div>

        {/* Mobile Notch Button */}
        <div className="relative pointer-events-auto flex md:hidden items-center">
          <svg
            className="absolute -left-2.5 top-0 h-2.5 w-2.5 fill-white text-white pointer-events-none"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path d="M10,0 L0,0 C5.523,0 10,4.477 10,10 L10,0 Z" />
          </svg>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            className="grid items-center justify-items-center rounded-b-xl bg-white px-4 py-1.5 text-xs font-semibold text-black shadow-md"
            aria-label="Open navigation menu"
          >
            <span
              className={cn(
                "col-start-1 row-start-1 flex items-center gap-2 transition-all duration-700 ease-out motion-reduce:transition-opacity",
                showBrand ? "translate-y-2 opacity-0 blur-[3px]" : "translate-y-0 opacity-100 blur-0",
              )}
            >
              <span>Navigation</span>
              <Menu className="size-3.5 text-black" />
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "col-start-1 row-start-1 flex items-center justify-center transition-all duration-700 ease-out motion-reduce:transition-opacity",
                showBrand ? "translate-y-0 opacity-100 blur-0" : "-translate-y-2 opacity-0 blur-[3px]",
              )}
            >
              <Logo tagline={false} className="text-[19px]" />
            </span>
          </button>

          <svg
            className="absolute -right-2.5 top-0 h-2.5 w-2.5 fill-white text-white pointer-events-none scale-x-[-1]"
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
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell flex h-16 shrink-0 items-center justify-between border-b border-white/10">
              <Logo tone="light" tagline={false} className="text-2xl" />
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
                    <Link
                      href={item.href}
                      onClick={(e) => goTo(e, item.href, item.sectionId)}
                      className="flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold tracking-tight text-white hover:text-white/70 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-5 text-neutral-400" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="shell grid shrink-0 gap-3 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-8 sm:grid-cols-2">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Enquire Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <WhatsAppColorIcon className="size-5 shrink-0" size={20} /> {contact.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
