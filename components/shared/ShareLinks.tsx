"use client";

import { useState } from "react";
import { Link2, Mail, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/SocialIcons";

interface ShareLinksProps {
  url: string;
  title: string;
}

export function ShareLinks({ url, title }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, link stays selectable in the address bar
    }
  };

  const buttonStyle = {
    background: "var(--color-surface-el)",
    color: "var(--color-body)",
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-150"
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--color-accent)";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-surface-el)";
          e.currentTarget.style.color = "var(--color-body)";
        }}
      >
        <LinkedinIcon size={15} />
      </a>
      <a
        href={mailHref}
        aria-label="Share via email"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-150"
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--color-accent)";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-surface-el)";
          e.currentTarget.style.color = "var(--color-body)";
        }}
      >
        <Mail size={15} />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-150"
        style={buttonStyle}
        onMouseEnter={(e) => {
          if (copied) return;
          e.currentTarget.style.background = "var(--color-accent)";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-surface-el)";
          e.currentTarget.style.color = "var(--color-body)";
        }}
      >
        {copied ? <Check size={15} style={{ color: "var(--color-metric)" }} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}
