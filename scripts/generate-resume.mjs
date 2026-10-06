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
<title>Akash Sharma - AI / ML Engineer</title>
<style>
  @page {
    size: A4;
    margin: 10mm 13mm;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    font-size: 8.75pt;
    line-height: 1.26;
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
    font-size: 8pt;
    color: #444444;
    margin-top: 2px;
  }

  .sep { color: #AAAAAA; padding: 0 4px; }

  .section { margin-top: 5px; }

  .sh {
    font-size: 8.25pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: #111111;
    border-bottom: 1px solid #BBBBBB;
    padding-bottom: 1.5px;
    margin-bottom: 4px;
  }

  .summary {
    font-size: 8.75pt;
    line-height: 1.32;
    color: #111111;
  }

  .job { margin-top: 5px; page-break-inside: avoid; }

  .job-link {
    font-size: 8.5pt;
    color: #444444;
    font-weight: 400;
  }

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
    font-size: 8.75pt;
    color: #111111;
    line-height: 1.2;
    padding-bottom: 1px;
  }

  .skills-row {
    display: flex;
    padding: 1px 0;
    font-size: 8.75pt;
    line-height: 1.3;
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
    font-size: 8.75pt;
    color: #111111;
    line-height: 1.35;
  }

  .cert-line {
    font-size: 8.25pt;
    color: #444444;
    margin-top: 2px;
  }

  .award-line {
    font-size: 8.75pt;
    color: #111111;
    line-height: 1.35;
  }
</style>
</head>
<body>

<div>
  <div class="name">Akash Sharma</div>
  <div class="tagline">AI / ML Engineer - Production ML &amp; Revenue Intelligence</div>
  <div class="contact">
    Bengaluru, India
    <span class="sep">|</span>+91 8422081717
    <span class="sep">|</span>akashsharmaxxiv@gmail.com
    <span class="sep">|</span>linkedin.com/in/akash-sharma-01775b14a
    <span class="sep">|</span>github.com/CosmiX-6
    <span class="sep">|</span>akashlabs.dev
  </div>
</div>

<div class="section">
  <div class="sh">Summary</div>
  <p class="summary">AI/ML Engineer with 4+ years building and operating production ML systems for B2B SaaS revenue intelligence.
  Owned 25+ systems spanning revenue forecasting, sales pipeline forecasting, propensity modeling, attribution, and marketing mix modeling,
  scoring millions of records daily. Strong across modeling, leakage-safe validation, explainability, monitoring, distributed data
  processing, and production ML pipelines on GCP.</p>
</div>

<div class="section">
  <div class="sh">Experience</div>

  <div class="job">
    <div class="job-header">
      <div class="job-title">AI Engineer</div>
      <div class="job-meta">Dec 2024 – Present &nbsp;|&nbsp; Full-Time</div>
    </div>
    <div class="job-company">Revsure AI</div>
    <ul class="bullets">
      <li>Held booking model MAPE in the 5–15% range through forecast-category feature engineering, with daily end-of-quarter forecast accuracy of ~85–99% validated against actual quarter-end outcomes</li>
      <li>Designed two production forecast adjustment layers (time-decay and average-index) that refine the combined macro forecast system</li>
      <li>Productionized model explainability across XGBoost and Ridge forecasts using SHAP and coefficient attribution; logged feature contributions to BigQuery and surfaced them in customer-facing dashboards</li>
      <li>Built an ML Regression Framework covering feature engineering, algorithm selection (XGBoost, LightGBM, CatBoost, Ridge), RandomizedSearchCV, quarter-aware validation, scoring/writeback, and 30+ runtime parameters for customer-specific behavior without code changes</li>
      <li>Built a production Model Metric Dashboard tracking MAPE, wMAPE, MAE, RMSE, and classification metrics for degradation detection and retraining validation</li>
    </ul>
  </div>

  <div class="job" style="margin-top: 6px;">
    <div class="job-header">
      <div class="job-title">Data Scientist</div>
      <div class="job-meta">Apr 2022 – Dec 2024 &nbsp;|&nbsp; Full-Time</div>
    </div>
    <div class="job-company">ADA Asia</div>
    <ul class="bullets">
      <li>Architected and productionized a Sales Pipeline Forecasting system for 15+ enterprise customers; 8+ ML model families aggregate bottom-up into daily multi-quarter revenue projections across millions of records</li>
      <li>Engineered the Marketing Mix Modeling platform from research through production using Hill saturation curves, adstock decay, seasonal decomposition, and scenario planning; 5–15% MAPE across 60+ channels including 10+ paid channels</li>
      <li>Owned the Revenue Forecasting Platform end-to-end, evolving a quarter-to-date heuristic into a production XGBoost system with leakage-safe cross-validation and daily scoring across current and future quarter horizons</li>
      <li>Built a four-model propensity scoring suite for accounts, leads, opportunities, and demand generation, with multi-horizon conversion likelihoods, SHAP explanations, and a statistical fallback for low-data customers</li>
      <li>Cut revenue-metric pipeline runtime from ~1 day to ~3 minutes using distributed PySpark on GCP Dataproc; parallelized model training from 5–6 hours to ~1 hour across 30+ customer tenants</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="sh">Personal Projects</div>
  <div class="job">
    <div class="job-title">Narovva - Autonomous News-to-Social Publishing Engine</div>
    <div class="job-link">github.com/CosmiX-6/narovva</div>
    <ul class="bullets">
      <li>Designed and shipped an end-to-end autonomous publishing system that discovers news, structures an LLM brief, deterministically renders branded carousels, optionally assembles Reels, generates captions, publishes via Instagram Graph API, and records post history</li>
      <li>Built the orchestration layer around independently versioned info-snipe and poster-core packages; added channel configuration, scheduling, PostgreSQL persistence, temporary Vercel Blob hosting, retries, deduplication, and per-article fault isolation</li>
      <li>Kept LLM use constrained to article understanding and caption generation; made layout, scheduling, publishing state, and failure handling deterministic and testable. Live channel runs hourly through GitHub Actions and publishes when its schedule is due</li>
    </ul>
  </div>
</div>

<div class="section">
  <div class="sh">Awards &amp; Recognition</div>
  <div class="award-line"><strong>AQUA SPOT Award</strong>, ADA Global | Nov 2024, sustained ML platform ownership and delivery across the Revenue Intelligence product</div>
  <div class="award-line"><strong>Star of the Month</strong> | Apr 2026, consistent system improvement and technical delivery as AI Engineer</div>
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
  <div class="skills-row">
    <div class="sk-label">GenAI &amp; Automation</div>
    <div class="sk-val">LLM Orchestration &bull; OpenAI / Gemini &bull; Instagram Graph API &bull; FFmpeg &bull; PostgreSQL &bull; Vercel Blob &bull; GitHub Actions</div>
  </div>
  <div class="skills-row">
    <div class="sk-label">Collaboration</div>
    <div class="sk-val">Cross-Team Alignment &bull; Technical Decision-Making &bull; Task Planning &amp; Documentation</div>
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
