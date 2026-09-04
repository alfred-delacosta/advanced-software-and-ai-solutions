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
    id: "sealsend",
    title: "SealSend",
    category: "Secure file sharing",
    summary:
      "Browser-sealed file share for businesses that handle personal information — expiring password-gated links, wipe from the dashboard, no email attachments left sitting forever.",
    statusLabel: "Live product",
    thumbSrc: "/portfolio/sealsend-portfolio.svg",
    thumbAlt: "SealSend secure file share",
  },
  {
    id: "emailarchiver",
    title: "EmailArchiver",
    category: "Email to PDF",
    summary:
      "Upload .eml or .mbox files and export visual PDFs that match how the email looks — built for archiving and handoff without connecting a live inbox.",
    statusLabel: "Live product",
    href: "https://github.com/alfred-delacosta/emailarchiver",
    thumbSrc: "/portfolio/emailarchiver-portfolio.svg",
    thumbAlt: "EmailArchiver email to PDF",
  },
];
