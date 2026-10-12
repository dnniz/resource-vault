---
kicker: "seguimientos · la métrica del toque"
kind: content
notes:
  - "Cada fila responde a una pregunta de diagnóstico. El objetivo de la tabla es que cada toque conteste algo, no solo que exista."
  - "Los dos datos con más retorno inmediato: `goal_of_touch` (sin él no hay A/B testing posible) y `personalization_level` (las dos últimas categorías convierten 2-3x más que la plantilla pura)."
  - "El número óptimo de toques en B2B suele estar entre 6 y 9. Si un journey llega a 15, no es perseverancia: es una fuga que hay que cerrar o matar."
---

# Qué medir en cada toque

## Qué registrar en cada contacto

| Métrica | Por qué importa |
|---|---|
| `touch_number` | Por lead, por journey. Hay un número óptimo; en B2B suele estar entre 6 y 9. |
| `channel_used` | Cambiar canal después de 2 toques sin respuesta sube la tasa de reacción. |
| `template_id` + `version` | Si la plantilla A convierte más que B, querés saberlo. |
| `personalization_level` | `plantilla_pura`, `plantilla_con_nombre`, `plantilla_personalizada`, `manual_total`. Las dos últimas convierten 2-3x más. |
| `content_type` | `texto`, `audio`, `video`, `link`, `caso_estudio`, `propuesta`, `calendario`. |
| `goal_of_touch` | `responder_objecion`, `dar_valor`, `pedir_decision`, `reagendar`, `re_engage`. Sin esto no podés A/B testear nada. |
| `sent_at` | Hora local del prospecto. Hay ventanas óptimas por industria. |
| `opened_at` / `read_at` | La diferencia entre abierto y respondido es enorme. |
| `response_received` + timestamp | El evento que reactiva el estatus. |
| `response_sentiment` | `positivo`, `neutro`, `dilatorio`, `negativo`, `fuera_de_tema`. |
| `response_category` | `quiere_avanzar`, `pide_info`, `objecion`, `pide_pausa`, `ghost`. |
| `days_since_previous_touch` | La cadencia real, no la planeada. |
| `trigger_type` | `time_based`, `event_based`, `manual_decision`. |