---
title: "Prompts de referencia para slides"
order: 3
summary: "Doce prompts copiables para construir decks: seis escenarios reales, cada uno en dos tonos. Usá el que se parezca a tu situación y adaptá el contenido."
objectives:
  - "Copiar un prompt base y adaptarlo a tu material"
  - "Reconocer qué escenario se parece al tuyo y qué tono pide la audiencia"
  - "Saber qué parte del prompt ajustar cuando el resultado no convence"
prerequisites: [02-buena-slide]
duration: "consulta"
---

Todos siguen el esqueleto de seis partes: **ruta, spec, beats, copy, technique,
negatives**. Copiá el que se parezca a tu caso y cambiá el contenido entre
`<corchetes>`.

**Tono** = a quién le presentás. Un mismo contenido necesita un prompt distinto
según si la audiencia es técnica, ejecutiva o general.

---

## 1. Revisión de producto

### 1a. Tono corporativo

```text
/slideshow
Deck de 8 slides para revisión trimestral de producto ante dirección.

Slide 1 (portada): kicker "Q3 2026 · Revisión de producto", título
"Lo que entregamos y lo que aprendimos".
Slide 2: "Llegamos al 94% del roadmap comprometido" — usar `animated-bar-chart`
con dos barras: comprometido 100, entregado 94, y un texto "4 puntos de desvío,
2 por dependencia externa".
Slide 3: "El cambio más grande fue el onboarding" — usar `flowchart` con el flujo
antes/después en dos columnas comparadas.
Slide 4: "Los tres hallazgos que cambian el plan" — tres filas numeradas, sin
visual, es una slide de opinión.
Slide 5: "Riesgos abiertos" — usar `caption-highlight` sobre la frase
"Ningún riesgo abierto depende de terceros".
Slide 6: "Qué pedimos para Q4" — tres ítems con responsable y fecha.
Slide 7 (rama, hotspot desde la 2): detalle del desvío de 4 puntos, con el
cálculo por iniciativa.
Slide 8 (cierre): "Una decisión, tres preguntas".

Revel de 3 puntos por slide en las slides 3 y 6. Notas de presentador con el
contexto de cada número. Tono sobrio, fondo oscuro, acento azul corporativo.
Sin imágenes ni archivos de video. Nada de gráficos de torta.
```

**Por qué funciona:** separa lo que se midió de lo que se Cree. La slide 4 no
tiene visual a propósito, y eso refuerza la jerarquía.

### 1b. Tono técnico

```text
/slideshow
Deck de 7 slides para retrospectiva de sprint con el equipo de ingeniería.

Slide 1: "Sprint 42: qué salió y qué aprendimos".
Slide 2: "12 historias cerradas, 4 Planeadas" — `animated-bar-chart` con las dos
barras y el desglose de las 4 planeadas en el texto.
Slide 3: "El cuello de botella fue el CI, no el código" — `flowchart` del pipeline
de CI con el paso de espera marcado en rojo y la métrica "14 min medianos".
Slide 4: "Tres cambios de código que redujeron el feedback loop" — tres filas con
la métrica antes/después de cada una.
Slide 5: "Deuda técnica: qué pagamos y qué no" — dos columnas, lo pagado y lo
aplazado, con el criterio explícito.
Slide 6: "Acuerdos del equipo" — tres decisiones con la razón y el costo
aceptado.
Slide 7: "El experimento del sprint que viene".

Tono directo y sin eufemismo. Fondo oscuro, acento en verde para lo que mejoró
y ámbar para lo pendiente. Sin imágenes ni archivos de video. No suavizar los
números malos.
```

---

## 2. Arquitectura de un sistema

### 2a. Tono técnico

