export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
  years: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    icon: "cpu",
    skills: [
      { name: "XGBoost (Regressor + Classifier)", level: "Expert", years: "4+", category: "ML" },
      { name: "scikit-learn Pipelines", level: "Expert", years: "4+", category: "ML" },
      { name: "Custom Transformers", level: "Expert", years: "3+", category: "ML" },
      { name: "Ridge / BayesianRidge", level: "Expert", years: "4+", category: "ML" },
      { name: "SHAP (TreeExplainer)", level: "Expert", years: "3+", category: "ML" },
      { name: "Feature Selection", level: "Expert", years: "4+", category: "ML" },
      { name: "Rare Event Classification", level: "Advanced", years: "3+", category: "ML" },
      { name: "Markov Chain MTA", level: "Advanced", years: "2+", category: "ML" },
      { name: "Hidden Markov Models", level: "Advanced", years: "2+", category: "ML" },
      { name: "L-BFGS-B Optimization", level: "Advanced", years: "2+", category: "ML" },
      { name: "Model Stacking (LGBM/CatBoost)", level: "Intermediate", years: "2+", category: "ML" },
    ],
  },
  {
    name: "Forecasting",
    icon: "trending-up",
    skills: [
      { name: "EOQ Revenue Forecasting", level: "Expert", years: "4+", category: "Forecasting" },
      { name: "Multi-Horizon Forecasting", level: "Expert", years: "4+", category: "Forecasting" },
      { name: "STL Decomposition", level: "Advanced", years: "3+", category: "Forecasting" },
      { name: "SARIMAX", level: "Advanced", years: "2+", category: "Forecasting" },
      { name: "Leakage-Safe Temporal Validation", level: "Expert", years: "3+", category: "Forecasting" },
      { name: "GroupShuffleSplit", level: "Expert", years: "3+", category: "Forecasting" },
      { name: "Heuristic Forecasting", level: "Advanced", years: "4+", category: "Forecasting" },
    ],
  },
  {
    name: "Marketing Science",
    icon: "bar-chart-2",
    skills: [
      { name: "Marketing Mix Modeling", level: "Expert", years: "3+", category: "Marketing Science" },
      { name: "Hill Saturation Curves", level: "Expert", years: "3+", category: "Marketing Science" },
      { name: "Adstock Modeling", level: "Expert", years: "3+", category: "Marketing Science" },
      { name: "Response Curve Generation", level: "Expert", years: "3+", category: "Marketing Science" },
      { name: "Scenario Planning", level: "Expert", years: "3+", category: "Marketing Science" },
      { name: "Multi-Touch Attribution", level: "Expert", years: "4+", category: "Marketing Science" },
      { name: "Incrementality Testing", level: "Advanced", years: "2+", category: "Marketing Science" },
      { name: "Causal Inference / DiD", level: "Advanced", years: "2+", category: "Marketing Science" },
    ],
  },
  {
    name: "Programming & Data",
    icon: "code-2",
    skills: [
      { name: "Python", level: "Expert", years: "5+", category: "Programming" },
      { name: "SQL / BigQuery", level: "Expert", years: "5+", category: "Programming" },
      { name: "PySpark", level: "Advanced", years: "2+", category: "Programming" },
      { name: "pandas / NumPy", level: "Expert", years: "5+", category: "Programming" },
      { name: "statsmodels / SciPy", level: "Advanced", years: "3+", category: "Programming" },
      { name: "joblib (Parallelization)", level: "Expert", years: "3+", category: "Programming" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: "Advanced", years: "4+", category: "Cloud" },
      { name: "BigQuery", level: "Advanced", years: "4+", category: "Cloud" },
      { name: "GCP Dataproc", level: "Advanced", years: "3+", category: "Cloud" },
      { name: "Cloud Storage (GCS)", level: "Advanced", years: "4+", category: "Cloud" },
      { name: "Apache Airflow", level: "Intermediate", years: "1+", category: "Cloud" },
    ],
  },
  {
    name: "Domain Expertise",
    icon: "briefcase",
    skills: [
      { name: "B2B SaaS Revenue Intelligence", level: "Expert", years: "4+", category: "Domain" },
      { name: "GTM Analytics (Full Funnel)", level: "Expert", years: "4+", category: "Domain" },
      { name: "Pipeline & Booking Forecasting", level: "Expert", years: "4+", category: "Domain" },
      { name: "Marketing Attribution", level: "Expert", years: "4+", category: "Domain" },
      { name: "Salesforce Opportunity Semantics", level: "Expert", years: "4+", category: "Domain" },
      { name: "Stakeholder Communication", level: "Expert", years: "4+", category: "Domain" },
    ],
  },
];
