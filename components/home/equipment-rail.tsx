"use client";

import { equipmentSection } from "@/data/home";
import { SectionHeader } from "./section-header";
import GalleryModalAccordion from "@/components/ui/gallery-modal-accordion";

/**
 * Interactive modality accordion gallery for Heat, Cold, Light, Air, Relax, and Mobility.
 */
export function EquipmentRail() {
  return (
    <section id="equipment" className="overflow-hidden bg-black py-20 md:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow={equipmentSection.eyebrow}
          title={equipmentSection.title}
        />

        <div className="mt-10 md:mt-14">
          <GalleryModalAccordion />
        </div>
      </div>
    </section>
  );
}
