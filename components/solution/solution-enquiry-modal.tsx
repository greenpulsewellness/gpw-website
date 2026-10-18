"use client";

import { useEffect, useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Building2, Phone, User, MapPin } from "lucide-react";
import { contact } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppColorIcon } from "@/components/home/icons";
import { useSolutionEnquiry } from "./solution-context";

interface SolutionEnquiryModalProps {
  solutionTitle: string;
}

export function SolutionEnquiryModal({ solutionTitle }: SolutionEnquiryModalProps) {
  const { isModalOpen, modalSource, closeEnquiryModal } = useSolutionEnquiry();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    city: "",
    businessType: "Wellness/Longevity Centre",
    spaceArea: "500–1,000 sq.ft",
    timeline: "1–3 Months",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiryModal();
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isModalOpen, closeEnquiryModal]);

  if (!isModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          business: formData.businessName
            ? `${formData.businessName} (${formData.businessType})`
            : formData.businessType,
          city: formData.city,
          phone: formData.phone,
          interest: activeSubject,
          message: [
            formData.spaceArea ? `Target space: ${formData.spaceArea}` : null,
            formData.timeline ? `Timeline: ${formData.timeline}` : null,
            formData.notes ? `Notes: ${formData.notes}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          source: typeof window !== "undefined" ? window.location.pathname : `/solutions`,
        }),
      });
    } catch (err) {
      console.error("[solution-enquiry] delivery error", err);
    }
  };

  const activeSubject = modalSource || `Space Planning Consultation: ${solutionTitle}`;
  const whatsappMessage = `Hi GreenPulse Wellness, I am inquiring about "${activeSubject}" for ${solutionTitle}. My organization is ${formData.businessName || "Facility Operator"} in ${formData.city || "India"} with target area ${formData.spaceArea}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/15 bg-[#0d0d0d] p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeEnquiryModal}
          className="absolute right-5 top-5 rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-white/15 text-white mb-4">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Received</h3>
            <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Thank you. Our space planning and commercial equipment engineers will review your facility requirements and get in touch within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white hover:brightness-110 transition-all shadow-md"
              >
                <WhatsAppColorIcon className="size-4" />
                <span>Message Director on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  closeEnquiryModal();
                }}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-mono text-neutral-300 hover:bg-white/10"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-mono text-white mb-2">
                <Sparkles className="size-3" />
                <span>Commercial Space Planning</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {solutionTitle} Consultation
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                {activeSubject} · Turnkey layout design & commercial pricing.
              </p>
            </div>

            {/* Direct WhatsApp Fast Track */}
            <div className="mb-6 p-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-white">Prefer immediate technical discussion?</p>
                <p className="text-[0.6875rem] text-neutral-300">Connect directly with our engineering team.</p>
              </div>
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:brightness-110 transition-all shadow-sm shrink-0 w-full sm:w-auto justify-center"
              >
                <WhatsAppColorIcon className="size-4" />
                <span>WhatsApp Instant</span>
              </a>
            </div>

            {/* Standard Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Facility / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Nirvana Longevity Club"
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Direct Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Mumbai / Bangalore"
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Facility Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white focus:border-white outline-none transition-all"
                  >
                    <option value="Wellness/Longevity Centre">Wellness / Longevity Centre</option>
                    <option value="Hotel Spa">Hotel / Resort Spa</option>
                    <option value="Gym/Sports Centre">Premium Gym / Athletic Club</option>
                    <option value="Physio/Chiro Clinic">Physiotherapy / Chiropractic Clinic</option>
                    <option value="Senior Living">Senior Living / Retirement Village</option>
                    <option value="Hospital/Clinic">Hospital / Clinical Ward</option>
                    <option value="Private Residence">Private Sanctuary / Estate</option>
                  </select>
                </div>
                <div>
                  <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Approx. Floor Area
                  </label>
                  <select
                    value={formData.spaceArea}
                    onChange={(e) => setFormData({ ...formData, spaceArea: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2.5 text-sm text-white focus:border-white outline-none transition-all"
                  >
                    <option value="Under 350 sq.ft">Under 350 sq.ft (Single Room)</option>
                    <option value="350–700 sq.ft">350–700 sq.ft (Studio Suite)</option>
                    <option value="700–1,500 sq.ft">700–1,500 sq.ft (Multi-Zone)</option>
                    <option value="1,500+ sq.ft">1,500+ sq.ft (Flagship Pavilion)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[0.6875rem] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Specific Modalities or Project Details (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your room dimensions, target launch date, or preferred machines..."
                  className="w-full rounded-xl border border-white/15 bg-black px-3.5 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-white outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-white text-neutral-950 font-bold hover:bg-neutral-200 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="size-4" />
                  <span>Submit Consultation Request</span>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[0.6875rem] text-neutral-400 font-mono pt-1">
                <ShieldCheck className="size-3.5 text-white" />
                <span>NDA & Commercial Confidentiality Guaranteed</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
