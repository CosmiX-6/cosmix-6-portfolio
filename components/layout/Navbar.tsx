"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "var(--color-overlay-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(1.5)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(1.5)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors duration-150"
          style={{ color: "var(--color-headline)" }}
        >
          Akash Sharma
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive =
              pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href + "/"));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm transition-colors duration-150 pb-px ${isActive ? "font-semibold" : "font-medium"}`}
                style={{ color: isActive ? "var(--color-accent)" : "var(--color-body)" }}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                )}
              </Link>
            );
          })}

          <a
            href="/resume.pdf"
            download="Akash_Sharma_Resume.pdf"
            className="text-sm font-medium px-4 py-1.5 rounded-md transition-all duration-150"
            style={{
              border: "1.5px solid var(--color-border)",
              color: "var(--color-body)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-accent-dim)";
              el.style.borderColor = "var(--color-accent)";
              el.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "var(--color-border)";
              el.style.color = "var(--color-body)";
            }}
          >
            Download Resume ↓
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-md transition-colors duration-150"
          style={{ color: "var(--color-body)" }}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col"
          style={{
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-3 border-b transition-colors duration-150"
                style={{
                  color: isActive ? "var(--color-accent)" : "var(--color-body)",
                  borderColor: "var(--color-border)",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            download="Akash_Sharma_Resume.pdf"
            className="mt-4 text-sm font-medium text-center py-2.5 rounded-md transition-colors duration-150"
            style={{
              border: "1.5px solid var(--color-border)",
              color: "var(--color-body)",
            }}
          >
            Download Resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
