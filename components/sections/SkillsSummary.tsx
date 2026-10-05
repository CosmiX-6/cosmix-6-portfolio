"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type Skill } from "@/lib/data/skills";

const levelWeight: Record<Skill["level"], number> = {
  Expert: 1,
  Advanced: 0.7,
  Intermediate: 0.45,
};

function tileLabel(name: string): string {
  const words = name.replace(/[()/&+]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function SkillsSummary() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Skill | null>(null);
  const category = skillCategories[active];

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
          Pick a category, then tap a tile for its level and experience.
        </p>

        <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2 mt-8">
          {skillCategories.map((cat, i) => {
            const isActive = i === active;
            return (
              <button
                key={cat.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActive(i);
                  setSelected(null);
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

        <AnimatePresence mode="wait">
          <motion.div
            key={category.name}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"
          >
            {category.skills.map((skill, i) => {
              const isSelected = selected?.name === skill.name;
              return (
                <motion.button
                  key={skill.name}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.25, ease: [0, 0, 0.2, 1] }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelected(isSelected ? null : skill)}
                  aria-pressed={isSelected}
                  aria-label={`${skill.name}, ${skill.level}, ${skill.years} years`}
                  className="relative aspect-square rounded-2xl p-3 flex flex-col items-start justify-between text-left overflow-hidden"
                  style={{
                    background: isSelected ? "var(--gradient-cta)" : "var(--color-surface)",
                    color: isSelected ? "#FFFFFF" : "var(--color-headline)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span className="text-lg font-bold tracking-tight font-mono">{tileLabel(skill.name)}</span>
                  <span className="text-[11px] leading-snug line-clamp-2">{skill.name}</span>
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{
                      width: `${levelWeight[skill.level] * 100}%`,
                      background: isSelected ? "#FFFFFF" : "var(--color-accent)",
                    }}
                  />
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

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
