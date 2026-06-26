"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, allDomains, type Domain } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

const domainColors: Record<string, string> = {
  "All":                    "var(--color-accent)",
  "Revenue Forecasting":    "#0EA5E9",
  "Pipeline Intelligence":  "#6366F1",
  "Marketing Science":      "#8B5CF6",
  "Propensity & Scoring":   "#F59E0B",
  "Data Engineering":       "#4F46E5",
  "Platform & Infrastructure": "#64748B",
};

type Filter = "All" | Domain;

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.domain === active);

  const filters: Filter[] = ["All", ...allDomains];

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section
        className="pt-14 pb-10 px-6"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Career Work
          </p>
          <h1
            className="text-3xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            All Projects
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--color-body)" }}>
            25 production ML systems built across 4+ years — every project here shipped to
            production and was owned end-to-end, from research through maintenance.
          </p>
        </div>
      </section>

      {/* Domain filter */}
      <section
        className="sticky top-14 z-40 px-6 py-3"
        style={{
          background: "var(--color-overlay-bg-strong)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const color = domainColors[f] ?? "var(--color-accent)";
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="text-xs font-mono px-3 py-1.5 rounded-md transition-all duration-150"
                  style={{
                    background: isActive ? `${color}14` : "var(--color-surface)",
                    color: isActive ? color : "var(--color-muted)",
                    border: `1px solid ${isActive ? color : "var(--color-border)"}`,
                  }}
                >
                  {f}
                  {f !== "All" && (
                    <span className="ml-1.5 opacity-60">
                      {projects.filter((p) => p.domain === f).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs mb-6 font-mono" style={{ color: "var(--color-muted)" }}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {active !== "All" ? ` in ${active}` : " across all domains"}
          </p>

          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: i * 0.03, duration: 0.25 }}
                  layout
                >
                  <ProjectCard project={project} variant="compact" />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
