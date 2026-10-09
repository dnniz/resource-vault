# AGENTS.md — resource-vault

## Qué es
Repositorio de recursos curados. **El activo es la data** (`resources/`), el sitio
(`site/`) es solo un visor genérico. Si una mejora requiere tocar el sitio para un
recurso específico, algo está mal: el formato no está generalizando bien.

## Comandos
```bash
cd site && npm install     # primera vez
npm run dev                # dev server :4321
npm run build              # build estático + validación de esquema (content collections)
npm run check              # astro check (tipos)
```

## Convenciones
- **Idioma**: contenido de recursos en español; código, commits e IDs en inglés.
- **Formato de datos**: `docs/SCHEMA.md` es la especificación. Cambios de esquema =
  nueva versión (`vault/v2`) + migración de los recursos existentes, nunca mezcla.
- **Slides**: un archivo por slide (`slides/NN-slug.md`). Reordenar = renombrar.
- **Commits**: convencionales (`feat:`, `fix:`, `docs:`, `chore:`, `content:`).
  `content:` para cambios de datos de recursos.
- **Nuevos recursos**: copiar de `resources/_templates/`, nunca a mano desde cero.
- **No tocar** `resources/<id>/` de otros recursos al trabajar en uno: un commit por recurso.

## Definición de terminado
1. `npm run build` y `npm run check` en verde en `site/`.
2. Screenshots verificados (móvil 390 / desktop 1280, claro/oscuro) si tocaste UI.
3. El recurso nuevo/actualizado se ve completo en el índice y su navegación funciona
   con teclado.
4. `resource.yaml` actualizado (partes, fechas) si cambiaste estructura.

## Trampas conocidas
- Astro content collections valida frontmatter en build: un campo de más o de menos
  rompe el build **a propósito**. Esa es la garantía del esquema, no un bug.
- Los slides con código usan fences; si el código contiene ``` escapar con ~~~.
- `site/src/content.config.ts` es el único lugar que define el esquema; mantenerlo
  sincronizado con `docs/SCHEMA.md` en el mismo commit.
