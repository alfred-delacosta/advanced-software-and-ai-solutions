# Advanced Software and AI Solutions

Marketing site for Advanced Software and AI Solutions.

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules + global CSS (no Tailwind)
- Static metadata, sitemap, robots, Organization JSON-LD

## Getting started

Install dependencies, then start the dev server:

    npm install
    npm run dev

Open http://localhost:3000

## Environment

Copy .env.example to .env.local and set CONTACT_TO_EMAIL and optional RESEND_API_KEY.
Without RESEND_API_KEY, the contact API accepts valid submissions and logs them (stub). Mailto fallback is always shown.

## Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

## Deploy (Vercel)

1. Import the GitHub repo in Vercel
2. Framework: Next.js
3. Add CONTACT_TO_EMAIL and optional RESEND_API_KEY
4. Point domain to advancedsoftwareandaisolutions.com (metadataBase)
5. Deploy

## Contact policy

- Email only: contact@advancedsoftwareandaisolutions.com
- No phone numbers
- Remote-first across the United States (no city/local address)
