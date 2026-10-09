---
kicker: "Lo que aprendimos usando este MCP de verdad"
kind: "content"
notes:
  - "Hallazgos del 17 de septiembre, en la prueba en frío del MCP de Coolify (proyecto Omnicanal)."
---

- **Devuelve las variables en claro** — Si un secreto pasa por el MCP, termina en el historial del chat. El secreto va en el panel de Coolify, a mano.

- **"Deploy" no siempre espera** — En algunos casos regresa antes de que el deploy termine. Que el agente diga "listo" no significa que esté arriba.

- **El estado puede ser viejo** — La lista de contenedores puede enseñar un estado de hace rato.

Verifica con curl, no con lo que dice el agente.
