/**
 * Generates a tailored resume PDF from a JSON config to an arbitrary output path.
 * Does NOT touch public/resume.pdf (the live site asset) — for job-search tailoring only.
 *
 * Usage: node scripts/generate-resume-variant.mjs <config.json> <output.pdf>
 */

import { chromium } from "playwright";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const [, , configPath, outputPath] = process.argv;

if (!configPath || !outputPath) {
  console.error("Usage: node scripts/generate-resume-variant.mjs <config.json> <output.pdf>");
  process.exit(1);
}

const cfg = JSON.parse(readFileSync(resolve(configPath), "utf-8"));

const esc = (s) => String(s ?? "");

const kpiRow = (cfg.kpis || [])
  .map(
    (k) => `
    <div class="kpi-card">
      <div class="kpi-val">${esc(k.value)}</div>
      <div class="kpi-lbl">${esc(k.label)}</div>
    </div>`
  )
  .join("");

const jobsHtml = (cfg.jobs || [])
  .map(
    (j, i) => `
  <div class="job" style="${i > 0 ? "margin-top: 14px;" : ""}">
    <div class="job-top">
      <div class="job-title">${esc(j.title)}</div>
      <div class="job-date">${esc(j.date)}</div>
    </div>
    <div class="job-sub">
      <div class="job-company">${esc(j.company)}</div>
      <div class="job-tenure">${esc(j.tenure)}</div>
    </div>
    <p class="job-context">${esc(j.context)}</p>
    <ul class="bullets">
      ${(j.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("\n      ")}
    </ul>
  </div>`
  )
  .join("");

const projectsHtml = (cfg.projects || [])
  .map(
    (p) => `
    <div class="proj-card">
      <div class="proj-name">${esc(p.name)}</div>
      <div class="proj-tech">${esc(p.tech)}</div>
      <div class="proj-desc">${esc(p.desc)}</div>
    </div>`
  )
  .join("");

const skillsHtml = (cfg.skills || [])
  .map(
    (s) => `
      <tr>
        <td class="sk">${esc(s.label)}</td>
        <td class="sv">${esc(s.value)}</td>
      </tr>`
  )
  .join("");

const eduHtml = (cfg.education || [])
  .map(
    (e, i, arr) => `
  <div class="edu-row" ${i === arr.length - 1 ? 'style="margin-bottom: 0;"' : ""}>
    <div>
      <div class="edu-degree">${esc(e.degree)}</div>
      <div class="edu-inst">${esc(e.institution)}</div>
    </div>
    <div class="edu-yr">${esc(e.year)}</div>
  </div>`
  )
  .join("");

