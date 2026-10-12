---
title: "Cómo el sistema no se rompe, y el stack mínimo"
order: 9
summary: "Referencia de arquitectura: por qué el sistema debe ser aditivo y configurable, las seis reglas de flexibilidad, las capacidades mínimas de datos que hay que tener, el mínimo absoluto para arrancar mañana y la guía de adaptación a cualquier negocio."
objectives:
  - "Aplicar las seis reglas de flexibilidad para agregar etapas, campos y taxonomías sin pedir desarrollo"
  - "Evaluar un stack existente contra la lista de capacidades mínimas en lugar de contra una lista de herramientas"
  - "Adaptar el sistema a un negocio propio en seis pasos con tiempos estimados"
prerequisites:
  - 01-principios
duration: "consulta"
---

Consulta de arquitectura. Leela cuando estés por casarte con una herramienta, no
cuando estés diagnosing una fuga.

## El problema

Empezás vendiendo a clínicas dentales, en seis meses sumás veterinarias, en un año
tu producto cambia. Si tu sistema no soporta eso, tirás un año de datos.

> **Si para agregar un nuevo motivo de pérdida hay que pedirle al equipo técnico
> que «modifique el código», el sistema no es flexible: es un monolito.** Esa
> decisión debería tomarla el líder de ventas en una pantalla de configuración,
> en 30 segundos, con auditoría automática.

---

## Las seis reglas de flexibilidad

| Regla | Qué resuelve | Cómo se implementa |
|---|---|---|
| **01** Schema aditivo, no destructivo | Que los datos nuevos no borren el análisis viejo. | Los campos nuevos se **agregan**, nunca se reescriben. Los viejos quedan como históricos. La consulta nueva filtra por *version* del schema. |
| **02** Taxonomías versionadas | Que cambiar una taxonomía no destruya el histórico. | La v2 reemplaza a la v1, pero la v1 sigue existiendo para análisis histórico. El mapeo es explícito: `objecion_v1.precio_caro = objecion_v2.precio_alto`. |
| **03** Pipeline configurable | Que agregar una etapa no sea un deploy. | Las etapas viven en una tabla, no en código. Sumar etapa nueva = una fila. Cada lead lleva su `pipeline_version`. |
| **04** Reglas de routing en datos | Que cambiar la asignación no sea un deploy. | «Si fuente = X y país = Y, asignar a Z» es una regla en tabla, no un `if` en código. Cambia sin redeploy. |
| **05** Cola de revisión para «otros» | Que la taxonomía crezca sin caos. | Todo campo enum acepta «otro» + texto libre. Esa cola se revisa quincenal. Lo que se repite, se gradúa. |
| **06** A/B testing nativo | Que la optimización no dependa de la intuición. | Cada plantilla, cadencia y script tiene `variant_id`. El sistema asigna variantes con probabilidad configurable y mide resultado por variante sin intervención humana. |

---

## Stack mínimo: capacidades, no herramientas

**No es prescripción de herramientas. Es prescripción de capacidades.** Cualquier
stack moderno puede cumplirlas: HubSpot + Make, Pipedrive + Zapier, custom +
Postgres. Las herramientas son intercambiables; las capacidades no.

| Capacidad | Qué resuelve | Mínimo viable |
|---|---|---|
| `event_log` | Trazabilidad inmutable | Tabla append-only con (`event_id`, `lead_id`, `type`, `ts`, `actor`, `payload`). |
| `lead_state_view` | Estado actual derivado | Vista materializada que se recalcula con cada evento. |
| `conversation_capture` | Mensajes y llamadas en un solo lugar | Integración WhatsApp Business API + IMAP + grabador de llamadas. |
| `transcription` | Convertir audio a texto etiquetable | Servicio de transcripción + speaker diarization (Deepgram, Whisper). |
| `tag_engine` | Etiquetar objeciones, momentos, preguntas | Reglas regex + LLM con confidence threshold + cola de revisión. |
| `automation_layer` | Triggers de seguimiento | Workflow engine (n8n, Make, Temporal). |
| `templates_registry` | Plantillas versionadas | Tabla de plantillas con `variant_id` + métricas adjuntas. |
| `analytics_layer` | Tableros y consultas ad-hoc | BI tool (Metabase, Looker, Sigma) sobre la base. |
| `context_synth` | Resumen «contexto que viaja» | Job recurrente que regenera el bloque resumen del lead. |
| `audit_log` | Quién hizo qué | Cada mutación lleva `user_id` + `ip` + `ts`. Inmutable. |

