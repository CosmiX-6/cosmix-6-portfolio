"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akash-sharma-01775b14a",
    href: "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    icon: <LinkedinIcon size={20} />,
    hoverColor: "#0A66C2",
    description: "Best for professional enquiries and DMs",
  },
  {
    label: "GitHub",
    value: "github.com/CosmiX-6",
    href: "https://github.com/CosmiX-6/",
    icon: <GithubIcon size={20} />,
    hoverColor: "var(--color-headline)",
    description: "Code and side projects",
  },
  {
    label: "Email",
    value: "akashsharmaxxiv@gmail.com",
    href: "mailto:akashsharmaxxiv@gmail.com",
    icon: <Mail size={20} />,
    hoverColor: "var(--color-accent)",
    description: "For detailed conversation or opportunities",
  },
];

export function ContactLinks() {
  return (
    <div className="space-y-3">
      {contactLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="flex items-center justify-between gap-4 rounded-xl p-5 group transition-all duration-150"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = link.hoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
          }}
        >
          <div className="flex items-center gap-4">
            <span style={{ color: "var(--color-muted)" }}>{link.icon}</span>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-headline)" }}>
                {link.label}
              </p>
              <p className="text-xs font-mono mt-0.5" style={{ color: "var(--color-muted)" }}>
                {link.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                {link.description}
              </p>
            </div>
          </div>
          <ArrowUpRight size={15} style={{ color: "var(--color-muted)" }} className="shrink-0" />
        </a>
      ))}
    </div>
  );
}
