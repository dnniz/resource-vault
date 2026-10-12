---
kicker: "marco · el costo del routing"
kind: content
notes:
  - "Conectar con la parte 02: el modelo barato en el router no era una decisión de presupuesto. Es una decisión con literatura detrás."
  - "El primer dato es el más accionable y el más fácil de verificar: la diferencia de precio dentro de una misma familia es de un orden de magnitud, sin que la tarea del router sea más difícil."
  - "RouterBench es el número que mata el mito: si el mejor router posible casi nunca elige GPT-4, entonces usar GPT-4 en el router es gasto de cola, no seguro."
  - "FrugalGPT y LLM Cascades muestran que el ahorro grande viene de la cascada (barato primero, caro solo si hace falta), no de un modelo 'bueno y barato' que no existe."
  - "Cerrar con el pedido concreto: registrar el porcentaje de turnos que pasó por el router barato y el costo hipotético con el modelo grande. Sin ese registro, nadie puede defender la decisión ni ajustarla."
---

# Cuando el routing sale a cuentas

Poner un modelo barato en el router no es una concesión. Es un intercambio de
ingeniería con números publicados.

## El rango de precios dentro de una misma familia

| Modelo | Entrada (por millón de tokens) | Salida (por millón de tokens) |
|---|---|---|
| Claude Haiku 5.5 | $0.10 | $0.50 |
| Claude Sonnet 5.5 | $2 | $10 |

Es unas 20 veces más barato, y la tarea — decidir entre dos opciones — no es más
difícil. Fuente: precios públicos de Anthropic.

## Lo que dice la literatura

**RouteLLM** (Ong et al., LMSYS, arXiv:2406.18665): routers entrenados con datos
de preferencia reducen el costo **más de 2×** sin degradar la calidad de la
respuesta.

**RouterBench** (Hu et al., arXiv:2403.12031): 405.000 resultados de inferencia
sobre 11 modelos. Un router con oráculo alcanza calidad casi óptima usando
modelos baratos, y **GPT-4 casi nunca es el elegido**.

**FrugalGPT** (Chen, Zaharia & Zou, arXiv:2305.05176): las tarifas de API difieren
en dos órdenes de magnitud, y una cascada entrenada iguala a GPT-4 con hasta
**98% menos costo**.

**LLM Cascades** (Yue et al., ICLR 2024, arXiv:2310.03094): calidad comparable a
GPT-4 con el **40% del costo**, usando la consistencia de las respuestas del
modelo barato como señal para escalonar.

La decisión que ya tomó el autor del curso — modelo rápido y barato en el router,
modelo grande en la conversación — es la que la literatura mide. Lo que hay que
añadir es el registro: qué porcentaje de turnos pasó por el router barato y qué
habría costado con el modelo grande.