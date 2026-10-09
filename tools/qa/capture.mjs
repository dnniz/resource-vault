// Visual QA capture for vault-viewer — adapted to this container:
// chromium rev 1223 via executablePath, SSRF-safe (local server via Playwright, not browser tools).
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4599';
const OUT = process.env.OUT ?? '/tmp/vault-qa/shots';
const CHROME = '/opt/hermes/.playwright/chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell';

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'desktop', width: 1920, height: 1080 },
];

// pages: home, course home, deck (module 2), kit reference
const PAGES = [
  { path: '/resource-vault/', name: 'home' },
  { path: '/resource-vault/r/el-ultimo-kilometro/', name: 'curso' },
  { path: '/resource-vault/r/el-ultimo-kilometro/02-el-prompt/', name: 'deck' },
  { path: '/resource-vault/r/el-ultimo-kilometro/06-kit/', name: 'kit' },
];

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });

async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
}

for (const vp of VIEWPORTS) {
  for (const scheme of ['light', 'dark']) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      colorScheme: scheme,
      reducedMotion: 'reduce',
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();
    for (const p of PAGES) {
      await page.goto(BASE + p.path, { waitUntil: 'networkidle' });
      await settle(page);
      await page.screenshot({ path: `${OUT}/${p.name}-${vp.name}-${scheme}-top.png` });
      if (p.name === 'home' || p.name === 'curso' || p.name === 'kit') {
        await page.screenshot({ path: `${OUT}/${p.name}-${vp.name}-${scheme}-full.png`, fullPage: true });
      }
    }
    await ctx.close();
  }
}

// --- interactive states on the deck (laptop, light) ---
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'light', reducedMotion: 'reduce', deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(BASE + '/resource-vault/r/el-ultimo-kilometro/02-el-prompt/', { waitUntil: 'networkidle' });
  await settle(page);
  // keyboard nav to slide 2
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(350);
  await page.screenshot({ path: `${OUT}/state-deck-slide2.png` });
  // notes toggle
  await page.keyboard.press('n');
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${OUT}/state-deck-notes.png` });
  await page.keyboard.press('n');
  // grid overlay
  await page.keyboard.press('g');
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${OUT}/state-deck-grid.png` });
  await page.keyboard.press('Escape');
  // focus order sample
  await page.goto(BASE + '/resource-vault/', { waitUntil: 'networkidle' });
  await settle(page);
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(120);
    await page.screenshot({ path: `${OUT}/focus-${i}.png` });
  }
  await ctx.close();
}
await browser.close();
console.log('shots done ->', OUT, fs.readdirSync(OUT).length, 'files');
