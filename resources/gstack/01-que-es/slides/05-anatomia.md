---
kicker: "Qué es · anatomía"
kind: content
notes:
  - "Inspeccionable al 100%: no hay binario mágico. Si quieres saber qué hace /review, lee su SKILL.md."
  - "El preamble imprime líneas KEY: value que las skills usan como estado (branch, telemetry, learnings...)."
---

# Cómo funciona por dentro

- Cada skill es una **carpeta con un `SKILL.md`**: instrucciones en Markdown (el "criterio" del especialista) + un *preamble* en bash que corre al invocar.
- El preamble hace: chequeo de updates (1×/hora, silencioso), carga de **learnings** previos del proyecto, detección de sesión (interactiva, headless, Conductor) y telemetría opt-in.
- Los helpers en `bin/` (decenas de binarios pequeños) hacen el trabajo determinista: hashes del working tree, recibos de egress, gestión de versiones, registro de reviews.
- Todo el estado vive fuera de tu repo, en `~/.gstack/` — tu proyecto no queda lleno de archivos vendidos.
- Open source **MIT**: bifórcalo, léelo, cámbialo. No hay tier premium ni lista de espera.
