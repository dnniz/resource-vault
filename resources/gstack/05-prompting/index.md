---
title: "Cómo hablarle: prompting"
order: 5
summary: "Las tres formas de invocar skills, prompts listos para copiar y los patrones que el propio autor usa: describe el dolor, no la feature; pide el reframe; di 'be careful'."
objectives:
  - "Invocar skills por comando, por lenguaje natural o por voz"
  - "Copiar prompts probados para QA, browse, instalación y OpenClaw"
  - "Reconocer los patrones de prompting que hacen funcionar al equipo"
duration: "consulta"
---

## Tres formas de invocar

**1. Comando slash** — lo explícito: `/qa https://staging.myapp.com`.

**2. Lenguaje natural** — cada skill declara *triggers*. `/office-hours` salta solo si dices «brainstorm this», «is this worth building», «help me think through this». Y es proactivo: si describes una idea de producto nueva, entra sin que lo pidas.

**3. Voz** — los skills tienen frases voice-friendly (AquaVoice, Whisper…): «run a security check» → `/cso` · «test the website» → `/qa` · «do an engineering review» → `/plan-eng-review`. Sin memorizar acrónimos.

## Prompts listos para copiar

**Instalación** (pégalo en Claude Code — pide el bloque de CLAUDE.md de la parte 02):

```text
Install gstack: run git clone --single-branch --depth 1 \
https://github.com/garrytan/gstack.git ~/.claude/skills/gstack \
&& cd ~/.claude/skills/gstack && ./setup
```

**QA de un CLI sin tocar nada** (del README, literal):

```text
/qa-only Test this repo's CLI using its documented local fixture. Check valid
and invalid input, exit codes, stdout/stderr, and cancellation. Report only;
do not change code or tests. For each finding, include the exact command,
expected and actual results, and which checks remain untested.
```

**QA de un webhook/worker** (del README, literal):

```text
/qa Test this repo's local webhook and worker fixture. Explore duplicate
deliveries and recovery after a partial failure. Keep all effects inside
the fixture; preserve reproduced bugs in native regression tests before
repairing them.
```

**Explorar una web con el agente:**

```text
/browse staging.myapp.com — test the signup flow and check every page
I changed in this branch
```

**Segunda opinión adversarial:**

```text
/codex challenge — try to break the payment handler: concurrent charges,
idempotency, and partial failures. Max reasoning effort.
```

**Desde OpenClaw** (u otro orquestador), los cuatro patrones del README:

- «Load gstack. Run /cso» — auditoría de seguridad
- «Load gstack. Run /review» — code review
- «Load gstack. Run /qa https://...» — probar una URL
- «Load gstack. Run /autoplan, implement the plan, then run /ship» — feature end-to-end

## Los patrones que sí funcionan

**Describe el dolor, no la feature.** «Múltiples calendarios de Google, eventos con info vieja, ubicaciones malas; preparar el día me eterniza» produce un reframe y 3 enfoques. «Hazme una app de briefing» produce la app que pediste — no la que necesitas.

**Deja que desafíe tus premisas.** Tras el reframe vienen afirmaciones falsables. No las apruebes por cortesía: cada premisa aceptada se vuelve estructural en el design doc.

**Sé específico con evidencia.** «Tres developers de mi última empresa perdían 10 h/semana en esto» vale más que «creo que a los developers les gustaría».

**El momento de ejecutar es seco.** `Approve plan. Exit plan mode.` — el plan está revisado; toca construir, no filosofar.

**Di «be careful» cuando toque.** Cerca de producción, comandos destructivos o simplemente como red de seguridad: `/careful` se activa con la frase.

**Di «stop suggesting» si molesta.** Las sugerencias proactivas de skills se apagan y lo recuerda entre sesiones.

## Qué vas a ver

- **AskUserQuestion de una en una** en las reviews interactivas — las decisiones de gusto te las sube a ti; las mecánicas las resuelve.
- **`[AUTO-FIXED]`** en review para lo mecánico; pregunta antes de tocar lo ambiguo.
- **`Coverage gap`** en vez de un pase falso cuando algo no se pudo probar.
- **Recibos de egress** por cada envío fuera de tu máquina — auditable con `gstack-egress list`.
