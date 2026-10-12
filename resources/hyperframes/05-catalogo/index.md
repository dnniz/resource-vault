---
title: "Catálogo de componentes visuales"
order: 5
summary: "Qué componente usar según lo que estés explicando, con el criterio para elegirlo y los bloques verificados en el catálogo."
objectives:
  - "Encontrar el bloque que corresponde a lo que la slide afirma"
  - "Decidir si conviene un bloque del catálogo o construir a mano"
  - "Buscar en el catálogo sin instalar nada"
prerequisites: [02-buena-slide]
duration: "consulta"
---

El criterio es simple: **el visual tiene que reemplazar una afirmación por una
evidencia**. Buscá el bloque que hace exactamente eso.

## Buscar

La búsqueda no necesita proyecto, ni cuenta, ni instalación. Se puede correr
desde cualquier directorio.

```bash
npx hyperframes catalog --query "animated data chart" --json
```

Con el resultado:

```bash
npx hyperframes add data-chart
```

El bloque **no es un drop-in**: viene con contenido de demostración que el agente
reescribe con tus datos. Nombrarlo en el prompt fija la técnica y evita que el
agente elija por vos.

---

## Datos y comparaciones

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `data-chart` | Barras y línea con reveal escalonado, tipografía editorial, valores etiquetados | Comparás dos o tres series en el tiempo |
| `animated-bar-chart` | Tarjeta de datos compacta con crecimiento de barras y calledouts | Una sola magnitud con su contexto |
| `bar-chart-race` | Barras rankeadas que se intercambian mientras avanza la serie, con el eje reescalando | Un ranking que se invierte a lo largo del tiempo |
| `chart-story` | Un gráfico que se construye en orden de lectura y aterriza en los valores dados | Muchos datos que tienen que contarse en un solo vistazo |
| `decline-chart` | Una métrica baja mientras el fondo se oscurece en paralelo | Mostrar una caída |

---

## Procesos y flujos

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `flowchart` | Árbol de decisión animado con conectores SVG, nodos tipo nota adhesiva, cursor y corrección de tipeo | Un proceso con decisiones y ramas |
| `onboarding-stepper-flow` | Riel de hitos, tarjeta de paso activo y botón de siguiente acción | Un proceso por pasos, con avance |
| `signup-flow` | Flujo de alta con acción social, campo de correo, contraseña y botón | Enseñar una pantalla de la tuya |
| `settings-toggle-flow` | Flujo de preferencias con filas, interruptores y feedback de estado activo | Enseñar un panel de configuración |

---

## Interfaces

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `browser-device-stage` | Superficie de aplicación en marco de dispositivo nativo, con ranura para tu captura | Mostrar tu interfaz dentro de un navegador o ventana |
| `device-frame-stage` | Mockup de teléfono o tablet como objeto físico, con ranura para UI | Tu producto es móvil primero |
| `multi-device-splay` | Mockups de teléfono, tablet y escritorio en abanico desde un centro | Mostrar el mismo producto en tres tamaños |
| `vfx-iphone-device` | Modelos GLTF reales de iPhone y MacBook con contenido HTML en canvas | Necesitás photorealismo y el producto es Apple |
| `parallax-device-dive` | El teléfono sube y la cámara entra en la pantalla, la UI se expande | Una apertura con movimiento de cámara |

**Cuidado con los mockups:** usá `object-fit: contain` para capturas con texto
legible. El `cover` por defecto recorta logos y captions, y eso es un bug, no una
decisión de diseño.

---

## Geografía

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `world-map` | Coropleta mundial animada con revelado país por país, etiquetas y globo rotatorio | Presencia global o distribución geográfica |
| `us-map-bubble` | Mapa de burbujas con marcadores proporcionales, calledouts y líneas de conexión | Volumen por ciudad, con valores |
| `us-map-flow` | Arcos animados entre ciudades sobre una base | Origen y destino, rutas, cobertura |

---

## Código y terminal

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `terminal-simulator` | Una terminal tipea comandos y transmite la salida | Un comando y su resultado |
| `code-terminal-run` | Panel con cromo de terminal que tipea un comando detrás de un cursor | Mostrar una ejecución real |
| `code-snippet-dark-2026` | Workbench de VS Code con tipeo carácter por carácter, tema Dark 2026 | Código con contexto de editor |
| `code-snippet-dark-modern` | Ídem, tema Dark Modern | Codes de editor con otra estética |
| `code-typing` | Revelado en flujo de tokens con cursor que sigue la frontera | Código apareciendo línea por línea |
| `code-highlight` | Una banda de resaltado barre la línea objetivo mientras el resto se atenúa | Llamar la atención sobre una línea |

**Regla de oro del código:** los bloques tipo terminal son deterministas y
reproducibles. Escribir el código a mano con animaciones improvisadas es la vía
fácil a un render que cambia en cada corrida.

---

## Énfasis en texto

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `caption-highlight` | Barrido de fondo detrás de cada palabra activa, estilo TikTok | Una frase que la audiencia tiene que oír de verdad |

Este es el bloque que reemplaza una animación de transición. En vez de que el
texto entre con rebote, el texto ya está y una palabra se enciende.

---

## Portadas y cierres

| Bloque | Qué hace | Usalo cuando |
|---|---|---|
| `titlecard-calm` | Kicker en mono y titular grande que sube, se deriva casi imperceptiblemente y sale limpio | Portada sobria |
| `canopy-part-title` | Hojas atraviesan el cuadro y se abren para revelar el titular | Apertura con movimiento organic |
| `code-slice-hero` | Superficie de titular en mosaico que gira celda por celda | Apertura técnica |
| `glass-hero` | Un objeto de vidrio se eleva delante de un titular gigante y lo deforma |Necesita abrir con un sentido premium |
| `glass-shard-title` | Fragmentos de vidrio entran por la niebla y se ensamblan en el titular | Cierre con impacto |

---

## Cuándo construir a mano

Construí a mano solo cuando **ningún bloque encaja**, y en estos casos concretos:

- **Un diagrama propio**: arquitectura interna, organigrama, flujo de negocio.
  Ningún bloque genérico va a representar tu sistema con precisión.
- **Una replicación de referencia**: si viste algo exacto y querés reproducirlo,
  el bloque más cercano va a ser una aproximación, y una aproximación se nota.
- **Texto con una composición tipográfica muy particular**: no lo fuerces en un
  bloque.

Todo lo demás: buscá primero. Un bloque real le gana siempre a la aproximación.

## Reglas que no se negocian

- **El titular es una afirmación completa**, no una etiqueta. "Las SMEs
  pierden 14 horas por semana en agenda manual", no "Problema de agenda".
- **Una idea y un visual por slide.** Si tenés dos bloques de viñetas, dividí.
- **Mínimo 30pt equivalente.** A 1920×1080 el titular va de 72 a 96 px y el
  cuerpo a 48 px. Nunca bajes de 40 px algo que la audiencia deba leer.
- **El punto fuerte va primero**, en la slide y en el orden. La gente lee de
  izquierda a derecha, de arriba abajo, y se detiene.