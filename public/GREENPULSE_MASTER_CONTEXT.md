# GreenPulse Wellness — Master Context, Vision & Brand Plan

> One file to carry anywhere: paste it into any AI chat, hand it to a designer/developer, or drop it into Notion.
> Last compiled: 17 Oct 2026 from the codebase at `GPW WEBSITE/` (branch `main`).
> Legend: **[FACT]** = read directly from the code/data. **[PROPOSAL]** = my recommendation, needs your decision. **[CONFLICT]** = the project contradicts itself and needs a ruling.
>
> Deliberately excluded: supplier cost prices, the `INTERNAL source model` column, API tokens and env secrets.

---

## 0. 60-second summary

- **Who:** GreenPulse Wellness — a turnkey importer, space planner, installer and servicer of commercial recovery, rehabilitation and longevity hardware in India. [FACT]
- **Who it sells to:** wellness/longevity centres, hotel spas, premium gyms, physio/chiro clinics, senior living, hospitals and homecare. [FACT]
- **What the site is:** a B2B lead-generation catalogue. No cart or prices. Every path ends in a WhatsApp enquiry (+91 75500 22504). [FACT]
- **Stack:** Next.js 16 (App Router) + React 19 + Tailwind 4 + Sanity CMS + Lenis smooth scroll + Motion. [FACT]
- **Current look:** pure-black, monochrome, Geist type, a WebGL "morph gallery" hero with rotating words (Recovery / Wellness / Performance / Longevity / Vitality). [FACT]
- **Biggest open problems:** (1) the brand story, solution definitions and product names disagree across files, (2) the brand colour is green but the site is black and white, (3) address, social links and email are still placeholders, (4) an internal pricing/cost CSV sits in `/public` and is therefore downloadable. See §12.

---

## 1. Vision, mission, positioning

### 1.1 What the code says today [FACT]
| Item | Value | Where |
|---|---|---|
| Name | GreenPulse Wellness | `data/home.ts` → `brand` |
| Tagline in metadata | "Purpose-led Wellness Tech & Products" | `data/home.ts` |
| Hero headline | "Built for bodies that keep going." | `hero` |
| Hero sub | "Advanced wellness technology for recovery, rehabilitation & performance." | `hero` |
| About thesis | "Architectural Wellness Technology" — a third category between fragile consumer gadgets and sterile hospital apparatus | `data/about.ts` |
| About H1 | "Pioneering the Infrastructure of Modern Human Longevity" | `data/about.ts` |
| Founded | "Established 2024", HQ Bengaluru, pan-India + global procurement | `data/about.ts` |
| Operating promise | "One partner from consultation through import, installation and service." | `processSection` |

### 1.2 Recommended vision stack [PROPOSAL]
Three lines that unify the scattered wording above.

- **Vision:** Make serious recovery and longevity technology a normal part of every well-designed space in India, from a hotel spa to a hospital room to a home.
- **Mission:** Curate, import, install and look after the equipment so the operator never has to deal with brokers, customs, electricians or breakdowns. One partner, one number.
- **Positioning statement:** For operators who want to add recovery and longevity services, GreenPulse is the single-source partner that turns imported hardware into a working, serviced, beautifully fitted space. Unlike gadget resellers or hospital-equipment dealers, we plan the room, handle the import, commission the machines and keep them running.
- **One-line promise:** *Equipment you can trust, a space you're proud of, a partner who stays.*

### 1.3 Pillars [FACT, from About page, reworded for brevity]
1. **Biophysical rigour** — calibrated wavelengths (660/850 nm), verified pressure curves (1.3–1.5 ATA), true SL-track massage geometry.
2. **Material nobility and low EMF** — FSC Canadian hemlock/cedar, zero-VOC adhesives, shielded heaters.
3. **Full-lifecycle white-glove execution** — electrical blueprints → customs → install → staff certification.
4. **Transparent ethics and safety** — wellness classification only, client screening, contraindication matrix, emergency egress.

