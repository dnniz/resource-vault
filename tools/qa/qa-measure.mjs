// Measurable QA — no vision model: canvas-resolved contrast, luminance histogram,
// overflow, touch targets, semantics. Exit 1 on failures.
import { chromium } from 'playwright';
import fs from 'node:fs';
import { PNG } from 'pngjs';

const BASE = process.env.BASE_URL ?? 'http://127.0.0.1:4599';
const CHROME = '/opt/hermes/.playwright/chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell';
const failures = [];
const notes = [];

const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

const CONTRAST_PAIRS_LIGHT = [
  ['ink on paper', 'rgb(29,37,48)', 'rgb(250,248,243)'],
  ['muted on paper', 'rgb(99,107,121)', 'rgb(250,248,243)'],
  ['accent-strong on paper', 'rgb(10,92,72)', 'rgb(250,248,243)'],
  ['code-ink on code-bg', 'rgb(221,229,238)', 'rgb(32,40,51)'],
  ['ink on paper-2 (module)', 'rgb(29,37,48)', 'rgb(242,238,230)'],
  ['amber on paper-2 (notes head)', 'rgb(154,91,16)', 'rgb(242,238,230)'],
];
const CONTRAST_PAIRS_DARK = [
  ['ink on paper', 'rgb(233,230,221)', 'rgb(20,25,32)'],
  ['muted on paper', 'rgb(154,162,173)', 'rgb(20,25,32)'],
  ['accent-strong on paper', 'rgb(99,224,189)', 'rgb(20,25,32)'],
  ['code-ink on code-bg', 'rgb(214,222,232)', 'rgb(14,19,25)'],
  ['ink on paper-2', 'rgb(233,230,221)', 'rgb(26,32,41)'],
  ['amber on paper-2', 'rgb(232,180,92)', 'rgb(26,32,41)'],
];

function lum(r, g, b) {
  const f = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function ratio(c1, c2) {
  const p = (c) => c.match(/\d+/g).map(Number);
  const [r1, g1, b1] = p(c1), [r2, g2, b2] = p(c2);
  const l1 = lum(r1, g1, b1), l2 = lum(r2, g2, b2);
  return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05));
}

// 1) canvas-resolve sanity: render each color in a real canvas to prove they're valid CSS
{
  const c = await page.goto('about:blank');
  const resolved = await page.evaluate((colors) => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 1;
    const cx = cv.getContext('2d');
    return colors.map((c) => { cx.fillStyle = c; return cx.fillStyle; });
  }, [...new Set([...CONTRAST_PAIRS_LIGHT, ...CONTRAST_PAIRS_DARK].flatMap(([, a, b]) => [a, b]))]);
  const bad = resolved.filter((r) => r === '#000000');
  if (bad.length) failures.push(`contraste: ${bad.length} colores no resueltos en canvas`);
}

for (const [, name, fg, bg] of [...CONTRAST_PAIRS_LIGHT.map((p) => ['light', ...p]), ...CONTRAST_PAIRS_DARK.map((p) => ['dark', ...p])]) {
  const r = ratio(fg, bg);
  if (r < 4.5) failures.push(`contraste AA ${name} (${fg} sobre ${bg}): ${r.toFixed(2)}:1 < 4.5`);
  else notes.push(`contraste OK ${name}: ${r.toFixed(2)}:1`);
}

// 2) per-page checks
const PAGES = [
  { path: '/resource-vault/', name: 'home' },
  { path: '/resource-vault/r/el-ultimo-kilometro/', name: 'curso' },
  { path: '/resource-vault/r/el-ultimo-kilometro/02-el-prompt/', name: 'deck' },
  { path: '/resource-vault/r/el-ultimo-kilometro/06-kit/', name: 'kit' },
];

