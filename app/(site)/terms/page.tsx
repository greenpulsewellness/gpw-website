import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { Nav } from "@/components/home/nav";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { AlertCircle, CheckCircle, ShieldAlert, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms & Conditions of Service | ${brand.name}`,
  description:
    "Review the terms and conditions governing commercial equipment sales, clinical rentals, white-glove installation, warranty coverage, and user guidelines for GreenPulse Wellness.",
  openGraph: {
    title: `Terms & Conditions — ${brand.name}`,
    description: "Official terms and conditions governing GreenPulse Wellness hardware, rentals, and services.",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  { id: "intro", title: "Acceptance & Scope of Agreement" },
  { id: "wellness-disclaimer", title: "Wellness & Non-Medical Disclaimer" },
  { id: "commercial-orders", title: "Commercial Quotations & Payment Terms" },
  { id: "site-readiness", title: "Site Readiness & White-Glove Installation" },
  { id: "rentals", title: "Equipment Rental Terms (Clinical & Homecare)" },
  { id: "warranties-slas", title: "Warranty Coverage & Preventive Maintenance" },
  { id: "cancellations-returns", title: "Inspection Window & Return Protocols" },
  { id: "operator-obligations", title: "Facility Operator & End-User Safety" },
  { id: "intellectual-property", title: "Intellectual Property & Content" },
  { id: "limitation-liability", title: "Limitation of Liability & Indemnity" },
  { id: "governing-law", title: "Governing Law & Dispute Resolution" },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPageLayout
          title="Terms & Conditions of Service"
          subtitle="Governing the procurement, lease, delivery, installation, warranty, and safe commercial operation of GreenPulse Wellness hardware and digital services."
          effectiveDate="January 1, 2026"
          lastUpdated="March 2026"
          version="2026.1 (Commercial Standard)"
          sections={SECTIONS}
        >
          {/* Section 1 */}
          <section id="intro" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              1. Acceptance & Scope of Agreement
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              These Terms & Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (whether individually as a client, or as an authorized representative of a commercial wellness centre, luxury hotel spa, athletic club, chiropractic or physiotherapy clinic, hospital, or senior living residence) and <strong>{brand.name}</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              By accessing our website, submitting an equipment enquiry, requesting a custom quote, executing a procurement purchase order, entering into an equipment rental agreement, or accepting delivery of hardware, you acknowledge that you have read, understood, and agree to be bound by all terms, schedules, and referenced policies herein.
            </p>
          </section>

          {/* Section 2: CRITICAL WELLNESS DISCLAIMER */}
          <section id="wellness-disclaimer" className="scroll-mt-28 space-y-4">
            <div className="rounded-2xl border border-wood/35 bg-oat/70 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 shrink-0 text-pine mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold tracking-wide uppercase font-mono text-pine">
                    Mandatory Health & Wellness Disclosure
                  </h3>
                  <p className="text-xs sm:text-sm text-pine/85 leading-relaxed">
                    <strong>{brand.name} distributes and integrates purpose-led wellness and recovery technology.</strong> Unless expressly certified and designated as an authorized clinical hospital device under local statutory health laws, all equipment supplied—including full-spectrum infrared saunas, mild hyperbaric oxygen chambers (mHBOT), whole-body cryotherapy cabins, photobiomodulation beds, pneumatic compression systems, and robotic massage hardware—is engineered for general wellbeing, relaxation, athletic recovery, physical comfort, and aesthetic rejuvenation.
                  </p>
                  <p className="text-xs sm:text-sm text-pine/85 leading-relaxed">
                    Products are <strong>not intended to diagnose, treat, cure, or prevent any medical condition or disease</strong>. Hardware should never be utilized as a substitute for licensed medical advice, diagnosis, or clinical prescription.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="commercial-orders" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              2. Commercial Quotations, Orders & Payment Terms
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              All commercial quotes issued by {brand.name} are valid for thirty (30) calendar days from the date of issuance, unless explicitly stated otherwise in writing. Pricing is denominated in Indian Rupees (INR) or applicable international currencies specified in the proforma invoice, exclusive of statutory taxes (such as GST), freight, customs duties, and unloading charges unless itemized.
            </p>
            <div className="space-y-2 text-sm text-pine/80">
              <p className="font-semibold text-pine">Standard Commercial Milestone Schedule:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Advance Booking Deposit (50%):</strong> Due upon Purchase Order (PO) execution to secure manufacturing allocation, import permits, and freight slots.</li>
                <li><strong>Pre-Dispatch Balance (40%):</strong> Payable upon notification of shipment readiness and quality inspection at our central warehouse facility.</li>
                <li><strong>Handover / Installation Balance (10%):</strong> Due upon successful on-site commissioning, electrical testing, and operator orientation.</li>
              </ul>
            </div>
            <p className="text-xs sm:text-sm text-pine/75 leading-relaxed">
              Delay in milestone payments may result in rescheduling of dispatch schedules, demurrage, or storage fees assessed at standard warehousing rates.
            </p>
          </section>

          {/* Section 4 */}
          <section id="site-readiness" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              3. Site Readiness & White-Glove Installation
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              {brand.name} provides end-to-end commissioning through certified field engineers. The client or facility owner is strictly responsible for ensuring that the installation premises satisfy pre-installation architectural and technical specifications prior to delivery:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-wood font-medium">Electrical Infrastructure</span>
                <p className="text-pine/80">Dedicated circuits, designated phase balance (single-phase or 3-phase 415V), surge suppression, and earth grounding under 2 Ohms.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-wood font-medium">Space & Structural Load</span>
                <p className="text-pine/80">Certified floor load capacities (especially for heavy cold plunge baths, saunas, and chambers), level surfaces, and door clearance corridors.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-wood font-medium">HVAC & Environmental Ambient</span>
                <p className="text-pine/80">Adequate ventilation, ambient temperature control (chambers and cryo systems require air-conditioned suites &lt; 24°C), and humidity management.</p>
              </div>
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-wood font-medium">Plumbing & Drainage</span>
                <p className="text-pine/80">Dedicated inlet and rapid drain lines for hydrotherapy hardware, cold plunge baths, and contrast suites.</p>
              </div>
            </div>
            <p className="text-xs text-pine/75">
              If an installation visit is aborted due to site unreadiness after explicit confirmation, re-mobilization charges for technical personnel may apply.
            </p>
          </section>

          {/* Section 5 */}
          <section id="rentals" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              4. Equipment Rental Terms (Hospitals, Clinics & Homecare)
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              For designated rental equipment (e.g. pneumatic compression sleeves, mobility assists, and portable recovery hardware):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-pine/80">
              <li><strong>Rental Term:</strong> Monthly or bespoke quarterly terms as defined in the Equipment Lease Agreement.</li>
              <li><strong>Security Deposit:</strong> A refundable security deposit is retained until hardware return and inspection.</li>
              <li><strong>Maintenance & Care:</strong> Routine preventive servicing is provided by {brand.name}. The lessee assumes liability for damages arising from negligence, improper voltage exposure, physical impact, or unauthorized disassembly.</li>
              <li><strong>Return Inspection:</strong> Hardware must be returned in sanitary, functional condition. Replacement costs for missing or irreparably damaged accessories (hoses, power bricks, harnesses) will be deducted from the security deposit.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="warranties-slas" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              5. Warranty Coverage & Preventive Maintenance
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              All new capital equipment carries a comprehensive manufacturer warranty against design and fabrication defects, typically spanning twelve (12) to twenty-four (24) months from handover date.
            </p>
            <div className="rounded-xl border border-wood/25 bg-oat/40 p-4 space-y-2 text-xs sm:text-sm text-pine/85">
              <p><strong>Warranty Inclusions:</strong> Internal electronic circuitry, compressors, heating elements, control consoles, pumps, and motors operating under rated electrical specifications.</p>
              <p><strong>Warranty Exclusions:</strong> Consumable wear items (leather upholstery scratches, cosmetic exterior blemishes, rubber gaskets exposed to harsh chemical cleaners), damage caused by erratic electrical supply without required stabilizer, liquid spills on dry consoles, or third-party unauthorized repairs.</p>
            </div>
            <p className="text-xs sm:text-sm text-pine/80">
              Following the primary warranty period, {brand.name} offers Comprehensive Maintenance Contracts (CMC) and Annual Maintenance Contracts (AMC) with guaranteed response times and dedicated spare parts availability.
            </p>
          </section>

          {/* Section 7 */}
          <section id="cancellations-returns" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              6. Inspection Window, Cancellations & Return Protocols
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Given the custom-engineered and heavy capital nature of commercial wellness equipment:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-pine/80">
              <li><strong>Arrival Inspection:</strong> The client must inspect cargo upon delivery. Any physical transit damage or packaging rupture must be documented on the consignment note (POD) and reported to {brand.name} within forty-eight (48) hours with photographic evidence.</li>
              <li><strong>Custom / Made-to-Order Systems:</strong> Custom-dimension saunas, bespoke upholstery suites, and imported hyperbaric chambers cannot be cancelled once manufacturing has commenced.</li>
              <li><strong>Approved Returns:</strong> Where an exchange or return is mutually approved for standard stock items, hardware must be unused in original crating. A restocking fee of 20% plus return logistics costs will be assessed.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="operator-obligations" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              7. Facility Operator & End-User Safety Obligations
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Commercial clients (spas, fitness centres, physical therapy studios) agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-pine/80">
              <li>Ensure all staff operating the equipment complete our certified operator training protocol.</li>
              <li>Require all end-users and guests to review contraindications and sign informed health consent waivers prior to sessions.</li>
              <li>Never allow unsupervised use of cold plunges, hyperbaric chambers, or cryotherapy systems by minors or incapacitated individuals.</li>
              <li>Maintain strict sanitation and water filtration standards in accordance with the product operating manuals.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="intellectual-property" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              8. Intellectual Property & Brand Usage
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              All website content, engineering schematics, trade dress, product photographs, digital 3D models, blog essays, and brand assets are the exclusive property of {brand.name} or our licensed hardware manufacturing partners. Commercial facilities purchasing our hardware are granted a non-exclusive license to use official promotional collateral solely to advertise recovery services within their own physical premises.
            </p>
          </section>

          {/* Section 10 */}
          <section id="limitation-liability" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              9. Limitation of Liability & Indemnity
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              To the fullest extent permitted by law, {brand.name}, its directors, officers, technicians, and affiliates shall not be liable for any indirect, incidental, punitive, or consequential damages, lost profits, business interruption, or personal injury resulting from improper use, user negligence, contraindication neglect, or unauthorized modification of equipment.
            </p>
            <p className="text-xs sm:text-sm text-pine/75">
              Our total cumulative liability arising under any claim related to equipment supply or services shall not exceed the total amount paid by the customer for the specific product or service giving rise to the claim.
            </p>
          </section>

          {/* Section 11 */}
          <section id="governing-law" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              10. Governing Law & Dispute Resolution
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              These Terms shall be governed by, construed, and enforced in accordance with the substantive laws of India. Any dispute, controversy, or claim arising out of or relating to this contract, including its formation or breach, shall first be referred to amicable executive settlement within thirty (30) days.
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              Failing amicable resolution, disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996, conducted in English by a sole arbitrator mutually agreed upon. The competent courts in the jurisdiction of {brand.name}&apos;s registered corporate office shall have exclusive territorial jurisdiction.
            </p>
          </section>
        </LegalPageLayout>
      </main>
    </>
  );
}
