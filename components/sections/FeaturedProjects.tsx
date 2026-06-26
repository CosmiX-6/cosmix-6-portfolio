"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
              Selected Work
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--color-headline)" }}
            >
              Production ML Systems
            </h2>
            <p className="mt-2 text-sm max-w-lg" style={{ color: "var(--color-body)" }}>
              Four flagship systems from 26+ production ML projects built across
              revenue forecasting, marketing science, and GTM intelligence.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 shrink-0"
            style={{ color: "var(--color-accent)" }}
          >
            All projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} variant="featured" />
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            View all 26+ projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
