"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { Mail } from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
  download?: boolean;
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Navigation",
    links: [
      { href: "/#about", label: "About" },
      { href: "/#experience", label: "Experience" },
      { href: "/#work", label: "Work" },
      { href: "/#skills", label: "Skills" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/work", label: "All Projects" },
      { href: "/resume.pdf", label: "Resume", download: true },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    icon: <LinkedinIcon size={15} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/CosmiX-6/",
    icon: <GithubIcon size={15} />,
  },
  {
    label: "Email",
    href: "mailto:akashsharmaxxiv@gmail.com",
    icon: <Mail size={15} />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-stripes pointer-events-none" aria-hidden />
      <div className="relative max-w-5xl mx-auto">
        {/* Wordmark */}
        <p
          className="text-xl font-bold tracking-tight mb-8"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
        >
          Akash Sharma
        </p>

        {/* Bento nav card */}
        <div className="card-soft px-8 py-9 grid sm:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: "var(--color-headline)" }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => {
                  const linkClassName = "text-sm transition-colors duration-150";
                  const linkStyle = { color: "var(--color-body)" };
                  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--color-accent)");
                  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--color-body)");
                  return (
                    <li key={l.href}>
                      {l.download ? (
                        <a
                          href={l.href}
                          download="Akash_Sharma_Resume.pdf"
                          className={linkClassName}
                          style={linkStyle}
                          onMouseEnter={handleEnter}
                          onMouseLeave={handleLeave}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className={linkClassName}
                          style={linkStyle}
                          onMouseEnter={handleEnter}
                          onMouseLeave={handleLeave}
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-headline)" }}
            >
              Connect
            </p>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 text-sm transition-colors duration-150"
                    style={{ color: "var(--color-body)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-body)")
                    }
                  >
                    <span style={{ color: "var(--color-muted)" }}>{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2">
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © {year} Akash Sharma. Bengaluru, India.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs transition-colors duration-150"
            style={{ color: "var(--color-muted)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted)")
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
