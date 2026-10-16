"use client";

import { useState } from "react";
import type { ProductSpecGroup } from "@/data/products-data";
import { Check, Copy } from "lucide-react";

interface ProductSpecsTableProps {
  specGroups: ProductSpecGroup[];
}

export function ProductSpecsTable({ specGroups }: ProductSpecsTableProps) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(`${label}: ${value}`);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 1800);
  };

  const currentGroup = specGroups[activeGroupIndex] || specGroups[0];

  return (
    <div className="flex flex-col rounded-md border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-md">
      {/* Group Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/10 bg-black p-2 no-scrollbar">
        {specGroups.map((group, idx) => (
          <button
            key={group.category}
            type="button"
            onClick={() => setActiveGroupIndex(idx)}
            className={`label-mono whitespace-nowrap rounded-md px-3.5 py-2 !text-[0.6875rem] font-medium transition-all ${
              activeGroupIndex === idx
                ? "bg-white text-neutral-950 font-semibold"
                : "text-neutral-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Active Group Content */}
      <div className="p-5 sm:p-6">
        <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-4 flex items-center justify-between">
          <span>{currentGroup.category} Specifications</span>
          <span className="label-mono text-[0.625rem] text-neutral-400 font-normal">
            {currentGroup.items.length} Parameters Calibrated
          </span>
        </h4>

        <div className="divide-y divide-white/10 overflow-hidden rounded-md border border-white/10 bg-black/30">
          {currentGroup.items.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 transition-colors hover:bg-white/5"
            >
              <div className="sm:w-1/3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {item.label}
                </span>
              </div>

              <div className="flex flex-1 items-center justify-between gap-4">
                <span className="text-sm font-medium text-neutral-200">
                  {item.value}
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(item.label, item.value)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex size-6 items-center justify-center rounded-md border border-white/15 text-neutral-400 hover:border-white/40 hover:text-white hover:bg-white/10"
                  title="Copy specification to clipboard"
                  aria-label={`Copy ${item.label}`}
                >
                  {copiedItem === item.label ? (
                    <Check className="size-3 text-white" />
                  ) : (
                    <Copy className="size-3" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
