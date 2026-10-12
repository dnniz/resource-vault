---
kicker: "arquitectura · la regla"
kind: content
notes:
  - "Esta es la slide que hace transferible todo lo anterior. Sin ella, el curso sería un tutorial de n8n."
  - "El error típico del principiante: controlar de más. Un agente que solo dice 'no tengo ese producto' por todo es técnicamente correcto y comercialmente muerto."
  - "Pregunta de aplicación: dile al grupo que nombre tres cosas de SU agente que deben ser exactas. Luego que nombre las que pueden ser libres. La primera lista suele ser más larga de lo que uno cree."
  - "Conexión explícita con la parte 01: 'en lo importante' no era una frase suelta, era el criterio de diseño."
---

# La regla general

## Controla el dinero, deja libre el resto

> ✎ _El lenguaje humano es muy variable, y definir muy bien qué controlar y qué no es vital para que un agente sea útil de verdad._

Ahí está la lección que sobrevive a cualquier framework. No es «agrega tres capas»:
es **dónde decides que no dejas hablar a la IA**.

| Debe ser exacto | Puede quedar libre |
|---|---|
| Precios y tarifas | Tono, forma de saludar, empatía |
| Disponibilidad real (qué hay en el catálogo) | Longitud de la respuesta |
| Qué productos existen | Anécdotas y contexto del rubro |
| Atributos verificables de características | Estructura de la conversación |

La asimetría es deliberada. **Controlar de más es tan grave como no controlar
nada**: un agente que solo puede decir «no tengo ese producto» es
determinista, correcto y completamente inútil. El objetivo no es eliminar la
libertad del modelo, es **acotarla donde el error cuesta dinero**.