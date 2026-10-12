---
title: "Referencia de comandos"
order: 8
summary: "Los comandos de HyperFrames ordenados por etapa: instalar, enrutar, validar, producir. Qué hace cada uno, cuándo usarlo y cuándo no. Con el error de directorio que rompe todo."
objectives:
  - "Instalar las skills en el agente correcto y refrescarlas sin romper nada"
  - "Entrar por el router o invocar un workflow directo, y saber cuándo conviene cada vía"
  - "Validar una composición desde el directorio correcto y leer el reporte sin autoengañarte"
  - "Producir el resultado correcto: MP4 para video, deck servido para presentación"
prerequisites: [07-kit]
duration: "consulta"
---

Esto es referencia, no tutorial. Cada comando dice qué hace, cuándo lo usás y
cuándo no. La tabla corta de la parte 07 sigue siendo el resumen; esta parte es
la versión larga.

---

## Etapa 1 — Instalar y mantener fresco

### `npx hyperframes skills check`

Verifica el estado de las skills instaladas y te dice cuáles están disponibles
pero no instaladas.

Salida real:

```text
  Location  C:\Users\denid\.claude\skills (claude-code)
  ✓ 11 current   ◦ 10 available on demand
  Available on demand (installed when their workflow first runs):
    ◦ embedded-captions
    ◦ faceless-explainer
    ◦ figma
    ◦ general-video
    ◦ motion-graphics
    ◦ music-to-video
    ◦ pr-to-video
    ◦ product-launch-video
    ◦ remotion-to-hyperframes
    ◦ talking-head-recut
  ◇  Installed skills are up to date
```

**Leé bien esa salida**: los 10 workflows opcionales **no están instalados**.
Se instalan solos la primera vez que su workflow corre. `check` no los lista como
faltantes porque eso es lo esperado.

| Campo | Qué te dice |
|---|---|
| `Location` | Dónde vive el store canónico de skills. Ver la nota de la etapa 6 |
| `✓ 11 current` | Cuántas skills están al día |
| `◦ 10 available on demand` | Cuántas se instalarán bajo demanda |
| `◇ Installed skills are up to date` | No hay nada que refrescar |

### `npx hyperframes skills update`

Instala o refresca el set core **más** cualquier skill de HyperFrames que ya
esté en la instalación global, y después enlaza esos bundles en los agentes
compatibles.

| Lo que hace | Lo que **no** hace |
|---|---|
| Refresca el core | No agrega todos los workflows opcionales |
| Toma las skills de HyperFrames de la instalación global | No instala workflows que no estén ya |
| Enlaza los bundles a los agentes compatibles | No borra nada |

### `npx hyperframes skills update pr-to-video`

Actualiza un workflow nombrado. Usalo cuando el problema es uno solo y no
querés que se mueva todo lo demás.

### `npx skills add heygen-com/hyperframes`

Instalador interactivo. Elegí **Core Skills**.

### `npx skills add heygen-com/hyperframes --all`

Instala todo, workflows opcionales incluidos. Solo si de verdad querés el set
completo instalado de entrada.

### `npx skills add heygen-com/hyperframes --skill hyperframes-animation`

Instala una skill puntual por nombre.

### `npx hyperframes skills`

Lista el set publicado completo, sin instalar nada.

### Después de instalar: sesión nueva obligatoria

Skills nuevas no aparecen en una conversación ya abierta. **Arrancá un chat
nuevo del agente** después de instalar. Si no lo hacés, el agente sigue
respondiendo con el contexto viejo y parece que la instalación falló.

### Troubleshooting, cuatro pasos

| Paso | Qué hacés | Qué resuelve |
|---|---|---|
| 1 | Abrí una sesión nueva | Contexto viejo que no ve las skills nuevas |
| 2 | Confirmá que el directorio de skills es el del agente que usás | El agente leyó otra carpeta |
| 3 | `skills check` | Ver el estado real |
| 4 | `skills update` si están viejas | Refrescar el contenido |

