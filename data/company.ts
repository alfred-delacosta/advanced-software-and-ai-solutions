export const company = {
  name: "Advanced Software and AI Solutions",
  legalName: "Advanced Software and AI Solutions LLC",
  shortName: "ASAIS",
  copyrightName: "ASAIS LLC",
  url: "https://advancedsoftwareandaisolutions.com",
  tagline: "Custom software, AI, and automation for growing teams",
  description:
    "We design and build systems that help US companies move faster with less operational drag. Sparse process. Production software.",
  remoteFirst: "Remote-first across the United States",
  trustLine: "An all-American team. We never offshore your work.",
  trustBits: ["Remote-first US", "Email only"] as const,
  areaServed: "US",
} as const;

export type Company = typeof company;
