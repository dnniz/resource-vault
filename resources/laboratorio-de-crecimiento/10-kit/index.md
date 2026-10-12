---
title: "Kit: plantillas y listas cerradas"
order: 10
summary: "La página de trabajo: plantilla de cierre semanal, plantilla de experimento, el objeto de contexto que viaja, las listas cerradas para arrancar, el checklist de puesta en marcha, el árbol de diagnóstico y todos los umbrales numéricos en una sola tabla."
objectives:
  - "Completar la plantilla de cierre semanal y la de experimento con datos reales de la semana"
  - "Configurar las listas cerradas iniciales y revisarlas una vez terminadas las dos primeras semanas"
  - "Consultar los umbrales numéricos del sistema como referencia única al diagnosticar"
prerequisites:
  - 05-seguimientos
  - 07-ciclo-del-laboratorio
duration: "consulta"
---

Consulta. Todo lo que hay en esta página está pensado para copiarse y pegarse.

## Plantilla de cierre semanal (Anexo A)

```text
1. Cuello de botella principal:

2. Evidencia numérica:

3. Hipótesis:

4. Variable que cambiaremos:

5. Experimento y muestra:

6. Umbral de éxito:

7. Resultado semanal por cliente:

8. Evidencia disponible para marketing:
```

**Marcador de la siguiente semana**

| Objetivo | Meta | Responsable | Fecha | Criterio de finalización |
|---|---|---|---|---|
| Ventas | | Responsable | | |
| Marketing | | Responsable | | |
| Delivery | | Dirección / Operaciones | | |

---

## Plantilla de experimento (Anexo B)

```text
Fecha de inicio:
Etapa del pipeline:
Problema observado:
Evidencia:
Hipótesis:
Variable:
Versión actual:
Nueva versión:
Muestra:
Métrica:
Umbral de éxito:
Resultado:
Decisión: (mantener / iterar / descartar)
```

**Plantilla de hipótesis**

> **Creemos que [causa] está provocando [resultado], porque observamos [evidencia].**

**Siete variables candidatas:** apertura del mensaje · segmento contactado ·
pregunta de calificación · CTA o seguimiento · confirmación de llamadas ·
presentación de la oferta · criterio de aceptación de delivery.

---

## El objeto «contexto que viaja»

```json
{
  "lead_id": "lead_3741",
  "last_meaningful_interaction": "2026-05-12 strategy_call",
  "last_promise_made_by_us": "enviar caso de éxito de clínica similar",
  "last_promise_status": "pending",
  "last_objection_unresolved": "precio_alto_vs_alternativa",
  "last_emotional_signal": "interés_genuino_dudas_economicas",
  "preferred_channel": "whatsapp",
  "preferred_time_window": "10:00-12:00 CST",
  "stakeholders_in_loop": ["dra_garcia", "admin_lopez"],
  "next_action_due": "2026-05-19",
  "next_action_type": "share_case_study",
  "touch_count_since_last_response": 2,
  "total_touches_in_journey": 7
}
```

| Campo | Pregunta que le responde a quien escribe el siguiente mensaje |
|---|---|
| `lead_id` | ¿Con quién estoy hablando? |
| `last_meaningful_interaction` | ¿Dónde quedamos por última vez de verdad? |
| `last_promise_made_by_us` | ¿Qué nos comprometimos a hacer? |
| `last_promise_status` | ¿Ya lo cumplí o sigue pendiente? |
| `last_objection_unresolved` | ¿Qué sigue sin resolverse? |
| `last_emotional_signal` | ¿En qué tono estoy hablando con esta persona? |
| `preferred_channel` | ¿Por dónde le escribo? |
| `preferred_time_window` | ¿A qué hora le escribo? |
| `stakeholders_in_loop` | ¿Quiénes más están en esta decisión? |
| `next_action_due` | ¿Para cuándo es la próxima acción? |
| `next_action_type` | ¿Qué toca hacer exactamente? |
| `touch_count_since_last_response` | ¿Cuánto insisto desde su última respuesta? |
| `total_touches_in_journey` | ¿Cuánto lleva este journey? |

---

## Listas cerradas para arrancar

```text
source          → organic | paid_meta | paid_google | referral | outbound | evento | otro
channel         → whatsapp | instagram_dm | web_form | llamada | email | referido_persona | otro
authority_signal→ decision_maker | influencer | gatekeeper | end_user | otro
timing_signal   → now | 30d | 90d | exploring | no_timeline | otro
budget_signal   → confirmed | estimated | unknown | below_range | otro
commitment_level→ verbal_yes | written_yes | soft_yes | hedge | no | otro
next_step_specificity → fecha_y_hora | fecha_solamente | "pronto" | ninguno | otro
```