En ese orden. No saltes al 4 antes del 3.

---

## Etapa 2 — El agente: plugins y skills

### Prerrequisitos

| Requisito | Versión |
|---|---|
| Node.js | 22 o superior |
| npm | cualquiera compatible |
| FFmpeg | instalado y en el PATH |

### Ruta de instalación por agente

| Agente | Ruta de instalación |
|---|---|
| Claude Code | Marketplace de HyperFrames en GitHub |
| Copilot CLI | Marketplace de HyperFrames en GitHub |
| VS Code / Copilot | Agregar el marketplace de GitHub en la vista de Extensiones |
| Cursor | Importar por un marketplace de equipo, o cargar un plugin local |
| Gemini CLI | Instalar la extensión de HyperFrames desde GitHub |
| Codex | Usar tu plugin de HyperFrames existente |
| **OpenCode** | **Usar standalone skills** |

**OpenCode no tiene ruta de plugin. Standalone skills es la ruta correcta y la
única.** No busques un marketplace que no existe para OpenCode.

### Una sola vía por agente

Elegí **un** método de instalación por agente. Nunca los dos: instalás por plugin
y por standalone skills, terminás con dos copias del mismo contenido, cada
actualización toca una y la otra queda vieja, y no sabés cuál está corriendo.

### Si estás dentro de un plugin

Cuando el agente está corriendo **dentro de un plugin**, tiene que usar el
launcher del bundle del plugin. **No** debe correr `npx hyperframes skills
update`: eso escribe en el store de skills del usuario, fuera del bundle, y
desalinea lo que el plugin declaraba.

### Comandos de Claude Code (solo como referencia)

> **No aplican a OpenCode.** Si también usás Claude Code, estos son los comandos
> de ese plugin. Para OpenCode, volvé a la tabla de skills standalone.

| Comando | Qué hace |
|---|---|
| `claude plugin marketplace add heygen-com/hyperframes` | Agrega el marketplace |
| `claude plugin install hyperframes@hyperframes` | Instala el plugin |
| `claude plugin details hyperframes` | Muestra el inventario |

El inventario de `claude plugin details hyperframes` debería incluir
`hyperframes`, `general-video` y `media-use`. Si falta uno, la instalación está
incompleta.

---

## Etapa 3 — El router `/hyperframes`

`/hyperframes` es el punto de entrada. No es un workflow más: es un mapa de
capacidades. Vos decís qué material tenés y el router elige el workflow.

| Lo que entregás | Workflow que elige |
|---|---|
| Un sitio web de producto o un brief de producto | Product launch video |
| Un tema o un guion, sin captura de sitio | Faceless explainer |
| Un pull request de GitHub | PR-to-video |
| Material talking-head ya grabado | Captions, o un recut diseñado |
| Un track de música | Video guiado por la música |
| Una animación corta con criterio de diseño | Motion graphic |
| Una presentación | Slideshow |
| Un archivo o un frame de Figma | Import de Figma |
| Cualquier cosa fuera de esas formas | General video |

**Lo normal es entrar por `/hyperframes`.** El router hace el trabajo de
decidir.

**También podés invocar un workflow directo** cuando ya sabés cuál es el
correcto. Es más rápido y gasta menos contexto, a costa de que si te equivocás
de workflow no hay nadie que te redirija. Cuando tenés el material ya
clasificado, la vía directa es la buena.

---

## Etapa 4 — Construir y validar

### `npx hyperframes check`

Corre lint, layout, movimiento y contraste. Es el comando que corre antes de
renderizar o presentar.

Salida real verificada, de un proyecto que pasó:

```text
 0 error(s), 2 warning(s), 0 info(s)
Layout
  ◇ 0 issues across 9 sample(s)
Contrast
  ◇ 35/35 text checks pass WCAG AA
◇  Check passed
```

