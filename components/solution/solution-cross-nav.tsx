"use client";

import Link from "@/components/ui/intent-link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAllSolutions, type SolutionDetail } from "@/data/solutions-data";

interface SolutionCrossNavProps {
  currentSolutionId: string;
}

export function SolutionCrossNav({ currentSolutionId }: SolutionCrossNavProps) {
  const otherSolutions = getAllSolutions().filter((s) => s.id !== currentSolutionId);

  return (
    <section className="py-20 md:py-28 border-t border-white/10 relative overflow-hidden">
      <div className="shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-1">
              Explore All Approaches
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Other Ways We Equip a Space
            </h2>
          </div>
          <Link
            href="/#solutions"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>Back to 4-Way Overview</span>
            <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherSolutions.map((sol) => (
            <Link
              key={sol.id}
              href={`/solutions/${sol.slug}`}
              className="group flex flex-col rounded-[24px] border border-white/10 bg-[#0d0d0d] overflow-hidden hover:border-white/30 hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={sol.heroImage}
                  alt={sol.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-70" />
                
                <div className="absolute top-3 left-3 rounded-full border border-white/15 bg-neutral-950/80 px-2.5 py-0.5 text-[0.625rem] font-mono text-white backdrop-blur-md">
                  {sol.badge}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{sol.title}</span>
                    <ArrowUpRight className="size-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 line-clamp-2">
                    {sol.audience}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>View Space Layout</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
