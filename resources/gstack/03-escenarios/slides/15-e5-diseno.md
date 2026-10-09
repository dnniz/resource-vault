---
kicker: "E5 · la pipeline de diseño"
kind: content
notes:
  - "El memory de gusto (taste memory) aprende de tus aprobaciones, con decaimiento del 5% semanal — no es un setting, emerge de lo que apruebas."
  - "/design-review deja un commit atómico por fix: style(design): FINDING-NNN, bisectable."
---

# E5 · «No sé cómo debería verse»: diseño

**1. Sistema desde cero — `/design-consultation`.** Investiga el paisaje (capturas de Linear, Vercel, lo que toque), propone el sistema completo con tipografías, paleta, espaciado y motion — y separa **elecciones seguras de riesgos creativos** con su porqué. Escribe `DESIGN.md` (formato abierto, lo leen otras herramientas) y actualiza tu `CLAUDE.md`.

**2. Explorar variantes — `/design-shotgun`.** 4-6 mockups con IA, tablero de comparación en tu navegador, feedback («más aire», «titular más atrevido»), otra ronda. Repite hasta que ames uno.

**3. HTML de producción — `/design-html`.** El mockup aprobado se vuelve HTML/CSS que funciona: texto que reflowa, alturas que se ajustan, 30 KB, cero dependencias, detección de React/Svelte/Vue.

**4. Auditoría en vivo — `/design-review`.** 80 ítems sobre el sitio real, arregla lo que encuentra y verifica con capturas antes/después:

```text
Design Score: C → B+  |  AI Slop Score: D → A
style(design): FINDING-003 — remove gradient hero, use bold typography
9 fixes applied (8 verified, 1 best-effort). 3 deferred.
```

Para revisar el **plan** antes de codificar, el equivalente es `/plan-design-review`: puntúa dimensiones 0-10, dice cómo sería un 10, y edita el plan para llegar.
