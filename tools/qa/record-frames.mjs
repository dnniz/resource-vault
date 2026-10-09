// Frame-based motion capture (no playwright ffmpeg needed): 10fps screenshot walk
// of the deck flow, assembled with system ffmpeg afterwards.
import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4599';
const CHROME = '/opt/hermes/.playwright/chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell';
const FRAMES = '/tmp/vault-qa/frames';
fs.rmSync(FRAMES, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

let n = 0;
async function snap(ms = 0) {
  if (ms) await page.waitForTimeout(ms);
  await page.screenshot({ path: `${FRAMES}/f${String(n++).padStart(4, '0')}.png` });
}

await page.goto(BASE + '/resource-vault/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
for (let i = 0; i < 5; i++) await snap(150);
// course home
await page.goto(BASE + '/resource-vault/r/el-ultimo-kilometro/', { waitUntil: 'networkidle' });
for (let i = 0; i < 7; i++) await snap(150);
// deck: cover
await page.goto(BASE + '/resource-vault/r/el-ultimo-kilometro/02-el-prompt/', { waitUntil: 'networkidle' });
for (let i = 0; i < 8; i++) await snap(150);
for (let i = 0; i < 3; i++) {
  await page.keyboard.press('ArrowRight');
  for (let j = 0; j < 5; j++) await snap(120); // transition is 300ms
}
await page.keyboard.press('n');
for (let i = 0; i < 6; i++) await snap(150);
await page.keyboard.press('n');
await snap(250);
await page.keyboard.press('g');
for (let i = 0; i < 6; i++) await snap(150);
await page.click('.deck__grid-item[data-deck-jump="1"]');
for (let i = 0; i < 6; i++) await snap(150);
await browser.close();
console.log(n, 'frames');
