export interface Highlight {
  id: string;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    id: "H-01",
    title: "25+ Production ML Systems",
    description:
      "Built and evolved end-to-end across forecasting, attribution, propensity, and revenue intelligence.",
  },
  {
    id: "H-02",
    title: "8+ ML Families, One Revenue Engine",
    description: "Unified into daily multi-horizon pipeline and booking projections.",
  },
  {
    id: "H-03",
    title: "Production-Scale Engineering",
    description:
      "1000+ feature pipelines, distributed processing, configurable ML infrastructure, and production explainability.",
  },
  {
    id: "H-04",
    title: "Prototype → Production → Platform",
    description:
      "Four+ years evolving a B2B SaaS Revenue Intelligence platform from early models to production AI infrastructure.",
  },
];

export const supportingProof = {
  value: "~52%",
  label: "reduction in booking model MAPE",
  detail: "through forecast-category feature engineering, shipped to production at Revsure AI.",
};
