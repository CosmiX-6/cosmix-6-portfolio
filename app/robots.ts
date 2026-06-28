import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://akashlabs.dev/sitemap.xml",
    host: "https://akashlabs.dev",
  };
}
