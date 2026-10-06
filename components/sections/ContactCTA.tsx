import { Mail, FileText } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";

export function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-24 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
          Contact
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.03em" }}
        >
          Have an interesting ML problem? Let&apos;s talk.
        </h2>
        <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: "var(--color-body)" }}>
          I&apos;m open to AI engineering, applied ML, and senior data science roles where I can own systems end to end.
          Based in Bengaluru, open to remote roles globally.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
          >
            <LinkedinIcon size={14} />
            LinkedIn
          </a>
          <a
            href="mailto:akashsharmaxxiv@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
          >
            <Mail size={14} style={{ color: "var(--color-accent)" }} />
            Email
          </a>
          <a
            href="/resume.pdf"
            download="Akash_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: "var(--color-surface)", color: "var(--color-headline)", boxShadow: "var(--shadow-card)" }}
          >
            <FileText size={14} style={{ color: "var(--color-accent)" }} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
