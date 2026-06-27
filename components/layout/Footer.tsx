"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F172A" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
              Akash Sharma
            </p>
            <p className="text-xs mt-1" style={{ color: "#64748B" }}>
              AI Engineer · Applied ML · Production Systems
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>
              Mumbai, India
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors duration-150"
                style={{ color: "#64748B" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/akash-sharma-01775b14a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors duration-150"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")
              }
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="https://github.com/CosmiX-6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors duration-150"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")
              }
            >
              <GithubIcon size={17} />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderTop: "1px solid #1E293B" }}
        >
          <p className="text-xs font-mono" style={{ color: "#475569" }}>
            © {year} Akash Sharma
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-mono transition-colors duration-150"
            style={{ color: "#475569", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#E2E8F0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#475569")
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
