---
kicker: "hyperframes · la trampa"
kind: content
notes:
  - "Dejá esta slide en pantalla mientras lo decís. Es el error que más caro sale."
  - "El detalle cruel: no falla. Escribe un MP4 válido y truncado. Nadie se entera."
---

# Un deck no se renderiza a MP4

Si corrés `render` sobre un deck, **no falla**. Resolve solo la primera
composición y escribe un MP4 truncado, sin avisar nada.

- **El motivo** — un deck son varias composiciones top-level, sin una composición master que las envuelva a todas
- **El síntoma** — te podés llevar 6 segundos de un deck de 40, y el archivo abre bien
- **Por qué es peligroso** — el error no es visible en el output, es invisible en el pipeline

- **Salida correcta** — `npx hyperframes present <dir>` para el deck vivo
- **Alternativa válida** — `npx hyperframes snapshot` para stills por slide
- **Pendiente en upstream** — la exportación lineal del main-line está diferida; hoy no hay MP4 de un deck

- **Regla** — si el entregable tiene ramas, no es un video. Es un deck.