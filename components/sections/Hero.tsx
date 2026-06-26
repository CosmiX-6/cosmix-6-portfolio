"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden grid-bg">
      {/* Gradient blob */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-dim) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--color-accent)" }}
            />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--color-accent)" }}>
              Open to opportunities
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "var(--color-headline)" }}
          >
            Revenue AI
            <br />
            <span style={{ color: "var(--color-accent)" }}>Engineer</span>
            <span style={{ color: "var(--color-muted)" }}>.</span>
          </h1>

          {/* Sub-heading */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-4"
            style={{ color: "var(--color-body)" }}
          >
            4+ years building production ML systems for B2B SaaS revenue teams —
            pipeline forecasting, marketing mix modeling, propensity scoring, and
            multi-touch attribution.
          </p>
          <p
            className="text-base max-w-xl leading-relaxed mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            I turn messy CRM, campaign, and funnel data into decisions:{" "}
            <span style={{ color: "var(--color-body)" }}>
              EOQ predictions, marketing attribution, budget optimization, and
              customer-facing GTM intelligence.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
              }}
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-headline)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)";
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
              }
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/CosmiX-6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
              }
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
