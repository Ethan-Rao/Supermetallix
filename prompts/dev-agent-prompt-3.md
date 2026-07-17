# Dev Agent Prompt — Iteration 3: Management Revision Set 1

## Overview
This is a comprehensive revision pass based on management feedback. Every change listed below is **required and specific** — match the copy and structure exactly as written. Run `npm run build` after all changes before committing. Do not introduce new sections, components, or UI patterns beyond what is specified.

---

## GLOBAL — Apply to Every File

### 1. Company Name Spelling
Do a **global find-and-replace** across every `.tsx` file in `src/`:

- `SuperMetallix` → `SuperMetalix` (remove one `l`)
- `supermetallix` → `supermetalix` (lowercase occurrences, e.g. in email addresses)

This includes all string literals, alt text, email addresses, copyright lines, and display text. The repo name (`Ethan-Rao/Supermetallix`) and git remote URL must **not** be changed.

### 2. Trademark Symbol
Do a **global find-and-replace** across every `.tsx` file in `src/`:

- `Tetride™` → `Tetride®`
- `Tetride&trade;` → `Tetride&reg;`
- Any `™` following "Tetride" → `®`

In JSX, use `Tetride&reg;` where an HTML entity is needed, or the literal `®` character in string literals.

---

## HOME PAGE — `src/app/page.tsx`

### 3. Remove Hero Section Label
If there is any `section-label` element or `<p>` tag in the hero section that reads anything like "Tetride by SuperMetalix" or similar above the H1, remove it entirely.

### 4. Rewrite Hero H1
Change:
```
Engineering the World's Hardest Materials
```
To a **two-line heading**:
```
Commercializing the world's hardest metal –
Tetride®
```
Implement this as:
```tsx
<motion.h1 ...>
  Commercializing the world&rsquo;s hardest metal &ndash;{" "}
  <span className="block gradient-text">Tetride&reg;</span>
</motion.h1>
```

### 5. Rewrite Hero Subtitle
Change the `<motion.p>` subtitle to:
```
SuperMetalix has created a material hard enough to scratch diamond, commercializing over 15 years of UCLA superhard materials research.
```

### 6. CTA Buttons — Simplify to One, Centered
Remove the "Contact Us" / secondary CTA button entirely. Keep only one button, centered:
```tsx
<motion.div variants={fadeUp} className="flex justify-center">
  <Link href="/research" className="btn-primary text-base px-8 py-4">
    Explore the Research <ArrowRight className="w-5 h-5" />
  </Link>
</motion.div>
```

### 7. Replace Hero Video Placeholder with Actual YouTube Embed
Replace the current video placeholder (the dark rectangle with play icon) with a real YouTube embed:
```tsx
<motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl mx-auto">
  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
    <iframe
      src="https://www.youtube.com/embed/BA9n4pZrodo"
      title="SuperMetalix — Tetride Superhard Materials"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
</motion.div>
```

### 8. Stats Bar — Replace with 3 Fields
The current stats bar has 4 items. Replace it entirely with **exactly 3 items**, using an equal-width 3-column grid. Remove the `divide-x` divider treatment and use vertical separators instead:

```tsx
<section className="bg-[#0d1117] border-y border-[#1f2937] py-12">
  <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-0">
    {/* Item 1 */}
    <div className="text-center px-6 border-r border-[#1f2937]">
      <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">15+</div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">Years of Superhard Research</div>
    </div>
    {/* Item 2 */}
    <div className="text-center px-6 border-r border-[#1f2937]">
      <div className="text-2xl lg:text-3xl font-bold text-white font-display mb-1 leading-snug">
        Globally Patented
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">Technology</div>
    </div>
    {/* Item 3 */}
    <div className="text-center px-6">
      <div className="text-4xl lg:text-5xl font-bold gradient-text font-display mb-1">$50B+</div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">Global Markets</div>
    </div>
  </div>
</section>
```
Remove the animated `StatItem` counter for "15+" — replace with plain static text `15+` as shown above (the animation can stay if it works cleanly, but the value must be `15` with a `+` suffix and label "Years of Superhard Research").

