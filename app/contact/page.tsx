import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/sections/ContactLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Akash Sharma — AI Engineer and Applied ML specialist.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section
        className="pt-14 pb-10 px-6"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Get in Touch
          </p>
          <h1
            className="text-3xl font-bold mb-3 tracking-tight"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Let&apos;s Talk
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--color-body)" }}>
            I&apos;m interested in senior AI engineering and applied ML roles where I can own
            production systems — forecasting, attribution, ML platforms, or decision intelligence.
          </p>
        </div>
      </section>

      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto">

          {/* What I'm looking for */}
          <section className="mb-12">
            <h2
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              What I&apos;m Looking For
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "AI / ML Engineer",
                  desc: "Applied ML platform roles with end-to-end system ownership at production scale",
                  color: "var(--color-accent)",
                },
                {
                  title: "Senior Data Scientist",
                  desc: "Forecasting, attribution, experimentation, or ML infrastructure ownership",
                  color: "var(--color-metric)",
                },
                {
                  title: "Marketing Science DS",
                  desc: "MMM, MTA, incrementality testing, and spend optimization",
                  color: "#8B5CF6",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl p-5"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-3"
                    style={{ background: role.color }}
                  />
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--color-headline)" }}
                  >
                    {role.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact links */}
          <section className="mb-12">
            <h2
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              Contact
            </h2>
            <ContactLinks />
          </section>

          {/* Location note */}
          <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
            Based in Mumbai, India. Open to remote roles globally.
          </p>

          {/* Quick nav */}
          <div
            className="flex flex-wrap gap-6 pt-8"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <Link
              href="/work"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--color-body)" }}
            >
              View my work →
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--color-body)" }}
            >
              About me →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
