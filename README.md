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

Copy `.env.example` to `.env.local` for local builds:

- `NEXT_PUBLIC_MAIL_API_URL` - public base URL of the Hostinger Node mail API (Resend). When set, contact and waitlist forms POST JSON to `/api/contact` and `/api/waitlist` and show success only after HTTP 200.
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - optional legacy fallback if the mail API URL is unset.
- Mailto remains a last-resort fallback when neither is configured.

Server secrets (`RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`) live only on the mail API host, never in this static site.


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
