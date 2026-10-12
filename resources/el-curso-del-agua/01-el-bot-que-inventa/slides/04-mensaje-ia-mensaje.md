---
kicker: "el bot que inventa · arquitectura vieja"
kind: content
notes:
  - "Esta slide es el marco. No la saltes aunque parezca obvia: todo el diagnóstico de la parte 2 depende de este esquema."
  - "El punto que hay que hacer notar: no es una arquitectura mala. Es la arquitectura correcta para un producto sin herramientas."
  - "Usar el diagrama para preguntar: ¿dónde pondrías el catálogo en este esquema? La respuesta es «adentro de la IA», y esa respuesta ES el problema."
---

# La arquitectura que sí funcionaba

Cuando empezaron a construir agentes de IA, el patrón era clarísimo:

```
mensaje  →  [ IA ]  →  respuesta
```

Tres pasos. Fácil de construir, fácil de entender, fácil de depurar.

Y funcionaba bien, **porque no tenía que hacer mucho**: solo responder como le
indicas. No hay datos que consultar, no hay acciones que ejecutar, no hay nada
que pueda inventar porque no hay nada de dónde sacarlo.

El precio que se cobraba por esa simplicidad era aceptable... mientras el
producto no hiciera promesas sobre datos del mundo real. Eso llega justo en la
siguiente slide.