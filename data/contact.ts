export const contact = {
  email: "contact@advancedsoftwareandaisolutions.com",
  // Email only. No phone, no city address on the public site.
} as const;

export type Contact = typeof contact;
