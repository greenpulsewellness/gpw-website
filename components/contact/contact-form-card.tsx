"use client";

import { useState } from "react";
import Link from "@/components/ui/intent-link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";
import { brand, contact } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ContactFormCard() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [interestedItem, setInterestedItem] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // Honeypot

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 8) {
      setErrorMessage("Please enter a valid WhatsApp or phone number.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          business: facilityType.trim() || "Commercial Wellness",
          interest: interestedItem.trim() || "General Inquiry",
          message: message.trim(),
          source: "/contact",
          company,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit inquiry");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send inquiry at the moment. Please reach out via WhatsApp directly.");
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setFacilityType("");
    setInterestedItem("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  };

  const wa = whatsappUrl(contact.floatingMessage);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* ── Two Column Layout on Desktop, Fluid Stack on Mobile ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ── Left Column: Brand Context & Direct Channels ── */}
        <div className="lg:col-span-5 flex flex-col space-y-6 pt-2">
          {/* Eyebrow */}
         

          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-3">
              Let&apos;s build your sanctuary.
            </h1>
            <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
              We design, equip and launch recovery and wellness spaces for centres, gyms, clinics,
              hotels and homes, from the first layout to opening day.
            </p>
          </div>

          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 pt-2">
            {/* Phone / WhatsApp */}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-[#0c0d10]/80 border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
            >
              <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-neutral-300">
                <Phone className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Direct WhatsApp Desk
                </div>
                <div className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors">
                  {contact.phone}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group p-4 rounded-2xl bg-[#0c0d10]/80 border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
            >
              <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-neutral-300">
                <Mail className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Concierge Mailbox
                </div>
                <div className="text-sm font-bold text-white truncate group-hover:text-neutral-200 transition-colors">
                  {contact.email}
                </div>
              </div>
            </a>
          </div>

          {/* Catalog Pill Link */}
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-all group"
            >
              <span>Explore hardware catalog</span>
              <ArrowRight className="size-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── Right Column: Form Card with Grey Borders & Accents ── */}
        <div className="lg:col-span-7">
          <div className="relative rounded-[28px] bg-[#0a0c0f]/90 backdrop-blur-2xl border border-white/10 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.9)] p-6 sm:p-8 md:p-10 transition-all">
            {/* Card Header: Grey Accent Bar + Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-6 bg-neutral-400 rounded-full inline-block" />
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    Commercial Inquiry
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-1 pl-4">
                  Accelerate your wellness facility vision
                </p>
              </div>

              {/* Quick Pill Link to Products */}
              <Link
                href="/products"
                className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-all group"
              >
                <span>View Products</span>
                <ArrowRight className="size-3 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Form Body or Success State */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center max-w-md mx-auto"
                >
                  <div className="size-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="size-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                    Thank you, <span className="font-semibold text-white">{fullName}</span>. Our spatial
                    consultants and biomedical equipment engineers will review your requirements and get back to
                    you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto flex-1 rounded-full px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 rounded-full px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider text-center transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                    >
                      Instant WhatsApp Chat →
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                        Full Name <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@academy.com"
                        className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp Number & Facility / Space Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                        WhatsApp Number <span className="text-neutral-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                        Facility / Space Type
                      </label>
                      <input
                        type="text"
                        value={facilityType}
                        onChange={(e) => setFacilityType(e.target.value)}
                        placeholder="e.g. Luxury Resort, Longevity Clinic, Gym"
                        className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Interested Equipment / Suite (Full Width) */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                      Interested Equipment / Suite
                    </label>
                    <input
                      type="text"
                      value={interestedItem}
                      onChange={(e) => setInterestedItem(e.target.value)}
                      placeholder="e.g. Infrared Sauna, Cold Plunge, Light Device, Contrast Suite"
                      className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all"
                    />
                  </div>

                  {/* Row 4: Message (Full Width) */}
                  <div>
                    <label className="block text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you reach the finish line?"
                      className="w-full rounded-2xl bg-[#121418] border border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20 px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Error Alert if any */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Bottom Row / Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                    <p className="text-[11px] text-neutral-500 font-mono text-center sm:text-left">
                      Strict privacy · No spam · Response within 24h
                    </p>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto rounded-full px-8 py-3.5 bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(255,255,255,0.18)] hover:shadow-[0_6px_32px_rgba(255,255,255,0.28)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin text-black" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Info</span>
                          <ArrowRight className="size-4 text-black" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
