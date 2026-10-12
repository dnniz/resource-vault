---
kicker: "seguimientos · cuándo tocar"
kind: content
notes:
  - "El manual override siempre se permite: la Judgment del rep vale. Pero se loguea como `decision_manual` con motivo opcional, para que la diferencia entre lo que el sistema decidió y lo que decidió el humano sea medible."
  - "El negative-event trigger es el más subestimado: no abrió en 5 días es una señal más fuerte que «no respondió en 10»."
  - "El re-engage trigger depende del score. Cold por sí solo no alcanza: cold por 60d con score alto es lo que justifica una segunda oportunidad con plantilla nueva."
---

# Triggers

## Cuándo decide el sistema escribir

**Time-based.** Pasaron X días sin respuesta → dispara plantilla Y.

**Event-based.** Abrió el correo / visitó la página de pricing / hizo clic en el
link de caso → dispara seguimiento contextual.

**Negative-event-based.** No abrió en 5 días → cambia de canal.

**Manual override.** El rep ve algo y decide tocar. Siempre permitido, pero se
loguea como `decision_manual` con motivo opcional.

**Re-engage trigger.** Leads en `cold` por 60d con score alto entran a una cola
de re-engagement con plantilla nueva. *Las segundas oportunidades existen.*