```text
loss_reason_primary → precio | timing | fit_producto | decisión_interna | competidor
                    | autoridad | sin_presupuesto | sin_respuesta | otro
tipping_factor      → precio | demo | caso_estudio | urgencia | referencia | otro
goal_of_touch       → responder_objecion | dar_valor | pedir_decision | reagendar
                    | re_engage | otro
response_category   → quiere_avanzar | pide_info | objecion | pide_pausa | ghost | otro
response_sentiment  → positivo | neutro | dilatorio | negativo | fuera_de_tema | otro
trigger_type        → time_based | event_based | manual_decision | otro
personalization_level → plantilla_pura | plantilla_con_nombre | plantilla_personalizada
                    | manual_total | otro
content_type        → texto | audio | video | link | caso_estudio | propuesta
                    | calendario | otro
```

**Toda lista termina en `otro` → cola de revisión.** Son valores de arranque: al
cumplir las dos primeras semanas de colas de revisión, graduá lo que se repitió y
dejá de usar `otro` como cajón de sastre.

---

## Checklist de arranque

```text
# Configuración del laboratorio
[ ] La unidad de valor y el evento de conversión están definidos
[ ] El pipeline refleja lo que realmente ocurre, no lo que debería ocurrir
[ ] Cada etapa tiene una entrada, una salida y un responsable
[ ] Las métricas pueden obtenerse de una fuente verificable
[ ] Existe un periodo inicial para construir la línea base
[ ] La revisión semanal tiene día, hora y responsable
[ ] El primer experimento modifica una sola variable
[ ] El equipo sabe qué significa terminado

# Stack mínimo de datos
[ ] CRM con campos personalizados estructurados (no notas libres)
[ ] WhatsApp Business API conectado al CRM
[ ] Calendario integrado (cada call se loguea)
[ ] Listas cerradas de fuente, canal, objeciones y motivo de pérdida
[ ] Plantillas con identificador y versión
[ ] Dos dashboards: ventas (acción) y producto/leadership (patrones)
[ ] Una persona o agente de IA que revisa la cola de «otros» cada lunes
```

---

## Árbol de diagnóstico rápido

| Síntoma | Revisar primero | No hacer todavía |
|---|---|---|
| No hay clientes | Exposición y volumen | Reinventar la oferta |
| Pocas respuestas | ICP y apertura | Bajar precio |
| No califican | Segmentación y preguntas | Aumentar volumen ciegamente |
| No agendan | CTA y seguimiento | Culpar al mercado |
| No asisten | Confirmación y urgencia | Cambiar la oferta |
| No compran | Diagnóstico, valor y objeciones | Descontar inmediatamente |
| Delivery se atrasa | Alcance, capacidad y onboarding | Contratar sin diagnóstico |
| Poco valor | Promesa, adopción y ejecución | Pedir testimonio |
| Satisfechos, sin crecimiento | Sistema de adquisición | Crear otro servicio |

---

## Umbrales que hay que conocer de memoria

| Umbral | Lectura | Fuente |
|---|---|---|
| MQL → SQL < 25% | Marketing trae mal | Calificación |
| MQL → SQL > 75% | El filtro es demasiado blando | Calificación |
| > 48h en calificación (B2B) | Oportunidad perdida | Calificación |
| `discovery_answers` < 70% llenos | El rep está adivinando | Calificación |
| `time_to_first_response` p90: 5 → 25 min | Problema de capacidad, horario o volumen | Captura |
| Conversión en canal sincrónico tras 10 min | La curva cae verticalmente | Captura |
| Rep habla > 60% del tiempo | Está pitcheando, no escuchando | Discovery |
| Monólogo > 90 segundos | Perdió atención | Discovery |
| Reps top: 11-14 preguntas en 30 min | Referencia de profundidad | Discovery |
| 2+ `momento_aha` en una llamada | Cierran 3x más | Discovery |
| T-optimal de toques en B2B: 6 a 9 | Pasado eso, hay fuga | Seguimientos |
| `manual_total` / personalizada vs `plantilla_pura` | Convierten 2-3x más | Seguimientos |
| 2 toques sin respuesta | Cambiar canal | Seguimientos |
| No abrió en 5 días | Cambio de canal | Seguimientos |
| `cold` ≥ 30d | Entra a la cola de re-engage (tablero de ventas) | Tableros |
| `cold` 60d + score alto | Dispara re-engage con plantilla nueva | Seguimientos |
| `blocker_specific` máx 240 chars | Límite duro del campo | Cierre |
| > 40% de `lost` marcados «precio» | No es precio: es la opción menos comprometedora | Cierre |
| > 3 revisiones de propuesta antes de firmar | Problema en discovery | Propuesta |
| `reschedule_count` ≥ 2 | Baja probabilidad de cierre | Discovery |
| Histograma: cola larga (> 6 meses en una etapa) | Leads zombis: no vivos, abiertos | Diagnóstico |
| `first_30d_churn` > 0% | Problema en handoff o en discovery | Handoff |

---

## Fuentes y atribución

