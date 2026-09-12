# Advanced Software and AI Solutions

Marketing site for Advanced Software and AI Solutions.

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules + global CSS (no Tailwind)
- **Static export** (`output: "export"`) for Hostinger Website (or any static host)
- Static metadata, sitemap, robots, Organization JSON-LD

## Getting started

Install dependencies, then start the dev server:

    npm install
    npm run dev

Open http://localhost:3000

## Environment

Copy `.env.example` to `.env.local` if you want optional Formspree:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - optional contact form POST URL (`https://formspree.io/f/...`)
- `NEXT_PUBLIC_FORMSPREE_WAITLIST_ENDPOINT` - optional (reserved; waitlist CTAs default to mailto)

Without Formspree, the contact form validates in the browser and opens a pre-filled **mailto:** to `contact@advancedsoftwareandaisolutions.com`. Mailto fallback is always shown on the contact page.

## Scripts

- `npm run dev` - local development
- `npm run build` - production **static** export to `out/`
- `npm run lint` - ESLint

There is no `next start` for production on Hostinger Website: upload the `out/` folder as static files.

## Deploy (Hostinger Website - static)

1. `npm ci && npm run build`
2. Upload everything inside `out/` to Hostinger Website / public_html (File Manager or Git deploy that publishes static files)
3. Point `advancedsoftwareandaisolutions.com` at the Hostinger site
4. Optional: set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in the build environment, then rebuild, if you want hosted form posts instead of mailto
5. No Node.js / application hosting slot required

### Deploy (any static host)

Same `out/` artifact works on Netlify, Cloudflare Pages, S3+CDN, etc. Do **not** enable a Node server adapter.

## Contact & waitlist policy

- Email only: contact@advancedsoftwareandaisolutions.com
- No phone numbers
- Remote-first across the United States (no city/local address)
- Product waitlists (BriefSeal, EmailArchiver) use mailto interest notes until launch
