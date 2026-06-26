import { chromium } from 'playwright';

const SHOTS = '/tmp/portfolio-test/screenshots';
import { mkdirSync } from 'fs';
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const snap = async (name) => {
  await page.screenshot({ path: `${SHOTS}/${name}.png`, fullPage: false });
  console.log(`✓ screenshot: ${name}`);
};

const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

// 1. Homepage
console.log('\n── Homepage ──');
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
const h1 = await page.locator('h1').first().textContent();
console.log('H1:', h1?.trim());
const heroText = await page.locator('text=Revenue AI Engineer').count();
console.log('Hero headline found:', heroText > 0);
await snap('01-home');

// 2. Metrics bar
const metricsCount = await page.locator('text=MAPE Reduction').count();
console.log('Metrics bar (MAPE Reduction found):', metricsCount > 0);

// 3. Featured projects
const projectCards = await page.locator('text=Revenue Forecasting Platform').count();
console.log('Featured project card found:', projectCards > 0);

// 4. Work page
console.log('\n── Work ──');
await page.goto('http://localhost:3000/work', { waitUntil: 'networkidle' });
await snap('02-work');
const filterBtns = await page.locator('button').count();
console.log('Filter buttons count:', filterBtns);
const allProjects = await page.locator('text=Pipeline Projection Engine').count();
console.log('All projects visible:', allProjects > 0);

// 5. Domain filter
const mktBtn = await page.locator('button', { hasText: 'Marketing Science' }).first();
await mktBtn.click();
await page.waitForTimeout(400);
await snap('03-work-filtered');
const filteredCount = await page.locator('[class*="rounded"]').count();
console.log('Filter click worked, cards visible:', filteredCount > 0);

// 6. Project case study
console.log('\n── Project page ──');
await page.goto('http://localhost:3000/work/revenue-forecasting-platform', { waitUntil: 'networkidle' });
await snap('04-project');
const problemSection = await page.locator('text=The Problem').count();
const whatSection = await page.locator('text=What Was Built').count();
const impactSection = await page.locator('text=Business Impact').count();
console.log('Problem section:', problemSection > 0);
console.log('What Was Built section:', whatSection > 0);
console.log('Business Impact section:', impactSection > 0);
const mapeMetric = await page.locator('text=~52%').count();
console.log('MAPE metric shown:', mapeMetric > 0);

// 7. About
console.log('\n── About ──');
await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
await snap('05-about');
const timeline = await page.locator('text=Revsure AI').count();
console.log('Revsure AI in timeline:', timeline > 0);

// 8. Skills
console.log('\n── Skills ──');
await page.goto('http://localhost:3000/skills', { waitUntil: 'networkidle' });
await snap('06-skills');
const categories = await page.locator('text=Machine Learning').count();
console.log('Skills categories visible:', categories > 0);

// 9. Contact
console.log('\n── Contact ──');
await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
await snap('07-contact');
const linkedinLink = await page.locator('a[href*="linkedin"]').count();
console.log('LinkedIn link found:', linkedinLink > 0);

// 10. SEO: JSON-LD
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
const jsonLd = await page.evaluate(() => {
  const script = document.querySelector('script[type="application/ld+json"]');
  return script ? JSON.parse(script.textContent) : null;
});
console.log('\n── JSON-LD ──');
console.log('@type:', jsonLd?.['@type']);
console.log('name:', jsonLd?.name);
console.log('jobTitle:', jsonLd?.jobTitle);

// 11. Check for console errors
console.log('\n── Console errors ──');
if (errors.length === 0) {
  console.log('✓ No console errors');
} else {
  errors.forEach(e => console.log('  ✗', e));
}

await browser.close();
console.log('\n✓ Smoke test complete');
