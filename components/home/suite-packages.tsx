"use client";

import Link from "@/components/ui/intent-link";
import { ArrowRight } from "lucide-react";
import { packagesSection } from "@/data/home";
import { comboById, featuredComboId, homeComboIds, type Combo } from "@/data/combos";
import { ComboCard } from "@/components/combos/combo-card";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";
import { LoopArt } from "@/components/ui/loop-art";

const homeCombos = homeComboIds.map(comboById).filter((c): c is Combo => !!c);

export function SuitePackages() {
  return (
    <section id="packages" className="relative py-20 md:py-28 lg:py-32">
      <LoopArt variant="band" className="left-1/2 top-1/2 w-[2000px] -translate-x-1/2 -translate-y-[35%] opacity-[0.07] md:w-[2600px]" />
      <div className="shell relative z-10">
        <SectionHeader
          index="06"
          eyebrow={packagesSection.eyebrow}
          title={packagesSection.title}
          line={packagesSection.line}
          align="center"
        />
        <ul className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
          {homeCombos.map((combo, i) => (
            <li key={combo.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <ComboCard combo={combo} featured={combo.id === featuredComboId} />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/combos"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            {packagesSection.allLink}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
