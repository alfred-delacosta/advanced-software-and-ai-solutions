import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const dynamic = "force-static";

function loc(path: string) {
  if (!path || path === "/") return `${company.url}/`;
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${company.url}${trimmed.replace(/\/$/, "")}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services/",
    "/products/",
    "/about/",
    "/portfolio/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ].map((path) => ({
    url: loc(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1
        : path === "/privacy/" || path === "/terms/"
          ? 0.4
          : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: loc(s.href),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
