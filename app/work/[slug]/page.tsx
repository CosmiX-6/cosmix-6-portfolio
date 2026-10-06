import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Clock,
  TrendingUp,
  GitBranch,
  BarChart2,
  Target,
  Database,
  Server,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/caseStudies";
import { JsonLd } from "@/components/shared/JsonLd";
import { ShareLinks } from "@/components/shared/ShareLinks";
import { ProjectCard } from "@/components/shared/ProjectCard";

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

  const description = `${project.tagline} ${project.impact}`.slice(0, 160).trim();
  const keywords = [
    ...project.techStack,
    ...project.tags,
    project.domain,
    "AI Engineer",
    "Akash Sharma",
    "production ML",
  ].join(", ");

  return {
    title: project.title,
    description,
    keywords,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | Akash Sharma`,
      description,
    },
  };
}

const domainColors: Record<string, string> = {
  "Revenue Forecasting":       "#4F46E5",
  "Pipeline Intelligence":     "#7C3AED",
  "Marketing Science":         "#059669",
  "Propensity & Scoring":      "#0891B2",
  "Data Engineering":          "#D97706",
  "Platform & Infrastructure": "#6B7280",
};

const domainIcons: Record<string, React.ReactNode> = {
  "Revenue Forecasting":       <TrendingUp size={56} strokeWidth={1.25} />,
  "Pipeline Intelligence":     <GitBranch size={56} strokeWidth={1.25} />,
  "Marketing Science":         <BarChart2 size={56} strokeWidth={1.25} />,
  "Propensity & Scoring":      <Target size={56} strokeWidth={1.25} />,
  "Data Engineering":          <Database size={56} strokeWidth={1.25} />,
  "Platform & Infrastructure": <Server size={56} strokeWidth={1.25} />,
};

const employmentLabels: Record<string, string> = {
  "ada-asia":    "ADA Asia",
  "revsure-ai":  "Current role",
  "both":        "ADA Asia → Current role",
};

function CaseSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
        {label}
      </h2>
      {children}
    </section>
  );
}

function readingTime(...parts: string[]): number {
  const words = parts.join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const narrative = caseStudies[project.slug];
  const accentColor = domainColors[project.domain] ?? "var(--color-accent)";
  const domainIcon = domainIcons[project.domain];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.slug !== project.slug)
    .slice(0, 3);
  const pageUrl = `https://www.akashlabs.dev/work/${project.slug}`;
  const minutes = readingTime(project.problem, project.what, project.impact);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.tagline,
    image: "https://www.akashlabs.dev/og-image.png",
    author: {
      "@type": "Person",
      name: "Akash Sharma",
      url: "https://www.akashlabs.dev",
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
          className="sticky top-20 z-30 px-6 py-3"
          style={{
            background: "var(--color-overlay-bg)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/work"
              className="link-secondary inline-flex items-center gap-2 text-sm"
            >
              <ArrowLeft size={14} />
              Back to Work
            </Link>
          </div>
        </div>

        {/* Header */}
        <header className="px-6 pt-10 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-md"
                style={{
                  background: `${accentColor}12`,
                  color: accentColor,
                  border: `1px solid ${accentColor}28`,
                }}
              >
                {project.domain}
              </span>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-md"
                style={{
                  background: "var(--color-surface-el)",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {employmentLabels[project.employment]}
              </span>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-md flex items-center gap-1"
                style={{
                  background: "var(--color-metric-dim)",
                  color: "var(--color-metric)",
                  border: "1px solid rgba(5,150,105,0.20)",
                }}
              >
                <CheckCircle2 size={11} />
                {project.status}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl mb-6" style={{ color: "var(--color-body)" }}>
              {project.tagline}
            </p>

            {/* Meta row: author / period / read time */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0" style={{ border: "1px solid var(--color-border)" }}>
                  <Image src="/akash.png" alt="Akash Sharma" fill sizes="32px" className="object-cover object-center" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight" style={{ color: "var(--color-headline)" }}>
                    Akash Sharma
                  </p>
                  <p className="text-xs leading-tight" style={{ color: "var(--color-muted)" }}>
                    {project.role}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
                <Calendar size={13} />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--color-muted)" }}>
                <Clock size={13} />
                {minutes} min read
              </span>
            </div>
          </div>
        </header>

        {/* Hero banner */}
        <div className="px-6 mb-10">
          <div
            className="max-w-4xl mx-auto relative h-56 md:h-72 rounded-3xl overflow-hidden flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accentColor}22 0%, var(--color-surface-el) 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-dots pointer-events-none" aria-hidden />
            <span className="relative" style={{ color: accentColor, opacity: 0.8 }}>
              {domainIcon}
            </span>
          </div>
        </div>

        {/* Metrics row */}
        {project.metrics.length > 0 && (
          <div className="px-6 mb-12">
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="card-soft px-5 py-4">
                  <p className="font-mono text-2xl font-bold" style={{ color: "var(--color-metric)" }}>
                    {m.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              <CaseSection label="Overview">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.what}
                </p>
              </CaseSection>

              <CaseSection label="The problem">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.problem}
                </p>
                {narrative?.initialApproach && (
                  <dl className="mt-6 grid sm:grid-cols-2 gap-3">
                    <div className="card-soft p-5">
                      <dt className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--color-muted)" }}>
                        Initial approach
                      </dt>
                      <dd className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                        {narrative.initialApproach}
                      </dd>
                    </div>
                    {narrative.whyNotEnough && (
                      <div className="card-soft p-5">
                        <dt className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--color-muted)" }}>
                          Why it wasn&apos;t enough
                        </dt>
                        <dd className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                          {narrative.whyNotEnough}
                        </dd>
                      </div>
                    )}
                  </dl>
                )}
              </CaseSection>

              {narrative?.flow && (
                <CaseSection label="How the system works">
                  <ol className="flex flex-col gap-2">
                    {narrative.flow.map((step, i) => (
                      <li key={step.label} className="flex items-start gap-4">
                        <span
                          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold"
                          style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="pt-0.5">
                          <p className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                            {step.label}
                          </p>
                          {step.note && (
                            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                              {step.note}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </CaseSection>
              )}

              {narrative?.decisions && (
                <CaseSection label="Engineering decisions">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {narrative.decisions.map((d) => (
                      <div key={d.question} className="card-soft p-5">
                        <p className="font-mono text-xs font-semibold mb-2" style={{ color: "var(--color-accent)" }}>
                          {d.question}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                          {d.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CaseSection>
              )}

              {narrative?.validation && (
                <CaseSection label="Validation">
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                    {narrative.validation}
                  </p>
                </CaseSection>
              )}

              {narrative?.failures && (
                <CaseSection label="What broke">
                  <ul className="flex flex-wrap gap-2">
                    {narrative.failures.map((f) => (
                      <li
                        key={f}
                        className="text-sm px-3 py-1.5 rounded-full"
                        style={{ background: "var(--color-surface-el)", color: "var(--color-headline)" }}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              )}

              <CaseSection label="Results">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {project.impact}
                </p>
              </CaseSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-5 md:sticky md:top-24 self-start">
              {/* Share */}
              <div className="card-soft p-5">
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Share
                </h3>
                <ShareLinks url={pageUrl} title={project.title} />
              </div>

              {/* Tech stack */}
              <div className="card-soft p-5">
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        background: "var(--color-surface-el)",
                        color: "var(--color-body)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain tags */}
              <div className="card-soft p-5">
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Domain Tags
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: `${accentColor}10`,
                        color: accentColor,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="card-soft p-5">
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
                      <dt className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
                        {label}
                      </dt>
                      <dd className="text-sm mt-0.5" style={{ color: "var(--color-headline)" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="px-6 py-16" style={{ background: "var(--color-bg-alt)" }}>
            <div className="max-w-4xl mx-auto">
              <div className="eyebrow-badge mb-4">More Work</div>
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-8"
                style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
              >
                Related {project.domain} Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedProjects.map((rel) => (
                  <ProjectCard key={rel.slug} project={rel} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div
          className="px-6 py-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-3 items-center gap-4">
            {/* Prev project */}
            <div>
              {prevProject ? (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="group flex flex-col gap-0.5"
                >
                  <span
                    className="inline-flex items-center gap-1 text-xs font-mono transition-colors duration-150"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <ArrowLeft size={12} /> Prev
                  </span>
                  <span
                    className="text-sm font-medium leading-snug transition-colors duration-150 group-hover:underline"
                    style={{ color: "var(--color-headline)" }}
                  >
                    {prevProject.title}
                  </span>
                </Link>
              ) : null}
            </div>

            {/* Center: All Projects */}
            <div className="flex justify-center">
              <Link
                href="/work"
                className="link-secondary inline-flex items-center gap-2 text-sm"
              >
                <ArrowLeft size={14} /> All Projects
              </Link>
            </div>

            {/* Next project */}
            <div className="flex justify-end text-right">
              {nextProject ? (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex flex-col gap-0.5 items-end"
                >
                  <span
                    className="inline-flex items-center gap-1 text-xs font-mono transition-colors duration-150"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Next <ArrowUpRight size={12} />
                  </span>
                  <span
                    className="text-sm font-medium leading-snug transition-colors duration-150 group-hover:underline"
                    style={{ color: "var(--color-headline)" }}
                  >
                    {nextProject.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