Los warnings no impiden pasar. Los errores sí.

### El error más importante del curso: `check` desde el directorio equivocado

**`check` tiene que correrse desde el directorio que contiene la composición.**

Corrido desde el directorio padre del proyecto, toma el archivo equivocado como
composición raíz y reporta cerca de **30 errores falsos**:

| Error | Qué es realmente |
|---|---|
| `root_missing_composition_id` | Artefacto de la raíz mal detectada |
| `root_missing_dimensions` | Artefacto |
| `missing_timeline_registry` | Artefacto |
| `slideshow_unresolved_ref` (uno por slide) | Artefacto |

**Síntoma**: escenas que obviamente existen aparecen sin resolver. Slides que
abriste hace un minuto aparecen como referencias rotas. Nada de eso es real.

Caso verificado, mismos archivos:

| Desde | Resultado |
|---|---|
| `hyperframes-deck\` | 30 errores |
| `hyperframes-deck\composition\` | 0 errores |

Los errores aparecen **justo cuando la composición está bien**. Es la señal de
que estás en el directorio equivocado. Bajá un nivel y corré de nuevo antes de
tocar una línea de código.

### Los dos warnings que aparecen en la práctica

| Warning | Qué significa | Qué hacer |
|---|---|---|
| `css_transition_used` | Una `transition` de CSS corre sobre el reloj del navegador y no se puede buscar de forma determinista | Mové el cambio visual a la línea de tiempo GSAP pausada |
| `composition_file_too_large` | La composición pasó el tamaño razonable | Partila en sub-composiciones |

El primero es el que más cuesta entender: `check` te avisa, pero si lo ignorás el
preview se ve perfecto y el render sale mal. Es exactamente el fallo "el preview
se ve bien y el render sale mal" de la parte 07.

### `npx hyperframes catalog --query <tema> --json`

Busca bloques en el registro. El **`--json`** es lo que te deja parsear la
salida y escolher con criterio.

**No necesitás proyecto, ni cuenta, ni instalación previa** para buscar en el
registro. Podés explorar el catálogo antes de decidir si vas a usar HyperFrames.

### `npx hyperframes add <bloque>`

Copia un bloque del registro al proyecto. Se usa después de `catalog`, no
antes.

---

## Etapa 5 — Producir

### Deck: `npx hyperframes present ./composition`

Sirve el deck y abre el modo presentador. Apuntá al `./composition`, no a un
`index.html` propio en la raíz: si hacés eso, `present` duplica el wrapper y
produces una recursión de iframes (ver parte 07).

**Un slideshow nunca se renderiza a MP4.** Te da un archivo truncado, sin
ningún aviso de que pasó. Si querés un video del deck, ese es otro proyecto y
otra decisión.

### Video: `npx hyperframes render`

| Flag | Qué hace |
|---|---|
| `-o`, `--output` | Ruta del archivo de salida |
| `--fps` | Entre 1 y 240. Por defecto el `data-fps` raíz de la composición, si no, 30 |
| `-w`, `--workers` | Cantidad de workers, o `auto` |
| `--quality` | `draft`, `looks`, `delivery`, `standard/high`. Default: `looks` (CRF 16) |
| `--format` | `mp4`, `webm`, `mov`, `gif`, `png-sequence`, `hls` |
| `--gpu` | Render por GPU |
| `--strict` | Falla si el lint tiene errores |
| `--strict-all` | Falla si el lint tiene errores **o** warnings |
| `--lint-verbose` | Lint detallado |
| `--debug` | Salida de debug |
| `--gif-loop` | Loop en salida GIF |

Cada worker lanza un proceso de Chrome de alrededor de 256 MB. Bajá los workers
si la máquina se queda sin memoria.

Reporte real de una corrida sana:

```text
 816.4 KB · 13.0s video · rendered in 21.1s
   screenshot capture · hardware gpu · compile 3.7s · extract 0.0s · audio 0.0s · probe 0.0s · setup 0.7s · capture 14.7s · encode 1.8s · assemble 0.1s
