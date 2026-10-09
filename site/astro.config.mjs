// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages default: /resource-vault — override with BASE_PATH=/ for root deploy
const base = process.env.BASE_PATH ?? '/resource-vault';

export default defineConfig({
  site: 'https://dnniz.github.io',
  base,
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
