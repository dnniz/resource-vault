---
kicker: "cierre · la trampa del lost reason"
kind: content
notes:
  - "Esta es la slide más valiosa de la parte. «Precio» es la respuesta cómoda: la que no compromete al rep ni obliga a revisar el diagnóstico."
  - "El umbral del 40% es el que dispara la revisión. Si tu distribución de motivos de pérdida tiene más de 40% en precio, estás midiendo la comodidad del rep, no el mercado."
  - "El mecanismo del arreglo: motivo primario + secundario obliga a desdoblar el caso, y la pregunta forzada convierte una etiqueta en una hipótesis verificable."
---

# La trampa del `loss_reason`

## «Precio» es la respuesta cómoda

> **«Precio» es la respuesta cómoda.** Si más del 40% de tus `lost` vienen
> marcados como precio, NO es precio: es que tu sistema deja que el rep elija la
> opción menos comprometedora.

| Estado actual | Falla | Corrección |
|---|---|---|
| Una sola razón de pérdida | El rep elige la etiqueta con menor costo reputacional. | Exigir `loss_reason_primary` **y** `loss_reason_secondary`. |
| Razón sin explicación | Queda una etiqueta sin causa accionable. | Pregunta obligatoria: «¿qué hubiera tenido que cambiar para ganarlo?». |
| Post-mortem anecdotal | Se revisan losses sueltos, sin patrón. | El `blocker_specific` alimenta una cola de revisión semanal. |