```

### Lo que el render cuesta, con números

| Dato | Valor |
|---|---|
| Composición | 13 segundos |
| Resolución | 1920x1080 |
| Frames | 390 |
| Workers | 4 |
| Tiempo de render | 21 segundos |

Renderizar es barato. Lo caro es **arreglar el layout antes de renderizar**.
Cualquier minuto que gastes renderizando para ver si algo está bien es un minuto
tirado: el preview y `check` te dan la misma información por una fracción del
costo.

---

## Etapa 6 — El entorno verificado

Estado real en la máquina donde se construyó el deck del curso:

| Componente | Versión |
|---|---|
| Node | v24.21.0 |
| npm | 11.19.0 |
| ffmpeg | 9.0.2 |

### Las skills, en tres raíces

Las mismas 11 skills, instaladas de forma idéntica, en tres ubicaciones:

| Raíz |
|---|
| `C:\Users\denid\.claude\skills` |
| `C:\Users\denid\.agents\skills` |
| `C:\Users\denid\.omo-opencode\xdg-config\opencode\skills` |

Las 11:

`hyperframes`, `hyperframes-animation`, `hyperframes-audio`, `hyperframes-cli`,
`hyperframes-core`, `hyperframes-creative`, `hyperframes-keyframes`,
`hyperframes-registry`, `hyperframes-studio`, `media-use`, `slideshow`.

### La nota que evita un pánico

`skills check` reporta:

```text
  Location  C:\Users\denid\.claude\skills (claude-code)
```

Y parece que solo Claude Code tiene las skills. **No es así.**

| Lo que ves | Lo que es |
|---|---|
| `Location ...\.claude\skills` | El **store canónico** de skills |
| `(claude-code)` | El agente que resuelve primero, no el único que las tiene |

El CLI imprime la ubicación canónica. OpenCode resuelve su propia copia en su
propia raíz. **No entres en pánico y no reinstales**: reinstalar para "arreglar"
esto te mete el problema de la etapa 2, tener dos métodos de instalación
compitiendo.

---

## Orden recomendado, de punta a punta

| Paso | Comando | Por qué en ese orden |
|---|---|---|
| 1 | `npx hyperframes skills check` | Ver el estado antes de tocar nada |
| 2 | Sesión nueva del agente | Sin esto, las skills no existen para el agente |
| 3 | `/hyperframes` | El router elige el workflow |
| 4 | `npx hyperframes catalog --query <tema>` | Ver si ya existe el bloque que necesitás |
| 5 | `npx hyperframes add <bloque>` | Reutilizar en vez de reconstruir |
| 6 | `npx hyperframes check` **desde el directorio de la composición** | Layout, movimiento y contraste |
| 7 | `npx hyperframes preview` | Iterar en vivo mientras editás |
| 8 | `npx hyperframes present ./composition` **o** `npx hyperframes render` | Deck servido, o MP4. Nunca los dos sobre lo mismo |

## Cuándo NO usar cada comando

| Comando | Cuándo **no** |
|---|---|
| `render` | Sobre un deck. Nunca |
| `present` | Sobre una composición que querés enviar como archivo |
| `skills update` | Cuando estás dentro de un plugin. Usá el launcher del bundle |
| `check` desde el padre del proyecto | Nunca. Es la causa de los 30 errores falsos |
| `add` | Antes de buscar con `catalog` |
| Instalación por plugin y por skills | Nunca las dos para el mismo agente |

## Fuentes

- Guía de skills e instalación: <https://hyperframes.heygen.com/guides/skills>
- Guía de plugins: <https://hyperframes.heygen.com/guides/plugins>
- Índice completo de la documentación: <https://hyperframes.heygen.com/llms.txt>
- Código: <https://github.com/heygen-com/hyperframes> (Apache-2.0)