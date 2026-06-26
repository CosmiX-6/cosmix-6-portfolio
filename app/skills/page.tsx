import type { Metadata } from "next";
import { skillCategories, type SkillLevel } from "@/lib/data/skills";
import { Cpu, TrendingUp, BarChart2, Code2, Cloud, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full competency matrix — machine learning, forecasting, marketing science, PySpark, BigQuery, and applied ML across 4+ years of production system ownership.",
};

const iconMap: Record<string, React.ReactNode> = {
  cpu:           <Cpu size={16} />,
  "trending-up": <TrendingUp size={16} />,
  "bar-chart-2": <BarChart2 size={16} />,
  "code-2":      <Code2 size={16} />,
  cloud:         <Cloud size={16} />,
  briefcase:     <Briefcase size={16} />,
};

function LevelDot({ level }: { level: SkillLevel }) {
  if (level === "Expert") {
    return (
      <span
        className="inline-block w-2 h-2 rounded-full shrink-0"
        style={{ background: "var(--color-accent)" }}
        title="Expert"
      />
    );
  }
  if (level === "Advanced") {
    return (
      <span
        className="inline-block w-2 h-2 rounded-full shrink-0"
        style={{ background: "var(--color-accent)", opacity: 0.45 }}
        title="Advanced"
      />
    );
  }
  return (
    <span
      className="inline-block w-2 h-2 rounded-full shrink-0"
      style={{ border: "1.5px solid var(--color-muted)", background: "transparent" }}
      title="Intermediate"
    />
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-14 pb-10 px-6"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Competency Matrix
          </p>
          <h1
            className="text-3xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Skills & Expertise
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--color-body)" }}>
            4+ years of production ML experience — forecasting, attribution, marketing science,
            infrastructure, and data engineering. Every skill backed by shipped production systems.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section
        className="px-6 py-4"
        style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />
            <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--color-accent)", opacity: 0.45 }}
            />
            <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ border: "1.5px solid var(--color-muted)", background: "transparent", display: "inline-block" }}
            />
            <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>Intermediate</span>
          </div>
        </div>
      </section>

      {/* Skills grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.name}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span style={{ color: "var(--color-accent)" }}>
                  {iconMap[cat.icon]}
                </span>
                <h2
                  className="text-base font-semibold"
                  style={{ color: "var(--color-headline)" }}
                >
                  {cat.name}
                </h2>
                <div
                  className="flex-1 h-px ml-2"
                  style={{ background: "var(--color-border)" }}
                />
              </div>

              {/* Skills list */}
              <div className="grid md:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-lg px-4 py-3"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <LevelDot level={skill.level} />
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--color-headline)" }}
                      >
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {skill.years} yrs
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
