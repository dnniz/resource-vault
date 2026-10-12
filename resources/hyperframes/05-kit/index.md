---
title: "Kit de referencia"
order: 5
summary: "Comandos, atributos, reglas de lint, catálogo y troubleshooting en un solo lugar."
objectives:
  - "Consultar comandos y atributos sin volver al curso"
  - "Diagnosticar los errores de lint más frecuentes"
  - "Encontrar bloques prontos en el catálogo"
prerequisites: [04-decks]
duration: "consulta"
---

Referencia rápida. No hace falta leerla en orden: buscá lo que necesites.

## CLI

| Comando | Qué hace |
|---|---|
| `npx hyperframes init <dir>` | Crea un proyecto con `index.html`, `hyperframes.json`, `meta.json` |
| `npx hyperframes check` | Gate previo: lint + layout + movimiento + contraste. **Correr siempre antes de render o present** |
| `npx hyperframes render` | Produce el MP4. **Nunca sobre un deck** |
| `npx hyperframes present <dir>` | Sirve el deck vivo y abre el modo presentador (puerto 3004 por defecto) |
| `npx hyperframes preview <dir>` | Abre Studio para editar la composición |
| `npx hyperframes snapshot` | Stills por slide |
| `npx hyperframes doctor` | Verifica prerrequisitos. **Miente sobre Chrome si tenés Chrome abierto** |
| `npx hyperframes catalog --query "<visual>" --json` | Busca bloques en el registro, sin instalar nada |
| `npx hyperframes add <nombre>` | Copia el bloque al proyecto para customizarlo |
| `npx hyperframes skills update` | Refresca el core set y todo lo instalado |
| `npx hyperframes skills check` | Estado de las skills |

## Atributos de composición

### Escena

| Atributo | Obligatorio | Descripción |
|---|---|---|
| `data-composition-id` | sí | Identificador. Debe coincidir con la clave de `window.__timelines` |
| `data-start` | sí | Inicio en segundos, absoluto en el timeline |
| `data-duration` | sí | Duración en segundos |
| `data-width` / `data-height` | recomendado | Viewport. `1920` x `1080` por defecto |
| `data-no-timeline` | no | Marca la escena como estática |
| `data-label` | no | Etiqueta legible, la usan las herramientas |

### Clip

| Atributo | Obligatorio | Descripción |
|---|---|---|
| `class="clip"` | sí | Lo que el motor muestra y oculta |
| `data-track-index` | recomendado | Orden de capa |
| `data-start` / `data-duration` | sí | Ventana de visibilidad |
| `data-media-start` | no | Offset dentro del archivo de origen |
| `data-has-audio="true"` | no | Conserva el audio nativo audible |

## Reglas de lint

El lint de slideshow falla el build si:

1. Un `slide.sceneId` no resuelve a una escena existente.
2. Un `hotspot.target` no referencia un `id` de `slideSequences`.
3. Un tiempo de fragmento cae fuera del rango `[start, end]` de su slide.
4. Dos slides de la línea principal se solapan en el tiempo.
5. Una timeline está registrada bajo una clave sin `data-composition-id` que coincida.
6. Una slide de rama aparece también en el array `slides` principal.

## Reglas de escritura de slides

Estas son restricciones duras, no sugerencias:

- **El titular es una afirmación completa**, no una etiqueta. Escribí "Las SMEs pierden 14 horas por semana en agenda manual", no "Problema de agenda".
- **Una idea y un visual por slide.** Si tenés dos bloques de viñetas, dividí la slide.
- **El punto fuerte va primero**, tanto en el slide como en el orden del deck.
- **Tamaño mínimo de fuente 30pt equivalente.** A 1920×1080 el titular va de 72 a 96 px y el cuerpo a 48 px. Nunca bajes de 40 px algo que la audiencia deba leer.

## Catálogo

~400 bloques y componentes. Buscá antes de construir a mano:

```bash
npx hyperframes catalog --query "terminal" --json
npx hyperframes catalog --query "animated data chart" --json
npx hyperframes add code-terminal-run
```

Bloques útiles para cursos y documentación:

| Área | Bloques |
|---|---|
| Código | `terminal-simulator`, `code-terminal-run`, `code-snippet-dark-2026`, `code-typing` |
| Datos | `data-chart`, `animated-bar-chart`, `bar-chart-race`, `chart-story` |
| Títulos | `titlecard-calm`, `canopy-part-title`, `glass-hero`, `code-slice-hero` |

## Troubleshooting

### `timeline_id_mismatch`

El lint pide que la clave de `window.__timelines` coincida con un
`data-composition-id` existente. Renombrá la clave o el `data-composition-id`.
**No** crees una composición master solo para usar la clave `root`: eso rompe el
contrato de slideshow.

### `Chrome failed to run ... SIGKILL, ETIMEDOUT`

Falso positivo cuando tenés una sesión de Chrome abierta. Verificá con:

```bash
npx hyperframes render
```

Si el render falla de verdad: `npx hyperframes browser ensure --force`, o
apuntá `HYPERFRAMES_BROWSER_PATH` a un binario que responda.

### El render sale con saltos

Casi siempre es animación no buscable. Revisá que toda timeline esté en
`paused: true`, registrada en `window.__timelines`, y que las posiciones de
inserción sean absolutas.

### El deck no navega

- Confirmá `tabindex="0"` en `<hyperframes-slideshow>`: sin focus, las flechas mueren.
- Confirmá que la **isla está duplicada** en el wrapper. El componente lee desde su propio `innerHTML`, no desde la composición.
- Si usás `present ./composition`, no sirvas un `index.html` propio en la raíz: `present` ya inyecta su chrome y apuntarlo a `.` duplica el wrapper y produce una recursión de iframes.
- Incluí **todas** las escenas en el `postMessage` de timeline, incluidas las de rama. Si falta una, el hotspot entra a una slide en blanco.

### El video sale diferente en cada corrida

Algo no es determinista: `Math.random()`, `Date.now()`, una fuente web no
embebida o un asset remoto. Descargá todo antes de renderizar.

## Fuentes

- Documentación: <https://hyperframes.heygen.com/introduction>
- Guía de skills: <https://hyperframes.heygen.com/guides/skills>
- Guía de slideshow: <https://hyperframes.heygen.com/guides/slideshow>
- Referencia del esquema HTML: <https://hyperframes.heygen.com/reference/html-schema>
- Código: <https://github.com/heygen-com/hyperframes> (Apache-2.0)