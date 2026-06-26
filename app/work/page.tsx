"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, allDomains, type Domain } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { Metadata } from "next";

const domainColors: Record<string, string> = {
  "All": "var(--color-accent)",
  "Revenue Forecasting": "#00c2ff",
  "Pipeline Intelligence": "#4fffcb",
  "Marketing Science": "#c084fc",
  "Propensity & Scoring": "#fb923c",
  "Data Engineering": "#facc15",
  "Platform & Infrastructure": "#94a3b8",
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
      <section className="pt-16 pb-12 px-6 grid-bg" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Career Work
          </p>
          <h1
            className="text-4xl font-bold mb-3"
            style={{ color: "var(--color-headline)" }}
          >
            All Projects
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--color-body)" }}>
            26+ production ML systems built across 4+ years on a B2B SaaS Revenue Intelligence Platform.
            Every project listed here shipped to production and was owned end-to-end.
          </p>
        </div>
      </section>

      {/* Domain filter */}
      <section className="sticky top-16 z-40 px-6 py-4" style={{ background: "rgba(7,7,13,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const color = domainColors[f] ?? "var(--color-accent)";
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: isActive ? `${color}22` : "var(--color-surface)",
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
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm mb-8 font-mono" style={{ color: "var(--color-muted)" }}>
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {active !== "All" ? ` in ${active}` : " across all domains"}
          </p>

          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
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
