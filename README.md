# SuperMetallix — Corporate Website

Modern investor-facing website for SuperMetallix, Inc. Built with Next.js 14, Tailwind CSS, and Framer Motion. Deployed to DigitalOcean App Platform.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** DigitalOcean App Platform (auto-deploy from `main`)

## Local Development

### Prerequisites

- Node.js 20 LTS
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/Ethan-Rao/Supermetallix.git
cd Supermetallix

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

No environment variables are required to run the development server.

For production email integration (contact form), add the following to your DigitalOcean App Platform environment variables when ready:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host (future) |
| `SMTP_USER` | SMTP username (future) |
| `SMTP_PASS` | SMTP password (future) |
| `CONTACT_TO_EMAIL` | Destination email for form submissions (future) |

## Deployment

The site is deployed to DigitalOcean App Platform via the GitHub integration.

### Auto-Deploy

Every push to the `main` branch triggers an automatic deployment. The `.do/app.yaml` file contains the App Platform configuration.

### Manual Deploy

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create a new App → GitHub → `Ethan-Rao/Supermetallix` → `main` branch
3. Build command: `npm run build`
4. Run command: `npm start`
5. HTTP port: `3000`
6. Node.js environment

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, fonts, metadata)
│   ├── page.tsx            # Landing page
│   ├── research/page.tsx   # Research page
│   ├── products/page.tsx   # Products page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   └── api/contact/route.ts # Contact form API route
├── components/
│   ├── Navbar.tsx          # Fixed top navigation with mobile drawer
│   └── Footer.tsx          # Site footer
└── app/globals.css         # Design system, CSS custom properties
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Hero, stats, mission, pillars, research/products teasers, team |
| `/research` | Research | UCLA origin, hardness chart, research areas, publications, video |
| `/products` | Products | Tetride™ overview, applications, properties, hardness chart |
| `/about` | About | Company story, timeline, team, advisors, investor CTA |
| `/contact` | Contact | Contact form with purpose selector, company info |

## Content Updates

The site owner should update placeholder bios and copy in:
- `src/app/about/page.tsx` — team member bios and titles
- `src/app/research/page.tsx` — publications list (currently placeholder)
- All pages — final marketing copy before launch

## Image Assets

All images are stored in `public/images/`. Key assets:

- `SuperMetalix-Logo-Main-white.png` — Logo (dark backgrounds)
- `SuperMetalix-Logo-Main-5hw.png` — Logo (color)
- `hardness-chart.png` — Used on Research and Products pages
- Team photos — Used on About and Landing pages
