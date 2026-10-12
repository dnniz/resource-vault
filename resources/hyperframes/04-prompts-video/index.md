---
title: "Prompts de referencia para video"
order: 4
summary: "Diez prompts copiables para video: cinco escenarios reales, cada uno en dos tonos. Cada prompt sigue las seis partes del esqueleto."
objectives:
  - "Copiar un prompt base y adaptarlo a tu material"
  - "Reconocer qué escenario se parece al tuyo y qué tono pide la audiencia"
  - "Saber cuándo un material sirve mejor para un deck que para un video"
prerequisites: [02-buena-slide]
duration: "consulta"
---

Misma estructura que la parte 3: **ruta, spec, beats, copy, technique,
negatives**. Copiá el que se parezca a tu caso y cambiá lo que esté entre
`<corchetes>`.

**Regla previa:** un video se mira solo. Si necesita que vos estés para
argumentar o para saltar a un detalle, es un deck. Ver parte 1.

---

## 1. Lanzamiento de producto

### 1a. Tono marketing

```text
/product-launch-video
Video de lanzamiento de 45 segundos, 1920x1080, para <url del producto>.

Beat 1 (0-4s): hook con el problema, sin nombrar el producto todavía. Titular
"Los equipos de soporte pierden 14 horas por semana en agenda manual".
Beat 2 (4-16s): tres features, una por corte de 4s, cada una con la captura real
de la interfaz y su caption de una línea: "Sin doble booking", "Recordatorios
automáticos", "Reagendado sin fricción". Usar `browser-device-stage` para
encuadrar las capturas.
Beat 3 (16-22s): prueba social, la métrica grande: "El 40% menos de no-shows
en 90 días", con `caption-highlight` sobre el 40%.
Beat 4 (22-32s): el producto en uso, un solo recorrido de la interfaz sin
texto encima salvo el logo.
Beat 5 (32-42s): end card con logo y el texto "Probalo gratis".
Beat 6 (42-45s): respiración final, la música sigue sola.

Voz en off femenina, tono seguro. Música electrónica sutil por debajo de
-18dB. Transición entre beats 2 y 3 con `code-terminal-run` adaptado. Paleta del
sitio. Sin gráficos de torta. Sin animación de entrada en los textos: los
captions entran una vez.
```

**Por qué funciona:** el hook nombra el problema sin nombrar el producto. Recién
en el beat 4 aparece. Esa espera es lo que sostiene la atención.

### 1b. Tono técnico

```text
/product-launch-video
Video técnico de 60 segundos, 1920x1080, sobre el diseño de un servicio nuevo.

Beat 1 (0-5s): el problema de infraestructura, en una frase y un número:
"El 71% del tráfico pasa por un servicio con p95 de 2,4 segundos".
Beat 2 (5-20s): el diseño propuesto, en `flowchart`, apareciendo por partes:
entrada, bus de eventos, consumidores. Rotular cada nodo al aparecer.
Beat 3 (20-35s): la comparación, dos métricas lado a lado: p95 antes y después,
con `animated-bar-chart`.
Beat 4 (35-48s): el modo de despliegue, en `code-terminal-run`, escribiendo los
comandos reales de despliegue.
Beat 5 (48-55s): qué se rompe si falla, el plan de reversión, en tres viñetas
de texto que entran de a una.
Beat 6 (55-60s): cierre con la decisión que se pide.

Sin voz en off: solo los textos y la música. Fondo oscuro, acento violeta.
Sin transiciones que tapen el contenido: usá cortes limpios. Nada de gradientes
lineales a pantalla completa sobre fondo oscuro.
```

---

## 2. Anuncio de feature

### 2a. Tono producto

