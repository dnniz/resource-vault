---
kicker: "Antes de entregar · los 8 checks de SEO que se olvidan"
kind: "content"
notes:
  - "Pega el prompt de SEO del runbook: Claude revisa los 8 puntos sobre la URL de producción y arregla lo que falle."
  - "Search Console es a mano: la verificación del dominio es del cliente (o con su cuenta de Google). Otra cuenta que va a su nombre."
  - "forja-landing ya trae robots.ts, sitemap.ts y la imagen para compartir; lo que más se escapa es el canonical y el noindex del preview."
---

- **Antes de publicar**

- **Ningún noindex ni Disallow** heredado del entorno de pruebas. El fallo más típico: deja la web fuera de Google.
- **Title y meta description únicos**, con el servicio y, si es local, la ciudad.
- **Un solo H1** claro con el servicio. La IA a veces mete varios.
- **Canonical** al dominio final, no a la URL de preview.
- **Imágenes comprimidas** (WebP o AVIF) y con **alt** descriptivo.

- **Después de publicar**

- **Redirección 301** de http a https, y de www a sin www (o al revés): una sola URL.
- **Search Console:** verifica el dominio y envía el sitemap, con las URLs del dominio final.
- **Negocio local:** schema LocalBusiness con nombre, dirección y teléfono iguales a su ficha de Google.
