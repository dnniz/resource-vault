---
title: "Escenarios reales de uso"
order: 9
summary: "Tres sistemas que existen y funcionan: un editor automático de talking-head, el prompt inverso para decidir dónde animar, y un deck de cliente con sus tres bugs. Con lo que se aprendió."
objectives:
  - "Ver un pipeline completo de edición de video automatizado y las reglas que lo sostienen"
  - "Usar el prompt inverso para encontrar los momentos que merecen una animación"
  - "Leer tres bugs reales de layout y el tipo de error que ningún validador detecta"
prerequisites: [04-prompts-video, 08-comandos]
duration: "consulta"
---

Acá no hay escenarios hipotéticos. Los tres son sistemas que se construyeron,
se corrieron y se verificaron. Cuando algo no se midió, no está escrito.

---

## Escenario A — El sistema que edita talking-head por vos

Fuente: un documento interno. Es un sistema que funciona, no una propuesta.

### El pipeline, en orden

| # | Etapa | Qué hace |
|---|---|---|
| 1 | Transcripción | faster-whisper `large-v3-turbo`, **conservando los timings de palabra** |
| 2 | Corte de silencios | ffmpeg corta por volumen, dejando una pausa natural. Nunca corta dentro de una palabra |
| 3 | Tomas repetidas | Detecta tomas repetidas y conserva la última buena |
| 4 | Control | Retranscribe el video editado y reporta **cada palabra perdida** en un corte |
| 5 | Audio | Normaliza a **-17 LUFS** y acelera **como máximo 1.15x**. Nunca acelera encima de una aceleración |
| 6 | Intro | Captions grandes con la palabra clave resaltada, más tarjetas animadas hechas con HyperFrames, ancladas a las palabras realmente dichas. Muestra lo que **no** se está diciendo: logos, datos. Nunca repite el mismo visual |
| 7 | Assembly | Intro + cuerpo + cierre en 1440p, y **abre el resultado para revisión** |
| 8 | Publicación | YouTube no listado, con título, thumbnail, descripción con capítulos derivados de la transcripción, y un primer comentario |

La etapa 4 es la que sostiene todo lo demás. Sin ella, cada corte es una
apuesta.

### El pedido diario, textual

Esto es lo que se pide, una línea, todos los días:

```text
Editá este video, hacele la intro, sacale los silencios al máximo, dejalo todo preparado para subirlo a
YouTube y, cuando termines de editarlo, abrímelo.
```

Es literal. No hace falta que te acuerdes de las ocho etapas: el sistema las
tiene.

### Herramientas

| Herramienta | Rol |
|---|---|
| Claude Code | Construye y corre el sistema |
| faster-whisper | Transcripción a nivel de palabra |
| ffmpeg | Cortes, audio y assembly |
| HyperFrames | La intro animada |
| OBS | Grabación |

### Las seis reglas aprendidas

Estas son la parte reutilizable. El pipeline se puede reescribir; estas no se
negocian.

| # | Regla | Por qué |
|---|---|---|
| 1 | Cortá en el silencio, nunca dentro de la palabra | Un corte a mitad de palabra se escucha. Un corte en el silencio no |
| 2 | Dos tomas de lo mismo, quedate con la última | El segundo intento suele estar mejor, casi siempre por monotonía |
| 3 | La forma de hablar del hablante no se toca | Las groserías, los nombres, los números son estilo. Cortás la toma repetida, no la personalidad |
| 4 | Una palabra larga puede esconder una toma entera | Hay que escuchar esas partes por separado antes de cortar |
| 5 | No pasar de 280 palabras por minuto | Más allá de eso, se quejan en los comentarios |
| 6 | Control significa una segunda transcripción | Mirar la línea de tiempo a ojo no es control |

### La puerta humana

**Mirá el video entero una vez antes de publicar.** El sistema propone, la
persona decide. Esa etapa no se automatiza, y es la que evita publicar algo que
técnicamente pasó el control pero que suena mal.

---

## Escenario B — El prompt inverso

Ya tenés la transcripción con palabras y timestamps. Lo que querés saber es
**dónde** ayuda una animación. Este es el prompt de mayor apalancamiento de
toda esta parte:

```text
Here's the word-level transcript of my video. Find the five moments where an animation would help the viewer, research the real numbers for each, then build a short HTML animation for each moment in my design system, timed to the timestamps, and render each one to MP4 with HyperFrames. Save them to /animations.
```

### Por qué funciona

