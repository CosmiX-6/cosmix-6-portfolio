import { Target, ShieldCheck, Cog, Zap, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const principles: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "1. Problem Framing",
    body: "Understand the business problem, data-generating process, and real constraints.",
    icon: Target,
  },
  {
    title: "2. Rigorous Validation",
    body: "Use the right methods, validate assumptions, and quantify uncertainty.",
    icon: ShieldCheck,
  },
  {
    title: "3. Engineering Judgment",
    body: "Build scalable, configurable, and explainable systems.",
    icon: Cog,
  },
  {
    title: "4. Production Ownership",
    body: "Take solutions to production, monitor, debug, and continuously improve.",
    icon: Zap,
  },
];

export function HowIWork() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--color-bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="eyebrow-badge mb-4">My Approach</div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight"
                style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
              >
                How I work.
              </h2>
            </div>
            <p className="text-sm max-w-sm" style={{ color: "var(--color-body)" }}>
              A problem-first, end-to-end approach to building reliable and impactful data science systems.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="card-soft p-6 h-full">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-full mb-5"
                    style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--color-headline)" }}>
                    {p.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-body)" }}>
                    {p.body}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
