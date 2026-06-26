"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topSkills = [
  { label: "Revenue Forecasting", level: "Expert", years: "4+", color: "#00c2ff" },
  { label: "Marketing Mix Modeling", level: "Expert", years: "3+", color: "#c084fc" },
  { label: "XGBoost / scikit-learn", level: "Expert", years: "4+", color: "#4fffcb" },
  { label: "SHAP Explainability", level: "Expert", years: "3+", color: "#4fffcb" },
  { label: "Multi-Touch Attribution", level: "Expert", years: "4+", color: "#c084fc" },
  { label: "PySpark / BigQuery", level: "Advanced", years: "2+", color: "#facc15" },
];

export function SkillsSummary() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              Core Competencies
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-headline)" }}>
              What I Bring
            </h2>
          </div>
          <Link
            href="/skills"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            Full skill matrix <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 rounded-lg p-4"
              style={{
                background: "var(--color-surface-el)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-2 h-8 rounded-full shrink-0"
                style={{ background: skill.color }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--color-headline)" }}>
                  {skill.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
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
