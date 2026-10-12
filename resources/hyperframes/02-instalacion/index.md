---
title: "Instalación y CLI"
order: 2
summary: "Los dos comandos que instalan todo, cómo actualizar, y qué hace cada comando del CLI."
objectives:
  - "Instalar el core de skills y actualizarlo sin romper nada"
  - "Distinguir core set de workflows bajo demanda"
  - "Crear un proyecto y ejecutar check y render"
prerequisites: [01-que-es]
duration: "10 min"
---

La instalación son dos comandos. El primero instala el core set de skills; el
segundo refresca lo que ya está. **El segundo es idempotente**: correrlo de más no
rompe nada, solo responde que ya está al día.

```bash
# Instala o refresca el core set y todo lo ya instalado
npx hyperframes skills update

# Estado. Sale con código distinto de cero si algo está stale o falta el core
npx hyperframes skills check
npx hyperframes skills check --json
```

## Core set y workflows

El diseño es deliberadamente perezoso:

- **Core set (10 skills)**, instalado de golpe: el router `/hyperframes`, los
  domain skills (`core`, `animation`, `keyframes`, `audio`, `creative`,
  `registry`, `cli`, `studio`) y `media-use`.
- **Workflows (11)**, bajo demanda: el router corre
  `npx hyperframes skills update <nombre>` antes de entrar a uno.

Consecuencia práctica: `skills check` reporta `missing: 11` y eso es correcto, no
es un error. Solo `coreMissing > 0` indica un problema real.

| Situación | Comando |
|---|---|
| Instalar o refrescar todo lo instalado | `npx hyperframes skills update` |
| Ver estado sin tocar nada | `npx hyperframes skills check` |
| Instalar un workflow puntual | `npx hyperframes skills update pr-to-video` |
| Instalar el catálogo completo | `npx hyperframes skills` |

## El proyecto mínimo

```bash
npx hyperframes init mi-video
cd mi-video
npx hyperframes check      # valida: lint + layout + contraste
npx hyperframes render     # produce el MP4
```

`init` deja un proyecto funcional con `index.html`, `hyperframes.json` y
`meta.json`. `check` es el gate: corre antes de `render` y también antes de
`present`.

## Dónde queda instalado

El core se escribe en varias raíces a la vez. En Windows con `XDG_CONFIG_HOME`
sobreescrito, el catálogo de OmO queda en
`~/.omo-opencode/xdg-config/opencode/skills/`.

| Ruta | Rol |
|---|---|
| `~/.claude/skills/` | Claude Code. Es la ubicación que reporta `skills check` |
| `~/.agents/skills/` | universal; OpenCode la lee nativamente |
| `~/.omo-opencode/xdg-config/opencode/skills/` | catálogo de OmO |

OpenCode no necesita ninguna copia extra en `~/.config/opencode/skills/`: ya lee
`~/.agents/skills/*/SKILL.md` como ubicación global nativa. Copiar a mano es
redundante y genera drift.

## Aviso sobre `doctor`

`npx hyperframes doctor` reporta Chrome como roto si tenés una sesión de Chrome
abierta:

```text
✗ Chrome  Failed to run "chrome.exe" --version (signal SIGKILL, ETIMEDOUT).
```

Es un falso positivo. Con Chrome ya abierto, `chrome.exe --version` no imprime
nada: delega a la sesión existente y el probe se cuelga. El render headless
funciona igual. Para confirmarlo:

```bash
npx hyperframes render   # 300 frames, MP4 de 10 s, ~12 s en una RTX 5080
```