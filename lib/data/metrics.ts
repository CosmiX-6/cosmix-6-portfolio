export interface ConfirmedMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  project: string;
}

export const confirmedMetrics: ConfirmedMetric[] = [
  {
    id: "M-001",
    value: "~52%",
    label: "MAPE Reduction",
    description: "Booking model error reduced through forecast category feature engineering",
    project: "Revenue Forecasting Platform",
  },
  {
    id: "M-002",
    value: "~80%",
    label: "Compute Time Reduction",
    description: "Modeling pipeline time reduced from 5–6 hours to 1 hour via parallelization",
    project: "Platform Optimization",
  },
  {
    id: "M-025",
    value: "25",
    label: "Production ML Systems",
    description: "End-to-end ML systems shipped across 4+ years on a single B2B SaaS platform",
    project: "Full Career",
  },
  {
    id: "M-021",
    value: "~15%",
    label: "Pipeline Increase",
    description: "Pipeline grew while cutting channel spend ~50% via marketing mix response curve analysis",
    project: "Marketing Mix Modeling Platform",
  },
];