### 1.4 Strategic bets [PROPOSAL]
| Bet | Why |
|---|---|
| Sell the *room*, not the machine | Suites/packages carry bigger tickets and lock in service revenue. The site already has "Recovery suites, bundled." |
| Own "turnkey + service" as the moat | Anyone can import a sauna. Few handle blueprinting, customs, commissioning, AMC and spares. |
| Rental/lease as a second door | Hospitals and homecare buy slowly but rent fast. Rental is already a home-page strip. |
| Educate to earn trust | The Journal (6 long-form articles) feeds SEO and AI-search visibility. |
| Be the cited source for AI assistants | `llms.txt`, `llms-full.txt`, JSON-LD and an AI-crawler-friendly `robots.txt` are already built. |

---

## 2. Brand

### 2.1 Brand personality [PROPOSAL, consistent with copy already on the site]
**Calm, precise, premium, honest.** Think premium hardware brand (Apple/Dyson/Aesop restraint), not clinic, not gym, not "biohacker bro".
- Calm: slow motion, generous whitespace, no hype.
- Precise: real numbers (nm, ATA, mmHg, mG, kW) beat adjectives.
- Premium: material and light first, product second, price never on the page.
- Honest: wellness language only. No cure or diagnosis claims.

### 2.2 Voice and copy rules
**[FACT] Hard rule in code (`data/home.ts` header):** *wellness language only — "supports recovery", "promotes relaxation" — never medical or treatment claims.* Footer disclaimer: "Wellness equipment for general wellbeing. Not intended to diagnose, treat or cure any condition."

| Do | Don't |
|---|---|
| "Supports recovery between training days." | "Cures inflammation." / "Treats arthritis." |
| "Built for 12+ hour daily commercial use." | "Revolutionary breakthrough!" |
| "660 nm red + 850 nm near-infrared." | "Clinically proven to…" (without a cited source) |
| Short, declarative sentences. | Hype, exclamation marks, stock-wellness cliché ("journey", "detox"). |
| Name the operator's outcome (throughput, retention, uptime). | Name the patient's disease. |

**[PROPOSAL] Tone ladder**
- Hero/marketing: short, confident, human ("Built for bodies that keep going.").
- Product/spec: factual, numeric, scannable.
- Journal: authoritative, cites mechanism, ends with an operator takeaway.
- Legal/compliance: plain English, no jargon.

**Words to use:** supports, designed for, commercial-duty, commissioned, serviced, calibrated, sanctuary, suite, protocol, throughput.
**Words to avoid:** cure, treat, heal (as a promise), diagnose, miracle, detox, anti-ageing claims, "FDA/CE approved" unless certificates are on file.

### 2.3 Visual identity — what is live [FACT]
| Token | Value | Notes |
|---|---|---|
| Canvas | `#000000` | pure black page |
| Card surface | `#0d0d0d` | "oat" token name is a leftover |
| Primary text | `#f4f4f5` | off-white |
| Muted text/borders | `#86909c` | slate |
| Accent | `#ffffff` | monochrome; "lime" token is now white |
| Radius | 20px cards / 24px panels / 28–48px hero overlay curve | |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` ("calm") | |
| Fonts | **Geist** (sans) + **Geist Mono** (labels, spec tags) | next/font |
| Labels | `label-mono` class: 11px mono caps | |
| Motion | Lenis smooth scroll, Motion reveals, grain/noise layer, notch-style navbar, scroll-over hero | |
| Logo | `/logo-horizontal.png` (nav, OG, JSON-LD) and `/logo.svg` (placeholder, auto-inverts to white) | |

### 2.4 [CONFLICT] Green vs black
`MEDIA_NEEDED.md` describes the original brand as **warm oat / timber / deep green `#16392E`** with "real spaces, warm calm light". The shipped CSS is **pure black and white**. The name is *Green*Pulse, but nothing on screen is green.

**[PROPOSAL] Recommended ruling — "Obsidian + Pulse Green":**
Keep the black premium canvas (it flatters the product photography and the WebGL hero), but bring the brand back with one disciplined accent.
| Role | Proposed | Use |
|---|---|---|
| Canvas | `#000000` / `#0d0d0d` | unchanged |
| Text | `#f4f4f5` | unchanged |
| **Pulse Green (accent)** | `#2FD27A` (tune against logo) | the "pulse" dot, active states, key CTA hover, focus ring, chart/metric highlights |
| **Deep Green (brand)** | `#16392E` | logo mark, footer panel, print, light-mode surfaces |
| Warm neutral | `#E9E4DA` (oat) | light sections, packaging, decks, quotes/proposals |
| Timber | `#B08A5B` | sparingly, for sauna/material callouts |

