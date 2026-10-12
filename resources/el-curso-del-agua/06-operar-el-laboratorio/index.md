---
title: "Operar el laboratorio: el sistema del founder"
order: 6
summary: "El diario de 24 semanas convertido en sistema: pactos, delegación, fallo rápido, límites, un día a la vez y la redirección del perfeccionismo."
objectives:
  - "Escribir pactos con la fórmula Acción + Frecuencia + Periodo fijo"
  - "Contratar o delegar en especialistas sin tener un proceso documentado"
  - "Decidir qué abandonar rápido y qué costo hundido reconocer"
  - "Convertir perfeccionismo y ansiedad en interpretaciones reorientables"
  - "Sostener un ritmo con límites artificiales y con un día a la vez"
prerequisites: []
duration: "20 min"
---

Un builder que publica sus experimentos todas las semanas tarde o temprano tiene
que responder una pregunta incómoda: **¿esto es un negocio o es un laboratorio con
sueldo?** Las partes anteriores de este curso explican cómo se construye un agente
fiable y cómo se encuentra a quién le duele el problema que resuelve. Esta parte
es la que casi nadie escribe: la capa de operación.

Todo lo que sigue procede de un caso real. Stiven Rosales lleva 24 semanas
publicando el newsletter "El Curso del Agua" sobre Haiku, su agencia de agentes de
IA conversacional en Perú. Las cifras, los nombres y los fracasos son suyos, tal
como los reportó. Lo que se extrae de ahí no es doctrina: es una forma de trabajar
observada de cerca.

## De laboratorio a empresa

El origen de todo está en una declaración pública. En noviembre de 2025 anunció que
en sus publicaciones semanales compartiría los experimentos que llevaba a cabo, y
los definió con una precisión que merece ser copiada:

> "Un pacto es realizar una acción durante un periodo definido."

La estructura es de tres piezas y nada más:

**Acción + Frecuencia + Periodo fijo**

Por ejemplo: *leer 1 hora diaria por 7 días*. Ese es el formato, y funciona porque
no admite interpretación. Un pacto no es un objetivo, no es una meta, no es una
aspiración. Es un experimento acotado en el tiempo.

> "No son objetivos ni metas rígidas; son pruebas de rutas que considero valiosas
> para explorar."

El detalle que da seriedad al asunto: el anuncio fue público a propósito, para
generar una responsabilidad "social" que lo empujara a reflexionar sobre sus pactos
cada semana. Nadie abandona en silencio cuando hay gente esperando el parte.

### El techo del aprendizaje bajo presión

En los primeros meses de Haiku aprendió mucho, y lo reconoce sin reservas. Pero
el diagnóstico posterior es el importante:

> "Aprender bajo presión tiene un límite. Los primeros meses aprendí con la presión
> de conseguir clientes; luego, con la presión de cumplir con ellos."

Hay dos presiones ahí, y son distintas. La primera es conseguir clientes. La
segunda, cumplir con ellos. Y la segunda no tiene fecha de vencimiento: cada
cliente nuevo es un mundo nuevo, con reglas que no existían la semana pasada.
Aprendió a costa de la tranquilidad, del tiempo personal y del descanso, y notó
cómo la tensión lo empujaba a escapar del trabajo: series todo el día, pendientes
postergados.

> "Haiku debe pasar de ser un laboratorio a ser una empresa real. La innovación es
> increíble, pero no puede ser la base completa del modelo de negocio. La innovación
> debería mejorar lo que ya existe, no convertirse en un riesgo que pueda tumbar todo
> si algo falla."

Ese es el cambio de umbral. Un laboratorio se define por lo nuevo que inventa. Una
empresa se define por lo viejo que sostiene. La innovación entra como mejora, no
como base.

## Especialistas, no otro unicornio

El problema siguiente no fue técnico, fue de equipo. En enero de 2026 había un
editor de contenido y un desarrollador junior aprendiendo n8n y herramientas
low-code. El intento de delegar no funcionó, y la explicación fue doble: primero
no había proceso documentado; segundo, el perfil no correspondía.

Antes de los motivos, el marco. En una entrevista de Alex Hormozi en *The Diary Of
A CEO* hay una analogía que se usa mucho para explicar la contratación temprana:

> "Al inicio, el emprendedor es como un unicornio: tiene cuerno, alas, brillos… hace
> de todo. El error es buscar contratar a otro unicornio. Debes buscar a un 'perro'
> (que solo tenga cola) o a un 'rinoceronte' (que solo tenga cuerno). No buscas a
> alguien como tú, buscas especialistas que hagan una parte del trabajo mucho mejor
> que tú."

