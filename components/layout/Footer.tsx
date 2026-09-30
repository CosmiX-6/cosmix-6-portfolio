"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-ink)" }}>
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold" style={{ color: "#F1EFFB" }}>
              Akash Sharma
            </p>
            <p className="text-xs mt-1" style={{ color: "#8E8AB8" }}>
              AI Engineer · Applied ML · Production Systems
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#8E8AB8" }}>
              Bengaluru, India
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors duration-150"
                style={{ color: "#8E8AB8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#F1EFFB")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#8E8AB8")
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
              style={{ color: "#8E8AB8" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#F1EFFB")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#8E8AB8")
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
              style={{ color: "#8E8AB8" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#F1EFFB")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#8E8AB8")
              }
            >
              <GithubIcon size={17} />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(241,239,251,0.10)" }}
        >
          <p className="text-xs font-mono" style={{ color: "#5F5B8A" }}>
            © {year} Akash Sharma
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-mono transition-colors duration-150"
            style={{ color: "#5F5B8A", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#F1EFFB")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#5F5B8A")
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