| Lo que hace el prompt | Por qué importa |
|---|---|
| No pide animaciones. Pide **encontrar los momentos** que merecen una | Si pedís cinco animaciones, recibís cinco animaciones. Si pedís que las encuentre, recibís las cinco que importan |
| Pide **investigar los números reales** de cada momento | La animación queda anclada a un dato, no a una intuición. Es el mismo principio del curso: el visual demuestra |
| Constriñe al **design system** del viewer | No te devuelve un MP4 ajeno a tu estética |
| Ancla al **timestamp** de la transcripción | No te devuelve un video suelto que hay que encontrarle el lugar |
| Sale un **MP4 por momento** | Cada uno se tira en la edición de forma independiente |

### El contraste con la tesis del curso

| Caso | Enunciado |
|---|---|
| El deck (escenario C) | El visual **demuestra** lo que el texto afirma |
| Este caso | El visual **rellena un hueco** que las palabras dejan |

Es la misma disciplina mirando un momento distinto. En el deck, animás para
probar. Acá, animás para cubrir un vacío informativo: el oyente escuchó "el 40%
menos", y el visual le muestra el 40%.

---

## Escenario C — El deck de cliente

Una slide que afirma que un agente de IA **automatiza y enriquece el email que
entra**. La animación que se construyó:

| Elemento | Qué hace |
|---|---|
| Sobre SVG | Entra a una bandeja de entrada |
| Barrido de escaneo | Revela el contenido |
| Agente robot | Desciende, con antena pulsante y un parpadeo |
| Conector | Se dibuja, con la punta de flecha |
| Tres chips de enriquecimiento | Se enganchan |
| Sobre | Se archiva en una bandeja, con un contador en la otra |

### Verificación, por seek a timestamps exactos

| Timestamp | Momento |
|---|---|
| 108.9s | Escaneo |
| 110.9s | Agente |
| 113.6s | Chips |
| 117.7s | Archivado |

### Geometría final en reposo, medida

| Medida | Valor |
|---|---|
| Holgura arriba y abajo dentro de la bandeja | 21 px |
| Holgura izquierda y derecha | 76 px |

### Render final

| Parámetro | Valor |
|---|---|
| Resolución | 1920x1080 |
| FPS | 30 |
| Frames | 390 |
| Duración | 13.0 s |
| Peso | 816 KB |
| Tiempo de render | 21.1 s |

---

## Los tres bugs

Acá está la lección transferible de todo el curso. Ninguno de los tres lo
agarró el validador.

### Bug 1 — `check` desde el directorio equivocado

**Síntoma**: 30 errores falsos desde `hyperframes-deck\`, 0 errores desde
`hyperframes-deck\composition\`. Mismos archivos.

**Por qué ningún validador lo agarró**: porque el validador estaba bien. Lo que
estaba mal era a quién le estabas preguntando. Un validador no puede
diagnosticar que le estás dando el archivo equivocado: para él, el archivo que
recibió **es** la raíz.

### Bug 2 — El transform origin de GSAP en un `<g>` de SVG

**Síntoma**: el elemento cayó **76,5 px a la izquierda y 44,1 px por encima** de
la bandeja.

**Causa**: `transformOrigin` de GSAP sobre un `<g>` de SVG resuelve al **corner
superior izquierdo del bounding box**, no al centro. Asumir el centro produce un
desplazamiento silencioso.

**Por qué ningún validador lo agarró**: no hay error. El contrato se cumple: la
transformación es válida, el timeline está pausado, todo es seek-safe. El
elemento simplemente está en el lugar equivocado. **Solo se ve en un
screenshot.**

**Cómo se encontró**: midiendo en el navegador y resolviendo la ecuación de la
transformación contra dos mediciones reales.

### Bug 3 — Orden de pintado en SVG

**Síntoma**: una vez que el sobre estaba **correctamente** posicionado dentro de
la bandeja, **desapareció por completo**.

**Causa**: los rectángulos de la bandeja se pintaban **después** del sobre. Un
rectángulo opaco dibujado después tapa lo que está debajo.

**Por qué ningún validador lo agarró**: `check` pasó en verde. Ningún error de
layout: el sobre estaba donde debía. Lo que cambió fue la visibilidad, y la
visibilidad no está en ningún contrato.

**El arreglo**: pintar el sobre **después** de las bandejas, y dejar el barrido de
escaneo **después** del sobre. Un elemento tiene que estar antes que lo que lo
tapa, y después que lo que lo tapa a él.

---

## La meta-lección

**El validador agarra violaciones de contrato, no errores de composición.**

| Lo que `check` detecta | Lo que `check` no detecta |
|---|---|
| Timeline no pausada, no registrada | El elemento está en el lugar equivocado |
| `transition` de CSS | El orden de pintado tapa el elemento |
| Contraste bajo WCAG AA | Falta holgura, o sobra |
| Timelines superpuestas | La geometría en reposo está mal |
| Duraciones inconsistentes | Nada de esto |

El layout se **mide**, no se asume. `check` te dice que el video es
determinista. No te dice que se vea bien. Son dos problemas distintos, y el
segundo es el que importa.