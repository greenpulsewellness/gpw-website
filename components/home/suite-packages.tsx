"use client";

import { ArrowRight } from "lucide-react";
import { packages, packagesSection, productById } from "@/data/home";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "./enquiry-context";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function SuitePackages() {
  const { enquirePackage } = useEnquiry();

  return (
    <section id="packages" className="bg-oat py-20 md:py-28 lg:py-32">
      <div className="shell">
        <SectionHeader index="06" eyebrow={packagesSection.eyebrow} title={packagesSection.title} line={packagesSection.line} />
        <ul className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
          {packages.map((p, i) => {
            const dark = !!p.featured;
            return (
              <li key={p.id}>
                <Reveal
                  delay={i * 0.08}
                  className={cn(
                    "flex h-full flex-col rounded-panel p-5 sm:p-6 md:p-8",
                    dark ? "on-dark bg-pine text-canvas" : "border border-wood/35 bg-canvas",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className={cn("label-mono", dark ? "text-canvas/60" : "text-wood")}>
                      Suite {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className={cn("label-mono tabular-nums", dark ? "text-canvas/60" : "text-pine/50")}>
                      {p.bundle.length} machines
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight sm:mt-8 sm:text-3xl md:text-4xl">{p.name}</h3>
                  <p className={cn("mt-2 text-sm sm:mt-3 md:text-base", dark ? "text-canvas/75" : "text-pine/70")}>{p.line}</p>

                  {/* TODO: placeholder bundle — see data/home.ts */}
                  <ul className={cn("mt-6 border-t sm:mt-8", dark ? "border-canvas/20" : "border-wood/30")}>
                    {p.bundle.map((id) => (
                      <li
                        key={id}
                        className={cn(
                          "flex items-center gap-3 border-b py-2.5 text-sm sm:py-3",
                          dark ? "border-canvas/20" : "border-wood/30",
                        )}
                      >
                        <span aria-hidden="true" className={cn("size-1.5 rounded-full", dark ? "bg-white" : "bg-wood")} />
                        {productById(id).name}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 sm:pt-8">
                    <Button
                      variant={dark ? "primary" : "dark"}
                      size="lg"
                      className="w-full min-h-[44px]"
                      onClick={() => enquirePackage(p.id)}
                    >
                      {packagesSection.cta}
                      <span className="sr-only"> — {p.name}</span>
                      <ArrowRight />
                    </Button>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
