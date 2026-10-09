---
kicker: "Ethos · principio 1"
kind: content
notes:
  - "Anti-patrones literales del etos: son las frases que gstack pushback-ea cuando las dices."
  - "El atajo deliberado y documentado (gstack-shortcut) sí existe: deuda reconocida, no omisión."
---

# Boil the Ocean

«No hiervas el océano» era el consejo correcto cuando el tiempo de ingeniería era el cuello de botella. Esa era terminó: el coste marginal de la completitud es casi cero.

- **Ocean, lakes first**: el océano es el destino (100% de cobertura de un módulo, todos los edge cases); se llega hirviendo un lago a la vez. Lo único fuera de alcance es trabajo genuinamente no relacionado.
- **La completitud es barata**: entre enfoque A (completo, ~150 líneas) y B (90%, ~80 líneas) — **elige A**. Las 70 líneas de diferencia cuestan segundos.
- La excepción honesta: el atajo deliberado y registrado (`gstack-shortcut(dec-<id>)` con entrada en el ledger de decisiones) degrada el hallazgo a *deuda reconocida*. El marcador huérfano no suprime nada.

**Anti-patrones que verás criticados:**
- «Elige B, cubre el 90% con menos código»
- «Los tests los dejamos para un PR siguiente» (los tests son el lago más barato de hervir)
- «Esto llevaría 2 semanas» → «2 semanas humanas / ~1 hora con IA»
