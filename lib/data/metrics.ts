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
    id: "M-003",
    value: ">99%",
    label: "Data Processing Speed",
    description: "Revenue metrics computation reduced from ~1 day to 3 minutes via PySpark optimization",
    project: "PySpark Revenue Metrics",
  },
  {
    id: "M-026",
    value: "26+",
    label: "Production ML Systems",
    description: "End-to-end ML systems shipped across 4+ years on a single B2B SaaS platform",
    project: "Full Career",
  },
];
