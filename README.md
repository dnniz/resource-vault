# Resource Vault

Bóveda de recursos de aprendizaje curados: cursos, guías y kits guardados como
**datos estructurados** (Markdown + YAML), con un sitio generador que los renderiza
como experiencia navegable (deck de slides, lecciones, docs de referencia).

Cada recurso vive en `resources/<id>/` y sigue el esquema documentado en
[`docs/SCHEMA.md`](docs/SCHEMA.md). El sitio (`site/`) es un visor genérico:
renderiza cualquier recurso que cumpla el esquema sin cambiar código.

## Recursos

| Recurso | Tipo | Fuente original |
|---|---|---|
| [`el-ultimo-kilometro`](resources/el-ultimo-kilometro/) | curso (5 módulos + kit) | [clase-ultimo-kilometro.vercel.app](https://clase-ultimo-kilometro.vercel.app/) |

## Qué aporta esta versión frente al original

- **Reestructurado en módulos** con objetivos, prerrequisitos, duración y checklist.
- **Notas del instructor** integradas por slide (tecla `N` o botón), no ocultas en el HTML.
- **Navegación completa**: teclado (`←/→`, `G` grilla, `N` notas), deep-links por slide
  (`#3`), barra de progreso y progreso por módulo guardado en `localStorage`.
- **Modo claro/oscuro**, contraste AA, `prefers-reduced-motion` respetado, print/PDF amigable.
- **Data first**: el contenido es Markdown/YAML versionable; el sitio es solo el visor.

## Desarrollo

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # salida estática en site/dist
npm run preview
```

## Cómo agregar un recurso nuevo

```bash
cp -r resources/_templates/course-part resources/<nuevo-id>
# 1. Edita resources/<nuevo-id>/resource.yaml (manifiesto)
# 2. Crea las partes (carpetas) siguiendo docs/SCHEMA.md
# 3. npm run build valida el esquema: si compila, cumple el esquema
```

Ver guía completa en [`docs/SCHEMA.md`](docs/SCHEMA.md).

## Atribución y uso

El contenido de `resources/el-ultimo-kilometro/` proviene de la clase
**"El Último Kilómetro"** (Imperio Agéntico). Se archiva aquí con fines de
**estudio personal**, con crédito a su autor. No es contenido original de este
repo y no debe usarse para redistribución comercial. El código del visor sí es
MIT (ver `site/LICENSE-CODE` no requerido: sin código de terceros copiado).

## Estructura

```
resources/            # la data (el activo real de este repo)
  _templates/         # plantillas para crear recursos nuevos
  <id>/               # un recurso por carpeta
site/                 # visor Astro genérico (lee resources/)
docs/SCHEMA.md        # especificación del formato v1
docs/adr/             # decisiones de arquitectura
```
