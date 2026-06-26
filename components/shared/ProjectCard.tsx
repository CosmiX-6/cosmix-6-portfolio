"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

const domainColors: Record<string, string> = {
  "Revenue Forecasting": "#00c2ff",
  "Pipeline Intelligence": "#4fffcb",
  "Marketing Science": "#c084fc",
  "Propensity & Scoring": "#fb923c",
  "Data Engineering": "#facc15",
  "Platform & Infrastructure": "#94a3b8",
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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden group"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full" style={{ background: accentColor }} />

        <div className="p-7">
          {/* Domain + employment */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full"
              style={{
                background: `${accentColor}18`,
                color: accentColor,
                border: `1px solid ${accentColor}33`,
              }}
            >
              {project.domain}
            </span>
            <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
              {project.period}
            </span>
          </div>

          <h3
            className="text-xl font-semibold mb-2 leading-snug"
            style={{ color: "var(--color-headline)" }}
          >
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-body)" }}>
            {project.tagline}
          </p>

          {/* Metrics row */}
          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-5">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p
                    className="font-mono text-lg font-bold"
                    style={{ color: "var(--color-metric)" }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded"
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
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: accentColor }}
          >
            View case study
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Compact variant for the work index page
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="group rounded-lg overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span
            className="text-xs font-mono"
            style={{ color: accentColor }}
          >
            {project.domain}
          </span>
          <span
            className="text-xs font-mono shrink-0"
            style={{ color: "var(--color-muted)" }}
          >
            {project.status}
          </span>
        </div>

        <h3
          className="text-base font-semibold mb-2 leading-snug"
          style={{ color: "var(--color-headline)" }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-body)" }}>
          {project.tagline}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{
                background: "var(--color-surface-el)",
                color: "var(--color-muted)",
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
              }}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-200"
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
