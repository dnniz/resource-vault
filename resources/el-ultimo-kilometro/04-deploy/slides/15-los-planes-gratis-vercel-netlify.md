---
kicker: "Los planes gratis · Vercel, Netlify y Cloudflare"
kind: "content"
notes:
  - "Lo pidió un miembro en los comentarios del anuncio: dale el crédito."
  - "Revisado el 23-sep-2026 en las páginas de precios y docs de cada uno. Vercel: \"Hobby plan is for personal, non-commercial use\". Netlify: al acabarse los créditos pausa TODOS los proyectos hasta el siguiente ciclo."
  - "Nuestra landing tiene /api/lead (código de servidor): en Cloudflare va con OpenNext. Es de los casos fáciles: Next 16 soportado, sin next/image, sin APIs de Node, una sola ruta que hace fetch. Pasos: npm i @opennextjs/cloudflare + wrangler → npx @opennextjs/cloudflare migrate → wrangler secret put → npm run deploy. Ojo: plan gratis = 10 ms de CPU por petición. Solo se menciona, no se hace en vivo."
---

|  | Vercel Hobby | Netlify Free | Cloudflare Free |
|---|---|---|---|
| **Uso comercial** | no solo personal | no lo restringe en precios | sí |
| **Tráfico** | 100 GB/mes | 300 créditos/mes para todo | sin límite en lo estático |
| **Funciones** | 1 M/mes | salen de los mismos créditos | 100 mil/día (Workers) |
| **Si te pasas** | tope duro: subes a Pro | **pausa todos tus proyectos** hasta el otro mes | fallan las funciones; lo estático sigue |
| **Next.js** | nativo (es suyo) | con su adaptador | con OpenNext: más trabajo |
| **Siguiente plan** | Pro · $20/mes | Personal · $9/mes | Workers · $5/mes |

Y esta misma landing también cabe en Cloudflare: con OpenNext son ~20 minutos la primera vez.
