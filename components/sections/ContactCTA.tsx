"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";

export function ContactCTA() {
  return (
    <section className="py-24 px-6 grid-bg">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Let&apos;s Connect
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-headline)" }}
          >
            Building something at the intersection of ML and revenue intelligence?
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-body)" }}>
            I&apos;m interested in senior data science, AI engineering, and applied ML roles
            where I can own production forecasting, attribution, or GTM intelligence systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: "var(--color-accent)", color: "var(--color-bg)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <a
              href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-headline)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)";
              }}
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
