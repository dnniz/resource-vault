---
kicker: "fase 01 · captura"
kind: content
notes:
  - "La regla práctica: si no podés agrupar un dato, no lo guardes. PII innecesaria y scores mágicos no solo son ruido, son riesgo."
  - "El «sentiment score de un solo mensaje» es ruido por definición: una sola muestra no tiene señal. El mismo score sobre una conversación completa sí puede servir."
  - "Cerrar con la señal de cuello de botella: si el p90 de time-to-first-response sube de 5 a 25 minutos, el problema es capacidad, horario o volumen vs equipo. No es el mensaje."
---

# Qué guardar y qué no

## Dos listas: lo que se guarda y lo que no

| SÍ GUARDAR | NO GUARDAR |
|---|---|
| Texto crudo del primer mensaje | PII innecesaria: RFC, CURP completo, datos médicos sensibles del prospecto |
| Atribución multi-touch, si tu stack lo soporta | «Lead score» mágico sin inputs estructurados que lo expliquen |
| Idioma detectado del lead | Sentiment score de un solo mensaje (es ruido) |
| Hora local del lead, no solo UTC | Etiquetas libres del rep tipo «interesante», «raro»: ambiguas, no se pueden agrupar |
| ID del contenido de origen, si llegó desde uno | |

> **Señal de cuello de botella:** time-to-first-response p90 sube de **5 min a 25 min** → revisar capacidad del rep, horario o volumen vs equipo. La curva de conversión cae verticalmente después de **10 minutos** en canales sincrónicos (WhatsApp, IG DM).