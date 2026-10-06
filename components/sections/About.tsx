import { Sparkles, MapPin, Briefcase, Globe, Database, Sigma, Server, Target, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const steps = [
  {
    icon: Database,
    title: "Data",
    body: "Raw, messy, multi-source",
    detail: "CRM · Ads · Product · Sales · External data",
  },
  {
    icon: Sigma,
    title: "Modeling",
    body: "Statistical + ML methods",
    detail: "Forecasting · Attribution · MMM · Propensity",
  },
  {
    icon: Server,
    title: "Production",
    body: "Scalable & reliable systems",
    detail: "Pipelines · APIs · Monitoring · Explainability",
  },
  {
    icon: Target,
    title: "Business Decision",
    body: "Insights that drive impact",
    detail: "Pipeline · Revenue · Marketing strategy · Planning",
  },
];

const exploring = [
  "LLM orchestration & multi-agent pipelines",
  "Advanced RAG architectures",
  "AI systems evaluation & observability",
];

const quickFacts = [
  { icon: <MapPin size={15} />, label: "Bengaluru, India" },
  { icon: <Briefcase size={15} />, label: "4+ years experience" },
  { icon: <Globe size={15} />, label: "Open to remote roles" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="absolute inset-0 bg-dots pointer-events-none" aria-hidden />
      <div className="relative max-w-5xl mx-auto">
        {/* What I do */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <div className="eyebrow-badge mb-4">What I do</div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight max-w-md"
                style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
              >
                End-to-end Data Science for real-world impact.
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--color-body)" }}>
              From raw, messy data to production systems. I work across the entire lifecycle to build
              solutions that are accurate, explainable, and actually used.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.05} className="relative">
                <div className="card-soft p-6 h-full">
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full mb-5"
                    style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <p className="text-base font-semibold mb-1" style={{ color: "var(--color-headline)" }}>
                    {step.title}
                  </p>
                  <p className="text-sm mb-3" style={{ color: "var(--color-body)" }}>
                    {step.body}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {step.detail}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="hidden md:flex absolute top-1/2 -right-[11px] -translate-y-1/2 z-10 items-center justify-center w-[22px] h-[22px] rounded-full"
                    style={{ background: "var(--color-surface)", color: "var(--color-accent)", boxShadow: "var(--shadow-card)" }}
                    aria-hidden
                  >
                    <ArrowRight size={12} />
                  </span>
                )}
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="eyebrow-badge mb-4">About</div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            I turn messy data into <em className="font-serif-accent font-normal">decisions</em> companies can bet on.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {/* Narrative */}
          <AnimatedSection delay={0.05} className="md:col-span-2">
            <div className="card-soft p-7 md:p-8 h-full">
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                <p>
                  My strongest story is not &ldquo;I trained models.&rdquo; It is: I build production
                  AI systems that convert complex data into decisions companies can act on at scale.
                </p>
                <p>
                  Starting in April 2022, I joined a team building an enterprise SaaS intelligence
                  platform as a Data Scientist. Over 2.5 years I built foundational ML infrastructure
                  from scratch: a pipeline projection engine, propensity models, multi-touch
                  attribution, marketing mix modeling, statistical incrementality testing, and the
                  first version of a macro forecast model.
                </p>
                <p>
                  In December 2024, I transitioned into Revsure AI as an AI Engineer, continuing to
                  own and evolve the same platform: reducing forecast MAPE by ~52%, shipping
                  explainability infrastructure, building a configurable multi-model framework, and
                  resolving production-critical edge cases at scale.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick facts + currently exploring */}
          <AnimatedSection delay={0.1}>
            <div className="card-soft p-7 h-full flex flex-col gap-6">
              <div className="space-y-4">
                {quickFacts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                      style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                    >
                      {f.icon}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--color-headline)" }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-5" style={{ borderTop: "1px solid var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} style={{ color: "var(--color-accent)" }} />
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-accent)" }}>
                    Currently exploring
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exploring.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "var(--color-accent-dim)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
