---
kicker: "aplicar · pruebas automatizadas"
kind: content
notes:
  - "El diseño tiene dos conjuntos: conversaciones que SÍ deben disparar la herramienta y conversaciones que NO deben dispararla. El segundo conjunto es el que casi nadie escribe y es el que encuentra los falsos positivos."
  - "Regla de operación: se corre en cada cambio de prompt, no antes de publicar. Si no se ejecuta automáticamente, no es un test, es una intención."
  - "Tratar una regresión como build failure es la parte que convierte esto en un control y no en un reporte de incidencias. Reportar sin bloquear deja que el fallo llegue a producción."
  - "La ventana de testing interno tiene un beneficio de negocio: te permite probar cambios destructivos sin tocar los registros de conversaciones reales del cliente."
---

## Tu prueba de que funciona

Un set de conversaciones simuladas, dos conjuntos opuestos:

| Conjunto | Qué debe pasar | Qué detecta |
|---|---|---|
| **Debe llamar** | El agente invoca la herramienta correcta | Olvidos y parámetros mal armados |
| **No debe llamar** | El agente responde sin herramienta | Falsos positivos y llamadas inútiles |

Dos reglas que hacen que esto funcione:

1. **Se corre en cada cambio de prompt.** Un cambio sin prueba es un cambio sin
   verificar.
2. **Una regresión es un fallo de build**, no un reporte para revisar después.

Y un detalle de operación que ahorra %
- **Ventana de testing interno**: probar bots sin tener que borrar los registros de
  conversación de producción cada vez.