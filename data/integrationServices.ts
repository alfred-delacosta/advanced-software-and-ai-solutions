/**
 * Integration Services hub copy.
 * Sources: Marketing Bot copy v3, final with Jay's decisions
 * (/home/box/plans/asais-integration-services-copy.md), SEO Bot plan
 * (asais-integration-services-seo.md), AEO Bot additions (asais-integration-services-aeo.md).
 *
 * Per Jay (2026-10-14): no Azure, BizTalk, or electronic data interchange offering, no named apps. Founder line approved.
 * No Person schema node: the approved line does not state a name or title.
 */

export const integrationServices = {
  slug: "integration-services",
  path: "/services/integration-services/",
  seoTitle: "System Integration Services: API and ETL",
  seoDescription:
    "US-based system integration services: API design and development, ETL pipelines, webhooks, and middleware. Never offshored.",
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  lastUpdatedLabel: "October 14, 2026",
  hero: {
    eyebrow: "100% U.S. based team",
    h1: "Integration services that get your systems talking",
    lead: "Our system integration services connect the software your business runs on, inside your company and with your partners. We design APIs, move data between systems, and set up integration processes your team can rely on.",
    trustLine: "A 100% U.S. based team. We never offshore your work.",
    primaryCta: "Email us about your integration",
    secondaryCta: "See how we work",
    secondaryHref: "#process",
  },
  cover: {
    h2: "What our integration services cover",
    definition:
      "System integration services connect separate software systems so data moves between them automatically and reliably.",
    intro:
      "Advanced Software and AI Solutions (ASAIS) connects the systems your business runs on, inside your company and with your partners. That includes API design and development, ETL pipelines, webhooks, and middleware.",
    items: [
      {
        title: "System integration",
        detail:
          "We connect internal tools and SaaS platforms so data moves where it needs to, on time and in the right shape. No more re-keying orders, customers, or invoices from one screen to another.",
      },
      {
        title: "Company-to-company integration",
        detail:
          "We build and maintain connections with your partners, vendors, and customers. Depending on what the other side supports, that might be secure file exchange over SFTP or partner APIs. We coordinate directly with their technical team so you don't have to translate.",
      },
      {
        title: "API design and development",
        detail:
          "We design and build clean, documented REST APIs for internal teams, partners, and customers. That covers versioning, authentication, error handling, and documentation people can actually use.",
      },
      {
        title: "ETL and data integration",
        detail:
          "We build pipelines that extract data from your systems, clean and reshape it, and load it where it's needed, whether that's a reporting database, a data warehouse, or another application. We add reconciliation checks so you can trust the numbers.",
      },
      {
        title: "Webhooks and event-driven integration",
        detail:
          "When systems need to react in real time, we use webhooks, queues, and messaging. We design for the messy parts: retries, duplicate events, and messages that arrive out of order.",
      },
      {
        title: "Middleware and iPaaS",
        detail:
          "Sometimes the right answer is an integration platform, and sometimes it's custom code. We'll give you an honest build vs buy recommendation based on cost, control, and who will maintain it.",
        linkLead: "Need simple app-to-app automations for an ops team instead? See ",
        linkText: "workflow automation",
        linkHref: "/services/automation-integrations/",
      },
    ],
  },
  patterns: {
    h2: "Integration patterns we use",
    items: [
      { name: "Request and response APIs", detail: "One system asks, another answers, right away." },
      { name: "Webhooks", detail: "A system notifies another the moment something changes." },
      {
        name: "Publish and subscribe messaging",
        detail: "Events go to a queue or topic, and any system that cares can pick them up.",
      },
      {
        name: "Batch ETL and ELT",
        detail: "Data moves on a schedule in larger loads, transformed before or after it lands.",
      },
      {
        name: "Point-to-point vs hub",
        detail:
          "Direct connections work for a few systems. A central hub or middleware layer keeps things manageable as the count grows.",
      },
    ],
    table: {
      h3: "Integration choices compared",
      caption:
        "Common integration choices compared by best fit, cost shape, and change effort",
      columns: ["Best fit", "Cost shape", "Change effort"],
      rows: [
        {
          option: "ETL",
          bestFit: "Data that must be cleaned or filtered before it lands",
          cost: "Transformation compute runs outside the destination",
          change: "New data needs pipeline changes before it can load.",
        },
        {
          option: "ELT",
          bestFit: "Cloud warehouses where raw data is kept for reuse",
          cost: "Warehouse compute and storage",
          change: "Transform logic changes in place, and raw data can be reprocessed.",
        },
        {
          option: "iPaaS",
          bestFit: "Common connections between popular apps",
          cost: "Subscription, often priced by connection or run volume",
          change: "Quick for supported connectors, harder for custom logic.",
        },
        {
          option: "Custom code",
          bestFit: "Complex logic, high volume, or unusual systems",
          cost: "Higher build cost up front, lower running cost",
          change: "Full control, and changes need a developer.",
        },
        {
          option: "Point-to-point",
          bestFit: "A small number of systems",
          cost: "Cheap to start, grows with every new connection",
          change: "One change can ripple across many connections.",
        },
        {
          option: "Hub or middleware",
          bestFit: "A growing number of systems and partners",
          cost: "More setup, lower cost for each new system",
          change: "Changes happen in one place.",
        },
      ],
    },
  },
  problems: {
    h2: "Problems we solve",
    items: [
      {
        title: "Data trapped in separate systems.",
        detail:
          "Your CRM, billing, and operations tools each hold part of the picture, and someone re-keys data between them by hand.",
      },
      {
        title: "Partner and vendor connections that keep breaking.",
        detail:
          "File drops, one-off scripts, and undocumented endpoints fail quietly until a customer notices.",
      },
      {
        title: "No clear API strategy.",
        detail:
          "Every new connection gets built a different way, so each one costs more to maintain than the last.",
      },
      {
        title: "Integrations nobody owns.",
        detail: "The person who built it left, the docs are thin, and changes feel risky.",
      },
    ],
  },
  process: {
    h2: "How an integration project works",
    steps: [
      { step: "Discover", detail: "We learn your systems, your partners, and where data gets stuck." },
      { step: "Design", detail: "We propose an architecture and API approach, with clear scope and tradeoffs." },
      { step: "Build", detail: "We develop in small steps you can review, with tests along the way." },
      {
        step: "Launch and monitor",
        detail: "We go live carefully, with logging and alerts so problems surface early.",
      },
      {
        step: "Hand off or support",
        detail: "You get documentation your team can use, and ongoing support if you want it.",
      },
    ],
  },
  why: {
    h2: "Why work with us",
    items: [
      {
        // Founder line approved by Jay (copy v3).
        title: "Real integration experience.",
        detail:
          "Connecting systems across companies, designing APIs, and standing up integration processes is work our founder does every day.",
      },
      {
        title: "Small team, direct access.",
        detail:
          "You work with the people building your integration, not a rotating cast of account managers.",
      },
      {
        title: "100% U.S. based, never offshored.",
        detail: "Your systems and data stay with a team in the United States.",
      },
      {
        title: "Documentation is part of the job.",
        detail: "Every integration ships with notes your team can maintain.",
      },
      {
        title: "Honest scoping.",
        detail:
          "If an off-the-shelf connector or platform fits better than custom work, we'll tell you.",
      },
    ],
    linksLead: "Integration work often sits next to ",
    links: [
      { text: "custom software development", href: "/services/custom-software-development/" },
      { text: "software and AI consulting", href: "/services/software-ai-consulting/" },
    ],
  },
  // Visible FAQ text and FAQPage schema both come from this list, so they always match.
  faq: {
    h2: "Integration services FAQ",
    items: [
      {
        question: "What are system integration services?",
        answer:
          "System integration services connect separate software systems so they share data automatically. That can mean APIs, data pipelines, file exchange, or messaging between your tools and your partners' tools.",
      },
      {
        question: "ETL or ELT: which do we need?",
        answer:
          "ETL transforms data before loading it, and ELT loads raw data first and transforms it inside the destination. ELT suits modern cloud warehouses, while ETL is often better when data must be cleaned or filtered before it lands.",
      },
      {
        question: "Do you use an integration platform (iPaaS), or write custom code?",
        answer:
          "ASAIS uses both integration platforms and custom code, depending on the job. Platforms are faster for common connections, and custom code gives more control for complex logic or high volume. We recommend whichever is cheaper to run and easier for your team to maintain.",
      },
      {
        question: "Can you connect our systems with a partner's or vendor's systems?",
        answer:
          "Yes, ASAIS connects your systems with partner and vendor systems as a core part of its integration work. We coordinate with the other side's technical team as needed.",
      },
      {
        question: "What systems can you integrate?",
        answer:
          "ASAIS integrates most systems with an API, a database, or a file export, including CRMs, ERPs, billing, ecommerce, and internal tools. If a system has no API, we can often work through files or build a small service around it.",
      },
      {
        question: "Do you build APIs from scratch?",
        answer:
          "Yes, ASAIS designs and builds APIs from scratch for internal use, partners, and customers, with documentation included.",
      },
      {
        question: "How do you handle integration failures?",
        answer:
          "ASAIS designs integrations for failure from the start. That means automatic retries, protection against processing the same message twice, dead-letter queues for messages that can't be processed, and alerts so a person knows when something needs attention.",
      },
      {
        question: "How are projects priced?",
        answer:
          "ASAIS prices each integration project from a written scope and a clear estimate, agreed before anything starts. The scope comes from a short discovery conversation by email or video.",
      },
      {
        question: "Do you offshore any work?",
        answer:
          "No, ASAIS never offshores integration work. Everything is done by our 100% U.S. based team.",
      },
    ],
  },
  cta: {
    h2: "Have systems that should be talking to each other?",
    lead: "Email us what you're trying to connect. We'll give you an honest take on the best way to do it.",
    button: "Email us",
    formLead: "Prefer a form? Use the",
    formLinkText: "contact form",
    formHref: "/contact/",
  },
  offerCatalog: [
    "System integration",
    "Company-to-company integration",
    "API design and development",
    "ETL and data integration",
    "Webhooks and event-driven integration",
    "Middleware and iPaaS",
  ],
  relatedSlugs: ["automation-integrations", "custom-software-development", "software-ai-consulting"],
} as const;

export type IntegrationServices = typeof integrationServices;
