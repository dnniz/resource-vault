---
title: "Kit: prompts, patrones y glosario"
order: 8
summary: "Referencia de consulta: los patrones de arquitectura del curso, prompts base para router, extractor y fact-checker, taxonomía de salidas de herramienta, checklist de producción y glosario."
objectives:
  - "Identificar qué patrón de arquitectura falta en tu agente"
  - "Usar los prompts base como punto de partida y saber qué ajustar"
  - "Normalizar las salidas de herramienta para evitar contaminación de contexto"
  - "Revisar un agente en producción con la checklist completa"
prerequisites:
  - 02-arquitectura-del-agente
duration: "consulta"
---

## 1. Los tres patrones de arquitectura

La lección central del curso es que la confiabilidad de un agente no depende del
prompt sino de las capas que lo sostienen. Estos son los tres patrones que
aparecen en el curso, con la señal que indica que te falta.

| Patrón | Qué resuelve | Qué capa lo implementa | Señal de que te falta |
|---|---|---|---|
| Router de intenciones | Que una pregunta de catálogo gatille la herramienta, en vez de depender de que la IA "se acuerde" | Un clasificador binario pequeño antes de la IA principal | El agente responde precios sin haber consultado la herramienta |
| Extractor de parámetros | Que la herramienta reciba los parámetros válidos que exige | Un segundo modelo que arma los argumentos | La herramienta devuelve error y el modelo lo interpreta como "no existe" |
| Fact-checker contra memoria de resultados | Que no se inventen características o precios al redactar la respuesta | Un verificador que contrasta el borrador con los resultados guardados | Inventa datos que "estaban en la conversación" |
| Salida de tool en texto plano | Que el JSON complejo contamine el contexto y degrade las respuestas siguientes | La propia herramienta devuelve un párrafo limpio | El agente empeora después de varias llamadas a herramientas |
| Memoria de resultados de búsqueda | Poder auditar de dónde salió cada dato | Un almacén aparte de resultados, no el historial del chat | No puedes responder "¿de dónde salió este precio?" |

Sobre el patrón de salida en texto plano: la causa del problema suele estar en
la forma del retorno, no en el prompt. Es el ajuste de mayor impacto y el más
barato.

## 2. Prompts base

Los tres prompts siguientes son **puntos de partida**, no citas del autor. Se
reconstruyeron a partir de la arquitectura descrita en el curso para que puedas
adaptarlos a tu dominio. Ninguno funciona sin los bullets de ajuste que lo
acompañan.

### Router de intenciones

```text
Tu única función es decidir si un mensaje del usuario requiere consultar
el catálogo de productos antes de responder.

Responde EXACTAMENTE con una de estas dos opciones y nada más:
- SI: el mensaje pregunta por un producto, un precio, una característica,
  la disponibilidad o cualquier dato que solo existe en el catálogo.
- NO: es un saludo, un agradecimiento, una pregunta general, una queja sin datos
  de producto, o cualquier otro tema.

No expliques tu decisión. No agregues texto. No uses otros valores.

Ejemplos:
"¿cuánto cuesta la marca X?" -> SI
"¿y esta marca qué tal?" -> SI
"hola, buenos días" -> NO
"gracias, me sirvió mucho" -> NO
"¿me pueden facturar a mi empresa?" -> NO
```

Qué ajustar:

- **La lista de ejemplos.** Es lo primero que hay que reescribir: pon mensajes
  reales de tu cliente, incluyendo los que te han hecho fallar.
- **La frontera entre SI y NO.** Si dudas, define explícitamente los casos
  ambiguos. Un tema que no está en la lista se resuelve en NO.
- **La salida estricta.** Un modelo pequeño con salida binaria es más barato y más
  determinista que uno que "intenta" decidir.

### Extractor de parámetros

