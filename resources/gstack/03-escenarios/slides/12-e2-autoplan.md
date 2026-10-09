---
kicker: "E2 · plan completo sin 20 preguntas"
kind: content
notes:
  - "Seis principios codificados deciden: completitud, patrones existentes, opciones reversibles, decisiones pasadas del usuario, diferir lo ambiguo, escalar seguridad."
  - "Cuando quieras responder tú cada pregunta: corre las reviews individuales en vez de /autoplan."
---

# E2 · Quiero el plan completo: /autoplan

Correr `/plan-ceo-review` → diseño → DX → eng a mano resuelve **15-30 preguntas intermedias**. `/autoplan` las corre en secuencia y decide él las mecánicas:

```
You:   /autoplan

Claude: Running CEO review... [4 scope decisions auto-resolved]
        Running design review... [3 design dimensions auto-scored]
        Running eng review... [2 architecture decisions auto-resolved]

        TASTE DECISIONS (need your input):
        1. Scope: Codex suggested adding search — borderline. Add?
        2. Design: two approaches scored within 1 point. Which feels right?

You:    1) Yes. 2) Option A.

Claude: Plan complete. 9 decisions auto-resolved, 2 taste decisions approved.
```

- **Eng review siempre al final**: la puerta obligatoria revisa el plan ya enmendado, no uno viejo.
- Solo te sube a aprobación las **decisiones de gusto** — enfoques cerrados, expansiones de alcance al límite, desacuerdos entre modelos.
- Un comando, un plan revisado de punta a punta. Es la vía del propio README para «build a feature end-to-end».