La conclusión operativa es incómoda: el problema de un fundador generalista no es
que sea generalista, es que **intente cubrir el hueco con otra versión de sí
mismo**.

| Perfil | Qué sabe hacer | Qué le falta |
|---|---|---|
| Unicornio (fundador) | De todo, un poco de cada cosa | Profundidad en casi nada |
| Perro | Una sola cosa, muy bien | El contexto de por qué |
| Rinoceronte | Una sola cosa, muy bien | Todo lo demás |

Pero esa delegación solo es posible si existe algo delegable. Y aquí aparece el
requisito, tomado de *El mito del emprendedor* de Gerber:

> "Hacer una empresa es crear orden en medio del caos. Es crear un entorno seguro
> para que otros puedan seguirlo."

Traducción brutal: **no se puede delegar lo que no está documentado**. Documentar
no es burocracia previa, es el producto que vendes a tu equipo el día que crezcas.

### El caso real

El junior esperaba capacitación estructurada. El autor concluyó que el rol que
buscaba era casi una copia de sí mismo: alguien creativo y autodidacta, con una
mentalidad de crecimiento que él mismo apenas venía desarrollando.

La salida fue separar a esa persona de Haiku. Y la regla de contratación que quedó
es la parte realmente transferible:

> "Las contrataciones de perfil técnico serán en base a lo que necesita la app para
> funcionar: branding para el cliente, configuraciones ya documentadas. Así la
> delegación es efectiva, pero no para procesos de construcción desde cero, sino
> para trabajar sobre lo que ya construí."

Traducción: **puedes delegar en lo que ya construiste**. No puedes delegar en lo que
todavía no sabes cómo se hace. Esa asimetría es incómoda y real: significa que el
equipo se contrata para terminar, no para inventar.

El resto de esa semana no se quedó en el diagnóstico. También encontró un problema
con nombre propio en la memoria de herramientas en n8n:

> "La mala gestión de memoria en n8n se debe a que su memoria se contamina al llamar
> tools: estas entregan un código muy complejo, luego el modelo alucina y genera
> malas respuestas porque el contexto se ensucia. La solución es que las tools ahora
> siempre devuelvan un output en texto plano ordenado, un párrafo limpio en vez de
> un JSON completo."

Esa es también una lección de rendimiento: cuando el agente se degrada después de
llamar una herramienta, el problema suele estar en la forma del retorno, no en el
prompt.

## Fallar rápido, y la honestidad del costo hundido

Hay un rasgo que se forma temprano y que después decide cómo se sostiene una
empresa: la disposición a **probar lo innovador, aceptar rápido que no funciona y
descartarlo sin culpa**.

### El servicio de tipeo de su padre

Cuando era niño, sus padres trabajaban haciendo copias e impresiones de libros
universitarios y ofrecían un servicio de tipeo: redactar solicitudes y documentos
para trámites. El local estaba justo al lado de lo que años después sería su
universidad. El servicio tenía muchísima demanda y era rentable.

Mi padre, buscando una ventaja, tuvo la idea de comprar un micrófono para hacer
**dictado por voz**. En ese contexto era rarísimo. Instalaron el software
—obviamente crackeado, y gracias a la IA él después lo identificó como *Dragon
NaturallySpeaking*— y funcionaba, digamos, un 70% bien.

> "El problema es que corregir los errores generaba más trabajo manual que escribir
> desde cero. Así que, sin darle muchas vueltas, lo descartamos."

Ese detalle del 70% es la lección completa. La tecnología funcionaba *demasiado
bien para ser inútil*. No era un fracaso: era una herramienta que solo pagaba su
costo si el error era cero. Y cuando el costo de corrección supera el costo de
hacerlo a mano, la herramienta deja de ser herramienta y pasa a ser obstáculo.

Lo que quedó de ahí no fue el software, fue el criterio. En su casa, el premio a
la eficiencia era el ahorro económico para una vida mejor, y **hacer apuestas por
la innovación para aprovechar al máximo el poco dinero que había** fue su mejor
entrenamiento de growth mindset.

### El costo hundido

El contraste es con su propia app de traducción de libros, en la que sí invirtió
mucho tiempo:

> "Me frustré mucho tratando de lograrlo, pero al final acepté que todavía no está
> ahí. Traduce libros de texto simple, pero no tan técnicos como los de
> *LangChain*, que es lo que yo buscaba. Así que, de momento, ahí lo dejé."

