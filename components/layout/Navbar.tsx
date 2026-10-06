"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const links = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, [pathname]);

  const displayActiveId = pathname === "/" ? activeId : null;

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-4">
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between gap-3 rounded-full pl-2.5 pr-2 py-2"
        style={{
          background: "var(--color-overlay-bg-strong)",
          backdropFilter: "blur(14px) saturate(1.4)",
          WebkitBackdropFilter: "blur(14px) saturate(1.4)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-pill)",
        }}
      >
        {/* Monogram + wordmark */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 pr-1">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold text-white"
            style={{ background: "var(--gradient-cta)" }}
          >
            AK
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight" style={{ color: "var(--color-headline)" }}>
              Akash Labs
            </span>
            <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>
              Data Science · AI Systems
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = displayActiveId === l.id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm px-3 py-1.5 rounded-full transition-colors duration-150"
                style={{
                  color: isActive ? "var(--color-accent)" : "var(--color-body)",
                  background: isActive ? "var(--color-accent-dim)" : "transparent",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Link href="/#contact" className="btn-gradient hidden sm:inline-flex !py-2 !px-4 !text-xs">
            Let&apos;s Connect
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-150"
            style={{ color: "var(--color-body)", background: "var(--color-surface-el)" }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden max-w-5xl mx-auto mt-2 rounded-2xl px-5 py-4 flex flex-col gap-1"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-pill)",
          }}
        >
          {links.map((l) => {
            const isActive = displayActiveId === l.id;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors duration-150"
                style={{
                  color: isActive ? "var(--color-accent)" : "var(--color-body)",
                  background: isActive ? "var(--color-accent-dim)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-gradient justify-center mt-2">
            Let&apos;s Connect
          </Link>
        </div>
      )}
    </header>
  );
}
