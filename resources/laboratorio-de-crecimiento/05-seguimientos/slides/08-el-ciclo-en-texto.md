---
kicker: "seguimientos · la máquina de estados"
kind: content
notes:
  - "Este esquema reemplaza el diagrama del manual: los umbrales exactos son configurables y deben medirse por segmento. Lo que no es configurable es la existencia de las transiciones."
  - "Insistí en que la respuesta del prospecto resetea el contador: es la regla que convierte el estatus en derivado en lugar de acumulado."
  - "Preguntá al grupo qué tiene hoy que sea equivalente a `blocked`. Si nadie lo tiene, ya encontraste la primera fuga: esperas que no se ven en ningún tablero."
---

# El ciclo en texto

## El ciclo de estados del seguimiento

```text
[nuevo lead] → warm → awaiting_response ──(responde)──► warm
                       │                                      │
          (días sin respuesta)                                │
                       ▼                                      ▼
                    cooling  ──(>21d)──►  cold  ──(60d + score alto)──► re-engage
                       │                                      │
                       └────────────► nurture ◄─────────────────┘
```

| Evento | Efecto sobre el estatus |
|---|---|
| Respuesta del prospecto | `warm` + reinicia el contador |
| Toque enviado sin respuesta | Decrementa a `cooling` tras el umbral |
| `>21d` sin respuesta | `cold` |
| Pausa solicitada por el prospecto | `paused_by_prospect` |
| Dependencia nuestra pendiente | `blocked` |

Los umbrales exactos son configurables y deben medirse por segmento.