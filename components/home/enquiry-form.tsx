"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Loader2, Mail, MapPin, Phone, User } from "lucide-react";
import { contact, enquiry, type BusinessType, type ProductCategory } from "@/data/home";
import { comboById, combos, comboSegments } from "@/data/combos";
import { validateEnquiry, type EnquiryErrors, type EnquiryField } from "@/lib/enquiry";
import { useProducts } from "@/components/products-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoopArt } from "@/components/ui/loop-art";
import { ENQUIRY_FIRST_FIELD_ID, ENQUIRY_SECTION_ID, useEnquiry, type InterestId } from "./enquiry-context";
import { Reveal } from "./reveal";

const productCategories: ProductCategory[] = [
  "Wellness & Recovery Technology",
  "Rehabilitation & Physical Therapy",
  "Mobility & Assistive Technology",
];

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const { interests, setInterests, packageId, setPackageId, business, setBusiness } = useEnquiry();
  const { products } = useProducts();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();
  const ids = {
    name: ENQUIRY_FIRST_FIELD_ID,
    phone: `${uid}-phone`,
    business: `${uid}-business`,
    city: `${uid}-city`,
    interest: `${uid}-interest`,
  };

  const values = { name, business, city, phone };
  const isComplete = Object.keys(validateEnquiry(values)).length === 0;

  const currentSelection = interests.includes("package")
    ? `package:${packageId ?? combos[0].id}`
    : interests[0] || "";

  const interestLabel = () =>
    interests
      .map((id) => {
        if (id !== "package") return products.find((p) => p.id === id)?.name ?? id;
        const combo = packageId ? comboById(packageId) : undefined;
        return combo ? `${combo.code} ${combo.name} combo (${combo.tier})` : "An equipment combo";
      })
      .join(", ");

  // Show a field's error once the visitor has typed in it and moved on
  const checkField = (field: EnquiryField, patch: Partial<typeof values> = {}) => {
    const v = { ...values, ...patch };
    if (!v[field]) return setErrors((prev) => ({ ...prev, [field]: undefined }));
    setErrors((prev) => ({ ...prev, [field]: validateEnquiry(v)[field] }));
  };
  const recheck = (field: EnquiryField, patch: Partial<typeof values>) => {
    if (errors[field]) checkField(field, patch);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validateEnquiry(values);
    setErrors(next);
    const firstInvalid = (Object.keys(ids) as (keyof typeof ids)[]).find((f) => next[f as EnquiryField]);
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          business,
          city,
          phone,
          interest: interestLabel(),
          source: window.location.pathname,
          company,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setName("");
    setCity("");
    setPhone("");
    setBusiness("");
    setInterests([]);
    setPackageId(null);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id={ENQUIRY_SECTION_ID} className="relative py-20 md:py-28 lg:py-32">
      <div className="shell relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label-mono inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-white/70">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" aria-hidden />
            {enquiry.eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            {enquiry.title}
          </h2>
          <p className="mt-4 max-w-md text-pine/65 md:text-lg">{enquiry.line}</p>

          {/* What happens next */}
          <ol className="mt-10 space-y-5">
            {enquiry.nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="label-mono grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-[11px] text-white/70">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-white">{step.title}</p>
                  <p className="mt-0.5 text-sm text-white/55">{step.line}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Direct contact */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <ContactTile href={`tel:${contact.phoneRaw}`} icon={<Phone />} label="Call us" value={contact.phone} />
            <ContactTile href={`mailto:${contact.email}`} icon={<Mail />} label="Email us" value={contact.email} />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)] sm:p-7 md:rounded-[32px] lg:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <LoopArt variant="wave-glow" frameClassName="-z-10" className="-bottom-[38%] -right-[36%] w-[520px] opacity-20 sm:w-[640px]" />

            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <Check className="size-7" strokeWidth={2.5} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                    {enquiry.success.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-white/60">{enquiry.success.line}</p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-8 text-sm text-white/55 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  aria-label="Enquiry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Honeypot: hidden from people, tempting to bots */}
                  <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label>
                      Company
                      <input tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <TextField
                      id={ids.name}
                      label="Full name"
                      icon={<User />}
                      autoComplete="name"
                      placeholder="Your full name"
                      value={name}
                      error={errors.name}
                      onBlur={() => checkField("name")}
                      onChange={(v) => {
                        setName(v);
                        recheck("name", { name: v });
                      }}
                    />
                    <TextField
                      id={ids.phone}
                      label="Phone number"
                      icon={<Phone />}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      error={errors.phone}
                      onBlur={() => checkField("phone")}
                      onChange={(v) => {
                        setPhone(v);
                        recheck("phone", { phone: v });
                      }}
                    />

                    <FieldShell id={ids.business} label="Business type" error={errors.business}>
                      <SelectBox
                        id={ids.business}
                        value={business}
                        invalid={!!errors.business}
                        onChange={(v) => {
                          setBusiness(v as BusinessType | "");
                          recheck("business", { business: v as BusinessType | "" });
                        }}
                      >
                        <option value="" disabled>
                          Select your business type
                        </option>
                        {enquiry.businessTypes.map((b) => (
                          <option key={b} value={b}>
                            {b.replace("/", " / ")}
                          </option>
                        ))}
                      </SelectBox>
                    </FieldShell>

                    <TextField
                      id={ids.city}
                      label="City"
                      icon={<MapPin />}
                      autoComplete="address-level2"
                      placeholder="e.g. Chennai"
                      value={city}
                      error={errors.city}
                      onBlur={() => checkField("city")}
                      onChange={(v) => {
                        setCity(v);
                        recheck("city", { city: v });
                      }}
                    />
                  </div>

                  <div className="mt-5">
                    <FieldShell id={ids.interest} label="Interested in" required={false}>
                      <SelectBox
                        id={ids.interest}
                        value={currentSelection}
                        onChange={(val) => {
                          if (!val) {
                            setInterests([]);
                            setPackageId(null);
                          } else if (val.startsWith("package:")) {
                            setInterests(["package"]);
                            setPackageId(val.replace("package:", ""));
                          } else {
                            setInterests([val as InterestId]);
                            setPackageId(null);
                          }
                        }}
                      >
                        <option value="">Not sure yet</option>
                        {comboSegments.map((seg) => (
                          <optgroup key={seg.id} label={`Combos · ${seg.label}`}>
                            {combos
                              .filter((c) => c.segment === seg.id)
                              .map((c) => (
                                <option key={c.id} value={`package:${c.id}`}>
                                  {c.name} ({c.tier})
                                </option>
                              ))}
                          </optgroup>
                        ))}
                        {productCategories.map((cat) => (
                          <optgroup key={cat} label={cat}>
                            {products
                              .filter((p) => p.category === cat)
                              .map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.name}
                                </option>
                              ))}
                          </optgroup>
                        ))}
                      </SelectBox>
                    </FieldShell>
                  </div>

                  <div
                    id="enquiry-submit"
                    className="mt-8 flex min-h-13 flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="text-xs text-white/45" aria-live="polite">
                      {status === "error" ? (
                        <span className="text-[#e0745a]">
                          We couldn&apos;t submit your enquiry. Please try again, or call us on {contact.phone}.
                        </span>
                      ) : isComplete ? (
                        "All set. Review your details and submit."
                      ) : (
                        <>
                          <span aria-hidden="true" className="text-white/70">
                            *
                          </span>{" "}
                          Complete the required fields to submit your enquiry.
                        </>
                      )}
                    </p>

                    <Button
                      type="submit"
                      variant="dark"
                      size="lg"
                      disabled={!isComplete || status === "submitting"}
                      aria-disabled={!isComplete}
                      className={cn(
                        "w-full transition-opacity duration-300 sm:w-auto",
                        isComplete
                          ? "shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
                          : "pointer-events-none opacity-40",
                      )}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="animate-spin" aria-hidden /> Submitting…
                        </>
                      ) : (
                        <>
                          {enquiry.submit} <ArrowRight aria-hidden />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── primitives ───────────────────────────────────────────────────────── */

const inputClass = (invalid: boolean) =>
  cn(
    "h-12 w-full rounded-xl border bg-white/[0.03] px-4 text-base text-white placeholder:text-white/30 transition-[border-color,box-shadow,background-color] focus:border-white/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)] focus:outline-none",
    invalid ? "border-[#A4462F]" : "border-white/10 hover:border-white/25",
  );

function ContactTile({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-white/80 [&_svg]:size-4" aria-hidden>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="label-mono block text-[10px] text-white/45">{label}</span>
        <span className="block truncate text-sm text-white">{value}</span>
      </span>
    </a>
  );
}

function FieldShell({
  id,
  label,
  required = true,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/85">
        {label}{" "}
        {required ? (
          <span aria-hidden="true" className="text-white/40">
            *
          </span>
        ) : (
          <span className="font-normal text-white/40">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#e0745a]">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectBox({
  id,
  value,
  invalid = false,
  onChange,
  children,
}: {
  id: string;
  value: string;
  invalid?: boolean;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        aria-invalid={invalid}
        aria-describedby={invalid ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          inputClass(invalid),
          "appearance-none pr-10 [color-scheme:dark] [&_optgroup]:bg-[#141414] [&_option]:bg-[#0d0d0d]",
          !value && "text-white/30",
        )}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-white/40"
      >
        <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  icon,
  onChange,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  icon?: React.ReactNode;
  onChange: (v: string) => void;
} & Omit<React.ComponentProps<"input">, "id" | "value" | "onChange">) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <div className="relative">
        {icon && (
          <span aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35 [&_svg]:size-4">
            {icon}
          </span>
        )}
        <input
          id={id}
          required
          value={value}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={cn(inputClass(!!error), icon && "pl-11")}
          {...rest}
        />
      </div>
    </FieldShell>
  );
}
