---
kicker: "El argumento que cierra la discusión"
kind: "content"
notes:
  - "Hasta n8n asume que construye el agente. Lo que no asume es que el agente se opere solo."
---

El equipo de n8n escribió su SDK *para que los agentes construyan flujos*.

Y aun así tuvo que escribirles reglas:

```
// n8n-sdk-rules — extraído del @n8n/workflow-sdk oficial
❌ alwaysOutputData: true   ← lecturas undefined, llamadas HTTP a "undefined"
❌ $json.campo              ← inseguro en 3 contextos (sub-nodos de AI Agent…)
✅ filter node              ← 0 items cuando nada coincide; la cadena para limpia
```

**Los errores del agente son predecibles.** Aprender n8n hoy es saber reconocerlos, no arrastrar nodos.
