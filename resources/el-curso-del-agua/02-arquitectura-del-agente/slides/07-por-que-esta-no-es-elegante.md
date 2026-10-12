---
kicker: "arquitectura · el tradeoff"
kind: content
notes:
  - "Esta slide existe para que nadie salga pensando que la respuesta es 'más capas'. La honestidad de la complejidad es lo que hace que la parte sea creíble."
  - "Validar el sentimiento: la mayoría del grupo va a sentir lo mismo. El costo de decir «es feo pero funciona» es el precio de la confiabilidad."
  - "El dato que cambia el debate: revisando bibliografía, el patrón de múltiples IAs supervisándose es EL patrón real en la literatura, no una rareza personal del autor."
  - "Aclarar la ironía final sin caricaturizar a nadie: el mismo autor que escribe «Claude predica mucho eso» está describiendo la industria entera, no un producto."
---

# Por qué esto no es elegante

La incomodidad es real y no hay que disfrazarla:

> ✎ _Sinceramente, que haya tantos pasos supervisados por varias IAs no me suena elegante para nada. Por eso pensé que estaba haciendo algo mal._

Los costos suben. Y sí, suben — aunque no tanto como se temía. Lo otro que sube
es la **complejidad**: la solución ya no es una línea recta, es una cadena de
verificaciones. Y la elegancia se va.

## Pero es el patrón real

Revisando bibliografía, el autor se encontró con que esto no es una rareza suya:

> La IA no hace cosas deterministas sin un buen control, y ese control no pasa por
> «rezarle» al prompt y esperar a que funcione. Pasa por la **arquitectura**.

Es un trade-off, no una virtud. Eliges complejidad y costo por determinismo en lo
importante. La alternativa no es un sistema simple: es un sistema que funciona
por suerte.