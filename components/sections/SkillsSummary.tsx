"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  TreeDeciduous,
  Workflow,
  Blend,
  Sigma,
  ScanSearch,
  Layers,
  Target,
  Route,
  Gauge,
  Layers3,
  CalendarRange,
  ChartLine,
  Waves,
  ChartSpline,
  ShieldCheck,
  Split,
  TrendingUp,
  Megaphone,
  Activity,
  TimerReset,
  GitBranch,
  Network,
  GitCompare,
  Scale,
  Code,
  Database,
  Zap,
  Table2,
  FunctionSquare,
  Cog,
  Cloud,
  Server,
  CloudUpload,
  GitMerge,
  Briefcase,
  Users,
  Radar,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type Skill, type SkillLevel } from "@/lib/data/skills";

type LevelFilter = "All" | SkillLevel;

const levels: LevelFilter[] = ["All", "Expert", "Advanced", "Intermediate"];

const levelWeight: Record<SkillLevel, number> = {
  Expert: 1,
  Advanced: 0.7,
  Intermediate: 0.45,
};

const skillIcons: Record<string, LucideIcon> = {
  "XGBoost (Regressor + Classifier)": TreeDeciduous,
  "scikit-learn Pipelines": Workflow,
  "Custom Transformers": Blend,
  "Ridge / BayesianRidge": Sigma,
  "SHAP (TreeExplainer)": ScanSearch,
  "Feature Selection": Layers,
  "Rare Event Classification": Target,
  "Markov Chain MTA": Route,
  "L-BFGS-B Optimization": Gauge,
  "Model Stacking (LGBM/CatBoost)": Layers3,
  "EOQ Revenue Forecasting": CalendarRange,
  "Multi-Horizon Forecasting": ChartLine,
  "STL Decomposition": Waves,
  SARIMAX: ChartSpline,
  "Leakage-Safe Temporal Validation": ShieldCheck,
  GroupShuffleSplit: Split,
  "Heuristic Forecasting": TrendingUp,
  "Marketing Mix Modeling": Megaphone,
  "Hill Saturation Curves": Activity,
  "Adstock Modeling": TimerReset,
  "Response Curve Generation": ChartLine,
  "Scenario Planning": GitBranch,
  "Multi-Touch Attribution": Network,
  "Incrementality Testing": GitCompare,
  "Causal Inference / DiD": Scale,
  Python: Code,
  "SQL / BigQuery": Database,
  PySpark: Zap,
  "pandas / NumPy": Table2,
  "statsmodels / SciPy": FunctionSquare,
  "joblib (Parallelization)": Cog,
  "Google Cloud Platform (GCP)": Cloud,
  BigQuery: Database,
  "GCP Dataproc": Server,
  "Cloud Storage (GCS)": CloudUpload,
  "Apache Airflow": GitMerge,
  "B2B SaaS Revenue Intelligence": Briefcase,
  "GTM Analytics (Full Funnel)": Users,
  "Pipeline & Booking Forecasting": ChartLine,
  "Marketing Attribution": Radar,
  "Salesforce Opportunity Semantics": MessageSquareText,
  "Stakeholder Communication": Users,
};

const allSkills: (Skill & { category: string })[] = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.name }))
);

