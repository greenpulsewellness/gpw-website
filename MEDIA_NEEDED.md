# Media needed — Home page

Every slot below currently renders a labelled oat/wood placeholder frame.
To go live: drop the file into `/public/media/...` (suggested paths below), then set
`src` (and `poster` for videos) on the matching slot in `data/home.ts`. Slot ids match
the `id` field in that file.

**Art direction:** photograph equipment like premium hardware — clean, warm, calm
light; neutral oat/warm-white/timber backdrops; real spaces over lifestyle posing.
No stock yoga, no gradients or glows added in post, no medical/clinical staging.

**Video specs (all loops):** H.264 MP4 (optionally also WebM), muted (no audio track),
seamless loop, 24–30 fps, keep under ~4 MB for hover loops and ~8 MB for full-bleed.
Every video needs a **poster JPG** = its first frame, same aspect ratio.
Keep the subject centred — full-bleed videos crop to portrait on mobile (375px).

**Images:** JPG/WebP, long edge ≥ 2400px for full-width slots, ≥ 1600px otherwise.
`next/image` generates the responsive sizes.

---

## 0. Brand

| Slot | File | Notes |
|---|---|---|
| Logo | `/public/logo.svg` | **Current file is a placeholder.** Replace with final artwork, same filename. Single-colour deep green (#16392E) — it is auto-inverted to white over the hero/video sections. ~6:1 horizontal lockup. |

## 2. Hero

| Slot id | Type | Aspect | Duration | Suggested path | Brief |
|---|---|---|---|---|---|
| `hero-loop` | Video + poster | 16:9 (safe centre crop to 9:16) | 12–20s seamless loop | `/media/hero/hero-loop.mp4`, `hero-poster.jpg` | Slow dolly / light moving across hero equipment (HBOT, sauna, red-light) in a warm-lit suite. Dark overlay is applied on top — avoid busy detail behind the headline (lower-left). Loads eagerly: keep ≤ 8 MB. |

## 3. Solutions bento (image + hover loop per tile)

Tiles change shape by breakpoint — keep subjects centred.

| Slot id | Type | Aspect | Duration | Suggested path | Brief |
|---|---|---|---|---|---|
| `solution-recover` | Image | 4:3 | — | `/media/solutions/recover.jpg` | Recovery suite: sauna + compression + seating. Largest tile. |
| `solution-recover-hover` | Video + poster | 4:3 | 4–6s loop | `/media/solutions/recover-hover.mp4` | Subtle motion: sauna door opening, steam, light shift. |
| `solution-agewell` | Image | 16:10 | — | `/media/solutions/agewell.jpg` | Senior living residence, mobility equipment / massage chair. |
| `solution-agewell-hover` | Video + poster | 16:10 | 4–6s loop | `/media/solutions/agewell-hover.mp4` | Chair reclining, wheelchair folding. |
| `solution-livewell` | Image | 4:3 | — | `/media/solutions/livewell.jpg` | Clinic / homecare room with equipment. |
| `solution-livewell-hover` | Video + poster | 4:3 | 4–6s loop | `/media/solutions/livewell-hover.mp4` | Equipment being set up at home (rental). |
| `solution-rehabilitate` | Image | 1:1 | — | `/media/solutions/rehabilitate.jpg` | Physio studio with compression boots / analyzer. Smallest tile. |
| `solution-rehabilitate-hover` | Video + poster | 1:1 | 4–6s loop | `/media/solutions/rehabilitate-hover.mp4` | Compression boots inflating. |

The four solution stills are also reused as thumbnails in the mobile menu.

## 4. Equipment rail — product shots

All: **4:5 image**, product on a seamless neutral (warm white / oat) backdrop,
consistent camera height, lighting and shadow across the set so the rail reads as one family.

| Slot id | Suggested path | Product |
|---|---|---|
| `product-infrared-sauna` | `/media/products/infrared-sauna.jpg` | Infrared Sauna Chamber |
| `product-hbot` | `/media/products/hbot.jpg` | HBOT Chamber (Hardshell) |
| `product-cryo` | `/media/products/cryo.jpg` | Cryo Chamber |
| `product-red-light-bed` | `/media/products/red-light-bed.jpg` | Red Light Therapy Bed |
| `product-compression-boots` | `/media/products/compression-boots.jpg` | Compression Boots |
| `product-body-composition` | `/media/products/body-composition.jpg` | Body Composition Analyzer |
| `product-massage-chairs` | `/media/products/massage-chair.jpg` | Massage Chairs |
| `product-wheelchairs` | `/media/products/wheelchair.jpg` | Electric & Foldable Wheelchairs |

## 5. Spotlight (pinned media)

Shown 4:5 on mobile, ~16:11 on tablet, and as a tall pinned panel (~7/12 width,
full viewport height) on desktop — compose for a centred subject with generous margins.

| Slot id | Type | Aspect | Duration | Suggested path | Brief |
|---|---|---|---|---|---|
| `spotlight-hbot` | Video + poster | 4:5 | 8–12s loop | `/media/spotlight/hbot.mp4` | Hero render/footage of the hardshell chamber: slow orbit, door detail. |
| `spotlight-infrared-sauna` | Video + poster | 4:5 | 8–12s loop | `/media/spotlight/infrared-sauna.mp4` | Timber interior, emitters warming up. |
| `spotlight-red-light-bed` | Video + poster | 4:5 | 8–12s loop | `/media/spotlight/red-light-bed.mp4` | Lid closing, red panels glowing in a dim room. |

## 6. Who we equip

All: **4:5 image**, real interiors fitted with equipment (no people required).

| Slot id | Configured path | Status | Setting |
|---|---|---|---|
| `audience-longevity` | `/Target client/audience-longevity.png` | Active | Wellness & longevity centre |
| `audience-hotel-spa` | `/Target client/audience-hotel.jpg` | Active | Hotel spa / residential wellness |
| `audience-gyms` | `/Target client/audience-gyms.jpg` | Active | Premium gym / sports centre recovery zone |
| `audience-physio` | `/Target client/audience-physio.jpg` | Active | Physio / chiropractic clinic |
| `audience-senior-living` | `/Target client/audience-seniorliving.jpg` | Active | Senior living residence |
| `audience-hospitals` | `/Target client/audience-hospital.jpg` | Active | Hospital room / homecare setting |

## 9. Experience it

| Slot id | Type | Aspect | Duration | Suggested path | Brief |
|---|---|---|---|---|---|
| `experience-loop` | Video + poster | 21:9 (safe centre crop to 4:5) | 15–25s loop | `/media/experience/experience-loop.mp4` | Showroom or expo walk-through: visitors trying equipment. Dark overlay applied — keep lower-left calm for the headline. |

---

**Total:** 1 logo · 1 hero video · 4 solution stills + 4 hover loops · 8 product shots ·
3 spotlight videos · 6 audience images · 1 experience video = **27 assets**
(+ 9 video posters).
