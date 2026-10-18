import type { Metadata } from "next";
import { brand, contact } from "@/data/home";
import { LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout";
import { Cookie, Settings, ShieldCheck, ToggleLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Cookie Policy | ${brand.name}`,
  description:
    "Understand how GreenPulse Wellness uses cookies, local storage, and tracking technologies to optimize website responsiveness, hardware catalog filtering, and digital performance.",
  openGraph: {
    title: `Cookie Policy — ${brand.name}`,
    description: "Official Cookie Policy for GreenPulse Wellness.",
    type: "website",
  },
};

const SECTIONS: LegalSection[] = [
  { id: "what-are-cookies", title: "What Are Cookies & Storage Mechanisms?" },
  { id: "why-we-use", title: "Why We Use Cookies on GreenPulse Wellness" },
  { id: "categories", title: "Categories of Cookies We Deploy" },
  { id: "cookie-table", title: "Technical Cookie Inventory Table" },
  { id: "third-party", title: "Third-Party Connectors & Pixels" },
  { id: "managing-cookies", title: "How to Manage, Block & Clear Cookies" },
  { id: "policy-revisions", title: "Policy Revisions & Inquiries" },
];

export default function CookiesPage() {
  return (
    <>
      <main>
        <LegalPageLayout
          title="Cookie Policy"
          subtitle="A clear, transparent breakdown of the cookies, storage mechanisms, and telemetry scripts utilized on the GreenPulse Wellness platform."
          effectiveDate="January 1, 2026"
          lastUpdated="March 2026"
          version="2026.1"
          sections={SECTIONS}
        >
          {/* Section 1 */}
          <section id="what-are-cookies" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              1. What Are Cookies & Web Storage?
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Cookies are compact text files placed onto your device (computer, smartphone, or tablet) by websites you visit. They are universally employed across modern web platforms to make websites function efficiently, preserve user preferences between page reloads, and provide anonymous operational insights to site administrators.
            </p>
            <p className="text-sm leading-relaxed text-pine/80">
              In addition to cookies, modern web applications utilize related web storage technologies such as <code>localStorage</code> and <code>sessionStorage</code> to store client-side preferences (such as your interactive drawer selections or preloader animation status) without burdening network bandwidth.
            </p>
          </section>

          {/* Section 2 */}
          <section id="why-we-use" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              2. Why We Use Cookies on {brand.name}
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              Our website utilizes minimal, purposeful cookies and storage items designed to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-pine/80">
              <li>Ensure the platform functions properly and renders high-fidelity media smoothly.</li>
              <li>Preserve your navigation continuity (such as smooth Lenis scroll kinetics and section anchor jumps).</li>
              <li>Retain product category filtering and enquiry package choices while browsing our hardware catalog.</li>
              <li>Provide aggregated, privacy-conscious performance metrics regarding website speed, Core Web Vitals, and hardware interest.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="categories" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              3. Categories of Cookies We Deploy
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-pine" />
                  <h3 className="text-sm font-semibold text-pine">A. Strictly Necessary & Functional Cookies</h3>
                </div>
                <p className="text-xs sm:text-sm text-pine/80 leading-relaxed">
                  These cookies are vital for the website to operate securely. They enable core functionalities such as page navigation, preloader state memory, security tokens, and responsive image optimization. Without these cookies, basic platform services cannot function properly.
                </p>
              </div>

              <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <ToggleLeft className="size-4 text-pine" />
                  <h3 className="text-sm font-semibold text-pine">B. Performance & Analytics Cookies</h3>
                </div>
                <p className="text-xs sm:text-sm text-pine/80 leading-relaxed">
                  These collect anonymous telemetry on how visitors navigate {brand.name}—such as which equipment models attract the most attention, page load times, and error occurrences. This telemetry contains no direct personal identifiers and is utilized solely to enhance platform usability.
                </p>
              </div>

              <div className="rounded-xl border border-wood/25 bg-canvas p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Settings className="size-4 text-pine" />
                  <h3 className="text-sm font-semibold text-pine">C. Preference & Session State Storage</h3>
                </div>
                <p className="text-xs sm:text-sm text-pine/80 leading-relaxed">
                  These store user interactions—such as selected equipment categories in the product index or state variables in the enquiry modal drawer—so you do not lose context when moving between pages.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Table */}
          <section id="cookie-table" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              4. Technical Cookie Inventory Table
            </h2>
            <p className="text-sm text-pine/80">
              The following table details the primary cookies and local storage tokens deployed on our website:
            </p>
            <div className="overflow-x-auto rounded-xl border border-wood/25">
              <table className="w-full text-left text-xs">
                <thead className="bg-oat text-pine font-mono uppercase tracking-wider text-[11px] border-b border-wood/20">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Identifier</th>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                    <th className="px-4 py-3 font-semibold">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wood/15 text-pine/80 bg-canvas">
                  <tr>
                    <td className="px-4 py-3 font-mono font-medium text-pine">__gpw_preloader</td>
                    <td className="px-4 py-3">Functional</td>
                    <td className="px-4 py-3">Tracks introductory animation completion to prevent repetitive animations on subpages.</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-medium text-pine">__gpw_pkg_sel</td>
                    <td className="px-4 py-3">Functional</td>
                    <td className="px-4 py-3">Maintains package preference when transitioning from Suite packages to the enquiry drawer.</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-medium text-pine">_ga / _gid</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Anonymous Google Analytics telemetry measuring aggregate traffic volume and scroll kinetics.</td>
                    <td className="px-4 py-3">1 to 24 Months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono font-medium text-pine">lenis-scroll-state</td>
                    <td className="px-4 py-3">Strictly Necessary</td>
                    <td className="px-4 py-3">Internal state memory ensuring smooth inertia scrolling across diverse viewport dimensions.</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="third-party" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              5. Third-Party Connectors & Social Pixels
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              When you click on external links—such as our interactive WhatsApp consultation trigger (<code className="rounded bg-oat px-1 text-xs font-mono">wa.me</code>), Instagram profile, or LinkedIn company page—those external platforms may place their own cookies and tracking pixels on your device in accordance with their independent privacy policies. We encourage you to review their respective privacy notices.
            </p>
          </section>

          {/* Section 6 */}
          <section id="managing-cookies" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              6. How to Manage, Block & Clear Cookies
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              You possess complete control over cookies. Most web browsers automatically accept cookies by default, but you can modify your browser settings to reject cookies or notify you whenever a cookie is transmitted:
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-pine/80">
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong className="text-pine block mb-1">Google Chrome:</strong>
                Settings → Privacy and Security → Third-party cookies → Block third-party cookies or Clear browsing data.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong className="text-pine block mb-1">Apple Safari (macOS / iOS):</strong>
                Preferences / Settings → Safari → Advanced → Block All Cookies, or turn on Prevent Cross-Site Tracking.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong className="text-pine block mb-1">Mozilla Firefox:</strong>
                Settings → Privacy & Security → Enhanced Tracking Protection → Select Strict or Custom blocking.
              </div>
              <div className="rounded-lg border border-wood/20 p-3 bg-oat/30">
                <strong className="text-pine block mb-1">Microsoft Edge:</strong>
                Settings → Cookies and Site Permissions → Manage and delete cookies and site data.
              </div>
            </div>
            <p className="text-xs text-pine/75">
              Please note that disabling strictly necessary cookies may slightly impact certain interactive elements, such as hardware filtering or animated transitions.
            </p>
          </section>

          {/* Section 7 */}
          <section id="policy-revisions" className="scroll-mt-28 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-pine">
              7. Policy Revisions & Inquiries
            </h2>
            <p className="text-sm leading-relaxed text-pine/80">
              We may periodically revise this Cookie Policy to reflect changes in our technology stack or legal requirements. For any questions regarding our use of cookies, contact us at{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-pine underline hover:text-wood">
                {contact.email}
              </a>.
            </p>
          </section>
        </LegalPageLayout>
      </main>
    </>
  );
}
