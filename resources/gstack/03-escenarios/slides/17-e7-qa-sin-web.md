---
kicker: "E7 · QA sin página web"
kind: content
notes:
  - "QA anuncia primero qué superficie, herramientas y permisos de escritura usará. Si falta el fixture seguro, nombra el bloqueo en vez de inventar un pase."
  - "La exploración deja rastro: exploration-NNN.json con resultado previo, hipótesis y siguiente comando."
---

# E7 · Probar software sin navegador

Los mismos comandos sirven para CLIs, APIs, jobs y webhooks: nombra el target y el comportamiento a comprobar. Prompts literales del README:

```text
/qa-only Test this repo's CLI using its documented local fixture. Check valid
and invalid input, exit codes, stdout/stderr, and cancellation. Report only;
do not change code or tests. For each finding, include the exact command,
expected and actual results, and which checks remain untested. Keep requests
inside the fixture; ask before contacting an external service.
```

```text
/qa Test this repo's local webhook and worker fixture. Explore duplicate
deliveries and recovery after a partial failure. Keep all effects inside
the fixture; preserve reproduced bugs in native regression tests before
repairing them.
```

- **`/qa-only`** informa sin tocar código ni tests; propone los casos de regresión con evidencia reproducible.
- **`/qa`** además arregla: la regresión falla con el bug, pasa tras el arreglo.
- Profundidades: **diff-aware** (automática en ramas de feature), **Full** (5-15 min, 5-10 issues con evidencia), **Quick** (`--quick`, smoke de 30 s) y **Regression** (`--regression informe-previo`).
- Un sondeo bloqueado o una dependencia ausente queda en el informe como **cobertura no probada** — no como aprobación.
