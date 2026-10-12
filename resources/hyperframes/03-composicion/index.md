---
title: "La composición y la animación"
order: 3
summary: "El contrato de datos que define el timing, la regla de animación seekable, y por qué eso habilita el determinismo."
objectives:
  - "Escribir una composición mínima con data-composition-id, data-start y data-duration"
  - "Declarar una timeline GSAP pausada y registrar en window.__timelines"
  - "Explicar por qué el determinismo depende de que la animación sea buscable"
prerequisites: [02-instalacion]
duration: "15 min"
---

Cuatro ideas y el detalle de implementación de cada una. La que más se rompe en
la práctica es la tercera: una timeline que se reproduce sola no se puede buscar.