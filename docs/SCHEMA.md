# Formato de recursos — vault/v1

Especificación del formato de datos. El sitio valida este esquema en build
(Astro content collections): si compila, cumple.

## Principios

1. **Data first**: el contenido es Markdown + YAML. Versionable, grepeable, portable.
2. **Un recurso = una carpeta** bajo `resources/<id>/`, autodescripta vía `resource.yaml`.
3. **El sitio es genérico**: renderiza cualquier recurso que cumpla el esquema.
   Cero código por-recurso.
4. **Slides atómicas**: un archivo por slide. Facilita reorder, diff y merge.

## Árbol

```
resources/<id>/
├── resource.yaml            # OBLIGATORIO: manifiesto del recurso
├── assets/                  # imágenes y archivos del recurso
│   └── ...
└── <part-id>/               # una carpeta por parte/módulo (orden lexicográfico)
    ├── index.md             # contenido de la parte (frontmatter + markdown)
    └── slides/              # opcional: deck de la parte
        ├── 01-slug.md
        ├── 02-slug.md
        └── ...
```

## resource.yaml

```yaml
schema: vault/v1            # versión del formato (obligatorio)
id: mi-recurso              # slug único, = nombre de carpeta
title: "Título visible"
type: course                # course | guide | kit | reference
language: es                # ISO 639-1
summary: "1-2 frases de qué es"
tags: [ia, deploy]
source:
  url: https://original.ejemplo/
  author: "Autor original"
  captured: 2026-10-08      # fecha de captura/archivo
  credits: >-
    Texto de atribución. Obligatorio si el contenido no es original:
    qué es, de quién es, y con qué fin se archiva.
parts:                      # orden de lectura (debe coincidir con las carpetas)
  - id: 01-fundamentos
    title: "Fundamentos"
    kind: slides            # slides | reading | reference
    duration: "45 min"      # opcional, estimación
```

`kind` por parte:
- `slides` — la parte se renderiza como deck (usa `slides/*.md`).
- `reading` — la parte es lectura lineal (el body de `index.md`).
- `reference` — doc de consulta con TOC (el body de `index.md`).

## index.md de una parte

```markdown
---
title: "Deploy sin miedo"
order: 3                    # redundante con el orden de carpetas, resuelve empates
summary: "Qué cubre esta parte"
objectives:                 # qué sabrá hacer el alumno al terminar
  - "Publicar en Vercel"
  - "Configurar DNS"
prerequisites:              # IDs de partes previas requeridas
  - 02-fundamentos
duration: "60 min"
---

Texto libre de la parte (solo se renderiza en kind: reading/reference;
en kind: slides aparece como "notas de la parte" bajo el deck).
```

## Slide (slides/NN-slug.md)

```markdown
---
kicker: "Bloque 1 · anatomía del prompt"   # contexto corto arriba (opcional)
kind: content               # cover | center | content (layout)
notes:                      # notas del instructor (0..n)
  - "Recorrer el prompt de arriba a abajo"
---
Cuerpo de la slide en Markdown (párrafos, listas, tablas, fences).
```

## Reglas

- IDs y nombres de archivo: ASCII, kebab-case, sin espacios ni acentos.
- Imágenes siempre en `assets/` del recurso, referidas como
  `../../assets/nombre.png` relativo desde el md (o reescritas por el visor).
- Un cambio de esquema rompe compatibilidad → `schema: vault/v2` + mover los
  recursos existentes. No hay campos "opcionales con dos nombres".
- El build falla si: falta `resource.yaml`, un `part.id` no tiene carpeta,
  una carpeta de parte no está en `parts`, o el frontmatter no valida.
