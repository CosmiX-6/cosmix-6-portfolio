"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topSkills = [
  { label: "Time-Series Forecasting", level: "Expert", years: "4+" },
  { label: "Marketing Mix Modeling", level: "Expert", years: "3+" },
  { label: "XGBoost / scikit-learn", level: "Expert", years: "4+" },
  { label: "Model Explainability (SHAP)", level: "Expert", years: "3+" },
  { label: "Attribution Modeling", level: "Expert", years: "4+" },
  { label: "PySpark / BigQuery", level: "Advanced", years: "2+" },
];

function LevelDot({ level }: { level: string }) {
  if (level === "Expert") {
    return (
      <span
        className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
        style={{ background: "var(--color-accent)" }}
      />
    );
  }
  if (level === "Advanced") {
    return (
      <span
        className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
        style={{ background: "var(--color-accent)", opacity: 0.45 }}
      />
    );
  }
  return (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
      style={{ border: "1.5px solid var(--color-muted)", background: "transparent" }}
    />
  );
}

export function SkillsSummary() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              Core Competencies
            </p>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.015em" }}
            >
              What I Bring
            </h2>
            <p className="mt-2 text-sm max-w-md" style={{ color: "var(--color-body)" }}>
              Skills built through years of owning production systems end-to-end, not just
              training models.
            </p>
          </div>
          <Link
            href="/skills"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
            style={{ color: "var(--color-accent)" }}
          >
            Full skill matrix <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {topSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg p-4"
              style={{
                background: "var(--color-surface-el)",
                border: "1px solid var(--color-border)",
              }}
            >
              <LevelDot level={skill.level} />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: "var(--color-headline)" }}>
                  {skill.label}
                </p>
                <p className="text-xs mt-0.5 font-mono" style={{ color: "var(--color-muted)" }}>
                  {skill.level} · {skill.years} yrs
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