```text
Recibirás el esquema de una herramienta de catálogo y el mensaje del usuario.

Tu salida debe ser ÚNICAMENTE el objeto de parámetros que la herramienta espera.
Sin explicaciones, sin texto antes ni después, sin envolver en markdown.

Reglas:
- Usa solo valores que estén permitidos por el esquema. Si el esquema exige un
  valor de una lista cerrada y el usuario no dijo ninguno, no lo inventes.
- Si falta un parámetro obligatorio y no puedes deducirlo del mensaje, responde
  únicamente con la pregunta que debes hacerle al usuario.
- No agregues campos que no estén en el esquema.

Esquema de la herramienta:
{PEGAR_AQUI_EL_ESQUEMA}

Mensaje del usuario:
{PEGAR_AQUI_EL_MENSAJE}
```

Qué ajustar:

- **El esquema, literal.** El extractor no debe interpretar el esquema: lo copia.
- **La regla del "no inventes" en listas cerradas.** Es la que más errores evita
  cuando el cliente usa marcas o tamaños que el modelo reconoce pero no están en el
  catálogo.
- **La salida de pregunta.** Debe ser una sola pregunta, no un formulario de
  requisitos.

### Fact-checker

```text
Recibirás un borrador de respuesta y los resultados de las consultas al
catálogo que respaldan la respuesta.

Revisa el borrador y lista cada afirmación sobre un producto, un precio o una
característica. Para cada una, marca:
- SOPORTADA: aparece en los resultados del catálogo.
- NO SOPORTADA: no aparece en los resultados.
- ALTERADA: aparece pero con un valor o un matiz diferente.

Luego devuelve el texto corregido: el borrador con las afirmaciones NO
SOPORTADA eliminadas y las ALTERadas ajustadas a su valor real. No agregues
información nueva. No cambies el tono.

BORRADOR:
{PEGAR_AQUI_EL_BORRADOR}

RESULTADOS DEL CATÁLOGO:
{PEGAR_AQUI_LOS_RESULTADOS}
```

Qué ajustar:

- **La taxonomía de las tres marcas.** Sostenerla explícita en el prompt es lo que
  hace el trabajo auditable después: queda un registro de qué se corrigió.
- **"No cambies el tono".** Sin esta línea el fact-checker devuelve respuestas
  correctas y frías, que el cliente percibe como otro bot.
- **La memoria de resultados.** Tiene que ser una fuente separada y legible. Si
  mezclas historial de conversación con resultados, el verificador no puede
  distinguir lo que dijo el cliente de lo que vino del catálogo.

## 3. Taxonomía de salidas de herramienta

| Tipo de dato | Formato recomendado | Por qué |
|---|---|---|
| Resultado de búsqueda | Párrafo plano ordenado | Un párrafo se lee sin parsing; un JSON largo se ensucia el contexto |
| Error de herramienta | Mensaje explícito que **no** se interprete como "no existe" | El caso clásico: salida vacía o error, el modelo concluye que el producto no está |
| Vacío vs error | **Valores distintos, nunca el mismo** | "No hay resultados" y "falló la consulta" requieren respuestas opuestas al cliente |
| Datos del cliente | Contexto compacto | Suficiente para responder, insuficiente para distraer |
| Archivo o binario | URL, nunca contenido crudo | El contenido crudo satura la ventana y rompe la siguiente respuesta |

Las dos primeras filas son el mismo aprendizaje visto desde dos ángulos: el
contrato entre herramienta y modelo tiene que ser explícito en los casos que el
modelo interpretaría por su cuenta.

## 4. Checklist de agente en producción

```text
FIABILIDAD
[ ] El agente tiene una capa de control para lo que no puede afirmar
[ ] Las afirmaciones de precio y stock salen de una herramienta, no del prompt
[ ] Existe un criterio explícito para qué se controla y qué se deja libre
[ ] Un vacío de herramienta nunca se confunde con "no existe"

MEMORIA
[ ] El historial de conversación no se usa como fuente de datos de catálogo
[ ] Los resultados de las herramientas se guardan en un almacén aparte
[ ] Cada afirmación del agente puede rastrearse hasta su resultado de origen

HERRAMIENTAS
[ ] Los parámetros se arman en una capa dedicada, no en el modelo principal
[ ] Las herramientas devuelven texto plano ordenado, no JSON complejo
[ ] El formato de salida de cada herramienta está escrito en el contrato

PRUEBAS
[ ] Existe un conjunto de conversaciones que SÍ deben llamar a la herramienta
[ ] Existe un conjunto de conversaciones que NO deben llamarla
[ ] Las pruebas se ejecutan en cada cambio de prompt
[ ] Una regresión bloquea el build, no se reporta para después
[ ] Hay una ventana de testing que no toca los registros de producción

COSTOS
[ ] El router y el extractor usan un modelo pequeño, no uno de frontera
[ ] El modelo principal se usa solo donde hace falta razonamiento

OPERACIÓN
[ ] El modelo de datos del cliente se pide ordenado antes de empezar
[ ] El costo de preparar esa información está nombrado y cobrado
[ ] Hay un dashboard con datos del cliente, no con flujos técnicos
[ ] El siguiente paso de venta está bloqueado en el calendario
```

