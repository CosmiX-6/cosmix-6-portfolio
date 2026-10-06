const steps = [
  {
    n: "01",
    title: "Frame the problem",
    body: "Understand the business problem, data-generating process, constraints, and what “good” actually means.",
  },
  {
    n: "02",
    title: "Find the signal",
    body: "Explore distributions, semantics, leakage, temporal behavior, missingness, and feature quality before choosing a model.",
  },
  {
    n: "03",
    title: "Validate the idea",
    body: "Use leakage-safe validation, appropriate metrics, baselines, and experiments to check whether the model is learning something useful.",
  },
  {
    n: "04",
    title: "Engineer the system",
    body: "Turn the validated idea into a configurable, explainable, scalable production system.",
  },
  {
    n: "05",
    title: "Observe reality",
    body: "Monitor predictions, edge cases, failures, drift, customer behavior, and unexpected system interactions.",
  },
  {
    n: "06",
    title: "Improve",
    body: "Iterate based on evidence rather than assumptions.",
  },
];

export function HowIThink() {
  return (
    <section id="thinking" className="px-6 py-20 scroll-mt-28" style={{ background: "var(--color-bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
          How I think
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-xl"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
        >
          From messy data to a system that holds up.
        </h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {steps.map((s) => (
            <li key={s.n} className="relative pl-14">
              <span
                className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full font-mono text-xs font-bold"
                style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
              >
                {s.n}
              </span>
              <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-headline)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
