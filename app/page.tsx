import { EnquiryProvider } from "@/components/home/enquiry-context";
import { EnquiryForm } from "@/components/home/enquiry-form";
import { EquipmentRail } from "@/components/home/equipment-rail";
import { ExperienceIt } from "@/components/home/experience-it";
import { FloatingWhatsApp } from "@/components/home/floating-whatsapp";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Nav } from "@/components/home/nav";
import { RentalStrip } from "@/components/home/rental-strip";
import { SolutionsBento } from "@/components/home/solutions-bento";
import { Spotlight } from "@/components/home/spotlight";
import { SuitePackages } from "@/components/home/suite-packages";
import { WhoWeEquip } from "@/components/home/who-we-equip";
import { LayoutPreloader } from "@/components/ui/layout-preloader";

export default function HomePage() {
  return (
    <EnquiryProvider>
      <LayoutPreloader>
        <Nav />
        <main className="relative bg-pine">
          <Hero />

          {/* Overriding content layer that slides up over the sticky hero */}
          <div className="relative z-10 bg-canvas shadow-[0_-24px_50px_rgba(0,0,0,0.35)]">
            {/* Organic curved transition top edge */}
            <div
              aria-hidden="true"
              className="absolute -top-[27px] sm:-top-[39px] md:-top-[55px] lg:-top-[63px] left-0 right-0 z-20 overflow-hidden leading-none pointer-events-none"
            >
              <svg
                className="relative block h-7 w-full text-canvas fill-current sm:h-10 md:h-14 lg:h-16 drop-shadow-[0_-8px_16px_rgba(0,0,0,0.25)]"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
              >
                <path d="M0,60 Q720,15 1440,60 L1440,80 L0,80 Z" />
              </svg>
            </div>

            <SolutionsBento />
            <EquipmentRail />
            <Spotlight />
            <WhoWeEquip />

            {/*
              SLOT — Client logos.
              Intentionally empty. Add only with written permission from each client.
            */}

            <SuitePackages />

            {/*
              SLOT — Testimonials.
              Intentionally empty. Add only real, attributable quotes (wellness
              language only — no medical or treatment outcomes).
            */}

            <ExperienceIt />
            <RentalStrip />
            <EnquiryForm />
          </div>
        </main>
        <div className="relative z-10 bg-oat">
          <Footer />
        </div>
        <FloatingWhatsApp />
      </LayoutPreloader>
    </EnquiryProvider>
  );
}
