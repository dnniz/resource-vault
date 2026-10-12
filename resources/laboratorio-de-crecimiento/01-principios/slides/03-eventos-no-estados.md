---
kicker: "principio 01 · eventos, no estados"
kind: content
notes:
  - "Insistir en que el estado actual es un derivado, nunca un campo que alguien tipea. Si el rep puede escribir la etapa, el estado es una opinión."
  - "El beneficio operativo concreto es el A/B testing sin reescribir historia: comparar dos periodos con fuentes distintas exige que nada se haya sobrescrito."
  - "Matar la misconception de que actualizar un campo es más simple. Es más simple hasta la primera auditoría o el primer dispute de pipeline."
---

# Eventos, no estados

El sistema guarda **cada acción** como evento inmutable con `timestamp`. El estado
actual del lead se **deriva** del log de eventos.

| | CRM clásico | Event log |
|---|---|---|
| Registro | campo editable | evento append-only |
| Cambio | se sobrescribe | se agrega |
| Historia | se pierde | completa |
| Auditoría | imposible | reconstructible |
| A/B test | imposible sin reescribir | histórico intacto |

Tres consecuencias: puedes **reconstruir** el pasado, puedes **auditar** quién hizo
qué, y puedes **testear** dos guiones sin reescribir la historia.