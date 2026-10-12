---
kicker: "el bot que inventa · el fallo"
kind: content
notes:
  - "Insistir en la palabra patrón: si lo cuentas como anécdota, el grupo va a decir «a mí no me pasa». Es una clase de fallo, no un cliente desafortunado."
  - "Preguntar al grupo antes de mostrar la siguiente slide: ¿dónde está el bug? Ninguno va a decir «en la arquitectura», y esa es la gracia."
  - "El detalle que hace esto creíble: la marca no estaba en el catálogo. No hubo consulta fallida, hubo ninguna consulta."
---

# El cliente preguntó el precio. El bot se lo dio.

En Haiku, el primer cliente preguntó: *«¿cuánto cuesta esta marca?»*. El bot
respondió un precio. **Inventado.** La marca ni siquiera estaba en el catálogo.

Lo relevante no es el error del cliente. Es esto:

- **No fue un caso aislado. Fue un patrón.**
- El bot **no consultó nada**: no hubo búsqueda que fallara, no hubo un error de
  API. Simplemente respondió sin preguntar.
- El precio inventionó era **plausible**. Nadie lo notó hasta que el cliente lo
  contrastó con la realidad.

Cuando esto se repite, deja de ser una anécdota y se vuelve una categoría de
fallo. Y una categoría de fallo tiene causa estructural.

> ✎ _No fue un caso aislado. Fue un patrón._