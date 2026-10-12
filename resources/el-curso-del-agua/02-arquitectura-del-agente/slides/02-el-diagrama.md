---
kicker: "arquitectura · el diagrama"
kind: content
notes:
  - "Recorrer el diagrama de arriba abajo en voz alta, una capa por vez. Que el grupo lo dibuje junto."
  - "Subrayar la memoria aparte: es lo que permite que el fact-checker verifique algo. Sin memoria no hay contra qué comparar."
  - "La flecha hacia la memoria debería dibujarse como ida y vuelta. La consulta escribe; el fact-checker lee."
---

# El pipeline

## Las cuatro capas y dónde vive la memoria

```
                    mensaje
                       │
                       ▼
              ┌─────────────────┐
              │     ROUTER      │  ¿hay que consultar catálogo?  sí / no
              │   (IA pequeña)  │
              └────────┬────────┘
                       │ sí
                       ▼
              ┌─────────────────┐
              │  IA PRINCIPAL   │  conversa, usa herramientas, redacta
              └────────┬────────┘
                       │
                       ▼
     ┌───────────────────────────────┐
     │  EXTRACTOR DE PARÁMETROS      │  arma la llamada a la herramienta
     │       (IA pequeña)             │
     └───────────────┬───────────────┘
                     │
                     ▼
   ╔═══════════════════════════════════╗
   ║  MEMORIA — CATÁLOGO               ║
   ║  aquí se almacenan las búsquedas  ║
   ║  con sus resultados               ║
   ╚═══════════════╤═══════════════════╝
                   │  el fact-checker consulta este registro
                   ▼
              ┌─────────────────┐
              │  FACT-CHECKER   │  audita la respuesta contra la memoria
              │   (IA pequeña)  │
              └────────┬────────┘
                       │
                       ▼
              mensaje al cliente
```

Qué existe cada capa:

| Capa | Para qué es |
|---|---|
| **Router** | Obligar la consulta al catálogo cuando la conversación la exige |
| **IA principal** | Hablar con el cliente y redactar. Aquí vive la personalidad |
| **Extractor de parámetros** | Que la llamada a la herramienta sea válida |
| **Memoria** | Guardar las búsquedas con sus resultados, para poder verificarlas después |
| **Fact-checker** | Borrar del texto final lo que no tiene respaldo en el catálogo |

Las tres capas pequeñas no son el modelo bueno. Son **las que no saben mucho y
no tienen que saber**.