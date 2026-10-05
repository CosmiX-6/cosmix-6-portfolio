"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe } from "lucide-react";

const focus = [
  "Production ML systems",
  "Forecasting & attribution",
  "Explainability (SHAP)",
  "PySpark & GCP pipelines",
];

export function FlipIdCard() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  return (
    <motion.div
      initial={{ opacity: 0, y: -48, rotate: -6 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
      className="relative flex flex-col items-center"
    >
      {/* Lanyard */}
      <div
        className="w-3 h-10 rounded-b-full"
        style={{ background: "var(--color-ink-2)" }}
        aria-hidden
      />

      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Flip ID card"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="relative w-64 h-96 cursor-pointer"
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-3xl p-6 flex flex-col items-center text-center"
            style={{
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-card-hover)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
              style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
            >
              Team ID
            </span>
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden mb-4">
              <Image src="/akash.png" alt="Akash Sharma" fill sizes="112px" className="object-cover object-center" priority />
            </div>
            <p className="text-lg font-bold tracking-tight" style={{ color: "var(--color-headline)" }}>
              Akash Sharma
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--color-accent)" }}>
              AI Engineer
            </p>
            <p className="text-xs mt-3" style={{ color: "var(--color-muted)" }}>
              Revsure AI
            </p>
            <p className="text-[10px] mt-auto font-mono" style={{ color: "var(--color-muted)" }}>
              Tap to flip
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-3xl p-6 flex flex-col text-left"
            style={{
              background: "var(--color-ink)",
              boxShadow: "var(--shadow-card-hover)",
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#B7B4D9" }}>
              What I do
            </p>
            <ul className="space-y-2.5 flex-1">
              {focus.map((item) => (
                <li key={item} className="text-sm" style={{ color: "#FFFFFF" }}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 text-xs pt-4" style={{ color: "#B7B4D9", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="flex items-center gap-2"><MapPin size={12} /> Bengaluru, India</p>
              <p className="flex items-center gap-2"><Briefcase size={12} /> 4+ years experience</p>
              <p className="flex items-center gap-2"><Globe size={12} /> Open to remote roles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
