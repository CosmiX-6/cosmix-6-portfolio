import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { EngineeringArtifact } from "@/components/shared/EngineeringArtifact";

export function Hero() {
  return (
    <section id="home" className="relative px-6 scroll-mt-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 items-center pt-8 pb-20">
        <div>
          <p className="font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: "var(--color-muted)" }}>
            AI Engineer · Bengaluru · Open to opportunities
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.04] mb-4"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.035em" }}
          >
            Akash Sharma
          </h1>
          <p className="text-xl font-semibold mb-4" style={{ color: "var(--color-accent)" }}>
            AI Engineer
          </p>
          <p className="text-lg md:text-xl font-medium leading-snug mb-5" style={{ color: "var(--color-headline)" }}>
            Building intelligent systems that survive contact with real-world data.
          </p>
          <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: "var(--color-body)" }}>
            I work across applied machine learning, forecasting, data engineering, model validation, and production
            systems, taking problems from messy data and uncertain assumptions to systems people can actually rely on.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link href="/#work" className="btn-gradient">
              Explore my work
              <ArrowRight size={15} />
            </Link>
            <a
              href="/resume.pdf"
              download="Akash_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
            >
              <Download size={14} style={{ color: "var(--color-accent)" }} />
              View resume
            </a>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: "var(--color-muted)" }}>
            <a
              href="https://github.com/CosmiX-6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-headline)] transition-colors"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-headline)] transition-colors"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
          </div>
        </div>
        <EngineeringArtifact />
      </div>
    </section>
  );
}
