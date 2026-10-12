---
kicker: "arquitectura · capa 1"
kind: content
notes:
  - "Esta slide es el antídoto contra el desánimo de la parte 1: cada técnica «más simple» tiene su momento. El regex fue lo correcto hasta que dejó de serlo."
  - "El ejemplo de «¿y esta marca qué tal?» es el mejor material de la clase: pídele al grupo que invente cinco formas más de preguntar un precio. Ninguna habría pasado el filtro."
  - "La reflexión final del autor —que la técnica sirve para otras cosas que aún no ha descubierto— es honesta y útil: el regex no es inútil, es que no era la herramienta para ESTA decisión."
---

# El intento que no funcionó: regex

## Por qué las palabras clave no alcanzan

Al inicio, quizá por tacaño, se intentó **sin IA**: solo con similitud de
palabras. Si el cliente decía «precio», «producto» o algo parecido, eso obligaba a
la otra IA a llamar la herramienta de catálogo.

Funcionó durante un tiempo. Después:

- **Muchos falsos positivos.** Bastaba con mencionar la palabra para disparar una
  búsqueda inútil.
- **Y en cuanto aparecía una forma nueva de preguntar, se rompía.**
  *«¿y esta marca qué tal?»* y listo: regex inútil.

El problema de fondo es que un filtro de palabras intenta enumerar un espacio
abierto. El idioma humano es infinitamente variable, y una lista de palabras es
una lista finita.

> ✎ _Siento que ese tipo de soluciones sirve para otras cosas que aún no he descubierto._

La lección no es «nunca uses regex». Es: cuando la decisión dependa de
**intención** y no de **forma**, un modelo pequeño resuelve lo que una lista de
palabras no puede.