for (const vp of [{ w: 390, h: 844, n: 'mobile' }, { w: 1280, h: 800, n: 'laptop' }]) {
  const c2 = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  const pg = await c2.newPage();
  for (const p of PAGES) {
    await pg.goto(BASE + p.path, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.waitForTimeout(300);
    const res = await pg.evaluate(() => {
      const out = {};
      out.overflowX = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      out.h1 = document.querySelectorAll('h1').length;
      out.main = !!document.querySelector('main');
      out.lang = document.documentElement.getAttribute('lang');
      // touch targets: visible clickable elements
      const small = [];
      document.querySelectorAll('a, button').forEach((el) => {
        const r = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        if (style.visibility === 'hidden' || style.display === 'none') return;
        if (r.width < 2 || r.height < 2) return;
        if (r.height < 24 && r.width < 24) small.push(`${el.tagName}.${(el.className + '').slice(0, 30)} ${Math.round(r.width)}x${Math.round(r.height)}`);
      });
      out.smallTargets = small.slice(0, 5);
      out.imgsNoAlt = [...document.querySelectorAll('img')].filter((i) => !i.alt).length;
      return out;
    });
    if (res.overflowX > 1) failures.push(`${p.name}@${vp.n}: overflow-x de ${res.overflowX}px`);
    if (res.h1 !== 1 && p.name !== 'deck') failures.push(`${p.name}@${vp.n}: ${res.h1} h1 (esperaba 1)`);
    if (!res.main) failures.push(`${p.name}@${vp.n}: sin <main>`);
    if (res.lang !== 'es') failures.push(`${p.name}@${vp.n}: lang=${res.lang}`);
    if (res.imgsNoAlt > 0) failures.push(`${p.name}@${vp.n}: ${res.imgsNoAlt} img sin alt`);
    if (res.smallTargets.length) failures.push(`${p.name}@${vp.n}: targets <24px: ${res.smallTargets.join(' | ')}`);
  }
  await c2.close();
}

// 3) deck keyboard/aria behavior
{
  const c3 = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const pg = await c3.newPage();
  await pg.goto(BASE + '/resource-vault/r/el-ultimo-kilometro/02-el-prompt/', { waitUntil: 'networkidle' });
  await pg.waitForTimeout(400);
  const before = await pg.evaluate(() => document.querySelector('[data-deck-current]').textContent);
  await pg.keyboard.press('ArrowRight');
  await pg.waitForTimeout(350);
  const after = await pg.evaluate(() => ({
    counter: document.querySelector('[data-deck-current]').textContent,
    hash: location.hash,
    hiddenSlides: document.querySelectorAll('.slide[aria-hidden="true"]').length,
    total: document.querySelectorAll('.slide').length,
    fill: document.querySelector('[data-deck-fill]').style.width,
  }));
  if (before === after.counter) failures.push('deck: flecha → no cambió el contador');
  if (after.hash !== '#2') failures.push(`deck: hash=${after.hash} esperaba #2`);
  if (after.hiddenSlides !== after.total - 1) failures.push(`deck: aria-hidden mal (${after.hiddenSlides}/${after.total})`);
  // progress fill sanity
  const fillPct = parseFloat(after.fill);
  if (!(fillPct > 0 && fillPct <= 100)) failures.push(`deck: barra de progreso=${after.fill}`);
  // grid overlay opens and focus moves in
  await pg.keyboard.press('g');
  await pg.waitForTimeout(250);
  const grid = await pg.evaluate(() => ({
    hidden: document.querySelector('[data-deck-overlay]').hidden,
    focusedIsItem: document.activeElement?.classList?.contains('deck__grid-item'),
  }));
  if (grid.hidden) failures.push('deck: tecla G no abrió el índice');
  if (!grid.focusedIsItem) notes.push('deck: al abrir el índice el foco no queda en un item (revisar)');
  await pg.keyboard.press('Escape');
  await pg.waitForTimeout(200);
  const closed = await pg.evaluate(() => document.querySelector('[data-deck-overlay]').hidden);
  if (!closed) failures.push('deck: Escape no cerró el índice');
  // notes toggle
  await pg.keyboard.press('n');
  await pg.waitForTimeout(200);
  const notesOpen = await pg.evaluate(() => getComputedStyle(document.querySelector('.slide.is-active .slide__notes')).display !== 'none');
  if (!notesOpen) failures.push('deck: tecla N no mostró las notas');
  // persistence
  await pg.reload({ waitUntil: 'networkidle' });
  await pg.waitForTimeout(400);
  const persisted = await pg.evaluate(() => document.querySelector('[data-deck-current]').textContent);
  if (persisted !== '2') failures.push(`deck: progreso no persistió tras reload (counter=${persisted})`);
  await c3.close();
}

// 4) luminance of captured shots — did backgrounds actually paint?
{
  const shotsDir = '/tmp/vault-qa/shots';
  for (const f of ['home-desktop-light-top.png', 'home-desktop-dark-top.png', 'deck-laptop-light-top.png', 'kit-laptop-dark-top.png']) {
    const p = `${shotsDir}/${f}`;
    if (!fs.existsSync(p)) { failures.push(`luminancia: falta captura ${f}`); continue; }
    const img = PNG.sync.read(fs.readFileSync(p));
    const lums = [];
    for (let i = 0; i < img.data.length; i += 4 * 997) {
      lums.push(lum(img.data[i], img.data[i + 1], img.data[i + 2]));
    }
    lums.sort((a, b) => a - b);
    const med = lums[Math.floor(lums.length / 2)] * 255;
    const isDark = f.includes('dark');
    if (isDark && med > 100) failures.push(`luminancia ${f}: mediana ${med.toFixed(0)} — el fondo oscuro no se pintó`);
    if (!isDark && med < 200) failures.push(`luminancia ${f}: mediana ${med.toFixed(0)} — el fondo claro no se pintó`);
    notes.push(`luminancia ${f}: mediana ${med.toFixed(0)} (${isDark ? 'dark' : 'light'}) OK`);
  }
}

await browser.close();
console.log('--- NOTES ---');
notes.forEach((n) => console.log('  ·', n));
if (failures.length) {
  console.log('--- FAILURES ---');
  failures.forEach((f) => console.log('  ✗', f));
  process.exit(1);
} else {
  console.log('--- ALL CHECKS PASS ---');
}
