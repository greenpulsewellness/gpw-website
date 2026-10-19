"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[site-error]", error.digest ?? error.message);
  }, [error]);

  return (
    <main className="shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="label-mono text-white/50">Something went wrong</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
        We couldn&apos;t load this page
      </h1>
      <p className="mt-4 max-w-md text-white/60">Please try again. If it keeps happening, message us and we&apos;ll sort it out.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
