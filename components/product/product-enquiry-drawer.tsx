"use client";

import { useEffect, useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon } from "@/components/home/icons";

interface ProductEnquiryDrawerProps {
  productName: string;
  productId: string;
  category: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductEnquiryDrawer({
  productName,
  productId,
  category,
  isOpen,
  onClose,
}: ProductEnquiryDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Wellness/Longevity Centre",
    timeline: "1–3 Months",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.businessType,
          interest: `${productName} (${category})`,
          message: [
            formData.timeline ? `Timeline: ${formData.timeline}` : null,
            formData.notes ? `Notes: ${formData.notes}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          source: typeof window !== "undefined" ? window.location.pathname : `/products/${productId}`,
        }),
      });
      if (res.status === 422) {
        setSubmitError("Please check your name and phone number and try again.");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
    } catch (err) {
      console.error("[product-enquiry] delivery error", err);
      setSubmitError("We couldn't send your request. Please try again, or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = `Hi GreenPulse Wellness, I would like to request commercial pricing and technical specifications for the ${productName} (${category}). My organization type is ${formData.businessType}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-md border border-white/15 bg-[#0d0d0d] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-md border border-white/10 text-neutral-400 hover:border-white/30 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="size-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-md bg-white/10 border border-white/15 text-white">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
              Enquiry Received for {productName}
            </h3>
            <p className="mt-2 text-xs text-neutral-400 max-w-md mx-auto">
              Our clinical hardware specialists will reach out via email or phone within 1 business day with spec dossiers and commercial pricing.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/15 hover:border-white/40 transition-colors shadow-sm"
              >
                <WhatsAppColorIcon className="size-4" />
                <span>Connect on WhatsApp Now</span>
              </a>
              <Button variant="outline" onClick={onClose} className="rounded-md text-xs">
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-white/10 pb-4 pr-8">
              <span className="label-mono text-white text-[0.625rem]">Commercial Enquiry</span>
              <h3 id="drawer-title" className="text-lg sm:text-xl font-bold tracking-tight text-white mt-0.5">
                {productName}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Request a quote, the spec sheet and a delivery timeline for your space.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label-mono block text-[0.625rem] text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jennifer Vance"
                    className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>

                <div>
                  <label className="label-mono block text-[0.625rem] text-neutral-400 mb-1">
                    Facility Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-xs sm:text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all"
                  >
                    <option value="Wellness/Longevity Centre" className="bg-black text-white">Wellness / Longevity Centre</option>
                    <option value="Hotel Spa" className="bg-black text-white">5-Star Hotel / Resort Spa</option>
                    <option value="Gym/Sports Centre" className="bg-black text-white">Performance Gym / Sports Club</option>
                    <option value="Physio/Chiro Clinic" className="bg-black text-white">Physiotherapy / Chiropractic Clinic</option>
                    <option value="Senior Living" className="bg-black text-white">Senior Living / Assisted Living</option>
                    <option value="Hospital/Clinic" className="bg-black text-white">Hospital / Rehabilitation Clinic</option>
                    <option value="Private Residence" className="bg-black text-white">Private Luxury Residence</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label-mono block text-[0.625rem] text-neutral-400 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jennifer@clinic.com"
                    className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>

                <div>
                  <label className="label-mono block text-[0.625rem] text-neutral-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="label-mono block text-[0.625rem] text-neutral-400 mb-1">
                  Installation Timeline & Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about room dimensions, electrical supply, or questions..."
                  className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <ShieldCheck className="size-4 text-white" />
                  <span>Confidential commercial pricing</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={whatsappUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:border-white/40 transition-colors"
                    title="Direct WhatsApp chat"
                  >
                    <WhatsAppColorIcon className="size-4" />
                  </a>

                  <Button type="submit" variant="dark" size="md" disabled={submitting} className="flex-1 sm:flex-initial rounded-md min-h-[40px] text-xs">
                    <Send className="size-3.5" />
                    <span>{submitting ? "Sending…" : "Submit Request"}</span>
                  </Button>
                </div>
              </div>
              {submitError && (
                <p role="alert" className="text-xs text-red-300">
                  {submitError}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
