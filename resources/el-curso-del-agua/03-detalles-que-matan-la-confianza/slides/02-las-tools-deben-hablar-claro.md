---
kicker: "detalles · las tools"
kind: content
notes:
  - "El principio detrás: una herramienta no habla con el cliente, habla con el modelo. Su salida es contexto, no una respuesta. Casi todas se escriben pensando en el cliente."
  - "El argumento a favor del texto plano no es solo técnico: un párrafo ordenado es auditable por un humano. Eso lo conecta directamente con la parte 02: el fact-checker necesita un registro legible."
  - "El bonus es la jugada de confianza: convertir un bug invisible en algo que el cliente puede revisar por ti mismo."
---

# Las tools deben hablar claro

La solución fue directa y cambiaba el contrato de salida:

> ✎ _Las tools ahora siempre devuelven un output en texto plano ordenado, un
> párrafo limpio en vez de un JSON completo._

No «menos datos»: **datos distintos**. El JSON no se elimina del sistema, se
elimina de la conversación con el modelo.

## Y un bonus inesperado

> Esto también quiero mostrarlo dentro del chat para las auditorías de los
> clientes.

Un párrafo limpio en vez de un JSON no solo mantiene el contexto sano:

- **Se lee.** Un humano puede verificar en dos segundos lo que encontró la búsqueda.
- **Se audita.** El cliente puede comprobar la respuesta contra su catálogo sin
  llamarte.
- **Se defiende.** Un error de precio ya no es «el bot dijo que no», sino «la
  herramienta no encontró nada, y aquí está el resultado».

Estás convirtiendo un debug interno en un argumento de venta.