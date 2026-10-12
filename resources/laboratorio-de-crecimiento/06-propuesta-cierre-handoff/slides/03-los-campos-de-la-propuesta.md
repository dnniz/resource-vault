---
kicker: "propuesta · campos estructurados"
kind: content
notes:
  - "`line_items` es el campo que casi nadie guarda y el que más permite después: sin el desglose no podés saber qué módulo baja de precio y por qué."
  - "`time_to_open` es un predictor temprano: la velocidad de apertura predice cierre. Si nadie abre en 24h, el problema no es el precio, es que la propuesta no se llegó a mirar."
  - "`stakeholders_added` responde una pregunta que cambia la dinámica del deal: después del primer envío entra alguien más, y ese alguien no estaba calificado ni registrado."
---

# Los campos de la propuesta

## Qué guarda la propuesta

| Campo | Qué guarda |
|---|---|
| `proposal_id` + `proposal_version` | v1, v2, v3 cuando hay re-cotización. |
| `line_items` | Array de servicios/módulos con cantidad y precio. **No solo el total.** |
| `discount_applied` + `discount_reason` | `volumen`, `lealtad`, `competencia`, `urgencia`, `ninguno`. |
| `terms` | `payment_terms`, `contract_length`, `sla_promised`, `cancel_clause`. |
| `sent_at` · `opened_at` · `time_to_open` | La velocidad de apertura predice cierre. |
| `modifications_log` | Cada cambio: qué, por qué, monto delta. |
| `competing_offers` | Qué otras propuestas está evaluando. |
| `stakeholders_added` | Quiénes entran al loop después del primer envío. |