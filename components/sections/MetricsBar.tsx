"use client";

import { motion } from "framer-motion";
import { highlights, supportingProof } from "@/lib/data/metrics";

export function MetricsBar() {
  return (
    <section className="px-6 pt-4 pb-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          className="text-center mb-10"
        >
          <div className="eyebrow-badge mb-4">At a glance</div>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl mx-auto"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            What I&apos;ve built, end to end.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0, 0, 0.2, 1] }}
              className="card-soft p-6"
            >
              <p className="text-base font-semibold mb-2" style={{ color: "var(--color-headline)" }}>
                {h.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mt-6 text-sm text-center"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="font-mono font-bold" style={{ color: "var(--color-metric)" }}>
            {supportingProof.value}
          </span>{" "}
          {supportingProof.label}, {supportingProof.detail}
        </motion.p>
      </div>
    </section>
  );
}
