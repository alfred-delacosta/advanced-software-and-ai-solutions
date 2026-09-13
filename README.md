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

- `NEXT_PUBLIC_MAIL_API_URL` - public base URL of the Hostinger Node mail API (Resend). Production value: `https://asaasapps.com` (no trailing slash). When set, contact and waitlist forms POST JSON to `{base}/api/contact` and `{base}/api/waitlist` and show success only after HTTP 200.
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
4. Set `NEXT_PUBLIC_MAIL_API_URL=https://asaasapps.com` in the build environment (already in `.env.example`), then rebuild so contact and waitlist forms POST to that origin
5. Optional: set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` only if you need the legacy Formspree fallback when the mail API URL is unset
6. No Node.js / application hosting slot required for the static marketing site (mail API runs separately on Hostinger Node)

### Deploy (any static host)

Same `out/` artifact works on Netlify, Cloudflare Pages, S3+CDN, etc. Do **not** enable a Node server adapter.

## Contact & waitlist policy

- Email only: contact@advancedsoftwareandaisolutions.com
- No phone numbers
- Remote-first across the United States (no city/local address)
- Product waitlists (BriefSeal, EmailArchiver) POST to the mail API when `NEXT_PUBLIC_MAIL_API_URL` is set; otherwise mailto interest notes
