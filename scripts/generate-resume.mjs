/**
 * Generates public/resume.pdf
 * Run: node scripts/generate-resume.mjs  OR  npm run resume
 */

import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, "../public/resume.pdf");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Akash Sharma - AI &amp; Machine Learning Engineer</title>
<style>
  @page {
    size: A4;
    margin: 12.7mm 14.5mm;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    font-size: 9pt;
    line-height: 1.33;
    color: #111111;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .name {
    font-size: 18pt;
    font-weight: 700;
    color: #0A0A0A;
    line-height: 1.0;
    letter-spacing: -0.2px;
  }

  .tagline {
    font-size: 10.5pt;
    font-weight: 700;
    color: #111111;
    margin-top: 2px;
    letter-spacing: 0.2px;
  }

  .contact {
    font-size: 8.5pt;
    color: #444444;
    margin-top: 3px;
  }

  .sep { color: #AAAAAA; padding: 0 5px; }

  .section { margin-top: 7px; }

  .sh {
    font-size: 8.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: #111111;
    border-bottom: 1px solid #BBBBBB;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }

  .summary {
    font-size: 9pt;
    line-height: 1.45;
    color: #111111;
  }

  .job { margin-top: 7px; page-break-inside: avoid; }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .job-title {
    font-size: 10.5pt;
    font-weight: 700;
    color: #0A0A0A;
  }

  .job-meta {
    font-size: 8.5pt;
    color: #555555;
    white-space: nowrap;
  }

  .job-company {
    font-size: 10pt;
    font-weight: 700;
    color: #1A1A1A;
    margin-top: 0px;
  }

  .bullets {
    list-style: disc;
    padding-left: 14px;
    margin-top: 3px;
  }

  .bullets li {
    font-size: 9pt;
    color: #111111;
    line-height: 1.3;
    padding-bottom: 2px;
  }

  .skills-row {
    display: flex;
    padding: 1.5px 0;
    font-size: 9pt;
    line-height: 1.38;
  }

  .sk-label {
    font-weight: 700;
    color: #111111;
    min-width: 144px;
    flex-shrink: 0;
    padding-right: 8px;
  }

  .sk-val { color: #222222; }

  .edu-line {
    font-size: 9pt;
    color: #111111;
    line-height: 1.5;
  }

  .cert-line {
    font-size: 8.5pt;
    color: #444444;
    margin-top: 3px;
  }

  .award-line {
    font-size: 9pt;
    color: #111111;
    line-height: 1.5;
  }
</style>
</head>
<body>

<div>
  <div class="name">Akash Sharma</div>
  <div class="tagline">AI &amp; Machine Learning Engineer</div>
  <div class="contact">
    Bengaluru, India
    <span class="sep">|</span>akashsharmaxxiv@gmail.com
    <span class="sep">|</span>linkedin.com/in/akash-sharma-01775b14a
    <span class="sep">|</span>github.com/CosmiX-6
    <span class="sep">|</span>akashlabs.dev
  </div>
</div>

<div class="section">
  <div class="sh">Summary</div>
  <p class="summary">4+ years of full-lifecycle ownership of 25+ production ML systems for B2B SaaS Revenue Intelligence.
  Designed, productionized, and operated systems spanning EOQ revenue forecasting, pipeline projection, marketing mix modeling,
  multi-touch attribution, and propensity scoring at daily scale. Transforms CRM, funnel, and campaign data into
  revenue forecasts and GTM decision systems.</p>
</div>

<div class="section">
  <div class="sh">Experience</div>

  <div class="job">
    <div class="job-header">
      <div class="job-title">AI Engineer</div>
      <div class="job-meta">Dec 2024 – Present &nbsp;|&nbsp; ~1.5 yrs, Full-Time</div>
    </div>
    <div class="job-company">Revsure AI</div>
    <ul class="bullets">
      <li>Improved end-of-quarter booking forecast accuracy by ~52% through forecast-category feature engineering on the production revenue prediction model</li>
      <li>Built two production forecast adjustment layers: time-decay (re-weights recent quarters over older history) and average-index (day-of-quarter historical rates as early-quarter fallback); the combined macro forecast system maintains overall pipeline MAPE below 10%</li>
      <li>Built model explainability for all forecast outputs: SHAP for tree models (XGBoost) and coefficient contribution for linear models (Ridge), logging feature attributions to BigQuery and displaying them in customer-facing dashboards</li>
      <li>Built the Generic Regressor Framework: standardizes feature engineering, algorithm selection (XGBoost, LightGBM, CatBoost, Ridge), RandomizedSearchCV tuning, quarter-aware validation, and production scoring/writeback; configurable via 30+ runtime parameters for per-customer behavior without code changes</li>
      <li>Built a production Model Metric Dashboard tracking MAPE, wMAPE, MAE, RMSE, and classification metrics across all deployed models for degradation detection and retraining validation</li>
    </ul>
  </div>

  <div class="job" style="margin-top: 8px;">
    <div class="job-header">
      <div class="job-title">Data Scientist</div>
      <div class="job-meta">Apr 2022 – Dec 2024 &nbsp;|&nbsp; 2 yrs 9 mos, Full-Time</div>
    </div>
    <div class="job-company">ADA Asia</div>
    <ul class="bullets">
      <li>Architected and productionized the Pipeline Projection Engine for 15+ enterprise customers: 8+ ML model families (propensity, deal size, demand generation, stage transitions) aggregate bottom-up into daily multi-quarter revenue projections, scoring millions of records daily; pipeline models achieve 80%+ F1-score and booking conversion models 85-95%</li>
      <li>Engineered the Marketing Mix Modeling platform from research through production: measures each channel's pipeline contribution via saturation curves (Hill function), adstock decay, and seasonal decomposition, with a scenario planner for budget reallocation; achieves 5-15% MAPE across 60+ channels including 10+ paid channels</li>
      <li>Owned the Revenue Forecasting Platform through its full lifecycle: from a quarter-to-date heuristic into a production XGBoost system with leakage-safe cross-validation and daily scoring across current and future quarter horizons</li>
      <li>Built a four-model propensity scoring suite (accounts, leads, opportunities, demand generation) that assigns daily conversion likelihood scores across multiple quarter horizons, with SHAP-based feature explanations and a statistical fallback for low-data customers</li>
      <li>Optimized production data pipelines: rewrote revenue metrics computation in distributed PySpark on GCP Dataproc (~1 day to ~3 minutes) and parallelized model training via joblib (5-6 hrs to 1 hr across 30+ customer tenants)</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="sh">Awards &amp; Recognition</div>
  <div class="award-line"><strong>AQUA SPOT Award</strong>, ADA Global | Nov 2024, sustained ML platform ownership and delivery across the Revenue Intelligence product</div>
  <div class="award-line"><strong>Star of the Month</strong>, Revsure AI | Apr 2026, consistent system improvement and technical delivery as AI Engineer</div>
</div>

<div class="section">
  <div class="sh">Technical Skills</div>
  <div class="skills-row">
    <div class="sk-label">ML Engineering</div>
    <div class="sk-val">Python &bull; XGBoost &bull; scikit-learn Pipelines &bull; LightGBM &bull; CatBoost &bull; Custom Transformers &bull; Feature Engineering &bull; Leakage-Safe Validation</div>
  </div>
  <div class="skills-row">
    <div class="sk-label">Forecasting</div>
    <div class="sk-val">EOQ Prediction &bull; Multi-Horizon Forecasting &bull; SARIMAX &bull; STL Decomposition &bull; Time-Decay Adjustment &bull; Revenue Forecasting</div>
  </div>
  <div class="skills-row">
    <div class="sk-label">Applied ML</div>
    <div class="sk-val">SHAP Explainability &bull; BayesianRidge &bull; Propensity Modeling &bull; Markov Chain MTA &bull; Entity Resolution &bull; Model Monitoring</div>
  </div>
  <div class="skills-row">
    <div class="sk-label">Marketing Science</div>
    <div class="sk-val">Marketing Mix Modeling &bull; Hill Saturation Curves &bull; Adstock Decay &bull; Response Curves &bull; Scenario Planning &bull; Attribution</div>
  </div>
  <div class="skills-row">
    <div class="sk-label">Data &amp; Cloud</div>
    <div class="sk-val">PySpark &bull; BigQuery &bull; GCP Dataproc &bull; Airflow &bull; Cloud Storage &bull; SQL &bull; Production ML Pipelines</div>
  </div>
</div>

<div class="section">
  <div class="sh">Education</div>
  <div class="edu-line">Bachelor of Information Technology, T.Z.A.S.P. Pragati College, Dombivli | 2020</div>
  <div class="edu-line">PG Program in Data Analytics, Imarticus Learning, Thane | 2022</div>
  <div class="cert-line">IBM Data Science Professional Certificate | IBM &times; Coursera (2021)</div>
</div>

</body>
</html>`;

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();

  writeFileSync(OUTPUT, pdf);
  console.log(`Resume saved to ${OUTPUT}`);
})();
