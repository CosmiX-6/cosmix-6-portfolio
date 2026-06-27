"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const tiles = [
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/akash-sharma-01775b14a",
    href: "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    icon: <LinkedinIcon size={20} />,
    hoverBorder: "#0A66C2",
  },
  {
    label: "GitHub",
    sub: "github.com/CosmiX-6",
    href: "https://github.com/CosmiX-6/",
    icon: <GithubIcon size={20} />,
    hoverBorder: "var(--color-headline)",
  },
  {
    label: "Email",
    sub: "akashsharmaxxiv@gmail.com",
    href: "mailto:akashsharmaxxiv@gmail.com",
    icon: <Mail size={20} />,
    hoverBorder: "var(--color-accent)",
  },
];

export function ContactCTA() {
  return (
    <section
      className="py-20 px-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Let&apos;s Connect
          </p>
          <h2
            className="text-3xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
          >
            Let&apos;s talk
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-body)" }}>
            I&apos;m looking for senior AI engineering and applied ML roles where I can own
            production systems end-to-end. I respond fastest on LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
            {tiles.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                target={tile.href.startsWith("mailto") ? undefined : "_blank"}
                rel={tile.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex flex-col items-center gap-2 rounded-xl px-5 py-4 text-center transition-all duration-150 flex-1"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = tile.hoverBorder;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <span style={{ color: "var(--color-muted)" }}>{tile.icon}</span>
                <span className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                  {tile.label}
                </span>
                <span className="text-xs font-mono truncate w-full" style={{ color: "var(--color-muted)" }}>
                  {tile.sub}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
