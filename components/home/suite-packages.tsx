"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { packages, packagesSection } from "@/data/home";
import { useProducts } from "@/components/products-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "./enquiry-context";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

export function SuitePackages() {
  const { enquirePackage } = useEnquiry();
  const { productById } = useProducts();

  return (
    <section id="packages" className="bg-black py-20 md:py-28 lg:py-32">
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
                    "flex h-full flex-col rounded-panel p-5 sm:p-6 md:p-8 transition-all duration-300",
                    dark
                      ? "bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] border-2 border-white/40 shadow-[0_0_35px_rgba(255,255,255,0.05)] text-white"
                      : "bg-[#0d0d0d]/90 border border-white/10 text-neutral-200 hover:border-white/20",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className={cn("label-mono flex items-center gap-2", dark ? "text-white font-semibold" : "text-neutral-400")}>
                      <span>Suite {String(i + 1).padStart(2, "0")}</span>
                      {dark && (
                        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] text-white border border-white/30">
                          Recommended
                        </span>
                      )}
                    </p>
                    <p className={cn("label-mono tabular-nums", dark ? "text-neutral-300" : "text-neutral-400")}>
                      {p.bundle.length} machines
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white sm:mt-8 sm:text-3xl md:text-4xl">{p.name}</h3>
                  <p className={cn("mt-2 text-sm sm:mt-3 md:text-base", dark ? "text-neutral-300" : "text-neutral-400")}>{p.line}</p>

                  <ul className={cn("mt-6 border-t sm:mt-8", dark ? "border-white/20" : "border-white/10")}>
                    {p.bundle.map((id) => (
                      <li
                        key={id}
                        className={cn(
                          "flex items-center gap-3 border-b py-2.5 text-sm sm:py-3",
                          dark ? "border-white/20" : "border-white/10",
                        )}
                      >
                        <span aria-hidden="true" className={cn("size-1.5 rounded-full shrink-0", dark ? "bg-white" : "bg-neutral-500")} />
                        <Link href={`/products/${id}`} className="hover:text-white transition-colors text-neutral-200">
                          {productById(id).name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 sm:pt-8">
                    <Button
                      variant={dark ? "dark" : "outline"}
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