La diferencia entre los dos casos es la misma que se repite en todos los proyectos:
en el primero la decepción llegó rápido y barata; en el segundo llegó tarde, con
dinero y horas ya hundidos. Reconocerlo a tiempo es exactamente lo que se entrena
con experimentos cortos.

### El método de aprendizaje también se abandona

El mismo patrón apareció en el aprendizaje, que es el más fácil de reconocer porque
lo hace cualquiera que esté aprendiendo algo:

- La estrategia inicial para inglés fue *shadowing* más flashcards, recomendado por
  ChatGPT.
- Después de la primera sesión dudó de su efectividad. Buscó en YouTube cómo lo
  aplicaban otros y descubrió que el shadowing exige **entender** lo que se repite,
  no solo imitar la fonética. Lo dejó. También las flashcards.
- El motivo real era otro: el objetivo era **leer libros en inglés**, no hablar.

> "Entendí que es porque no me lleva a mi resultado más esperado: entender libros
> en inglés. No necesitaba hablar."

Un método de aprendizaje no se abandona porque sea malo: se abandona porque no
lleva al resultado que se persiguió. Y perseguir el método correcto es una forma
muy productiva de evitar perseguir el resultado.

### Lo que sí hizo con esa energía

Cuando cayó el método de inglés, la energía no desapareció: se movió. Volvió a los
libros en lugar de los videos de programación, porque los videos le parecían
lentos. Del lado del negocio, la innovación no se quedó en descartar: esa misma
semana arrancó un **experimento de contenido de siete videos por semana**, uno al
día, midiendo qué funcionaba y qué no.

Fallar rápido no es hacer menos. Es hacer más intentos, más baratos.

## Los límites como decisión, no como disciplina

### El año en 12 semanas

Hay un libro —*El año en 12 semanas*— que propone algo simple y muy poderoso: si
en vez de tener un año para cumplir tus objetivos solo tienes 12 semanas, eres más
eficiente. Los límites más cortos reorientan la mentalidad hacia acabar el trabajo
más rápido, en los casos donde se puede acabar.

La contraparte es el riesgo que el autor identificó en sí mismo: **transgredir los
límites**. "Planteamos el juego para solo jugar 8 horas al día o quizá 6, pero
cuando rompes las reglas de esos juegos ya no tiene mucho sentido seguir jugando. O
cuando te planteas metas en un trimestre, pero luego piensas que ya luego hay más
tiempo en el año."

| Regla | Por qué existe | Qué pasa al romperla |
|---|---|---|
| 8 horas al día | El límite produce foco | "Hoy hago 12" se vuelve normal |
| Un trimestre de metas | El límite produce urgencia | "Después en el año hay tiempo" |
| Jugar, no trabajar más | El juego da sentido | El modelo deja de ser juego |

> "Por eso es muy importante tomar en serio los juegos. Juegos o modelos mentales."

El resultado tangible de esa semana fueron cuatro guiones, miniaturas y títulos para
YouTube. Pero el valor real estaba en el otro lado: "un tiempo límite me ayudó a
tener tiempo para pensar, descansar, leer, salir a cafés y conversar".

### La escasez artificial

Y aquí aparece una idea aplicable a casi cualquier trabajo:

> "Si tuvieras un pastel favorito y tuvieras a disposición todos los pasteles
> disponibles con solo un clic, deja de ser especial por su abundancia."

Limitar el tiempo de trabajo **crea escasez artificial**, y la escasez crea deseo.
Saber que después ya no habrá tiempo para eso es lo que permite disfrutarlo. No es
auto disciplina: es diseño de espacio para lo que quieres hacer.

### El trabajo cognitivo y el bloque de foco

El equipo trabajaba de 8:00 a. m. a 2:00 p. m. de corrido, en foco total, y el resto
del día para descansar o para actividades que no demandan operatividad.

El beneficio está en la naturaleza del trabajo, no en el horario: "nuestro trabajo es
más cognitivo que mecánico; estar pensando en soluciones nuevas es, de por sí,
agotador". Salir del bloque de foco sin cansarse tiene un efecto directo sobre la
calidad del día siguiente, porque dormir bien y dormir agotado no es lo mismo aunque
duermas las mismas horas.

Hay una observación aquí que vale más que el horario mismo:

> "Mi esfuerzo es más productivo cuando mejoro los procesos que cuando intento que
> el equipo incremente sus horas."

Si eres el cuello de botella, la palanca no es que trabajen más. Es que trabajen
mejor, o que el proceso cambie.

