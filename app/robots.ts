import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://akashsharma.dev/sitemap.xml",
    host: "https://akashsharma.dev",
  };
}
