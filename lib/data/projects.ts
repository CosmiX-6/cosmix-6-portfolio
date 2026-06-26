export type Domain =
  | "Revenue Forecasting"
  | "Pipeline Intelligence"
  | "Marketing Science"
  | "Propensity & Scoring"
  | "Data Engineering"
  | "Platform & Infrastructure";

export type Employment = "ada-asia" | "revsure-ai" | "both";

export interface MetricHighlight {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  domain: Domain;
  tier: 1 | 2 | 3;
  employment: Employment;
  period: string;
  status: "Production" | "Resolved" | "Maintained";
  featured: boolean;
  tagline: string;
  role: string;
  problem: string;
  what: string;
  impact: string;
  metrics: MetricHighlight[];
  techStack: string[];
  tags: string[];
}

export const projects: Project[] = [
  // ── FEATURED ──────────────────────────────────────────────
  {
    id: "P01",
    slug: "revenue-forecasting-platform",
    title: "Revenue Forecasting Platform",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "both",
    period: "Apr 2022 – Present",
    status: "Production",
    featured: true,
    role: "Primary Owner",
    tagline:
      "Production ML system predicting pipeline and booking outcomes at daily frequency across current and future quarters.",
    problem:
      "Revenue teams at B2B SaaS companies needed reliable end-of-quarter pipeline and booking forecasts—starting from day one of the quarter—to drive planning, capacity allocation, and executive reporting. Simple heuristics couldn't capture seasonality, pacing dynamics, or macroeconomic context.",
    what:
      "Built and evolved the core end-of-quarter (EOQ) forecasting system, growing it from a QTD-based heuristic into a multi-layer ML platform. The system produces daily forecasts across four quarter horizons using XGBoost with leakage-safe GroupShuffleSplit validation. Enhancements over 4 years include: time-decay and average-index adjustment layers, SHAP explainability with dual-algorithm contribution logging, and a configurable multi-model framework supporting 30+ parameters for algorithm selection, feature groups, and ensemble composition.",
    impact:
      "Reduced booking model MAPE by ~52% through forecast category feature engineering. System delivers daily pipeline and booking forecasts used by enterprise revenue teams for EOQ planning and boardroom reporting.",
    metrics: [
      { value: "~52%", label: "MAPE Reduction" },
      { value: "4+", label: "Quarter Horizons" },
      { value: "Daily", label: "Scoring Frequency" },
    ],
    techStack: [
      "Python", "XGBoost", "Ridge Regression", "SARIMAX", "STL Decomposition",
      "scikit-learn", "SHAP", "BigQuery", "GCP", "Parquet",
    ],
    tags: [
      "EOQ Forecasting", "Time-Series", "Leakage Prevention",
      "SHAP Explainability", "Multi-Horizon", "Revenue Intelligence",
    ],
  },
  {
    id: "P02",
    slug: "marketing-mix-modeling-platform",
    title: "Marketing Mix Modeling Platform",
    domain: "Marketing Science",
    tier: 1,
    employment: "both",
    period: "2022 – Present",
    status: "Production",
    featured: true,
    role: "Primary Owner",
    tagline:
      "Full-stack marketing attribution and budget optimization platform—from raw channel spend to response curves and scenario planning.",
    problem:
      "Marketing teams had spend across multiple channels but no systematic way to measure each channel's contribution to pipeline generation or optimize budget allocation. Rule-based attribution couldn't capture saturation effects, adstock carryover, or the non-linear relationship between spend and return.",
    what:
      "Engineered a marketing mix modeling platform using BayesianRidge regression on STL-decomposed residuals. Built a parallelized Hill Curve Transformer (L-BFGS-B multi-start optimization) for saturation modeling at 1000+ feature scale, adstock decay features, PCA-based group-level attribution, and response curve generation (isotonic + spline/hill variants). Implemented scenario planning via response-curve delta algorithm with business-rule guardrails to prevent cascade drift. Fixed critical production bugs: MinMax extrapolation bug, scenario planner 6.8% cascade drift, STL phantom baseline edge cases.",
    impact:
      "Quantified channel-level marketing contribution and enabled spend optimization recommendations for enterprise B2B SaaS customers. Analysis guided reallocation decisions—e.g., identifying that reducing spend on one underperforming channel while maintaining pipeline output was viable.",
    metrics: [
      { value: "1000+", label: "Feature Scale" },
      { value: "0%", label: "Cascade Drift (fixed)" },
      { value: "14+", label: "Edge Cases Resolved" },
    ],
    techStack: [
      "Python", "BayesianRidge", "scikit-learn", "STL", "L-BFGS-B",
      "SciPy", "PCA", "BigQuery", "GCP",
    ],
    tags: [
      "Marketing Mix Modeling", "Adstock", "Hill Saturation", "Response Curves",
      "Scenario Planning", "Attribution", "Budget Optimization",
    ],
  },
  {
    id: "P18",
    slug: "multi-touch-attribution",
    title: "Multi-Touch Attribution System",
    domain: "Marketing Science",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: true,
    role: "Primary Owner",
    tagline:
      "Probabilistic multi-touch attribution using Markov Chain removal-effect modeling — crediting each channel based on its actual influence on conversion probability across the full customer journey.",
    problem:
      "Marketing teams were using first-touch and last-touch attribution — both systematically over-crediting one touchpoint and ignoring the influence of others. They needed statistically-grounded attribution to justify channel investment and understand which audience-campaign combinations drove conversion at each funnel stage.",
    what:
      "Built a Markov Chain MTA system — customer journeys modeled as Markov states, transition matrix built from historical paths, attribution computed via removal effect (drop in conversion probability when a channel is removed). Enriched with firmographic attributes (region, industry, company size, persona) and campaign-level metadata (channel type, content format, offer type, message theme), enabling attribution of not just which channels work but why specific audience × campaign combinations are effective at each funnel stage.",
    impact:
      "Replaced rule-based first/last-touch attribution with daily probabilistic multi-touch attribution. Enabled stage-by-stage conversion credit by channel, audience segment, and campaign type — giving marketing teams evidence-backed answers to budget allocation questions.",
    metrics: [
      { value: "Daily", label: "Attribution Scoring" },
      { value: "2-Tier", label: "Model Architecture" },
      { value: "6", label: "Funnel Stages Covered" },
    ],
    techStack: [
      "Python", "Markov Chain", "scikit-learn", "BigQuery",
    ],
    tags: [
      "Multi-Touch Attribution", "Markov Chain", "Marketing Attribution",
      "Firmographic Enrichment", "Funnel Analytics",
    ],
  },

  // ── PIPELINE INTELLIGENCE ──────────────────────────────
  {
    id: "P08",
    slug: "pipeline-projection-engine",
    title: "Full Pipeline Projection Engine",
    domain: "Pipeline Intelligence",
    tier: 1,
    employment: "ada-asia",
    period: "Apr 2022 – Dec 2024",
    status: "Production",
    featured: true,
    role: "Primary Owner",
    tagline:
      "Central projection system integrating 8+ ML model families into a single daily revenue forecast across four quarter horizons.",
    problem:
      "Revenue teams needed reliable daily pipeline and booking forecasts from day one of the quarter, but no single model could capture all dynamics: known pipeline readiness, close-date slippage, unseen opportunity creation, macroeconomic context, and historical seasonality.",
    what:
      "Designed a two-layer projection architecture: (1) Bottom-up layer scoring every lead and opportunity daily with propensity models, multiplying scores by predicted opportunity sizes, aggregating by target quarter. (2) Top-down macro scaling layer from the Macro Forecast Model — scale factor reconciles record-level aggregates with EOQ expectations. Added Demand Generation Potential for unseen pipeline, push/pull models for close-date transitions, monthly breakdown normalization, and both ML and heuristic modes for low-data customers.",
    impact:
      "Enabled daily CQ/NQ/NQ+1/NQ+2 pipeline and booking projections for enterprise B2B SaaS revenue teams, integrated into customer-facing dashboard widgets.",
    metrics: [
      { value: "8+", label: "ML Model Families" },
      { value: "4", label: "Quarter Horizons" },
      { value: "Daily", label: "Scoring Frequency" },
    ],
    techStack: [
      "Python", "XGBoost", "scikit-learn", "BigQuery", "GCP Dataproc", "Parquet",
    ],
    tags: [
      "Pipeline Projection", "Micro-Macro Reconciliation", "Revenue Forecasting",
      "Demand Generation", "Multi-Horizon", "B2B SaaS",
    ],
  },
  {
    id: "P13",
    slug: "demand-generation-potential-model",
    title: "Demand Generation Potential Model",
    domain: "Pipeline Intelligence",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Estimates pipeline contribution from opportunities not yet visible in the CRM — the 'unseen' quarter contribution.",
    problem:
      "Record-level propensity models can only score opportunities already in the system. Historically, 20–61% of quarter-end bookings came from deals created and closed within the same quarter — not captured by existing scoring.",
    what:
      "Built two modes: (1) Heuristic — rolling average of historical same-quarter origination rates per day applied to current day forward. (2) ML — XGBoost Regressor trained on calendar features, cumulative quarter actuals, marketing spend, and macroeconomic controls to predict remaining unseen contribution.",
    impact:
      "Prevented systematic under-projection of EOQ totals by accounting for 20–61% of quarter-end pipeline that originates from same-quarter deal creation.",
    metrics: [
      { value: "20–61%", label: "Historical Contribution Range" },
      { value: "~40%", label: "Average Contribution" },
    ],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Demand Generation", "Pipeline Forecasting", "Heuristic Fallback", "Revenue Intelligence"],
  },
  {
    id: "P23",
    slug: "walk-in-pipeline-projection",
    title: "Walk-In Pipeline Projection",
    domain: "Pipeline Intelligence",
    tier: 2,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Regression-based estimate of within-quarter pipeline creation from sources not visible at quarter start.",
    problem:
      "Complementing the Demand Generation model, teams needed a simpler regression-based estimate for walk-in pipeline from sources that don't follow the standard demand generation pattern.",
    what:
      "First model built using the Generic Regressor Framework (P22). Predicts walk-in pipeline — created within the quarter from new sources — as a regression target using the standardized feature pipeline and validation framework.",
    impact: "Added granularity to within-quarter pipeline creation estimates, complementing the Demand Generation model.",
    metrics: [],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Pipeline Forecasting", "Regression", "Revenue Intelligence"],
  },

  // ── PROPENSITY & SCORING ────────────────────────────────
  {
    id: "P09",
    slug: "account-propensity-model",
    title: "Account Propensity Model",
    domain: "Propensity & Scoring",
    tier: 1,
    employment: "ada-asia",
    period: "Apr 2022 – Dec 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Dual propensity scoring system assigning Base Fit (long-term ICP fit) and 3-Month (short-term conversion likelihood) scores to every account.",
    problem:
      "Sales and marketing teams worked with large account lists without systematic prioritization, dispersing effort across accounts with low conversion probability.",
    what:
      "Built two components: (1) Base Fit Propensity — XGBoost Classifier on firmographic features (industry, company size, region, existing customer flag) for long-term ICP fit. (2) 3-Month Propensity — XGBoost Classifier with engagement, funnel stage, activity, journey, and temporal features for short-term conversion likelihood. Feature selection via Feature Importance, Chi-squared test, ANOVA F-test. Heuristic fallback using historical conversion rates for low-data customers.",
    impact:
      "Enabled High/Medium/Low/Deprioritize bucket assignment for systematic, daily account prioritization across enterprise B2B SaaS customers.",
    metrics: [
      { value: "Daily", label: "Scoring Frequency" },
      { value: "4 Tiers", label: "Priority Buckets" },
    ],
    techStack: ["Python", "XGBoost", "scikit-learn", "Chi-squared", "ANOVA F-test", "BigQuery"],
    tags: ["Propensity Modeling", "Account Prioritization", "ICP Scoring", "Rare Event Classification"],
  },
  {
    id: "P10",
    slug: "lead-propensity-model",
    title: "Lead Propensity Model",
    domain: "Propensity & Scoring",
    tier: 1,
    employment: "ada-asia",
    period: "Apr 2022 – Dec 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Scores each lead's conversion likelihood across four quarter horizons (CQ/NQ/NQ+1/NQ+2) using engagement patterns and journey sequences.",
    problem:
      "Sales teams had large lead lists with no per-lead conversion likelihood ranking. Pipeline projections at the lead level used flat segment-level rates rather than individual characteristics.",
    what:
      "XGBoost Classifier trained on lead attributes, activity/engagement patterns, journey sequences, funnel stage timestamps, and derived velocity metrics. Multi-quarter scoring: separate probability per quarter horizon. Feature selection via Feature Importance + Chi-squared + ANOVA F-test. Heuristic fallback for low-data customers using segment conversion rates.",
    impact:
      "Replaced flat conversion rates with ML-scored per-lead conversion likelihoods, feeding the Pipeline Projection Engine with more accurate record-level contributions.",
    metrics: [
      { value: "4", label: "Quarter Horizons Scored" },
      { value: "Daily", label: "Scoring Frequency" },
    ],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Lead Scoring", "Propensity Modeling", "Funnel Analytics", "Multi-Horizon"],
  },
  {
    id: "P11",
    slug: "opportunity-propensity-model",
    title: "Opportunity Propensity Model",
    domain: "Propensity & Scoring",
    tier: 1,
    employment: "ada-asia",
    period: "Apr 2022 – Dec 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Predicts each opportunity's close likelihood per quarter, replacing static CRM probability fields with dynamically scored multi-quarter estimates.",
    problem:
      "CRM probability fields are manually set and rarely updated — they don't reflect actual close likelihood. Pipeline projections using these fields were systematically miscalibrated.",
    what:
      "XGBoost Classifier trained on opportunity type, forecast category, stage timestamps, journey sequences, and close-date-relative temporal features. Scored daily across four quarter horizons. Feature selection via Feature Importance, Chi-squared, ANOVA F-test.",
    impact:
      "Improved pipeline readiness projections by replacing static CRM probability fields with daily ML-scored multi-quarter conversion likelihoods.",
    metrics: [
      { value: "4", label: "Quarter Horizons" },
      { value: "Daily", label: "Scoring Frequency" },
    ],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Opportunity Scoring", "Propensity Modeling", "Pipeline Intelligence", "CRM Analytics"],
  },
  {
    id: "P24",
    slug: "account-propensity-x-month",
    title: "Account Propensity X Month",
    domain: "Propensity & Scoring",
    tier: 2,
    employment: "ada-asia",
    period: "2023 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Monthly-granularity refactor of the Account Propensity model, enabling month-level account prioritization alongside quarterly scores.",
    problem:
      "Quarterly propensity scoring didn't align with monthly pipeline planning cycles used by sales and marketing operations teams.",
    what:
      "Refactored Account Propensity Model (P09) to score conversion likelihood at monthly granularity, producing month-level priority buckets that complement the quarterly 3-month propensity scores.",
    impact:
      "Enabled monthly-resolution account prioritization, bridging quarterly ML scoring with monthly operational planning cycles.",
    metrics: [],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Propensity Modeling", "Account Scoring", "Monthly Granularity"],
  },

  // ── REVENUE FORECASTING LAYERS ──────────────────────────
  {
    id: "P01B",
    slug: "time-decay-forecast-adjustment",
    title: "Time-Decay Forecast Adjustment",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "revsure-ai",
    period: "Dec 2024 – Present",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Dynamic adjustment layer that re-weights prior EOQ history by recency, capturing momentum and velocity signals closer to quarter end.",
    problem:
      "Static average-based priors weighted all historical quarters equally, ignoring recent pipeline momentum or slowdown signals that are most predictive close to quarter end.",
    what:
      "Built a time-decay adjustment layer that exponentially down-weights older EOQ observations, emphasizing recent quarters. Incorporates momentum, velocity, and capacity features. Deployed as a production adjustment layer on top of the base XGBoost forecast.",
    impact:
      "Improved late-quarter forecast accuracy by capturing recency signals, deployed to production as part of the Revenue Forecasting Platform.",
    metrics: [{ value: "Production", label: "Deployed" }],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Time-Decay", "Bayesian Updating", "Revenue Forecasting", "Momentum Features"],
  },
  {
    id: "P01C",
    slug: "average-index-forecast-adjustment",
    title: "Average-Index Forecast Adjustment",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "revsure-ai",
    period: "Dec 2024 – Present",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Statistical fallback layer using day-of-quarter index averages when ML model signals are insufficient.",
    problem:
      "Early in a quarter, ML models have limited QTD data to learn from. A statistically sound fallback was needed for low-data-quality early-quarter scenarios.",
    what:
      "Built an average-index adjustment layer computing day-of-quarter historical indices (average pipeline completion percentage per day across prior quarters). Applied as a weighted fallback or blend with the ML forecast. Validated against real production data.",
    impact:
      "Improved early-quarter forecast stability and provided a robust statistical anchor validated against production pipeline data.",
    metrics: [],
    techStack: ["Python", "scikit-learn", "BigQuery"],
    tags: ["Statistical Forecasting", "Average Index", "Early-Quarter Stability", "Revenue Forecasting"],
  },
  {
    id: "P01F",
    slug: "forecast-explainability-shap",
    title: "Forecast Explainability & SHAP Logging",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "revsure-ai",
    period: "Dec 2024 – Present",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Dual-algorithm explainability infrastructure — SHAP for tree models, coefficient contribution for linear models — with BigQuery logging.",
    problem:
      "Revenue leaders and customers couldn't understand why the forecast changed week-over-week. Black-box outputs eroded trust in the model.",
    what:
      "Implemented dual-algorithm explainability: (1) SHAP TreeExplainer for XGBoost models with base value decomposition and Shapley value packaging. (2) Coefficient-based contribution for Ridge/linear models. Both produce human-readable feature display name mappings and marketing-vs-baseline contribution aggregations. All explanations logged to BigQuery for historical tracking and customer-facing dashboard widgets.",
    impact:
      "Made forecast outputs interpretable to non-technical revenue leaders, improving stakeholder trust and enabling data-driven forecast discussions.",
    metrics: [{ value: "Dual-Algorithm", label: "Explainability Coverage" }],
    techStack: ["Python", "SHAP", "TreeExplainer", "XGBoost", "Ridge", "BigQuery"],
    tags: ["SHAP", "Model Explainability", "Shapley Values", "Coefficient Contribution", "Revenue Forecasting"],
  },
  {
    id: "P01G",
    slug: "configurable-multi-model-framework",
    title: "Configurable Multi-Model ML Framework",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "revsure-ai",
    period: "Dec 2024 – Present",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "30+ parameter framework for runtime algorithm selection, feature group configuration, and model stacking across the forecasting platform.",
    problem:
      "Each customer had different data volumes, feature availability, and modeling requirements. A hard-coded single-algorithm approach couldn't serve diverse enterprise customer configurations.",
    what:
      "Built a configurable framework with 30+ parameters controlling algorithm selection (XGBoost, Ridge, LightGBM, CatBoost), feature group inclusion/exclusion, ensemble composition, validation split strategy, and scoring behavior. Runtime config parsed from JSON/base64-encoded arguments, enabling per-customer model configuration without code changes.",
    impact:
      "Eliminated code duplication across customer configurations, enabled A/B testing of model variants, and supported diverse enterprise customer needs from a single codebase.",
    metrics: [
      { value: "30+", label: "Config Parameters" },
      { value: "4", label: "Algorithm Options" },
    ],
    techStack: ["Python", "XGBoost", "LightGBM", "CatBoost", "scikit-learn", "Click", "JSON"],
    tags: ["ML Framework", "Model Stacking", "Configuration-Driven", "Ensemble Methods"],
  },

  // ── MARKETING SCIENCE ──────────────────────────────────
  {
    id: "P19",
    slug: "campaign-performance-prediction",
    title: "Campaign Performance Prediction Engine",
    domain: "Marketing Science",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Two-stage system predicting campaign pipeline potential before launch and monitoring active campaigns daily.",
    problem:
      "Marketing teams were reactive — they only knew a campaign underperformed after it ended. They needed forward-looking predictions to decide which campaigns to scale, which to cut, and how to reallocate budget.",
    what:
      "Two-stage architecture: (1) XGBoost Classifier predicting high vs. low potential campaigns (pipeline threshold classification). (2) XGBoost Regressor estimating expected pipeline value/volume for predicted high-potential campaigns. Features include campaign attributes, budget, type, date-derived features, pipeline context at campaign start, active campaign counts, and historical averages for similar campaigns.",
    impact:
      "Enabled proactive campaign management — predicting success before launch and flagging underperformers for budget reallocation, shifting marketing teams from post-campaign hindsight to forward-looking intelligence.",
    metrics: [
      { value: "Daily", label: "Campaign Scoring" },
      { value: "2-Stage", label: "Architecture" },
    ],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Campaign Prediction", "Marketing Intelligence", "Budget Optimization", "Marketing Science"],
  },

  // ── DATA ENGINEERING ────────────────────────────────────
  {
    id: "P05",
    slug: "pyspark-revenue-metrics-pipeline",
    title: "Revenue Metrics Pipeline Migration",
    domain: "Data Engineering",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Migrated the revenue metrics pipeline from single-machine pandas to distributed PySpark, resolving critical implementation bugs to unblock daily ML scoring.",
    problem:
      "The revenue metrics pipeline was built on single-machine pandas processing large CRM datasets — inherently unsuitable for daily production scale. A partial PySpark migration existed but had critical bugs causing incorrect metric outputs that blocked downstream ML scoring pipelines.",
    what:
      "Rewrote the pipeline in PySpark using broadcast joins, window function aggregations, and filter pushdown to leverage distributed execution on GCP Dataproc. Diagnosed and resolved the existing PySpark implementation bugs — including incorrect cohort boundary logic and partition misalignment — that were producing silent metric errors in production.",
    impact:
      "Delivered a correct, production-stable distributed pipeline that unblocked daily ML scoring and dashboard refresh. Replaced a fundamentally unscalable single-machine approach with distributed execution suited to the data volume.",
    metrics: [
      { value: "Distributed", label: "Execution Model" },
      { value: "GCP Dataproc", label: "Infrastructure" },
    ],
    techStack: ["PySpark", "Spark SQL", "GCP Dataproc", "BigQuery", "Parquet"],
    tags: ["PySpark", "Distributed Computing", "Pipeline Migration", "Data Engineering"],
  },
  {
    id: "P03",
    slug: "campaign-entity-resolution",
    title: "Campaign Entity Resolution",
    domain: "Data Engineering",
    tier: 1,
    employment: "both",
    period: "2022 – Present",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Fuzzy matching + BERT embedding system to deduplicate and resolve campaign entities across CRM and marketing platform data sources.",
    problem:
      "Campaign names across CRM and marketing platforms had inconsistent naming conventions, abbreviations, and typos — preventing accurate join between ad spend data and pipeline impact data.",
    what:
      "Built entity resolution pipeline using Splink for probabilistic record linkage, enhanced with BERT sentence embeddings for semantic matching of campaign names. Resolves campaign variants across systems into canonical entities for accurate attribution and MMX modeling.",
    impact:
      "Enabled clean campaign-to-pipeline joins for attribution and marketing mix modeling by resolving entity mismatch across data sources.",
    metrics: [],
    techStack: ["Python", "Splink", "BERT Embeddings", "BigQuery", "Parquet"],
    tags: ["Entity Resolution", "Fuzzy Matching", "NLP", "Data Engineering", "Campaign Attribution"],
  },
  {
    id: "P04",
    slug: "smart-filter-parser",
    title: "Smart Filter Parser & SQL Generation",
    domain: "Data Engineering",
    tier: 2,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Metadata-driven SQL generation system translating user-defined filter configurations into executable BigQuery queries.",
    problem:
      "Customer dashboard filters needed to dynamically generate different SQL queries based on user configuration — building this with hard-coded SQL per filter was unmaintainable.",
    what:
      "Built a metadata-driven parser that reads filter configuration (field, operator, value, data type) and generates valid BigQuery SQL. Supports complex filter combinations, nested conditions, and data type–aware comparisons.",
    impact:
      "Enabled dynamic, user-configurable dashboard filtering without code changes, supporting diverse enterprise customer analytics requirements.",
    metrics: [],
    techStack: ["Python", "SQL", "BigQuery", "JSON"],
    tags: ["SQL Generation", "Metadata-Driven", "Analytics Engineering", "BigQuery"],
  },

  // ── PLATFORM & INFRASTRUCTURE ──────────────────────────
  {
    id: "P22",
    slug: "generic-regressor-framework",
    title: "Generic Regressor Framework",
    domain: "Platform & Infrastructure",
    tier: 2,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Reusable ML regression framework standardizing feature engineering, training, validation, and scoring — adopted as the baseline for all subsequent platform models.",
    problem:
      "Each new regression model required rebuilding the same boilerplate: feature pipeline, hyperparameter tuning, validation splits, scoring logic, and BigQuery writeback. This created code duplication and inconsistent engineering standards.",
    what:
      "Built a configurable regression framework covering: feature group selection, outlier treatment, scaling, transformations; algorithm selection (XGBoost Regressor, Ridge); RandomizedSearchCV tuning; quarter-aware GroupShuffleSplit validation; MAPE/wMAPE/MAE/RMSE metrics; production scoring pipeline loading pickled models; BigQuery and Parquet writeback.",
    impact:
      "Reduced new model development time by standardizing the full ML lifecycle. Adopted as the baseline framework for all subsequent regression models on the platform.",
    metrics: [
      { value: "Platform-Wide", label: "Adoption" },
    ],
    techStack: ["Python", "XGBoost", "Ridge", "scikit-learn", "GroupShuffleSplit", "BigQuery", "joblib"],
    tags: ["ML Infrastructure", "Framework Design", "Reusable Components", "Standardization"],
  },
  {
    id: "P26",
    slug: "model-metric-dashboard",
    title: "Model Metric Dashboard",
    domain: "Platform & Infrastructure",
    tier: 3,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Internal ML governance dashboard tracking train/test MAPE, MAE, RMSE, and classification metrics across all deployed platform models.",
    problem:
      "With 20+ models in production, there was no systematic way to detect model degradation, validate retraining, or monitor performance drift over time.",
    what:
      "Built an internal dashboard tracking MAPE, wMAPE, MAE, RMSE, F1, PR-AUC, and classification metrics per model per scoring run. Provides longitudinal view of model health across the full platform.",
    impact:
      "Enabled early detection of model degradation and provided evidence for retraining decisions across 20+ production ML models.",
    metrics: [{ value: "20+", label: "Models Monitored" }],
    techStack: ["Python", "BigQuery", "Dashboard"],
    tags: ["ML Governance", "Model Monitoring", "Metrics Tracking", "MLOps"],
  },

  // ── REMAINING MODELS ────────────────────────────────────
  {
    id: "P14",
    slug: "product-prediction-model",
    title: "Product Prediction Model",
    domain: "Propensity & Scoring",
    tier: 2,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Predicts which products are likely associated with a lead conversion, improving downstream opportunity size estimation.",
    problem:
      "Many leads and early-stage opportunities lacked product association data, causing opportunity size estimates to rely on aggregate averages instead of product-level deal size variations.",
    what:
      "Multi-label XGBoost Classifier predicting product family association for leads and accounts using account size, industry, region, segment, and historical opportunity product data. Feeds downstream Opportunity Size Prediction (P15).",
    impact:
      "Improved opportunity size predictions by incorporating product-level deal size patterns for leads without explicit product data.",
    metrics: [],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Product Prediction", "Multi-Label Classification", "Revenue Intelligence"],
  },
  {
    id: "P15",
    slug: "opportunity-size-prediction",
    title: "Opportunity Size Prediction",
    domain: "Propensity & Scoring",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Predicts booking dollar value for leads and early-stage opportunities, enabling per-record expected value computation.",
    problem:
      "Many opportunities have missing or unreliable CRM amounts. Without predicted sizes, pipeline projection expected value calculations were inaccurate for early-stage records.",
    what:
      "XGBoost Regressor trained on account attributes, historical booking patterns, and product prediction inputs (from P14). Heuristic segment-average fallback for low-data scenarios. Feature selection via Information Value.",
    impact:
      "Enabled reliable per-record expected value computation (propensity × size) in the Pipeline Projection Engine for all leads and opportunities, including those with missing amounts.",
    metrics: [],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Deal Size Prediction", "Revenue Estimation", "Pipeline Intelligence"],
  },
  {
    id: "P16",
    slug: "customer-segmentation-clustering",
    title: "Customer Segmentation Clustering",
    domain: "Propensity & Scoring",
    tier: 3,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Unsupervised clustering model grouping accounts by firmographic and behavioral attributes for GTM targeting.",
    problem:
      "Marketing and sales teams needed customer segments for targeted outreach and conversion rate analysis, without manually defining segment rules.",
    what:
      "Clustering model grouping accounts and leads by firmographic attributes (industry, company size, region) and behavioral signals (engagement patterns, funnel stage activity). Segments used for GTM targeting and conversion rate analysis by cohort.",
    impact:
      "Identified natural account groupings enabling targeted marketing campaigns and segment-level conversion analysis.",
    metrics: [],
    techStack: ["Python", "scikit-learn", "BigQuery"],
    tags: ["Customer Segmentation", "Clustering", "Unsupervised ML", "GTM Analytics"],
  },
  {
    id: "P17",
    slug: "booking-prediction-model",
    title: "Booking Prediction Model",
    domain: "Revenue Forecasting",
    tier: 1,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "Record-level ML system predicting booking likelihood and value, contributing to pipeline and booking projection.",
    problem:
      "Revenue teams needed per-record booking predictions for bottom-up forecasting, separate from the aggregate macro forecast.",
    what:
      "Built using the Generic Regressor Framework — XGBoost Regressor and Classifier combination predicting booking likelihood and value at the record level. Evolved into the Product Prediction Model (P14) and established the reusable framework (P22).",
    impact:
      "Provided per-record booking contribution estimates for the Pipeline Projection Engine and established the reusable modeling framework.",
    metrics: [{ value: "Weekend", label: "MVP Build Time" }],
    techStack: ["Python", "XGBoost", "scikit-learn", "BigQuery"],
    tags: ["Booking Prediction", "Revenue Forecasting", "Record-Level ML"],
  },
  {
    id: "P25",
    slug: "record-level-likelihood-win-rate",
    title: "Record Level Likelihood & Win Rate",
    domain: "Revenue Forecasting",
    tier: 2,
    employment: "ada-asia",
    period: "2022 – 2024",
    status: "Production",
    featured: false,
    role: "Primary Owner",
    tagline:
      "ML-derived win rate methodology using per-record conversion likelihoods instead of binary counts for smoother, more accurate pipeline reporting.",
    problem:
      "Standard win rate calculations used binary converted/not-converted counts, producing noisy rates with high variance. A smoother, probability-weighted method was needed.",
    what:
      "Built a likelihood method computing win rates from ML-derived per-record conversion probabilities rather than binary outcomes. Enabled granular win rate reporting at the account, segment, and opportunity level.",
    impact:
      "Improved win rate metric accuracy and reduced variance in pipeline health reporting for GTM performance dashboards.",
    metrics: [],
    techStack: ["Python", "XGBoost", "BigQuery", "PySpark"],
    tags: ["Win Rate", "Likelihood Method", "Pipeline Analytics", "Revenue Metrics"],
  },
];

// ── Helpers ───────────────────────────────────────────────
export const featuredProjects = projects.filter((p) => p.featured);

export const allDomains: Domain[] = [
  "Revenue Forecasting",
  "Pipeline Intelligence",
  "Marketing Science",
  "Propensity & Scoring",
  "Data Engineering",
  "Platform & Infrastructure",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByDomain(domain: Domain): Project[] {
  return projects.filter((p) => p.domain === domain);
}
