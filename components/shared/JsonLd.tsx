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
  jobTitle: "Revenue AI Engineer",
  url: "https://akashsharma.dev",
  sameAs: [
    "https://www.linkedin.com/in/akash-sharma-01775b14a/",
    "https://github.com/CosmiX-6/",
  ],
  description:
    "Data Scientist and AI Engineer with 4+ years building production-grade ML systems for B2B SaaS GTM revenue teams. Expert in revenue forecasting, marketing mix modeling, propensity scoring, and multi-touch attribution.",
  knowsAbout: [
    "Revenue Forecasting",
    "Marketing Mix Modeling",
    "Pipeline Forecasting",
    "Multi-Touch Attribution",
    "XGBoost",
    "SHAP Explainability",
    "PySpark",
    "BigQuery",
    "B2B SaaS Analytics",
    "GTM Intelligence",
    "Machine Learning Engineering",
    "Propensity Modeling",
    "Causal Inference",
    "STL Decomposition",
    "SARIMAX",
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
