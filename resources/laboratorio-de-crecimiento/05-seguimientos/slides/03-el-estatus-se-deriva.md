---
kicker: "seguimientos · el estatus se deriva"
kind: content
notes:
  - "La respuesta corta es sí, pero como valor derivado. El rep no tipea «cold»: el sistema lo calcula del último evento de respuesta del prospecto."
  - "El modo de falla es directo y conviene decirlo sin suavizar: si el estatus es manual, los reps lo dejan en «active» para no parecer mal. Es el mismo patrón que la etiqueta libre «interesante» de la fase de captura: dato ambiguo, no agrupable."
  - "Los cuatro umbrales (7d / 8-21d / >21d) y el reset son configuración, no constantes del negocio. Dejalo explícito: se ajustan y se miden por segmento."
---

# Sí se mide, pero derivado

El rep **no debería tipear** «cold». El sistema lo deriva del último evento de
respuesta del prospecto.

> Si dejás que sea manual, los reps lo dejan en «active» para no parecer mal.

**Checklist de implementación:**

- ¿Qué eventos **decrementan** el calor? Un toque enviado sin respuesta.
- ¿Qué eventos lo **incrementan**? Una respuesta humana del prospecto.
- ¿Qué lo **resetea**? Cualquier `response_received`.
- ¿Cuál es la **histeresis**? Las bandas `warm` <7d · `cooling` 8-21d · `cold` >21d.