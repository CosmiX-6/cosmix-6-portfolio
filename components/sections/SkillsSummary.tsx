"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, BarChart2, Code2, Cloud, Briefcase } from "lucide-react";
import { skillCategories } from "@/lib/data/skills";
import { SkillsOrbit } from "@/components/sections/SkillsOrbit";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={16} />,
  "trending-up": <TrendingUp size={16} />,
  "bar-chart-2": <BarChart2 size={16} />,
  "code-2": <Code2 size={16} />,
  cloud: <Cloud size={16} />,
  briefcase: <Briefcase size={16} />,
};

export function SkillsSummary() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          className="mb-10"
        >
          <div className="eyebrow-badge mb-4">Skills &amp; Expertise</div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Skills built through owning production systems.
          </h2>
          <p className="mt-3 text-sm max-w-lg" style={{ color: "var(--color-body)" }}>
            4+ years of production ML experience across forecasting, attribution, marketing
            science, infrastructure, and data engineering. Every skill backed by shipped systems.
          </p>
        </motion.div>

        <SkillsOrbit />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0, 0, 0.2, 1] }}
              className="card-soft p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                  style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                >
                  {iconMap[cat.icon]}
                </span>
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--color-surface-el)",
                      color: "var(--color-body)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
