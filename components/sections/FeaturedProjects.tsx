import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjectBySlug, type Project } from "@/lib/data/projects";

type CaseStudy = {
  project: Project;
  problem: string;
};

const studies: CaseStudy[] = [
  {
    project: getProjectBySlug("revenue-forecasting-platform")!,
    problem:
      "Predict quarter-end revenue every day from evolving pipeline and booking data, where a forecast that looks good offline can still fail badly at quarter end.",
  },
  {
    project: getProjectBySlug("marketing-mix-modeling-platform")!,
    problem: "Estimate how each marketing channel contributes to pipeline, so budget decisions rest on evidence rather than habit.",
  },
  {
    project: getProjectBySlug("multi-touch-attribution")!,
    problem: "Credit each channel for its real influence on conversion across a customer journey, not just the last touch.",
  },
  {
    project: getProjectBySlug("sales-pipeline-forecasting")!,
    problem: "Aggregate record-level scores from many model families into daily multi-quarter projections that revenue teams can plan against.",
  },
];

export function FeaturedProjects() {
  return (
    <section id="work" className="px-6 py-20 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
              Selected work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
            >
              Systems I&apos;ve built
            </h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
            All 25 projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {studies.map(({ project, problem }) => (
            <article key={project.slug} className="card-soft p-7 flex flex-col">
              <p className="font-mono text-[11px] tracking-widest uppercase mb-3" style={{ color: "var(--color-muted)" }}>
                {project.domain} · {project.period}
              </p>
              <h3 className="text-xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-headline)" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-body)" }}>
                {problem}
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-mono text-2xl font-bold" style={{ color: "var(--color-metric)" }}>
                    {project.metrics[0].value}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {project.metrics[0].label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded" style={{ background: "var(--color-surface-el)", color: "var(--color-muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                  Read case study <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
