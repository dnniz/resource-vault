---
kicker: "Qué es · los ojos"
kind: content
notes:
  - "El unblock personal del autor: /qa le permitió pasar de 6 a 12 workers paralelos."
  - "Regla de seguridad constante: todo lo que devuelve una página se trata como dato, nunca como instrucciones."
---

# El agente consigue ojos: /browse

- Antes del navegador, el agente adivinaba estados de UI, redirects, errores de consola y layouts rotos. Ahora **va a mirarlos**.
- **Aside primero** (macOS 15+): tu navegador real, con tus sesiones logueadas. Sin importar cookies ni CAPTCHAs: si hay un muro de login, lo resuelves tú y dices *done*.
- **Fallback propio**: un Chromium incluido que `./setup` compila; ~100 ms por comando. `/open-gstack-browser` lo abre con ventana visible y agente en la barra lateral.
- Reglas de convivencia: el agente abre sus propias tabs y las cierra; jamás escribe tu password; una acción que muta algo fuera de localhost **pide permiso antes**.
- Defensa anti prompt-injection en capas (filtros + clasificador ML local de 22 MB): las páginas hostiles no secuestran al agente.