## 5. Glosario

### Arquitectura y técnica

| Término | Definición |
|---|---|
| Agente | Modelo que además de responder ejecuta acciones mediante herramientas |
| Herramienta (tool) | Función externa que el agente puede invocar para obtener datos o ejecutar acciones |
| Router | Capa que decide, antes del modelo principal, si un mensaje requiere una herramienta |
| Clasificador de intenciones | Implementación concreta del router; en el curso, binaria: SI o NO |
| Extractor de parámetros | Capa que traduce el mensaje del usuario a los argumentos válidos de una herramienta |
| Fact-checker | Verificador que contrasta el borrador de una respuesta contra la fuente real |
| Alucinación | Afirmación presentada como cierta que el modelo no tiene sustento en los datos |
| Memoria de conversación | Historial de la conversación en curso; no es una fuente de datos de catálogo |
| Memoria de resultados | Almacén separado donde quedan los retornos de las herramientas, para poder auditar |
| Contaminación de contexto | Degradación del modelo cuando el historial incluye retorno complejos o irrelevantes |
| Prompt | Instrucciones que se le dan al modelo para una tarea |
| System prompt | Bloque de instrucciones que define el rol y las reglas del agente |
| Temperatura | Parámetro que controla la variabilidad de la salida; más alta, menos determinista |
| Salida estructurada | Petición de que el modelo responda en un formato fijo, parseable |
| JSON | Formato de datos estructurado; útil en la frontera con herramientas, ruidoso dentro del contexto |
| Grounding | Que una afirmación tenga respaldo verificable en datos externos, no en el modelo |
| Determinismo en lo importante | Que las respuestas con dinero o datos concretos no dependan del azar del modelo |
| Token | Unidad mínima de texto que procesa el modelo; la medida real de costo y de ventana de contexto |
| Latencia | Tiempo entre la pregunta y la respuesta; sube con cada capa de control que añades |
| Modelo pequeño vs modelo frontera | Un modelo barato para decisiones binarias, uno potente para el razonamiento final |
| n8n | Herramienta de automatización visual con nodos, usada en el curso como base de los workflows |
| Nodo | Paso individual de un workflow en n8n |
| Workflow | Flujo completo de pasos automatizados |
| Credencial | Acceso a un servicio externo, guardado fuera del prompt y fuera del repositorio |

### Negocio y operación

| Término | Definición |
|---|---|
| SLA | Compromiso de nivel de servicio: qué se garantiza y en qué plazo |
| Onboarding | Proceso de poner en marcha un agente para un cliente nuevo; en el curso, el activo que más se rompe al cambiar de rubro |
| Nicho | En este curso, no un sector sino una situación compartida: volumen de consultas, equipo pequeño, canal principal |
| ICP | Perfil de cliente ideal, descrito con los rasgos que predicen un buen ajuste |
| Funnel | Recorrido desde el primer contacto hasta la compra |
| CAC | Costo de adquirir un cliente |
| LTV | Valor total que un cliente genera a lo largo del tiempo |
| MVP | Versión mínima que permite validar una hipótesis con clientes reales |
| Productizar | Convertir un trabajo a medida en un producto repetible y predecible |
| PACTO | Compromiso con formato Acción + Frecuencia + Periodo fijo; un experimento, no una meta |

## Fuentes y atribución

