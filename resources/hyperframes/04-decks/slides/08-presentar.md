---
kicker: "hyperframes · presentar"
kind: content
notes:
  - "Cerrá conectando con el deck publicado de este curso: es exactamente esto."
  - "Detalle operativo que importa: en Meet se comparte la PESTAÑA de audiencia, no la ventana."
---

# Servirlo y presentarlo

Un deck se sirve, no se exporta.

~~~bash
npx hyperframes present ./composition
~~~

- **Navegación** — `←` y `→` para moverse; `Espacio` y `Retroceso` también
- **Modo presentador** — tecla `P` o el ícono del ícono de la barra. Abre una pestaña de audiencia a pantalla completa y deja en tu pantalla el slide actual, el siguiente, las notas y un timer
- **Sincronización** — las dos pestañas se hablan por `BroadcastChannel`

- **Google Meet** — compartí la **pestaña** de audiencia ("Share screen → A tab"), no una ventana ni la pantalla entera. Si la ventana queda tapada, Chrome deja de renderizar y la audiencia ve slides congelados
- **Zoom** — arrastrá la pestaña de audiencia a su propia ventana y compartí esa ventana. Necesitás un segundo monitor o dejar una franja visible

- **Validá siempre antes** — `npx hyperframes check` corre el lint de la isla: `sceneId` resolubles, hotspots con destino, fragmentos dentro de rango, sin solapamiento entre slides principales