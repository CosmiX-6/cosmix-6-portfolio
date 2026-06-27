/**
 * Generates public/resume.pdf — executive two-page A4 resume.
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
<title>Akash Sharma - AI Engineer</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  @page {
    size: A4;
    margin: 12.7mm 15.2mm;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', 'Aptos', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 9pt;
    line-height: 1.43;
    color: #222222;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .name {
    font-size: 25pt;
    font-weight: 800;
    color: #111111;
    letter-spacing: -0.5px;
    line-height: 1.0;
  }

  .title-line {
    font-size: 12.5pt;
    font-weight: 600;
    color: #4F46E5;
    margin-top: 3px;
  }

  .contact-line {
    display: flex;
    flex-wrap: wrap;
    font-size: 8.5pt;
    color: #555555;
    margin-top: 6px;
    gap: 0;
  }

  .contact-sep { color: #CCCCCC; padding: 0 6px; }

  .section { margin-top: 15px; }

  .sh {
    font-size: 9pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    color: #333333;
    padding-bottom: 4px;
    border-bottom: 1px solid #E8E8E8;
    margin-bottom: 9px;
  }

  .summary-text {
    font-size: 9pt;
    color: #333333;
    line-height: 1.55;
  }

  /* KPI Cards */
  .kpi-row { display: flex; gap: 9px; margin-top: 11px; }

  .kpi-card {
    flex: 1;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    padding: 8px 10px 7px;
    text-align: center;
  }

  .kpi-val {
    font-size: 17pt;
    font-weight: 800;
    color: #4F46E5;
    line-height: 1.0;
    letter-spacing: -0.5px;
  }

  .kpi-lbl {
    font-size: 6.5pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #888888;
    margin-top: 4px;
  }

  /* Experience */
  .job { margin-top: 12px; page-break-inside: avoid; }

  .job-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .job-title { font-size: 11pt; font-weight: 700; color: #111111; }
  .job-date  { font-size: 8pt; color: #777777; white-space: nowrap; margin-left: 10px; flex-shrink: 0; }

  .job-sub {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 1px;
  }

  .job-company { font-size: 9.5pt; font-weight: 600; color: #4F46E5; }
  .job-tenure  { font-size: 7.5pt; color: #AAAAAA; }

  .job-context {
    font-size: 8.5pt;
    color: #555555;
    line-height: 1.48;
    margin: 4px 0 5px;
  }

  .bullets { list-style: disc; padding-left: 14px; }

  .bullets li {
    font-size: 8.5pt;
    color: #333333;
    line-height: 1.43;
    padding: 1.5px 0;
  }

  .bullets li::marker { color: #4F46E5; font-size: 8pt; }

  /* Projects */
  .proj-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .proj-card {
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    padding: 8px 10px 9px;
    page-break-inside: avoid;
  }

  .proj-name { font-size: 9pt; font-weight: 700; color: #111111; line-height: 1.3; }
  .proj-tech { font-size: 7pt; font-weight: 600; color: #4F46E5; letter-spacing: 0.1px; margin: 2px 0 3px; }
  .proj-desc { font-size: 8pt; color: #555555; line-height: 1.46; }

  /* Skills */
  .skills-table { width: 100%; border-collapse: collapse; }

  .skills-table td {
    font-size: 8pt;
    padding: 2px 0;
    vertical-align: top;
    line-height: 1.43;
  }

  .skills-table td.sk {
    font-weight: 700;
    color: #222222;
    width: 142px;
    padding-right: 10px;
    white-space: nowrap;
  }

  .skills-table td.sv { color: #444444; }

  /* Education */
  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;
  }

  .edu-degree { font-size: 9pt; font-weight: 700; color: #222222; }
  .edu-inst   { font-size: 8pt; color: #666666; margin-top: 1px; }
  .edu-yr     { font-size: 8pt; color: #999999; white-space: nowrap; margin-left: 10px; flex-shrink: 0; }

  /* Certifications */
  .cert-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px 22px;
  }

  .cert-item { font-size: 7.5pt; color: #444444; line-height: 1.5; }
</style>
</head>
<body>

<!-- HEADER ──────────────────────────────────────────────────────────────── -->
<div>
  <div class="name">Akash Sharma</div>
  <div class="title-line">AI Engineer</div>
  <div class="contact-line">
    <span>akashsharmaxxiv@gmail.com</span>
    <span class="contact-sep">|</span>
    <span>linkedin.com/in/akash-sharma-01775b14a</span>
    <span class="contact-sep">|</span>
    <span>github.com/CosmiX-6</span>
    <span class="contact-sep">|</span>
    <span>akashsharma.dev</span>
    <span class="contact-sep">|</span>
    <span>Mumbai, India</span>
  </div>
</div>

<!-- PROFESSIONAL SUMMARY ─────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Professional Summary</div>
  <p class="summary-text">
    AI Engineer with 4+ years of end-to-end ownership of production ML systems across forecasting, marketing
    science, propensity modeling, and data engineering infrastructure. Delivered 26+ production systems on an
    enterprise SaaS intelligence platform, from early research through operational scale. Combines rigorous
    statistical foundations with an engineering discipline focused on systems that are accurate, interpretable,
    and maintainable. Proven ability to translate ambiguous business problems into well-defined ML solutions
    and communicate results to non-technical stakeholders.
  </p>

  <div class="kpi-row">
    <div class="kpi-card">
      <div class="kpi-val">26+</div>
      <div class="kpi-lbl">Production ML Systems</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-val">~52%</div>
      <div class="kpi-lbl">Forecast Accuracy Gain</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-val">&gt;99%</div>
      <div class="kpi-lbl">Compute Time Reduction</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-val">~80%</div>
      <div class="kpi-lbl">Pipeline Time Reduction</div>
    </div>
  </div>
</div>

<!-- EXPERIENCE ───────────────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Experience</div>

  <div class="job">
    <div class="job-top">
      <div class="job-title">AI Engineer</div>
      <div class="job-date">Dec 2024 - Present</div>
    </div>
    <div class="job-sub">
      <div class="job-company">Revsure AI</div>
      <div class="job-tenure">1.5+ yrs, Full Time</div>
    </div>
    <p class="job-context">Direct employment at the Revenue Intelligence Platform. Continued ownership and
    advancement of the forecasting and marketing science stack with expanded engineering scope.</p>
    <ul class="bullets">
      <li>Reduced booking forecast MAPE by ~52% via forecast-category feature engineering on the EOQ prediction model</li>
      <li>Engineered the full-stack Marketing Mix Modeling platform: BayesianRidge on STL residuals, Hill saturation curves (L-BFGS-B), adstock decay, response curve generation, and scenario planning for budget optimization</li>
      <li>Built dual-algorithm explainability: SHAP TreeExplainer for XGBoost paired with Ridge coefficient contribution, written to BigQuery audit tables</li>
      <li>Enhanced configurable multi-model ML framework to support 30+ runtime parameters and a full algorithm selection matrix</li>
      <li>Resolved production-critical bugs in the MMX platform: MinMax extrapolation, scenario cascade drift, and STL edge cases</li>
      <li>Authored customer-facing methodology documentation and model governance artifacts for enterprise stakeholders</li>
    </ul>
  </div>

  <div class="job" style="margin-top: 14px;">
    <div class="job-top">
      <div class="job-title">Data Scientist</div>
      <div class="job-date">Apr 2022 - Dec 2024</div>
    </div>
    <div class="job-sub">
      <div class="job-company">ADA Asia</div>
      <div class="job-tenure">2 yrs 9 mos, Full Time</div>
    </div>
    <p class="job-context">Developed ML systems for an enterprise SaaS intelligence platform, growing from
    individual model contributions to component-level ownership across forecasting, marketing science, and data engineering.</p>
    <ul class="bullets">
      <li>Built the Revenue Forecasting Platform from a QTD heuristic through a production multi-layer XGBoost EOQ system with SHAP explainability and daily scoring across 4 quarter horizons</li>
      <li>Architected the Pipeline Projection Engine integrating 8+ ML model families into daily current and forward-quarter projections via a two-layer bottom-up and macro-scaling architecture</li>
      <li>Built Markov Chain multi-touch attribution enriched with firmographic and campaign metadata for daily touchpoint-level attribution across funnel stages</li>
      <li>Built account, lead, opportunity, and demand generation propensity models as a four-model scoring suite with daily production scoring and SHAP-based feature attribution</li>
      <li>Migrated revenue metrics pipeline from pandas to distributed PySpark, resolving critical implementation bugs and improving pipeline reliability at scale</li>
      <li>Reduced modeling pipeline runtime from 5-6 hours to 1 hour via joblib parallelization, processing 30+ customer accounts concurrently</li>
    </ul>
  </div>
</div>

<!-- SELECTED PROJECTS ────────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Selected Projects</div>
  <div class="proj-grid">

    <div class="proj-card">
      <div class="proj-name">Revenue Forecasting Platform</div>
      <div class="proj-tech">XGBoost, Ridge, STL, SHAP, SARIMAX, BigQuery, GCP Dataproc</div>
      <div class="proj-desc">Multi-layer EOQ system predicting pipeline and booking outcomes at daily frequency across 4 quarter horizons. Integrates time-decay adjustment, average-index fallback, and dual-algorithm SHAP explainability. Delivered ~52% reduction in booking model MAPE.</div>
    </div>

    <div class="proj-card">
      <div class="proj-name">Marketing Mix Modeling Platform</div>
      <div class="proj-tech">BayesianRidge, Hill Curves, L-BFGS-B, STL, PCA, scikit-learn</div>
      <div class="proj-desc">Full-stack MMX platform with Hill saturation curve fitting (multi-start L-BFGS-B), adstock decay, STL residual decomposition, PCA-based channel attribution, isotonic response curve smoothing, and scenario planning engine for spend reallocation and budget optimization.</div>
    </div>

    <div class="proj-card">
      <div class="proj-name">Pipeline Projection Engine</div>
      <div class="proj-tech">XGBoost, scikit-learn, PySpark, BigQuery, GCP Dataproc, Airflow</div>
      <div class="proj-desc">Central system integrating 8+ ML model families into daily CQ, NQ, and NQ+1 pipeline projections. Two-layer architecture: bottom-up propensity score aggregation combined with top-down macro forecast scaling for cross-layer reconciliation.</div>
    </div>

    <div class="proj-card">
      <div class="proj-name">Multi-Touch Attribution System</div>
      <div class="proj-tech">Markov Chain, Python, pandas, scikit-learn, BigQuery</div>
      <div class="proj-desc">Probabilistic attribution system using Markov Chain removal-effect modeling — customer journeys represented as Markov states, transition matrix built from historical paths, enriched with firmographic and campaign metadata to explain which audience-campaign combinations drive conversion at each funnel stage.</div>
    </div>

  </div>
</div>

<!-- TECHNICAL SKILLS ─────────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Technical Skills</div>
  <table class="skills-table">
    <tbody>
      <tr>
        <td class="sk">Languages</td>
        <td class="sv">Python (expert), SQL (advanced), PySpark / Spark SQL (advanced)</td>
      </tr>
      <tr>
        <td class="sk">Machine Learning</td>
        <td class="sv">XGBoost, scikit-learn Pipelines, BayesianRidge, Ridge, LightGBM, CatBoost, Markov Chain</td>
      </tr>
      <tr>
        <td class="sk">Statistical Modeling</td>
        <td class="sv">STL Decomposition, SARIMAX, OLS Regression, Welch t-test, Cohen's d, Chi-squared, Difference-in-Differences, Isotonic Regression</td>
      </tr>
      <tr>
        <td class="sk">Marketing Science</td>
        <td class="sv">Marketing Mix Modeling, Multi-Touch Attribution, Incrementality Testing, Hill Saturation Curves, Adstock Decay, Scenario Planning</td>
      </tr>
      <tr>
        <td class="sk">Data Engineering</td>
        <td class="sv">BigQuery, PySpark, Spark SQL, Parquet, Apache Airflow, ClickHouse, Broadcast Joins, Window Functions</td>
      </tr>
      <tr>
        <td class="sk">Cloud Infrastructure</td>
        <td class="sv">Google Cloud Platform, Cloud Storage, Dataproc, Serverless Batch Jobs</td>
      </tr>
      <tr>
        <td class="sk">Explainability</td>
        <td class="sv">SHAP TreeExplainer, Ridge Coefficient Attribution, Feature Value Decomposition, Shapley Value JSON Packaging</td>
      </tr>
      <tr>
        <td class="sk">Libraries and Tools</td>
        <td class="sv">pandas, NumPy, statsmodels, SciPy, joblib, Splink, Click CLI, BERT Embeddings, Handlebars / Mustache</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- EDUCATION ────────────────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Education</div>

  <div class="edu-row">
    <div>
      <div class="edu-degree">Post Graduate Program in Data Analytics</div>
      <div class="edu-inst">Imarticus Learning, Thane, India</div>
    </div>
    <div class="edu-yr">Jan 2022</div>
  </div>

  <div class="edu-row" style="margin-bottom: 0;">
    <div>
      <div class="edu-degree">Bachelor of Information Technology</div>
      <div class="edu-inst">T.Z.A.S.P. Pragati College, Dombivli, India</div>
    </div>
    <div class="edu-yr">Nov 2020</div>
  </div>
</div>

<!-- CERTIFICATIONS ───────────────────────────────────────────────────────── -->
<div class="section">
  <div class="sh">Certifications</div>
  <div class="cert-grid">
    <div class="cert-item">IBM Data Science Professional Certificate, IBM x Coursera (Oct 2021)</div>
    <div class="cert-item">Machine Learning with Python, IBM x Coursera (Sep 2021)</div>
    <div class="cert-item">Applied Data Science Capstone, IBM x Coursera (Oct 2021)</div>
    <div class="cert-item">Data Analysis with Python, IBM x Coursera (Jun 2021)</div>
    <div class="cert-item">Data Visualization with Python, IBM x Coursera (Sep 2021)</div>
    <div class="cert-item">Databases and SQL for Data Science, IBM x Coursera (Apr 2021)</div>
  </div>
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
