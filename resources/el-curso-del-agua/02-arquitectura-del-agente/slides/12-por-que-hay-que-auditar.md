---
kicker: "marco · verificar es una técnica publicada"
kind: content
notes:
  - "Matar la sensación de que la capa 3 es un parche del autor. Es una técnica con artículo revisado por pares y nombre propio."
  - "El detalle que hay que subrayar en Chain-of-Verification: las preguntas de verificación se responden de forma independiente, sin ver la respuesta original. Eso es exactamente la separación entre el fact-checker y la IA principal."
  - "CRITIC es la slide más accionable: la conclusión incómoda es que pedirle al modelo que se autocorrija no sirve. Solo funciona si la crítica viene de una herramienta."
  - "Los números de ToolTalk y Gorilla existen para que nadie diga «esto es raro de ver». Si GPT-4 falla la mitad de las tareas de uso de herramientas, tu agente va a fallar."
  - "El cierre es lo que hay que llevarse: antes de construir la capa 4, revisar la 1 y la 2. Un fact-checker sobre parámetros mal armados solo verifica basura con más pasos."
---

# Por qué hay que auditar

La capa 3 no es una manía del autor. Es una técnica publicada, y el problema que
resuelve está medido.

## Verificar es una técnica, no un reflejo

**Chain-of-Verification** (Dhuliawala et al., Meta, arXiv:2309.11495) propone un
procedimiento explícito: el modelo redacta, planifica preguntas de verificación,
**responde esas preguntas de forma independiente** y recién ahí produce la
respuesta final verificada. Ese "responder aparte, sin el sesgo de la respuesta
anterior" es exactamente la separación entre el fact-checker y la IA principal.

**LLM-as-a-Judge** (Zheng et al., arXiv:2306.05685) muestra que un LLM fuerte como
juez coincide con la preferencia humana en más del 80%, pero arrastra sesgos
documentados: de posición, de verbosidad y de **auto-favoritismo**. Por eso el
juez tiene que comparar contra **hechos verificados por herramientas**, no contra
su propia opinión.

**CRITIC** (Gou et al., arXiv:2305.11738) cierra el punto: los LLM no se
autocorrigen bien con su propio conocimiento interno. Se autocorrigen cuando la
crítica está **anclada en herramientas**.

## Y el problema es real, no teórico

En **ToolTalk** (Farn & Shin, Microsoft, arXiv:2311.10775), GPT-4 resolvió solo el
**50%** de las tareas conversacionales de uso de herramientas, y GPT-3.5 el
**26%**. **Gorilla** (Patil et al., arXiv:2305.15334) documenta la alucinación en
el uso de APIs y muestra que consultar la documentación real de la API en el
momento de la llamada la reduce.

> Nota práctica: antes de construir la capa 4, corrige la capa 1 y la capa 2. Un
> fact-checker sobre parámetros mal armados solo verifica basura.