```text
/product-launch-video
Video de anuncio de una feature, 30 segundos, 1920x1080, cuadrada 1080x1080 para
redes también.

Beat 1 (0-3s): el nombre de la feature en pantalla, con su verbo en una línea:
"Programá tareas sin abrir el calendario".
Beat 2 (3-14s): qué hace, en tres pasos numerados que entran uno por segundo,
con `caption-highlight` sobre la palabra clave de cada paso.
Beat 3 (14-24s): la interfaz real haciendo la tarea, en `browser-device-stage`,
con la acción resaltada en el momento exacto.
Beat 4 (24-30s): para quién es y dónde se activa, en dos líneas.

Sin narración. Música de fondo Corporate Quiet. Paleta de marca. Sin textos
entrando con rebote. Sin emoji. Sin "nuevo". Sin Animated logo sting al final.
```

### 2b. Tono ingeniería

```text
/product-launch-video
Video de 40 segundos para el canal de ingeniería, sobre un cambio interno.

Beat 1 (0-4s): el síntoma, medido: "El p95 del endpoint subió de 180ms a 1,2s
tras el cambio de junio".
Beat 2 (4-16s): la causa, mostrada en `code-terminal-run`: la consulta que se
ejecutaba en cada request.
Beat 3 (16-28s): la corrección, el mismo panel de terminal con la consulta
nueva, con `code-highlight` siguiendo la línea que cambió.
Beat 4 (28-36s): el resultado, `animated-bar-chart` con las dos curvas, antes y
después, mismo eje.
Beat 5 (36-40s): una línea con la lección.

Sin voz en off. Sin música, o muy baja y sin ritmo marcado. Fondo oscuro,
acent monocromático. Sin animación decorativa. Mostrar siempre el eje completo.
Sin imaginarios datos de relleno.
```

---

## 3. Release notes desde un pull request

### 3a. Tono devrel

```text
/pr-to-video
Video de release notes de 30 segundos, 1920x1080, para redes y para el canal
de comunidad. Fuente: el pull request <owner/repo#N>.

Beat 1 (0-3s): la etiqueta del PR y una línea con qué hace.
Beat 2 (3-12s): el antes, con `code-terminal-run` mostrando el comportamiento
previo. Capturar la salida real del comando.
Beat 3 (12-22s): el después, el mismo panel con el flag nuevo, con
`code-highlight` sobre el flag.
Beat 4 (22-27s): quién lo hizo y cuándo, en una línea discreta.
Beat 5 (27-30s): el comando para probarlo, en `code-terminal-run`.

Leer los cambios reales del PR con `gh`, no inventar el diff. Sin voz en off.
Fondo oscuro, acento según el lenguaje del repositorio. Sin animación de
entrada en el texto del código: escribirlo a máquina. Sin placeholders.
```

**Por qué funciona:** el PR es la fuente de verdad. El video tiene que mostrar
el diff real, o no sirve para nada.

### 3b. Tono stakeholder

```text
/pr-to-video
Video de 45 segundos para un comité no técnico, resumiendo tres pull requests
de un mismo epic: <lista de URLs>.

Beat 1 (0-5s): el nombre del epic y por qué importa, en una frase sin jerga.
Beat 2 (5-18s): el antes, mostrado con una foto de la interfaz actual.
Beat 3 (18-33s): el después, la misma foto después del cambio, con
`caption-highlight` sobre lo que cambió.
Beat 4 (33-40s): el impacto en el usuario, en una frase y un número.
Beat 5 (40-45s): qué sigue, en dos viñetas.

Traducir los títulos técnicos a lenguaje de negocio. Sin voz en off. Sin
mencionar nombres de clases ni de métodos. Sin jerga sin explicar. El orden es
por beneficio para el usuario, no por orden de merge.
```

---

## 4. Explainer de concepto

### 4a. Tono divulgativo

```text
/faceless-explainer
Video explicativo de 50 segundos, 1920x1080, sin voz en off, para redes.

Beat 1 (0-4s): la pregunta, en el titular: "¿Por qué se van los datos cuando
cambia un servidor?"
Beat 2 (4-16s): el concepto con una analogía física. `flowchart` con la
analogía: una caja de mudanzas, tres objetos, dosicha mudanza.
Beat 3 (16-30s): el concepto real superpuesto, en `code-terminal-run`, con
`code-highlight` siguiendo el dato clave.
Beat 4 (30-42s): el error típico, mostrado: la misma operación mal hecha, con
el resultado que se pierde.
Beat 5 (42-50s): el cierre con la regla, en una línea.

Sin voz en off. Tipografía grande. Un solo concepto por video. Fondo oscuro,
contraste alto. Sin transiciones complicadas. Sin jerga sin definir. Sin tres
conceptos en un video.
```

