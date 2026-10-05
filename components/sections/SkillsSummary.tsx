"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { skillCategories, type Skill, type SkillLevel } from "@/lib/data/skills";

type LevelFilter = "All" | SkillLevel;

const levels: LevelFilter[] = ["All", "Expert", "Advanced", "Intermediate"];

const levelWeight: Record<SkillLevel, number> = {
  Expert: 1,
  Advanced: 0.7,
  Intermediate: 0.45,
};

const allSkills: (Skill & { category: string })[] = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.name }))
);

function tileLabel(name: string): string {
  const words = name.replace(/[()/&+]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

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
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02, duration: 0.25, ease: [0, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${skill.name}, ${skill.level}, ${skill.years} years`}
      className="relative aspect-square rounded-2xl p-3 flex flex-col items-start justify-between text-left overflow-hidden"
      style={{
        background: selected ? "var(--gradient-cta)" : "var(--color-surface)",
        color: selected ? "#FFFFFF" : "var(--color-headline)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <span className="text-lg font-bold tracking-tight font-mono">{tileLabel(skill.name)}</span>
      <span className="text-[11px] leading-snug line-clamp-2">{skill.name}</span>
      {showCategory && (
        <span className="text-[10px] leading-tight mt-1 opacity-70 line-clamp-1">{skill.category}</span>
      )}
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

        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
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
