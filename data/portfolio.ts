export type PortfolioItem = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  status: "coming-soon";
};

export const portfolioItems: PortfolioItem[] = [
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
