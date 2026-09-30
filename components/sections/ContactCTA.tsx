"use client";

import { motion } from "framer-motion";
import { Mail, Cpu, LineChart, Target } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";

const tiles = [
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/akash-sharma-01775b14a",
    href: "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    icon: <LinkedinIcon size={20} />,
  },
  {
    label: "GitHub",
    sub: "github.com/CosmiX-6",
    href: "https://github.com/CosmiX-6/",
    icon: <GithubIcon size={20} />,
  },
  {
    label: "Email",
    sub: "akashsharmaxxiv@gmail.com",
    href: "mailto:akashsharmaxxiv@gmail.com",
    icon: <Mail size={20} />,
  },
];

const roles = [
  {
    title: "AI / ML Engineer",
    desc: "Applied ML platform roles with end-to-end system ownership at production scale",
    icon: <Cpu size={18} />,
  },
  {
    title: "Senior Data Scientist",
    desc: "Forecasting, attribution, experimentation, or ML infrastructure ownership",
    icon: <LineChart size={18} />,
  },
  {
    title: "Marketing Science DS",
    desc: "MMM, MTA, incrementality testing, and spend optimization",
    icon: <Target size={18} />,
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-16 md:px-16 md:py-20 text-center"
          style={{ background: "var(--color-ink)" }}
        >
          {/* Decorative stripe texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, #FFFFFF 0px, #FFFFFF 1px, transparent 1px, transparent 13px)",
              opacity: 0.04,
            }}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
            className="relative"
          >
            <div
              className="inline-flex items-center gap-1.5 mb-6 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.08)", color: "#D9D6F5" }}
            >
              Let&apos;s Connect
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
            >
              Let&apos;s talk
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: "#B7B4D9" }}
            >
              I&apos;m looking for senior AI engineering and applied ML roles where I can own
              production systems end-to-end. I respond fastest on LinkedIn.
            </p>

            {/* What I'm looking for */}
            <div className="grid sm:grid-cols-3 gap-3 mb-10 max-w-3xl mx-auto">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl p-4 text-left"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3"
                    style={{ background: "var(--color-accent)", color: "#FFFFFF" }}
                  >
                    {role.icon}
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#FFFFFF" }}>
                    {role.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#A9A6CE" }}>
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact tiles */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-2xl mx-auto">
              {tiles.map((tile) => (
                <a
                  key={tile.label}
                  href={tile.href}
                  target={tile.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={tile.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex flex-col items-center gap-2 rounded-2xl px-5 py-4 text-center transition-all duration-150 flex-1"
                  style={{
                    background: "#FFFFFF",
                    minWidth: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <span style={{ color: "var(--color-accent)" }}>{tile.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                    {tile.label}
                  </span>
                  <span className="text-xs font-mono truncate w-full" style={{ color: "var(--color-muted)" }}>
                    {tile.sub}
                  </span>
                </a>
              ))}
            </div>

            <p className="text-xs mt-8" style={{ color: "#7A77A3" }}>
              Based in Bengaluru, India. Open to remote roles globally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
