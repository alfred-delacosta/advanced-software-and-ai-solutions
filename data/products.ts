import { contact } from "@/data/contact";

export type Product = {
  id: string;
  title: string;
  category: string;
  summary: string;
  statusLabel: string;
  ctaLabel: string;
  microcopy: string;
  waitlistSubject: string;
  href?: string;
  thumbSrc: string;
  thumbAlt: string;
};

function waitlistMailto(productTitle: string, subject: string) {
  const body = [
    `I want to join the waitlist for ${productTitle}.`,
    ``,
    `Email:`,
    `Name (optional):`,
    `Company (optional):`,
    ``,
  ].join("\n");
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const products: Product[] = [
  {
    id: "briefseal",
    title: "BriefSeal",
    category: "Secure file sharing",
    summary:
      "A safe way to send documents to clients, and get documents back.",
    statusLabel: "Coming soon",
    ctaLabel: "Join the BriefSeal waitlist",
    microcopy: "Be first to know when BriefSeal opens. No spam.",
    waitlistSubject: "BriefSeal waitlist",
    thumbSrc: "/products/briefseal-portfolio.svg",
    thumbAlt: "BriefSeal secure file share",
  },
  {
    id: "emailarchiver",
    title: "EmailArchiver",
    category: "Email to PDF",
    summary:
      "Upload .eml or .mbox files and export visual PDFs that match how the email looks, built for archiving and handoff without connecting a live inbox.",
    statusLabel: "Coming soon",
    ctaLabel: "Join the EmailArchiver waitlist",
    microcopy: "Get notified when EmailArchiver is ready. Email only.",
    waitlistSubject: "EmailArchiver waitlist",
    thumbSrc: "/products/emailarchiver-portfolio.svg",
    thumbAlt: "EmailArchiver email to PDF",
  },
];

export function productWaitlistHref(product: Product): string {
  return waitlistMailto(product.title, product.waitlistSubject);
}

export type Products = typeof products;
