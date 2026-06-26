"use client";

import { motion } from "framer-motion";
import { confirmedMetrics } from "@/lib/data/metrics";

export function MetricsBar() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {confirmedMetrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="text-center"
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
