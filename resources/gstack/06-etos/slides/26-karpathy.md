---
kicker: "Ethos · los cuatro modos de fallo"
kind: content
notes:
  - "Referencia: andrej-karpathy-skills (17K estrellas). gstack se presenta como la capa de enforcement del workflow que hace que esas reglas se cumplan durante todo el sprint."
---

# Los 4 modos de fallo de Karpathy, cubiertos

Las reglas de IA coding de Karpathy nombran cuatro formas de fallar. gstack las convierte en enforcement de proceso:

| Modo de fallo | Quién lo cubre |
|---|---|
| Supuestos equivocados | `/office-hours` fuerza los supuestos a la luz **antes** de escribir código |
| Sobrecomplejidad | `/review` caza código sobre-ingenierado (lens de simplificación, advisory) |
| Ediciones ortogonales (arreglar cosas que no tocan tu tarea) | `/review` + `/freeze` encierran el alcance |
| Imperativo en vez de declarativo | `/ship` convierte tareas en **metas verificables** con ejecución test-first |

Si ya usas reglas estilo Karpathy en tu CLAUDE.md: gstack es la capa que hace que se cumplan **a lo largo del sprint entero**, no solo en un prompt suelto.
