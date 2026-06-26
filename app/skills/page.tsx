import type { Metadata } from "next";
import { skillCategories, type SkillLevel } from "@/lib/data/skills";
import { Cpu, TrendingUp, BarChart2, Code2, Cloud, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full competency matrix — machine learning, revenue forecasting, marketing science, PySpark, BigQuery, and B2B SaaS domain expertise across 4+ years of production ML.",
};

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={18} />,
  "trending-up": <TrendingUp size={18} />,
  "bar-chart-2": <BarChart2 size={18} />,
  "code-2": <Code2 size={18} />,
  cloud: <Cloud size={18} />,
  briefcase: <Briefcase size={18} />,
};

const levelColors: Record<SkillLevel, string> = {
  Expert: "#4fffcb",
  Advanced: "#00c2ff",
  Intermediate: "#9999b0",
};

const levelWidths: Record<SkillLevel, string> = {
  Expert: "90%",
  Advanced: "68%",
  Intermediate: "44%",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 px-6 grid-bg" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Competency Matrix
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--color-headline)" }}>
            Skills & Expertise
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "var(--color-body)" }}>
            4+ years of production ML experience across revenue forecasting, marketing science,
            and B2B SaaS GTM analytics. All skills backed by shipped systems.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="px-6 py-6" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6">
          {(["Expert", "Advanced", "Intermediate"] as SkillLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: levelColors[level] }}
              />
              <span className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills grid */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.name}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span style={{ color: "var(--color-accent)" }}>
                  {iconMap[cat.icon]}
                </span>
                <h2 className="text-xl font-semibold" style={{ color: "var(--color-headline)" }}>
                  {cat.name}
                </h2>
                <div className="flex-1 h-px ml-2" style={{ background: "var(--color-border)" }} />
              </div>

              {/* Skills list */}
              <div className="grid md:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg p-4"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: "var(--color-headline)" }}>
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {skill.years} yrs
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: levelColors[skill.level] }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                    {/* Skill bar */}
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "var(--color-surface-el)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: levelWidths[skill.level],
                          background: levelColors[skill.level],
                        }}
                      />
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
