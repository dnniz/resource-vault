---
title: "Arquitectura: por qué funciona"
order: 6
summary: "Sección técnica. Cómo está construido HyperFrames, por qué el determinismo no es un detalle, y qué límites tiene el enfoque."
objectives:
  - "Entender el patrón de router y capa de intención"
  - "Saber qué significa seek-safe y por qué es la columna vertebral del sistema"
  - "Conocer los trade-offs antes de comprometerte a un pipeline"
  - "Entender por qué los medios se congelan en archivos locales"
prerequisites: [05-catalogo]
duration: "consulta"

---

Esta parte es la que explica por qué el framework se comporta como se comporta.
No hace falta para usarlo. Sirve para decidir si dependés de él.

## El problema que resuelve

El puente web-a-video tradicional está roto por diseño. Los navegadores
renderizan en **tiempo real y best-effort**. La codificación de video exige
**determinismo frame por frame**. De ahí vienen los síntomas que cualquiera que
intento automatizar video conoce: condiciones de carrera, cuadros perdidos,
fallos de carga asíncrona de medios, y desincronización de audio.

HyperFrames no envuelve ese problema. Cambia el contrato: el motor **no reproduce
la línea de tiempo, la posiciona**.

## La capa de router

En el tope está `/hyperframes`, que no es un skill más: es un mapa de
capacidades y una capa de intención.

- **Patrón**: API Gateway adaptado al manejo de contexto de un LLM
- **Qué resuelve**: un modelo no puede cargar 20 skills completos sin que la
  calidad se degrade. El router carga solo el workflow que corresponde
- **Qué gana el agente**: pedir un deck no gasta tokens cargando la lógica de
  recuts de entrevistas

Antes de construir nada, el router confirma el encargo y escribe un `BRIEF.md`.
Ese archivo es el artefacto, no la conversación: una sesión posterior retoma
desde ahí sin volver a preguntar.

## Workflows contra capacidades

| Capa | Qué es | Cantidad |
|---|---|---|
| Workflows de creación | El andamiaje de un tipo de pieza | 11 |
| Skills de dominio | Las primitivas técnicas | 9 |
| Router | El punto de entrada | 1 |

Los workflows cargan las capacidades que necesitan, bajo demanda. Un agent que
solo hace product launches nunca carga las reglas de `talking-head-recut`.

## El contrato de composición

El framework define cómo entiende el tiempo, sin JavaScript asíncrono:

- **`class="clip"`** marca un tramo con tiempo. El framework es dueño de su
  visibilidad: nunca animes la opacidad o el `display` de un clip para esconderlo
- **`data-start`, `data-duration`, `data-track-index`** definen cuándo empieza,
  cuánto corre y en qué pista se sienta. Dos clips en la misma pista no pueden
  solaparse
- **`window.__timelines["<id>"]`** recibe exactamente una línea de tiempo pausada
  por composición, construida sincrónicamente al cargar

## Seek-safe: la idea que sostiene todo

Este es el concepto central, y el que más cuesta internalizar.

En un render determinista, el motor tiene que poder saltar al **frame 1450** y
saber exactamente cuál es el estado del DOM, **sin reproducir los 1449
anteriores**. Por eso toda animación tiene que ser buscable.

Las consecuencias son duras:

- Las líneas de tiempo se declaran `paused: true`. Si hacés `.play()`, el motor
  no tiene forma de arbitrar ese frame.
- Las inserciones son **absolutas en el timeline de la composición**, no offsets
  respecto de la escena.
- No puede haber `repeat: -1`. Los loops infinitos rompen el capturador. Hay que
  calcular la cantidad exacta de repeticiones desde la duración.
- No puede haber `Math.random()`, `Date.now()` ni lógica de tiempo de reloj.
  Si necesitás pseudo-aleatoriedad, usá un PRNG con semilla.
- Las líneas de tiempo se construyen sincrónicamente. Nada de `await`,
  `setTimeout` ni promesas: el motor lee `window.__timelines` de forma sincrónica
  después de cargar la página.

El sintoma de romper esto es característico: **el preview se ve bien y el render
sale mal**, con saltos o cuadros fuera de lugar.

## El Media OS

`media-use` resuelve cada necesidad de medios a un **archivo local congelado** más
un registro en un ledger.

Por qué importa: garantiza que un video renderizado hoy se vea y suene igual
dentro de seis meses. No hay URLs que den 404, ni límites de API que corten un
render en CI, ni fuentes web que cambien entre corridas.

Es la misma disciplina que "no hacer requests de red durante el render", pero
con tracking: el asset no solo se congeló, quedó registrado de dónde vino.

## Alternativas y cuando conviene cada una

| Opción | Cuándo |
|---|---|
| HyperFrames | Pipeline automatizado donde el LLM genera el contenido creativo |
| Remotion | Equipo que escribe React y quiere componentes con props y estado |
| After Effects / Resolve | Producción manual con dirección de arte humana |
| Puppeteer a mano | Solo si estás construyendo tu propia infraestructura |

La migración desde Remotion es **de ida**. HyperFrames ingiere composiciones
React y las porta a HTML, pero no pretende soportar React como entorno de
authoring en el futuro.

## Trade-offs honestos

- **Diseñado para agentes, no para personas.** Si querés escribir un script a mano
  para renderizar un video corto, la abstracción se siente pesada. Tenés que
  entender los skills, la capa de intención y el contrato de composición.
- **La exportación lineal de un deck todavía no existe.** Si un deck tiene ramas,
  hoy no hay MP4 del main line. Se presenta vivo.
- **El stack de skills es una dependencia real.** No manejás paquetes npm;
  manejás conjuntos de instrucciones para modelos. Se actualizan con
  `npx hyperframes skills update` y eso es una decisión de diseño, no un bug.
- **El costo de llegar a un slide es alto en el primer video.** El primer render
  de un proyecto real toma tiempo. A partir del segundo, la iteración es de
  segundos.

## Fuente

El análisis de arquitectura de esta parte sigue de cerca el teardown publicado
por Doddi Priyambodo (DO-AI, Bicara IT) del 19/09/2026, contrastado con la
documentación oficial y con la verificación local del CLI 0.8.149.

- <https://github.com/heygen-com/hyperframes>
- <https://bicarait.com/posts/cool-products-2026-09-19-hyperframes-video-synthesis>