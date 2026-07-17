# Dev Agent Prompt: SuperMetallix Website — Initial Build

## Your Role
You are the lead developer for a complete ground-up rebuild of the SuperMetallix corporate website. The previous site (supermetalix.com) was a basic Squarespace site. The new site must be a modern, high-tech, investor-facing web application built with React (Next.js), deployed to a DigitalOcean App Platform via GitHub.

---

## Project Context

**Company:** SuperMetallix, Inc.  
**Product:** Tetride™ — a patented superhard metal boride material with hardness approaching diamond, developed over 15+ years at UCLA's Kaner Laboratory.  
**Goal of the new site:** Attract venture capital investment. The site should communicate scientific credibility, commercial readiness, and market opportunity. Think deep tech startup pitch deck, not a catalog site.  
**GitHub Repo:** https://github.com/Ethan-Rao/Supermetallix.git  
**Deployment target:** DigitalOcean App Platform (web app service, auto-deploy from main branch)

> ⚠️ **Isolation requirement:** This deployment must be scoped exclusively to the `Ethan-Rao/Supermetallix` repository. Do NOT modify any other repositories or DigitalOcean apps in the account. All DigitalOcean configuration should be contained within this project only (`.do/app.yaml`).

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 14** (App Router) | DigitalOcean native support; SSR/SSG; SEO |
| Styling | **Tailwind CSS** + custom CSS variables | Utility-first; easy theming |
| Animations | **Framer Motion** | Smooth, high-quality motion; VC-friendly feel |
| Icons | **Lucide React** | Lightweight, consistent |
| Forms | **React Hook Form** + fetch to a serverless route | Contact form |
| Deployment | **DigitalOcean App Platform** via GitHub Actions / auto-deploy | Simple, affordable |
| Node version | **20 LTS** | DigitalOcean App Platform compatible |

Do NOT use a separate backend service. Keep everything within the Next.js app (API routes for the contact form are fine).

---

## Repository Setup

1. Clone the empty repo: `git clone https://github.com/Ethan-Rao/Supermetallix.git`
2. Inside the repo root, scaffold the Next.js app **directly** (not in a subfolder):
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   ```
3. Install additional dependencies:
   ```bash
   npm install framer-motion lucide-react react-hook-form
   ```
4. Create `.do/app.yaml` (see DigitalOcean config section below).
5. Commit everything and push to `main`.

---

## DigitalOcean App Platform Configuration

Create `.do/app.yaml` in the repo root:

```yaml
name: supermetallix
region: nyc
services:
  - name: web
    github:
      repo: Ethan-Rao/Supermetallix
      branch: main
      deploy_on_push: true
    build_command: npm run build
    run_command: npm start
    environment_slug: node-js
    instance_size_slug: apps-s-1vcpu-0.5gb
    instance_count: 1
    http_port: 3000
    envs:
      - key: NODE_ENV
        value: production
