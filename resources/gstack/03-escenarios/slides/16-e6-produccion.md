---
kicker: "E6 · release"
kind: content
notes:
  - "La primera vez, o si cambia la config, /land-and-deploy hace un dry-run del pipeline antes de tocar nada irreversible."
  - "La aprobación queda atada al head exacto del PR; cambiarlo exige nueva aprobación."
---

# E6 · A producción sin sostener la respiración

**Una sola vez:** `/setup-deploy` detecta plataforma (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions o custom), URL de producción y health checks. 60 segundos, queda en tu `CLAUDE.md`.

```text
You:   /land-and-deploy

Claude: Merging PR #42...
        CI: 3/3 checks passed
        Deploy: Fly.io — deploying v2.1.0...
        Health check: https://myapp.fly.dev/health → 200 OK
        Canary: 5 pages checked, 0 console errors, p95 < 800ms

        Production verified. v2.1.0 is live.
```

- Si el deploy se rompe: reporta **qué** falló y si hay rollback disponible. Si no puede confirmar la nueva revisión, **reporta la incertidumbre** — nunca te vende una página vieja sana como prueba de éxito.
- **`/canary`** queda vigilando: ciclos por tus páginas clave, consola, rendimiento y capturas comparadas contra el pre-deploy.

```text
Cycle 3: ⚠ /dashboard — new console error: "TypeError: Cannot read
           property 'map' of undefined" at dashboard.js:142
Alert: 1 new console error after 3 monitoring cycles.
```

- Después de un deploy arriesgado, `/canary` puede dejarse corriendo periódicamente. Si algo sale de tu terminal — registrar una API key, crear una cuenta de vendor — `/ship` ofrece hacerlo por navegador **con permiso explícito por tarea**, y los passwords y pagos siguen siendo tuyos.
