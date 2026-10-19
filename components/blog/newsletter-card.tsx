"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), company }),
      });
      if (res.status === 422) {
        setErrorMessage("Please enter a valid email address.");
        setStatus("error");
        return;
      }
      if (res.status === 429) {
        setErrorMessage("Too many attempts. Please try again in a few minutes.");
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
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
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <input tabIndex={-1} autoComplete="off" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
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

        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-red-300">
            {errorMessage}
          </p>
        )}

        <p className="mt-3 text-xs text-neutral-500">
          No spam. Zero medical claims. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
