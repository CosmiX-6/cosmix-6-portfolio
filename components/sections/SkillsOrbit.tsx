"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skillCategories } from "@/lib/data/skills";

interface OrbitNode {
  x: number;
  y: number;
  side: "left" | "right";
}

const W = 800;
const H = 360;
const CENTER = { x: W / 2, y: H / 2 };
const RADIUS = 52;

const leftY = [60, 180, 300];
const rightY = [60, 180, 300];

const nodes: OrbitNode[] = [
  ...leftY.map((y) => ({ x: 260, y, side: "left" as const })),
  ...rightY.map((y) => ({ x: 540, y, side: "right" as const })),
];

function pathFor(node: OrbitNode): string {
  const startX = node.side === "left" ? CENTER.x - RADIUS : CENTER.x + RADIUS;
  const endX = node.side === "left" ? node.x : node.x;
  const midX = (startX + endX) / 2;
  if (node.y === CENTER.y) {
    return `M${startX},${CENTER.y} L${endX},${node.y}`;
  }
  return `M${startX},${CENTER.y} C${midX},${CENTER.y} ${midX},${node.y} ${endX},${node.y}`;
}

export function SkillsOrbit() {
  return (
    <div
      className="hidden lg:block relative mx-auto mb-14"
      style={{ width: W, height: H, maxWidth: "100%" }}
    >
      {/* Connector lines */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        className="absolute inset-0"
        fill="none"
      >
        {nodes.map((node, i) => (
          <path
            key={i}
            d={pathFor(node)}
            stroke="var(--color-border)"
            strokeWidth={2}
          />
        ))}
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: CENTER.x - RADIUS,
          top: CENTER.y - RADIUS,
          width: RADIUS * 2,
          height: RADIUS * 2,
          background: "var(--gradient-cta)",
          boxShadow: `0 0 0 8px var(--color-accent-dim), var(--shadow-pill)`,
        }}
      >
        <Sparkles size={26} color="#FFFFFF" />
      </motion.div>

      {/* Pills */}
      {skillCategories.map((cat, i) => {
        const node = nodes[i];
        const isLeft = node.side === "left";
        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0, 0, 0.2, 1] }}
            className="absolute flex items-center gap-2 px-4 rounded-full text-sm font-medium whitespace-nowrap"
            style={{
              [isLeft ? "right" : "left"]: W - (isLeft ? node.x : W - node.x),
              top: node.y - 20,
              height: 40,
              color: "var(--color-headline)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {cat.name}
          </motion.div>
        );
      })}
    </div>
  );
}
