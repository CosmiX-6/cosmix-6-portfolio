"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import { WorkCard } from "@/components/shared/WorkCard";

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          className="flex flex-wrap items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="eyebrow-badge mb-4">Selected Work</div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
            >
              Flagship <em className="font-serif-accent font-normal">AI</em> Systems
            </h2>
            <p className="mt-2 text-sm max-w-md" style={{ color: "var(--color-body)" }}>
              Four flagship systems from 25 production ML projects. Open any card for its business impact.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full"
            style={{ background: "var(--color-surface)", color: "var(--color-accent)", boxShadow: "var(--shadow-card)" }}
          >
            All 25 projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0, 0, 0.2, 1] }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
