---
kicker: "arquitectura · capa 3"
kind: content
notes:
  - "Este es el fallo más interesante de los tres, porque la data era correcta. El problema no es la información: es la interpretación comercial que el modelo le agrega encima."
  - "Matar el misconception: «si los datos son buenos, la respuesta es buena». No. El modelo escribe un argumento de venta alrededor de esos datos, y ese argumento es donde aparece lo falso."
  - "Detalle de implementación que hay que mencionar: por eso existe la memoria de búsquedas. Sin el registro de 'qué se buscó y qué volvió', el fact-checker no tiene contra qué comparar."
  - "Heurística de palabras similares se intentó y no funcionó — igual que en el router. Cuando la decisión requiere juicio sobre el texto completo, la similitud no alcanza."
---

# Capa 3: el fact-checker, la IA que revisa a la IA

Este es el fallo más raro: la IA tenía la data correcta y aun así mintió.

> ✎ _La IA, después de tener la data correcta, se emociona y empieza a inflar cosas sobre las que no tiene información. Seguro porque le dije "tu objetivo es vender". ¿Pero vender con mentiras? Fatal._

Fíjate en el detalle: no le faltó información. **Se emocionó.** El prompt de
vender squeezea el texto hacia arriba y aparece lo que no estaba.

## Qué hace el fact-checker

1. Revisa lo que dice la IA principal.
2. Mira si habla de **productos, precios o características**.
3. Comprueba si en la conversación esos productos realmente aparecieron — en una
   **memoria aparte donde se almacenan las búsquedas con sus resultados**.
4. Verifica qué es cierto y qué no, **basándose solo en la información del
   catálogo**.
5. **Elimina lo falso** y corrige el texto final que llega a la persona.

Aquí también se probó el approach de palabras similares y no funciona bien.

> ✎ _La solución no pasa por pedirle por favorcito que no haga eso. Pasa por cambiar la forma en que entrega las respuestas._