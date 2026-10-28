import React from "react";
import Link from "@/components/ui/intent-link";
import { isHiddenProductHref } from "@/data/home";

/**
 * Parses inline markdown: **bold** and internal links [anchor](/path).
 * Only site-relative links are rendered as links; anything else is shown as plain text.
 */
function parseInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(\/[^)\s]*\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-pine">
          {parseInline(part.slice(2, -2))}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
    if (link && isHiddenProductHref(link[2])) return link[1];
    if (link) {
      return (
        <Link
          key={index}
          href={link[2]}
          className="font-medium text-pine underline decoration-pine/40 underline-offset-4 transition-colors hover:decoration-pine"
        >
          {link[1]}
        </Link>
      );
    }
    return part;
  });
}

/**
 * Renders an editorial content paragraph or list with proper typography and formatting.
 * Eliminates raw markdown characters (like **stars**, bullets, numbered lists).
 */
export function RichText({ text }: { text: string }) {
  // If text contains newlines, split and render each line
  if (text.includes("\n")) {
    const lines = text.split("\n").filter((l) => l.trim().length > 0);
    return (
      <div className="space-y-3">
        {lines.map((line, idx) => (
          <RichText key={idx} text={line} />
        ))}
      </div>
    );
  }

  // Check if text is a bullet list item starting with "• ", "- ", or ". "
  const bulletMatch = text.match(/^[•\-\*]\s+(.*)$/);
  if (bulletMatch) {
    const content = bulletMatch[1].trim();
    return (
      <div className="flex items-start gap-3 my-1.5 pl-1 text-base sm:text-[17px] leading-relaxed text-pine/85">
        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-pine/70" />
        <span className="flex-1">{parseInline(content)}</span>
      </div>
    );
  }

  // Check if text is a numbered list item like "1. ", "2. "
  const numberedMatch = text.match(/^(\d+)\.\s+(.*)$/);
  if (numberedMatch) {
    const num = numberedMatch[1];
    const content = numberedMatch[2];
    return (
      <div className="flex items-start gap-3 my-2 pl-1 text-base sm:text-[17px] leading-relaxed text-pine/85">
        <span className="font-mono text-xs font-semibold text-wood shrink-0 pt-1">
          {num}.
        </span>
        <span className="flex-1">{parseInline(content)}</span>
      </div>
    );
  }

  return <p className="leading-relaxed">{parseInline(text)}</p>;
}
