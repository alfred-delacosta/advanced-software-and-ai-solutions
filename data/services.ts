export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  href: string;
  included: string[];
  process: { step: string; detail: string }[];
  idealFor: string[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  /** Optional in-copy links: the first occurrence of each phrase in the description becomes a link. */
  descriptionLinks?: { phrase: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    summary:
      "Purpose-built web apps, APIs, and internal tools designed around how your team actually works.",
    description: `Growing teams outgrow spreadsheets, duct-taped SaaS stacks, and one-size-fits-all platforms. Custom software development is how you encode your process into reliable systems that scale with revenue instead of headcount.

At Advanced Software and AI Solutions, we build production-ready applications for US companies that need more than a template. That means clear product thinking, solid architecture, and code your future team can maintain. We favor pragmatic stacks - TypeScript, modern web frameworks, well-structured APIs, and cloud services that match your risk and budget.

Engagements typically start with discovery: we map workflows, constraints, and success metrics before writing a line of code. From there we ship in thin vertical slices so stakeholders see working software early. You get documented decisions, testable modules, and a roadmap for what comes after launch - not a black-box handoff.

Whether you need a customer-facing portal, an operations console, a partner integration hub, or a greenfield product MVP, we focus on clarity, security basics, and measurable outcomes. Our 100% U.S. based team keeps collaboration tight in American time zones while keeping overhead low.`,
    href: "/services/custom-software-development",
    included: [
      "Product discovery and technical scoping",
      "Architecture and data modeling",
      "Web application and API development",
      "Authentication, roles, and access control",
      "Cloud deployment and environment setup",
      "Documentation and knowledge transfer",
    ],
    process: [
      {
        step: "Discover",
        detail:
          "Workshops and stakeholder interviews to define goals, constraints, and the thinnest valuable release.",
      },
      {
        step: "Build",
        detail:
          "Iterative delivery with demos, code review, and continuous integration so quality stays visible.",
      },
      {
        step: "Operate",
        detail:
          "Launch support, monitoring hooks, and a clear backlog for the next set of improvements.",
      },
    ],
    idealFor: [
      "Teams replacing fragile spreadsheets or legacy tools",
      "Founders validating a software product with real users",
      "Operators who need internal systems that match unique workflows",
      "Companies integrating multiple vendors into one experience",
    ],
    relatedSlugs: [
      "ai-machine-learning",
      "integration-services",
      "automation-integrations",
      "software-ai-consulting",
    ],
    descriptionLinks: [
      { phrase: "a partner integration hub", href: "/services/integration-services/" },
    ],
    seoTitle: "Custom Software Development | Advanced Software and AI Solutions",
    seoDescription:
      "Custom web apps, APIs, and internal tools for growing U.S. teams. Discovery-led delivery from a 100% U.S. based software company. We never offshore your work.",
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    summary:
      "Practical AI features and ML workflows grounded in your data, not hype demos.",
    description: `AI only creates value when it is wired into real workflows with clear ownership of data quality, evaluation, and failure modes. We help US companies ship AI-assisted features that save time or improve decisions - without turning your product into an experiment nobody trusts.

Our AI and machine learning work spans retrieval-augmented generation for knowledge bases, classification and routing for operations queues, forecasting support for planning teams, and agent-style assistants that call your existing tools safely. We start by defining the job to be done, the acceptable error rate, and how humans stay in the loop.

Implementation emphasizes evaluation sets, prompt or model versioning, logging, and cost controls. We prefer proven model providers and open patterns over speculative research. When custom models make sense, we scope training data, labeling effort, and maintenance so you understand the true cost of ownership.

You leave with something your team can operate: documented pipelines, guardrails, and a path to expand coverage as confidence grows. A 100% U.S. based team keeps specialists close to your domain experts throughout the build.`,
    href: "/services/ai-machine-learning",
    included: [
      "Use-case framing and feasibility assessment",
      "Data readiness review and pipeline design",
      "LLM feature integration and RAG systems",
      "Evaluation harnesses and quality gates",
      "Safety, logging, and cost monitoring",
      "Handoff documentation for internal owners",
    ],
    process: [
      {
        step: "Discover",
        detail:
          "Identify high-ROI AI opportunities, data sources, risks, and success metrics with your stakeholders.",
      },
      {
        step: "Build",
        detail:
          "Prototype, evaluate, and harden the solution against real samples before wider rollout.",
      },
      {
        step: "Operate",
        detail:
          "Instrument usage, set review loops, and plan model or prompt updates as the domain evolves.",
      },
    ],
    idealFor: [
      "Support and ops teams drowning in repetitive triage",
      "Products that need intelligent search or summarization",
      "Leaders exploring AI with a production mindset",
      "Teams with proprietary data that should stay under control",
    ],
    relatedSlugs: [
      "custom-software-development",
      "automation-integrations",
      "software-ai-consulting",
    ],
    seoTitle: "AI & Machine Learning Services | Advanced Software and AI Solutions",
    seoDescription:
      "Practical AI implementation for U.S. small businesses: RAG, classification, assistants, and evaluation-driven delivery from a 100% U.S. based team.",
  },
  {
    slug: "automation-integrations",
    title: "Automation & Integrations",
    shortTitle: "Automation",
    summary:
      "Workflow automation that connects the SaaS tools your team already uses and removes the busywork between them.",
    description: `Most operational drag is not a missing dashboard - it is copy-paste between systems, inconsistent handoffs, and manual reconciliations that only one person understands. Automation and integrations turn those fragile rituals into reliable flows.

We automate the everyday workflows that run through the SaaS tools your team already uses: CRM updates, intake forms, approvals, notifications, and scheduled reports. The goal is fewer human touchpoints on routine work and a single source of truth your team can trust. For larger system integration services, such as partner and vendor connections, custom API development, or ETL pipelines, see our Integration Services.

Good automation is observable. We design retries, alerting, idempotency, and audit trails so failures are visible and recoverable. We also document ownership: which team owns which flow, what happens when a vendor changes their API, and how to extend the pattern to the next process.

Whether you need a handful of critical syncs or a broader automation program, we keep scope honest and prioritize the workflows that reclaim the most hours or reduce the most risk. A 100% U.S. based team means we can embed with your ops and engineering stakeholders in U.S. time zones without relocating anyone.`,
    href: "/services/automation-integrations",
    included: [
      "Process mapping and automation prioritization",
      "SaaS-to-SaaS syncs and app connections",
      "Scheduled jobs and trigger-based workflows",
      "Error handling, retries, and alerting",
      "Data mapping and reconciliation checks",
      "Runbooks for operations teams",
    ],
    process: [
      {
        step: "Discover",
        detail:
          "Inventory systems, pain points, and the highest-ROI automations with measurable hour or error savings.",
      },
      {
        step: "Build",
        detail:
          "Implement integrations with tests against sandbox or staging environments and gradual cutover plans.",
      },
      {
        step: "Operate",
        detail:
          "Monitor runs, refine edge cases, and hand over runbooks so your team can own day-to-day health.",
      },
    ],
    idealFor: [
      "Ops teams juggling multiple SaaS tools by hand",
      "Finance and revenue teams reconciling data across systems",
      "Companies onboarding customers through multi-step checklists",
      "Teams that need reliable glue between SaaS tools without a full platform rewrite",
    ],
    relatedSlugs: [
      "integration-services",
      "custom-software-development",
      "ai-machine-learning",
      "software-ai-consulting",
    ],
    seoTitle: "Workflow Automation Services | Advanced Software and AI Solutions",
    seoDescription:
      "Workflow automation and SaaS app syncs for U.S. small businesses. Observable, documented automations from a 100% U.S. based team. Never offshored.",
    descriptionLinks: [
      { phrase: "system integration services", href: "/services/integration-services/" },
    ],
  },
  {
    slug: "integration-services",
    title: "Integration Services",
    shortTitle: "Integrations",
    summary:
      "System integration services: API design and development, ETL pipelines, webhooks, and middleware.",
    description: `Advanced Software and AI Solutions (ASAIS) connects the systems your business runs on, inside your company and with your partners. That includes API design and development, ETL pipelines, webhooks, and middleware.`,
    href: "/services/integration-services",
    included: [
      "System integration",
      "Company-to-company integration",
      "API design and development",
      "ETL and data integration",
      "Webhooks and event-driven integration",
      "Middleware and iPaaS",
    ],
    process: [
      { step: "Discover", detail: "We learn your systems, your partners, and where data gets stuck." },
      { step: "Design", detail: "We propose an architecture and API approach, with clear scope and tradeoffs." },
      { step: "Build", detail: "We develop in small steps you can review, with tests along the way." },
    ],
    idealFor: [
      "Companies exchanging data with partners, vendors, or customers",
      "Teams that need documented, versioned APIs",
      "Businesses moving data between systems on a schedule or in real time",
    ],
    relatedSlugs: [
      "automation-integrations",
      "custom-software-development",
      "software-ai-consulting",
    ],
    seoTitle: "System Integration Services: API and ETL | Advanced Software and AI Solutions",
    seoDescription:
      "US-based system integration services: API design and development, ETL pipelines, webhooks, and middleware. Never offshored.",
  },
  {
    slug: "software-ai-consulting",
    title: "Software & AI Consulting",
    shortTitle: "Consulting",
    summary:
      "Independent guidance on architecture, build-vs-buy, and AI readiness before you commit budget.",
    description: `Sometimes the highest-leverage work is a clear recommendation - not another sprint of code. Software and AI consulting gives leadership a grounded view of options, tradeoffs, and sequencing so investment lands on the right problems.

We advise on application architecture, integration architecture, platform selection, technical due diligence, AI opportunity sizing, and delivery operating models. Engagements are structured as focused assessments or ongoing advisory retainers depending on how fast decisions need to move.

You get written findings, prioritized recommendations, and a roadmap your team can execute - whether that execution stays in-house, with us, or with another partner. We stay vendor-neutral on tools and honest when buying a product beats building one.

Because we also build, our advice reflects what it takes to ship and operate systems in production. That practical bias helps avoid slideware architectures that collapse under real constraints. We work as a 100% U.S. based team with American clients and adapt communication cadence to your stakeholders.`,
    href: "/services/software-ai-consulting",
    included: [
      "Architecture, stack, and integration architecture reviews",
      "Build-vs-buy analysis",
      "AI readiness and opportunity assessment",
      "Delivery process and team structure advice",
      "Technical due diligence support",
      "Executive-ready written recommendations",
    ],
    process: [
      {
        step: "Discover",
        detail:
          "Align on decisions to be made, gather context from stakeholders, and review existing systems and constraints.",
      },
      {
        step: "Analyze",
        detail:
          "Evaluate options against cost, risk, time-to-value, and operational burden with transparent tradeoffs.",
      },
      {
        step: "Advise",
        detail:
          "Deliver a prioritized roadmap and optional follow-on build or automation engagement.",
      },
    ],
    idealFor: [
      "Leaders planning a major platform or AI investment",
      "Teams stuck between competing technical approaches",
      "Buyers evaluating agencies or product vendors",
      "Companies that want a sounding board without a full-time hire",
    ],
    relatedSlugs: [
      "custom-software-development",
      "ai-machine-learning",
      "automation-integrations",
      "integration-services",
    ],
    descriptionLinks: [
      { phrase: "integration architecture", href: "/services/integration-services/" },
    ],
    seoTitle: "Software & AI Consulting | Advanced Software and AI Solutions",
    seoDescription:
      "Architecture, build-vs-buy, and AI guidance for U.S. companies. Practical recommendations from a 100% U.S. based team that also ships."
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => Boolean(s));
}
