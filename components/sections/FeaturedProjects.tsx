"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

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
              Four flagship systems from 25 production ML projects: forecasting, attribution,
              marketing science, and pipeline intelligence.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
              style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next project"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-150 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-cta)", color: "#FFFFFF", boxShadow: "var(--shadow-pill)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0, 0, 0.2, 1] }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc(50%-10px)] flex"
            >
              <ProjectCard project={project} variant="featured" />
            </motion.div>
          ))}
        </div>

        <div className="mt-2 text-center md:text-left">
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
