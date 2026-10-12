export const company = {
  name: "Advanced Software and AI Solutions",
  legalName: "Advanced Software and AI Solutions LLC",
  shortName: "ASAIS",
  copyrightName: "ASAIS LLC",
  url: "https://advancedsoftwareandaisolutions.com",
  tagline: "Custom software, AI, and workflow optimization for small businesses",
  description:
    "A 100% U.S. based team building custom software, implementing AI, and optimizing small-business workflows. We never offshore your work.",
  remoteFirst: "100% U.S. based team",
  trustLine: "A 100% U.S. based team. We never offshore your work.",
  trustBits: ["100% U.S. based", "Never offshored", "Email only"] as const,
  areaServed: "US",
} as const;

export type Company = typeof company;
