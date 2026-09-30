import { Sparkles, MapPin, Briefcase, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

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
        <AnimatedSection>
          <div className="eyebrow-badge mb-4">About</div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            I turn messy data into decisions companies can bet on.
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