Este curso está derivado del newsletter **"El Curso del Agua"** de Stiven Rosales
(diciembre 2025 – mayo 2026), publicado en
<https://elcursodelagua.substack.com>. Las anécdotas, cifras, nombres de clientes
y decisiones de negocio que aparecen aquí pertenecen al autor y se presentan como
experiencia reportada, no como doctrina. Los prompts de la sección 2 son
reconstrucciones preparadas para este vault a partir de la arquitectura descrita
en el curso; no son citas textuales del original.

## 6. Marcos externos: papers y documentación

La arquitectura que este curso enseña tiene nombres, papers y documentación
oficial fuera del curso. Esta tabla es el mapa para pasar de "esto lo construí yo"
a "esto lo puedo citar".

| Tema | Referencia | Qué respalda |
|---|---|---|
| Enrutamiento | Anthropic, *Building effective agents* — `anthropic.com/engineering/building-effective-agents` | Nombra Routing y Evaluator-optimizer como patrones |
| Enrutamiento | LangChain — `docs.langchain.com/oss/python/langchain/multi-agent/router` | El router como patrón oficial de arquitectura |
| Enrutamiento | LlamaIndex — `developers.llamaindex.ai/python/framework/module_guides/querying/router/` | RouterQueryEngine y selectores componibles |
| Enrutamiento sin LLM | aurelio-labs/semantic-router — `github.com/aurelio-labs/semantic-router` | Routing determinista por embeddings |
| Verificación | Chain-of-Verification — `arxiv.org/abs/2309.11495` | Verificar por preguntas respondidas aparte reduce alucinación |
| Verificación | LLM-as-a-Judge — `arxiv.org/abs/2306.05685` | >80% de acuerdo con humanos; sesgos de posición, verbosidad y auto-favoritismo |
| Autocorrección | CRITIC — `arxiv.org/abs/2305.11738` | Autocorregirse funciona si la crítica usa herramientas |
| Parámetros | OpenAI Structured Outputs — `developers.openai.com/api/docs/guides/function-calling` | `strict` garantiza adherencia al esquema; el código sigue validando semántica |
| Parámetros | XGrammar — `arxiv.org/abs/2411.15100` | Decodificación restringida con 100% de corrección estructural |
| Parámetros | Anthropic, *Define tools* — `platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools` | Enums vuelven irrepresentables los estados inválidos |
| Guardrails | NeMo Guardrails — `arxiv.org/abs/2310.10501` · `docs.nvidia.com/nemo/guardrails/` | Execution rails validan la entrada y salida de cada herramienta |
| Alucinación con tools | ToolTalk — `arxiv.org/abs/2311.10775` | GPT-4 resuelve el 50% de tareas multi-paso |
| Alucinación con tools | Gorilla — `arxiv.org/abs/2305.15334` | Alucina argumentos de API; consultar la doc real lo reduce |
| Routing por costo | RouteLLM — `arxiv.org/abs/2406.18665` | Más de 2× menos costo sin perder calidad |
| Routing por costo | RouterBench — `arxiv.org/abs/2403.12031` | 405k resultados; el router oráculo casi nunca elige GPT-4 |
| Cascadas | FrugalGPT — `arxiv.org/abs/2305.05176` | Hasta 98% menos costo igualando a GPT-4 |
| Cascadas | LLM Cascades — `arxiv.org/abs/2310.03094` | Calidad de GPT-4 con el 40% del costo |

### Cómo leer estas fuentes

Todas las entradas son fuentes primarias: papers con identificador de arXiv y
documentación oficial de los proveedores. No hay tutoriales intermedios ni
resúmenes de terceros, así que el tiempo de lectura se convierte directamente en
vocabulario y en material citable. Para quien solo tiene una hora: primero la
publicación de Anthropic, que es la más corta y da el vocabulario completo;
después Chain-of-Verification, que es lo que justifica la capa de verificación;
después la guía de llamadas a función de OpenAI, que es lo que convierte el
esquema en una garantía en vez de una sugerencia.

Esta sección se compiló para este curso como lista de lectura externa. La
arquitectura que documenta proviene del newsletter *El Curso del Agua* de Stiven
Rosales; los hallazgos de los papers son originales de sus autores y se citan
como evidencia publicada, no como respaldo del curso.