Rule: **white for structure, green for meaning.** If green appears, it signals "live / active / go / book".
Alternative if you want to stay monochrome: rename nothing, but retire the unused `lime`/`oat`/`wood`/`pine` token names so the code stops lying.

### 2.5 Logo [PROPOSAL]
- Need: horizontal lockup, stacked lockup, icon-only mark, single-colour white, single-colour deep-green.
- Concept: a pulse line (ECG/sine) that resolves into a leaf or a "G".
- `public/logo.svg` is flagged as a **placeholder** in `MEDIA_NEEDED.md`; replace it before launch.
- Clear-space = height of the "G"; minimum width 96 px digital, 24 mm print.

### 2.6 Photography and video direction [FACT from MEDIA_NEEDED.md + PROPOSAL]
- Photograph equipment like premium hardware: warm calm light, neutral oat/warm-white/timber backdrops, real spaces.
- No stock yoga, no added glows/gradients, no clinical staging.
- Video: H.264 MP4, muted, seamless loop, 24–30 fps, ≤ 4 MB hover loops, ≤ 8 MB full-bleed, poster JPG = first frame, subject centred for 9:16 crop.
- Images: long edge ≥ 2400 px full-width, ≥ 1600 px otherwise.
- **[PROPOSAL]** Shoot list priority: one flagship suite (Recover & Restore), one hotel spa, one clinic bay, one hospital room, one home install. Real client installs beat renders once available (with written permission).

---

## 3. Audience

| Segment (site `businessType`) | Job to be done | What they buy | Typical footprint [FACT] |
|---|---|---|---|
| Wellness / Longevity Centres | Add premium protocol revenue | HBOT, PBM bed, cryo, compression | 400–1,200 sq ft |
| Hotel Spas / Residential Wellness | Raise guest experience and RevPAR | Infrared cabins, massage lounges, plunge | 250–800 sq ft |
| Premium Gyms / Sports Centres | Faster athlete turnaround | Compression, saunas, ice baths, guns | 300–1,500 sq ft |
| Physio / Chiro Clinics | Amplify manual therapy | Drop tables, local red light, compression | 150–500 sq ft per bay |
| Senior Living | Dignity, mobility, circulation | Gentle massage chairs, assistive mobility | 200–600 sq ft |
| Hospitals / Homecare | Bridge discharge to home recovery | Rental recovery chairs, cold compression, wheelchairs | 120–400 sq ft per room |
| Individual (form option) | Private home setup | Compact saunas, boots, guns | 100–400 sq ft |

**Decision makers:** founder/operator, GM or spa director, clinical lead, procurement, interior architect/developer.
**Their fears (design the site against these):** import hassle, hidden costs, downtime with no spares, safety/liability, "will it look good?", "will it make money?".

---

## 4. Offer architecture

### 4.1 Five-step process on the home page [FACT]
01 Consult → 02 Curate → 03 Source & Import → 04 Install & Train → 05 Service & Support.
The About page expands this to 6 phases: Discovery & Space Planning → Curated Selection → Procurement & Import → On-Site Commissioning → Staff Handover → Lifecycle Assurance.

### 4.2 Commercial models [FACT]
Direct purchase (CapEx) · commercial lease/lease-to-own · month-to-month clinical rental · AMC (annual maintenance contract) · spares supply · demo at expos (IHFC Mumbai, dates TBC).

### 4.3 Promises that must be backed in operations [FACT, from About FAQ — verify before relying]
- Quoted turnkey prices include freight, cargo insurance, customs brokerage, GST clearance and door-to-room delivery.
- 1–2 year warranty; spares held in India; on-site service.
- In-stock delivery 5–10 business days; custom builds 4–8 weeks.
- Power: most items 220–240 V single-phase 15/16 A; large saunas may need 3-phase 6–9 kW.