const certHtml = (cfg.certifications || [])
  .map((c) => `<div class="cert-item">${esc(c)}</div>`)
  .join("\n    ");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${esc(cfg.name)} - ${esc(cfg.titleLine)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  @page { size: A4; margin: 12.7mm 15.2mm; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', 'Aptos', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 9pt; line-height: 1.43; color: #222222; background: #ffffff;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .name { font-size: 25pt; font-weight: 800; color: #111111; letter-spacing: -0.5px; line-height: 1.0; }
  .title-line { font-size: 12.5pt; font-weight: 600; color: #4F46E5; margin-top: 3px; }
  .contact-line { display: flex; flex-wrap: wrap; font-size: 8.5pt; color: #555555; margin-top: 6px; gap: 0; }
  .contact-sep { color: #CCCCCC; padding: 0 6px; }
  .section { margin-top: 15px; }
  .sh {
    font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.3px;
    color: #333333; padding-bottom: 4px; border-bottom: 1px solid #E8E8E8; margin-bottom: 9px;
  }
  .summary-text { font-size: 9pt; color: #333333; line-height: 1.55; }
  .kpi-row { display: flex; gap: 9px; margin-top: 11px; }
  .kpi-card { flex: 1; border: 1px solid #DEDEDE; border-radius: 5px; padding: 8px 10px 7px; text-align: center; }
  .kpi-val { font-size: 17pt; font-weight: 800; color: #4F46E5; line-height: 1.0; letter-spacing: -0.5px; }
  .kpi-lbl { font-size: 6.5pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; color: #888888; margin-top: 4px; }
  .job { margin-top: 12px; page-break-inside: avoid; }
  .job-top { display: flex; justify-content: space-between; align-items: baseline; }
  .job-title { font-size: 11pt; font-weight: 700; color: #111111; }
  .job-date { font-size: 8pt; color: #777777; white-space: nowrap; margin-left: 10px; flex-shrink: 0; }
  .job-sub { display: flex; justify-content: space-between; align-items: baseline; margin-top: 1px; }
  .job-company { font-size: 9.5pt; font-weight: 600; color: #4F46E5; }
  .job-tenure { font-size: 7.5pt; color: #AAAAAA; }
  .job-context { font-size: 8.5pt; color: #555555; line-height: 1.48; margin: 4px 0 5px; }
  .bullets { list-style: disc; padding-left: 14px; }
  .bullets li { font-size: 8.5pt; color: #333333; line-height: 1.43; padding: 1.5px 0; }
  .bullets li::marker { color: #4F46E5; font-size: 8pt; }
  .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .proj-card { border: 1px solid #E8E8E8; border-radius: 5px; padding: 8px 10px 9px; page-break-inside: avoid; }
  .proj-name { font-size: 9pt; font-weight: 700; color: #111111; line-height: 1.3; }
  .proj-tech { font-size: 7pt; font-weight: 600; color: #4F46E5; letter-spacing: 0.1px; margin: 2px 0 3px; }
  .proj-desc { font-size: 8pt; color: #555555; line-height: 1.46; }
  .skills-table { width: 100%; border-collapse: collapse; }
  .skills-table td { font-size: 8pt; padding: 2px 0; vertical-align: top; line-height: 1.43; }
  .skills-table td.sk { font-weight: 700; color: #222222; width: 142px; padding-right: 10px; white-space: nowrap; }
  .skills-table td.sv { color: #444444; }
  .edu-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px; }
  .edu-degree { font-size: 9pt; font-weight: 700; color: #222222; }
  .edu-inst { font-size: 8pt; color: #666666; margin-top: 1px; }
  .edu-yr { font-size: 8pt; color: #999999; white-space: nowrap; margin-left: 10px; flex-shrink: 0; }
  .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 22px; }
  .cert-item { font-size: 7.5pt; color: #444444; line-height: 1.5; }
</style>
</head>
<body>

<div>
  <div class="name">${esc(cfg.name)}</div>
  <div class="title-line">${esc(cfg.titleLine)}</div>
  <div class="contact-line">
    ${(cfg.contact || []).map((c) => esc(c)).join('<span class="contact-sep">|</span>')}
  </div>
</div>

<div class="section">
  <div class="sh">Professional Summary</div>
  <p class="summary-text">${esc(cfg.summary)}</p>
  <div class="kpi-row">${kpiRow}</div>
</div>

<div class="section">
  <div class="sh">Experience</div>
  ${jobsHtml}
</div>

<div class="section">
  <div class="sh">Selected Projects</div>
  <div class="proj-grid">${projectsHtml}</div>
</div>

<div class="section">
  <div class="sh">Technical Skills</div>
  <table class="skills-table"><tbody>${skillsHtml}</tbody></table>
</div>

<div class="section">
  <div class="sh">Education</div>
  ${eduHtml}
</div>

<div class="section">
  <div class="sh">Certifications</div>
  <div class="cert-grid">
    ${certHtml}
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

  const outAbs = resolve(outputPath);
  mkdirSync(dirname(outAbs), { recursive: true });
  writeFileSync(outAbs, pdf);
  console.log(`Resume saved to ${outAbs}`);
})();
