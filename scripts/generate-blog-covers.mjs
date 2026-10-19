/**
 * Generates the 1600×900 blog cover images into /public/blog.
 * Each cover is an original vector illustration (themed scene + ambient background) rendered with sharp.
 *
 *   node scripts/generate-blog-covers.mjs            → all covers
 *   node scripts/generate-blog-covers.mjs <slug>     → one cover
 *   node scripts/generate-blog-covers.mjs --sheet    → also writes a contact sheet to $SHEET_OUT
 */
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "blog");
const W = 1600;
const H = 900;

/* ------------------------------------------------------------------ */
/* Palettes                                                            */
/* ------------------------------------------------------------------ */

const THEMES = {
  heat: { a: "#ff8a2b", b: "#ffd39a", c: "#8a2f08", bg1: "#0e0704", bg2: "#2b1106", wood: ["#a8693a", "#5b3017"] },
  cold: { a: "#5fd4ff", b: "#d8f4ff", c: "#0a5c8a", bg1: "#050d14", bg2: "#0b2233", wood: ["#9fb7c6", "#4d6677"] },
  light: { a: "#ff3b57", b: "#ffb3bf", c: "#7a0f25", bg1: "#10050a", bg2: "#2a0a15", wood: ["#8a5a64", "#40242b"] },
  air: { a: "#37e0b8", b: "#b9f5e6", c: "#0b6b58", bg1: "#04100d", bg2: "#08271f", wood: ["#7fa89c", "#33564c"] },
  relax: { a: "#b58cff", b: "#e4d3ff", c: "#4a2a8f", bg1: "#09050f", bg2: "#1a0e30", wood: ["#8b7aa8", "#3d3354"] },
  business: { a: "#e8c27a", b: "#fff0cf", c: "#7a5a1e", bg1: "#0a0906", bg2: "#221c0e", wood: ["#b59a64", "#5e4d2b"] },
  mobility: { a: "#7fd6a0", b: "#d7f5e2", c: "#1f6b43", bg1: "#050e09", bg2: "#0d2418", wood: ["#8fb09a", "#3d5c49"] },
};

/* ------------------------------------------------------------------ */
/* Scenes — drawn in a local 800×600 box                               */
/* ------------------------------------------------------------------ */

const dots = (x0, y0, cols, rows, dx, dy, r, fill, op = 1) => {
  let s = "";
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) s += `<circle cx="${x0 + i * dx}" cy="${y0 + j * dy}" r="${r}" fill="${fill}" opacity="${op}"/>`;
  return s;
};

