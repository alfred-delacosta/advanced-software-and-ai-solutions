export type PortfolioItem = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  status: "live" | "coming-soon";
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "sealsend",
    title: "SealSend",
    industry: "Secure file sharing",
    outcome:
      "Browser-sealed file share for businesses that handle personal information — expiring password-gated links, wipe from the dashboard, no email attachments left sitting forever.",
    status: "live",
    href: "https://github.com/alfred-delacosta/sealsend",
  },
  {
    id: "emailarchiver",
    title: "EmailArchiver",
    industry: "Email to PDF",
    outcome:
      "Upload .eml or .mbox files and export visual PDFs that match how the email looks — built for archiving and handoff without connecting a live inbox.",
    status: "live",
    href: "https://github.com/alfred-delacosta/emailarchiver",
  },
  {
    id: "ops-console",
    title: "Operations Console Rebuild",
    industry: "Logistics",
    outcome: "Unified dispatch and exception handling into one internal workspace.",
    status: "coming-soon",
  },
  {
    id: "knowledge-assistant",
    title: "Knowledge Base Assistant",
    industry: "Professional Services",
    outcome: "Cut average research time for client deliverables with grounded AI search.",
    status: "coming-soon",
  },
  {
    id: "billing-sync",
    title: "Billing & CRM Sync",
    industry: "SaaS",
    outcome: "Eliminated manual invoice reconciliation between CRM and billing systems.",
    status: "coming-soon",
  },
  {
    id: "partner-portal",
    title: "Partner Self-Service Portal",
    industry: "Distribution",
    outcome: "Gave partners order visibility and reduced inbound status requests.",
    status: "coming-soon",
  },
];
