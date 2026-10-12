---
kicker: "discovery · etiquetado automático"
kind: content
notes:
  - "La cadena es regex más LLM con umbral de confianza, y todo lo que queda con confianza baja va a cola de revisión. Sin ese umbral, el etiquetado automático produce basura con apariencia de dato."
  - "Las feature requests son el único etiquetado que viaja entero a producto: es la forma barata de descubrir demanda no declarada."
  - "Las menciones de competidor se guardan con nombre y tono, no solo con el nombre. El tono cambia la lectura: descartar a un competidor y nombrar a uno son señales opuestas."
---

# Qué se etiqueta en la transcripción

Con transcripción y diarización disponibles, se aplican etiquetas automáticas
(regex + LLM) y se revisan en una cola cuando la confianza es baja.

- **Objeciones** — desde la taxonomía cerrada.
- **Preguntas de descubrimiento** — cuáles del playbook se cubrieron y cuáles no.
- **Compromisos** — «sí, mándame», «vamos a», «cuándo me lo enviás».
- **Menciones de competidor** — qué nombres aparecieron, en qué tono.
- **Solicitudes de feature** — todo lo que el prospecto pidió que no existe. **Esto va a producto.**
- **Riesgos** — «tengo que pensarlo», «mi socio decide», «en unos meses».