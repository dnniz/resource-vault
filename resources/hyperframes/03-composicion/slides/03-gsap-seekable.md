---
kicker: "hyperframes · animación"
kind: content
notes:
  - "Esta es la slide que más se rompe. Decí el síntoma exacto: el preview anda y el render sale mal."
  - "El error real no es .play() por Performance: es que el motor no tiene forma de saltar al frame 143."
---

# La animación tiene que ser buscable

El motor no reproduce la línea de tiempo: la **posiciona**. Para eso la timeline
tiene que estar pausada y registrada.

~~~js
const tl = gsap.timeline({ paused: true });
tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
window.__timelines["intro"] = tl;
~~~

- **`paused: true`** — obligatorio. Si llamás `.play()`, perdés el control del playhead
- **La clave del registro** tiene que coincidir con un `data-composition-id` existente, o el lint falla
- **Las posiciones de inserción** son absolutas en el timeline de la composición, igual que `data-start`

- **Síntoma del error** — el preview se ve bien y el render sale con saltos o con cuadros fuera de lugar
- **Causa** — animación no buscable: el motor no puede arbitrar el frame N
- **Runtimes aceptados** — GSAP (default), CSS keyframes, Lottie, Three.js, Anime.js, WAAPI