Este curso reordena en clave didáctica dos documentos operativos internos del
sistema comercial LIB.SYS / AZXION: el *Proceso comercial* v2026.05 y el *SOP
Laboratorio de Crecimiento adaptable a cualquier negocio* v1.0, archivados para
estudio personal. Los campos, umbrales, taxonomías, listas cerradas y
procedimientos de este curso pertenecen a su autor original; la
reorganización en partes, los objetivos y las plantillas de trabajo de este
vault son trabajo preparado para este curso. Ambos documentos están marcados como
manuales operativos de uso interno.

---

## Marcos externos y fuentes

| Tema | Referencia | Para qué la usas |
|---|---|---|
| Calificación | BANT (práctica IBM, sin fuente primaria verificable) | En línea con tu advertencia: el acronym no reemplaza tus 3-5 criterios duros |
| Calificación | MEDDIC (PTC, 1996, Dunkel / McMahon / Napoli) | El marco de 6 campos; recórtalo a lo que tu rep llena de verdad |
| Calificación | SPIN Selling (Rackham, 1988; base: 35.000 llamadas) | El guion de preguntas de tu fase de discovery |
| Calificación | Mark Roberge, *The Sales Acceleration Formula* | Lead scoring cuantitativo en vez de intuición |
| Marco de ciclo de vida | SiriusDecisions / Forrester, *B2B Demand Waterfall* (2006) | Nomenclatura estándar para nombrar cada tramo de tu pipeline |
| Discovery | «The End of Solution Sales», Dixon & Adamson, *HBR* 2012 (estudio CEB, 6.000+ vendedores) | El perfil del vendedor que enseña y adapta en vez de limitarse a ofrecer su solución |
| Venta | The Challenger Sale (Dixon & Adamson, 2011) | Teach / tailor / take control |
| Proceso | CSO Insights, informes anuales de prácticas de venta | Evidencia de que seguir un proceso definido correlaciona con mejor cumplimiento de cuota; cita el año y el estudio |
| Proceso | 🟡 **Mito**: el «87% del training se olvida en 30 días» no tiene estudio original rastreable | Cítalo solo etiquetado como leyenda corporativa |
| Compradores | Gartner, *The B2B Buying Journey* — `gartner.com/en/sales/insights/b2b-buying-journey` | 17% del tiempo del comprador en reuniones con proveedores |
| Prospección | Woodpecker, *Cold Email Report* (`woodpecker.co/blog/cold-email-statistics`) | ~2% de respuesta en outbound frío; úsalo para calibrar, no para proyectar |
| Experimentos | Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments* (2020) | Por qué la mayoría de los experimentos falla y por qué la muestra importa |
| Experimentos | Evan Miller, «How Not To Run an A/B Test» (2011) | Peeking, poder estadístico y por qué un umbral de éxito definido de antemano te protege |
| Unit economics | Bill Gurley, «The Dangerous Seduction of the LTV Formula» (*Above the Crowd*, 2012) | Por qué LTV:CAC ≥ 3 es una regla práctica, no una verdad |
| Unit economics | David Skok, «SaaS Metrics 2.0» (*For Entrepreneurs*) | CAC, LTV y payback: la fórmula y su período de recuperación |
| Retención | Andrew Chen, *The Cold Start Problem* (2021) | Curvas de retención y product-market fit |
| Product-market fit | Sean Ellis (2009) / Rahul Vohra, *HBR* 2018, «How Superhuman Built an Engine to Find Product-Market Fit» | La prueba del 40%: qué fracción de usuarios estaría muy decepcionada si se fuera |

### Cómo usar esta lista

Estas son las anclas externas de un manual que, por lo demás, es autocontenido. El
orden para leerlas en una tarde: **Challenger** (la mentalidad), **SPIN** (el diseño
de preguntas), **MEDDIC** (los campos), **Kohavi** (la disciplina de experimento) y
**Gurley** (los límites de los números que se sienten verdad).

### Nota de atribución

Esta sección fue compilada para este curso como lista de lectura externa. El manual
en sí —el Proceso comercial v2026.05 y el SOP Laboratorio de Crecimiento v1.0—
pertenece al autor original del sistema LIB.SYS / AZXION, y los estudios citados
aquí siguen siendo propiedad de sus respectivos autores.

Peso de cada entrada, para saber cuánto sostienes sobre ella:

- 🟢 **Con respaldo de investigación** (muestra, metodología y publication): SPIN,
  Challenger (CEB), Kohavi/Tang/Xu, Reichheld & Sasser, Evan Miller, Andrew Chen.
- 🟡 **Documentado por practicantes, no revisado por pares**: BANT, MEDDIC y
  MEDDPICC, el lead scoring de Roberge como caso de HubSpot, CSO Insights, los
  datos de Woodpecker y el cuadro de Command Media. Úsalos como dirección y
  criterio, nunca como dato duro.
- 🔴 **Leyenda corporativa, sin estudio rastreable**: el «87% del training se olvida
  en 30 días».