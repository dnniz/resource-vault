---
kicker: "E9 · escala"
kind: content
notes:
  - "La cita: «Sin proceso, diez agentes son diez fuentes de caos. Con proceso, se dirigen como un equipo»."
  - "Los triggers de voz también sirven con dictado: 'run a security check', 'test the website'."
---

# E9 · Diez-quince sprints en paralelo

- **[Conductor](https://conductor.build)** corre sesiones aisladas de Claude Code en paralelo. El reparto típico del autor: una en `/office-hours` con una idea nueva, otra en `/review` de un PR, otra implementando, una cuarta en `/qa` contra staging, y seis más en otras ramas. «10-15 es el máximo práctico ahora mismo».
- **El proceso es lo que hace posible el paralelismo**: cada agente sabe exactamente qué hacer y cuándo parar. Tú diriges como un CEO: checas las decisiones que importan y dejas correr el resto.
- `/context-save` y `/context-restore` mueven el estado (git, decisiones, trabajo restante) entre workspaces, incluso en handoffs de Conductor.
- `/retro` (y `/retro global` a través de todos tus proyectos) cierra la semana con datos: commits, LOC, ratio de tests, rachas de shipping y oportunidades por persona.
- **Triggers por voz**: los skills tienen frases naturales — «run a security check» → `/cso`, «test the website» → `/qa`. No hace falta memorizar comandos.
