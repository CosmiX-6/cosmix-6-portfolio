"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  TrendingUp,
  GitBranch,
  BarChart2,
  Target,
  Database,
  Server,
} from "lucide-react";
import type { Project } from "@/lib/data/projects";

const domainColors: Record<string, string> = {
  "Revenue Forecasting": "#4F46E5",
  "Pipeline Intelligence": "#7C3AED",
  "Marketing Science": "#059669",
  "Propensity & Scoring": "#0891B2",
  "Data Engineering": "#D97706",
  "Platform & Infrastructure": "#6B7280",
};

const domainIcons: Record<string, React.ReactNode> = {
  "Revenue Forecasting": <TrendingUp size={40} strokeWidth={1.5} />,
  "Pipeline Intelligence": <GitBranch size={40} strokeWidth={1.5} />,
  "Marketing Science": <BarChart2 size={40} strokeWidth={1.5} />,
  "Propensity & Scoring": <Target size={40} strokeWidth={1.5} />,
  "Data Engineering": <Database size={40} strokeWidth={1.5} />,
  "Platform & Infrastructure": <Server size={40} strokeWidth={1.5} />,
};

export function WorkCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const color = domainColors[project.domain] ?? "#4F46E5";
  const headline = project.metrics[0];

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
      className="card-soft flex flex-col overflow-hidden w-full"
    >
      <div
        className="relative h-36 flex items-end justify-between p-5"
        style={{ background: `linear-gradient(135deg, ${color}2e 0%, transparent 75%)` }}
      >
        <span style={{ color }} className="opacity-70">
          {domainIcons[project.domain]}
        </span>
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "var(--color-surface)", color, boxShadow: "var(--shadow-card)" }}
        >
          {project.domain}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-mono mb-2" style={{ color: "var(--color-muted)" }}>
          {project.period}
        </p>
        <h3
          className="text-lg font-semibold leading-snug mb-2"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
          {project.tagline}
        </p>

        {headline && (
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-mono text-3xl font-bold" style={{ color: "var(--color-metric)" }}>
              {headline.value}
            </span>
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>
              {headline.label}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-5 flex items-center justify-between w-full text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200"
          style={{
            background: open ? color : "var(--color-surface-el)",
            color: open ? "#FFFFFF" : "var(--color-headline)",
          }}
        >
          Business impact
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="impact"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                {project.impact}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2 py-0.5 rounded"
                style={{ background: "var(--color-surface-el)", color: "var(--color-muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold shrink-0"
            style={{ color: "var(--color-accent)" }}
          >
            Case study <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
