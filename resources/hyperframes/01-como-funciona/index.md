---
title: "Cómo funciona y cuándo usar slide o video"
order: 1
summary: "El modelo mental correcto: vos no escribís el deck, escribís el encargo. Y la decisión previa que define todo lo demás: slide o video."
objectives:
  - "Entender que el prompt es la interfaz, no el código"
  - "Distinguir cuándo el entregable es un deck y cuándo es un video"
  - "Saber qué espera el router antes de arrancar"
  - "Entender por qué el deck no se exporta a MP4"
prerequisites: []
duration: "10 min"
---

## La idea que cambia todo

No estás usando HyperFrames. Estás **contratando a un director de arte que ya
sabe HyperFrames**. Tu trabajo es el encargo: qué querés decir y con qué
elementos visuales. El trabajo mecánico, markup, timing y sincronía, es suyo.

Si terminás editando `index.html` a mano, estás usando la herramienta al revés.

## La decisión que va primero: deck o video?

No son el mismo entregable con distinto nombre.

| | **Deck (slideshow)** | **Video** |
|---|---|---|
| Qué es | Presentación vivo que vos navegás | Archivo que se mira solo |
| Quién avanza | Vos, con el teclado | El reloj |
| Sirve para | Reuniones, revisiones, propuestas, clase | Difusión, redes, documentación |
| Notas del presentador | Sí, y no las ve la audiencia | No aplica |
| Detalle opcional | Sí, con hotspots que abren ramas | Todo va en la línea |
| Salida | `present` | `render`, produce MP4 |

**Regla práctica:** si alguien tiene que mirarlo sin que vos estés, es video. Si
necesitás argumentar, responder en el momento, o saltar a un detalle según lo
pregunten, es deck.

### La trampa del deck

Un deck **no se renderiza a MP4**. Si corrés `render` sobre un deck no falla:
resuelve solo la primera composición y escribe un archivo truncado sin avisar.
Te podés llevar 6 segundos de un deck de 40 y el MP4 abre bien.

## El router te va a preguntar

Antes de construir nada, el agente confirma cuatro cosas. No está mareando:
está escuchándote un encargo un encargo para que la construcción no tenga que adivinar lo
que habrías corregido después.

1. **Ruta**: qué workflow encaja con tu material.
2. **Público**: a quién le presentás.
3. **Reveals**: ¿querés que aparezcan de a partes mientras hablás, o la slide
   completa de una?
4. **Storyboard**: ¿querés revisar el plan antes de que lo construya, o preferís
   un resultado terminado?

Todo eso queda escrito en `BRIEF.md`. Si después querés cambiar una decisión,
editás ese archivo en vez de volver a explicarlo.

Si tenés apuro, una frase lo saltea: decí que construya directo y que no te
pregunte nada. Cada pregunta se convierte en un default declarado.

## Las dos formas de arrancar

**Frío**: describís el video o el deck desde cero. Funciona cuando ya tenés la
dirección creativa en la cabeza.

> Usando `/hyperframes`, creá un intro de producto de 10 segundos con un título
> que entra en fade sobre fondo oscuro y música de fondo sutil.

**Cálido**: le das material y lo convierte. Acá es donde brilla, porque el agente
investiga y resume en el mismo flujo en que produce.

> Leé este CSV y convertilo en una carrera de gráficos de barras animada usando
> `/hyperframes`.

El warm start produce trabajo más anclado porque el agente está escribiendo sobre
algo concreto en vez de inventar copy.

## Lo que vas a aprender

- **Parte 2**: el oficio, cómo se construye una slide donde el visual demuestra
  lo que el texto afirma.
- **Partes 3 y 4**: 22 prompts copiables, con variantes de tono.
- **Parte 5**: el catálogo, qué componente usar según lo que estés explicando.
- **Parte 6**: la arquitectura, para cuando quieras entender por qué funciona.
- **Parte 7**: glosario y qué hacer cuando algo sale mal.

Y hay un **deck en vivo** de todo esto, que se abre en el navegador y se recorre
con las flechas del teclado:

```
https://dnniz.github.io/resource-vault/hyperframes-deck/
```