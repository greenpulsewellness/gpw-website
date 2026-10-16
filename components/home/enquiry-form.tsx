"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  contact,
  enquiry,
  packages,
  type BusinessType,
  type PackageId,
  type ProductCategory,
} from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { useProducts } from "@/components/products-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./icons";
import {
  ENQUIRY_FIRST_FIELD_ID,
  ENQUIRY_SECTION_ID,
  useEnquiry,
  type InterestId,
} from "./enquiry-context";
import { Reveal } from "./reveal";

type Field = "name" | "business" | "city" | "phone";
type Errors = Partial<Record<Field, string>>;

const productCategories: ProductCategory[] = [
  "Wellness & Recovery Technology",
  "Rehabilitation & Physical Therapy",
  "Mobility & Assistive Technology",
];

function validate(v: { name: string; business: string; city: string; phone: string }): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!v.business) errors.business = "Please choose a business type.";
  if (v.city.trim().length < 2) errors.city = "Please enter your city.";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!/^\+?[\d\s\-()]+$/.test(v.phone.trim()) || digits.length < 8 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

export function EnquiryForm() {
  const { interests, setInterests, packageId, setPackageId, business, setBusiness } = useEnquiry();
  const { products } = useProducts();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const uid = useId();
  const ids = {
    name: ENQUIRY_FIRST_FIELD_ID,
    business: `${uid}-business`,
    interest: `${uid}-interest`,
    city: `${uid}-city`,
    phone: `${uid}-phone`,
  };

  const values = { name, business, city, phone };

  const currentSelection = interests.includes("package")
    ? (packageId ? `package:${packageId}` : "package:starter")
    : (interests[0] || "");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstInvalid = (Object.keys(ids) as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus();
      return;
    }

    const interested = interests
      .map((id) => {
        if (id !== "package") return products.find((p) => p.id === id)?.name ?? id;
        const pkg = packages.find((p) => p.id === packageId);
        return pkg ? `${pkg.name} Suite package` : "A recovery suite package";
      })
      .join(", ");

    const message = [
      "Hi GreenPulse Wellness, I'd like to enquire.",
      `Name: ${name.trim()}`,
      `Business: ${business}`,
      `Interested in: ${interested || "Not sure yet"}`,
      `City: ${city.trim()}`,
      `Phone: ${phone.trim()}`,
    ].join("\n");

    const url = whatsappUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  };

  // Re-validate a field live once it has shown an error.
  const touch = (field: Field, patch: Partial<typeof values>) => {
    if (!errors[field]) return;
    setErrors((prev) => ({ ...prev, [field]: validate({ ...values, ...patch })[field] }));
  };

  return (
    <section id={ENQUIRY_SECTION_ID} className="bg-canvas py-20 md:py-28 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-6xl">{enquiry.title}</h2>
          <p className="mt-4 max-w-md text-pine/70 md:text-lg">{enquiry.line}</p>

          <dl className="mt-10 hidden border-t border-white/10 lg:block">
            <div className="flex justify-between gap-6 border-b border-white/10 py-4">
              <dt className="label-mono text-neutral-400">WhatsApp</dt>
              <dd>
                <a className="hover:text-white/70 transition-colors text-white" href={whatsappUrl(contact.floatingMessage)} target="_blank" rel="noopener noreferrer">
                  {contact.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-white/10 py-4">
              <dt className="label-mono text-neutral-400">Phone</dt>
              <dd>
                <a className="hover:text-white/70 transition-colors text-white" href={`tel:${contact.phoneRaw}`}>
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-white/10 py-4">
              <dt className="label-mono text-neutral-400">Email</dt>
              <dd>
                <a className="hover:text-white/70 transition-colors text-white" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <form
            noValidate
            onSubmit={onSubmit}
            aria-label="Enquiry"
            className="rounded-panel border border-white/10 bg-[#0d0d0d]/95 p-5 md:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                id={ids.name}
                label="Name"
                autoComplete="name"
                value={name}
                error={errors.name}
                onChange={(v) => {
                  setName(v);
                  touch("name", { name: v });
                }}
              />

              <FieldShell id={ids.business} label="Business type" error={errors.business}>
                <div className="relative">
                  <select
                    id={ids.business}
                    required
                    value={business}
                    aria-invalid={!!errors.business}
                    aria-describedby={errors.business ? `${ids.business}-error` : undefined}
                    onChange={(e) => {
                      const v = e.target.value as BusinessType | "";
                      setBusiness(v);
                      touch("business", { business: v });
                    }}
                    className={cn(inputClass(!!errors.business), "appearance-none pr-10 bg-black text-white", !business && "text-neutral-500")}
                  >
                    <option value="" disabled className="bg-black text-neutral-400">
                      Select…
                    </option>
                    {enquiry.businessTypes.map((b) => (
                      <option key={b} value={b} className="bg-[#0d0d0d] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                  <svg aria-hidden="true" viewBox="0 0 12 12" className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-wood">
                    <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </FieldShell>
            </div>

            <div className="mt-5">
              <FieldShell id={ids.interest} label="Equipment interest" required={false}>
                <div className="relative">
                  <select
                    id={ids.interest}
                    value={currentSelection}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (!val) {
                        setInterests([]);
                        setPackageId(null);
                      } else if (val.startsWith("package:")) {
                        const pkgId = val.replace("package:", "") as PackageId;
                        setInterests(["package"]);
                        setPackageId(pkgId);
                      } else {
                        setInterests([val as InterestId]);
                        setPackageId(null);
                      }
                    }}
                    className={cn(
                      inputClass(false),
                      "appearance-none pr-10 bg-black text-white",
                      !currentSelection && "text-neutral-500",
                    )}
                  >
                    <option value="" className="bg-[#0d0d0d] text-neutral-400">Select equipment or suite package (optional)…</option>
                    <optgroup label="Recovery Suite Packages" className="bg-[#141414] text-white font-semibold">
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={`package:${pkg.id}`} className="bg-[#0d0d0d] text-white font-normal">
                          {pkg.name} Suite Package
                        </option>
                      ))}
                    </optgroup>
                    {productCategories.map((cat) => (
                      <optgroup key={cat} label={cat} className="bg-[#141414] text-white font-semibold">
                        {products
                          .filter((p) => p.category === cat)
                          .map((p) => (
                            <option key={p.id} value={p.id} className="bg-[#0d0d0d] text-white font-normal">
                              {p.name}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-wood"
                  >
                    <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </FieldShell>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <TextField
                id={ids.city}
                label="City"
                autoComplete="address-level2"
                value={city}
                error={errors.city}
                onChange={(v) => {
                  setCity(v);
                  touch("city", { city: v });
                }}
              />
              <TextField
                id={ids.phone}
                label="Phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91"
                value={phone}
                error={errors.phone}
                onChange={(v) => {
                  setPhone(v);
                  touch("phone", { phone: v });
                }}
              />
            </div>

            <div id="enquiry-submit" className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-400">
                <span aria-hidden="true" className="text-white font-bold">*</span> Required. Opens WhatsApp with your message ready to send.
              </p>
              <Button type="submit" variant="dark" size="lg" className="w-full sm:w-auto">
                <WhatsAppIcon /> {enquiry.submit}
              </Button>
            </div>

            <p aria-live="polite" className="text-sm text-pine/75 empty:hidden">
              {sentUrl && (
                <span className="mt-4 flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
                  WhatsApp opened in a new tab.{" "}
                  <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                    Didn&apos;t open? <ArrowUpRight className="size-3.5" />
                  </a>
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ── field primitives ─────────────────────────────────────────────────── */

const inputClass = (invalid: boolean) =>
  cn(
    "h-12 w-full rounded-xl border bg-black px-4 text-base text-white placeholder:text-neutral-500 transition-colors focus:border-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    invalid ? "border-[#A4462F]" : "border-white/15 hover:border-white/30",
  );

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
      <label htmlFor={id} className="label-mono mb-2 block text-neutral-300">
        {label}{" "}
        {required ? (
          <span aria-hidden="true" className="text-white font-bold">
            *
          </span>
        ) : (
          <span className="normal-case tracking-normal text-neutral-500">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#A4462F]">
          {error}
        </p>
      )}
    </div>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
} & Omit<React.ComponentProps<"input">, "id" | "value" | "onChange">) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        required
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass(!!error)}
        {...rest}
      />
    </FieldShell>
  );
}
