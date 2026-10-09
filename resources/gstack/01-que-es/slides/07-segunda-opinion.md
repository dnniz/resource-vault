---
kicker: "Qué es · segunda opinión"
kind: content
notes:
  - "El gate de severidad: cualquier P1 = FAIL del review externo."
  - "El routing sigue al harness: desde Codex la segunda opinión es Claude (/claude-code), y viceversa."
---

# Dos doctores, mismo paciente: /codex

- `/codex` trae a **OpenAI Codex CLI** a revisar tu diff de forma independiente (en Codex, el papel inverso lo hace `/claude-code`).
- **Tres modos**:
  - `review` — lectura completa del diff con veredicto PASS/FAIL y severidades P1/P2/P3
  - `challenge` — modo adversarial: intenta romper tu código (edge cases, carreras, seguridad)
  - `consult` — conversación con sesión continua: «¿estoy pensando esto bien?»
- **Análisis cruzado**: cuando `/review` (Claude) y `/codex` (OpenAI) revisaron la misma rama, gstack compara:
  - **OVERLAP** — lo que ambos vieron (confianza alta, casi seguro real)
  - **UNIQUE TO X** — perspectiva distinta de cada modelo
- El acuerdo de dos modelos es una señal fuerte, **no una orden**: verás la recomendación y decidirás tú.
