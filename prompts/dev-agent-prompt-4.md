# Dev Agent Prompt — Iteration 4: Management Revision Set 2

## Overview
Targeted revision pass implementing management feedback from Website Changes Set 2. Includes new image assets from `OneDrive_1_7-21-2026/` and specific copy, layout, and interaction changes across the Home, Research, Products, and Contact pages.

---

## Step 0 — Copy New Image Assets

Before making any code changes, copy all new images from `OneDrive_1_7-21-2026/` (located at the project root's parent folder — `c:\Users\Ethan\OneDrive\Desktop\SuperMetallix\OneDrive_1_7-21-2026\`) into `public/images/`. **Rename files with spaces to use hyphens** to avoid URL encoding issues:

| Source filename | Copy to `public/images/` as |
|---|---|
| `Tetride Composites.jpg` | `Tetride-Composites.jpg` |
| `Black Powders.png` | `Black-Powders.png` |
| `Cutting Tools.jpg` | `Cutting-Tools.jpg` |
| `Hardness Comparison.png` | `Hardness-Comparison.png` |
| `Neutron Shielding.jpg` | `Neutron-Shielding.jpg` |
| `Products-BG.jpg` | `Products-BG.jpg` |
| `UHTC.jpg` | `UHTC.jpg` |
| `Background Image.jpg` | `Background-Image.jpg` |

Note: `8B.jpg` is already in `public/images/` from the original asset set. Confirm it exists; if not, copy it from `OneDrive_2026-06-10/Website Images/8B.jpg`.

---

## HOME PAGE — `src/app/page.tsx`

### 1. Update Hero Subtitle
Change the single word "commercializing" to "the culmination of":

From:
```
SuperMetalix has created a material hard enough to scratch diamond, commercializing over 15 years of UCLA superhard materials research.
```
To:
```
SuperMetalix has created a material hard enough to scratch diamond, the culmination of over 15 years of UCLA superhard materials research.
```

### 2. "Tetride® in Every Form" Gallery — Replace Images, Update Captions, Add Links

Update the gallery items array to the following. Every image must be wrapped in a `<Link href="/products">` so clicking any gallery image navigates to the products page:

```tsx
const galleryItems = [
  { src: "/images/Tetride-Composites.jpg",  label: "Tetride® Composites" },
  { src: "/images/Black-Powders.png",        label: "Tetride® Powder" },
  { src: "/images/Cutting-Tools.jpg",        label: "Cutting Tool Inserts" },
  { src: "/images/Neutron-Shielding.jpg",    label: "Neutron Shielding" },
];
```

Wrap each `<motion.div>` gallery item with a `<Link href="/products">` tag. The link should cover the entire card. Example structure for each item:

```tsx
<motion.div key={item.src} variants={fadeUp} className="relative aspect-square rounded-xl overflow-hidden group">
  <Link href="/products" className="absolute inset-0 z-10" aria-label={item.label} />
  <Image
    src={item.src}
    alt={item.label}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <p className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wider uppercase z-20">
    {item.label}
  </p>
</motion.div>
```

### 3. Update "Scalability" Pillar Body Text
In the two-pillar section, find the pillar titled "Scalability" and replace its description with:

> "Tetride® and composites are synthesized at ambient pressure with industrial scalability. Hardnesses bridging the gap between hard materials and the synthetic superhard materials with the manufacturing ease of conventional tungsten carbide."

---

## RESEARCH PAGE — `src/app/research/page.tsx`

### 4. Update Origin Story Fourth Paragraph
In the origin story body text, the final paragraph currently begins "Unlike its predecessors, Tetride® overcomes the brittleness...". Replace that final paragraph only with:

```tsx
<p>
  Through four generations of formulation experiments, the Kaner Laboratory
  identified and optimized the composition that became Tetride&reg;. Combining
  Tetride&reg; with other metals and ceramics overcomes the brittleness that pure
  metal borides exhibit, while delivering the hardness and fracture toughness
  required for real-world cutting tool and abrasive applications — and doing so
  through synthesis routes compatible with standard industrial equipment.
</p>
```

### 5. Replace Kaner Portrait + Lab Photo with "Incompressibility Explained" Video

In the origin story section, the right column currently shows:
1. A photo card of Dr. Richard Kaner (`Richard-Kaner-2.jpg`)
2. A second image of the lab (`research2.jpg`)

**Remove both of these image elements entirely.** Replace the entire right column `<motion.div>` with a YouTube embed for the "Incompressibility Explained" video:

```tsx
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#1f2937] shadow-xl">
    {/* TODO: Replace VIDEO_ID below with the correct YouTube video ID
        for the "Incompressibility Explained" video from the old SuperMetalix site.
        The current main video (BA9n4pZrodo) is the SMX intro — this should be a
        different video. Confirm the correct ID with the client before publishing. */}
    <iframe
      src="https://www.youtube.com/embed/INCOMPRESSIBILITY_VIDEO_ID_PLACEHOLDER"
      title="Incompressibility Explained — SuperMetalix"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
  <p className="text-gray-500 text-xs text-center mt-3">
    Incompressibility and superhard materials — explained by the Kaner Laboratory.
  </p>
</motion.div>
```

### 6. Replace Hardness Comparison Chart Image
In the hardness comparison section, change the `<Image>` `src` from `/images/hardness-chart.png` to `/images/Hardness-Comparison.png`. Update the `alt` text to `"Hardness comparison — Tetride® Composites and Formulations vs. industry materials"`. Keep the white background card treatment. Remove the `{/* TODO: Replace with updated... */}` comment.

Also update the caption beneath the chart to:
```tsx
<p className="text-gray-600 text-sm text-center mt-4">
  Tetride® Composites (17–30 GPa) and Tetride® Formulations (40–55 GPa) compared against
  tool steel, cemented carbides, tungsten carbide, c-BN, and diamond.
</p>
```

### 7. Update "Research Program" Section Label
Change the section-label text from `"Research Program"` to `"Research Programs"` (add the "s").

### 8. Update Key Publications Introductory Text
In the Publications column, change the introductory paragraph from:
```
The scientific foundation for Tetride® is documented in peer-reviewed journals including Science, PNAS, and the Journal of the American Chemical Society.
```
To:
```
The scientific foundation for Tetride® is documented in peer-reviewed journals including Science, PNAS, and the Journal of the American Chemical Society. The list below highlights a few key publications.
```

### 9. Remove "Under NDA" from Patent Note
In the Patents column, find the small italic note at the bottom:
```
Full patent numbers and filing details available upon request under NDA.
```
Change to:
```
Full patent numbers and filing details available upon request.
```

---

## PRODUCTS PAGE — `src/app/products/page.tsx`

### 10. Replace Hero Background Image
In the products page hero section, replace the current background image (`diamond-hero.jpg`) with `Products-BG.jpg`. This image is a close-up of powder particles and should be displayed as a wide cinematic strip — crop the top and bottom by constraining the section height and using `object-cover` with a centered focal point:

```tsx
{/* Hero background */}
<div className="absolute inset-0 z-0">
  <Image
    src="/images/Products-BG.jpg"
    alt="Tetride powder particles"
    fill
    className="object-cover"
    style={{ objectPosition: 'center 50%' }}
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/70 via-[#050810]/60 to-[#050810]" />
</div>
```

Ensure the hero section has a constrained height so the image reads as a wide horizontal crop. Change the hero section's top/bottom padding if needed so the section height is approximately `min-h-[340px]` rather than a taller hero — this gives the "wider" cropped feel management requested.

### 11. Remove Fade-Out Gradient from All Application Card Images
In the application cards, each card image currently has a `<div>` overlay:
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]" />
```
**Remove this gradient overlay div entirely from every application card.** Also change `className="object-cover opacity-70"` to `className="object-cover"` (remove the opacity dimming) so the new product photos display at full brightness. The new images have clean light/white backgrounds and the text appears below the image — no overlay is needed.

### 12. Replace Application Card Images
Update the `applications` array `img` values:

| Card title | Old `img` value | New `img` value |
|---|---|---|
| Cutting Tools & Lathe Inserts | `/images/cutting-wheel-and-drill-bits3.png` | `/images/Cutting-Tools.jpg` |
| Abrasive & Polishing Media | `/images/powders2.jpg` | `/images/8B.jpg` |
| Radiation Shielding | `/images/research.jpg` | `/images/Neutron-Shielding.jpg` |
| Ultra-High Temperature Composites | `/images/detail_2.jpg` | `/images/UHTC.jpg` |

Leave "Wear-Resistant Surfaces" (`/images/detail.jpg`) and "3D Printing & Cladding" (`/images/powders3.jpg`) unchanged.

### 13. Move Key Properties Section Next to Materials Comparison Section

Currently the page order is:
1. Hero
2. Products / Application Cards
3. Key Properties table (Specifications section)
4. Materials Comparison (hardness chart)

Change the order to:
1. Hero
2. Products / Application Cards
3. **Materials Comparison + Key Properties side by side** (see below)

**Replace the separate "Specifications" section and the separate "Materials Comparison" section with a single combined section** that puts them side by side in a two-column grid:

```tsx
{/* ─── SPECS + COMPARISON ─── */}
<section className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-12"
    >
      <motion.p variants={fadeUp} className="section-label mb-3">Materials Comparison</motion.p>
      <motion.h2 variants={fadeUp} className="section-heading">
        Tetride&reg; vs. Industry&rsquo;s Best
      </motion.h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* Left — Hardness Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 shadow-lg"
      >
        {/* TODO: Replace with updated Tetride® vs. industry comparison chart when provided */}
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
      </motion.div>

      {/* Right — Key Properties Table */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="section-label mb-3">Specifications</motion.p>
        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-white mb-5">
          Key Properties
        </motion.h3>
        <motion.div variants={fadeUp} className="rounded-2xl border border-[#1f2937] overflow-hidden">
          <div className="bg-[#111827] px-6 py-4 border-b border-[#1f2937]">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Tetride® Material Data</h4>
          </div>
          <div className="divide-y divide-[#1f2937]">
            {properties.map((prop) => (
              <div
                key={prop.label}
                className="flex items-center justify-between px-6 py-4 bg-[#0d1117] hover:bg-[#111827] transition-colors"
              >
                <span className="text-gray-400 text-sm">{prop.label}</span>
                <span className={`font-semibold text-sm text-right max-w-[55%] ${prop.highlight ? "gradient-text" : "text-white"}`}>
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

Remove the old standalone "Specifications" section and the old standalone "Materials Comparison" section — they are fully replaced by the combined section above.

---

## CONTACT PAGE — `src/app/contact/page.tsx`

### 14. Update Purpose Dropdown Options
Replace the current `<select>` options with the following four options (in this exact order):

```tsx
<option value="general">General Inquiry</option>
<option value="product">Product Inquiry</option>
<option value="technology">Technology Discussion</option>
<option value="investor">Investor Relations</option>
```

Remove the old `investment`, `licensing`, and `partnership` option values. Update the `defaultPurpose` logic so that the URL param `?purpose=investment` maps to `"investor"` as the closest match:
```tsx
const defaultPurpose = searchParams.get("purpose") === "investment" ? "investor" : "general";
```

---

## Commit Instructions

After all changes are made, confirm `npm run build` passes with no TypeScript or lint errors, then:

```bash
git add .
git commit -m "Iteration 4: management revision set 2 — new assets, copy updates, layout changes"
git push origin main
```

Push only to `origin` (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT push to any other remotes.

---

## Change Summary

| # | Page / File | Change |
|---|---|---|
| 0 | `public/images/` | Copy 8 new image assets from `OneDrive_1_7-21-2026/`, rename spaces to hyphens |
| 1 | `page.tsx` | Hero subtitle: "commercializing" → "the culmination of" |
| 2 | `page.tsx` | Gallery: 4 new images + new captions + each image links to `/products` |
| 3 | `page.tsx` | Scalability pillar body text updated |
| 4 | `research/page.tsx` | Origin story final paragraph rewritten (Combining Tetride® with metals/ceramics) |
| 5 | `research/page.tsx` | Kaner portrait + lab photo replaced with "Incompressibility Explained" YouTube embed (placeholder ID — confirm URL with client) |
| 6 | `research/page.tsx` | Hardness chart image → `Hardness-Comparison.png`; caption updated |
| 7 | `research/page.tsx` | Section label "Research Program" → "Research Programs" |
| 8 | `research/page.tsx` | Key Publications intro: add "The list below highlights a few key publications." |
| 9 | `research/page.tsx` | Patent note: remove "under NDA" |
| 10 | `products/page.tsx` | Hero background → `Products-BG.jpg`, constrained height for wide crop effect |
| 11 | `products/page.tsx` | Remove gradient fade overlay + opacity from all application card images |
| 12 | `products/page.tsx` | 4 application card images replaced with new assets |
| 13 | `products/page.tsx` | Key Properties table moved next to Materials Comparison in a two-column layout |
| 14 | `contact/page.tsx` | Purpose dropdown: 4 new options (General Inquiry, Product Inquiry, Technology Discussion, Investor Relations) |

---

## Client Action Required

**Before the site goes live, confirm the YouTube video ID for the "Incompressibility Explained" video** referenced in Change #5. The dev agent has inserted a placeholder iframe with `INCOMPRESSIBILITY_VIDEO_ID_PLACEHOLDER` as the embed ID. Once you provide the correct YouTube URL (e.g. `https://youtu.be/XXXXXXX`), extract the video ID (`XXXXXXX`) and replace the placeholder in `src/app/research/page.tsx`.
