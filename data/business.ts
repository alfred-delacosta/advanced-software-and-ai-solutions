export const business = {
  name: "Advanced Software and AI Solutions",
  legalName: "Advanced Software and AI Solutions LLC",
  shortName: "ASAIS",
  email: "contact@advancedsoftwareandaisolutions.com",
  url: "https://advancedsoftwareandaisolutions.com",
  tagline: "Custom software, AI, and automation for growing teams",
  description:
    "We design and build custom software, AI systems, and automation that help US companies move faster with less operational drag. Remote-first across the United States.",
  areaServed: "US",
} as const;

export type Business = typeof business;
