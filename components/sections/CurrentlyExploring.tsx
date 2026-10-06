const topics = [
  "LLM orchestration",
  "Multi-agent systems",
  "Advanced RAG",
  "AI evaluation",
  "Observability",
];

export function CurrentlyExploring() {
  return (
    <section aria-labelledby="exploring-heading" className="px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p id="exploring-heading" className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            Currently exploring
          </p>
          <p className="text-xl md:text-2xl leading-snug font-medium" style={{ color: "var(--color-headline)", letterSpacing: "-0.01em" }}>
            I&apos;ve spent the last several years building production ML systems. I&apos;m now extending that systems
            mindset into modern AI.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 md:justify-end">
          {topics.map((t) => (
            <li
              key={t}
              className="font-mono text-xs px-3.5 py-2 rounded-full"
              style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
