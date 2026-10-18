import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { ShieldCheck, AlertTriangle, CheckCircle, HeartPulse, FileText, Info } from "lucide-react";

export const metadata: Metadata = {
  title: `Regulatory Compliance & Wellness Safety Standards | ${brand.name}`,
  description:
    "Official regulatory guidelines, equipment safety standards, contraindication protocols, and wellness classification disclaimers for GreenPulse Wellness hardware.",
  openGraph: {
    title: `Regulatory Compliance & Safety — ${brand.name}`,
    description: "Equipment safety protocols, contraindications, and wellness compliance guidelines for GreenPulse Wellness.",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  { id: "regulatory-standing", title: "Regulatory Standing & Wellness Classification" },
  { id: "non-medical-disclaimer", title: "Non-Medical Disclaimer & Intended Use" },
  { id: "contraindications", title: "Technology-Specific Contraindications" },
  { id: "operator-sops", title: "Commercial Facility Operator SOPs" },
  { id: "electrical-safety", title: "Electrical, Pressure & Engineering Standards" },
  { id: "sanitation-hygiene", title: "Hygiene & Sanitization Protocols" },
  { id: "adverse-events", title: "Incident Reporting & Safety Feedback" },
];

export default function CompliancePage() {
  return (
    <>
      <main>
        <LegalPageLayout
          title="Regulatory Compliance & Safety Guidelines"
          subtitle="Clear operational standards, international safety certifications, and contraindication protocols governing the deployment of GreenPulse Wellness hardware."
          effectiveDate="January 1, 2026"
          lastUpdated="March 2026"
          version="2026.1 (Commercial Standard)"
          sections={SECTIONS}
        >
          {/* Section 1 */}
          <section id="regulatory-standing" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              1. Regulatory Standing & Wellness Classification
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              <strong>{brand.name}</strong> curates, imports, installs, and services advanced longevity, recovery, and restorative wellness hardware. All systems within our commercial and homecare suites are classified as <strong>General Wellness, Physical Conditioning, and Aesthetic Recovery Products</strong> in accordance with global regulatory parameters (such as the US FDA General Wellness Policy and applicable CDSCO classifications).
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              Our hardware is designed to promote physiological relaxation, enhance post-exercise recovery, assist muscular restoration, encourage circulation, and support general health. Unless a specific product model is explicitly designated and invoiced as an accredited medical device with local statutory registration for hospital operating theatres, hardware supplied by {brand.name} must be operated within a non-diagnostic wellness context.
            </p>
          </section>

          {/* Section 2 */}
          <section id="non-medical-disclaimer" className="scroll-mt-28 space-y-4">
            <div className="rounded-2xl border border-wood/35 bg-oat/70 p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-pine font-semibold text-sm">
                <AlertTriangle className="size-4.5 text-pine" />
                <span className="font-mono uppercase tracking-wider text-xs">Essential Health Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm text-pine/85 leading-relaxed">
                Nothing on this website, in our product catalogs, or in operator manuals should be construed as clinical medical advice. GreenPulse Wellness does not evaluate, diagnose, treat, prevent, or cure any pathology or chronic medical condition.
              </p>
              <p className="text-xs sm:text-sm text-pine/85 leading-relaxed">
                Individuals with pre-existing medical conditions, cardiovascular illness, implanted electronic devices (such as pacemakers), neurological disorders, or pregnant women should seek consultation with a licensed medical practitioner prior to initiating sessions.
              </p>
            </div>
          </section>

          {/* Section 3: Technology Specific Contraindications */}
          <section id="contraindications" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              2. Technology-Specific Contraindications
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Facility operators and individual users must adhere to the following safety contraindications prior to session admission:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* mHBOT */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-pine font-bold">
                  A. Mild Hyperbaric Oxygen Chambers (mHBOT, 1.3–1.5 ATA)
                </span>
                <p className="text-pine/80">
                  <strong>Absolute Contraindications:</strong> Untreated pneumothorax, severe chronic obstructive pulmonary disease (COPD) with air trapping, and recent middle ear surgery.
                </p>
                <p className="text-pine/70">
                  <strong>Precautions:</strong> Active sinus or ear canal infections, high fever, severe claustrophobia, or concurrent use of medications that increase oxygen sensitivity. Users must be taught the Valsalva ear equalization maneuver prior to pressurization.
                </p>
              </div>

              {/* Photobiomodulation */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-pine font-bold">
                  B. Photobiomodulation / Full-Body Red Light Beds
                </span>
                <p className="text-pine/80">
                  <strong>Contraindications:</strong> Severe photosensitivity, active intake of photosensitizing pharmaceuticals (e.g. isotretinoin, tetracyclines, methotrexate), and active ocular pathologies without certified blackout protective eyewear.
                </p>
                <p className="text-pine/70">
                  <strong>Precautions:</strong> Pregnancy (avoid direct intense irradiation over the abdomen) and suspicious undiagnosed skin lesions.
                </p>
              </div>

              {/* Whole Body Cryo & Cold Plunge */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-pine font-bold">
                  C. Cryotherapy Cabins & Contrast Cold Plunges
                </span>
                <p className="text-pine/80">
                  <strong>Contraindications:</strong> Uncontrolled arterial hypertension (&gt; 160/100 mmHg), acute myocardial infarction, unstable angina, Raynaud&apos;s phenomenon, cold urticaria, deep vein thrombosis, and symptomatic peripheral arterial disease.
                </p>
                <p className="text-pine/70">
                  <strong>Precautions:</strong> Never submerge under the influence of alcohol, narcotics, or sedative medications. Cold immersion should always be supervised.
                </p>
              </div>

              {/* Compression */}
              <div className="rounded-xl border border-wood/25 bg-canvas p-4 space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-pine font-bold">
                  D. Pneumatic Compression Recovery Boots
                </span>
                <p className="text-pine/80">
                  <strong>Contraindications:</strong> Active deep vein thrombosis (DVT), thrombophlebitis, pulmonary embolism history, localized acute skin infections, open dermal wounds, or severe congestive heart failure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="operator-sops" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              3. Commercial Facility Operator SOPs
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Commercial facilities (wellness centers, luxury hotel spas, athletic training suites, gyms, and clinical clinics) deploying {brand.name} hardware agree to implement the following Standard Operating Procedures:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-pine/80">
              <li><strong>Guest Health Intake & Waiver:</strong> Every user must complete a health intake questionnaire disclosing relevant medical history and acknowledge an informed consent waiver prior to their first session.</li>
              <li><strong>Certified Operator Presence:</strong> Equipment must only be operated or supervised by staff who have completed the {brand.name} White-Glove Training & Orientation module.</li>
              <li><strong>Emergency Stop Verification:</strong> Physical emergency relief valves (on hyperbaric chambers) and master power kill switches must be physically inspected daily before the first client session.</li>
              <li><strong>Session Log Retention:</strong> Keep records of session durations, pressure levels, and temperatures to ensure adherence to rated duty cycles.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="electrical-safety" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              4. Electrical, Pressure & Engineering Standards
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Our hardware is curated from certified manufacturing partners adhering to internationally recognized standards:
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-pine/80">
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Electrical Compliance:</strong> CE, RoHS, and IEC 60601-1 / 60335 compliant electronics, dual-pole residual current circuit breakers (RCCB/ELCB).
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Pressure Vessel Safety:</strong> Hyperbaric chambers feature dual independent mechanical relief valves ensuring chamber pressure cannot exceed rated design limits.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>Non-Toxic Materials:</strong> Medical-grade TPU / aircraft aluminum chambers, zero-VOC Canadian Hemlock/Cedar wood saunas, and skin-friendly silicone air bladders.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong>EMF Suppression:</strong> Ultra-low electromagnetic field (EMF / ELF) shielding on all infrared heating elements and photobiomodulation driver boards.
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sanitation-hygiene" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              5. Hygiene & Sanitization Protocols
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              To ensure peak sanitation in high-throughput commercial settings:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-pine/80">
              <li><strong>Chambers & Saunas:</strong> Disinfect vinyl mats, touch surfaces, and headsets after every individual session using medical-grade, alcohol-free quaternary ammonium wipes.</li>
              <li><strong>Cold Plunges & Hydrotherapy:</strong> Continuous 24/7 micron filtration and ozone/UV-C sanitation loops must be maintained. Water testing for free chlorine/sanitizer levels must be logged daily.</li>
              <li><strong>Compression Sleeves:</strong> Removable disposable or washable liner pants must be provided to clients to maintain fabric hygiene.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="adverse-events" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              6. Incident Reporting & Safety Feedback
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              In the unlikely event of an equipment failure that results in a near-miss, physical discomfort, or user safety concern, commercial operators are requested to cease machine operation immediately and submit an Incident Report to our Safety Advisory Board within twenty-four (24) hours:
            </p>
            <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2 text-xs sm:text-sm text-pine">
              <p><strong>Safety & Regulatory Desk:</strong> {brand.name} Safety & Quality Assurance</p>
              <p><strong>Emergency Incident Email:</strong> <a href={`mailto:${contact.email}`} className="font-semibold underline">{contact.email}</a></p>
              <p><strong>Direct Helpline:</strong> <a href={`tel:${contact.phoneRaw}`} className="font-semibold">{contact.phone}</a></p>
            </div>
          </section>
        </LegalPageLayout>
      </main>
    </>
  );
}