### 9. Materials Gallery — Update Image Captions
In the "Tetride® in Every Form" section, update the captions to accurately describe each image:
```tsx
{ src: "/images/detail.jpg",                       label: "Pure Tetride® Pellets" },
{ src: "/images/powders2.jpg",                     label: "Tetride® Powder" },
{ src: "/images/cutting-wheel-and-drill-bits3.png", label: "Cutting Tool Inserts" },
{ src: "/images/malcolm-cutting-machine2.jpg",     label: "Industrial Machining" },
```

### 10. Three Pillars — Remove "Science", Rename & Rewrite Remaining Two

Remove the "Science" pillar card entirely.

Rename **"Commercialization"** to **"Scalability"** (management left this blank; use "Scalability" as the working title). Replace its description with:
> "Tetride® and composites synthesized at ambient pressure with industrial scalability. Hardnesses approaching synthetic superhard materials with the manufacturing ease of conventional tungsten carbide."

Rename **"Market"** to **"Applicable Markets"**. Replace its description with:
> "Tetride® seeks to bridge the gap between conventional tungsten carbide and the superhard synthetics, polycrystalline diamond and cubic boron nitride. The total addressable markets for cutting tools, superabrasives, wear resistant components, and radiation shielding exceeds $50B with CAGRs above ~5%."

Since there are now only **2 pillars**, change the grid class from `md:grid-cols-3` to `md:grid-cols-2 max-w-4xl mx-auto`.

### 11. Remove Four Home Page Sections
Delete the following sections entirely from `page.tsx`:
1. **Research Teaser** — the `<section>` containing "15+ Years of UCLA Research" split-layout (identified by `{/* ─── RESEARCH TEASER ─── */}`)
2. **Products Teaser** — the full-width background section with "Next-Generation Superhard Materials" (identified by `{/* ─── PRODUCTS TEASER ─── */}`)
3. **Team Teaser** — the section with team member avatars (identified by `{/* ─── TEAM TEASER ─── */}`)
4. **Investor CTA** — the blue-glow box "Ready to Back the Future of Materials" (identified by `{/* ─── INVESTOR CTA ─── */}`)

---

## FOOTER — `src/components/Footer.tsx`

### 12. Update Tagline
Change:
```
Engineering the World's Hardest Materials
```
To:
```
Commercializing the world&rsquo;s Hardest Metals
```

### 13. Update Company Description
Change the description paragraph to:
```
SuperMetalix is scaling up novel superhard materials for various industrial applications, the product of over 15+ years of superhard materials research.
```

### 14. Remove Location
Delete the `MapPin` / "Los Angeles, CA" row from the footer entirely. Keep only the email link.

### 15. Mission Column — Remove Tagline Blurb
In the Mission column, keep the first paragraph (placeholder mission text). Remove the second paragraph that reads:
```
Founded on 15+ years of UCLA research. Patented. Investment-ready.
```

### 16. Update Copyright & Trademark Lines
```tsx
<p className="text-gray-500 text-sm">© 2026 SuperMetalix, Inc. All rights reserved.</p>
<p className="text-gray-600 text-xs">Tetride&reg; is a registered trademark of SuperMetalix, Inc.</p>
```

---

## RESEARCH PAGE — `src/app/research/page.tsx`

### 17. Add "What is Tetride®?" Section at the Top (Before Origin Story)
Insert the following new section **between the hero and the origin story section**:

```tsx
{/* ─── WHAT IS TETRIDE ─── */}
<section className="py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.p variants={fadeUp} className="section-label mb-4">The Material</motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-8">
        What is Tetride&reg;?
      </motion.h2>
      <motion.div variants={fadeUp} className="text-gray-300 leading-relaxed text-lg space-y-5">
        <p>
          Tetride&reg; is SuperMetalix&rsquo;s proprietary novel, superhard metal boride
          formulation — the culmination of materials research at UCLA. The material is
          capable of scratching diamond, which means in at least one crystallographic
          orientation it is as hard as diamond.
        </p>
        <p>
          However, unlike diamond (and cubic boron nitride) it does not require high
          pressures to synthesize, thereby increasing cost-effective scalability. Facile
          synthesis on par with tungsten carbide, with mechanochemical properties
          approaching those of diamond and cubic boron nitride, allows for complex
          geometries at a fraction of the cost — making a new generation of superhard
          materials economically viable.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>
```

