# tools/qa — verificación medible del visor

Scripts Playwright sin dependencias de visión (la crítica con modelo de visión no
es fiable en el contenedor de desarrollo). Requieren:

- `npm i playwright pngjs` en un directorio aparte (p. ej. `/tmp/vault-qa`)
- Chromium headless shell rev 1223: `/opt/hermes/.playwright/chromium_headless_shell-1223/...`
- Servidor de preview corriendo: `cd site && npm run preview -- --port 4599 --host 127.0.0.1`

```bash
BASE_URL=http://127.0.0.1:4599 node capture.mjs        # 64 capturas (4 viewports × claro/oscuro × 4 páginas + estados)
BASE_URL=http://127.0.0.1:4599 node qa-measure.mjs     # contraste AA (canvas), luminancia, overflow, targets, semántica, teclado del deck → exit 1 si falla
BASE_URL=http://127.0.0.1:4599 node record-frames.mjs  # frames del deck → ffmpeg -framerate 10 -i frames/f%04d.png qa-motion.mp4
```

`qa-measure.mjs` tiene hardcodeados los pares de color de los tokens actuales en
`src/styles/tokens.css`: si cambias tokens, actualiza los pares.
