import { EnquiryProvider } from "@/components/home/enquiry-context";
import { EnquiryForm } from "@/components/home/enquiry-form";
import { EquipmentRail } from "@/components/home/equipment-rail";
import { ExperienceIt } from "@/components/home/experience-it";
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
        <main className="relative bg-neutral-950">
          <Hero />

          {/* Overriding content layer that slides up and covers the sticky hero */}
          <div className="relative z-10 bg-canvas rounded-t-[28px] sm:rounded-t-[38px] md:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.5)]">

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
      </LayoutPreloader>
    </EnquiryProvider>
  );
}
