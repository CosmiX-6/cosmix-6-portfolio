"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>
            Akash Sharma
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
            Revenue AI Engineer · Applied ML · B2B SaaS GTM Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-headline)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/CosmiX-6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-headline)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <GithubIcon size={18} />
          </a>
          <Link
            href="/contact"
            className="text-xs font-mono transition-colors duration-200"
            style={{ color: "var(--color-muted)" }}
          >
            Get in touch →
          </Link>
        </div>

        <p className="text-xs font-mono" style={{ color: "var(--color-muted)" }}>
          © {year} · akashsharma.dev
        </p>
      </div>
    </footer>
  );
}
