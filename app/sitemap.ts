import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const baseUrl = "https://www.akashlabs.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.9 },
  ];

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    priority: p.tier === 1 ? 0.8 : 0.6,
  }));

  return [...staticPages, ...projectPages];
}
