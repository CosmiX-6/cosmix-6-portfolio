import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { experiences, education, certifications } from "@/lib/data/experience";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akash Sharma's career story — from building the first ML models on a Revenue Intelligence Platform to owning a full-stack of forecasting, attribution, and GTM intelligence systems.",
};

const cvSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Akash Sharma",
    jobTitle: "Revenue AI Engineer",
    description:
      "Data Scientist and AI Engineer with 4+ years building production ML systems for B2B SaaS GTM revenue teams.",
    worksFor: { "@type": "Organization", name: "Revsure AI" },
    alumniOf: [
      { "@type": "Organization", name: "ADA Asia" },
      { "@type": "EducationalOrganization", name: "Imarticus Learning" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={cvSchema} />
      <div className="min-h-screen">
        {/* Header */}
        <section className="pt-16 pb-12 px-6 grid-bg" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
              About
            </p>
            <h1 className="text-4xl font-bold mb-5" style={{ color: "var(--color-headline)" }}>
              Akash Sharma
            </h1>
            <p className="text-xl font-medium mb-4" style={{ color: "var(--color-body)" }}>
              Revenue AI Engineer · Applied ML · B2B SaaS GTM Intelligence
            </p>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--color-body)" }}>
              I build production ML systems that convert messy CRM, campaign, and funnel data
              into business decisions — pipeline forecasts, revenue predictions, marketing attribution,
              campaign budget reallocation, and customer-facing analytics.
            </p>
          </div>
        </section>

        <div className="px-6 py-14">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Career narrative */}
            <section>
              <h2 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-accent)" }}>
                Career Narrative
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                <p>
                  My strongest story is not &ldquo;I trained models.&rdquo; It is: I build production ML
                  systems that convert messy B2B CRM, campaign, and funnel data into business
                  decisions.
                </p>
                <p>
                  Starting in April 2022, I joined a team building a B2B SaaS Revenue Intelligence Platform,
                  initially as a Data Scientist. Over 2.5 years I built the foundational platform
                  infrastructure — the Pipeline Projection Engine, propensity models, multi-touch attribution,
                  marketing mix modeling, statistical incrementality testing, process automation, and the
                  first version of the Macro Forecast Model.
                </p>
                <p>
                  I took on progressively more complex modeling ownership — a complete rewrite of the
                  outlier handling system, a parallelized Hill Curve Transformer for 1000+ feature scale,
                  a scenario planner cascade bug fix, and an HMM-enhanced attribution layer.
                </p>
                <p>
                  In December 2024, I transitioned directly into Revsure AI as an AI Engineer, continuing
                  to own and evolve the same platform systems — reducing booking model MAPE by ~52%,
                  shipping forecast explainability infrastructure, building the configurable multi-model
                  framework, and fixing production-critical MMX edge cases.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: "var(--color-accent)" }}>
                Experience
              </h2>
              <div className="space-y-10">
                {experiences.map((exp) => (
                  <div key={exp.company} className="relative pl-5" style={{ borderLeft: `2px solid ${exp.type === "current" ? "var(--color-accent)" : "var(--color-border)"}` }}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold" style={{ color: "var(--color-headline)" }}>
                            {exp.role}
                          </h3>
                          {exp.type === "current" && (
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: "rgba(79,255,203,0.12)", color: "var(--color-accent)", border: "1px solid rgba(79,255,203,0.25)" }}>
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium" style={{ color: "var(--color-body)" }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono" style={{ color: "var(--color-muted)" }}>{exp.period}</p>
                        <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>{exp.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-body)" }}>
                      {exp.context}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-body)" }}>
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: "var(--color-accent)" }}>
                Education
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="rounded-xl p-5"
                    style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                  >
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-headline)" }}>
                      {edu.credential}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-body)" }}>{edu.institution}</p>
                    <p className="text-xs font-mono mt-1" style={{ color: "var(--color-muted)" }}>
                      {edu.period} · {edu.location}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {edu.skills.slice(0, 5).map((s) => (
                        <span key={s} className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: "var(--color-surface-el)", color: "var(--color-muted)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--color-accent)" }}>
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
                    style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                  >
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                    <div>
                      <p className="text-sm font-medium leading-snug" style={{ color: "var(--color-headline)" }}>
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

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                View my work <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium"
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
