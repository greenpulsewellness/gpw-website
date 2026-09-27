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

export default function HomePage() {
  return (
    <EnquiryProvider>
      <Nav />
      <main>
        <Hero />
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </EnquiryProvider>
  );
}
