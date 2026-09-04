import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  const staticRoutes = ["", "/services", "/products", "/about", "/portfolio", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const serviceRoutes = services.map((s) => ({
    url: `${base}${s.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
