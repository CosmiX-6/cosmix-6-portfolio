import { ArrowUpRight } from "lucide-react";

const categories = ["AI experiments", "Generative AI", "Data experiments", "Visualization", "Tools", "Prototypes"];

export function LabSection() {
  return (
    <section id="lab" className="px-6 py-20 scroll-mt-28" style={{ background: "var(--color-bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
          Personal lab · experiments · builds
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}>
            Akash Labs
          </h2>
          <p className="text-sm max-w-md" style={{ color: "var(--color-body)" }}>
            Work is what I shipped. Lab is what I&apos;m exploring: rougher on purpose, and not a company.
          </p>
        </div>

        <a
          href="https://github.com/CosmiX-6/narovva"
          target="_blank"
          rel="noopener noreferrer"
          className="card-soft block p-7 mb-6 group"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-lg font-semibold" style={{ color: "var(--color-headline)" }}>
              Narovva: autonomous news-to-social publishing engine
            </p>
            <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "var(--color-accent)" }} />
          </div>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--color-body)" }}>
            Discovers news, structures an LLM brief, renders branded carousels deterministically, and publishes to Instagram
            on a schedule. The LLM handles article understanding and captions; layout, scheduling, and failure handling stay
            deterministic and testable.
          </p>
        </a>

        <ul className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c} className="font-mono text-[11px] px-3 py-1.5 rounded-full" style={{ background: "var(--color-surface-el)", color: "var(--color-muted)" }}>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