```text
/slideshow
Deck de 9 slides para el diseño review de arquitectura, con equipo de ingeniería.

Slide 1: "De monolith a servicios: qué cambia y qué no".
Slide 2: "El sistema hoy" — `flowchart` con los 5 servicios actuales, sus
dependencias y el datastore central.
Slide 3: "El cuello de botella" — destacar el servicio de facturación en el
diagrama, con sus métricas: "p95 de 2.4s, 71% del tráfico".
Slide 4: "La propuesta" — `flowchart` del diseño nuevo, con el nuevo bus de
eventos en el centro.
Slide 5: "Qué se migra primero y por qué" — el criterio de orden, no el orden.
Slide 6: "Los 3 riesgos de la migración" — `caption-highlight` sobre la frase
"El más grande es la consistencia eventual en facturación".
Slide 7: "Qué pasa si no lo hacemos" — el costo de mantener el monolito 18 meses
más, en números.
Slide 8 (rama): detalle de la estrategia de dual-write.
Slide 9: "La decisión que pedimos hoy".

Revel de a puntos en la 3, la 5 y la 7. Notas con el contexto de cada métrica.
Fondo oscuro, acento en violeta. Sin imágenes ni archivos de video. No dibujar
flechas que no correspondan al flujo real de datos.
```

**Por qué funciona:** incluye el costo de no hacerlo. Una propuesta sin esa slide
no se aprueba, porque nadie sabe qué pasa si dice que no.

### 2b. Tono divulgativo

```text
/slideshow
Deck de 7 slides para explicar la arquitectura a un comité no técnico.

Slide 1: "Cómo funciona el sistema por dentro".
Slide 2: "Pensalo como una cocina" — `flowchart` con cinco estaciones
(entrada, preparación, sala de pedidos, cocina, entrega) y analogías en
cada una. Sin jerga técnica.
Slide 3: "Dónde se traba hoy" — destacar la estación de mayor espera, con "un
pedido tarda 12 minutos en promedio".
Slide 4: "El cambio que proponemos" — el mismo diagrama con las estaciones
reordenadas y una nueva estación en el medio.
Slide 5: "Qué puede salir mal" — tres riesgos en lenguaje llano.
Slide 6: "Qué cuesta no hacerlo" — dos años de esperada en el mostrador.
Slide 7: "Qué pedimos y cuándo".

Revel de a puntos en las slides 3 y 5. Notas con las analogías listas para
explicar en voz alta. Fondo claro, tipografía grande, acento cálido. Sin
vocabulario técnico sin explicar. Sin imágenes ni archivos de video.
```

---

## 3. Resultados y métricas

### 3a. Tono ejecutivo

```text
/slideshow
Deck de 6 slides para el comité ejecutivo de fin de trimestre.

Slide 1: "Q3 en una slide".
Slide 2: "Crecimos 3,2x en usuarios activos" — `animated-bar-chart` con la serie
mensual de los últimos 9 meses, y el último punto destacado.
Slide 3: "El ingreso recurrente subió 28% y el churn bajó a 4,1%" — dos
métricas grandes con la variación contra el trimestre anterior, en tabular-nums.
Slide 4: "El motor sigue siendo acquisition, no retención" — `bar-chart-race`
con los tres canales de adquisición ranking por costo por usuario.
Slide 5: "El riesgo que vigilamos" — una sola métrica, `caption-highlight` sobre
"la concentración por canal pasó de 34% a 51%".
Slide 6: "La propuesta para Q4".

Revel de a puntos en la 3 y la 4. Notas con la fuente de cada número. Fondo
oscuro, acento teal. Sin decimales innecesarios. Sin gráficos de torta. Cada
número lleva su período explícito.
```

### 3b. Tono analítico

