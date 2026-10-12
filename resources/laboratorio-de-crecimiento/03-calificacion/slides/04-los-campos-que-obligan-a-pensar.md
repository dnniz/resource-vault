---
kicker: "calificación · los campos que obligan a pensar"
kind: content
notes:
  - "El requisito estructural: discovery_answers son respuestas tipadas (enum o número), NO texto libre. El texto libre aquí es exactamente el problema que el principio 02 resuelve."
  - "qualification_framework_version existe para comparar resultados entre versiones del marco. Sin él, un cambio de preguntas se confunde con un cambio de mercado."
  - "icp_fit_score se calcula por reglas explícitas, no por intuición. Si alguien tiene que explicar por qué dio 80, es una regla; si dice 'sentí que sí', es un campo inútil."
---

# Los campos que obligan a pensar

## Tipos cerrados, no texto libre

| Campo | Tipo | Nota |
|---|---|---|
| `qualification_framework_version` | string | Ej. `azx_v3`. Permite comparar resultados de versiones distintas. |
| `discovery_answers` | jsonb | Una clave por pregunta. Respuestas tipadas (enum o número), no texto libre. |
| `icp_fit_score` | número 0-100 | Calculado por reglas explícitas, no «sentí que sí». |
| `authority_signal` | enum | decision_maker, influencer, gatekeeper, end_user |
| `timing_signal` | enum | now, 30d, 90d, exploring, no_timeline |
| `budget_signal` | enum | confirmed, estimated, unknown, below_range |
| `early_objections` | array\<enum\> | De la taxonomía de objeciones. Múltiples permitidas. |
| `pain_points` | array\<enum\> | Mapeados a capacidades del producto. |
| `disqualification_reason` | enum | Solo si se descalifica. Lista cerrada; «otro» va a cola de revisión. |
| `requalify_at` | timestamp | Fecha de re-engage automático si aplica. |