function Tile({
  skill,
  index,
  selected,
  onSelect,
  showCategory,
}: {
  skill: Skill;
  index: number;
  selected: boolean;
  onSelect: () => void;
  showCategory: boolean;
}) {
  const Icon = skillIcons[skill.name] ?? Sparkles;
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02, duration: 0.25, ease: [0, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${skill.name}, ${skill.level}, ${skill.years} years`}
      className="relative min-h-[160px] rounded-2xl p-4 flex flex-col items-start text-left overflow-hidden"
      style={{
        background: selected ? "var(--gradient-cta)" : "var(--color-surface)",
        color: selected ? "#FFFFFF" : "var(--color-headline)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <span
        className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
        style={{
          background: selected ? "rgba(255,255,255,0.18)" : "var(--color-accent-dim)",
          color: selected ? "#FFFFFF" : "var(--color-accent)",
        }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <span className="text-sm font-semibold leading-snug line-clamp-2">{skill.name}</span>
      {showCategory && (
        <span className="text-[10px] leading-tight mt-1 opacity-70 line-clamp-1">{skill.category}</span>
      )}
      <span className="mt-auto pt-3 w-full flex items-center justify-between text-[10px] font-mono opacity-80">
        <span>{skill.level}</span>
        <span>{skill.years}y</span>
      </span>
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{
          width: `${levelWeight[skill.level] * 100}%`,
          background: selected ? "#FFFFFF" : "var(--color-accent)",
        }}
      />
    </motion.button>
  );
}

export function SkillsSummary() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("All");
  const [selected, setSelected] = useState<Skill | null>(null);

  const filtering = query.trim() !== "" || level !== "All";

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allSkills.filter(
      (s) =>
        (level === "All" || s.level === level) &&
        (q === "" || s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))
    );
  }, [query, level]);

  const categorySkills = skillCategories[active].skills.filter(
    (s) => level === "All" || s.level === level
  );

  const clearFilters = () => {
    setQuery("");
    setLevel("All");
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="eyebrow-badge mb-4">Skills &amp; Expertise</div>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
        >
          Skills built through <em className="font-serif-accent font-normal">owning</em> production systems.
        </h2>
        <p className="mt-3 text-sm max-w-lg" style={{ color: "var(--color-body)" }}>
          Search for a tool, filter by depth, or browse by category. Tap any tile for details.
        </p>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
            {skillCategories.map((cat, i) => {
              const isActive = i === active && !filtering;
              return (
                <button
                  key={cat.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(i);
                    setSelected(null);
                    clearFilters();
                  }}
                  className="text-xs font-semibold px-3.5 py-2 rounded-full transition-colors duration-200"
                  style={{
                    background: isActive ? "var(--gradient-cta)" : "var(--color-surface)",
                    color: isActive ? "#FFFFFF" : "var(--color-body)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="relative flex items-center">
              <Search size={14} className="absolute left-3" style={{ color: "var(--color-muted)" }} aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(null);
                }}
                placeholder="Search skills"
                aria-label="Search skills"
                className="text-xs pl-8 pr-8 py-2 rounded-full w-44 outline-none"
                style={{
                  background: "var(--color-surface)",
                  color: "var(--color-headline)",
                  boxShadow: "var(--shadow-card)",
                }}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  <X size={13} />
                </button>
              )}
            </label>
            <div role="radiogroup" aria-label="Filter by level" className="flex gap-1 p-1 rounded-full" style={{ background: "var(--color-surface-el)" }}>
              {levels.map((l) => {
                const isOn = level === l;
                return (
                  <button
                    key={l}
                    type="button"
                    role="radio"
                    aria-checked={isOn}
                    onClick={() => {
                      setLevel(l);
                      setSelected(null);
                    }}
                    className="text-[11px] font-semibold px-2.5 py-1.5 rounded-full transition-colors duration-200"
                    style={{
                      background: isOn ? "var(--color-surface)" : "transparent",
                      color: isOn ? "var(--color-headline)" : "var(--color-muted)",
                      boxShadow: isOn ? "var(--shadow-card)" : "none",
                    }}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs" style={{ color: "var(--color-muted)" }}>
          <span>
            {filtering
              ? `${matches.length} of ${allSkills.length} skills`
              : `${categorySkills.length} skills in ${skillCategories[active].name}`}
          </span>
          {filtering && (
            <button type="button" onClick={clearFilters} className="font-semibold" style={{ color: "var(--color-accent)" }}>
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {(filtering ? matches : categorySkills).map((skill, i) => (
            <Tile
              key={`${filtering ? "f" : active}-${skill.name}`}
              skill={skill}
              index={i}
              showCategory={filtering}
              selected={selected?.name === skill.name}
              onSelect={() => setSelected(selected?.name === skill.name ? null : skill)}
            />
          ))}
        </div>

        {filtering && matches.length === 0 && (
          <p className="mt-6 text-sm text-center" style={{ color: "var(--color-muted)" }}>
            No skills match. Try a different search or level.
          </p>
        )}

        <div className="mt-5 min-h-[56px]">
          <AnimatePresence>
            {selected && (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-soft px-5 py-4 flex flex-wrap items-center gap-x-6 gap-y-1"
              >
                <p className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                  {selected.name}
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--color-accent)" }}>
                  {selected.level}
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
                  {selected.years} years
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
