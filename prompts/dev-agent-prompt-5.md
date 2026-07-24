# Dev Agent Prompt — Iteration 5: Management Revision Set 3

## Overview
Targeted revision pass implementing management feedback from Website Changes Set 3. Includes new image assets from `Website_Images_v3/`, a TIF-to-JPEG conversion step, a fixed-background parallax layout for the Research page, and layout refinements on the Products page.

---

## Step 0 — Copy & Convert New Image Assets

### 0a. Copy standard images
Copy the following files from `Website_Images_v3/` (located at the project root's parent: `c:\Users\Ethan\OneDrive\Desktop\SuperMetallix\Website_Images_v3\`) into `public/images/`, renaming spaces to hyphens:

| Source filename | Copy to `public/images/` as |
|---|---|
| `Background Image.jpg` | `BG-Furnace.jpg` |
| `Black Powders.png` | `Black-Powders.png` (already present from Iteration 4 — overwrite to confirm latest) |
| `Cutting Tools.jpg` | `Cutting-Tools.jpg` (already present — overwrite) |
| `Neutron.jpg` | `Neutron.jpg` |
| `wear resistance.jpg` | `Wear-Resistance.jpg` |
| `8B.jpg` | `8B.jpg` (already present — overwrite to confirm latest) |

### 0b. Convert TIF to JPEG
`WB4-Single Crystals.tif` is a TIFF file which browsers cannot display natively and `next/image` will reject it. Convert it to JPEG first using the `sharp` library (already installed as a Next.js dependency). From the project root, run:

```bash
node -e "require('sharp')('c:/Users/Ethan/OneDrive/Desktop/SuperMetallix/Website_Images_v3/WB4-Single Crystals.tif').jpeg({ quality: 92 }).toFile('public/images/WB4-Single-Crystals.jpg', (err) => { if(err) console.error(err); else console.log('Done'); })"
```

Confirm `public/images/WB4-Single-Crystals.jpg` exists and is a valid JPEG before proceeding.

---

## HOME PAGE — `src/app/page.tsx`

### 1. Replace Hero Background Image
In the hero section, change the `<Image>` background from:
```tsx
src="/images/christopher-burns-8KfCR12oeUM-unsplash.jpg"
```
To:
```tsx
src="/images/BG-Furnace.jpg"
```
This is a dramatic high-contrast orange/amber glowing synthesis furnace image. It works well at low opacity against the dark hero. Keep `className="object-cover opacity-20"` and the existing dark gradient overlay — the image is dark enough at the edges to let white text read cleanly.

### 2. Gallery — Black Powders on White Background
In the "Tetride® in Every Form" gallery, the `Black-Powders.png` image shows dark powder particles and has no inherent background color. The card background must be white so the particles are legible.

For the Black Powders gallery item specifically, override the card background. Add a per-item `whiteBg` flag to the gallery data and apply conditional styling:

```tsx
const galleryItems = [
  { src: "/images/Tetride-Composites.jpg",  label: "Tetride® Composites",   whiteBg: false },
  { src: "/images/Black-Powders.png",        label: "Tetride® Powder",        whiteBg: true  },
  { src: "/images/Cutting-Tools.jpg",        label: "Cutting Tool Inserts",   whiteBg: false, zoom: true },
  { src: "/images/Neutron-Shielding.jpg",    label: "Neutron Shielding",      whiteBg: false },
];
```

In the gallery card JSX, apply the white background and `object-contain` for the powder item:

```tsx
<motion.div
  key={item.src}
  variants={fadeUp}
  className={`relative aspect-square rounded-xl overflow-hidden group ${item.whiteBg ? 'bg-white' : ''}`}
>
  <Link href="/products" className="absolute inset-0 z-10" aria-label={item.label} />
  <Image
    src={item.src}
    alt={item.label}
    fill
    className={`transition-transform duration-500 group-hover:scale-105 ${
      item.whiteBg
        ? 'object-contain p-4'          // show full image against white bg
        : item.zoom
        ? 'object-cover scale-150'       // zoom in on Cutting Tools
        : 'object-cover'
    }`}
  />
  {/* Only show dark gradient overlay for non-white-bg items */}
  {!item.whiteBg && (
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  )}
  <p className={`absolute bottom-3 left-3 text-xs font-semibold tracking-wider uppercase z-20 ${
    item.whiteBg ? 'text-gray-700' : 'text-white'
  }`}>
    {item.label}
  </p>
</motion.div>
```

### 3. Rename Pillars Section Heading
Find the `section-heading` text `"Two Pillars of Value"` (or `"Three Pillars of Value"` if not yet updated) and change it to:

```tsx
<motion.h2 variants={fadeUp} className="section-heading">
  Novel Synergy
</motion.h2>
```

---

## RESEARCH PAGE — `src/app/research/page.tsx`

### 4. Replace Hero Background and Apply Full-Page Fixed-Background Layout

Management wants the WB4 Single Crystals image to remain **visible on the sides** of the page as the center content column scrolls. This requires a fixed/sticky background approach where:
- The crystal image spans the full viewport width at all times
- Center content sections sit in a constrained column with semi-transparent dark backgrounds
- The crystal image "shows through" on the left and right gutters throughout the page

#### 4a. Add fixed background layer
Replace the outer `<div className="bg-[#050810]">` wrapper on the research page with the following structure:

```tsx
<div className="relative min-h-screen">
  {/* Fixed background — stays in place as content scrolls */}
  <div
    className="fixed inset-0 z-0 pointer-events-none"
    aria-hidden="true"
  >
    <Image
      src="/images/WB4-Single-Crystals.jpg"
      alt=""
      fill
      className="object-cover opacity-30"
      priority
    />
    {/* Dark vignette — darkens center slightly less than edges */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 via-[#050810]/50 to-[#050810]/80" />
  </div>

  {/* Scrolling content — positioned above the fixed bg */}
  <div className="relative z-10">
    {/* ... all existing page sections go here ... */}
  </div>
</div>
```

#### 4b. Update hero section background
Remove the existing `<div className="absolute inset-0 z-0">` background image block from the hero section entirely — the fixed background layer above now handles it. The hero section itself should just be:

```tsx
<section className="relative pt-32 pb-20 px-4 overflow-hidden">
  {/* No inner background image needed — fixed bg layer handles it */}
  <motion.div ... className="relative z-10 max-w-4xl mx-auto text-center">
    ...
  </motion.div>
</section>
```

#### 4c. Add solid dark backing to each content section
Each `<section>` that previously had `bg-[#050810]` or `bg-[#0d1117]` needs to keep those backgrounds so content remains readable. Sections that previously had no background should get `bg-[#050810]/90` (90% opaque) so text is legible but the crystal image is faintly visible at the edges.

Specifically:
- Sections with `className="... bg-[#0d1117]"` → keep as-is
- Sections with `className="py-20 px-4"` (no bg) → add `bg-[#050810]/90` to section className
- The "What is Tetride®?" section, Origin Story section, Research Areas section, Publications & Patents section, and CTA section should all have `bg-[#050810]/90` or `bg-[#0d1117]` so the crystal image is only visible in the narrow margins around the content columns

> **Note:** On mobile devices, `position: fixed` backgrounds can cause scroll performance issues. Wrap the fixed background div in a `<div className="hidden sm:block">` and provide a plain `bg-[#050810]` fallback for mobile so it still looks clean on small screens.

---

## PRODUCTS PAGE — `src/app/products/page.tsx`

### 5. Replace Radiation Shielding Card Image
In the `applications` array, change the Radiation Shielding card:
```tsx
img: "/images/Neutron-Shielding.jpg",   // old (from Iteration 4)
```
To:
```tsx
img: "/images/Neutron.jpg",
```

### 6. Replace Wear-Resistant Surfaces Card Image
In the `applications` array, change the Wear-Resistant Surfaces card:
```tsx
img: "/images/detail.jpg",   // current value
```
To:
```tsx
img: "/images/Wear-Resistance.jpg",
```

### 7. Fix Side-by-Side Section Headers
In the combined specs + comparison section (added in Iteration 4), management wants:
- **"Materials Comparison — Tetride® vs. Industry's Best"** heading centered directly above the chart image
- **"Specifications — Key Properties"** heading centered directly above the properties table
- Both columns remain side by side

Currently the section has a single shared heading above the grid. Restructure so each column has its own heading **inside** the grid column, centered above its respective content. Replace the current combined section heading block and grid with:

```tsx
{/* ─── SPECS + COMPARISON ─── */}
<section className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* Left — Hardness Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* Heading centered above chart */}
        <div className="text-center mb-6 w-full">
          <p className="section-label mb-2">Materials Comparison</p>
          <h2 className="text-2xl font-bold text-white">
            Tetride&reg; vs. Industry&rsquo;s Best
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 shadow-lg w-full">
          {/* TODO: Replace with updated comparison chart image when provided */}
          <Image
            src="/images/Hardness-Comparison.png"
            alt="Tetride® vs. industry hardness comparison"
            width={900}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-gray-500 text-sm text-center mt-3">
            Tetride&reg; Composites and Formulations compared against conventional
            cutting tool materials and superhard synthetics.
          </p>
        </div>
      </motion.div>

      {/* Right — Key Properties Table */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col items-center"
      >
        {/* Heading centered above table */}
        <motion.div variants={fadeUp} className="text-center mb-6 w-full">
          <p className="section-label mb-2">Specifications</p>
          <h2 className="text-2xl font-bold text-white">Key Properties</h2>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border border-[#1f2937] overflow-hidden w-full">
          <div className="bg-[#111827] px-6 py-4 border-b border-[#1f2937]">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">
              Tetride&reg; Material Data
            </h4>
          </div>
          <div className="divide-y divide-[#1f2937]">
            {properties.map((prop) => (
              <div
                key={prop.label}
                className="flex items-center justify-between px-6 py-4 bg-[#0d1117] hover:bg-[#111827] transition-colors"
              >
                <span className="text-gray-400 text-sm">{prop.label}</span>
                <span className={`font-semibold text-sm text-right max-w-[55%] ${
                  prop.highlight ? "gradient-text" : "text-white"
                }`}>
                  {prop.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </div>
  </div>
</section>
```

This replaces the existing combined section. The result: each column is self-contained with its own centered heading, and both columns sit side by side at the `lg` breakpoint (stacking vertically on smaller screens).

---

## ABOUT PAGE — `src/app/about/page.tsx`

### 8. Replace Hero Background Image
In the about page hero section, change the background `<Image>` from:
```tsx
src="/images/gunmetal.jpg"
```
To:
```tsx
src="/images/8B.jpg"
```
Keep `className="object-cover opacity-15"` and the existing dark gradient overlay unchanged. `8B.jpg` is a close-up of dark crystalline/granular material that will work well as a subtle dark-toned hero background.

---

## Commit Instructions

After all changes are made and `npm run build` passes with no TypeScript or lint errors:

```bash
git add .
git commit -m "Iteration 5: management revision set 3 — new assets, fixed bg parallax, layout refinements"
git push origin main
```

Push only to `origin` (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT push to any other remotes.

---

## Change Summary

| # | Page / File | Change |
|---|---|---|
| 0a | `public/images/` | Copy 6 images from `Website_Images_v3/` (rename spaces to hyphens) |
| 0b | `public/images/` | Convert `WB4-Single Crystals.tif` → `WB4-Single-Crystals.jpg` using sharp |
| 1 | `page.tsx` | Hero bg: `christopher-burns-*.jpg` → `BG-Furnace.jpg` |
| 2 | `page.tsx` | Gallery: Black Powders shown on white bg with `object-contain`; Cutting Tools zoomed with `scale-150` |
| 3 | `page.tsx` | Pillars section heading: → "Novel Synergy" |
| 4a–c | `research/page.tsx` | Fixed background layer added — WB4 crystals visible on sides as center content scrolls; hero removes its own bg image; all sections get solid dark backings |
| 5 | `products/page.tsx` | Radiation Shielding card image → `Neutron.jpg` |
| 6 | `products/page.tsx` | Wear-Resistant Surfaces card image → `Wear-Resistance.jpg` |
| 7 | `products/page.tsx` | Side-by-side layout: each column gets its own centered heading ("Materials Comparison" above chart, "Specifications – Key Properties" above table) |
| 8 | `about/page.tsx` | Hero bg: `gunmetal.jpg` → `8B.jpg` |
