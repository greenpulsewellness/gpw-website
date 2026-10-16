import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { Nav } from "@/components/home/nav";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { AlertCircle, Clock, ShieldAlert, PhoneCall, Mail, CheckCircle2, UserCheck, Layers } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Complaints & Grievance Redressal Policy | ${brand.name}`,
  description:
    "Official Grievance Redressal & Complaint Handling Policy for GreenPulse Wellness. Escalation tiers, technical breakdown reporting, SLAs, and Grievance Officer contact details.",
  openGraph: {
    title: `Complaints & Grievance Redressal — ${brand.name}`,
    description: "Multi-tier complaint escalation matrix and grievance resolution protocols for GreenPulse Wellness clients.",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  { id: "purpose-commitment", title: "Policy Purpose & Service Commitment" },
  { id: "complaint-types", title: "Eligible Complaint Categories" },
  { id: "lodging-procedure", title: "How to Lodge a Formal Complaint" },
  { id: "escalation-matrix", title: "Three-Tier Escalation Matrix" },
  { id: "slas-timelines", title: "Resolution Timelines & SLAs" },
  { id: "grievance-officer", title: "Designated Grievance Redressal Officer" },
  { id: "consumer-rights", title: "Statutory Consumer Protection Compliance" },
];

export default function ComplaintsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPageLayout
          title="Complaints & Grievance Redressal Policy"
          subtitle="A transparent, accountable multi-tier framework for logging technical breakdowns, commercial discrepancies, warranty claims, and service escalations."
          effectiveDate="January 1, 2026"
          lastUpdated="March 2026"
          version="2026.1 (Statutory Compliance)"
          sections={SECTIONS}
        >
          {/* Section 1 */}
          <section id="purpose-commitment" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              1. Policy Purpose & Service Commitment
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              At <strong>{brand.name}</strong>, our commercial wellness equipment powers luxury spas, elite athletic clubs, rehabilitation clinics, and healthcare facilities where downtime directly affects client trust and operational revenue.
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              This Grievance Redressal Policy establishes a structured, impartial, and time-bound mechanism to address and resolve any dissatisfaction, equipment anomaly, service delay, or contractual disagreement. We are committed to resolving customer grievances promptly, courteously, and in full compliance with the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020.
            </p>
          </section>

          {/* Section 2 */}
          <section id="complaint-types" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              2. Eligible Complaint Categories
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Clients and facility operators may raise issues across the following operational domains:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">1. Hardware & Mechanical Malfunctions</span>
                <p className="text-pine/80">Component failure, compressor pressure irregularity, heater coil non-responsiveness, digital display errors, or sensor miscalibration.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">2. Delivery & Transit Damages</span>
                <p className="text-pine/80">Transit crate rupture, surface scuffing during uncrating, missing installation hardware, or delayed logistics delivery.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">3. Installation & Commissioning</span>
                <p className="text-pine/80">Delays in technician deployment, site compatibility disputes, incomplete staff orientation, or cabling non-compliance.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">4. Warranty & Preventative Maintenance</span>
                <p className="text-pine/80">Delayed scheduled quarterly maintenance checkups under active AMC/CMC contracts or disputed warranty replacement requests.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">5. Billing, Deposits & Invoicing</span>
                <p className="text-pine/80">Discrepancies in GST tax invoices, delayed return of rental security deposits, or milestone payment reconciliation.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-pine font-semibold">6. Data Privacy & Communications</span>
                <p className="text-pine/80">Unsolicited marketing communications, consent revocation requests, or inquiries regarding personal/commercial data handling.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="lodging-procedure" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              3. How to Lodge a Formal Complaint
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              To expedite rapid diagnostics and technician dispatch, please ensure your complaint includes the following verification parameters:
            </p>
            <div className="rounded-xl border border-wood/30 bg-oat/50 p-5 space-y-2 text-xs sm:text-sm text-pine/85">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Customer / Facility Details:</strong> Registered business name, contact person, phone number, and physical installation location.</li>
                <li><strong>Equipment Identifiers:</strong> Product model name, invoice/PO reference number, and machine serial number (found on the chassis specification plate).</li>
                <li><strong>Fault Description:</strong> Clear summary of the anomaly, error codes visible on the console, and ambient room conditions.</li>
                <li><strong>Diagnostic Media:</strong> Short video clip (10–30 seconds) or high-resolution photos illustrating the issue or physical damage.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Three-Tier Matrix */}
          <section id="escalation-matrix" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              4. Three-Tier Escalation Matrix
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We employ a progressive three-tier escalation structure to ensure issues are resolved by the appropriate technical or executive authority:
            </p>

            <div className="space-y-4">
              {/* Level 1 */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-wood font-semibold">
                    Tier 1 — Frontline Field Support & Helpdesk
                  </span>
                  <span className="rounded-full bg-oat px-2.5 py-0.5 text-[11px] font-mono font-medium text-pine">
                    SLA: 4 to 8 Hours
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-pine/85">
                  <strong>Channel:</strong> WhatsApp Business Desk or Email (<code className="text-pine font-mono">{contact.email}</code>).
                </p>
                <p className="text-xs sm:text-sm text-pine/75 leading-relaxed">
                  First point of contact for daily operational guidance, basic error code resets, and minor parts requests. Tickets are generated immediately and assigned to a certified support coordinator.
                </p>
              </div>

              {/* Level 2 */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-wood font-semibold">
                    Tier 2 — Operations & Technical Service Head
                  </span>
                  <span className="rounded-full bg-oat px-2.5 py-0.5 text-[11px] font-mono font-medium text-pine">
                    SLA: 24 to 48 Hours
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-pine/85">
                  <strong>Trigger:</strong> If Tier 1 cannot resolve the issue within 8 business hours, or if on-site engineer intervention/part replacement is required.
                </p>
                <p className="text-xs sm:text-sm text-pine/75 leading-relaxed">
                  The Regional Service Manager oversees diagnostics, schedules physical engineer site visits, and initiates warranty component dispatches from central reserves.
                </p>
              </div>

              {/* Level 3 */}
              <div className="rounded-xl border border-wood/35 bg-oat/70 p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-pine font-bold flex items-center gap-1.5">
                    <ShieldAlert className="size-4 text-pine" />
                    Tier 3 — Designated Grievance Redressal Officer
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-mono font-semibold text-neutral-950">
                    SLA: 48h Ack / 14d Resolution
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-pine/85">
                  <strong>Trigger:</strong> If an issue remains unresolved beyond 48 hours at Tier 2, or in cases of serious contractual, commercial, or safety disputes.
                </p>
                <p className="text-xs sm:text-sm text-pine/80 leading-relaxed">
                  Direct executive review by our appointed statutory Grievance Officer, with direct authority to authorize hardware replacements, commercial refunds, or executive mediation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="slas-timelines" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              5. Resolution Timelines & Statutory Commitments
            </h2>
            <div className="grid gap-3 sm:grid-cols-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-wood/20 bg-canvas p-4 text-center space-y-1">
                <div className="font-mono text-2xl font-bold text-pine">24–48 Hours</div>
                <div className="text-xs font-semibold text-pine">Formal Acknowledgment</div>
                <p className="text-[11px] text-wood">Receipt confirmation with unique ticket number & assigned engineer.</p>
              </div>
              <div className="rounded-xl border border-wood/20 bg-canvas p-4 text-center space-y-1">
                <div className="font-mono text-2xl font-bold text-pine">3 Business Days</div>
                <div className="text-xs font-semibold text-pine">Diagnostic Report</div>
                <p className="text-[11px] text-wood">Technical inspection report, cause analysis, and required action plan.</p>
              </div>
              <div className="rounded-xl border border-wood/20 bg-canvas p-4 text-center space-y-1">
                <div className="font-mono text-2xl font-bold text-pine">14 Business Days</div>
                <div className="text-xs font-semibold text-pine">Definitive Redressal</div>
                <p className="text-[11px] text-wood">Complete resolution, repair, replacement, or agreed financial settlement.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Grievance Officer Details */}
          <section id="grievance-officer" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              6. Designated Grievance Redressal Officer
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              In accordance with the Consumer Protection (E-Commerce) Rules, 2020 and Information Technology Act rules, the details of the designated Grievance Officer are set forth below:
            </p>
            <div className="rounded-2xl border border-wood/30 bg-canvas p-6 space-y-3 text-xs sm:text-sm text-pine shadow-xs">
              <div className="flex items-center gap-2">
                <UserCheck className="size-4.5 text-pine" />
                <span className="font-bold text-base text-pine">Office of the Grievance Redressal Officer</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 pt-2 border-t border-wood/15">
                <div>
                  <span className="text-wood block text-[11px] uppercase tracking-wider font-mono">Designation:</span>
                  <span className="font-semibold text-pine">Head of Regulatory Compliance & Grievance</span>
                </div>
                <div>
                  <span className="text-wood block text-[11px] uppercase tracking-wider font-mono">Company:</span>
                  <span className="font-semibold text-pine">{brand.name}</span>
                </div>
                <div>
                  <span className="text-wood block text-[11px] uppercase tracking-wider font-mono">Official Grievance Email:</span>
                  <a href="mailto:grievance@greenpulsewellness.com" className="font-semibold text-pine underline">
                    grievance@greenpulsewellness.com
                  </a>
                  <span className="block text-[11px] text-wood">(cc: {contact.email})</span>
                </div>
                <div>
                  <span className="text-wood block text-[11px] uppercase tracking-wider font-mono">Direct Grievance Helpline:</span>
                  <a href={`tel:${contact.phoneRaw}`} className="font-semibold text-pine">
                    {contact.phone}
                  </a>
                  <span className="block text-[11px] text-wood">(Monday – Saturday, 9:30 AM – 6:30 PM IST)</span>
                </div>
              </div>
              <div className="pt-2 border-t border-wood/15 text-xs text-wood">
                <span className="font-mono text-[11px] uppercase tracking-wider block text-pine font-medium mb-0.5">Mailing Address:</span>
                <p>Legal & Compliance Division, {brand.name}, {contact.address}</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="consumer-rights" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              7. Statutory Consumer Protection Compliance
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Nothing in this policy shall prejudice or limit the statutory rights available to commercial buyers or individual consumers under the Consumer Protection Act, 2019. If you remain dissatisfied with the final determination rendered by our Grievance Officer, you retain the legal right to approach the competent National Consumer Helpline (NCH), consumer dispute redressal commissions, or initiate arbitration in accordance with our Terms & Conditions.
            </p>
          </section>
        </LegalPageLayout>
      </main>
    </>
  );
}