### 18. Rename "Origin Story" Label
Change the section-label text from `"Origin Story"` to `"Research past to present"`.

### 19. Rewrite Origin Story Body Text
Replace all three `<p>` paragraphs inside the `space-y-4` div with the following new narrative showing the OsB₂ → ReB₂ → Tetride® progression:

```tsx
<p>
  Dr. Richard Kaner&rsquo;s research group at UCLA began exploring transition metal
  borides as superhard materials over two decades ago. Initial work centered on
  osmium diboride (OsB&#8322;), demonstrating that dense metal-boron covalent
  networks could produce extreme hardness — a discovery published in the{" "}
  <em>Journal of the American Chemical Society</em> and <em>Science</em> that
  established the metal boride class as viable superhard candidates.
</p>
<p>
  Research progressed to rhenium diboride (ReB&#8322;), which achieved
  superhard-class hardness under ambient synthesis conditions — a breakthrough
  published in <em>Science</em> (2007) that opened the door to industrial-scale
  production without the ultra-high pressures required for diamond or cubic boron
  nitride synthesis.
</p>
<p>
  Through four generations of formulation experiments, the Kaner Laboratory
  identified and optimized the composition that became Tetride&reg;. Unlike its
  predecessors, Tetride&reg; overcomes the brittleness that limited earlier metal
  borides, delivering the hardness and mechanical toughness required for real-world
  cutting tool and abrasive applications — and doing so through synthesis routes
  compatible with standard industrial equipment.
</p>
```

### 20. Hardness Chart Section — Add Placeholder Comment
The chart image will be replaced with an updated version (Pure Tetride®/Composites demarcations). Keep the current `hardness-chart.png` for now but add this comment directly above the `<Image>` tag:
```tsx
{/* TODO: Replace with updated Tetride® Pure / Composites hardness chart image when provided */}
```

### 21. Active Research Areas — Update Descriptions

Update the `researchAreas` array:

**Superhard Borides** — change description to:
> "Investigation of transition metal borides as viable alternatives to diamond and cubic boron nitride, with a focus on atomic-level hardness mechanisms."

**Synthesis Methods** — change description to:
> "Development of scalable, cost-effective synthetic routes for metal borides, whether superhard or ultrahigh temperature ceramics, enabling industrial-scale production."

**Composite Formulations** — no change.

**Radiation Shielding** — change `"nuclear and medical settings"` to `"nuclear and medical applications"`.

**Wear Resistance** — no change.

**ADD new card at the end:**
```tsx
{
  icon: <Gem className="w-6 h-6 text-pink-400" />,
  title: "Abrasive Grit",
  description:
    "Developing large grain and particle sizes under ambient pressure to produce a lower-cost alternative superhard abrasive material.",
},
```
Import `Gem` from `lucide-react`.

### 22. Publications & Patents — Rename, New Subtitle, Rewrite Patent Description

Change the section heading from `"Patents & Publications"` to `"Publications & Patents"`.

Change the section subtitle to:
> "25+ years of peer-reviewed research and a growing international patent portfolio for all Tetride® technologies."

**Swap the column order**: put the **Publications column on the left** and the **Patents column on the right** (to match the new "Publications & Patents" title order).

**Rewrite the patent portfolio description paragraph** to:
> "SuperMetalix holds exclusive licensing rights to UCLA&rsquo;s issued and pending patents covering Tetride&reg; compositions, synthesis processes, and commercial applications. The portfolio includes multiple issued U.S. patents and international PCT filings, protecting both the core chemistry and key industrial use cases. Additional patents are actively pending as the technology continues to evolve."

Everything else in that section (the patent bullet rows and the publication entries) remains as written in Prompt 2.

### 23. Remove Video Section
Delete the entire `{/* ─── VIDEO ─── */}` section (the `<section>` containing the YouTube iframe). The video now lives on the home page.

### 24. Update Research CTA Sub-text
Change:
```
Reach out to discuss licensing, research collaboration, or investment opportunities.
```
To:
```
Reach out to learn more or discuss the technology!
```

