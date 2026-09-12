import { company } from "./company";
import { contact } from "./contact";

/** @deprecated Prefer `company` + `contact`. Kept for existing imports. */
export const business = {
  name: company.name,
  legalName: company.legalName,
  shortName: company.shortName,
  email: contact.email,
  url: company.url,
  tagline: company.tagline,
  description: company.description,
  areaServed: company.areaServed,
  trustLine: company.trustLine,
  remoteFirst: company.remoteFirst,
  copyrightName: company.copyrightName,
} as const;

export type Business = typeof business;
