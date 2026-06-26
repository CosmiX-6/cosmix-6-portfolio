"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
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
              Selected Work
            </p>
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.015em" }}
            >
              Flagship AI Systems
            </h2>
            <p className="mt-2 text-sm max-w-md" style={{ color: "var(--color-body)" }}>
              Four flagship AI systems from 25 production ML projects — forecasting,
              attribution, marketing science, and pipeline intelligence.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 shrink-0"
            style={{ color: "var(--color-accent)" }}
          >
            All projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <ProjectCard project={project} variant="featured" />
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            View all 25 projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