```

The site owner will create the DigitalOcean App manually via the DigitalOcean dashboard after the initial push, pointing it at this repo and `main` branch. The `.do/app.yaml` is provided for reference and future CLI-based setup.

---

## Site Structure & Pages

Build these five pages:

| Route | Page | Purpose |
|-------|------|---------|
| `/` | **Landing** | Investor hook — hero, mission, key metrics, teaser sections |
| `/research` | **Research** | Scientific credibility — UCLA origin, Kaner Lab, publications |
| `/products` | **Products** | Tetride™ product line, properties, applications |
| `/about` | **About** | Team, advisors, company history |
| `/contact` | **Contact** | Contact form + investor inquiry CTA |

---

## Design System

### Philosophy
Clean, dark-mode-first, high-tech aesthetic. Inspired by deep tech companies like Anduril, Neuralink, and Boston Dynamics' sites — minimal prose, maximum visual impact. Every section should feel like it could appear in a Series A pitch deck.

### Color Palette
```css
:root {
  --bg-primary: #050810;        /* near-black with blue tint */
  --bg-secondary: #0d1117;      /* section backgrounds */
  --bg-card: #111827;           /* card surfaces */
  --accent-primary: #3b82f6;    /* electric blue — primary CTA */
  --accent-secondary: #06b6d4;  /* cyan — secondary highlights */
  --accent-gold: #f59e0b;       /* amber gold — premium/science accent */
  --text-primary: #f9fafb;      /* near-white */
  --text-secondary: #9ca3af;    /* muted gray */
  --border: #1f2937;            /* subtle borders */
  --glow: rgba(59, 130, 246, 0.15); /* blue glow for cards */
}
```

### Typography
- **Display / headings:** `Inter` (or `Space Grotesk` if available) — tight tracking, large scale
- **Body:** `Inter` — 16–18px, relaxed line height
- Load via `next/font/google`

### Motion Principles
- Use Framer Motion `viewport` triggers so sections animate in as the user scrolls
- Subtle upward fade-in (`y: 20 → 0, opacity: 0 → 1`) for content blocks
- Stagger children in grids/lists
- No jarring or over-animated effects — this is a VC site, not a game

---

## Page Specifications

### 1. Landing Page (`/`)

**Section 1 — Hero**
- Full-viewport dark background
- Use `christopher-burns-8KfCR12oeUM-unsplash.jpg` (from assets) as a subtle, dark-overlaid background image (`object-cover`, opacity ~20–30% overlay on dark bg)
- Centered layout:
  - Company logo (`SuperMetalix-Logo-Main-white.png`) — top, medium size
  - H1: `"Engineering the World's Hardest Materials"`
  - Subheadline: `"Tetride™ — patented superhard metal boride formulations with hardness approaching diamond."`
  - Two CTAs: `[Learn More →]` (scroll anchor) and `[Contact Us]` (link to `/contact`)
- Subtle animated particle or shimmer effect behind text (CSS only is fine, or use a simple canvas dot field)

**Section 2 — Key Stats Bar**
- Dark horizontal bar with 3–4 key metrics in large numerals:
  - `15+` Years of R&D
  - `Patented` Technology
  - `UCLA` Origin
  - `~100 GPa` Hardness
- These should animate counting up when scrolled into view

**Section 3 — Mission Statement**
- Single large quote/callout centered:
  - `"We have created a material hard enough to scratch a diamond."`
- Supporting text about Tetride's commercial potential

**Section 4 — Three Pillars (cards)**
- Grid of 3 cards with icon + short copy:
  1. **Science** — 15+ years UCLA Kaner Lab research
  2. **Commercialization** — Cost-effective vs. diamond and CBN
  3. **Market** — Cutting tools, abrasives, radiation shielding

**Section 5 — Research Teaser**
- Split layout: left side dark background with a research image, right side copy + CTA to `/research`
- Use `research.jpg` or `isis-franca-hsPFuudRg5I-unsplash.jpg`

**Section 6 — Products Teaser**
- Dark section with `superhard-hero.jpg` as full-width background (overlaid), centered headline + CTA to `/products`

**Section 7 — Team Teaser**
- 4–5 team member headshots in a row (thumbnail images from assets), names + titles, CTA to `/about`
- Use: `Richard-Kaner-thumb.jpg`, `Jack-Kavanaugh-thumb.jpg`, `Chris-Turner-thumb.jpg`, `Kesh-Keshavan-thumb.jpg`, `Robert-Snukal-thumb.jpg`

**Section 8 — Footer**
- Logo, nav links, copyright `© 2026 SuperMetallix, Inc.`

---

### 2. Research Page (`/research`)

**Hero:** `"The Science Behind Tetride™"` — dark page, `research.jpg` background with dark overlay

**Section: Origin Story**
- UCLA Kaner Laboratory — Dr. Richard Kaner's 15+ year research program
- Key insight: osmium diboride and related metal borides discovered as superhard but brittle; Tetride™ formulation overcomes this
- Photo of Richard Kaner (`Richard-Kaner-2.jpg`)

**Section: Hardness Comparison**
- Feature the `hardness-chart.png` prominently
- Explain Vickers hardness scale, position Tetride™ vs. diamond, cubic boron nitride, tungsten carbide

**Section: Research Areas**
- Grid of research topic cards:
  - Superhard Borides
  - Synthesis Methods
  - Composite Formulations
  - Radiation Shielding
  - Wear Resistance

**Section: Publications & IP**
- Callout box: "Patented technology — multiple issued U.S. and international patents"
- Note peer-reviewed publications from Kaner Lab (placeholder text is fine; instruct owner to update)

**Section: Video**
- Embed YouTube: `https://youtu.be/BA9n4pZrodo` (Tetride Superhard Materials)

