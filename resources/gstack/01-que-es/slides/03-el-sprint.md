---
kicker: "Qué es · el proceso"
kind: content
notes:
  - "El orden importa: eng review siempre es el último gate del plan, para revisar el plan final y no uno viejo."
  - "Cada fase deja un artefacto que la siguiente lee: design doc → plan revisado → test plan → reporte QA → PR."
---

# gstack es un proceso: el sprint

![El sprint de gstack: Think, Plan, Build, Review, Test, Ship y Reflect, con el comando que lidera cada fase](../../assets/sprint-pipeline.png)

- **Cada skill alimenta a la siguiente**: `/office-hours` escribe un design doc que `/plan-ceo-review` lee; `/plan-eng-review` escribe un test plan que `/qa` recoge; `/review` caza bugs que `/ship` verifica arreglados.
- Nada se cae entre grietas porque **cada paso sabe qué produjo el anterior**.
- La regla de oro del autor: si vas a usar solo un comando, usa varios de este orden — no comandos sueltos al azar.
