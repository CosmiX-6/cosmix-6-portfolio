const nodes = [
  { x: 20, y: 40, label: "Raw data", sub: "multi-source" },
  { x: 150, y: 40, label: "Features", sub: "leakage-safe" },
  { x: 280, y: 40, label: "Models", sub: "multi-family" },
  { x: 150, y: 130, label: "Validation", sub: "temporal splits" },
  { x: 280, y: 130, label: "Forecast", sub: "daily EOQ" },
  { x: 20, y: 130, label: "Production", sub: "monitored" },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 4],
  [4, 5],
  [5, 0],
  [1, 3],
  [3, 4],
];

export function EngineeringArtifact() {
  return (
    <figure className="card-soft p-6" aria-label="Diagram of an ML system from raw data to production">
      <div
        className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest uppercase"
        style={{ color: "var(--color-muted)" }}
      >
        <span>system / pipeline</span>
        <span>fig. 01</span>
      </div>
      <svg viewBox="0 0 340 200" className="w-full h-auto" role="img">
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x + 50}
            y1={nodes[a].y + 22}
            x2={nodes[b].x + 50}
            y2={nodes[b].y + 22}
            stroke="var(--color-border)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width="100" height="44" rx="12" fill="var(--color-surface-el)" stroke="var(--color-border)" />
            <text x={n.x + 12} y={n.y + 19} fontSize="12" fontWeight="600" fill="var(--color-headline)">
              {n.label}
            </text>
            <text x={n.x + 12} y={n.y + 34} fontSize="9" fontFamily="var(--font-jetbrains-mono), monospace" fill="var(--color-muted)">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 font-mono text-[10px]" style={{ color: "var(--color-muted)" }}>
        Every stage is validated before the next one runs.
      </figcaption>
    </figure>
  );
}
