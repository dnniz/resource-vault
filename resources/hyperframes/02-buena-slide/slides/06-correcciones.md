---
kicker: "oficio · cinco reescrituras"
kind: content
notes:
  - "Estas cinco correcciones son las que más se repiten en la práctica."
  - "La del hold congelado es el mayor indicio de movimiento barato."
---

# Cinco correcciones que siempre aparecen

Cada una existe porque es así como funciona el motor, no por gusto del autor.

- **Congelar el hold** — una composición mantiene su estado final, así que un
  "hold" literal renderiza un cuadro inmóvil. Es el mayor indicio de video barato.
  Decí "then everything settles into a gentle ambient idle".

- **Duración sin cola** — si pedís 12 segundos y describís 5, el resto es relleno
  inventado. Acortá el pedido o decí qué hace la cola.

- **Colisiones simultáneas** — dos cosas "a los 4s" se pisan unos cuantos
  cuadros, porque el renderer hace literalmente lo que escribiste. Separalos:
  "fades out fully by 4.2s; at 4.2s READY stamps in".

- **Copy en prosa** — "un tagline sobre enviar más rápido" se parafrasea.
  Escribí `tagline: "Ship faster."` y sale literal.

- **Números a ciegas de formato** — un odómetro necesita columnas de dígitos
  fijas. "counts from $0 to $4.2M" obliga a un "$0.0M" incómodo. Pedí
  "counts up to $4.2M".