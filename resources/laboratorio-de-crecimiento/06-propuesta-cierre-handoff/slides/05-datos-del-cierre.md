---
kicker: "cierre · won y lost"
kind: content
notes:
  - "`tipping_factor` es el campo más valioso del won: es la única fuente que dice qué cerró, no qué se suponía que cerraba. Lo contesta el prospecto, no el rep."
  - "`expansion_potential` 0-3 es barato de capturar y define la conversación de los próximos seis meses."
  - "`could_have_won` es subjetivo a propósito: no es una métrica, es un generador de conversación en la revisión semanal. Sirve para que el equipo discuta, no para scorear."
---

# Datos del cierre

## Won y lost, campo por campo

**WON**

| Campo | Qué guarda |
|---|---|
| `won_at` | Timestamp exacto del compromiso firme (contrato, primer pago). |
| `final_value` | Monto exacto firmado. |
| `cycle_days` | `captured_at` → `won_at` en días naturales. |
| `touch_count_total` | Cuántas interacciones en total. |
| `stakeholders_involved` | Quiénes participaron y en qué rol. |
| `tipping_factor` | Enum: `precio`, `demo`, `caso_estudio`, `urgencia`, `referencia`, `otro`. Lo que el prospecto identifica como «lo que me decidió». |
| `competitors_evaluated` | Quiénes más estaban en la decisión. |
| `discount_final` | % final aplicado. |
| `expansion_potential` | Score 0-3 de oportunidad de crecer la cuenta. |

**LOST**

| Campo | Qué guarda |
|---|---|
| `lost_at` | Timestamp. |
| `loss_reason_primary` | Enum cerrado: `precio`, `timing`, `fit_producto`, `decisión_interna`, `competidor`, `autoridad`, `sin_presupuesto`, `sin_respuesta`, `otro`. |
| `loss_reason_secondary` | Opcional, para casos multi-factor. |
| `competitor_won` | Si aplica, quién. |
| `could_have_won` | Bool del rep: «¿se podía haber ganado?». Es subjetivo pero genera conversación útil. |
| `blocker_specific` | Texto del rep, máx 240 chars. Va a una cola de revisión semanal. |
| `requalify_at` | Fecha de re-engage automático si aplica (timing, presupuesto). |