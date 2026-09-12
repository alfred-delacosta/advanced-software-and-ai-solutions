export const home = {
  hero: {
    eyebrow: "Remote-first across the United States",
    h1: "Custom software, AI, and automation for growing teams",
    lead: "We design and build systems that help US companies move faster with less operational drag. Sparse process. Production software.",
    primaryCta: "Start a project",
    primaryHref: "/contact",
    secondaryCta: "See products",
    secondaryHref: "/products",
  },
  trust: {
    line: "An all-American team. We never offshore your work.",
    bits: ["Remote-first US", "Email only"] as const,
  },
  products: {
    eyebrow: "Products",
    h2: "Tools we ship",
  },
  capabilities: {
    eyebrow: "Capabilities",
    h2: "What we build with you",
    items: [
      {
        title: "Custom Software",
        oneLiner:
          "Web apps, APIs, and internal tools built around how your team works.",
        href: "/services/custom-software-development",
      },
      {
        title: "AI / ML",
        oneLiner:
          "Practical models and assistants grounded in your data, not demos.",
        href: "/services/ai-machine-learning",
      },
      {
        title: "Automation & Integrations",
        oneLiner:
          "Connect the stack you already pay for so work stops living in spreadsheets.",
        href: "/services/automation-integrations",
      },
      {
        title: "Consulting",
        oneLiner:
          "Scope, architecture, and a clear build path before you spend.",
        href: "/services/software-ai-consulting",
      },
    ],
  },
  howWeWork: {
    eyebrow: "How we work",
    h2: "Discover / Build / Hand off",
    steps: [
      {
        name: "Discover",
        detail:
          'Map the workflow, constraints, and what "done" means.',
      },
      {
        name: "Build",
        detail: "Ship in thin slices you can see and use early.",
      },
      {
        name: "Hand off",
        detail:
          "Documented systems your team can run, with ASAIS LLC credit on the work.",
      },
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    h2: "Outcomes over slide decks",
  },
  finalCta: {
    h2: "Ready to build?",
    leadBeforeEmail: "Tell us what is broken or what you want to ship. We reply from",
    primaryCta: "Start a project",
    primaryHref: "/contact",
  },
} as const;

export type Home = typeof home;
