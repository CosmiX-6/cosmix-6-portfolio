export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  type: "current" | "past";
  context: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Revsure AI",
    role: "AI Engineer",
    period: "Dec 2024 – Present",
    duration: "1.5+ years",
    type: "current",
    context:
      "Continued ownership and evolution of the same B2B SaaS Revenue Intelligence Platform, enhancing the forecasting, attribution, and marketing mix modeling systems built during the prior engagement.",
    highlights: [
      "Develop and maintain production forecasting systems for booking and revenue prediction, using forecast-category feature engineering to achieve 5–15% MAPE and daily end-of-quarter forecast accuracy of ~85–99%, validated against actual quarter-end outcomes",
      "Designed two production forecast adjustment layers—time-decay and average-index—to refine and improve the combined macro forecast system",
      "Productionized model explainability across XGBoost and Ridge forecasts using SHAP and coefficient attribution, logging feature contributions to BigQuery and surfacing them in customer-facing dashboards",
      "Built a configurable ML regression framework covering feature engineering, algorithm selection (XGBoost, LightGBM, CatBoost, Ridge), RandomizedSearchCV, quarter-aware validation, and production scoring and writeback. Exposed 30+ runtime parameters to support customer-specific configurations without code changes",
      "Developed a production model metrics dashboard tracking MAPE, wMAPE, MAE, RMSE, and classification metrics for performance monitoring, degradation detection, and retraining validation",
    ],
  },
  {
    company: "ADA Asia",
    role: "Data Scientist",
    period: "Apr 2022 – Dec 2024",
    duration: "~2 years 9 months",
    type: "past",
    context:
      "Built and maintained the ML layer of a B2B SaaS Revenue Intelligence Platform from early prototype through full production: 25+ models spanning forecasting, attribution, propensity, and data engineering.",
    highlights: [
      "Architected and productionized a Sales Pipeline Forecasting system serving 15+ enterprise customers, combining 8+ ML model families to generate bottom-up, daily multi-quarter revenue projections across millions of records",
      "Engineered a Marketing Mix Modeling platform from research to production, incorporating Bayesian regression, Hill saturation curves, adstock decay, seasonal decomposition, and scenario planning. Supported configurable channel-level modeling across 60+ channels, including 10+ paid channels, with 5–15% MAPE",
      "Owned the Revenue Forecasting Platform end-to-end, evolving a quarter-to-date heuristic into a production XGBoost forecasting system with leakage-safe cross-validation and daily scoring across current and future quarter horizons",
      "Built a four-model propensity scoring suite covering accounts, leads, opportunities, and demand generation, generating multi-horizon conversion likelihoods with SHAP-based explanations and statistical fallbacks for low-data customers",
      "Optimized revenue-metric processing using distributed PySpark on GCP Dataproc, reducing pipeline runtime from approximately one day to three minutes; parallelized model training from 5–6 hours to approximately one hour across 30+ customer tenants",
    ],
  },
];

export interface Education {
  institution: string;
  credential: string;
  period: string;
  location: string;
  skills: string[];
}

export const education: Education[] = [
  {
    institution: "Imarticus Learning",
    credential: "Post Graduate Program in Data Analytics",
    period: "Jan 2022",
    location: "Thane, India",
    skills: [
      "Data Analytics", "Statistical Analysis", "Machine Learning",
      "Python", "SQL", "Feature Engineering", "Business Analytics",
    ],
  },
  {
    institution: "T.Z.A.S.P. Pragati College",
    credential: "Bachelor of Information Technology",
    period: "Nov 2020",
    location: "Dombivli, India",
    skills: [
      "Programming", "Data Structures", "Algorithms",
      "Database Management", "Software Engineering", "System Design",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  active: boolean;
}

export const certifications: Certification[] = [
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM × Coursera",
    date: "Oct 2021",
    active: true,
  },
  {
    name: "Applied Data Science Capstone",
    issuer: "IBM × Coursera",
    date: "Oct 2021",
    active: true,
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM × Coursera",
    date: "Sep 2021",
    active: true,
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM × Coursera",
    date: "Jun 2021",
    active: true,
  },
  {
    name: "Data Visualization with Python",
    issuer: "IBM × Coursera",
    date: "Sep 2021",
    active: true,
  },
  {
    name: "Databases and SQL for Data Science",
    issuer: "IBM × Coursera",
    date: "Apr 2021",
    active: true,
  },
];
