---
kicker: "detalles · la memoria"
kind: content
notes:
  - "Corregir el texto con typos."
  - "Idea clave: la herramienta no habla con el cliente, habla con el modelo. Su salida es contexto, no una respuesta. Muchos la escriben pensando en el cliente."
  - "El bonus de auditar es lo que más gusta: convertir un bug invisible en algo que el cliente puede verificar por ti mismo."
---

# El problema es la memoria

Descubrirlo costó tiempo y más datos, y es el hallazgo más útil de todo el
diario:

> ✎ _La mala gestión de memoria en n8n se debe a que su memoria se contamina al
> llamar tools: estas entregan un código muy complejo, luego el modelo alucina y
> genera malas respuestas porque el contexto se ensucia._

La cadena, paso a paso:

1. Tu agente llama a una herramienta.
2. La herramienta devuelve **código muy complejo**: un JSON completo, ids
   anidados, metadatos que nadie pidió.
3. Ese volcado **entra al contexto** del modelo.
4. El modelo, ante ese ruido, **alucina encima**: lo interpreta como si fuera
   información.
5. El contexto queda **ensuciado**, y las siguientes respuestas salen malas.

Fíjate en la parte cruel: no es un fallo de la herramienta ni del modelo. Es un
fallo de **contrato de salida**. Y el contexto sucio se arrastra: cada turno
hereda el desastre del anterior.