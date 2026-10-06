// Narrative detail for the four selected case studies. Every line is drawn from
// the existing project data (lib/data/projects.ts) or the experience and resume
// records. Sections without a source are left out rather than invented.

export interface FlowStep {
  label: string;
  note?: string;
}

export interface EngineeringDecision {
  question: string;
  answer: string;
}

export interface CaseStudyNarrative {
  initialApproach?: string;
  whyNotEnough?: string;
  flow?: FlowStep[];
  decisions?: EngineeringDecision[];
  validation?: string;
  // Failures documented in the portfolio. Symptom, root cause, fix, and lesson
  // are not yet written up, so only the names are shown.
  failures?: string[];
}

export const caseStudies: Record<string, CaseStudyNarrative> = {
  "revenue-forecasting-platform": {
    initialApproach: "A quarter-to-date (QTD) heuristic projection.",
    whyNotEnough:
      "Heuristics couldn't capture seasonality, pacing dynamics, or macroeconomic context, so the forecast was only as good as the quarter's pace so far.",
    flow: [
      { label: "Raw data", note: "pipeline and booking records" },
      { label: "Feature engineering", note: "forecast-category features" },
      { label: "Model families", note: "XGBoost, Ridge, and others" },
      { label: "Validation", note: "leakage-safe" },
      { label: "Forecast adjustment", note: "time-decay and average-index layers" },
      { label: "Daily EOQ prediction", note: "four quarter horizons" },
      { label: "Production", note: "scored daily, explained with SHAP" },
      { label: "Actual EOQ", note: "quarter-end outcome" },
      { label: "Error / accuracy", note: "5–15% model MAPE" },
    ],
    decisions: [
      {
        question: "Why XGBoost?",
        answer:
          "Gradient-boosted trees handle the nonlinear interactions across pipeline and booking features, and XGBoost is the core model in the system.",
      },
      {
        question: "Why leakage-safe validation?",
        answer:
          "Random splits let future information leak into a forecasting problem, so validation uses GroupShuffleSplit to keep the evaluation honest.",
      },
      {
        question: "Why multiple model families?",
        answer:
          "Customer behavior differed enough that one algorithm wasn't universally best, so the framework selects among XGBoost, Ridge, LightGBM, and CatBoost.",
      },
      {
        question: "Why explainability?",
        answer:
          "A forecast had to become a decision people could inspect, so SHAP and coefficient contributions are logged to BigQuery.",
      },
    ],
    validation:
      "Leakage-safe GroupShuffleSplit validation, with daily EOQ forecasts checked against actual quarter-end outcomes.",
  },

  "marketing-mix-modeling-platform": {
    flow: [
      { label: "Spend and outcome data", note: "by channel" },
      { label: "Transforms", note: "adstock decay and Hill saturation curves" },
      { label: "Seasonal decomposition", note: "STL" },
      { label: "Response curves", note: "per channel" },
      { label: "Scenario planning", note: "budget reallocation" },
    ],
    failures: ["MinMax extrapolation", "Scenario cascade drift", "STL edge cases"],
  },

  "multi-touch-attribution": {
    flow: [
      { label: "Customer journeys", note: "ordered touchpoints" },
      { label: "Markov states", note: "channels and funnel stages" },
      { label: "Transition matrix", note: "built from historical paths" },
      { label: "Removal effect", note: "drop in conversion probability per channel" },
      { label: "Channel credit", note: "actual influence on conversion" },
    ],
    decisions: [
      {
        question: "Why removal effect?",
        answer:
          "It credits each channel by how much conversion probability falls when that channel is removed, not by its position in the path.",
      },
      {
        question: "Why enrich with firmographics?",
        answer:
          "Firmographic and campaign metadata show why specific audience and campaign combinations work at each funnel stage, not just which channels do.",
      },
    ],
  },

  "sales-pipeline-forecasting": {
    flow: [
      { label: "Record-level scoring", note: "leads and opportunities, daily" },
      { label: "Expected value", note: "propensity × predicted opportunity size" },
      { label: "Bottom-up aggregation", note: "by target quarter" },
      { label: "Macro scaling", note: "top-down factor from the macro forecast" },
      { label: "Daily projection", note: "multi-quarter" },
    ],
    decisions: [
      {
        question: "Why two layers?",
        answer:
          "Record-level scoring captures the pipeline that exists today; the macro layer reconciles those aggregates with end-of-quarter expectations.",
      },
      {
        question: "Why a heuristic mode?",
        answer:
          "Customers with little data still need a working projection, so the system runs both ML and heuristic modes.",
      },
    ],
  },
};
