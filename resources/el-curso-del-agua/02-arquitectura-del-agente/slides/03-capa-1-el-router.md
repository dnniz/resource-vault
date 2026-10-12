---
kicker: "arquitectura · capa 1"
kind: content
notes:
  - "El error a matar aquí: «mi agente es inteligente, ¿por qué no decide bien?». La respuesta es que estamos pidiendo una decisión binaria a un modelo al que le cargamos cuarenta instrucciones más. Mala tarea para ese modelo."
  - "El término clave es chiquita: pequeña, barata y rápida. Su única tarea no requiere inteligencia, requiere obediencia."
  - "Pregunta para el grupo: ¿qué dos opciones tiene que elegir el router? Si alguien dice «buscar, no buscar, o preguntar más detalles», ya entendió que son exactamente dos."
---

# Capa 1: el router de intenciones

## Por qué una IA aparte, y no la principal

La IA principal recibe el mensaje **y** todas las instrucciones del negocio. Con
tanto encima, se estresa y se olvida. El problema no es su inteligencia: es que le
pediste una decisión de cumplimiento dentro de una conversación abierta.

El router es una IA **chiquita** con un solo trabajo:

> Elegir entre dos opciones. No hacer nada, o llamar a catálogo. Nada más.

- **Pequeña**: no es taaan inteligente. Y no necesita serlo.
- **Barata**: cada mensaje paga una inferencia mínima.
- **Rápida**: añade una decisión al camino, no una etapa.

El resultado no fue «un poco mejor». Ayuda a que la otra IA **no se olvide y actúe
de manera más determinista**. La decisión ya no depende de que la principal se
acuerde de la regla.