---
kicker: "hyperframes · el contrato"
kind: content
notes:
  - "Insistí: nada de JavaScript para el timing. Es declarativo."
  - "Pregunta al grupo: ¿qué pasa si Ponemos el timing en un setTimeout?"
---

# El timing vive en atributos `data-*`

Cada elemento que entra a la timeline lleva su tiempo. El motor lee los
atributos; tu JavaScript no participa.

- **La escena** — `data-composition-id`, `data-start`, `data-duration`, `data-width`, `data-height`
- **El clip** — `class="clip"`, `data-track-index`, `data-start`, `data-duration`

~~~html
<div
  data-composition-id="intro"
  data-start="0"
  data-duration="6"
  data-width="1920"
  data-height="1080"
>
  <h1
    class="clip"
    data-start="1"
    data-duration="4"
    data-track-index="1"
  >Lanzamiento</h1>
</div>
~~~

- **Ventaja** — el HTML sigue siendo inspeccionable con herramientas web normales
- **Consecuencia** — `data-start` es una posición absoluta en el timeline de la composición, no un offset respecto de la escena
- **Trampa** — `class="clip"` es lo que el motor muestra y oculta; sin eso, el elemento queda en el DOM pero no tiene timing