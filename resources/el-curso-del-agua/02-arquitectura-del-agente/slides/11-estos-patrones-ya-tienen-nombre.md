---
kicker: "marco · la industria ya lo llamó así"
kind: content
notes:
  - "Esta slide responde una objeción que siempre aparece: «esto es lo que hizo un autor, no lo que hace la industria». La respuesta es que la industria lo llamó antes, con otros nombres."
  - "No pasar fila por fila en voz alta. Señalar las tres primeras y saltar a la de Evaluator-optimizer, que es la que más sorprende: el fact-checker tiene nombre propio desde diciembre de 2024."
  - "Insistir en la fila de Semantic Router: existe una variante donde el enrutamiento no llama a ningún LLM. Sirve para desarmar la excusa de que «todo necesita un modelo»."
  - "Cerrar con la última línea. El curso no inventó una arquitectura, descubrió una que ya tenía nombre, documentación y años de antecedentes."
---

# Esto ya tiene nombre

## De lo que dibujaste a lo que ya está documentado

Lo que acabamos de dibujar no es una solución original de nadie. Es un conjunto
de patrones con nombre, documentados y medidos. La diferencia entre este curso y
un cuaderno de notas es que ahora puedes **buscarlos**.

| Patrón | Dónde está documentado | Qué coincide con tu agente |
|---|---|---|
| **Routing** | Anthropic, *Building effective agents* (dic 2024): "Routing classifies an input and directs it to a specialized followup task… classification can be handled accurately, either by an LLM or a more traditional classification model/algorithm" | El router de la capa 1 |
| **Router** (arquitectura multi-agente) | LangChain/LangGraph lo documentan como patrón oficial: un paso de clasificación que dirige a agentes especializados, "often a single LLM call or rule-based logic" | El router, y la razón de usar un modelo más barato ahí |
| **RouterQueryEngine** + selectores | LlamaIndex: enrutamiento como módulo aparte y componible, con selectores enchufables (`PydanticSingleSelector`) | El router como pieza separada, no parte del prompt |
| **Semantic Router** | aurelio-labs/semantic-router: enrutamiento determinista por embeddings, sin llamada al LLM | La variante extrema del router: para intenciones bien acotadas no hace falta un LLM |
| **Evaluator-optimizer** | Anthropic, mismo post: un LLM genera y otro evalúa y da feedback en un bucle | El fact-checker de la capa 3 |
| **Orchestrator-workers** | Anthropic, mismo post | La memoria de resultados + las capas supervisoras |

Cuando un patrón tiene nombre hay documentación, benchmarks, implementaciones de
referencia y años de anteriores que discutir. El curso no inventó una
arquitectura: descubrió una que ya existía.