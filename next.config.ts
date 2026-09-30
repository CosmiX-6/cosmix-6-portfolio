import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No external images needed for Phase 1
  // Will add domains when Phase 3 CMS is added

  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