```text
/slideshow
Deck de 8 slides para el informe de métricas con el equipo de datos.

Slide 1: "Métricas del trimestre: qué cambió y qué no".
Slide 2: "Activación" — `chart-story` con el funnel completo y las tasas entre
etapas, en una sola lectura de izquierda a derecha.
Slide 3: "El cuello está en el segundo paso" — `animated-bar-chart` de la caída
entre paso 1 y paso 2, con n y con intervalo de confianza.
Slide 4: "Retención por cohorte" — heatmap de cohortes de los últimos 8 meses,
donde se ve el cambio de comportamiento en la cohorte de julio.
Slide 5: "Por qué creemos que pasó" — tres hipótesis ordenadas por evidencia,
no por plausibilidad.
Slide 6: "Qué no sabemos" — la lista de preguntas abiertas, con qué dato las
resolvería.
Slide 7: "El experimento propuesto" — `flowchart` del diseño del experimento
con la métrica primaria y las secundarias.
Slide 8: "Riesgos de leer mal esto" — la parte que evita que el comité se
lleve la conclusión equivocada.

Revel de a puntos en la 3, la 5 y la 6. Notas con la metodología y los límites
de cada medida. Fondo oscuro, acento cian. Sin barras 3D. Mostrar n en cada
serie. Marcar dónde la diferencia no es significativa.
```

---

## 4. Comparativa

### 4a. Tono comercial

```text
/slideshow
Deck de 6 slides para presentar una comparativa a un prospecto.

Slide 1: "Dos maneras de resolverlo".
Slide 2: "El problema, en sus números" — `animated-bar-chart` con las horas
semanales por persona que hoy se van en tareas manuales.
Slide 3: "Las dos opciones" — dos columnas comparativas, misma estructura, misma
altura de fila, para que la comparación sea justa.
Slide 4: "Dónde se separan" — `caption-highlight` sobre la fila donde la
diferencia es de 3x, con el dato de cada lado.
Slide 5: "Lo que cuesta cambiar" — el costo en horas y en riesgo, sin edulcorarlo.
Slide 6: "El siguiente paso" — una sola acción concreta.

Revel de a puntos en la 3, revelando fila por fila. Notas con las objeciones
esperadas y las respuestas. Fondo claro, acento verde. Sin gráficos de torta.
Sin "solución líder de mercado". Todo número con su fuente.
```

### 4b. Tono analítico

```text
/slideshow
Deck de 7 slides para una revisión interna de stack.

Slide 1: "Evaluamos 4 stacks en serio".
Slide 2: "Los criterios" — `flowchart` con los 6 criterios ponderados y el peso
de cada uno explicitado.
Slide 3: "Puntuación bruta" — `chart-story` con las 4 opciones y los 6 criterios
en lectura de izquierda a derecha.
Slide 4: "Ponderado, cambian las posiciones" — el mismo cuadro con los pesos
aplicados, y el bloque donde se invierte el orden.
Slide 5: "Lo que la puntuación no captura" — las 3 cosas que importan y el
cuadro no mide.
Slide 6: "El veredicto y qué lo sostiene" — la decisión, con el criterio que la
decide.
Slide 7 (rama): el detalle de la opción descartada y por qué se descarta.
Slide 8: "Qué revisamos en 6 meses".

Revel de a puntos en la 4, fila por fila. Notas con quién Qué priorizó en los
pesos. Fondo oscuro, acento ámbar. Sin barras tridimensionales. Mostrar la
puntuación bruta y la ponderada en la misma escala. Declarar los pesos antes del
resultado.
```

---

## 5. Proceso y onboarding

### 5a. Tono operativo

```text
/slideshow
Deck de 6 slides para el manual de onboarding de un equipo nuevo.

Slide 1: "Tu primera semana".
Slide 2: "Día 1" — `flowchart` del día con 5 bloques, con el tiempo estimado de
cada uno.
Slide 3: "Día 2 a 3" — idem, segundo tramo.
Slide 4: "Semana 2" — idem.
Slide 5: "A quién le preguntás qué" — tres columnas por área, con nombre y
contacto reemplazables por `<persona>`.
Slide 6: "El checklist del día 30" — `onboarding-stepper-flow` con los pasos y
el estado actual vacío para ir marcando.

Revel de a puntos en las slides 2 a 4. Notas con el "por qué" de cada paso, no
solo el qué. Fondo claro, acento violeta. Sin imágenes ni archivos de video.
Marcar qué paso es bloqueante y cuál puede saltarse.
```

### 5b. Tono divulgativo

