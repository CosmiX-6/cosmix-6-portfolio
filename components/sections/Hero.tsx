"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { HeroDashboard } from "@/components/shared/HeroDashboard";
import { supportingProof } from "@/lib/data/metrics";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number], delay },
});

const stats = [
  { value: "4+", label: "Years Experience", sub: "In Data Science & AI" },
  { value: "25+", label: "Production ML Systems", sub: "Built and shipped" },
  { value: "8+", label: "Model Families", sub: "In one projection engine" },
  { value: "~80%", label: "Faster Modeling Compute", sub: "6h → 1h in production" },
];

export function Hero() {
  return (
    <section id="home" className="relative px-6 overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-stripes pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, var(--color-accent-glow) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto w-full pt-10 pb-16">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-2 mb-7">
              <span className="eyebrow-badge">AI Engineer at Revsure AI</span>
              <span className="eyebrow-badge">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-metric)" }} />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.035em" }}
            >
              Applied Data Science,
              <br />
              <span style={{ color: "var(--color-accent)" }}>proven in production.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="text-base md:text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: "var(--color-body)" }}
            >
              I build production ML systems that turn complex GTM and revenue data into reliable
              forecasts, attribution insights, and decisions companies can act on.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-3 mb-8">
              <Link href="/#work" className="btn-gradient">
                View selected work
                <ArrowRight size={15} />
              </Link>
              <a
                href="/resume.pdf"
                download="Akash_Sharma_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
                style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
              >
                <Download size={14} style={{ color: "var(--color-accent)" }} />
                Download resume
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.26)} className="flex items-center gap-5 text-sm" style={{ color: "var(--color-muted)" }}>
              <a
                href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--color-headline)] transition-colors duration-150"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <a
                href="https://github.com/CosmiX-6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--color-headline)] transition-colors duration-150"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div {...fadeUp(0.2)} className="shrink-0 w-full md:w-[400px]">
            <HeroDashboard />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
          {stats.map((s) => (
            <div key={s.label} className="card-soft p-5">
              <p className="text-3xl font-bold tracking-tight font-mono" style={{ color: "var(--color-headline)" }}>
                {s.value}
              </p>
              <p className="text-sm font-semibold mt-2" style={{ color: "var(--color-headline)" }}>
                {s.label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-xs text-center" style={{ color: "var(--color-muted)" }}>
          <span className="font-mono font-bold" style={{ color: "var(--color-metric)" }}>
            {supportingProof.value}
          </span>{" "}
          {supportingProof.label}, {supportingProof.detail}
        </p>
      </div>
    </section>
  );
}