const SCENES = {
  sauna: (t, o = {}) => {
    const w = 300 * (o.w ?? 1);
    const x = 400 - w / 2;
    let slats = "";
    for (let i = x + 16; i < x + w; i += 16) slats += `<line x1="${i}" y1="62" x2="${i}" y2="538" stroke="#000" stroke-opacity=".22"/>`;
    const heaters = [0.18, 0.5, 0.82]
      .map((f) => `<rect x="${x + w * f - 7}" y="150" width="14" height="260" rx="7" fill="${t.a}" opacity=".9" filter="url(#blur6)"/><rect x="${x + w * f - 3}" y="155" width="6" height="250" rx="3" fill="${t.b}"/>`)
      .join("");
    return `
    <ellipse cx="400" cy="548" rx="${w * 0.78}" ry="26" fill="${t.a}" opacity=".35" filter="url(#blur20)"/>
    <rect x="${x - 14}" y="44" width="${w + 28}" height="500" rx="14" fill="url(#wood)"/>
    <rect x="${x}" y="62" width="${w}" height="476" rx="6" fill="url(#wood)"/>${slats}
    <rect x="${x + 24}" y="100" width="${w - 48}" height="400" rx="10" fill="#120804"/>
    <rect x="${x + 24}" y="100" width="${w - 48}" height="400" rx="10" fill="url(#glowA)" opacity=".9"/>
    ${heaters}
    <rect x="${x + 40}" y="380" width="${w - 80}" height="26" rx="4" fill="${t.wood[1]}" opacity=".95"/>
    <rect x="${x + 24}" y="100" width="${w - 48}" height="400" rx="10" fill="url(#glass)"/>
    <rect x="${x + w - 52}" y="260" width="10" height="110" rx="5" fill="${t.b}" opacity=".9"/>
    <rect x="${x + w * 0.5 - 40}" y="50" width="80" height="6" rx="3" fill="${t.b}" filter="url(#blur3)"/>`;
  },

  heaters: (t) => `
    <rect x="70" y="110" width="290" height="380" rx="18" fill="#15181d" stroke="${t.a}" stroke-opacity=".5" stroke-width="2"/>
    ${dots(105, 150, 8, 10, 31, 33, 9, t.a, 0.55)}
    <rect x="80" y="120" width="270" height="360" rx="14" fill="url(#glowA)" opacity=".6"/>
    ${[0, 1, 2, 3, 4]
      .map((i) => `<rect x="${470 + i * 52}" y="110" width="30" height="380" rx="15" fill="${t.a}" opacity=".85" filter="url(#blur6)"/><rect x="${477 + i * 52}" y="118" width="16" height="364" rx="8" fill="${t.b}"/>`)
      .join("")}
    <line x1="400" y1="90" x2="400" y2="510" stroke="${t.b}" stroke-opacity=".4" stroke-dasharray="6 10" stroke-width="2"/>
    <circle cx="400" cy="300" r="26" fill="#0c0c0f" stroke="${t.b}" stroke-opacity=".7" stroke-width="2"/>
    <path d="M388 300 l9 9 l17 -19" stroke="${t.b}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  spectrum: (t) => {
    const cols = ["#ff2d3d", "#ff6a1a", "#ffb020", "#7a1fff", "#3a3a6a"];
    let waves = "";
    cols.forEach((c, i) => {
      const amp = 70 - i * 10;
      const len = 90 + i * 55;
      let d = `M40 ${150 + i * 72}`;
      for (let x = 0; x < 720; x += 10) d += ` L${40 + x} ${150 + i * 72 + Math.sin((x / len) * Math.PI * 2) * amp * 0.5}`;
      waves += `<path d="${d}" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".95" filter="url(#blur1)"/>`;
    });
    return `
    <rect x="30" y="90" width="740" height="400" rx="20" fill="#0b0b10" stroke="${t.a}" stroke-opacity=".3"/>
    ${waves}
    <rect x="30" y="520" width="740" height="26" rx="13" fill="url(#spec)"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => `<line x1="${60 + i * 62}" y1="552" x2="${60 + i * 62}" y2="${i % 3 === 0 ? 572 : 564}" stroke="${t.b}" stroke-opacity=".6"/>`).join("")}`;
  },

  floorplan: (t) => `
    <rect x="60" y="70" width="680" height="460" rx="10" fill="#0d0e12" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <path d="M60 300 H400 M400 70 V300 M400 300 V530 M560 300 H740" stroke="${t.b}" stroke-opacity=".6" stroke-width="3" fill="none"/>
    <path d="M330 300 a38 38 0 0 1 38 -38" stroke="${t.a}" stroke-opacity=".8" fill="none" stroke-width="2"/>
    <path d="M400 430 a38 38 0 0 0 38 38" stroke="${t.a}" stroke-opacity=".8" fill="none" stroke-width="2"/>
    <rect x="100" y="110" width="140" height="110" rx="8" fill="${t.a}" opacity=".85"/>
    <rect x="260" y="110" width="100" height="110" rx="8" fill="${t.a}" opacity=".5"/>
    <circle cx="560" cy="180" r="62" fill="#5fd4ff" opacity=".55"/>
    <circle cx="560" cy="180" r="62" fill="none" stroke="${t.b}" stroke-opacity=".8" stroke-width="3"/>
    <rect x="110" y="350" width="120" height="70" rx="12" fill="#b58cff" opacity=".6"/>
    <rect x="250" y="350" width="110" height="70" rx="12" fill="#b58cff" opacity=".35"/>
    <rect x="470" y="350" width="240" height="40" rx="10" fill="${t.b}" opacity=".35"/>
    <rect x="470" y="410" width="240" height="40" rx="10" fill="${t.b}" opacity=".2"/>
    <g stroke="${t.b}" stroke-opacity=".7" stroke-width="2" fill="none"><path d="M60 560 H740 M60 550 v20 M740 550 v20"/><path d="M780 70 V530 M770 70 h20 M770 530 h20"/></g>
    <circle cx="90" cy="500" r="16" fill="#7fd6a0" opacity=".7"/><circle cx="370" cy="500" r="12" fill="#7fd6a0" opacity=".6"/>`,

  blanket: (t) => {
    let quilt = "";
    for (let i = 0; i < 9; i++) quilt += `<path d="M${210 + i * 66} 150 L${150 + i * 66 - 50} 330 L${210 + i * 66 - 150} 470" stroke="${t.b}" stroke-opacity=".28" stroke-width="2" fill="none"/>`;
    for (let i = 0; i < 9; i++) quilt += `<path d="M${130 + i * 66} 120 L${200 + i * 66 + 60} 300 L${130 + i * 66 + 150} 480" stroke="${t.b}" stroke-opacity=".28" stroke-width="2" fill="none"/>`;
    return `
    <ellipse cx="410" cy="520" rx="330" ry="30" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <path d="M150 150 Q400 90 680 160 L700 470 Q420 540 130 470 Z" fill="url(#cloth)"/>
    <clipPath id="bc"><path d="M150 150 Q400 90 680 160 L700 470 Q420 540 130 470 Z"/></clipPath>
    <g clip-path="url(#bc)">${quilt}<rect x="150" y="100" width="560" height="440" fill="url(#glowA)" opacity=".7"/></g>
    <path d="M150 150 Q400 90 680 160 L700 470 Q420 540 130 470 Z" fill="none" stroke="${t.a}" stroke-width="4" opacity=".9"/>
    <rect x="70" y="170" width="86" height="300" rx="43" fill="${t.wood[1]}" stroke="${t.a}" stroke-opacity=".7" stroke-width="3"/>
    <ellipse cx="113" cy="170" rx="43" ry="16" fill="${t.a}" opacity=".7"/>
    <rect x="620" y="440" width="90" height="46" rx="12" fill="#0d0d11" stroke="${t.b}" stroke-opacity=".7"/>
    <circle cx="650" cy="463" r="9" fill="${t.a}"/><circle cx="682" cy="463" r="9" fill="${t.b}" opacity=".6"/>`;
  },

  timer: (t) => `
    <circle cx="300" cy="310" r="210" fill="#0d0d11" stroke="${t.b}" stroke-opacity=".5" stroke-width="3"/>
    <circle cx="300" cy="310" r="180" fill="none" stroke="${t.a}" stroke-opacity=".25" stroke-width="26"/>
    <path d="M300 130 A180 180 0 1 1 138 389" stroke="${t.a}" stroke-width="26" fill="none" stroke-linecap="round" filter="url(#blur1)"/>
    ${Array.from({ length: 60 }, (_, i) => {
      const a = (i / 60) * Math.PI * 2;
      const r1 = i % 5 === 0 ? 135 : 145;
      return `<line x1="${300 + Math.sin(a) * r1}" y1="${310 - Math.cos(a) * r1}" x2="${300 + Math.sin(a) * 152}" y2="${310 - Math.cos(a) * 152}" stroke="${t.b}" stroke-opacity=".65"/>`;
    }).join("")}
    <line x1="300" y1="310" x2="300" y2="190" stroke="${t.b}" stroke-width="6" stroke-linecap="round"/>
    <line x1="300" y1="310" x2="370" y2="350" stroke="${t.a}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="300" cy="310" r="12" fill="${t.a}"/>
    <rect x="560" y="120" width="56" height="320" rx="28" fill="#0d0d11" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <rect x="574" y="250" width="28" height="170" rx="14" fill="${t.a}" filter="url(#blur3)"/>
    <circle cx="588" cy="470" r="52" fill="#0d0d11" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <circle cx="588" cy="470" r="38" fill="${t.a}" opacity=".9"/>
    ${[0, 1, 2, 3].map((i) => `<line x1="630" y1="${150 + i * 70}" x2="670" y2="${150 + i * 70}" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>`).join("")}`,

  plunge: (t) => `
    <ellipse cx="380" cy="505" rx="360" ry="24" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <path d="M90 250 H590 L570 490 Q565 505 548 505 H132 Q115 505 110 490 Z" fill="url(#tub)"/>
    <path d="M118 285 H562 L548 480 H132 Z" fill="url(#water)"/>
    <path d="M118 285 q28 -16 56 0 t56 0 t56 0 t56 0 t56 0 t56 0 t56 0 t56 0" stroke="${t.b}" stroke-width="4" fill="none" opacity=".9"/>
    <path d="M150 340 q28 -12 56 0 t56 0 t56 0 t56 0 t56 0 t56 0" stroke="${t.b}" stroke-opacity=".45" stroke-width="3" fill="none"/>
    ${[[200, 300, 28, 18], [270, 312, 22, -12], [330, 296, 26, 30], [420, 308, 24, -25], [480, 298, 30, 10]]
      .map(([x, y, s, r]) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="6" fill="${t.b}" opacity=".8" transform="rotate(${r} ${x + s / 2} ${y + s / 2})"/>`)
      .join("")}
    <rect x="615" y="320" width="130" height="185" rx="16" fill="#1b2128" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <circle cx="680" cy="410" r="44" fill="#0b0f13" stroke="${t.b}" stroke-opacity=".5"/>
    ${[0, 60, 120, 180, 240, 300].map((r) => `<path d="M680 410 q-14 -38 0 -40 q14 8 0 40" fill="${t.a}" opacity=".85" transform="rotate(${r} 680 410)"/>`).join("")}
    <circle cx="680" cy="410" r="7" fill="${t.b}"/>
    <rect x="636" y="340" width="40" height="8" rx="4" fill="${t.a}"/><circle cx="716" cy="344" r="5" fill="${t.b}"/>
    <path d="M590 355 H615 M590 460 H615" stroke="${t.a}" stroke-width="8" stroke-linecap="round" opacity=".8"/>
    ${[[160, 240, 9], [210, 214, 6], [520, 232, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${t.b}" stroke-opacity=".6"/>`).join("")}`,

  roundplunge: (t) => `
    <ellipse cx="400" cy="512" rx="250" ry="28" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <rect x="215" y="250" width="370" height="250" rx="22" fill="url(#tub)"/>
    <ellipse cx="400" cy="250" rx="185" ry="48" fill="#e9f7ff"/>
    <ellipse cx="400" cy="254" rx="164" ry="38" fill="url(#water)"/>
    <ellipse cx="400" cy="254" rx="110" ry="24" fill="none" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <ellipse cx="400" cy="254" rx="52" ry="11" fill="none" stroke="${t.b}" stroke-opacity=".8" stroke-width="3"/>
    <rect x="215" y="330" width="370" height="6" fill="#000" opacity=".15"/><rect x="215" y="420" width="370" height="6" fill="#000" opacity=".15"/>
    ${[[330, 160, 38], [410, 120, 52], [490, 168, 34], [370, 90, 26]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${t.b}" opacity=".18" filter="url(#blur6)"/>`).join("")}
    <rect x="590" y="400" width="110" height="100" rx="14" fill="#1b2128" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <circle cx="645" cy="450" r="30" fill="#0b0f13" stroke="${t.b}" stroke-opacity=".5"/>
    <circle cx="645" cy="450" r="6" fill="${t.a}"/>
    <path d="M585 430 H590 M585 470 H590" stroke="${t.a}" stroke-width="7" stroke-linecap="round"/>`,

  cryo: (t) => `
    <ellipse cx="400" cy="540" rx="190" ry="22" fill="${t.a}" opacity=".35" filter="url(#blur20)"/>
    ${[[250, 520, 70], [330, 548, 54], [470, 540, 62], [560, 522, 74], [400, 556, 50]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${t.b}" opacity=".22" filter="url(#blur12)"/>`).join("")}
    <rect x="305" y="110" width="190" height="420" rx="40" fill="url(#tub)"/>
    <rect x="325" y="130" width="150" height="300" rx="28" fill="#08131c"/>
    <rect x="325" y="130" width="150" height="300" rx="28" fill="url(#glowA)" opacity=".8"/>
    <circle cx="400" cy="205" r="34" fill="${t.b}" opacity=".35"/><rect x="368" y="236" width="64" height="150" rx="30" fill="${t.b}" opacity=".2"/>
    <rect x="340" y="448" width="120" height="50" rx="10" fill="#0b0f13" stroke="${t.a}" stroke-opacity=".6"/>
    <path d="M360 473 h24 m-12 -12 v24 m38 -12 h24" stroke="${t.b}" stroke-width="3" stroke-linecap="round"/>
    <g stroke="${t.b}" stroke-width="3" stroke-linecap="round" opacity=".85">${[0, 60, 120].map((r) => `<line x1="670" y1="170" x2="670" y2="240" transform="rotate(${r} 670 205)"/>`).join("")}</g>
    <circle cx="670" cy="205" r="6" fill="${t.b}"/>`,

  filter: (t) => `
    <ellipse cx="400" cy="540" rx="260" ry="22" fill="${t.a}" opacity=".28" filter="url(#blur20)"/>
    <rect x="270" y="190" width="260" height="330" rx="34" fill="url(#tub)"/>
    <rect x="290" y="210" width="220" height="290" rx="22" fill="#0a141c"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${300 + i * 34}" y="228" width="22" height="254" rx="11" fill="${t.a}" opacity="${0.35 + (i % 3) * 0.2}"/>`).join("")}
    <rect x="360" y="140" width="80" height="60" rx="10" fill="#222b34"/>
    <path d="M530 270 H640 V420 H530" stroke="${t.a}" stroke-width="16" fill="none" stroke-linecap="round" opacity=".85"/>
    <path d="M270 270 H160 V420 H270" stroke="${t.b}" stroke-width="16" fill="none" stroke-linecap="round" opacity=".5"/>
    <path d="M400 70 q46 66 0 100 q-46 -34 0 -100Z" fill="url(#water)" stroke="${t.b}" stroke-width="3"/>
    <circle cx="660" cy="150" r="9" fill="none" stroke="${t.b}" stroke-opacity=".7"/><circle cx="130" cy="190" r="6" fill="none" stroke="${t.b}" stroke-opacity=".7"/>
    <circle cx="400" cy="415" r="50" fill="#0b0f13" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <path d="M376 415 l16 16 l32 -34" stroke="${t.a}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  panel: (t) => `
    <ellipse cx="400" cy="548" rx="190" ry="20" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <polygon points="610,150 790,60 790,420 610,360" fill="url(#beam)" opacity=".75"/>
    <rect x="120" y="100" width="500" height="290" rx="20" fill="#14151a" stroke="${t.a}" stroke-opacity=".55" stroke-width="3"/>
    <rect x="132" y="112" width="476" height="266" rx="14" fill="url(#glowA)" opacity=".75"/>
    ${dots(168, 150, 15, 7, 31, 34, 8.5, t.a, 0.95)}
    ${dots(168, 150, 15, 7, 31, 34, 3.5, t.b, 0.95)}
    <rect x="362" y="390" width="16" height="130" fill="#2a2d34"/>
    <rect x="262" y="520" width="216" height="16" rx="8" fill="#23262c"/>
    <circle cx="272" cy="548" r="11" fill="#14151a" stroke="${t.b}" stroke-opacity=".4"/><circle cx="468" cy="548" r="11" fill="#14151a" stroke="${t.b}" stroke-opacity=".4"/>`,

  stand: (t) => `
    <ellipse cx="400" cy="548" rx="170" ry="18" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <polygon points="500,120 790,40 790,500 500,430" fill="url(#beam)" opacity=".6"/>
    <rect x="310" y="40" width="190" height="400" rx="26" fill="#14151a" stroke="${t.a}" stroke-opacity=".55" stroke-width="3"/>
    <rect x="322" y="52" width="166" height="376" rx="18" fill="url(#glowA)" opacity=".75"/>
    ${dots(350, 84, 5, 10, 31, 34, 8.5, t.a, 0.95)}${dots(350, 84, 5, 10, 31, 34, 3.5, t.b, 0.95)}
    <rect x="396" y="440" width="18" height="90" fill="#2a2d34"/>
    <rect x="290" y="528" width="230" height="20" rx="10" fill="#23262c"/>
    <circle cx="316" cy="564" r="13" fill="#14151a" stroke="${t.b}" stroke-opacity=".5"/><circle cx="494" cy="564" r="13" fill="#14151a" stroke="${t.b}" stroke-opacity=".5"/>`,

  bed: (t) => `
    <ellipse cx="400" cy="520" rx="340" ry="22" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <path d="M70 330 Q70 150 400 130 Q730 150 730 330 Z" fill="#17181d" stroke="${t.a}" stroke-opacity=".5" stroke-width="3"/>
    <path d="M110 330 Q110 185 400 168 Q690 185 690 330 Z" fill="url(#glowA)"/>
    ${dots(190, 215, 14, 3, 31, 34, 8.5, t.a, 0.95)}${dots(190, 215, 14, 3, 31, 34, 3.5, t.b, 0.95)}
    <rect x="60" y="340" width="680" height="64" rx="22" fill="url(#cloth)" stroke="${t.a}" stroke-opacity=".5" stroke-width="2"/>
    <rect x="60" y="404" width="680" height="22" rx="10" fill="#101116"/>
    <ellipse cx="400" cy="318" rx="110" ry="22" fill="${t.b}" opacity=".18"/>
    <rect x="110" y="426" width="22" height="90" rx="8" fill="#1d1f25"/><rect x="668" y="426" width="22" height="90" rx="8" fill="#1d1f25"/>
    <rect x="300" y="420" width="200" height="14" rx="7" fill="${t.a}" filter="url(#blur3)"/>`,

  mask: (t) => `
    <ellipse cx="400" cy="300" rx="260" ry="290" fill="${t.a}" opacity=".16" filter="url(#blur20)"/>
    <path d="M310 470 Q400 520 490 470 L500 560 Q400 600 300 560 Z" fill="#1b1c22" stroke="${t.a}" stroke-opacity=".5" stroke-width="2"/>
    ${dots(332, 505, 7, 3, 22, 20, 4, t.a, 0.9)}
    <ellipse cx="400" cy="290" rx="148" ry="195" fill="url(#skin)"/>
    <path d="M255 250 Q400 175 545 250 Q560 345 520 410 Q470 468 400 470 Q330 468 280 410 Q240 345 255 250Z" fill="#17181d" stroke="${t.a}" stroke-opacity=".7" stroke-width="3"/>
    <ellipse cx="340" cy="300" rx="38" ry="20" fill="#050505"/><ellipse cx="460" cy="300" rx="38" ry="20" fill="#050505"/>
    ${dots(290, 215, 11, 1, 22, 0, 4.5, t.a, 0.95)}
    ${dots(278, 252, 12, 1, 22, 0, 4.5, t.b, 0.9)}
    ${dots(268, 340, 3, 1, 14, 0, 4.5, t.a, 0.9)}${dots(498, 340, 3, 1, 14, 0, 4.5, t.a, 0.9)}
    ${dots(292, 385, 10, 1, 24, 0, 4.5, t.b, 0.9)}${dots(318, 425, 8, 1, 24, 0, 4.5, t.a, 0.9)}
    <path d="M255 260 Q200 300 215 360 M545 260 Q600 300 585 360" stroke="${t.a}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>`,

  handheld: (t) => `
    <ellipse cx="400" cy="548" rx="300" ry="20" fill="${t.a}" opacity=".25" filter="url(#blur20)"/>
    <path d="M60 560 Q120 360 320 340 Q520 330 600 420 Q650 480 660 560 Z" fill="url(#skin)"/>
    <ellipse cx="420" cy="352" rx="150" ry="36" fill="${t.a}" opacity=".5" filter="url(#blur12)"/>
    ${[110, 76, 44].map((r, i) => `<ellipse cx="420" cy="352" rx="${r * 1.7}" ry="${r * 0.45}" fill="none" stroke="${t.b}" stroke-opacity="${0.25 + i * 0.22}" stroke-width="2"/>`).join("")}
    <polygon points="330,230 510,230 560,352 280,352" fill="url(#beam2)" opacity=".85"/>
    <g transform="rotate(-24 400 160)">
      <rect x="360" y="40" width="80" height="150" rx="22" fill="#1a1b21" stroke="${t.a}" stroke-opacity=".7" stroke-width="3"/>
      <rect x="372" y="150" width="56" height="30" rx="10" fill="#0d0d11"/>
      ${dots(378, 60, 3, 4, 22, 22, 6, t.a, 1)}
      <rect x="378" y="188" width="44" height="260" rx="22" fill="#16171c" stroke="${t.b}" stroke-opacity=".4" stroke-width="2"/>
      <circle cx="400" cy="244" r="12" fill="${t.a}"/>
    </g>`,

  hbot: (t) => `
    <ellipse cx="400" cy="538" rx="340" ry="22" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <rect x="70" y="200" width="620" height="250" rx="120" fill="url(#tub)"/>
    <rect x="95" y="225" width="570" height="200" rx="100" fill="#0a1512"/>
    <rect x="95" y="225" width="570" height="200" rx="100" fill="url(#glowA)" opacity=".5"/>
    <circle cx="190" cy="325" r="78" fill="#0a1512" stroke="${t.b}" stroke-opacity=".7" stroke-width="5"/>
    <circle cx="190" cy="325" r="70" fill="url(#glass)"/>
    <circle cx="190" cy="300" r="22" fill="${t.b}" opacity=".35"/><path d="M155 372 q35 -52 70 0Z" fill="${t.b}" opacity=".3"/>
    ${[290, 360, 430, 500].map((x) => `<line x1="${x}" y1="205" x2="${x}" y2="445" stroke="#000" stroke-opacity=".14" stroke-width="5"/>`).join("")}
    <circle cx="590" cy="320" r="46" fill="#0b0f13" stroke="${t.b}" stroke-opacity=".7" stroke-width="3"/>
    ${Array.from({ length: 9 }, (_, i) => { const a = -2.4 + i * 0.6; return `<line x1="${590 + Math.cos(a) * 36}" y1="${320 + Math.sin(a) * 36}" x2="${590 + Math.cos(a) * 42}" y2="${320 + Math.sin(a) * 42}" stroke="${t.b}" stroke-opacity=".7"/>`; }).join("")}
    <line x1="590" y1="320" x2="614" y2="300" stroke="${t.a}" stroke-width="4" stroke-linecap="round"/>
    <rect x="110" y="450" width="40" height="70" rx="8" fill="#1d2523"/><rect x="610" y="450" width="40" height="70" rx="8" fill="#1d2523"/>
    <rect x="700" y="400" width="90" height="120" rx="14" fill="#1b2422" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <path d="M690 340 Q745 340 745 400" stroke="${t.a}" stroke-width="10" fill="none" stroke-linecap="round" opacity=".85"/>
    <circle cx="745" cy="455" r="22" fill="none" stroke="${t.b}" stroke-width="3"/><circle cx="738" cy="450" r="5" fill="${t.a}"/><circle cx="752" cy="462" r="5" fill="${t.b}"/>`,

  shield: (t) => `
    <ellipse cx="400" cy="548" rx="200" ry="20" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <path d="M400 50 L610 130 V300 Q610 450 400 550 Q190 450 190 300 V130 Z" fill="url(#tub)" stroke="${t.a}" stroke-width="4"/>
    <path d="M400 90 L572 154 V300 Q572 424 400 508 Q228 424 228 300 V154 Z" fill="#0a1512"/>
    <path d="M400 90 L572 154 V300 Q572 424 400 508 Q228 424 228 300 V154 Z" fill="url(#glowA)" opacity=".7"/>
    <path d="M320 300 l56 60 l112 -128" stroke="${t.b}" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#blur3)"/>
    <path d="M320 300 l56 60 l112 -128" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  boots: (t) => {
    const leg = (cx, n, segH) => {
      let s = "";
      for (let i = 0; i < n; i++) {
        const y = 80 + i * (segH - 14);
        const wv = 120 - i * (40 / n) + (i === n - 1 ? -20 : 0);
        s += `<rect x="${cx - wv / 2}" y="${y}" width="${wv}" height="${segH}" rx="${segH / 2.4}" fill="url(#cloth)" stroke="${t.a}" stroke-opacity="${0.4 + i * 0.1}" stroke-width="3"/>
              <rect x="${cx - wv / 2 + 14}" y="${y + segH / 2 - 4}" width="${wv - 28}" height="8" rx="4" fill="${t.a}" opacity="${0.35 + i * 0.1}" filter="url(#blur3)"/>`;
      }
      return s;
    };
    return `
    <ellipse cx="400" cy="548" rx="290" ry="20" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    ${leg(280, 5, 96)}${leg(520, 5, 96)}
    <path d="M222 472 Q200 540 160 540 H300 Q340 540 330 490Z" fill="#1c1a24" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <path d="M578 472 Q600 540 640 540 H500 Q460 540 470 490Z" fill="#1c1a24" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <rect x="352" y="250" width="96" height="140" rx="16" fill="#14131b" stroke="${t.b}" stroke-opacity=".6" stroke-width="2"/>
    <rect x="368" y="268" width="64" height="30" rx="6" fill="${t.a}" opacity=".85"/>
    <circle cx="384" cy="340" r="10" fill="${t.b}" opacity=".8"/><circle cx="416" cy="340" r="10" fill="${t.a}" opacity=".6"/>
    <path d="M338 300 H335 Q320 300 320 280 M462 300 H465 Q480 300 480 280" stroke="${t.a}" stroke-width="8" fill="none" stroke-linecap="round" opacity=".8"/>`;
  },

  chambers: (t) => {
    const col = (x, n, label) => {
      let s = "";
      const h = 330 / n;
      for (let i = 0; i < n; i++)
        s += `<rect x="${x - 55 + i * 1.5}" y="${110 + i * h}" width="${110 - i * 3}" height="${h - 8}" rx="${Math.min(22, (h - 8) / 2)}" fill="${t.a}" opacity="${0.3 + (i / n) * 0.65}" stroke="${t.b}" stroke-opacity=".5" stroke-width="2"/>`;
      return s + `<rect x="${x - 40}" y="470" width="80" height="14" rx="7" fill="${t.b}" opacity=".5"/>`;
    };
    return `${col(190, 4)}${col(400, 6)}${col(610, 8)}
      <path d="M115 520 H265 M325 520 H475 M535 520 H685" stroke="${t.b}" stroke-opacity=".5" stroke-width="3"/>`;
  },

  chair: (t) => `
    <ellipse cx="410" cy="548" rx="330" ry="22" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <path d="M520 120 Q580 110 600 160 L540 400 Q520 440 470 440 L340 440 Q300 440 290 400 L270 330 Q270 300 300 300 L440 300 Z" fill="url(#cloth)" stroke="${t.a}" stroke-opacity=".55" stroke-width="3"/>
    <rect x="500" y="60" width="86" height="70" rx="30" fill="#1b1a24" stroke="${t.a}" stroke-opacity=".6" stroke-width="3" transform="rotate(14 543 95)"/>
    <path d="M300 330 Q160 345 110 500 L190 520 Q230 430 330 420 Z" fill="url(#cloth)" stroke="${t.a}" stroke-opacity=".55" stroke-width="3"/>
    <rect x="270" y="440" width="270" height="34" rx="12" fill="#14131b"/><rect x="330" y="474" width="40" height="64" fill="#23212c"/><rect x="450" y="474" width="40" height="64" fill="#23212c"/><rect x="300" y="534" width="230" height="12" rx="6" fill="#23212c"/>
    <path d="M560 180 Q520 300 470 380" stroke="${t.a}" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="2 22" opacity=".9"/>
    ${[[552, 205], [538, 255], [520, 305], [502, 350]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="15" fill="${t.a}" filter="url(#blur3)"/><circle cx="${x}" cy="${y}" r="8" fill="${t.b}"/>`).join("")}
    <path d="M395 360 q-14 20 0 40 M415 350 q-16 30 0 56" stroke="${t.b}" stroke-opacity=".6" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="200" y="330" width="90" height="26" rx="13" fill="${t.a}" opacity=".7" transform="rotate(-8 245 343)"/>`,

  gun: (t) => `
    <ellipse cx="400" cy="548" rx="300" ry="20" fill="${t.a}" opacity=".25" filter="url(#blur20)"/>
    <path d="M60 540 Q80 380 260 360 Q420 350 520 420 Q640 490 700 540 Z" fill="url(#skin)"/>
    ${[40, 80, 120].map((r, i) => `<path d="M${215 - r} ${330} a${r} ${r * 0.9} 0 0 1 ${r * 2} 0" stroke="${t.a}" stroke-opacity="${0.8 - i * 0.22}" stroke-width="4" fill="none" transform="translate(0 20)"/>`).join("")}
    <circle cx="215" cy="360" r="16" fill="${t.b}" filter="url(#blur3)"/>
    <g transform="rotate(32 400 220)">
      <rect x="170" y="120" width="300" height="140" rx="58" fill="url(#tub)" stroke="${t.a}" stroke-opacity=".5" stroke-width="3"/>
      <rect x="175" y="170" width="60" height="40" rx="14" fill="#14131b"/>
      <circle cx="140" cy="190" r="30" fill="#1b1a24" stroke="${t.b}" stroke-opacity=".7" stroke-width="3"/>
      <rect x="130" y="188" width="20" height="4" fill="${t.a}"/>
      <rect x="330" y="240" width="76" height="190" rx="30" fill="#1b1a24" stroke="${t.a}" stroke-opacity=".5" stroke-width="3"/>
      <rect x="260" y="150" width="110" height="80" rx="14" fill="#0d0c12"/>
      <rect x="276" y="168" width="78" height="10" rx="5" fill="${t.a}"/><rect x="276" y="190" width="50" height="10" rx="5" fill="${t.b}" opacity=".6"/>
    </g>`,

  medallions: (t) => {
    const items = [
      { x: 200, y: 190, c: "#ff8a2b", g: `<path d="M0 -38 C22 -10 28 6 14 26 C8 36 -8 36 -14 26 C-26 8 -10 -8 0 -38Z" fill="#ffd39a"/><path d="M0 -6 C10 8 10 18 0 26 C-10 18 -10 8 0 -6Z" fill="#ff8a2b"/>` },
      { x: 600, y: 190, c: "#5fd4ff", g: `<g stroke="#d8f4ff" stroke-width="5" stroke-linecap="round">${[0, 60, 120].map((r) => `<line x1="0" y1="-38" x2="0" y2="38" transform="rotate(${r})"/>`).join("")}${[0, 60, 120, 180, 240, 300].map((r) => `<path d="M-9 -26 L0 -17 L9 -26" fill="none" transform="rotate(${r})"/>`).join("")}</g>` },
      { x: 200, y: 420, c: "#b58cff", g: `<path d="M-36 -18 q36 -22 72 0 M-36 2 q36 -22 72 0 M-36 22 q36 -22 72 0" stroke="#e4d3ff" stroke-width="6" fill="none" stroke-linecap="round"/>` },
      { x: 600, y: 420, c: "#ff3b57", g: `<circle r="16" fill="#ffb3bf"/>${[0, 45, 90, 135, 180, 225, 270, 315].map((r) => `<line x1="0" y1="-26" x2="0" y2="-40" stroke="#ffb3bf" stroke-width="6" stroke-linecap="round" transform="rotate(${r})"/>`).join("")}` },
    ];
    return `
    <path d="M200 190 L600 190 M200 190 L200 420 M600 190 L600 420 M200 420 L600 420 M200 190 L600 420 M600 190 L200 420" stroke="${t.b}" stroke-opacity=".28" stroke-width="2" stroke-dasharray="4 10" fill="none"/>
    ${items.map((it) => `<g transform="translate(${it.x} ${it.y})"><circle r="92" fill="${it.c}" opacity=".18" filter="url(#blur12)"/><circle r="80" fill="#0e0e13" stroke="${it.c}" stroke-width="3"/><circle r="66" fill="none" stroke="${it.c}" stroke-opacity=".35" stroke-width="2"/>${it.g}</g>`).join("")}
    <circle cx="400" cy="305" r="46" fill="#0e0e13" stroke="${t.a}" stroke-width="3"/><path d="M400 270 q30 20 0 70 q-30 -50 0 -70Z" fill="${t.a}" opacity=".9"/>`;
  },

  chart: (t) => `
    <ellipse cx="400" cy="540" rx="330" ry="20" fill="${t.a}" opacity=".25" filter="url(#blur20)"/>
    <rect x="60" y="70" width="680" height="440" rx="22" fill="#0e0e12" stroke="${t.b}" stroke-opacity=".35" stroke-width="2"/>
    ${[0, 1, 2, 3].map((i) => `<line x1="100" y1="${150 + i * 90}" x2="700" y2="${150 + i * 90}" stroke="${t.b}" stroke-opacity=".12"/>`).join("")}
    ${[70, 110, 150, 200, 250, 310].map((h, i) => `<rect x="${130 + i * 95}" y="${470 - h}" width="56" height="${h}" rx="10" fill="url(#bar)" opacity="${0.5 + i * 0.1}"/>`).join("")}
    <path d="M158 360 L253 330 L348 292 L443 236 L538 200 L633 132" stroke="${t.b}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${[[158, 360], [253, 330], [348, 292], [443, 236], [538, 200], [633, 132]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#0e0e12" stroke="${t.a}" stroke-width="4"/>`).join("")}
    <circle cx="680" cy="110" r="34" fill="${t.a}" stroke="${t.b}" stroke-width="3"/><circle cx="680" cy="110" r="22" fill="none" stroke="${t.c}" stroke-width="3"/>`,

  building: (t) => {
    let win = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 6; c++) {
      const lit = (r * 7 + c * 3) % 5 !== 0;
      win += `<rect x="${268 + c * 44}" y="${112 + r * 46}" width="26" height="30" rx="3" fill="${lit ? t.a : "#1a1a1f"}" opacity="${lit ? 0.5 + ((r + c) % 4) * 0.12 : 1}"/>`;
    }
    return `
    <ellipse cx="400" cy="548" rx="340" ry="20" fill="${t.a}" opacity=".25" filter="url(#blur20)"/>
    <rect x="240" y="70" width="320" height="470" rx="6" fill="#121217" stroke="${t.b}" stroke-opacity=".35" stroke-width="2"/>${win}
    <rect x="100" y="260" width="140" height="280" rx="6" fill="#0f0f14" stroke="${t.b}" stroke-opacity=".25"/><rect x="560" y="200" width="150" height="340" rx="6" fill="#0f0f14" stroke="${t.b}" stroke-opacity=".25"/>
    ${dots(124, 288, 3, 5, 38, 46, 9, t.a, 0.45)}${dots(588, 232, 3, 6, 44, 46, 9, t.a, 0.45)}
    <path d="M340 540 V470 Q400 430 460 470 V540Z" fill="${t.a}" opacity=".7"/>
    <g transform="translate(400 38)" fill="${t.b}">${[-60, -30, 0, 30, 60].map((x) => `<path transform="translate(${x} 0) scale(.9)" d="M0 -12 L3.5 -4 L12 -3 L5.5 3 L7.5 12 L0 7 L-7.5 12 L-5.5 3 L-12 -3 L-3.5 -4Z"/>`).join("")}</g>
    <path d="M60 540 H740" stroke="${t.b}" stroke-opacity=".5" stroke-width="2"/>
    <g fill="#7fd6a0" opacity=".6"><circle cx="80" cy="520" r="18"/><circle cx="725" cy="518" r="20"/></g>`;
  },

  crate: (t) => `
    <path d="M60 470 C180 330 260 520 380 430 S600 330 720 200" stroke="${t.b}" stroke-opacity=".6" stroke-width="4" stroke-dasharray="3 14" fill="none" stroke-linecap="round"/>
    <circle cx="60" cy="470" r="14" fill="${t.a}"/><circle cx="60" cy="470" r="26" fill="none" stroke="${t.a}" stroke-opacity=".5" stroke-width="2"/>
    <circle cx="720" cy="200" r="14" fill="${t.b}"/><circle cx="720" cy="200" r="26" fill="none" stroke="${t.b}" stroke-opacity=".5" stroke-width="2"/>
    <ellipse cx="400" cy="548" rx="210" ry="22" fill="${t.a}" opacity=".3" filter="url(#blur20)"/>
    <polygon points="400,150 590,240 400,330 210,240" fill="${t.wood[0]}"/>
    <polygon points="210,240 400,330 400,540 210,440" fill="${t.wood[1]}"/>
    <polygon points="590,240 400,330 400,540 590,440" fill="url(#wood)"/>
    <polygon points="372,240 430,214 508,252 450,278" fill="${t.b}" opacity=".35"/>
    <polygon points="400,330 400,540 360,520 360,310" fill="${t.b}" opacity=".3"/>
    <circle cx="500" cy="440" r="42" fill="#0d0c08" stroke="${t.a}" stroke-width="4"/>
    <path d="M480 440 l14 15 l28 -32" stroke="${t.b}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,

  home: (t) => `
    <ellipse cx="400" cy="548" rx="320" ry="20" fill="${t.a}" opacity=".25" filter="url(#blur20)"/>
    <path d="M100 300 L400 70 L700 300 V540 H100 Z" fill="#101510" stroke="${t.b}" stroke-opacity=".4" stroke-width="3"/>
    <path d="M70 312 L400 52 L730 312" stroke="${t.a}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="180" y="330" width="170" height="130" rx="10" fill="url(#glowA)"/><rect x="180" y="330" width="170" height="130" rx="10" fill="none" stroke="${t.b}" stroke-opacity=".6" stroke-width="3"/>
    <line x1="265" y1="330" x2="265" y2="460" stroke="${t.b}" stroke-opacity=".5" stroke-width="3"/><line x1="180" y1="395" x2="350" y2="395" stroke="${t.b}" stroke-opacity=".5" stroke-width="3"/>
    <rect x="470" y="380" width="120" height="160" rx="8" fill="${t.c}" opacity=".7"/><circle cx="570" cy="465" r="6" fill="${t.b}"/>
    <path d="M60 220 H250 L290 150 L340 270 L390 190 L420 220 H740" stroke="${t.b}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#blur1)" opacity=".95"/>
    <path d="M620 520 q-14 -60 20 -92 q8 50 -20 92Z M650 520 q10 -50 46 -62 q-6 46 -46 62Z" fill="#7fd6a0" opacity=".75"/>`,

  wheelchair: (t) => `
    <ellipse cx="410" cy="552" rx="330" ry="20" fill="${t.a}" opacity=".28" filter="url(#blur20)"/>
    <circle cx="270" cy="410" r="130" fill="none" stroke="#1f2a24" stroke-width="22"/><circle cx="270" cy="410" r="130" fill="none" stroke="${t.a}" stroke-opacity=".7" stroke-width="4"/>
    <circle cx="270" cy="410" r="108" fill="none" stroke="${t.b}" stroke-opacity=".5" stroke-width="3"/>
    ${Array.from({ length: 12 }, (_, i) => `<line x1="270" y1="410" x2="${270 + Math.cos((i / 12) * Math.PI * 2) * 108}" y2="${410 + Math.sin((i / 12) * Math.PI * 2) * 108}" stroke="${t.b}" stroke-opacity=".28" stroke-width="2"/>`).join("")}
    <circle cx="270" cy="410" r="22" fill="#0d1410" stroke="${t.a}" stroke-width="4"/>
    <circle cx="590" cy="500" r="46" fill="none" stroke="#1f2a24" stroke-width="14"/><circle cx="590" cy="500" r="46" fill="none" stroke="${t.a}" stroke-opacity=".6" stroke-width="3"/><circle cx="590" cy="500" r="9" fill="${t.b}"/>
    <path d="M200 160 Q192 250 232 330 L470 330 L520 220" stroke="${t.a}" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M232 330 L360 330 L430 340 L590 500 M360 330 L330 410" stroke="${t.b}" stroke-opacity=".8" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="236" y="296" width="250" height="38" rx="16" fill="url(#cloth)" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <rect x="180" y="110" width="40" height="190" rx="18" fill="url(#cloth)" stroke="${t.a}" stroke-opacity=".6" stroke-width="2"/>
    <rect x="300" y="368" width="118" height="64" rx="12" fill="#0d1410" stroke="${t.a}" stroke-width="3"/>
    <path d="M370 378 l-22 30 h24 l-14 26 l38 -38 h-26 l14 -18Z" fill="${t.b}"/>
    <rect x="450" y="190" width="90" height="16" rx="8" fill="${t.b}" transform="rotate(-18 495 198)"/>
    <path d="M60 560 H140 M30 520 H110" stroke="${t.b}" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/>`,
};

/* ------------------------------------------------------------------ */
/* Compose                                                             */
/* ------------------------------------------------------------------ */

function rand(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}

function hash(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
}

const defsFor = (t, t2) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.bg1}"/><stop offset="1" stop-color="${t.bg2}"/></linearGradient>
    <radialGradient id="glowBg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${t.a}" stop-opacity=".42"/><stop offset="1" stop-color="${t.a}" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${t2 ? t2.a : t.a}" stop-opacity=".35"/><stop offset="1" stop-color="${t2 ? t2.a : t.a}" stop-opacity="0"/></radialGradient>
    <radialGradient id="glowA" cx=".5" cy=".55" r=".65"><stop offset="0" stop-color="${t.a}" stop-opacity=".75"/><stop offset=".6" stop-color="${t.c}" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></radialGradient>
    <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.wood[0]}"/><stop offset="1" stop-color="${t.wood[1]}"/></linearGradient>
    <linearGradient id="tub" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset=".55" stop-color="#b9c2cb"/><stop offset="1" stop-color="#6d7882"/></linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.b}"/><stop offset="1" stop-color="${t.a}" stop-opacity=".85"/></linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity=".04"/><stop offset="1" stop-color="#fff" stop-opacity=".12"/></linearGradient>
    <linearGradient id="cloth" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b2b33"/><stop offset="1" stop-color="#121217"/></linearGradient>
    <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b3b45"/><stop offset="1" stop-color="#17171d"/></linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.b}"/><stop offset="1" stop-color="${t.a}"/></linearGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${t.a}" stop-opacity=".55"/><stop offset="1" stop-color="${t.a}" stop-opacity="0"/></linearGradient>
    <linearGradient id="beam2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.a}" stop-opacity=".0"/><stop offset="1" stop-color="${t.a}" stop-opacity=".6"/></linearGradient>
    <linearGradient id="spec" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a1fff"/><stop offset=".3" stop-color="#2d7bff"/><stop offset=".5" stop-color="#2dd36f"/><stop offset=".7" stop-color="#ffd02d"/><stop offset=".85" stop-color="#ff3b2d"/><stop offset="1" stop-color="#5a0a0a"/></linearGradient>
    <filter id="blur1"><feGaussianBlur stdDeviation="1"/></filter>
    <filter id="blur3" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="blur12" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12"/></filter>
    <filter id="blur20" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="20"/></filter>
    <filter id="blurBg" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .5 0"/></filter>
    <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></radialGradient>
  </defs>`;

function background(t, t2, seed, focus) {
  const r = rand(seed);
  let s = `<rect width="${W}" height="${H}" fill="url(#bg)"/>`;
  s += `<ellipse cx="${focus.x}" cy="${focus.y}" rx="760" ry="520" fill="url(#glowBg)"/>`;
  if (t2) s += `<ellipse cx="${W - 300}" cy="${H - 260}" rx="700" ry="480" fill="url(#glow2)"/>`;
  // contour rings
  for (let i = 0; i < 9; i++) {
    const rx = 260 + i * 120;
    s += `<ellipse cx="${focus.x + (r() - 0.5) * 40}" cy="${focus.y + (r() - 0.5) * 30}" rx="${rx}" ry="${rx * 0.62}" fill="none" stroke="${t.b}" stroke-opacity="${0.06 - i * 0.004}" stroke-width="1.5"/>`;
  }
  // bokeh
  for (let i = 0; i < 26; i++) {
    const rr = 6 + r() * 34;
    const c = t2 && r() > 0.55 ? t2.a : t.a;
    s += `<circle cx="${r() * W}" cy="${r() * H}" r="${rr}" fill="${c}" opacity="${0.04 + r() * 0.1}" filter="url(#blurBg)"/>`;
  }
  // fine particles
  for (let i = 0; i < 70; i++) s += `<circle cx="${r() * W}" cy="${r() * H}" r="${0.8 + r() * 1.8}" fill="${t.b}" opacity="${0.15 + r() * 0.4}"/>`;
  // floor line
  s += `<rect x="0" y="${focus.y + 262}" width="${W}" height="${H}" fill="#000" opacity=".28"/>`;
  return s;
}

export function renderCover(spec) {
  const t = THEMES[spec.theme];
  const t2 = spec.theme2 ? THEMES[spec.theme2] : null;
  const scenes = spec.scenes;
  const main = scenes[0];
  const focus = { x: main.x ?? 800, y: main.y ?? 450 };
  let body = "";
  scenes.forEach((sc, i) => {
    const th = i > 0 && t2 && sc.alt ? t2 : sc.theme ? THEMES[sc.theme] : t;
    const s = (sc.s ?? 0.95) * (scenes.length === 1 ? 1.42 : 1.12);
    const x = sc.x ?? 800;
    const y = sc.y ?? 450;
    const op = sc.op ?? 1;
    const inner = SCENES[sc.name](th, sc.o ?? {});
    // re-prefix clipPath ids so multiple scenes don't collide
    body += `<g transform="translate(${x - 400 * s} ${y - 300 * s}) scale(${s})" opacity="${op}">${inner.replaceAll('id="bc"', `id="bc${i}"`).replaceAll("url(#bc)", `url(#bc${i})`)}</g>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    ${defsFor(t, t2)}
    ${background(t, t2, hash(spec.slug), focus)}
    ${body}
    <rect width="${W}" height="${H}" fill="url(#vig)"/>
    <rect width="${W}" height="${H}" filter="url(#grain)" opacity=".07"/>
  </svg>`;
}

/* ------------------------------------------------------------------ */
/* Cover specs — one per blog post (slugs must match data/blog-posts)  */
/* ------------------------------------------------------------------ */

const C = (slug, theme, scenes, theme2) => ({ slug, theme, theme2, scenes });

export const COVERS = [
  C("infrared-sauna-buying-guide", "heat", [{ name: "sauna", o: { w: 1.5 }, s: 1.0 }, { name: "timer", x: 260, y: 640, s: 0.32, op: 0.55 }]),
  C("how-infrared-saunas-work", "heat", [{ name: "spectrum", s: 1.0 }, { name: "sauna", x: 1320, y: 560, s: 0.4, op: 0.8 }]),
  C("full-spectrum-vs-carbon-vs-ceramic-infrared-heaters", "heat", [{ name: "heaters", s: 1.05 }]),
  C("infrared-sauna-size-power-and-installation", "heat", [{ name: "floorplan", s: 1.0 }]),
  C("infrared-sauna-blanket-vs-cabin", "heat", [{ name: "blanket", x: 640, s: 0.9 }, { name: "sauna", x: 1250, y: 470, s: 0.78, o: { w: 1 } }]),
  C("infrared-sauna-session-guide-for-beginners", "heat", [{ name: "timer", s: 1.0 }]),
  C("cold-plunge-buying-guide", "cold", [{ name: "plunge", s: 1.05 }]),
  C("contrast-therapy-infrared-and-cold-plunge", "heat", [{ name: "sauna", x: 520, y: 470, s: 0.82 }, { name: "plunge", x: 1120, y: 480, s: 0.78, alt: true }], "cold"),
  C("cold-plunge-water-care-and-chiller-maintenance", "cold", [{ name: "filter", s: 1.0 }]),
  C("cryotherapy-vs-ice-bath", "cold", [{ name: "cryo", x: 560, s: 0.95 }, { name: "roundplunge", x: 1100, y: 480, s: 0.82 }]),
  C("red-light-therapy-complete-guide", "light", [{ name: "panel", s: 1.0 }]),
  C("led-face-masks-buying-guide", "light", [{ name: "mask", s: 1.02 }]),
  C("red-light-bed-vs-panel-vs-stand", "light", [{ name: "bed", x: 700, y: 520, s: 0.95 }, { name: "stand", x: 1330, y: 440, s: 0.72 }]),
  C("red-vs-near-infrared-light-wavelengths", "light", [{ name: "spectrum", s: 1.0 }]),
  C("handheld-red-light-and-laser-devices", "light", [{ name: "handheld", s: 1.0 }]),
  C("hyperbaric-oxygen-chamber-guide", "air", [{ name: "hbot", s: 1.0 }]),
  C("hyperbaric-chamber-single-vs-double-vs-portable", "air", [{ name: "hbot", x: 700, y: 400, s: 0.72 }, { name: "hbot", x: 1050, y: 620, s: 0.58, op: 0.85 }]),
  C("setting-up-a-hyperbaric-oxygen-room-safely", "air", [{ name: "shield", x: 1280, y: 450, s: 0.8 }, { name: "floorplan", x: 600, y: 450, s: 0.85 }]),
  C("air-compression-boots-guide", "relax", [{ name: "boots", s: 1.0 }]),
  C("compression-boots-4-vs-6-vs-8-chambers", "relax", [{ name: "chambers", s: 1.05 }]),
  C("massage-chair-buying-guide", "relax", [{ name: "chair", s: 1.0 }]),
  C("massage-gun-buying-guide", "relax", [{ name: "gun", s: 1.0 }]),
  C("post-workout-recovery-stack", "relax", [{ name: "medallions", s: 1.0 }]),
  C("how-to-start-a-recovery-lounge", "business", [{ name: "floorplan", x: 640, s: 0.92 }, { name: "chart", x: 1260, y: 430, s: 0.62 }]),
  C("recovery-suites-for-hotels-and-resorts", "business", [{ name: "building", s: 1.0 }]),
  C("gym-recovery-zone-membership-pricing", "business", [{ name: "chart", s: 1.0 }]),
  C("equipping-a-physio-or-chiropractic-clinic", "business", [{ name: "bed", x: 700, y: 520, s: 0.92, theme: "light" }, { name: "handheld", x: 1300, y: 480, s: 0.7, theme: "light" }]),
  C("importing-wellness-equipment-installation-and-warranty", "business", [{ name: "crate", s: 1.0 }]),
  C("wellness-lounge-for-senior-living", "mobility", [{ name: "home", s: 1.0 }]),
  C("choosing-an-electric-or-standing-wheelchair", "mobility", [{ name: "wheelchair", s: 1.0 }]),
];

/* ------------------------------------------------------------------ */
/* CLI                                                                 */
/* ------------------------------------------------------------------ */

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const only = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : null;
  mkdirSync(OUT, { recursive: true });
  const list = COVERS.filter((c) => !only || c.slug === only);
  const bufs = [];
  for (const c of list) {
    const svg = renderCover(c);
    const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
    writeFileSync(join(OUT, `${c.slug}.jpg`), buf);
    bufs.push(buf);
    console.log(`✓ ${c.slug}.jpg  ${(buf.length / 1024).toFixed(0)} KB`);
  }
  if (process.argv.includes("--sheet") && process.env.SHEET_OUT) {
    const cols = 5;
    const tw = 480;
    const th = 270;
    const rows = Math.ceil(bufs.length / cols);
    const comps = await Promise.all(
      bufs.map(async (b, i) => ({ input: await sharp(b).resize(tw, th).toBuffer(), left: (i % cols) * tw, top: Math.floor(i / cols) * th })),
    );
    await sharp({ create: { width: cols * tw, height: rows * th, channels: 3, background: "#000" } }).composite(comps).jpeg({ quality: 80 }).toFile(process.env.SHEET_OUT);
  }
}