### 4b. Tono académico

```text
/faceless-explainer
Video de 70 segundos, 1920x1080, para un curso técnico.

Beat 1 (0-5s): el título del concepto y su definición formal, en una línea.
Beat 2 (5-25s): el modelo, en `flowchart`, con cada nodo rotulado al aparecer y
las aristas anotadas.
Beat 3 (25-45s): un ejemplo numérico completo, paso a paso, con
`animated-bar-chart` que muestra la magnitud en cada paso.
Beat 4 (45-58s): el caso límite, donde la propiedad deja de cumplirse, mostrado
no explicado.
Beat 5 (58-70s): la resumen formal de la definición.

Voz en off leyendo la definición. Subtítulos quemados con `caption-highlight`
en las palabras clave. Sin animación decorativa. Cada ecuación tiene que
aparecer completa antes de la siguiente. Sin música.
```

---

## 5. Revelado de datos

### 5a. Tono impacto

```text
/motion-graphics
Video de 8 segundos, 1920x1080, fondo azul oscuro.

Beat 1 (0-1.2s): una etiqueta "ARR" aparece chica, arriba al centro.
Beat 2 (1.2-5s): un número grande cuenta hasta $4,2M con rollo de odómetro,
amortiguando cuando aterriza.
Beat 3 (5-7s): "+312% interanual" se estampa debajo en verde, con
`caption-highlight` sobre el 312%.
Beat 4 (7-8s): todo se acomoda en un reposo ambiental suave.

Usar el bloque `apple-money-count` como base. Sin narración. Sin texto entrando
con rebote. El número tiene que ser legible por 3 segundos completos.
```

### 5b. Tono analítico

```text
/faceless-explainer
Video de 45 segundos, 1920x1080, mostrando un resultado de análisis.

Beat 1 (0-5s): la pregunta de análisis y el período: "Dónde se fue el gasto
de infraestructura, 2024 contra 2025".
Beat 2 (5-20s): `bar-chart-race` con las cinco categorías, que se reordenan
mientras avanza la línea de tiempo. El eje se reescala a medida que suben los
valores.
Beat 3 (20-32s): el detalle de la categoría que más cambió, con
`animated-bar-chart` de su serie mensual.
Beat 4 (32-40s): el tamaño del efecto, con el intervalo, no solo el punto.
Beat 5 (40-45s): qué queda sin explicar, que es la parte honesta.

Sin voz en off. Sin música, o muy baja. Fondo oscuro, acento cian. Mostrar
siempre la escala completa. Marcar dónde el intervalo incluye cero: ahí no hay
efecto. N y fuente en pantalla al final.
```

---

## Cuándo NO usar video

| Situación | Usá en cambio |
|---|---|
| Vas a tener que responder preguntas en vivo | Un deck |
| El detalle importa pero no siempre | Un deck con hotspot |
| Lo va a mirar un equipo técnico interno | Un deck o un documento |
| La audiencia ya conoce el contexto | Un deck |
| Es una announcement para redes | Video |
| Es documentación que se consulta después | Un documento, o video con capítulos |
| Lo va a ver un cliente solo, una vez | Video |

## Checklist antes de renderizar

- ¿El copy está entre comillas, exacto?
- ¿Los beats tienen timestamps?
- ¿Nombraste el bloque del catálogo donde hacía falta?
- ¿Los negativos son explícitos y no ambiguos?
- ¿La duración coincide con lo que describís, o declaraste la cola?
- ¿Corriste `check` y pasó sin errores?
- ¿Miraste el render antes de enviarlo?