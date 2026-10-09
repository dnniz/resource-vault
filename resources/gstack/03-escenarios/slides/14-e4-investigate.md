---
kicker: "E4 · depuración con método"
kind: content
notes:
  - "El Iron Law evita el bucle «a ver si este arreglo sí»: sin investigación no hay fix."
  - "/investigate congela las ediciones al módulo bajo investigación automáticamente."
---

# E4 · Algo está roto y no sabes por qué: /investigate

- **Iron Law: no hay fixes sin investigación de causa raíz primero.** Nada de «prueba y a ver».
- Traza el flujo de datos, contrasta con patrones de bug conocidos y prueba **hipótesis de una en una**.
- Si fallan **3 arreglos seguidos, para** y cuestiona la arquitectura en vez de seguir martillando. Ese techo es intencional: corta la espiral «una más y lo dejamos» que se come horas.
- Activa `/freeze` sobre el módulo que investiga: mientras depuras facturación, Claude no puede «arreglar» de pasada el código de auth.

**Combinación con guardas para tocar producción:**

```text
/guard        → /careful + /freeze en uno: avisa antes de rm -rf, DROP TABLE,
                force-push… y deniega en firme lo catastrófico
```

Con `/careful` activo: las limpiezas rutinarias (node_modules, dist) están en whitelist — sin falsas alarmas — y puedes añadir tus propios patrones en `~/.gstack/careful-patterns.txt`.
