---
kicker: "Parte 2 · min 19-38 · deploy II: Vercel"
kind: "content"
notes:
  - "Las variables se escriben en tu terminal, no en el chat de Claude. Enséñalo con la pantalla compartida."
  - "Después: lead desde producción → ejecución en verde en n8n."
---

```
# lo que hace /forja deploy (tú solo miras)
npm run build                       # si falla, no sigue
gh repo create sonrisa-perfecta --private --source=. --push
vercel --yes                        # preview
vercel --prod                       # producción

# ⛔ esto lo escribes TÚ, en tu terminal
vercel env add N8N_WEBHOOK_SECRET production
vercel env add N8N_WEBHOOK_URL production
vercel --prod                       # redeploy para que las tome

curl -I https://sonrisa-perfecta.vercel.app   # 200 o no está terminado
```
