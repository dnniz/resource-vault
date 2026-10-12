---
kicker: "seguimientos · el brief del siguiente mensaje"
kind: content
notes:
  - "Insistí en el purposo negativo: esto NO es metadata de auditoría. Es el brief de quien escribe el siguiente mensaje. Si lo presentás como log, nadie lo lee; si lo presentás como prompt, se usa."
  - "El caso de uso real: el lead contestó a las 23:40, el rep entra a las 8:00. Sin este objeto arranca un cold-restart y se nota. Con el objeto, arranca sabiendo qué prometió y qué falta."
  - "Se regenera después de cada interacción: cualquier rep, en cualquier turno, abre el lead ya sabiendo. Una IA conversacional toma este mismo objeto como contexto de sistema."
---

# El contexto que viaja

Cada toque — email, WhatsApp, llamada — lleva su objeto de contexto.

```text
{
  "lead_id": "lead_3741",
  "last_meaningful_interaction": "2026-05-12 strategy_call",
  "last_promise_made_by_us": "enviar caso de éxito de clínica similar",
  "last_promise_status": "pending",
  "last_objection_unresolved": "precio_alto_vs_alternativa",
  "last_emotional_signal": "interés_genuino_dudas_economicas",
  "preferred_channel": "whatsapp",
  "preferred_time_window": "10:00-12:00 CST",
  "stakeholders_in_loop": ["dra_garcia", "admin_lopez"],
  "next_action_due": "2026-05-19",
  "next_action_type": "share_case_study",
  "touch_count_since_last_response": 2,
  "total_touches_in_journey": 7
}
```

**No es metadata para auditoría: es el brief del rep o de la IA que escribe el
siguiente mensaje.** Se regenera después de cada interacción.