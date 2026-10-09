---
kicker: "E3 · el ciclo estándar"
kind: content
notes:
  - "Los tests que pasan no significan que la rama sea segura: ahí está el punto de /review."
  - "/ship acepta una rama lista; no es para decidir qué construir."
---

# E3 · Feature en un repo existente: el ciclo

```text
rama → implementas (o apruebas el plan) → /review → /qa → /ship
```

**`/review`** (el staff engineer paranoico) busca lo que pasa CI y explota en producción: N+1, lecturas obsoletas, race conditions, límites de confianza, enums sin handler. Auto-arregla lo mecánico (`[AUTO-FIXED] file:line`) y te pregunta lo ambiguo (seguridad, carreras). Además marca *shortcut implementations* cuya versión completa costaría menos de 30 minutos.

**`/qa`** sin URL: usa tu request, los contratos del repo, el test plan y el diff para elegir superficies. Abre navegador cuando toca UI; CLI/webhook con fixtures locales cuando no. Para el bug reproducido: escribe la **regresión nativa**, prueba que falla antes del arreglo y que pasa después.

**`/ship`** (la máquina de release): sincroniza main, corre tests, audita cobertura y docs, bootstrap de framework de tests si tu repo no tiene, y abre/actualiza el PR — `Tests: 42 → 51 (+9 new)` en el cuerpo.

> «Muchas ramas mueren cuando lo interesante ya está hecho y solo queda el trabajo aburrido de release. Los humanos lo procrastinan. La IA no debería.»
