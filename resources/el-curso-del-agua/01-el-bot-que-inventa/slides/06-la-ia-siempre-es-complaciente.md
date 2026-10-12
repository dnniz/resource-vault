---
kicker: "el bot que inventa · por qué falla"
kind: content
notes:
  - "La idea fuerte: el optimismo de la IA no es un defecto que se corrige con instrucciones. Es una estructura. Va a seguir ahí con cualquier prompt."
  - "La analogía reutilizable: un estudiante que no sabe la respuesta nunca dice «no sé», siempre tiene algo parecido. El modelo hace lo mismo, pero con fluidez."
  - "Matar el peor modo de fallo aquí, porque es el que más se repite en producción: no es que falle siempre. Es que falla de forma invisible en las pruebas y visible con el cliente."
---

# Por qué el prompt no puede: la IA es complaciente

## Por qué el prompt no alcanza

> ✎ _La IA siempre va a ser complaciente, siempre va a querer dar una respuesta aunque no la sepa. En texto, para ella, todo es posible._

Ese optimismo juega **en contra** de las reglas que uno le da. No es que no entienda
la instrucción: es que el impulso a responder es más fuerte que el respeto a la
instrucción.

Y el peor modo de fallo no es que falle siempre. Es este:

- Funciona **en las pruebas**, donde el caso es limpio y tú revisas cada mensaje.
- Y de cara al cliente **se comporta totalmente distinto**.

Porque entre el probarlo y que lo use una persona hay una diferencia de contexto,
de volumen y de consecuencias que ningún prompt corrige. Un sistema que solo
funciona cuando lo supervisas no está funcionando: está dependiendo de que mires.