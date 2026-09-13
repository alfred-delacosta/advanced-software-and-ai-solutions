import type { Metadata } from "next";
import { company } from "@/data/company";

export function pageCanonical(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${company.url}/`;
  const trimmed = normalized.replace(/\/$/, "");
  return `${company.url}${trimmed}/`;
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = pageCanonical(path);
  const fullTitle =
    title.includes(company.name) ? title : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle ?? `${title} | ${company.name}`,
      description,
      url,
      siteName: company.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: company.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle ?? `${title} | ${company.name}`,
      description,
      images: ["/og.png"],
    },
  };
}