## Un día a la vez

### La lección de la adicción

La fuente es el psiquiatra y youtuber HealthyGamerGG, y el marco es el tratamiento de
las adicciones: caer y recuperarse implica una lucha diaria donde un mínimo error te
hace recaer y empezar desde cero.

El problema de medir el progreso así es aritmético. Si el enfoque es "aumentar cada
día los días limpios", pasar de 500 a 501 días pesa mucho, y cada día pesa más. Tras
años, la meta se vuelve una carga en vez de un motor. Por eso el enfoque es otro:

> "Un día a la vez. No se enfrasca en la probabilidad de fallar después de 500 días,
> sino que todo se reinicia a un día y se piensa: 'hoy no sabemos qué pasará mañana,
> pero hoy estaremos limpios'."

### Aplicado al negocio

El autor se.identifier con el patrón. Para cada proyecto que tenía en mente pensaba
en el camino que le faltaba por recorrer, veía que faltaba mucho, y además no sabía
si llegaría jamás. El resultado era agotador: un motivador que decae mientras más
lejos está el destino.

> "Al margen de ello, daré todo lo que pueda dar en ese día y en las horas asignadas
> para trabajar. No pensando necesariamente en el resultado, sino disfrutando de
> tener la suerte de trabajar en algo que quiero."

Y hay una advertencia que evita la trampa inversa. Si te detuvieras al alcanzar la
meta, la vida entera se reduce a un punto, y ese punto va a llegar y va a ser una
pausa:

> "La meta cuantitativa solo es un medidor de avance, no de si hago bien o mal, o si
> disfruto o no. La satisfacción se vive cada día trabajando con todo el compromiso
> en las horas disponibles. La recompensa ya está ahí: es el mismo día."

## Interpretar, no borrar

### Treinta minutos que no fueron sobre código

Era viernes por la noche. Mientras más avanzaba en la app de Haiku, más cosas
aparecían por hacer: el camino no se acortaba, se expandía. En algún momento dejó
de construir y empezó a pensar que eso nunca iba a salir a la luz.

Hizo algo que describe como un hábito extraño pero útil: se puso a conversar con
Claude. No sobre código ni sobre funcionalidades, sino sobre lo que estaba
sintiendo. Después de treinta minutos de profundizar, el patrón apareció:

> "Estaba persiguiendo la perfección. Y detrás de esa perfección había un miedo
> concreto, no tanto a fallar, sino a confirmar que lo que estoy haciendo no sirve."

El miedo es astuto, y por eso es difícil de detectar:

> "Ese miedo es astuto. No se presenta como miedo, se presenta como 'rigor'. Como
> ganas de 'pulir un poco más'."

### La tendencia no se borra, se orienta

Lo que salió de esa conversación fue una idea con estructura:

> "Las tendencias que tenemos, ya sea por nuestra naturaleza, por lo que vivimos o
> por nuestros traumas, son algo que ya nos pertenece. No creo que sea viable
> erradicar una vivencia. El pasado ya está ahí. Lo que sí podemos cambiar es la
> **interpretación**."

La misma tendencia puede ser una ventaja en un contexto y un estorbo en otro, y las
dos cosas son verdad a la vez. Por ejemplo, la tendencia a la perfección: te lleva a
hacer las cosas con más cuidado y más detalle, y en otro momento te demora en
lanzar algo por miedo a que no esté "listo". Misma tendencia, distinto destino.

Cuando se tiene esa estructura mental, las decisiones dejan de ser racionales y se
vuelven experienciales. Ya no se intenta convencer con argumentos de "debo lanzar".
Se observan señales:

> "¿Estoy refinando o estoy evitando?"

Esa pregunta reemplazó los argumentos, porque no hay argumento que gane contra la
sensación de estar haciéndolo bien.

### La IA como eco

Hay un uso de la IA aquí que merece decirse con precisión, porque no es el uso
habitual. La IA no le dio una respuesta ni un plan: funcionó como un eco de su propia
voz.

> "Aquí la IA se vuelve algo interesante: funciona como un eco de mi propia voz, que
> **me devuelve preguntas más interesantes** que las que yo me haría solo."

No genera insights externos. Genera preguntas internas mejores que las que uno
mismo se haría. Es un uso distinto al de "hazme el código".

### El resultado

Esa misma noche se propuso sacar el producto al día siguiente al mediodía. Y lo
hizo: no fue perfecto, pero fue funcional. Y el plan cambió de "refinar contra mi
imaginación" a "recibir feedback real":

