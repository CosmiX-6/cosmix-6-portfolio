import { CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { experiences, education, certifications } from "@/lib/data/experience";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-6 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="eyebrow-badge mb-4">Experience</div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl"
                style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
              >
                Building and evolving revenue AI systems.
              </h2>
            </div>
            <p className="text-sm max-w-sm" style={{ color: "var(--color-body)" }}>
              4+ years building, shipping, and scaling data science and AI systems in B2B SaaS, from
              initial prototypes to production platforms.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-12">
          <div
            className="absolute left-[11px] top-6 bottom-6 w-px"
            style={{ background: "var(--color-border)" }}
            aria-hidden
          />
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const isCurrent = exp.type === "current";
              return (
                <AnimatedSection key={exp.company} delay={i * 0.06} className="relative">
                  <span
                    className="absolute -left-10 md:-left-12 top-7 flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ background: "var(--color-surface)", boxShadow: "var(--shadow-card)" }}
                    aria-hidden
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-accent)" }} />
                  </span>

                  <div className="card-soft p-6 md:p-7 flex flex-col md:flex-row gap-6">
                    {/* Org badge */}
                    <div className="shrink-0 flex md:flex-col items-center md:items-start gap-3 md:w-40">
                      {isCurrent ? (
                        <div
                          className="flex flex-col items-center justify-center w-28 h-20 rounded-2xl text-white"
                          style={{ background: "var(--color-ink)" }}
                        >
                          <Sparkles size={16} />
                          <span className="text-xs font-bold mt-1">Revsure AI</span>
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center w-28 h-20 rounded-2xl text-lg font-bold font-mono"
                          style={{ background: "var(--color-surface-el)", color: "var(--color-headline)" }}
                        >
                          {initials(exp.company)}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold" style={{ color: "var(--color-headline)" }}>
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-body)" }}>
                        {exp.company}
                      </p>
                      <p className="text-xs font-mono mt-1 mb-4" style={{ color: "var(--color-muted)" }}>
                        {exp.period} · {exp.duration}
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
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-5 mt-14">
          <AnimatedSection delay={0.05}>
            <div className="card-soft p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={16} style={{ color: "var(--color-accent)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--color-headline)" }}>
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.institution} className="flex gap-4">
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold select-none"
                      style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                    >
                      {initials(edu.institution)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                        {edu.credential}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-body)" }}>
                        {edu.institution}
                      </p>
                      <p className="text-xs font-mono mt-0.5" style={{ color: "var(--color-muted)" }}>
                        {edu.period} · {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card-soft p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <ShieldCheck size={16} style={{ color: "var(--color-accent)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--color-headline)" }}>
                  Verified Credentials
                </h3>
              </div>
              <p className="text-xs mb-4" style={{ color: "var(--color-muted)" }}>
                11 active IBM × Coursera credentials verified via Credly (earned 2021).
              </p>
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
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
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