```text
/slideshow
Deck de 7 slides para explicar a un cliente nuevo cómo trabajamos.

Slide 1: "Cómo trabajamos juntos".
Slide 2: "Las 4 fases" — `onboarding-stepper-flow` con diagnóstico,
propuesta, ejecución y medición.
Slide 3: "Cada fase dura lo que dura" — `animated-bar-chart` con el rango de
duración real de las últimas 6 entregas.
Slide 4: "Qué necesitás de vos" — `caption-highlight` sobre "dos horas de tu
equipo, y no todas juntas".
Slide 5: "Dónde solemos atascarnos" — tres casos reales, con lo que pasó y lo
que hicimos.
Slide 6: "Cómo verificamos que funcionó" — los criterios de aceptación, en
lenguaje llano.
Slide 7: "El primer paso".

Revel de a puntos en la 3 y la 5. Notas con el contexto de cada rango de
duración. Fondo oscuro, acento naranja. Sin jerga de consultoría. Sin prometer
plazos fijos.
```

---

## 6. Propuesta comercial

### 6a. Tono inversionista

```text
/slideshow
Deck de 10 slides para reunión de inversión.

Slide 1: "La ronda, el uso de fondos y lo que ya funciona".
Slide 2: "El problema" — el número concreto, `data-chart` con la evidencia del
costo actual para el cliente.
Slide 3: "El mercado, de abajo hacia arriba" — el cálculo, no el TAM de
mercado. `chart-story` con la fórmula visible: cuentas × precio.
Slide 4: "Ya tenemos 14 clientes y Expandimos a 3 new" — `animated-bar-chart`
con la retención por cohorte como evidencia.
Slide 5: "Unit economics" — CAC, LTV y el mes de payback, en una slide, con la
tabla completa en la rama.
Slide 6: "Por qué nosotros" — tres diferencias, uno por cliente real, con nombre
y cita.
Slide 7: "El equipo" — tres personas con su trayectoria en una línea.
Slide 8: "El mercado de hoy" — `us-map-bubble` con dónde estamos presentes.
Slide 9: "Qué buscamos" — la ronda, el monto, el runway que compra y los hitos
que habilita.
Slide 10: "La decisión" — un slide, una frase.

Revel de a puntos en las slides 3 y la 5. Notas con la historia completa de cada
cifra. Fondo oscuro, acento verde. Sin gráficos de torta. Sin TAM de arriba hacia
abajo. Sin "mercado de miles de millones". Cada número con su fecha.
```

### 6b. Tono cliente

```text
/slideshow
Deck de 6 slides para presentar la propuesta a un cliente concreto.

Slide 1: "Lo quette proponemos y cuánto cuesta".
Slide 2: "Lo que observamos en su operación" — `animated-bar-chart` con las
horas y el costo actual, usando los datos que nos dieron.
Slide 3: "La solución en una imagen" — `flowchart` de "antes" y "después" del
proceso afectado, con el cambio marcado.
Slide 4: "Qué necesita de su equipo" — tres puntos, con tiempos, sin
adornos.
Slide 5: "Cómo se mide el resultado" — los dos indicadores que vamos a seguir, y
el plazo.
Slide 6: "Precio y siguiente paso" — una sola opción, no un menú.

Revel de a puntos en las slides 2 y la 5. Notas con las objeciones esperadas.
Fondo claro, acento azul. Sin jerga. Sin precios ocultos con "desde". Sin
métricas de la industria que no apliquen al cliente.
```

---

## Cómo adaptar un prompt

| El resultado no convence porque… | Corregí esto |
|---|---|
| Es genérico | Nombrá el bloque del catálogo en `technique` |
| Se inventó contenido | Poné el texto exacto entre comillas en `copy` |
| Hay relleno al final | Ajustá la duración o describí la cola |
| Los elementos se pisan | Pedí explícitamente el layout antes de animar |
| Se ve con otro estilo | Declará la identidad visual en `spec` |
| Apareció algo que no pediste | Sumá un negativo explícito |