"use client";

import NextLink from "next/link";
import { useState, type ComponentProps } from "react";

/**
 * Drop-in replacement for next/link that only prefetches once the visitor shows intent
 * (hover, keyboard focus or touch), instead of every link that scrolls into view.
 * A page with 40 links otherwise triggers ~40 background page-data requests, each one
 * billed as an ISR read and a CDN request on Vercel. Pass `prefetch` explicitly to opt out.
 * Pattern from the Next.js prefetching guide (HoverPrefetchLink).
 */
export default function Link({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof NextLink>) {
  const [active, setActive] = useState(false);

  return (
    <NextLink
      {...props}
      prefetch={prefetch !== undefined ? prefetch : active ? null : false}
      onMouseEnter={(e) => {
        setActive(true);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        setActive(true);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        setActive(true);
        onTouchStart?.(e);
      }}
    />
  );
}
