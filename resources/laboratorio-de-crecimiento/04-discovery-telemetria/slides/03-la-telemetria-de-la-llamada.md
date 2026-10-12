---
kicker: "discovery · telemetría de la llamada"
kind: content
notes:
  - "Dividir mentalmente la tabla en tres bloques: asistencia (show_rate, reschedule_count, duration_actual), dinámica de la conversación (talk_listen_ratio, interruptions_count, monologue_max) e intención (questions, objections, topics, commitment_level, decision_maker_present, next_step_specificity)."
  - "Las dos señales más fuertes: questions_asked_by_prospect predice cierre, y next_step_specificity en ninguno predice pérdida. Juntas cubren los dos extremos de la misma llamada."
  - "Detalle de implementación: la diarización de hablantes es requisito, no lujo. Sin separación de turnos no hay talk_listen_ratio ni interruptions_count."
---

# Telemetría de la llamada

## Trece señales que se miden en la llamada

| Métrica | Cómo se mide | Qué señala |
|---|---|---|
| `show_rate` | did_attend / scheduled | Calidad de calificación y del agendado. |
| `reschedule_count` | conteo de movimientos previos | 2+ reschedules = baja probabilidad de cierre. |
| `duration_actual` | minutos de llamada real | < 50% del tiempo agendado = poca profundidad. |
| `talk_listen_ratio` | % habla rep vs prospecto | Rep > 60% = está pitcheando, no escuchando. |
| `interruptions_count` | desde transcripción | Alto = mala dinámica. |
| `monologue_max` | tramo más largo sin pausa | > 90 seg de monólogo = perdió atención. |
| `questions_asked_by_rep` | conteo | Reps top hacen 11-14 preguntas en 30 min. |
| `questions_asked_by_prospect` | conteo | Predictor fuerte de cierre: más preguntas = más interés. |
| `objections_raised` | array enum + timestamp | Qué objeciones, en qué momento del call. |
| `topics_raised_by_prospect` | array | Lo que el prospecto trae sin que se le pregunte = lo que le importa. |
| `commitment_level` | enum | verbal_yes, written_yes, soft_yes, hedge, no. |
| `decision_maker_present` | bool | Si es no, el cierre no se decide acá. |
| `next_step_specificity` | enum | fecha_y_hora · fecha_solamente · «pronto» · ninguno. El último predice pérdida. |