---

### 3. Products Page (`/products`)

**Hero:** `"Tetride™ — Next-Generation Superhard Materials"` — dark hero with `diamond-hero.jpg` background

**Section: What is Tetride™?**
- Core material description: novel metal boride formulations, patented, synthesized at scale
- Key properties table:
  - Hardness: ~100 GPa (Vickers)
  - Melting Point: Very high (refractory)
  - Cost: Significantly lower than diamond
  - Scalability: Industrial synthesis ready

**Section: Application Areas**
- Six application cards with icon + copy:
  1. Cutting Tools & Drill Bits
  2. Abrasive / Polishing Media
  3. Wear-Resistant Coatings
  4. Radiation Shielding
  5. Scratch-Resistant Surfaces
  6. Composites & Structural Materials
- Use `cutting-wheel-and-drill-bits3.png`, `powders2.jpg`, `detail.jpg` as card imagery

**Section: Hardness Comparison Chart**
- Reuse `hardness-chart.png` with caption

**Section: Availability / CTA**
- "Inquire About Tetride™" button → `/contact`

---

### 4. About Page (`/about`)

**Hero:** `"Built on 15 Years of Breakthrough Science"` — dark, `gunmetal.jpg` textured background

**Section: Company Story**
- Founded to commercialize UCLA Kaner Lab research
- Spinout from academic research → real-world applications
- Brief timeline (e.g., 2005 research begins → 2020 company founded → 2026 commercial scale)

**Section: Leadership & Team**
- Grid of team cards — photo + name + title + 2-sentence bio (placeholder bios are fine)
- Team members (use available photos):
  - **Dr. Richard Kaner** — Co-founder, Chief Scientific Officer. Professor at UCLA, world-renowned materials scientist.
  - **Jack Kavanaugh** — Co-founder, CEO. (Bio placeholder)
  - **Kesh Keshavan** — (Title/Bio placeholder)
  - **Chris Turner** — (Title/Bio placeholder)
  - **Robert Snukal** — (Title/Bio placeholder)

**Section: Scientific Advisors**
- **Prof. Selim Senkan** — UCLA Chemical Engineering (use `SelimSenkan.png`)

**Section: Investor CTA**
- Dark callout box: "We are seeking strategic investment partners."
- Button: `Contact Us →` → `/contact`

---

### 5. Contact Page (`/contact`)

**Layout:** Split — left side dark panel with company info, right side clean form

**Left panel:**
- Logo
- Tagline: "Interested in licensing, partnership, or investment?"
- Email placeholder: `info@supermetallix.com`
- Location: Los Angeles, CA

**Right panel (form using React Hook Form):**
- Fields: Full Name, Email, Company/Organization, Message, dropdown "Purpose" (Investment Inquiry / Licensing / Partnership / General)
- Submit sends a `POST` to `/api/contact` (Next.js route handler)
- The API route should log the submission and return `{ success: true }` (full email integration to be configured later — use placeholder)
- Success state: animated checkmark + "We'll be in touch shortly."

---

## Image Asset Setup

