"use client";

import { motion } from "framer-motion";
import { confirmedMetrics } from "@/lib/data/metrics";

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
          <div className="eyebrow-badge mb-4">Stats</div>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl mx-auto"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Numbers that prove production impact, not just claims.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {confirmedMetrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0, 0, 0.2, 1] }}
              className="card-soft p-5"
            >
              <p
                className="font-mono text-3xl md:text-4xl font-bold mb-1"
                style={{ color: "var(--color-metric)" }}
              >
                {m.value}
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--color-headline)" }}
              >
                {m.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
