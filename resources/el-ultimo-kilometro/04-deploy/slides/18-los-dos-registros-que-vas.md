---
kicker: "Los dos registros que vas a poner siempre"
kind: "content"
notes:
  - "Demo: pega los registros en el DNS, luego dig sonrisaperfecta.mx +short. Si todavía no propaga, explica que es normal durante un rato."
  - "SSL: automático en Vercel y en Coolify (Traefik). Nadie debería comprar un certificado en 2026."
---

```
vercel domains add sonrisaperfecta.mx
vercel domains inspect sonrisaperfecta.mx   # te dice exactamente qué poner
```

| Tipo | Nombre | Valor | Para qué |
|---|---|---|---|
| A | @ | la IP que te da Vercel (o la de tu VPS) | la raíz: sonrisaperfecta.mx |
| CNAME | www | el destino que te da Vercel | www.sonrisaperfecta.mx |

**Caso real (Informatix, mayo 2026):** la landing se construyó y entregó en **1 día**, y estuvo viva **días después**, porque el DNS y la activación del correo del formulario dependían del cliente.

El último kilómetro no depende de ti. Por eso se planea desde el día 1.

- ``