### 4.4 Recovery-suite packages on the home page [FACT]
| Package | Positioning | Bundle (product IDs) |
|---|---|---|
| Starter | Gym/studio recovery corner | Normatec 3 full body, Apex massage chair, Flowgun Air |
| Studio (featured) | Recovery studios, hotel spas | Halo 2 cabin, ChillyBox plunge, Normatec 3, Apex chair |
| Centre | Longevity centres, full protocol floor | O2 Carbon HBOT, ChillyBox, Halo 5, ProAdjust table, Normatec 3, Apex chair |

(Code comment: *"TODO: confirm bundles with the supply team."*)

---

## 5. The four solutions

> **[CONFLICT]** The homepage bento, `data/solutions-data.ts`, and `public/llms*.txt` define **AgeWell** and **Live Well** differently. Pick one definition (see §12) and align all three. Below is each version, then the recommended ruling.

| Solution | URL | Homepage / `solutions-data.ts` (what the site shows) | `llms.txt` / `llms-full.txt` (what AI crawlers read) |
|---|---|---|---|
| **Recover & Restore** | `/solutions/recover` | Contrast therapy, infrared, HBOT and cryo suites for wellness operators. 450–1,200 sq ft. | Same, plus whole-body cryo and zero-gravity loungers. Consistent. |
| **AgeWell** | `/solutions/agewell` | **Senior living and mobility assist**: sit-to-stand recliners, assistive chairs, gentle joint therapy. | **Longevity**: HBOT and full-body PBM beds, cellular recovery. 500–1,500 sq ft. |
| **Rehabilitate** | `/solutions/rehabilitate` | Drop tables, tilt stations, targeted compression for physio/chiro and sports medicine. 600–2,000 sq ft. | Same. Consistent. |
| **Live Well** | `/solutions/live-well` | Hospitals, clinics, post-op homecare, rental. 120–400 sq ft per room. | Same. Consistent. |

**[PROPOSAL] Ruling**
- **Recover & Restore** = heat, cold, light, oxygen (the "longevity" hardware lives here, because that is where the HBOT/PBM products sit today).
- **AgeWell** = senior living and active ageing (mobility, gentle massage, circulation). Keep what the site shows; **rewrite `llms.txt` and `llms-full.txt` to match.**
- **Rehabilitate** and **Live Well** unchanged.
- Aliases already supported in routing: recover → `recover-restore|recoverandrestore|wellness`; agewell → `senior-living|mobility|mobility-assist`; live-well → `livewell|homecare|clinical-homecare`; rehabilitate → `rehab|performance|physiotherapy`.

Each solution page has: hero, operator metrics, space blueprint (zones, electrical, HVAC, acoustics, drainage), workflow protocol, 2–3 turnkey suite bundles (e.g. "Express Longevity Lounge", "Comprehensive Longevity Suite", "Flagship Medical Wellness Pavilion"), FAQ, cross-navigation, enquiry modal.

---

## 6. Product catalogue

### 6.1 Naming system [FACT, `public/GreenPulse_Combo_Master - Product_Names.csv`]
Master list of 56 SKUs. Each has a code, category, series, a short "GreenPulse name" (used in combos) and a long "SEO indexable name" (titles, listings, quotes, decks). The CSV carries a cost column and an internal supplier-model column that must never be shown to customers.

| Series (brand family) | Category | Items | Examples |
|---|---|---|---|
| **HALO** | Heat / infrared saunas | 5 | Halo 1, 2, 3; Halo Hybrid 2 and 3 |
| **ARCTIC** | Cold / cryo | 4 | Arctic Ring, Tub, Fold, Zero |
| **LUMA** | Light (full-body + small LED) | 4 large + 12 small | Luma Stand, Cocoon 1 and 2, Dome; Go 500/1000/1500, Tower, Spot, Panel, Mask Duo, Shell, Shell 2 |
| **LUMA BEAM** | Handheld laser/light | 3 | Beam Quad, Wand, Crown |
| **OXA** | Hyperbaric (air) | 3 | Oxa Cube Solo, Cube Duo, Oxa Mini |
| **SERENE** | Massage chairs | 5 | Mid, Elite, Lounge, 360, Comfort |
| **PULSEWAVE** | Compression | 10 | Go, 4, Pro 6, Pro 8, Max, Studio, Zone, Heat, Glow, Pants |
| **THRUM** | Massage guns | 3 | Lite, Pro, Deep |
| **EMBER / AURORA** | Blankets | 2 | Ember Wrap (far-IR), Aurora Wrap (red light) |
| **FROSTFIRE** | Cold/heat/light therapy units | 2 | Pad; Joint Wrap (marked *Not for sale*) |
| **GLIDE** | Mobility | 7 | Flex, Trek 1/2, Lite, Start, Junior, Rise Stand (all still **PENDING** product-type confirmation) |

