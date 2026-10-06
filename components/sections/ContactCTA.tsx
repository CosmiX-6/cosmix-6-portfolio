import { Mail, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { LinkedinIcon } from "@/components/shared/SocialIcons";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="card-soft p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="eyebrow-badge mb-4">Get in Touch</div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight max-w-md"
                style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
              >
                Open to opportunities in Data Science and AI.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-body)" }}>
                I&apos;m looking for AI engineering, applied ML, and senior data science roles where I can own
                production systems end-to-end, including forecasting, attribution, and marketing science.
                Based in Bengaluru, open to remote roles globally.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="mailto:akashsharmaxxiv@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{ background: "var(--color-surface-el)", color: "var(--color-headline)" }}
                >
                  <Mail size={14} style={{ color: "var(--color-accent)" }} />
                  Email Me
                </a>
                <a
                  href="/resume.pdf"
                  download="Akash_Sharma_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{ background: "var(--color-surface-el)", color: "var(--color-headline)" }}
                >
                  <FileText size={14} style={{ color: "var(--color-accent)" }} />
                  View Resume
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: "var(--color-muted)" }}>
                <LinkedinIcon size={13} />
                <span className="font-mono">linkedin.com/in/akash-sharma-01775b14a</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
