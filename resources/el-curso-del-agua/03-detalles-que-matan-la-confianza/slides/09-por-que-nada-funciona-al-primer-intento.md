---
kicker: "marco · los intentos que se descartaron"
kind: content
notes:
  - "Reencuadrar el fracaso: tres intentos fallidos no son una historia de Intro, son el método. Todo hallazgo útil en arquitectura viene de una lista de cosas que no funcionaron."
  - "El patrón de las tres filas es el mismo: la técnica estaba bien, el escenario de prueba estaba mal. Por eso la tercera columna importa más que la segunda."
  - "La segunda sección cambia el presupuesto mental: hoy no hay que construir la capa 1 desde cero. Clasificador de intención, juez y guardrails vienen como funcionalidad del proveedor."
  - "La trampa final es la que hay que dejar sonando: probar contra un escenario imaginado en vez del que el cliente trae. Es la causa común de los tres fracasos."
---

# Por qué nada funcionó al primer intento

El autor probó varias cosas y las descartó. Eso no es fracaso: **es el método**.
Cada intento que se tira abajo deja un aprendizaje que sí se conserva.

## Los tres descartes

| Intento | Por qué se descartó | Qué aprendiste |
|---|---|---|
| Router por regex de palabras clave | Demasiados falsos positivos, y cada forma nueva de preguntar lo rompía | La variabilidad del lenguaje humano no se resuelve con listas de palabras |
| Search/translate de PDFs completo | La traducción devolvía contenido desordenado y se abandonaba el libro en 10 páginas | Una solución que degrada la experiencia mata el hábito |
| App de traducción de libros técnicos | Solo traducía libros simples, justo los que no necesitabas | El mejor producto es el que cubre el caso difícil, no el fácil |

## Por qué hoy el loop es barato

Los proveedores de modelos ya ofrecen clasificador de intención, *judges* y
guardrails como funcionalidad, no como proyecto. La alternativa a construir la capa
1 a mano es un modelo pequeño con una salida estructurada: lo mismo que hace el
router del curso, con menos piezas.

## La trampa

Los tres intentos compartían una misma causa: probar contra un escenario que el
autor imaginó, no contra el que el cliente traería. Por eso el curso insiste en
pruebas automatizadas con IA simulada y en buscar feedback real antes de refinar.