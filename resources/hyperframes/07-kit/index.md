---
title: "Glosario y troubleshooting"
order: 7
summary: "Los términos que aparecen en los errores, y qué hacer cuando algo sale mal. Referencia corta."
objectives:
  - "Leer un mensaje de error y entender qué señala"
  - "Resolver los cuatro fallos más frecuentes sin perder tiempo"
  - "Saber qué comandos existen y cuándo usarlos"
prerequisites: [06-arquitectura]
duration: "consulta"
---

## Glosario

| Término | Qué significa |
|---|---|
| **Composición** | El HTML que define un video o una slide. La fuente de verdad, editable como HTML normal |
| **Clip** | Un elemento con tiempo, marcado con `class="clip"`. El framework es dueño de su visibilidad |
| **Pista / track** | Una lane de la línea de tiempo. Dos clips en la misma pista no pueden solaparse |
| **Timeline** | Línea de tiempo GSAP, siempre pausada, registrada en `window.__timelines` |
| **Seek-safe** | Que el motor pueda saltar a cualquier frame y saber el estado del DOM sin reproducir los anteriores |
| **Isla JSON** | El bloque `<script type="application/hyperframes-slideshow+json">` que declara la estructura de un deck |
| **Fragmento** | Un momento dentro de una slide donde el deck se detiene para un reveal |
| **Hotspot** | Zona clickeable de una slide que abre una rama del deck |
| **Secuencia** | El grupo de slides de una rama, con su propio contador |
| **Modo presentador** | Vista con slide actual, siguiente, notas y timer, sincronizada con la pestaña de audiencia |
| **BRIEF.md** | El artefacto con el encargo confirmado. Una sesión posterior retoma desde ahí |
| **Media OS** | El sistema que resuelve medios a archivos locales congelados con registro |
| **Ledger** | El registro de provenance de cada asset congelado |
| **Render determinista** | Misma entrada, mismos frames, mismo archivo |

## Comandos, en una línea

| Comando | Para qué |
|---|---|
| `init` | Crear el proyecto |
| `check` | Validar antes de render o present. Corre lint, layout, movimiento y contraste |
| `preview` | Abrir en vivo mientras el agente edita |
| `render` | Producir el MP4. Nunca sobre un deck |
| `present` | Servir el deck y abrir el modo presentador |
| `snapshot` | Stills por slide |
| `catalog` | Buscar bloques del catálogo |
| `add` | Copiar un bloque al proyecto |
| `skills update` | Refrescar skills |
| `skills check` | Estado de las skills |
| `doctor` | Prerrequisitos. Miente sobre Chrome si tenés Chrome abierto |

## Los cuatro fallos frecuentes

### El preview se ve bien y el render sale mal

Casi siempre es animación que no es buscable.

- Verificá que toda línea de tiempo esté en `paused: true` y registrada en `window.__timelines`
- Las inserciones tienen que ser absolutas en el timeline, no offsets de la escena
- No puede haber `repeat: -1`
- No puede haber `Math.random()` ni `Date.now()`

### El video sale diferente en cada corrida

Algo no es determinista. Las causas habituales:

- Assets remotos no precargados
- Fuentes web no embebidas
- Aleatoriedad sin semilla
- Contenido generado durante el render

Regla: **el render no debe hacer requests de red**.

### El deck no navega

- Falta `tabindex="0"` en `<hyperframes-slideshow>`. Sin focus, las flechas mueren
- Falta la **isla duplicada** en el wrapper. El componente lee desde su propio
  `innerHTML`, no desde la composición
- Si usás `present ./composition`, no sirvas un `index.html` propio en la raíz:
  `present` ya inyecta su chrome y apuntarlo a `.` duplica el wrapper y produce
  una recursión de iframes
- Falta alguna escena en el mensaje de timeline. Deben estar **todas**, incluidas
  las de rama. Si falta una, el hotspot entra a una slide en blanco

### `timeline_id_mismatch`

El lint pide que la clave de `window.__timelines` coincida con un
`data-composition-id` existente. Renombrá la clave o el atributo.

**No** crees una composición master solo para usar la clave `root`: eso rompe el
contrato de slideshow, porque `render` la resolvería y emitiría el deck entero en
lineal, que es justo lo que el deck no es.

### El hotspot entra a una slide en blanco

Falta esa escena en el `postMessage` de timeline. Sin engine, el composition tiene
que postear el manifiesto a mano y debe incluir las escenas de rama.

### Contraste por debajo de WCAG AA

En fondo oscuro, aclará el color que falla hasta pasar 4.5:1 para texto normal o
3:1 para texto grande. En fondo claro, oscurecelo. Y mantenete dentro de la
paleta: no inventes un color nuevo, ajustá el que ya existe.

## Veredicto sobre skills de terceros

Existe un skill de comunidad llamado `nateherkai/hyperframes` con 1.092 stars.
No lo instales. Razones:

- **Sin uso real**: 0 votos, 0 copias, 1 vista. Nadie lo validó
- **Desactualizado**: del 19/09/2026, cuando el CLI oficial ya iba por 0.8.149
- **Solapado**: sus 20 archivos repiten lo que ya cubren `/media-use`,
  `/hyperframes-audio` y `/hyperframes-animation`
- **Orientado a video**: su descripción no menciona slides ni decks
- **Con reglas que contradicen el contrato oficial**: exige transiciones entre
  escenas de forma obligatoria, cuando en un deck las slides son escenas
  discretas que navega el presentador. También separa `lint` y `validate` como
  comandos, cuando el CLI tiene `check` que ya hace ambos
- **Acoplado a otro ecosistema**: depende del skill `/gsap` de gstack

Dos ideas suyas sí valen la pena, y están en la parte 2 de este curso: la
**identidad visual antes del markup** y el **layout antes de la animación**.

## Fuentes

- Documentación: <https://hyperframes.heygen.com/introduction>
- Guía de prompts: <https://hyperframes.heygen.com/prompting/overview>
- Guía de slideshow: <https://hyperframes.heygen.com/guides/slideshow>
- Catálogo: <https://hyperframes.heygen.com/catalog>
- Código: <https://github.com/heygen-com/hyperframes> (Apache-2.0)