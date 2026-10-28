import Link from "@/components/ui/intent-link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="label-mono text-white/50">Error 404</p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
        This page isn&apos;t available
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        The link may be out of date or the page may have moved. Browse the equipment catalogue or get in touch and we&apos;ll help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/products"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
        >
          View products
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
