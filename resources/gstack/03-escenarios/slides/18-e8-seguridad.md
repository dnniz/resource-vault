---
kicker: "E8 · seguridad"
kind: content
notes:
  - "El CSO distingue niveles de evidencia por hallazgo: estático soportado, runtime con perfil cualificado, y self_reported para los tests del proyecto."
  - "El desafío independiente es la forma de gstack de evitar el confirmatorio: el segundo modelo ataca la conclusión del primero."
---

# E8 · Auditoría de seguridad: /cso

- **Modelo de aplicación primero**: rutas, autorización por tenant, secretos, superficie de dependencias y configuración de despliegue — hallazgos con evidencia, no ruido de linter.
- Cada hallazgo lleva **confianza, evidencia y cobertura explícita**; lo no cubierto se declara, no se esconde.

```text
You:   /cso

Claude: complete — assessed application routes, tenant authorization, secrets,
        dependency exposure, and deployment configuration.

        HIGH: Cross-tenant invoice access (app/controllers/invoices.rb:47)
        Confidence: high — caller, middleware, and policy checks traced
        Evidence: supported static finding; runtime not requested
```

- En defensa activa del día a día: `/careful` («be careful» y listo), `/freeze src/modulo`, `/guard` para trabajar cerca de producción.
- **Reto independiente**: pide a `/codex challenge` que intente romper tu código con máxima potencia de razonamiento — es el pen-test de tu lógica antes de que lo sea de otros.
