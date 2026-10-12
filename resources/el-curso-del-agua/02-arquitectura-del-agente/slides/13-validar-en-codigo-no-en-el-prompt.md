---
kicker: "marco · validar en código"
kind: content
notes:
  - "La tesis: el prompt es la capa de defensa más débil. Todo lo demás se puede enforcing; una instrucción en texto, no."
  - "La cita de OpenAI sobre el modo estricto es la que hay que leer despacio: el vendor dice 'lo recomendamos siempre'. Eso convierte la validación en código de la configuración por defecto, no en una preferencia."
  - "El error típico es creer que el esquema JSON ya es la validación. La cita del cookbook lo desmonta: el esquema garantiza forma, el código garantiza semántica. Son dos pisos distintos."
  - "XGrammar sirve para el que va a construir el decodificador. En la mayoría de los casos la respuesta práctica es simplemente activar el modo estricto del proveedor."
  - "Los enums de Anthropic son el truco de mayor retorno y el más barato: si el estado inválido no se puede escribir, desaparece una clase entera de errores."
  - "El orden de la lista final es el orden de implementación. Si alguien solo se lleva una cosa de la slide, que sea esa secuencia."
---

# Validar en código, no en el prompt

Los argumentos de una llamada a herramienta tienen que estar validados por el
decodificador o por tu código. El prompt es la capa de defensa más débil que
existe.

## Lo que el decodificador garantiza

**OpenAI Structured Outputs** "ensures the model will always generate responses
that adhere to your supplied JSON Schema, so you don't need to worry about the
model… hallucinating an invalid enum value". Para llamadas a funciones, el modo
estricto "will ensure function calls reliably adhere to the function schema,
instead of being best effort. **We recommend always enabling strict mode.**"

**XGrammar** (Dong et al., MLSys 2024, arXiv:2411.15100) es el mismo principio por
otro lado: decodificación restringida por gramáticas libres de contexto, con
"100% structural correctness" y sobrecarga casi nula. Outlines es su equivalente
de código abierto.

**Anthropic** recomienda usar **enums** para volver irrepresentables los estados
inválidos, y en su guía de herramientas afirma que las descripciones detalladas
son "by far the most important factor in tool performance".

**NeMo Guardrails** (NVIDIA, arXiv:2310.10501) agrega *execution rails*, que
validan la entrada y la salida de cada herramienta antes y después de invocarla.

## La línea que hay que memorizar

Del cookbook de Structured Outputs de OpenAI:

> "Structured Outputs ensures that tool calls follow the specified schema.
> **Application code must still validate argument semantics and business rules.**"

Es decir: el esquema es el piso 1, la regla de negocio es el piso 2, y ninguno de
los dos vive en el prompt.

## El orden para implementar

1. Enums en el esquema, para que el estado inválido no sea escribible.
2. Modo estricto o decodificación restringida, para que la forma se cumpla siempre.
3. Validación en tu código, con reintento cuando la herramienta la rechace.
4. Y recién ahí, el fact-checker del texto final.