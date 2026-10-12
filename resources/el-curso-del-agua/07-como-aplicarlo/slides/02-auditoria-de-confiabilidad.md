---
kicker: "aplicar · auditoría de confiabilidad"
kind: content
notes:
  - "Instrucción de uso: una fila por cada tipo de afirmación que tu agente puede hacer, no una fila por prompt. Si un mismo tipo de dato se responde desde dos caminos distintos, duplica la fila."
  - "La columna que importa es la tercera. Si la respuesta no se puede auditar, la celda queda vacía para el cliente aunque el agente suene seguro."
  - "La cuarta columna es la uncomfortable: si la respuesta es 'nadie', tu confiabilidad depende de que el modelo no se equivide hoy. Eso no es un control, es una esperanza."
  - "Conexión directa con el curso: la alucinación del catálogo y del precio del primer post es exactamente la fila uno de esta tabla con las tres celdas vacías."
---

## Auditoría de afirmaciones

Llena esta tabla con tu agente. Una fila por cada tipo de dato que puede afirmar.

| Afirmación que el agente puede hacer | ¿Viene de una herramienta? | ¿La respuesta se puede auditar? | ¿Quién la verificó? |
|---|---|---|---|
| Precio de un producto | … | … | … |
| Disponibilidad / stock | … | … | … |
| Características técnicas | … | … | … |
| Política de devolución / garantía | … | … | … |

**La regla:** si en la columna "¿La respuesta se puede auditar?" hay un *no*, esa
fila es una alucinación esperando a que alguien pregunte.