1. Copy all images from `OneDrive_2026-06-10/Website Images/` into `public/images/` in the Next.js project.
2. Reference via `<Image>` component (`next/image`) for optimization.
3. Key mappings:
   - Logo white: `/images/SuperMetalix-Logo-Main-white.png`
   - Logo color: `/images/SuperMetalix-Logo-Main-5hw.png`
   - Hero bg: `/images/christopher-burns-8KfCR12oeUM-unsplash.jpg`
   - Research: `/images/research.jpg`
   - Products hero: `/images/superhard-hero.jpg`
   - Diamond: `/images/diamond-hero.jpg`
   - Hardness chart: `/images/hardness-chart.png`
   - Gunmetal: `/images/gunmetal.jpg`
   - Team photos: individual files per person

---

## Navigation Component

- Fixed top navbar, transparent on scroll / solid on scroll-down
- Left: Logo (`SuperMetalix-Logo-Main-white.png`)
- Center: Nav links → Home | Research | Products | About | Contact
- Right: `[Investor Inquiry]` button (accent blue, links to `/contact?purpose=investment`)
- Mobile: hamburger menu with slide-in drawer
- Active link indicator (underline or accent dot)

---

## SEO & Metadata

In `src/app/layout.tsx`, set:
```typescript
export const metadata = {
  title: 'SuperMetallix — Superhard Metal Boride Materials',
  description: 'SuperMetallix develops Tetride™, a patented superhard material with hardness approaching diamond. Commercializing 15+ years of UCLA research for cutting tools, abrasives, and more.',
  openGraph: {
    title: 'SuperMetallix — Engineering the World\'s Hardest Materials',
    description: 'Tetride™ superhard metal boride formulations. Patented. Scalable. Investment-ready.',
    url: 'https://supermetallix.com',
    siteName: 'SuperMetallix',
  },
}
```

---

## File Structure Target

```
/
├── .do/
│   └── app.yaml
├── public/
│   └── images/
│       └── [all image assets from OneDrive folder]
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx               (Landing)
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── TeamGrid.tsx
│   │   ├── ApplicationCards.tsx
│   │   └── ContactForm.tsx
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

---

## Git Workflow

```bash
# After scaffolding:
git add .
git commit -m "Initial Next.js scaffold — SuperMetallix site"
git push origin main

# After each major page:
git add .
git commit -m "Add [page name] page"
git push origin main
```

Push only to `origin` (`https://github.com/Ethan-Rao/Supermetallix.git`). Do NOT add or push to any other remotes.

---

## Quality Checklist Before Handoff

- [ ] All 5 pages render without errors (`npm run dev`)
- [ ] `npm run build` completes without TypeScript or lint errors
- [ ] Mobile responsive (breakpoints: 640px, 768px, 1024px)
- [ ] Images load via `next/image` (no raw `<img>` tags without `alt`)
- [ ] Contact form submits and shows success state
- [ ] All nav links work correctly
- [ ] Dark mode renders cleanly (no white flash on load)
- [ ] `.do/app.yaml` present at repo root
- [ ] `README.md` documents: local dev setup, env vars (if any), deployment steps
- [ ] No secrets, API keys, or credentials committed to the repo

---

## Content Notes for the Developer

- **Do not copy the current site's copy verbatim.** The goal is a repositioned, investor-facing narrative. Reframe everything toward scientific achievement + commercial opportunity.
- All copy is placeholder-grade — it will be edited by the client before launch. Focus on structure, layout, and visual quality.
- The company spelling in the GitHub repo is **SuperMetallix** (double-l). The old Squarespace site used **SuperMetalix** (single-l). Use **SuperMetallix** (double-l) as the canonical spelling throughout the new site.
- The product name is **Tetride™** — always render with the trademark symbol.

---

## Resources

- Asset catalog: `resources/asset-catalog.md` (in this project folder)
- Current site HTML source: `Current Page Source.docx` (in project root)
- Image assets: `OneDrive_2026-06-10/Website Images/`
- GitHub repo: https://github.com/Ethan-Rao/Supermetallix.git
- DigitalOcean App Platform docs: https://docs.digitalocean.com/products/app-platform/
