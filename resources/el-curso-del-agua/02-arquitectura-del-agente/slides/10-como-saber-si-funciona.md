---
kicker: "arquitectura · cómo se prueba"
kind: content
notes:
  - "El punto pedagógico: un pipeline determinista se puede testear. Un prompt esperanzado, no. La arquitectura es lo que vuelve posible la verificación."
  - "Detalle de implementación a mencionar: la IA simulada permite generar conversaciones de prueba sin gastar tokens reales y, sobre todo, de forma repetible."
  - "El modo de testing interno parece menor y no lo es: obliga a una sola persona a poder tocar el agente. Es lo que hace posible iterar rápido."
---

# Cómo sabes si funciona

## Tests automatizados con IA simulada

Se armó **un sistema de tests automatizados con IA simulada para evaluar si el
agente llama correctamente a sus herramientas**.

Eso solo es posible porque la arquitectura está partida en capas: cada capa se
puede interrogar por separado. Un prompt largo y esperanzado no se puede testear
— solo se puede rezar.

## Modo de testing interno

> ✎ _Agregué un modo de testing interno para probar los bots sin tener que borrar
> registros de conversación cada vez._

Parece un detalle menor y no lo es: convertir el testing en algo que una sola
persona puede hacer es lo que hace que el ciclo de mejora sea corto.

> **Nota de construcción** — ambas piezas entran en el bloque de «mejoras
> técnicas» del diario, no como tesis: son la infraestructura que hace medible el
> pipeline que acabas de ver.