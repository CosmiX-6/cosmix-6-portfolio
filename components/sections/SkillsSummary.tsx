"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  TrendingUp,
  Megaphone,
  Code,
  Cloud,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type Skill, type SkillLevel } from "@/lib/data/skills";

const categoryMeta: Record<string, { icon: LucideIcon; appliedIn: string }> = {
  "Machine Learning": { icon: Brain, appliedIn: "Revenue Forecasting, Propensity Models" },
  Forecasting: { icon: TrendingUp, appliedIn: "Sales Pipeline Forecasting" },
  "Marketing Science": { icon: Megaphone, appliedIn: "MMM Platform, Budget Planning" },
  "Programming & Data": { icon: Code, appliedIn: "All Production Systems" },
  "Cloud & Infrastructure": { icon: Cloud, appliedIn: "Production ML Pipelines" },
  "Domain Expertise": { icon: Briefcase, appliedIn: "Revenue Intelligence Platform" },
};

const PREVIEW_COUNT = 5;

function dominantLevel(skills: Skill[]): SkillLevel {
  const counts: Record<SkillLevel, number> = { Expert: 0, Advanced: 0, Intermediate: 0 };
  skills.forEach((s) => counts[s.level]++);
  return (Object.keys(counts) as SkillLevel[]).reduce((a, b) => (counts[b] > counts[a] ? b : a));
}

function CategoryCard({
  name,
  skills,
  index,
}: {
  name: string;
  skills: Skill[];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const meta = categoryMeta[name];
  const Icon = meta?.icon ?? Brain;
  const visible = expanded ? skills : skills.slice(0, PREVIEW_COUNT);
  const level = dominantLevel(skills);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className="card-soft p-6 flex flex-col"
    >
      <div className="flex items-start gap-3 mb-5">
        <span
          className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
          style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
        >
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--color-headline)" }}>
            {name}
          </h3>
          <span
            className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
          >
            {level}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5 mb-5">
        <AnimatePresence initial={false}>
          {visible.map((s) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2 text-sm overflow-hidden"
              style={{ color: "var(--color-body)" }}
            >
              <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
              {s.name}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-auto pt-4 flex items-end justify-between gap-3" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--color-muted)" }}>
            Applied in
          </p>
          <p className="text-xs" style={{ color: "var(--color-headline)" }}>
            {meta?.appliedIn}
          </p>
        </div>
        {skills.length > PREVIEW_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1 text-xs font-semibold shrink-0"
            style={{ color: "var(--color-accent)" }}
          >
            {expanded ? "Show less" : `+${skills.length - PREVIEW_COUNT} more`}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.span>
          </button>
        )}
        {skills.length <= PREVIEW_COUNT && (
          <ArrowRight size={14} style={{ color: "var(--color-accent)" }} aria-hidden />
        )}
      </div>
    </motion.article>
  );
}

export function SkillsSummary() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow-badge mb-4">Skills &amp; Expertise</div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
            >
              Deep expertise across the data science stack.
            </h2>
          </div>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            {skillCategories.reduce((n, c) => n + c.skills.length, 0)} skills across {skillCategories.length} areas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.name} name={cat.name} skills={cat.skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
