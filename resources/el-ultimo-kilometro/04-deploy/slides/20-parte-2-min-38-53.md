---
kicker: "Parte 2 · min 38-53 · deploy III: Coolify con el MCP"
kind: "content"
notes:
  - "Contesta en la terminal: \"ahora la opción B, Coolify\"."
  - "Si se alarga, omite el dominio propio y quédate con el sslip.io."
---

La misma landing, ahora en tu VPS.

- **1 · La skill docker-deploy**

- detecta el gestor de paquetes, Node y las variables
- Dockerfile multi-stage + `output: 'standalone'`
- avisa si algo solo funciona en Vercel
- push a GitHub

- **2 · El MCP de Coolify**

- crea la app desde el repo
- variables **no secretas**
- deploy y lectura de logs
- dominio: `sslip.io` o un registro A al VPS