---

## Mínimo absoluto para arrancar mañana

Si arrancás de cero hoy, la versión más simple del sistema es:

1. Un CRM (cualquier moderno) con campos personalizados estructurados, **no notas libres**.
2. WhatsApp Business API conectado al CRM para que cada mensaje aparezca como evento.
3. Calendario integrado para que cada call se logue automáticamente.
4. Listas cerradas configuradas para: fuente, canal, objeciones, motivo de pérdida.
5. Plantillas con identificador y versión.
6. Dos dashboards: el de ventas (acción) y el de producto/leadership (patrones).
7. Una persona o agente de IA que cada lunes revise la cola de «otros» y las anomalías.

**Eso es suficiente para los primeros 6 meses.** Después se sofistica:
transcripción, etiquetado automático, A/B testing, contexto sintetizado por IA.

> *Un sistema comercial bien diseñado no parece sistema. Parece que el equipo
> simplemente sabe qué hacer. La infraestructura es invisible y por eso
> funciona.*

---

## Cómo adaptar esto a tu negocio

**Tiempo recomendado: 45-60 minutos para la primera configuración; 20-30 minutos
para cada revisión semanal.**

### Paso 1 — Definir la unidad de valor

1. Escribir qué compra realmente el cliente: producto, servicio, suscripción, cita, proyecto, contrato o renovación.
2. Definir el evento de conversión principal: pago, firma, pedido confirmado, reserva o activación.
3. Elegir un periodo de observación suficientemente estable: **normalmente cuatro semanas** como primera línea base.

### Paso 2 — Dibujar el pipeline real

No copies etapas de otro negocio. Registra únicamente los cambios de estado que
realmente ocurren desde que una persona conoce el negocio hasta que obtiene valor y
recomienda.

| Etapa propia | Entrada | Transformación | Salida | Responsable |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |
| 4. | | | | |
| 5. | | | | |

### Paso 3 — Elegir pocas métricas

1. Una métrica de entrada por etapa.
2. Una métrica de salida por etapa.
3. Una tasa de conversión entre ambas cuando tenga sentido.
4. Evitar métricas que no cambian ninguna decisión.

| Etapa | Métrica de entrada | Métrica de salida | Tasa | Fuente |
|---|---|---|---|---|
| Atracción | | | | |
| Conversación / interés | | | | |
| Conversión / venta | | | | |
| Entrega / operación | | | | |
| Retención / recomendación | | | | |

### Paso 4 — Definir estándares propios

Durante las primeras semanas, los estándares son **hipótesis**. Después deben
reemplazarse por la línea base real del negocio, no por promedios genéricos de
internet.

| Métrica | Escenario mínimo | Escenario esperado | Escenario excelente |
|---|---|---|---|
| Volumen de entrada | | | |
| Conversión | | | |
| Tiempo de respuesta | | | |
| Entrega / cumplimiento | | | |
| Retención | | | |

### Paso 5 — Asignar responsables y fuentes

- Cada etapa tiene una persona responsable, aunque varias personas participen.
- Cada métrica tiene una fuente de verdad definida.
- Cada bloqueo tiene dueño y fecha.
- Cada resultado tiene un criterio binario de aceptación.

### Paso 6 — Ejecutar antes de optimizar

Ejecutá el mismo sistema durante una muestra suficiente. Después localizá la
primera fuga relevante, formulá una hipótesis y cambiá **una sola variable**.

> Si se cambian simultáneamente el mercado, la oferta, el precio, el canal y el
> mensaje, el aprendizaje queda contaminado.

**Regla de adaptación: conserva el método y cambia las variables.** Las etapas,
métricas, canales, roles, volúmenes y criterios deben representar la realidad del
negocio que va a usar el sistema.