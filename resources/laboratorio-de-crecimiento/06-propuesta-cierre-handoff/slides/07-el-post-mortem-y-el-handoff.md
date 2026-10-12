---
kicker: "cierre y handoff · los dos rituales"
kind: content
notes:
  - "El post-mortem mensual es obligatorio y acotado a 10 wins y 10 losses: el volumen está elegido para que sea revisable de verdad, no para ser un informe que nadie lee."
  - "De los cuatro outputs, el cuarto es el que suele faltar: features pedidas que no existen van a la cola de producto. Ese es el único puente formal entre un outcome comercial y el roadmap."
  - "En el handoff, el punto clave son las promesas literales con timestamp: si ventas prometió 7 días, producto necesita verlo. El KPI `expectation_mismatch_count` mide exactamente el costo de que eso se pierda."
---

# Dos rituales

## Post-mortem mensual obligatorio

Revisión de los **10 deals más grandes ganados** y los **10 más grandes perdidos**.
Salida:

- Patrones de `tipping_factor` en wins: qué se está repitiendo.
- Patrones de `blocker` en lost: dónde duele.
- Cláusulas o módulos que aparecieron en negociación de wins: señal de demanda.
- Features o capacidades pedidas que no existen: van a la cola de producto.

## Handoff: los 7 bloques que deben transferirse

Contexto completo del journey · promesas hechas, **literales y con timestamp** ·
expectativas declaradas por el cliente · pain points originales · stakeholders
y sus roles · riesgos identificados en discovery · cláusulas no estándar.

| KPI del handoff | Señal |
|---|---|
| `time_to_onboard` (`won_at` → primer uso real) | Si sube, hay fricción en producto. |
| `expectation_mismatch_count` | Si crece, ventas está vendiendo aire. |
| `handoff_completeness_score` | Si es bajo, producto navega a ciegas. |
| `first_value_at` | El momento que define retención temprana. |
| `first_30d_churn` | Si es > 0%, hay un problema en handoff o en discovery. |