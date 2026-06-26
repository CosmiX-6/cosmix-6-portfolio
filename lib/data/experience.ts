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
      "Continued ownership and evolution of the same B2B SaaS Revenue Intelligence Platform — enhancing the forecasting, attribution, and marketing mix modeling systems built during the prior engagement.",
    highlights: [
      "Reduced booking model MAPE by ~52% through forecast category feature engineering",
      "Deployed time-decay and average-index forecast adjustment layers to production",
      "Built dual-algorithm explainability infrastructure (SHAP + coefficient contribution) with BigQuery logging",
      "Improved configurable multi-model ML framework to support 30+ parameters",
      "Fixed critical MMX production bugs: MinMax extrapolation, scenario cascade drift, STL edge cases",
      "Authored comprehensive methodology documentation and customer-facing guidance",
    ],
  },
  {
    company: "ADA Asia",
    role: "Data Scientist",
    period: "Apr 2022 – Dec 2024",
    duration: "~2 years 9 months",
    type: "past",
    context:
      "Built and maintained the ML layer of a B2B SaaS Revenue Intelligence Platform from early prototype through full production — across 25+ models spanning forecasting, attribution, propensity, and data engineering.",
    highlights: [
      "Built the Revenue Forecasting Platform from QTD heuristic through production XGBoost-based EOQ system",
      "Engineered the Marketing Mix Modeling Platform from research through production",
      "Designed and owned the Pipeline Projection Engine integrating 8+ ML model families",
      "Built Markov Chain + HMM Multi-Touch Attribution system",
      "Implemented five-method Statistical Incrementality & Lift Analysis platform",
      "Reduced data computation from ~1 day to 3 minutes via PySpark optimization",
      "Reduced modeling pipeline from 5–6 hours to 1 hour via joblib parallelization",
      "Delivered Automated Mailer Report from build to production in a weekend",
      "Provided guidance and mentorship to interns across the team",
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