CSV status flags to resolve before launch: *Price pending*, *Placeholder price*, *Confirm price*, *Check price*, *Starts-from price*, *Not for sale*.

### 6.2 Site catalogue [FACT]
- `data/home.ts` holds **~77 `Product` entries** with modality (heat, cold, light, air, relax, mobility), category, tier badges (Essential / Pro / Signature), 3 spec tags and image slots.
- `data/products-data.ts` holds rich detail pages (overview, mechanism of action, features, benefits, spec groups, what's included, protocol, suitable environments, FAQs, related products). Currently being extended (uncommitted work on the Arctic Ring, Arctic Tub, Arctic Zero detail pages).
- Product URLs: `/products` (catalogue with filters) and `/products/[id]`. Sanity is the live source; local files are the fallback so the page is never empty.
- Product media folders: `public/GPW Product mockup/<Category>/<Product>/` (empty placeholders with README.txt), `public/LIBRARY/*`, `public/catalog-images/`, `public/product/`.

### 6.3 Spotlight products on the home page [FACT]
O2 Carbon Hyperbaric Chamber · Halo 2 Infrared Wellness Cabin · GreenPulse Normatec 3 Full Body.

### 6.4 [CONFLICT] Two naming eras
Pages and AI files still use *supplier-style* names and IDs (Normatec, Apex, ChillyBox, ProAdjust, "MStar", "Lion", "Komjet", `led-therapy-full-body-clam-1-m6`) while the CSV defines the *GreenPulse-branded* families (Halo, Arctic, Luma, Oxa, Serene, PulseWave, Thrum, Ember/Aurora, Glide).
**[PROPOSAL]**
1. Treat the CSV as source of truth for names.
2. Migrate product IDs/slugs to the branded names with **301 redirects** from the old slugs (protect SEO and any shared links).
3. Remove third-party brand names (Normatec is Hyperice's trademark) from customer-facing copy, titles and the blog slug `dynamic-compression-for-athletic-recovery-normatec`.
4. Regenerate `llms.txt` / `llms-full.txt` from the same data instead of hand-writing them (see §10).

---

## 7. Website: structure, features, tech

### 7.1 Site map [FACT]
| Route | Purpose |
|---|---|
| `/` | Preloader → WebGL hero → solutions bento → equipment rail → spotlight → who-we-equip → suites → experience → rental → enquiry form |
| `/products`, `/products/[id]` | Catalogue and detail pages with gallery, specs table, enquiry drawer |
| `/solutions/[id]` | Four solution pages (aliases accepted) |
| `/about` | Hero stats, story, pillars, ecosystem (6 sectors), 6-phase methodology, standards, FAQ, CTA |
| `/blog`, `/blog/[slug]` | The Journal |
| `/compliance` `/privacy` `/terms` `/complaints` `/cookies` | Legal and governance |
| `/studio` | Sanity Studio (disallowed in robots) |
| `/api/revalidate` | Sanity webhook → cache revalidation (secret in env) |
| `/llms.txt`, `/llms-full.txt` | AI-readable summaries (route handlers *and* static copies in `/public`) |
| `/sitemap.xml`, `/robots.txt` | SEO |

### 7.2 Homepage experience [FACT]
1. **Layout preloader** counts up with the brand name; hero video and headline are held until it finishes (recent commit).
2. **Hero:** WebGL `MorphGallery` with a notch navbar, rotating single word (Recovery, Wellness, Performance, Longevity, Vitality) synced to a description; autoplay is delayed until the preloader completes.
3. **Scroll-over:** the content layer (rounded top corners, shadow) slides up and covers the sticky hero.
4. **Sections:** Solutions bento (slides, hover loops) → Equipment rail → Who we equip → Suite packages → Experience it (IHFC Mumbai, dates TBC) → Rental strip → Enquiry form.
5. Floating WhatsApp button; "Book a Demo" CTA in nav.
6. Intentionally empty slots: **client logos** (only with written permission) and **testimonials** (real, attributable, wellness-language only).

### 7.3 Lead capture [FACT]
Enquiry form (business type, package, message) → pre-filled **WhatsApp** message to `917550022504`. Product and solution pages have their own enquiry drawer/modal that carries product/solution context. Rental has a dedicated WhatsApp message. There is no email or CRM capture today.

### 7.4 Stack and operations [FACT]
- Next.js ^16.3, React ^19.3, Tailwind ^4.3, TypeScript, `motion`, `lenis`, `styled-components`, `lucide-react`, `class-variance-authority`.
- CMS: Sanity (project `0rv3p2wk`, dataset `production`) with schemas for **product, post, author**. `npm run import:content` pushes local data into Sanity.
- Images: `next/image` with AVIF/WebP; remote patterns for the site domain, Sanity CDN, icons8.
- Route groups: `app/(site)` (public) and `app/(studio)` (Sanity Studio).
- Env vars (names only): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_REVALIDATE_SECRET`, `SANITY_API_WRITE_TOKEN`.
- Commands: `npm run dev | build | start | import:content`.
- `.env.local` is git-ignored. Good.

### 7.5 SEO and AI-visibility [FACT]
- Global JSON-LD (Organization, WebSite), homepage ProfessionalService + OfferCatalog + FAQPage, per-page metadata, canonical URLs, OG/Twitter cards (using the logo as the image).
- `robots.txt` explicitly allows GPTBot, ChatGPT-User and other AI retrieval bots; blocks `/studio/` and `/api/`.
- `llms.txt` (index) and `llms-full.txt` (specs, power, HVAC, mechanisms).
- Dynamic `sitemap.ts` (home 1.0, products 0.95, about/blog 0.85, legal 0.4–0.5).

### 7.6 The Journal [FACT]
| Slug | Category | Theme |
|---|---|---|
| science-of-photobiomodulation-infrared-saunas | Longevity & Tech | PBM mechanism |
| designing-commercial-recovery-suites-for-luxury-hotels | Commercial Suites & Spas | Hotel recovery suites |
| mild-hyperbaric-oxygen-therapy-recovery-guide | Science & Modalities | mHBOT facility + protocol |
| contrast-therapy-infrared-cold-water-immersion | Recovery & Biohacking | Contrast therapy at scale |
| dynamic-compression-for-athletic-recovery-normatec | Recovery & Biohacking | Pneumatic compression |
| wellness-roi-how-gyms-and-spas-monetize-recovery-tech | Commercial Suites & Spas | Operator economics |

---

## 8. Compliance and risk posture

**[FACT]** Positioned as *general wellness / recovery / rehabilitation equipment*; certifications cited: CE, RoHS, ISO 9001 / 13485. Pages exist for Compliance, Privacy, Terms, Grievance Redressal, Cookies.

**Risks to manage [PROPOSAL]**
| Risk | Why it matters | Action |
|---|---|---|
| Health claims in blog/product copy | Statements like "elevating ATP by 140–200%", "neoangiogenesis", "down-regulates inflammatory markers" read as clinical outcome claims, against the site's own wellness-only rule | Have each article reviewed; cite primary sources; reword to mechanism-level, not outcome-level |
| HBOT, cryo, wheelchairs | May be regulated devices in India (CDSCO medical-device rules) | Confirm classification and import licences per SKU before selling; keep certificates on file |
| Certification claims ("100% certified", "tested to 3x pressure", "<0.2 mG") | Claims need test reports | Keep supplier test reports/CE files; show only what you can produce |
| "Established 2024", "India's premier", "Bengaluru HQ" | Must be true and provable | Confirm, or soften to "India's turnkey…" |
| Third-party trademarks (Normatec) | Trademark risk | Remove from public copy |
| Testimonials/client logos | Consent | Only with written permission (already a code rule) |
| Privacy | WhatsApp is the lead channel; DPDP Act (India) applies | Keep privacy policy specific to WhatsApp data handling |

---

## 9. Plan: from here to launch and beyond [PROPOSAL]

### Phase 0 — Decide (this week)
- [ ] Rule on §2.4 colour direction (Obsidian + Pulse Green recommended).
- [ ] Rule on §5 AgeWell definition.
- [ ] Rule on §6.4 naming (adopt CSV names, plan redirects).
- [ ] Confirm company facts: legal name, founding year, HQ, GSTIN, address, official email, socials.
- [ ] Resolve every CSV status flag (pending/placeholder prices; what the Glide items actually are; Frostfire Joint Wrap).

### Phase 1 — Make the site true (weeks 1–2)
- [ ] Replace placeholders: address, Instagram/LinkedIn URLs, email, final `logo.svg`.
- [ ] Align `llms.txt` and `llms-full.txt` (and ideally generate them from `data/*`). Remove the duplicate static copies in `/public` if the route handlers are the source, since two versions can drift.
- [ ] Rename products/slugs to branded names with 301s; scrub "Normatec".
- [ ] Finish product detail pages for the remaining SKUs (Arctic work is in progress).
- [ ] Fill media slots listed in `MEDIA_NEEDED.md` (hero loop, bento hover loops, product 4:5 shots, audience images).
- [ ] Review all blog/product copy against the wellness-only rule.

### Phase 2 — Make it convert (weeks 3–6)
- [ ] Add a **second capture path** next to WhatsApp: email + phone form that writes to Sanity or a CRM, so leads aren't trapped in one phone.
- [ ] Lead qualification fields: city, space size (sq ft), timeline, budget band, existing power (single/3-phase).
- [ ] "Request a suite quote" flow from the Packages section; downloadable PDF spec sheets per product.
- [ ] Analytics + events: CTA clicks, WhatsApp opens, product views, form completions (GA4/Plausible).
- [ ] Case-study template (before/after room, equipment list, throughput) ready for the first install.

### Phase 3 — Make it credible (months 2–4)
- [ ] First 3 real installs photographed; 1–2 attributable testimonials; client logos with permission.
- [ ] Certificates and test reports page (CE, ISO, EMF readings).
- [ ] Demo calendar + IHFC Mumbai booking; a physical demo studio if feasible.
- [ ] Journal cadence: 2 posts/month, each tied to a product cluster and a target keyword (see §11).

### Phase 4 — Scale (months 4–12)
- [ ] City landing pages (Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune) for local service/AMC.
- [ ] AMC self-service: service request form, spare-parts catalogue.
- [ ] Partner programme for architects, interior designers and hotel developers.
- [ ] Rental portal for hospitals/homecare (availability, deposit, delivery).
- [ ] Consider a light e-commerce path for sub-₹1 lakh items (guns, masks, boots, panels) with the B2B flow kept for suites.

---

## 10. Content system [PROPOSAL]

- **Single source of truth:** `data/*.ts` → Sanity → site → `llms*.txt` → JSON-LD → sitemap. Generate the last three from the first, never hand-edit.
- **Product page template:** one-line promise · who it's for · 3 benefits with a number each · spec table · what's included · placement/power needs · protocol · FAQ · related products · enquiry CTA.
- **Journal template:** hook → mechanism (one diagram) → operator implications → space/power needs → related products → CTA.
- **Metadata rules:** title ≤ 60 chars `Product — Benefit | GreenPulse Wellness`; description ≤ 155 chars; one H1; alt text names the product and setting.
- **Pricing policy:** list prices exist internally; the site shows none. Keep it that way and quote on enquiry (B2B turnkey incl. freight/duties/commissioning).

---

## 11. SEO and AI-search keyword map [PROPOSAL]

| Cluster | Target queries | Landing page |
|---|---|---|
| Infrared saunas | infrared sauna India, commercial infrared sauna, hotel sauna cabin | Halo series products, Recover & Restore |
| Cold plunge | cold plunge India, ice bath tub price, commercial cold plunge chiller | Arctic series |
| Red light | red light therapy bed India, LED light therapy panel | Luma series |
| HBOT | hyperbaric oxygen chamber India, mild HBOT chamber | Oxa series, AgeWell/Recover |
| Compression | pneumatic compression boots India, sports recovery boots | PulseWave series, Rehabilitate |
| Massage | 4D massage chair for hotels, SL track massage chair | Serene series |
| Turnkey | wellness centre equipment supplier India, recovery studio setup cost | Solutions pages, Packages, Journal ROI post |
| Clinic | chiropractic drop table India, physio clinic equipment | Rehabilitate |
| Rental | wheelchair / recovery chair rental for homecare | Live Well |

Add FAQ schema to every solution page and Product schema (without price) to product pages.

---

## 12. Open decisions and known issues (the checklist)

| # | Issue | Severity | Suggested action |
|---|---|---|---|
| 1 | **Internal cost data is publicly downloadable.** The Product_Names CSV in `/public` includes cost and internal-source columns; anything in `/public` is served at the site URL once deployed. | High | Move it out of `/public` (e.g. `/docs` or a private drive) before any deploy. Also check `scripts/generate_excel.py` outputs. |
| 2 | This file lives in `/public`, so it will also be public once deployed. | Medium | It excludes costs and secrets by design. If you want it private, move it to the repo root after you copy it. |
| 3 | AgeWell / Live Well defined differently on-site vs `llms*.txt` | High | §5 ruling, then regenerate AI files |
| 4 | Brand green vs black UI | Medium | §2.4 |
| 5 | Supplier-style product names/slugs vs branded CSV names; third-party trademarks | High | §6.4 |
| 6 | Placeholders: address, Instagram, LinkedIn, email ("confirm"), logo.svg | High | Phase 1 |
| 7 | Duplicate `llms.txt` / `llms-full.txt` in `/public` and as route handlers | Medium | Keep one source |
| 8 | OG image is the logo (1200×630 declared, actual file is the logo) | Low | Make a proper 1200×630 social card |
| 9 | `themeColor` is `#000000` and CSS token names (`oat`, `wood`, `pine`, `lime`) no longer match their values | Low | Rename tokens when the palette is decided |
| 10 | Package bundles marked "TODO: confirm with supply team" | Medium | Confirm stock/availability |
| 11 | About stats ("50+ systems", "6 verticals", "360°") vs 77 product entries vs 56 CSV SKUs | Low | Pick one counting rule and update copy |
| 12 | Health-outcome phrasing in blog/product copy | High | §8 review |
| 13 | Many CSV items still pending (Glide x7, several prices) | Medium | Phase 0 |
| 14 | Uncommitted work: `data/home.ts`, `data/products-data.ts` (Arctic detail pages) | Info | Commit when reviewed |

---

## 13. Key facts cheat-sheet (copy/paste)

- **Company:** GreenPulse Wellness (brand tagline in code: "Purpose-led Wellness Tech & Products")
- **Site:** https://greenpulsewellness.com
- **WhatsApp / phone:** +91 75500 22504 (`wa.me/917550022504`)
- **Email (to confirm):** hello@greenpulsewellness.com
- **Region:** India (pan-India delivery, installation, AMC); global procurement
- **Solutions:** Recover & Restore · AgeWell · Rehabilitate · Live Well
- **Modalities:** infrared heat · cold immersion/cryo · photobiomodulation (660 nm + 850 nm) · mild hyperbaric (1.3–1.5 ATA) · pneumatic compression (up to 240 mmHg) · robotic SL-track massage · rehab tables/mobility
- **Brand families:** Halo · Arctic · Luma · Luma Beam · Oxa · Serene · PulseWave · Thrum · Ember/Aurora · Frostfire · Glide
- **Hard copy rule:** wellness language only; never diagnose, treat or cure.
- **Process:** Consult → Curate → Source & Import → Install & Train → Service & Support.
- **Stack:** Next.js 16, React 19, Tailwind 4, Sanity, Lenis, Motion, Geist.

---

## 14. Prompt to reuse this file with an AI assistant

> You are the brand and product strategist for GreenPulse Wellness. Use the attached master context as ground truth. Where it marks [CONFLICT], ask me to decide before writing final copy. Follow the voice rules in §2.2 (wellness language only, no medical claims, no prices on the site). Use the branded product names from §6.1, never supplier model names or third-party trademarks. Task: …
