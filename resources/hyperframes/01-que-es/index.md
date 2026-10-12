---
title: "Qué es y por qué importa"
order: 1
summary: "La idea central en una frase, y por qué el determinismo es la propiedad que lo separa de generar video con IA."
objectives:
  - "Explicar qué es una composición y qué produce el motor"
  - "Distinguir HyperFrames de generar video con un modelo de texto"
  - "Reconocer para qué sirve el determinismo y para qué no"
prerequisites: []
duration: "10 min"
---

HyperFrames convierte una **composición HTML** en un MP4. La composición es un
`index.html` con atributos de timing en cada elemento: el motor conduce Chrome
headless frame por frame y codifica con FFmpeg. La misma entrada produce el mismo
video, siempre.

Ese determinismo es lo que lo separa de las demás formas de generar video. Un
video generado por IA cambia en cada corrida; uno renderizado desde HTML no. Por
eso sirve para CI, para tests de regresión visual y para cualquier pipeline donde
"volver a correrlo" tiene que significar "obtener lo mismo".

La consecuencia práctica es que el trabajo se hace en HTML, con herramientas que
ya conocés. No hay build step, no hay React obligatorio, no hay editor binario.

## La promesa en una línea

Escribís HTML y obtenés un MP4 determinista. Sin fees por render y con licencia
Apache 2.0.

## Hay un deck en vivo

Todo este curso tiene una versión presentable como **deck navegable**, construida
con el propio HyperFrames. Se abre en el navegador y se recorre con `←` y `→`.

Está servido junto a este curso, en la carpeta `hyperframes-deck/` de la raíz del
sitio publicado, es decir:

```
https://dnniz.github.io/resource-vault/hyperframes-deck/
```

El deck tiene reveals progresivos, una rama opcional sobre el catálogo de bloques
y modo presentador con notas. Presentalo con la tecla `P`.

## Qué NO es

- **No es un generador de texto a video.** No inventa imágenes ni escenas; vos
  escribís cada elemento.
- **No es un editor no-code.** El HTML es la fuente de verdad y se edita como HTML.
- **No reemplaza al diseño.** Un buen video sigue necesitando criterio visual; el
  framework solo garantiza que lo que diseñaste se ejecute idéntico cada vez.

## Requisitos verificados

| Dependencia | Estado | Nota |
|---|---|---|
| Node.js 22+ | v24.21.0 | requerido por el CLI |
| FFmpeg + FFprobe | 9.0.2 | codificación y muxing |
| Chrome/Chromium | presente | el motor lo conduce headless |
| TTS Kokoro (opcional) | instalado | narración local sin cloud |
| Docker (opcional) | ausente | solo para render en contenedor o Lambda |