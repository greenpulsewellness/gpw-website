import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { ShieldCheck, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Policy`,
  description:
    "Learn how GreenPulse Wellness collects, protects, processes, and safeguards personal and commercial data across our website, consultation desks, and after-sales support.",
  openGraph: {
    title: `Privacy Policy — ${brand.name}`,
    description: "Official Privacy Policy for GreenPulse Wellness.",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  { id: "overview", title: "Introduction & Commitment" },
  { id: "data-collected", title: "Categories of Data We Collect" },
  { id: "how-collected", title: "Collection Methods (Forms, WhatsApp, Consultations)" },
  { id: "purpose-processing", title: "Purposes of Data Processing" },
  { id: "sharing-disclosure", title: "Third-Party Disclosure & Zero-Sale Stance" },
  { id: "security-measures", title: "Technical & Organizational Data Security" },
  { id: "retention-policy", title: "Data Retention & Archival Schedules" },
  { id: "user-rights", title: "Your Statutory Rights (Access, Correction, Erasure)" },
  { id: "cookies-reference", title: "Cookies & Telemetry Technologies" },
  { id: "contact-dpo", title: "Data Protection & Privacy Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <main>
        <LegalPageLayout
          title="Privacy Policy"
          subtitle="How GreenPulse Wellness collects, secures, uses, and respects personal, facility, and commercial data across our website and technical support channels."
          effectiveDate="January 1, 2026"
          lastUpdated="March 2026"
          version="2026.2 (DPDPA Aligned)"
          sections={SECTIONS}
        >
          {/* Section 1 */}
          <section id="overview" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              1. Introduction & Commitment to Privacy
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              At <strong>{brand.name}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;Company&quot;), we believe privacy and data transparency are foundational to trusted commercial partnerships. Whether you are an individual exploring recovery equipment, a luxury wellness director outfitting a multi-station spa, or a healthcare institution inquiring about rehabilitation hardware, we treat your information with rigorous confidentiality.
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              This Privacy Policy explains the nature of personal and commercial data we gather through our website (<code className="rounded bg-oat px-1.5 py-0.5 text-xs text-pine font-mono">greenpulsewellness.com</code>), digital inquiry forms, WhatsApp business integrations, and after-sales service interactions, and how that information is safeguarded in accordance with applicable data protection legislation.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collected" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              2. Categories of Data We Collect
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We collect information that is strictly relevant and necessary to provide accurate equipment recommendations, prepare commercial proposals, and fulfill service agreements:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              <div className="rounded-xl border border-wood/25 bg-oat/40 p-4 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold flex items-center gap-1.5">
                  <UserCheck className="size-3.5 text-pine" /> Contact & Identity
                </span>
                <p className="text-pine/80">Full name, business email address, telephone/WhatsApp mobile number, job title, and company designation.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-oat/40 p-4 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold flex items-center gap-1.5">
                  <Database className="size-3.5 text-pine" /> Facility & Commercial Profile
                </span>
                <p className="text-pine/80">Facility name, business category (hotel spa, gym, clinic, hospital, private residence), postal location, installation dimensions, and timeline.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-oat/40 p-4 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold flex items-center gap-1.5">
                  <Eye className="size-3.5 text-pine" /> Technical Enquiries & Preferences
                </span>
                <p className="text-pine/80">Product interest (e.g., infrared saunas, cold plunges, light devices, compression), suite tier selections, and rental specifications.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-oat/40 p-4 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold flex items-center gap-1.5">
                  <Lock className="size-3.5 text-pine" /> Automated Device & Network Logs
                </span>
                <p className="text-pine/80">IP address, approximate geographic location, browser type, operating system, and anonymous page interaction telemetry.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="how-collected" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              3. Collection Methods
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-pine/80 leading-relaxed">
              <li><strong>Direct Interactions:</strong> When you complete our website enquiry form, request a product catalog specification, or schedule an equipment demonstration.</li>
              <li><strong>WhatsApp Business Desk:</strong> When you initiate a conversation with our commercial advisory team via our integrated WhatsApp links.</li>
              <li><strong>Commercial Contract Execution:</strong> When your organization places an order or enters into a rental or service agreement.</li>
              <li><strong>Service & Technician Reports:</strong> Site readiness assessments and commissioning logs completed during field visits.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="purpose-processing" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              4. Purposes of Data Processing
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We process collected data solely for legitimate business, transactional, and legal purposes:
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-pine/80">
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-pine mt-0.5" />
                <p><strong>Quotation & Solution Engineering:</strong> Formulating customized hardware layouts, power load calculations, and proforma pricing.</p>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-pine mt-0.5" />
                <p><strong>Delivery & Installation:</strong> Coordinating deliveries, on-site technician scheduling, and handover testing.</p>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-pine mt-0.5" />
                <p><strong>Warranty & After-Sales Servicing:</strong> Logging serial numbers, preventative maintenance schedules, and replacement parts dispatch.</p>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="size-4 shrink-0 text-pine mt-0.5" />
                <p><strong>Compliance & Statutory Accounting:</strong> Fulfilling tax obligations (GST invoicing), audit requirements, and consumer redressal rules.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sharing-disclosure" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              5. Third-Party Disclosures & Zero-Sale Stance
            </h2>
            <div className="rounded-xl border border-wood/30 bg-canvas p-4 text-xs sm:text-sm text-pine/85">
              <strong>Our Zero-Sale Guarantee:</strong> {brand.name} does <strong>not sell, rent, monetize, or trade</strong> your personal or commercial contact information to third-party advertisers, data aggregators, or marketing brokers under any circumstances.
            </div>
            <p className="text-sm leading-relaxed text-pine/80">
              Data is shared strictly on a confidential need-to-know basis with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-pine/80">
              <li><strong>Delivery Partners:</strong> Strictly to complete site delivery and track shipments.</li>
              <li><strong>Authorized Field Technicians & Engineers:</strong> To coordinate site inspections, electrical testing, and equipment handover.</li>
              <li><strong>Cloud Hosting & Secure Infrastructure Providers:</strong> ISO/IEC 27001 certified cloud environments hosting our databases.</li>
              <li><strong>Law Enforcement & Regulatory Authorities:</strong> Only when strictly mandated by valid legal subpoenas, court orders, or statutory regulations.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="security-measures" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              6. Technical & Organizational Data Security
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We employ robust administrative, technical, and physical safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-pine/80">
              <li>End-to-end transport layer security (TLS 1.3 / HTTPS encryption) for all web traffic.</li>
              <li>Strict role-based access control (RBAC), ensuring only authorized commercial personnel access lead information.</li>
              <li>Encrypted cloud backups and routine vulnerability audits.</li>
              <li>Staff training on data confidentiality and client privacy management.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="retention-policy" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              7. Data Retention & Archival Schedules
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We retain personal data only for as long as necessary to fulfill the commercial purposes outlined herein. Inactive inquiries that do not culminate in commercial contracts are purged or anonymized within twenty-four (24) months. Transactional records, tax invoices, and warranty documentation are preserved for eight (8) years to comply with statutory accounting and commercial warranty obligations.
            </p>
          </section>

          {/* Section 8 */}
          <section id="user-rights" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              8. Your Statutory Rights
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Depending on your jurisdiction and under applicable data protection frameworks, you hold the right to:
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-pine/80">
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Right to Confirmation & Access:</strong> Request a copy of personal information processed by us.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Right to Correction:</strong> Rectify inaccurate, obsolete, or incomplete contact details.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Right to Erasure:</strong> Request the deletion of non-essential records where legal retention mandates have expired.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Right to Withdraw Consent:</strong> Opt out of non-essential commercial announcements at any time.
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="cookies-reference" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              9. Cookies & Telemetry Technologies
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Our website uses cookies and similar storage mechanisms to ensure seamless navigation, preserve layout performance, and evaluate anonymous traffic trends. For comprehensive information on specific cookies deployed and instructions on how to manage your browser settings, please refer to our dedicated{" "}
              <Link href="/cookies" className="font-semibold text-pine underline hover:text-wood transition-colors">
                Cookie Policy
              </Link>.
            </p>
          </section>

          {/* Section 10 */}
          <section id="contact-dpo" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              10. Data Protection & Privacy Contact
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              If you have any questions regarding this Privacy Policy, wish to exercise your data subject rights, or have a grievance concerning data handling, please contact our designated privacy desk:
            </p>
            <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2 text-xs sm:text-sm text-pine/85">
              <p><strong>Attention:</strong> Privacy & Compliance Lead</p>
              <p><strong>Entity:</strong> {brand.name}</p>
              <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-pine font-medium underline">{contact.email}</a></p>
              <p><strong>Direct Helpline:</strong> <a href={`tel:${contact.phoneRaw}`} className="text-pine font-medium">{contact.phone}</a></p>
              <p className="text-wood text-xs pt-1">Requests are typically acknowledged within 48 hours and addressed within 14 business days.</p>
            </div>
          </section>
        </LegalPageLayout>
      </main>
    </>
  );
}
