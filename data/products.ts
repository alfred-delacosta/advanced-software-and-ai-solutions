import { contact } from "@/data/contact";

export type Product = {
  id: string;
  title: string;
  category: string;
  summary: string;
  statusLabel: string;
  ctaLabel: string;
  waitlistSubject: string;
  href?: string;
  thumbSrc: string;
  thumbAlt: string;
};

function waitlistMailto(productTitle: string, subject: string) {
  const body = [
    `Hi ASAIS,`,
    ``,
    `Please add me to the ${productTitle} waitlist.`,
    ``,
    `Name:`,
    `Company (optional):`,
    `Notes (optional):`,
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
      "Browser-sealed file share for businesses that handle personal information: expiring password-gated links, wipe from the dashboard, no email attachments left sitting forever.",
    statusLabel: "Coming soon",
    ctaLabel: "Join waitlist",
    waitlistSubject: "Waitlist: BriefSeal",
    // No outbound product URL until DNS / launch is live.
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
    ctaLabel: "Join waitlist",
    waitlistSubject: "Waitlist: EmailArchiver",
    thumbSrc: "/products/emailarchiver-portfolio.svg",
    thumbAlt: "EmailArchiver email to PDF",
  },
];

export function productWaitlistHref(product: Product): string {
  return waitlistMailto(product.title, product.waitlistSubject);
}

export type Products = typeof products;
