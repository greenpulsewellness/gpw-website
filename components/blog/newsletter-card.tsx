"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[#0d0d0d]/95 px-6 py-12 text-white sm:px-12 sm:py-16 my-16 border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-96 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="label-mono inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          The Longevity Briefing
        </span>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Institutional Wellness & Recovery Science
        </h3>

        <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          A monthly briefing covering protocol optimization, photobiomodulation research, and commercial unit economics for spas, athletic clubs, and clinics.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center rounded-full bg-white/10 border border-white/20 py-3.5 px-6 text-sm font-semibold text-white">
            <span>Thank you. You are on the GreenPulse Briefing list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email..."
                className="w-full rounded-full border border-white/10 bg-black py-3.5 px-5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-white focus:outline-none focus:ring-1 focus:ring-white/40"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              variant="dark"
              size="md"
              className="rounded-full shrink-0"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}

        <p className="mt-3 text-xs text-neutral-500">
          No spam. Zero medical claims. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
