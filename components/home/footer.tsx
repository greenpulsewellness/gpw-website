import { ArrowRight } from "lucide-react";
import { brand, contact, footer, products, solutions } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";

const TRENDING_EQUIPMENT_COUNT = 6;

export function Footer() {
  const year = new Date().getFullYear();
  const trendingEquipment = products.slice(0, TRENDING_EQUIPMENT_COUNT);
  return (
    <footer className="bg-oat pb-[calc(7rem+env(safe-area-inset-bottom,0px))] pt-14 sm:pb-28 sm:pt-16 md:pb-12 md:pt-24">
      <div className="shell">
        <div className="grid gap-10 border-b border-wood/35 pb-12 sm:gap-12 sm:pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-lg font-medium leading-snug tracking-tight text-pine/80 sm:mt-5 sm:text-xl">{brand.tagline}</p>
            <div className="mt-5 flex gap-2 sm:mt-6">
              <SocialLink href={contact.instagram} label="Instagram">
                <InstagramIcon className="size-4.5" />
              </SocialLink>
              <SocialLink href={contact.linkedin} label="LinkedIn">
                <LinkedInIcon className="size-4.5" />
              </SocialLink>
              <SocialLink href={whatsappUrl(contact.floatingMessage)} label="WhatsApp">
                <WhatsAppIcon className="size-4.5" />
              </SocialLink>
            </div>
          </div>

          <FooterList title="Solutions" className="lg:col-span-2">
            {solutions.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-pine">{s.name}</a>
              </li>
            ))}
          </FooterList>

          <FooterList title="Equipment" className="lg:col-span-3">
            {trendingEquipment.map((p) => (
              <li key={p.id}>
                <a href="#equipment" className="hover:text-pine transition-colors">{p.name}</a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#equipment"
                className="group inline-flex items-center gap-1.5 rounded-full border border-wood/45 bg-canvas/40 px-3.5 py-1 text-xs font-medium text-pine transition-all hover:border-pine hover:bg-pine hover:text-canvas"
              >
                <span>See all</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </li>
          </FooterList>

          <FooterList title="Contact" className="lg:col-span-3">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-pine">{contact.email}</a>
            </li>
            <li>
              <a href={whatsappUrl(contact.floatingMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-pine">
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              {/* TODO: placeholder address */}
              <address className="not-italic">{contact.address}</address>
            </li>
          </FooterList>
        </div>

        {/*
          SLOT — Certifications / compliance marks.
          Intentionally empty until verified documents are available.
        */}

        <div className="flex flex-col gap-3 pt-6 text-xs text-pine/55 sm:pt-8 md:flex-row md:justify-between">
          <p>© {year} {brand.name}</p>
          <p className="max-w-xl md:text-right">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  className,
  twoColsMobile = false,
  children,
}: {
  title: string;
  className?: string;
  twoColsMobile?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="label-mono text-wood">{title}</h2>
      <ul
        className={cn(
          "mt-4 space-y-2 text-sm text-pine/75 sm:mt-5 sm:space-y-2.5",
          twoColsMobile && "grid grid-cols-2 gap-x-4 gap-y-2 space-y-0 md:block md:space-y-2.5",
        )}
      >
        {children}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-wood/45 text-pine transition-colors hover:border-pine hover:bg-pine hover:text-canvas"
    >
      {children}
    </a>
  );
}
