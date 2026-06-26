"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";

export function ContactCTA() {
  return (
    <section
      className="py-20 px-6"
      style={{
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Let&apos;s Connect
          </p>
          <h2
            className="text-3xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Let&apos;s talk
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-body)" }}>
            I&apos;m looking for senior AI engineering and applied ML roles where I can own
            production systems end-to-end. I respond fastest on LinkedIn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{ background: "var(--color-accent)", color: "#FFFFFF" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
            <a
              href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                border: "1.5px solid var(--color-border)",
                color: "var(--color-body)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-accent)";
                el.style.color = "var(--color-headline)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--color-border)";
                el.style.color = "var(--color-body)";
              }}
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
