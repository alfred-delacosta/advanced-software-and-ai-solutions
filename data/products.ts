export type Product = {
  id: string;
  title: string;
  category: string;
  summary: string;
  statusLabel: string;
  href?: string;
  thumbSrc: string;
  thumbAlt: string;
};

export const products: Product[] = [
  {
    id: "briefseal",
    title: "BriefSeal",
    category: "Secure file sharing",
    summary:
      "A safe way to send documents to clients, and get documents back.",
    statusLabel: "Live product",
    // No outbound to getbriefseal.com until DNS is live.
    thumbSrc: "/products/briefseal-portfolio.svg",
    thumbAlt: "BriefSeal secure file share",
  },
  {
    id: "emailarchiver",
    title: "EmailArchiver",
    category: "Email to PDF",
    summary:
      "Upload .eml or .mbox and export clean PDFs for archiving and handoff.",
    statusLabel: "Live product",
    thumbSrc: "/products/emailarchiver-portfolio.svg",
    thumbAlt: "EmailArchiver email to PDF",
  },
];
