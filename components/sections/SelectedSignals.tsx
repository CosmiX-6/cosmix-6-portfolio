const signals = [
  { value: "4+", unit: "years", context: "Building ML systems from prototype to production." },
  { value: "25+", unit: "systems", context: "Designed and shipped across forecasting, attribution, propensity, and data engineering." },
  { value: "8+", unit: "model families", context: "Combined inside one pipeline projection engine." },
  { value: "6h → 1h", unit: "modeling runtime", context: "Cut by parallelizing model training with joblib." },
  { value: "5–15%", unit: "model MAPE", context: "Across customers, in daily end-of-quarter forecasting." },
];

export function SelectedSignals() {
  return (
    <section aria-labelledby="signals-heading" className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <p id="signals-heading" className="font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: "var(--color-muted)" }}>
          Selected signals
        </p>
        <ul
          className="grid grid-cols-2 md:grid-cols-5 gap-px rounded-2xl overflow-hidden"
          style={{ background: "var(--color-border)", boxShadow: "var(--shadow-card)" }}
        >
          {signals.map((s) => (
            <li key={s.unit} className="p-5 md:p-6 flex flex-col gap-2" style={{ background: "var(--color-surface)" }}>
              <span className="font-mono text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "var(--color-headline)" }}>
                {s.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-accent)" }}>
                {s.unit}
              </span>
              <span className="text-xs leading-relaxed mt-1" style={{ color: "var(--color-body)" }}>
                {s.context}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
