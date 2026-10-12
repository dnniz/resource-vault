---
kicker: "seguimientos · el bucle completo"
kind: content
notes:
  - "Cerrá conectando con la parte 01: los cinco principios solo se vuelven visibles juntos en seguimientos. Es el lugar donde el sistema se prueba."
  - "Mapping rápido: eventos no estados → el estatus es derivado; listas cerradas con escape → `response_category` y `response_sentiment` con «otro»; todo versionado → `template_id` + `version`; un solo source of truth → el CRM; contexto que viaja → el objeto de contexto."
  - "La falla por omisión tiene nombre en el manual: sin esto, los seguimientos son cold-restarts y el lead siente que nadie escucha. Es exactamente el motivo por el que el sistema no puede contestar qué pasó con el lead 3741 entre el día 7 y el día 14."
---

# El bucle completo

Acá los cinco principios se vuelven visibles al mismo tiempo.

| Principio | Cómo aparece en seguimientos |
|---|---|
| Eventos, no estados | El estatus se deriva del log de eventos, no se tipea. |
| Listas cerradas con escape | `response_category`, `response_sentiment`, «otro» a cola de revisión. |
| Todo versionado | `template_id` + `version` en cada toque. |
| Un solo source of truth | Un solo CRM alimenta todos los canales. |
| Contexto que viaja | El objeto de contexto se regenera en cada interacción. |

> Sin esto, los seguimientos son *cold-restarts* y el lead siente que **nadie escucha**.