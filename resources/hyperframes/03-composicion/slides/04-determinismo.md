---
kicker: "hyperframes · determinismo"
kind: content
notes:
  - "Esta es la slide que justifica el módulo entero. Conectala con la parte 1."
  - "Ejemplo para la audiencia: un video de release notes re-renderizado cada semana, siempre igual."
---

# El determinismo sale de ahí, gratis

Si el motor puede saltar a cualquier frame y el frame es una función pura de
`frame + estado`, entonces la corrida es reproducible.

~~~bash
# render 1 → 300 frames · sha256 a3f1…9c2e
# render 2 → 300 frames · sha256 a3f1…9c2e
~~~

- **Habilita CI** — un cambio que altera el video rompe el build, como cualquier otro test
- **Habilita templates** — la misma composición con variables distintas, un render por registro
- **Exige** — nada de `Math.random()`, ni `Date.now()`, ni red durante el render

- **Lo que rompe el determinismo** — assets remotos no precargados y fuentes web no embebidas
- **Regla práctica** — descargá todo antes de renderizar; el render no debe hacer requests de red