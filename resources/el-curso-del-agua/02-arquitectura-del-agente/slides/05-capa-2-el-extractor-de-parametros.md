---
kicker: "arquitectura · capa 2"
kind: content
notes:
  - "Esta capa ataca un fallo DISTINTO al del router. Pedir al grupo: si el router ya funciona, ¿qué más puede salir mal? La respuesta es 'que la herramienta se llame mal'."
  - "La analogía del cuadrado es la que hay que explicar despacio: un endpoint no acepta 'triángulo' donde pide un cuadrado. La IA no es más lista por querer poner lo que quiere."
  - "Lo peligroso de este fallo es que no se ve: la herramienta devuelve error, la IA lo interpreta, y el cliente recibe un 'no tenemos ese producto' que es mentira."
---

# Capa 2: el extractor de parámetros

El router ya obliga a consultar. Aun así, el agente falla — y falla de otra
clase: **la IA principal arma mal los argumentos de la herramienta.**

## Una herramienta tiene piezas obligatorias

A veces ponía mal las palabras, o las ponía de una forma no permitida. La
analogía es exacta:

> ✎ _Si tienes que poner un cuadrado, no te acepta otra figura ahí._

Y aquí está la trampa: **la herramienta devuelve error**. Entonces la IA
interpreta el error como información de negocio:

> «Ah, salió vacío o error, supongo que no tengo ese producto.»

El error técnico se convierte en una mentira comercial. El catálogo sí tiene el
producto; la búsqueda estaba mal formada.

Acá se creó **otra IA chiquita, dedicada exclusivamente a armar bien las
búsquedas y dar los parámetros correctos**. Resultado: mejores búsquedas y más
precisión.

El patrón se repite: una decisión acotada y verificable → un modelo pequeño que
solo la toma.