---

## PRODUCTS PAGE — `src/app/products/page.tsx`

### 25. Rewrite Products Hero H1
Change the hero `<h1>` to a two-line format:
```tsx
<motion.h1 ...>
  Next-Generation Superhard Materials
  <span className="block gradient-text">Tetride&reg;</span>
</motion.h1>
```

### 26. Remove "What is Tetride®?" Section
Delete the entire `{/* ─── WHAT IS TETRIDE ─── */}` section from `products/page.tsx` (it has been moved to the Research page in change #17 above).

### 27. Rename Applications Section to "Products"
Change the `section-label` text from `"Applications"` to `"Products"`.
Change the `section-heading` text from `"Where Tetride® Excels"` to `"Where Tetride® Excels"` — keep the heading, just update the label.

Actually: keep the heading "Where Tetride® Excels" — just change the section-label above it from "Applications" to "Products".

### 28. Update All Six Application Cards
Replace the `applications` array with the following:
```tsx
const applications = [
  {
    icon: <Drill className="w-8 h-8 text-blue-400" />,
    title: "Cutting Tools & Lathe Inserts",
    description:
      "Tetride® composite inserts may dramatically extend tool life in precision machining, hard turning, and oil & gas applications.",
    img: "/images/cutting-wheel-and-drill-bits3.png",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "Abrasive & Polishing Media",
    description:
      "Superhard Tetride® particles enable precision polishing and grinding of ceramics, composites, and hardened metals where conventional abrasives fall short.",
    img: "/images/powders2.jpg",
  },
  {
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    title: "Wear-Resistant Surfaces",
    description:
      "High-wear surfaces for industrial components — extending the service life of bearings, dies, and wear surfaces in demanding environments.",
    img: "/images/detail.jpg",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Radiation Shielding",
    description:
      "Refractory formulations containing natural abundance (or enriched ¹⁰B) providing phenomenal neutron attenuation as a contender for next-generation shielding applications.",
    img: "/images/research.jpg",
  },
  {
    icon: <Atom className="w-8 h-8 text-green-400" />,
    title: "Ultra-High Temperature Composites",
    description:
      "Densification of ultra-high temperature materials has been difficult due to the inherent stability of the composition. Tetride® as an additive may lower the necessary processing temperature.",
    img: "/images/detail_2.jpg",
  },
  {
    icon: <Wrench className="w-8 h-8 text-red-400" />,
    title: "3D Printing & Cladding",
    description:
      "Proprietary binder formulations allow for 3D metal printing (SLS) and laser cladding of the material to produce complex geometries and wear-resistant surfaces.",
    img: "/images/powders3.jpg",
  },
];
```

### 29. Move Key Properties Table BELOW Applications/Products Section
Currently the properties table appears before the applications grid. Move the entire `{/* ─── WHAT IS TETRIDE ─── */}` properties block (now just the properties table, since the "What is Tetride" text was removed) to appear **after** the applications section and **before** the "Materials Comparison" section.

The section heading above the table should read:
- Section label: `"Specifications"`
- Heading: `"Key Properties"`

### 30. Update Properties Table Data
Replace the `properties` array with:
```tsx
const properties = [
  { label: "Form Factor",           value: "Powders and Blanks (Billet Composites)", highlight: false },
  { label: "Hardness",              value: "Particles: > 44 GPa  |  Composites: > 17 GPa", highlight: true },
  { label: "Melting Point",         value: "> 2200 °C — Refractory Material",   highlight: false },
  { label: "Oxidation Resistance",  value: "450 °C in air, formulation dependent", highlight: false },
  { label: "Machinability",         value: "Electrical Discharge Machining and Surface Grinding", highlight: false },
  { label: "Scalability",           value: "Tonnage production capable",          highlight: false },
];
```

### 31. Rename Performance Section
Change:
- Section label: `"Performance Data"` → `"Materials Comparison"`
- Section heading: `"Hardness Comparison Chart"` → `"Tetride® vs. Industry's Best"`

Add the following comment above the chart image:
```tsx
{/* TODO: Replace with updated Tetride® vs. industry comparison chart when provided */}
```

### 32. Update Products CTA Text
Change the CTA body text from:
```
Whether you're exploring licensing, a material supply agreement, or an investment partnership — we'd like to hear from you.
```
To:
```
If anything above has piqued your interest — we&rsquo;d like to hear from you!
```

---

## ABOUT PAGE — `src/app/about/page.tsx`

### 33. Update Hero H1 and Subtitle
Change H1 from `"Built on 15 Years of Breakthrough Science"` to `"Leadership"`.

Change hero subtitle from `"SuperMetallix was founded to bring..."` to:
```
SuperMetalix, Inc. brings the next-generation of superhard materials based on scientific advances of the past decade to commercial reality.
```

### 34. Rename and Rewrite Company Story Section
Change the `section-heading` from `"From Lab to Market"` to `"Who we are"`.

Replace all `<p>` paragraphs in the company story body with:
```tsx
<p>
  Through proprietary formulations developed at UCLA, SuperMetalix has created
  cost-efficient, industry-competitive materials. Under the continued scientific
  leadership of Dr. Kaner and Dr. Turner, SuperMetalix has licensed patents from
  UCLA; furthermore, SuperMetalix has a number of patents pending and IP in
  development that will not only maintain its position at the forefront of
  technological advances, but is poised to revolutionize the market — producing
  cost-efficient superhard metallic composites far superior to today&rsquo;s
  commonly-used hard metals.
</p>
```

### 35. Remove Timeline Section
Delete the entire `{/* ─── TIMELINE ─── */}` section (the "Our Journey" vertical timeline with year markers).

### 36. Merge Advisory Board Into Team — Reordered Combined Grid
Delete the separate `{/* ─── ADVISORS ─── */}` section entirely.

In the team section, replace the `teamMembers` array with the following combined, reordered list (management-specified order):

```tsx
const teamMembers = [
  {
    name: "Jack Kavanaugh, MD, MBA",
    title: "Chairman of the Board & CEO",
    img: "/images/Jack-Kavanaugh-2.jpg",
    bio: "Serial entrepreneur and technology commercialization specialist. Jack brings executive leadership experience and a track record of taking deep-tech innovations from lab to market.",
  },
  {
    name: "Richard Kaner, Ph.D.",
    title: "Chief Scientific Advisor & Board of Directors",
    img: "/images/Richard-Kaner-2.jpg",
    bio: "Distinguished Professor at UCLA and world-renowned materials scientist. Dr. Kaner has spent 20+ years pioneering superhard metal boride research at the Kaner Laboratory, laying the scientific foundation for Tetride®.",
  },
  {
    name: "Chris Turner, Ph.D.",
    title: "Chief Science Officer / Chief Operations Officer",
    img: "/images/Chris-Turner-thumb.jpg",
    bio: "Background in advanced manufacturing and materials processing. Dr. Turner leads Tetride® synthesis scale-up and production process development.",
  },
  {
    name: "Mahi de Silva",
    title: "Board of Directors",
    img: "/images/mahi-thumbs.jpg",
    bio: "Experienced board member and strategic advisor with deep expertise in industrial technology ventures and commercial scale-up.",
  },
  {
    name: "Robert Snukal",
    title: "Board of Directors",
    img: "/images/Robert-Snukal.jpg",
    bio: "Finance and business development professional. Robert manages investor relations, capital strategy, and corporate development for SuperMetalix.",
  },
  {
    name: "Selim Senkan, Ph.D.",
    title: "Scientific Advisor",
    img: "/images/SelimSenkan.png",
    bio: "Distinguished Professor of Chemical Engineering at UCLA. Prof. Senkan brings expertise in catalysis, reaction engineering, and materials processing to the SuperMetalix scientific advisory board.",
  },
];
```

Change the team grid heading from `"The Team"` to `"Leadership & Advisors"`.

Keep the `sm:grid-cols-2 lg:grid-cols-3` grid layout as-is.

---

## CONTACT PAGE — `src/app/contact/page.tsx`

### 37. Update Hero Subtitle
Change:
```
Interested in licensing, partnership, or investment? We'd love to hear from you.
```
To:
```
Interested in further information or discussion? We&rsquo;d love to hear from you.
```

### 38. Update Left Panel Tagline
Change the `<p>` paragraph in the left panel from:
```
Interested in licensing, partnership, or investment in Tetride™ superhard materials? We're ready to talk.
```
To:
```
We&rsquo;re ready to talk.
```

### 39. Update Location
Replace `<p className="text-gray-400 text-sm">Los Angeles, CA</p>` with two location lines:
```tsx
<p className="text-gray-400 text-sm">Corporate: Sunny Isles Beach, FL 33160</p>
<p className="text-gray-400 text-sm mt-1">Pilot Plant: Chico, CA 95928</p>
```

### 40. Remove Three Info Cards
Delete the entire `motion.div` block containing the three cards ("Investment Inquiry", "Licensing", "Partnership") from the left panel.

### 41. Simplify Purpose Dropdown
Replace the current Purpose `<select>` options with only two options:
```tsx
<option value="general">General Inquiry</option>
<option value="technology">Technology Discussion</option>
```
Remove the `investment`, `licensing`, and `partnership` option values. Update the `defaultPurpose` logic accordingly — default to `"general"`.

### 42. Update Form Textarea Placeholder
Change:
```
Tell us about your interest in SuperMetallix...
```
To:
```
Tell us about your interest in SuperMetalix...
```

---

## NAVBAR — `src/components/Navbar.tsx`

### 43. Remove "Investor Inquiry" Button
If the navbar contains an "Investor Inquiry" CTA button on the right side, remove it. The navbar should contain only the logo and navigation links.

---

## Commit Instructions

After all changes are made and `npm run build` passes with no TypeScript or lint errors:

```bash
git add .
git commit -m "Iteration 3: management revision set 1 — copy, structure, and branding updates"
git push origin main
```

Push only to `origin` (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT push to any other remotes.

---

## Change Summary Table

| # | File | Change |
|---|------|--------|
| 1 | All `src/**/*.tsx` | `SuperMetallix` → `SuperMetalix` globally |
| 2 | All `src/**/*.tsx` | `Tetride™` → `Tetride®` globally |
| 3–11 | `page.tsx` | Hero rewrite, single CTA, YouTube embed, 3-item stats bar, gallery captions, 2-pillar section, remove 4 sections |
| 12–16 | `Footer.tsx` | Tagline, description, remove location, remove blurb, trademark line |
| 17 | `research/page.tsx` | Add "What is Tetride®?" section at top |
| 18–19 | `research/page.tsx` | Rename "Origin Story"; rewrite body (OsB₂→ReB₂→Tetride® arc) |
| 20 | `research/page.tsx` | Add TODO comment for new hardness chart |
| 21 | `research/page.tsx` | Update 3 research area descriptions; add "Abrasive Grit" card |
| 22 | `research/page.tsx` | Pub & Patents: rename, new subtitle, rewrite patent text, swap column order |
| 23 | `research/page.tsx` | Remove video section |
| 24 | `research/page.tsx` | CTA sub-text update |
| 25 | `products/page.tsx` | Hero H1 rewrite |
| 26 | `products/page.tsx` | Remove "What is Tetride®?" section |
| 27 | `products/page.tsx` | Section label "Applications" → "Products" |
| 28 | `products/page.tsx` | All 6 application cards renamed and rewritten |
| 29–30 | `products/page.tsx` | Properties table moved below applications; data rewritten |
| 31 | `products/page.tsx` | Section renamed "Materials Comparison"; heading "Tetride® vs. Industry's Best" |
| 32 | `products/page.tsx` | CTA body text updated |
| 33 | `about/page.tsx` | Hero H1 → "Leadership"; subtitle updated |
| 34 | `about/page.tsx` | Story section: "Who we are" + new body text |
| 35 | `about/page.tsx` | Remove timeline section |
| 36 | `about/page.tsx` | Merge advisors into team; reorder 6-person grid |
| 37–42 | `contact/page.tsx` | Subtitle, tagline, location update, remove info cards, simplify dropdown |
| 43 | `Navbar.tsx` | Remove "Investor Inquiry" button if present |
