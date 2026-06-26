import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { JsonLd } from "@/components/shared/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Akash Sharma`,
      description: project.tagline,
    },
  };
}

const domainColors: Record<string, string> = {
  "Revenue Forecasting": "#00c2ff",
  "Pipeline Intelligence": "#4fffcb",
  "Marketing Science": "#c084fc",
  "Propensity & Scoring": "#fb923c",
  "Data Engineering": "#facc15",
  "Platform & Infrastructure": "#94a3b8",
};

const employmentLabels: Record<string, string> = {
  "ada-asia": "ADA Asia",
  "revsure-ai": "Revsure AI",
  "both": "ADA Asia → Revsure AI",
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const accentColor = domainColors[project.domain] ?? "#4fffcb";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.tagline,
    author: {
      "@type": "Person",
      name: "Akash Sharma",
      url: "https://akashsharma.dev",
    },
    about: project.tags,
    keywords: [...project.techStack, ...project.tags].join(", "),
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <article>
        {/* Back nav */}
        <div
          className="sticky top-16 z-30 px-6 py-3"
          style={{
            background: "rgba(7,7,13,0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
            >
              <ArrowLeft size={14} />
              Back to Work
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="px-6 pt-12 pb-10" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: `${accentColor}18`,
                  color: accentColor,
                  border: `1px solid ${accentColor}33`,
                }}
              >
                {project.domain}
              </span>
              <span
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-surface)",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {employmentLabels[project.employment]}
              </span>
              <span
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-surface)",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {project.period}
              </span>
              <span
                className="text-xs font-mono px-2.5 py-1.5 rounded-full flex items-center gap-1"
                style={{
                  background: "rgba(79,255,203,0.08)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(79,255,203,0.2)",
                }}
              >
                <CheckCircle2 size={11} />
                {project.status}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "var(--color-headline)" }}
            >
              {project.title}
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--color-body)" }}>
              {project.tagline}
            </p>

            {/* Metrics row */}
            {project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-8 mt-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p
                      className="font-mono text-2xl font-bold"
                      style={{ color: "var(--color-metric)" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-10">
              {/* Problem */}
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: accentColor }}
                >
                  The Problem
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.problem}
                </p>
              </section>

              {/* What was built */}
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: accentColor }}
                >
                  What Was Built
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.what}
                </p>
              </section>

              {/* Impact */}
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: accentColor }}
                >
                  Business Impact
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.impact}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech stack */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        background: "var(--color-surface-el)",
                        color: "var(--color-body)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Domain Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: `${accentColor}10`,
                        color: accentColor,
                        border: `1px solid ${accentColor}28`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Details
                </h3>
                <dl className="space-y-3">
                  {[
                    { label: "Role", value: project.role },
                    { label: "Status", value: project.status },
                    { label: "Tier", value: `Tier ${project.tier}` },
                    { label: "Period", value: project.period },
                    { label: "Employment", value: employmentLabels[project.employment] },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt
                        className="text-xs font-mono"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {label}
                      </dt>
                      <dd
                        className="text-sm mt-0.5"
                        style={{ color: "var(--color-headline)" }}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div
          className="px-6 py-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
