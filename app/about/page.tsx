import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { experiences, education, certifications } from "@/lib/data/experience";
import { JsonLd } from "@/components/shared/JsonLd";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akash Sharma's career story — from building the first ML models from scratch to owning a full production stack of forecasting, attribution, and decision intelligence systems.",
};

const cvSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Akash Sharma",
    jobTitle: "AI Engineer",
    description:
      "AI Engineer with 4+ years building production ML systems — forecasting pipelines, attribution models, and decision intelligence at scale.",
    worksFor: { "@type": "Organization", name: "Revsure AI" },
    alumniOf: [
      { "@type": "Organization", name: "ADA Asia" },
      { "@type": "EducationalOrganization", name: "Imarticus Learning" },
    ],
  },
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={cvSchema} />
      <div className="min-h-screen">
        {/* Header */}
        <section
          className="pt-14 pb-10 px-6"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <div className="max-w-4xl mx-auto">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              About
            </p>
            <h1
              className="font-bold mb-2 tracking-tight"
              style={{
                color: "var(--color-headline)",
                letterSpacing: "-0.02em",
                fontSize: "40px",
                lineHeight: 1.15,
              }}
            >
              Akash Sharma
            </h1>
            <p className="text-sm font-medium mb-2" style={{ color: "var(--color-muted)" }}>
              AI Engineer · Applied ML · Production Systems
            </p>
            <p className="text-base font-medium mb-4 italic" style={{ color: "var(--color-body)" }}>
              I turn messy data into decisions companies can bet on — end-to-end, in production.
            </p>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--color-body)" }}>
              I build production AI systems that convert complex, high-dimensional data into
              reliable business decisions — forecasting, attribution, experimentation, and
              ML infrastructure that companies can depend on.
            </p>
          </div>
        </section>

        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-14">

            {/* Currently Exploring */}
            <AnimatedSection delay={0}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-accent-dim)",
                  borderLeft: "4px solid var(--color-accent)",
                  border: "1px solid var(--color-accent)",
                  borderLeftWidth: "4px",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={15} style={{ color: "var(--color-accent)" }} />
                  <p
                    className="font-mono text-xs tracking-widest uppercase font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Currently Exploring
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "LLM orchestration & multi-agent pipelines",
                    "Advanced RAG architectures",
                    "AI systems evaluation & observability",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-accent)",
                        color: "var(--color-accent)",
                        opacity: 0.85,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Career narrative */}
            <AnimatedSection delay={0.05}>
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Career Narrative
                </h2>
                <div className="space-y-4 text-base leading-relaxed max-w-2xl" style={{ color: "var(--color-body)" }}>
                  <p>
                    My strongest story is not &ldquo;I trained models.&rdquo; It is: I build production AI
                    systems that convert complex data into decisions — ones companies can act on at scale.
                  </p>
                  <p>
                    Starting in April 2022, I joined a team building an enterprise SaaS intelligence platform
                    as a Data Scientist. Over 2.5 years I built foundational ML infrastructure from scratch
                    — a pipeline projection engine, propensity models, multi-touch attribution, marketing mix
                    modeling, statistical incrementality testing, and the first version of a macro forecast model.
                  </p>
                  <p>
                    I took on progressively more complex system ownership — a complete rewrite of the
                    outlier handling system, a parallelized Hill Curve Transformer scaling to 1000+ features,
                    cascade bug fixes in scenario planning, and a firmographic-enriched attribution layer.
                  </p>
                  <p>
                    In December 2024, I transitioned into Revsure AI as an AI Engineer, continuing to own
                    and evolve the same platform — reducing forecast MAPE by ~52%, shipping explainability
                    infrastructure, building a configurable multi-model framework, and resolving
                    production-critical edge cases at scale.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            {/* Experience */}
            <AnimatedSection delay={0.1}>
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-8"
                  style={{ color: "var(--color-accent)" }}
                >
                  Experience
                </h2>
                <div className="space-y-10">
                  {experiences.map((exp) => (
                    <div
                      key={exp.company}
                      className="relative pl-5"
                      style={{
                        borderLeft: `2px solid ${
                          exp.type === "current"
                            ? "var(--color-accent)"
                            : "var(--color-border)"
                        }`,
                      }}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute top-0.5 w-2.5 h-2.5 rounded-full"
                        style={{
                          left: "-5px",
                          background:
                            exp.type === "current"
                              ? "var(--color-accent)"
                              : "var(--color-muted)",
                          border: "2px solid var(--color-bg)",
                        }}
                      />

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className="text-lg font-semibold"
                              style={{ color: "var(--color-headline)" }}
                            >
                              {exp.role}
                            </h3>
                            {exp.type === "current" && (
                              <span
                                className="text-xs font-mono px-2 py-0.5 rounded-full"
                                style={{
                                  background: "var(--color-accent-dim)",
                                  color: "var(--color-accent)",
                                  border: "1px solid var(--color-accent)",
                                }}
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium" style={{ color: "var(--color-body)" }}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-mono" style={{ color: "var(--color-muted)" }}>
                            {exp.period}
                          </p>
                          <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
                            {exp.duration}
                          </p>
                        </div>
                      </div>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "var(--color-body)" }}
                      >
                        {exp.context}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--color-body)" }}
                          >
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--color-accent)" }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.05}>
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-8"
                  style={{ color: "var(--color-accent)" }}
                >
                  Education
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {education.map((edu) => (
                    <div
                      key={edu.institution}
                      className="rounded-xl p-5 flex gap-4"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {/* Institution initials badge */}
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold select-none"
                        style={{
                          background: "var(--color-accent-dim)",
                          color: "var(--color-accent)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {initials(edu.institution)}
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: "var(--color-headline)" }}
                        >
                          {edu.credential}
                        </p>
                        <p className="text-sm" style={{ color: "var(--color-body)" }}>
                          {edu.institution}
                        </p>
                        <p className="text-xs font-mono mt-1" style={{ color: "var(--color-muted)" }}>
                          {edu.period} · {edu.location}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.skills.slice(0, 5).map((s) => (
                            <span
                              key={s}
                              className="text-xs font-mono px-2 py-0.5 rounded"
                              style={{
                                background: "var(--color-surface-el)",
                                color: "var(--color-muted)",
                                border: "1px solid var(--color-border)",
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection delay={0.05}>
              <section>
                <h2
                  className="font-mono text-xs tracking-widest uppercase mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Verified Credentials
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
                  11 active IBM × Coursera credentials verified via Credly (earned 2021).
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-3 rounded-lg p-4"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <div>
                        <p
                          className="text-sm font-medium leading-snug"
                          style={{ color: "var(--color-headline)" }}
                        >
                          {cert.name}
                        </p>
                        <p className="text-xs font-mono mt-0.5" style={{ color: "var(--color-muted)" }}>
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-4 pt-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--color-accent)" }}
              >
                View my work <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--color-body)" }}
              >
                Get in touch →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
