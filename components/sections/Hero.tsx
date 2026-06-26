"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number], delay },
});

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">

        {/* Availability badge */}
        <motion.div {...fadeUp(0)}>
          <div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "var(--color-metric-dim)",
              border: "1px solid rgba(5,150,105,0.20)",
              color: "var(--color-metric)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--color-metric)" }}
            />
            Open to senior roles
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.06)}
          className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.06] mb-3"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.04em" }}
        >
          Akash Sharma
        </motion.h1>

        {/* Role line */}
        <motion.p
          {...fadeUp(0.12)}
          className="text-2xl md:text-3xl font-semibold mb-7 tracking-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          <span style={{ color: "var(--color-accent)" }}>AI Engineer</span>
          <span className="font-normal ml-2" style={{ color: "var(--color-body)" }}>
            at Revsure AI
          </span>
        </motion.p>

        {/* Intro */}
        <motion.p
          {...fadeUp(0.18)}
          className="text-lg leading-relaxed max-w-xl mb-2"
          style={{ color: "var(--color-body)" }}
        >
          I build production ML systems that convert complex data into reliable
          business decisions — owned end-to-end, shipped at scale.
        </motion.p>
        <motion.p
          {...fadeUp(0.22)}
          className="text-sm leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          4+ years across forecasting pipelines, attribution models, marketing mix
          modeling, and ML infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.28)} className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
            style={{ background: "var(--color-accent)", color: "#FFFFFF" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = "0.88";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }}
          >
            View My Work
            <ArrowRight size={15} />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
            style={{
              border: "1.5px solid var(--color-border)",
              color: "var(--color-body)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-accent)";
              el.style.color = "var(--color-headline)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-border)";
              el.style.color = "var(--color-body)";
            }}
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.34)} className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <a
            href="https://github.com/CosmiX-6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