> "La parte de refinar es mucho más útil cuando se hace con el feedback de quien
> realmente lo usa, no con la imaginación de mi mente perfeccionista."

El criterio se volvió falsable. No "está bien", sino: ¿el agente funciona o no? ¿Qué
le falta? ¿O no es viable para esa empresa? Si no funciona, se pasa a otra hipótesis,
con data real del mundo real.

## Ir más despacio cuando tengo prisa

### Soltar

El servicio de Haiku se había metido en un callejón sin salida: el autor terminó
construyendo un CRM completo desde cero, con panel de conversaciones propio y todo
dentro de la plataforma. Un amigo que usa Kommo se lo dijo en una conversación
sencilla.

> "Suena obvio escrito así. No lo era cuando estaba metido construyendo."

El giro del modelo fue hacia arriba: usar un software externo que da acceso a los
canales (Manychat o Chatwoot, según el caso) y concentrarse en **la capa de
administración del agente**: herramientas, integraciones, lógica. Sin CRM propio,
sin reinventar el panel de conversaciones.

El momento de claridad más nítido llegó con el primer cliente, una amiga que vende
por TikTok: el proyecto se construyó sobre Manychat porque ella ya lo tenía
implementado. Y entonces:

> "Sentí alivio de que el cliente ya tuviera Manychat."

El alivio es la señal. Cuando un cliente ya tiene la herramienta que ibas a
construir, no es una limitación: es una buena noticia que te ahorra meses. Si lo
sientes como decepción, es porque estás aferrado a construir en vez de a resolver.

### Libros diferentes, no una carrera

En el n8n Fest de Lima, el año anterior había visto a otros builders como
competencia y se había agotado. Ese año escuchó a Martín Velasco hablar de Tami
Bot con emoción, y lo que notó no fue lo que había logrado sino lo que le costó llegar
ahí y el impacto en las personas que quiere. Eso reformuló la relación entera:

> "Es como libros diferentes: de distintas temáticas y hasta en distintos idiomas.
> Cada uno con su camino."

El efecto secundario fue una definición de contenido más honesta: los videos largos
de YouTube sirvieron a personas precisamente porque no muestran soluciones
infallibles, sino cómo falló el autor, cómo intentó y cómo encontró una respuesta.
Abren un camino desde la comprensión, no desde la solución.

### Una identidad que sobrevive al error

Y de la misma fuente, una frase que funciona como antídoto contra el perfeccionismo
de la sección anterior:

> "Si mi identidad es 'soy bueno en esto', cualquier error la amenaza. Pero si cambio
> eso a 'soy bueno aprendiendo', entonces el error ya no decepciona, enseña. Lo
> primero depende de un juicio externo que no controlo. Lo segundo depende de mí:
> hacer o no hacer."

Cambiar de identidad no es autoengaño ni un juego de metas: es mover el peso de la
evaluación desde un juez externo, que no controlas, hacia una práctica interna, que
sí. El error deja de ser una amenaza contra tu identidad y pasa a ser información.

La última idea cierra el círculo, y es la más difícil de aceptar:

> "Algo nunca está listo. Algo es ya bueno, y luego en el tiempo se afina y mejora. La
> idea es empezar y mejorarlo ya."

## Los diez pactos que sostienen el ritmo

Un pacto no es una meta: es un experimento con fecha de fin. Estos son los
compromisos reales que aparecen en el diario, con la fórmula tal como fueron
declarados:

| Pacto | Acción | Frecuencia | Periodo |
|---|---|---|---|
| Productización de Haiku | Ejecutar el roadmap de productización | 1 hora diaria | 2 semanas |
| Programación | Aprender JavaScript (curso de Midudev) | 30 min interdiario | 1 mes |
| Inglés | Estudiar inglés | 30 min interdiario | 1 mes |
| Contenido | Publicar videos para calentar la audiencia | 7 videos por semana | experimento abierto |

Dos comentarios sobre la tabla. Primero: el pacto de inglés **cambió de método**
dos veces —primero con shadowing y flashcards, después solo con lectura y
flashcards de Anki— sin dejar de ser el mismo pacto. El método es la variable que
se ajusta; la frecuencia y el periodo son el compromiso. Segundo: los pactos que
terminan se reemplazan por otros. No existe un estado de "ya cumplí todo", solo la
pregunta de cuál es el siguiente experimento.

Y si te interesa leer más, la línea de fondo del propio autor es la mejor regla de
todo el curso:

> "Cuando tengo prisa, voy más despacio."