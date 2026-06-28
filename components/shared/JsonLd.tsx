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
  jobTitle: "AI Engineer",
  url: "https://akashlabs.dev",
  sameAs: [
    "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    "https://github.com/CosmiX-6/",
  ],
  description:
    "AI Engineer with 4+ years building production ML systems — forecasting pipelines, attribution models, statistical experimentation, and ML infrastructure at scale.",
  knowsAbout: [
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
    "Statistical Experimentation",
    "STL Decomposition",
    "SARIMAX",
    "Applied ML",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Imarticus Learning" },
    { "@type": "EducationalOrganization", name: "T.Z.A.S.P. Pragati College" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Revsure AI",
  },
};
