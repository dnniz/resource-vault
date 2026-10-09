# ADR 0001 — Stack del proyecto

Fecha: 2026-10-08 · Stack radar ejecutado: 2026-10-08

## Candidatos evaluados

| Paquete | Versión | Publicada | Licencia | Mantenimiento | Veredicto |
|---|---|---|---|---|---|
| astro | 7.3.8 | 2026-10 (repo pushed 2026-10-08) | MIT | activo, 63k★ | ✅ elegido |
| next | 16.x | — | MIT | activo | descartado: hidratación React innecesaria para un visor de contenido |
| astro + reveal.js | — | — | MIT (reveal) | activo | descartado: 100+ KB de JS y API propia; el deck es DOM estático + ~100 líneas de TS |
| hugo | — | — | Apache-2.0 | activo | descartado: validación de esquema débil (templates), sin type-safety de frontmatter |

Fuentes: registry.npmjs.org/astro/latest · api.github.com/repos/withastro/astro (consultados 2026-10-08 vía urllib).

## Decisión

**Astro 7 (static output) + vanilla TypeScript + CSS custom properties.**
Cero frameworks de UI. Razón en una frase: el activo del repo es la data y el
sitio es solo su visor — Astro da content collections que **validan el esquema
vault/v1 en build** y generan HTML estático con ~0 KB de JS de framework.

Dependencias de runtime del sitio: ninguna de terceros en el cliente (solo
fuentes self-hosteadas vía @fontsource). El deck, la nav por teclado, el progreso
y el toggle de notas son ~150 líneas de TS plano.

## Alternativas descartadas

- Next.js: SSR/hidratación innecesarios para contenido estático; budget de JS peor.
- reveal.js / slides.com embebido: lock-in de formato; las slides deben ser
  Markdown portable, no HTML de framework.
- Mantener HTML plano como el original: no escala a "muchas otras webs" ni
  valida nada; el objetivo del repo es estandarizar.

## Riesgos / disparadores de evolución

- Si un recurso futuro necesita interactividad rica (ej. playgrounds), evaluar
  islands de Astro por-página, no migrar de stack.
- Si el repo crece a decenas de recursos, añadir búsqueda client-side (pagefind)
  — decisión barata y reversible.

## Fuentes

- https://registry.npmjs.org/astro/latest — astro 7.3.8, MIT — consultado 2026-10-08
- https://api.github.com/repos/withastro/astro — pushed_at 2026-10-08, no archivado — consultado 2026-10-08
