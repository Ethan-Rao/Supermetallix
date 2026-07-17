# Dev Agent Prompt — Iteration 2: Content, Imagery & UX Improvements

## Context
This is a follow-up prompt for the SuperMetallix Next.js site already scaffolded and deployed to GitHub (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT start a new project — you are making targeted improvements to the existing codebase. Run `npm run build` after all changes to verify there are no TypeScript or lint errors before pushing.

---

## Priority Fixes (Required)

### 1. Hero Section — Reduce Height & Rewrite Subtitle

**Change `min-h-screen` to `min-h-[78vh]`** on the hero section in `src/app/page.tsx`.

**Replace the subtitle** (currently: `"Tetride™ — patented superhard metal boride formulations with hardness approaching diamond."`) with this new version that uses plain language and conveys the two key differentiators:

```
"After 15 years of experiments, SuperMetallix has engineered a material hard enough to scratch diamond — and unlike diamond, it can be cut and shaped using the same standard machine tools already used by industry. This unlocks a new class of cutting tools, drill bits, and wear surfaces that fills the performance gap between today's tungsten carbide and diamond."
```

Reduce the subtitle `max-w-2xl` to `max-w-3xl` so the longer text wraps well, and keep `text-lg sm:text-xl`.

---

### 2. Hero Section — Add Video Placeholder

**Below the two CTA buttons** in the hero section, add a video placeholder block. This should be visible below the CTAs but still within the hero section. Style it as a subtle dark-outlined rectangle with a centered play icon:

```tsx
<motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl mx-auto">
  <div className="relative aspect-video rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-pointer group hover:border-blue-500/40 transition-colors">
    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
      {/* Play icon — use Lucide <Play /> */}
      <Play className="w-6 h-6 text-white ml-1" />
    </div>
    <p className="text-white/50 text-sm tracking-wider uppercase">Video Coming Soon</p>
  </div>
</motion.div>
```

Import `Play` from `lucide-react`. (When the video is ready, this block will be swapped for an actual `<iframe>` embed.)

---

### 3. Stats Bar — Replace Two Stats with Plain-Language Versions

In the stats bar section of `src/app/page.tsx`, **replace the "Patented Technology" and "~100 GPa Hardness" items** with the following two plain-language stats that will resonate with non-scientists and investors:

**Replace "Patented Technology / Technology":**
```tsx
<div className="text-center px-6">
  <div className="text-3xl lg:text-4xl font-bold text-white font-display mb-1 leading-tight">
    Scratches<br />Diamond
  </div>
  <div className="text-sm text-gray-400 uppercase tracking-widest">Proven Hardness</div>
</div>
```

**Replace "~100 GPa Hardness / Hardness":**
```tsx
<div className="text-center px-6">
  <div className="text-3xl lg:text-4xl font-bold gradient-text font-display mb-1 leading-tight">
    Standard<br />Tooling
  </div>
  <div className="text-sm text-gray-400 uppercase tracking-widest">Machine-Tool Ready</div>
</div>
```

Keep "15+ Years of R&D" and "UCLA Origin" unchanged.

---

### 4. Hardness Chart — Switch to Light/White Background

In `src/app/research/page.tsx`, the hardness comparison section has a dark card (`bg-[#111827]`). The chart image itself has a dark background and is not legible against it.

**Replace the card wrapper** with a white background so the chart is clearly visible:

```tsx
className="relative rounded-2xl overflow-hidden border border-gray-200 p-6 bg-white shadow-lg"
```

Also update the caption text to be dark:
```tsx
<p className="text-gray-600 text-sm text-center mt-4">
  Tetride™ achieves hardness approaching diamond — far exceeding tungsten carbide and cubic boron nitride, the materials currently used in most industrial cutting tools.
</p>
```

Do the same on `src/app/products/page.tsx` where the hardness chart card also appears — same fix: white background, dark border, dark caption.

---

### 5. Research Page — Expand Patents & Publications Section

Replace the existing minimal "Publications & Patents" callout box with a full, detailed section. Replace the entire `{/* ─── PUBLICATIONS & IP ─── */}` section block with the following expanded version:

```tsx
{/* ─── PATENTS & PUBLICATIONS ─── */}
<section className="py-20 px-4 bg-[#0d1117]">
  <div className="max-w-5xl mx-auto">
    <motion.div ... className="text-center mb-14">
      <motion.p className="section-label mb-3">Intellectual Property</motion.p>
      <motion.h2 className="section-heading">Patents & Publications</motion.h2>
      <motion.p className="section-subheading mx-auto">
        15+ years of peer-reviewed research and a growing international patent portfolio
        protect the core Tetride™ technology.
      </motion.p>
    </motion.div>

    {/* Two-column: Patents left, Publications right */}
    <div className="grid lg:grid-cols-2 gap-8">

      {/* Patents Column */}
      <motion.div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-amber-500/10">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-white font-bold text-xl">Patent Portfolio</h3>
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          SuperMetallix holds exclusive licensing rights to UCLA's issued and pending patents
          covering Tetride™ formulations, synthesis processes, and commercial applications.
          The portfolio provides broad protection across the core technology and key markets.
        </p>
        <div className="space-y-3">
          {/* Each patent row */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">Superhard Metal Boride Formulations</p>
              <p className="text-gray-500 text-xs mt-0.5">U.S. Patent — Core Tetride™ composition claims</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">Synthesis & Processing Methods</p>
              <p className="text-gray-500 text-xs mt-0.5">U.S. Patent — Scalable industrial production routes</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">Cutting Tool & Abrasive Applications</p>
              <p className="text-gray-500 text-xs mt-0.5">U.S. Patent — Industrial use claims</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">International Patent Portfolio</p>
              <p className="text-gray-500 text-xs mt-0.5">PCT applications — key international markets</p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-xs mt-5 italic">
          Full patent numbers and filing details available upon request under NDA.
        </p>
      </motion.div>

      {/* Publications Column */}
      <motion.div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-blue-500/10">
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-white font-bold text-xl">Key Publications</h3>
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          The scientific foundation for Tetride™ is documented in peer-reviewed journals
          including <em>Science</em>, <em>PNAS</em>, and the <em>Journal of the American Chemical Society</em>.
        </p>
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-white text-sm font-semibold leading-snug">"Designing Superhard Materials"</p>
            <p className="text-blue-400 text-xs mt-1">Science, 2005 — Kaner et al.</p>
            <p className="text-gray-500 text-xs mt-1">Foundational framework for engineering hardness at the atomic level.</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-white text-sm font-semibold leading-snug">"Osmium Diboride, An Ultra-Incompressible, Hard Material"</p>
            <p className="text-blue-400 text-xs mt-1">J. Am. Chem. Soc., 2005 — Cumberland et al.</p>
            <p className="text-gray-500 text-xs mt-1">First demonstration of transition metal borides as superhard materials.</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-white text-sm font-semibold leading-snug">"Synthesis of Ultra-Incompressible Superhard Rhenium Diboride at Ambient Pressure"</p>
            <p className="text-blue-400 text-xs mt-1">Science, 2007 — Chung et al.</p>
            <p className="text-gray-500 text-xs mt-1">Landmark paper on ambient-pressure synthesis of superhard ReB₂.</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-white text-sm font-semibold leading-snug">"Tungsten Tetraboride, an Inexpensive Superhard Material"</p>
            <p className="text-blue-400 text-xs mt-1">PNAS, 2011 — Mohammadi et al.</p>
            <p className="text-gray-500 text-xs mt-1">Identified low-cost superhard boride compound with exceptional properties.</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <p className="text-white text-sm font-semibold leading-snug">"Rediscovering the Crystal Chemistry of Borides"</p>
            <p className="text-blue-400 text-xs mt-1">Advanced Materials, 2017 — Akopov et al.</p>
            <p className="text-gray-500 text-xs mt-1">Comprehensive review of boride crystal structures for superhard applications.</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs mt-5 italic">
          30+ peer-reviewed publications from the UCLA Kaner Laboratory. Full list available upon request.
        </p>
      </motion.div>
    </div>
  </div>
</section>
```

Add `BookOpen` and `Shield` to the lucide-react import at the top of `research/page.tsx`.

---

## Additional Improvements (10+)

### 6. Landing Page — Add Materials Gallery Section

Add a new section between the "Three Pillars" section and the "Research Teaser" section that shows a 3-column image grid using real product/material photos. This breaks up the text-heavy flow with visual impact:

```tsx
{/* ─── MATERIALS GALLERY ─── */}
<section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.div ... className="text-center mb-10">
      <motion.p className="section-label mb-3">The Material</motion.p>
      <motion.h2 className="section-heading">Tetride™ in Every Form</motion.h2>
    </motion.div>
    <motion.div ... className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {[
        { src: "/images/detail.jpg", label: "Material Detail" },
        { src: "/images/powders2.jpg", label: "Powder Form" },
        { src: "/images/cutting-wheel-and-drill-bits3.png", label: "Cutting Tools" },
        { src: "/images/malcolm-cutting-machine2.jpg", label: "Industrial Application" },
      ].map((item) => (
        <motion.div key={item.src} variants={fadeUp} className="relative aspect-square rounded-xl overflow-hidden group">
          <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wider uppercase">{item.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
```

---

### 7. Landing Page — Fix Particle Dots Hydration Warning

The `[...Array(40)].map()` with `Math.random()` in the hero causes Next.js hydration mismatches. Replace the particle dots with a static set of pre-calculated positions. Replace the entire particles `div` with:

```tsx
const PARTICLES = [
  { w: 2, h: 2, l: 15, t: 22, d: 6, dur: 5.2 },
  { w: 3, h: 3, l: 33, t: 45, d: 1, dur: 4.1 },
  { w: 2, h: 2, l: 58, t: 12, d: 3, dur: 6.3 },
  { w: 1, h: 1, l: 74, t: 67, d: 0, dur: 3.8 },
  { w: 3, h: 3, l: 82, t: 38, d: 2, dur: 5.7 },
  { w: 2, h: 2, l: 7, t: 80, d: 4, dur: 4.5 },
  { w: 1, h: 1, l: 44, t: 55, d: 1.5, dur: 7.1 },
  { w: 2, h: 2, l: 91, t: 28, d: 2.5, dur: 3.4 },
  { w: 3, h: 3, l: 26, t: 72, d: 0.5, dur: 6.8 },
  { w: 1, h: 1, l: 63, t: 90, d: 3.5, dur: 4.9 },
];
```

And map over `PARTICLES` with `.style={{ width: p.w, height: p.h, left: p.l + '%', ... }}`. Define this constant outside the component at module scope.

---

### 8. About Page — Use Full-Size Photos for Kaner and Kavanaugh

In `src/app/about/page.tsx`, update the two key founders to use their full-size images (not thumbnails) in a larger display. For the team cards of Dr. Richard Kaner and Jack Kavanaugh, increase the avatar size from `w-16 h-16` to `w-24 h-24` and use the better source photos:
- Dr. Kaner: use `/images/Richard-Kaner-2.jpg`
- Jack Kavanaugh: use `/images/Jack-Kavanaugh-2.jpg`
- Kesh Keshavan: use `/images/Kesh-Keshavan-2.jpg`
- Robert Snukal: use `/images/Robert-Snukal.jpg`

---

### 9. About Page — Use Larger Team Photos

In the team cards section, change the avatar wrapper to a taller rectangular format instead of the small circular thumbnail, so the photos actually show the person properly:

Change from:
```tsx
<div className="relative w-16 h-16 rounded-full overflow-hidden ...">
```
To:
```tsx
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 ...">
  <Image ... className="object-cover object-top" />
</div>
```

And restructure each team card to show: photo (full-width top), then name + title + bio below. This makes the About page much more human and visual.

---

### 10. Products Page — Add Images to All Six Application Cards

Three of the six application cards currently have no image (`img: null`). Add relevant images:
- **Radiation Shielding**: use `/images/research.jpg`
- **Scratch-Resistant Surfaces**: use `/images/detail.jpg` (or a second angle — `/images/detail_2.jpg`)
- **Composites & Structural Materials**: use `/images/powders3.jpg`

Update the `applications` array to remove `null` entries and assign these images.

---

### 11. Products Page — Rewrite "Key Properties" Table in Plain Language

The current properties table lists `"~100 GPa"` under Hardness which is meaningless to a non-scientist. Rewrite the properties array to use plain-language comparisons:

```tsx
const properties = [
  { label: "Hardness", value: "Harder than diamond", highlight: true },
  { label: "Machinability", value: "EDM & standard tooling compatible", highlight: false },
  { label: "Cost vs. Diamond", value: "Fraction of the cost", highlight: false },
  { label: "Melting Point", value: "Extreme — refractory class", highlight: false },
  { label: "Scalability", value: "Industrial synthesis ready", highlight: false },
  { label: "Form Factor", value: "Powder, composite, coating", highlight: false },
];
```

---

### 12. Landing Page — Add Hardness Chart to Homepage

Add the `hardness-chart.png` image to the landing page mission section or between the research teaser and products teaser to give visual evidence of the scientific claims. Use the same white-background card treatment established in fix #4.

Place it below the mission quote block:

```tsx
<motion.div variants={fadeUp} className="mt-12 rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 shadow-xl max-w-4xl mx-auto">
  <Image src="/images/hardness-chart.png" alt="Hardness comparison chart" width={900} height={500} className="w-full h-auto" />
  <p className="text-gray-500 text-sm text-center mt-3">
    Tetride™ fills the gap between today's tungsten carbide cutting tools and diamond — at a fraction of diamond's cost.
  </p>
</motion.div>
```

---

### 13. Research Page — Add Secondary Imagery Alongside Origin Story

In the origin story section on the research page, the right column currently only shows Dr. Kaner's photo. Add a second image below it showing the lab/research environment:

```tsx
<div className="relative h-52 rounded-2xl overflow-hidden border border-[#1f2937] mt-4">
  <Image src="/images/research2.jpg" alt="Kaner Laboratory research" fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/60 to-transparent" />
  <div className="absolute bottom-4 left-4">
    <p className="text-white/70 text-xs uppercase tracking-wider">Kaner Laboratory, UCLA</p>
  </div>
</div>
```

---

### 14. All Pages — Fix Hardness Chart Caption Language

Wherever the hardness chart appears (research page, products page, and now the landing page after improvement #12), update the caption to be written for a general audience:

> "Tetride™ fills the performance gap between today's tungsten carbide cutting tools and diamond — while remaining machinable with standard industry equipment."

---

### 15. Landing Page — Enrich the Three Pillars Section with Icons + Image Accents

In the pillars section, update the "Market" pillar description to include a more specific market opportunity statement that excites VCs:

```tsx
{
  icon: <Globe className="w-8 h-8 text-amber-400" />,
  title: "Market",
  description: "The global cutting tools and superabrasives market exceeds $23B annually. Tetride™ targets the performance tier between tungsten carbide and diamond — a segment with no cost-competitive incumbent.",
},
```

---

### 16. Footer — Add More Substance

Upgrade `src/components/Footer.tsx` to include company description, nav columns, and legal text:

Structure:
- Left: Logo + tagline (`"Engineering the World's Hardest Materials"`) + `info@supermetallix.com`
- Center: Navigation links by category (Company: About, Research, Products, Contact)
- Right: Brief mission statement
- Bottom bar: `© 2026 SuperMetallix, Inc. All rights reserved.`

Make it a proper 3-column footer with `pt-16 pb-8 bg-[#0d1117] border-t border-[#1f2937]`.

---

### 17. Navbar — Add Active State Highlighting

In `src/components/Navbar.tsx`, use `usePathname()` from `next/navigation` to highlight the active nav link. Add an underline or accent dot beneath the current page's link.

---

## Commit Instructions

After all changes are made and `npm run build` passes:

```bash
git add .
git commit -m "Iteration 2: plain-language messaging, image assets, patents section, UX improvements"
git push origin main
```

Push only to `origin` (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT push to any other remotes.

---

## Summary of Changes

| # | File | Change |
|---|------|--------|
| 1 | `page.tsx` | Hero height reduced; subtitle rewritten in plain language |
| 2 | `page.tsx` | Video placeholder added below CTAs |
| 3 | `page.tsx` | Stats bar: "Scratches Diamond" + "Standard Tooling" replace jargon stats |
| 4 | `research/page.tsx`, `products/page.tsx` | Hardness chart card → white background |
| 5 | `research/page.tsx` | Patents & Publications → full detailed two-column section |
| 6 | `page.tsx` | New Materials Gallery section with 4 images |
| 7 | `page.tsx` | Particle dots hydration fix (static values) |
| 8-9 | `about/page.tsx` | Full-size photos; rectangular photo cards for team |
| 10 | `products/page.tsx` | All 6 application cards now have images |
| 11 | `products/page.tsx` | Properties table → plain language |
| 12 | `page.tsx` | Hardness chart added to homepage (white bg) |
| 13 | `research/page.tsx` | Lab photo added alongside Kaner portrait |
| 14 | All pages | Chart captions updated to plain language |
| 15 | `page.tsx` | Market pillar updated with $23B market stat |
| 16 | `Footer.tsx` | Three-column footer with substance |
| 17 | `Navbar.tsx` | Active page indicator using `usePathname` |
