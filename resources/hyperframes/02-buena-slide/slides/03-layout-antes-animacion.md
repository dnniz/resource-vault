---
kicker: "oficio · layout"
kind: content
notes:
  - "Este es el consejo que más diferencia al output bueno del mediocre."
  - "La analogía: diseñá el cuadro y colgá el cuadro. No pinjés el cuadro al azar."
---

# Paso 2: el layout se define antes que la animación

Esta regla sola separa un deck diseñado de uno generado.

- **Cada elemento se posiciona en su frame más visible**: el momento en que está
  completamente entrado, bien ubicado, y todavía no se va
- **Eso se escribe primero como HTML y CSS estático**, sin animación
- ** recién ahí animás**: la posición CSS es la verdad, el tween describe el viaje

- **El error caro** — posicionar elementos en su estado inicial (fuera de
  pantalla, escala 0, opacidad 0) y animarlos hacia donde creés que deberían
  terminar. Ahí estás adivinando el layout final
- **La consecuencia** — los solapamientos son invisibles hasta que renderizás.
  Un titular arriba de otro, una métrica encima de una etiqueta, texto que se
  sale del cuadro
- **La técnica** — un contenedor que llene la escena con `padding` para posicionar
  y flex con `gap` para espaciar. Nunca posiciones el contenedor de contenido con
  `top` y `left` absolutos: se desborda cuando el contenido crece

- **Overlap intencional** — resplandor detrás del texto, sombras, capas con
  profundidad. Eso es diseño. Lo que hay que cazar es el overlap **involuntario**