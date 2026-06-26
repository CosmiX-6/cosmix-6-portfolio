import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/sections/ContactLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Akash Sharma — Revenue AI Engineer and Applied ML specialist.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 px-6 grid-bg" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--color-headline)" }}>
            Let&apos;s Talk
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--color-body)" }}>
            I&apos;m interested in senior data science, AI engineering, and applied ML roles
            at companies building with revenue intelligence, marketing science, or production
            forecasting systems.
          </p>
        </div>
      </section>

      <div className="px-6 py-14">
        <div className="max-w-3xl mx-auto">

          {/* What I'm looking for */}
          <section className="mb-14">
            <h2
              className="font-mono text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              What I&apos;m Looking For
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Senior Data Scientist",
                  desc: "Production forecasting, attribution, or ML infrastructure ownership",
                  color: "#00c2ff",
                },
                {
                  title: "AI / ML Engineer",
                  desc: "Applied ML platform roles with end-to-end system ownership",
                  color: "#4fffcb",
                },
                {
                  title: "Marketing Science DS",
                  desc: "MMM, MTA, incrementality testing, and spend optimization",
                  color: "#c084fc",
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
          <section className="mb-14">
            <h2
              className="font-mono text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </h2>
            <ContactLinks />
          </section>

          {/* Quick nav */}
          <div
            className="flex flex-wrap gap-6 pt-8"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <Link
              href="/work"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-body)" }}
            >
              View my work →
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors duration-200"
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
