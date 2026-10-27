interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akash Sharma",
  givenName: "Akash",
  familyName: "Sharma",
  jobTitle: "AI Engineer",
  url: "https://www.akashlabs.dev",
  email: "akashsharmaxxiv@gmail.com",
  image: "https://www.akashlabs.dev/akash.png",
  sameAs: [
    "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    "https://github.com/CosmiX-6/",
  ],
  description:
    "AI Engineer in Bengaluru, India, with 4.5 years building production ML and LLM systems and delivering them to enterprise customers: forecasting, explainability, multi-provider LLM orchestration and AI agents.",
  homeLocation: {
    "@type": "Place",
    name: "Bengaluru, Karnataka, India",
  },
  knowsAbout: [
    "Large Language Models",
    "LLM Orchestration",
    "AI Agents",
    "Generative AI",
    "Forward Deployed Engineering",
    "Time-Series Forecasting",
    "Marketing Mix Modeling",
    "Multi-Touch Attribution",
    "XGBoost",
    "SHAP Explainability",
    "PySpark",
    "BigQuery",
    "Machine Learning Engineering",
    "Propensity Modeling",
    "Causal Inference",
    "STL Decomposition",
    "SARIMAX",
    "Applied ML",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Imarticus Learning" },
    { "@type": "EducationalOrganization", name: "T.Z.A.S.P. Pragati College" },
    { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
  ],
  award: [
    "Star of the Month, RevSure AI (2026)",
    "AQUA SPOT Award, ADA Global (2024)",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Revsure AI",
    url: "https://revsure.ai",
  },
};
