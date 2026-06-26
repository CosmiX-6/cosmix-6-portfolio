"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

const domainColors: Record<string, string> = {
  "Revenue Forecasting":    "#0EA5E9",
  "Pipeline Intelligence":  "#6366F1",
  "Marketing Science":      "#8B5CF6",
  "Propensity & Scoring":   "#F59E0B",
  "Data Engineering":       "#4F46E5",
  "Platform & Infrastructure": "#64748B",
};

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "compact";
}

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  const accentColor = domainColors[project.domain] ?? "var(--color-accent)";

  if (variant === "featured") {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.18 }}
        className="relative rounded-xl overflow-hidden group h-full flex flex-col"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 16px rgba(0,0,0,0.08)";
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-border-subtle)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 1px 3px rgba(0,0,0,0.04)";
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-border)";
        }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full shrink-0" style={{ background: accentColor }} />

        <div className="p-6 flex flex-col flex-1">
          {/* Domain + period */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-md"
              style={{
                background: `${accentColor}12`,
                color: accentColor,
                border: `1px solid ${accentColor}28`,
              }}
            >
              {project.domain}
            </span>
            <span className="text-xs font-mono shrink-0" style={{ color: "var(--color-muted)" }}>
              {project.period}
            </span>
          </div>

          <h3
            className="text-lg font-semibold mb-2 leading-snug"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-body)" }}>
            {project.tagline}
          </p>

          {/* Metrics row */}
          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-5 mb-5 pb-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-xl font-bold" style={{ color: "var(--color-metric)" }}>
                    {m.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded font-mono"
                style={{
                  background: "var(--color-surface-el)",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
            style={{ color: accentColor }}
          >
            View case study
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Compact variant — work index page
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="group rounded-lg overflow-hidden h-full flex flex-col"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
      }}
    >
      <div
        className="h-px w-full shrink-0"
        style={{ background: accentColor, opacity: 0.6 }}
      />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-xs font-mono" style={{ color: accentColor }}>
            {project.domain}
          </span>
          <span className="text-xs font-mono shrink-0" style={{ color: "var(--color-muted)" }}>
            {project.status}
          </span>
        </div>

        <h3
          className="text-sm font-semibold mb-2 leading-snug"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.005em" }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-body)" }}>
          {project.tagline}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.techStack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{
                background: "var(--color-surface-el)",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
              }}
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{
                background: "var(--color-surface-el)",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
              }}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-150"
          style={{ color: "var(--color-muted)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = accentColor)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
          }
        >
          Details <ArrowUpRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}
