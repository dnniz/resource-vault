---
title: "El kit: comandos y checklist"
summary: "El prompt one-shot completo, todos los comandos de deploy, checklist SEO, DNS y la estructura de entrega. La página de consulta del curso."
objectives: ["Tener todos los comandos y el prompt en una sola página copiable"]
duration: "consulta"
---

### El prompt one-shot

Se pega una sola vez, con Opus 5.5. Solo se detiene para que pegues un secreto, para elegir dónde publicar, si Higgsfield falla o antes de borrar algo fuera de la carpeta. Cambia el bloque «El cliente» por tu negocio. **Tarda:** puede pasar de una hora.

#### El Último Kilómetro · Clínica Dental Sonrisa Perfecta

Landing con imágenes (GPT Image 2.5) y video (Seedance 2.5) vía Higgsfield → flujo de n8n → pruebas → deploy → entrega. Escrito para Opus 5.5.

```
Construye y publica la landing de un cliente real, de punta a punta: la página
con imágenes, video y animación; el formulario conectado a n8n; las pruebas;
el deploy y el documento de entrega. Todo en esta sesión.

Cuando un paso no necesite mi decisión, sigue. Pon las notas de avance en el
mismo mensaje que tu siguiente acción. Lleva la lista de tareas en TASKS.md:
marca cada una al terminarla y agrega lo que descubras.

Detente y pregúntame solo en estos casos:
- para que yo pegue un secreto (nunca me lo pidas en el chat: dime la línea exacta);
- para elegir dónde publicamos;
- si Higgsfield falla por sesión o por créditos;
- antes de borrar algo fuera de esta carpeta.

## El cliente
Clínica Dental Sonrisa Perfecta, Cancún. Odontología general, ortodoncia
(brackets e invisible), implantes y blanqueamiento. 12 años, 3 dentistas.
Para adultos de 25 a 55 en Cancún que llevan tiempo posponiendo el dentista,
y para turistas que quieren tratarse durante su estancia.
La oferta: "Tu primera valoración cuesta $500 y se te descuenta del
tratamiento. Sin sorpresas en el precio."
Acción principal: el formulario "Agenda tu valoración".
Todo el texto en español de México, con tuteo. Nada de lorem ni placeholders.

## La landing
- Estructura: skill forja-landing, tipo F (clínica / servicio local). Ya te
  contesté sus preguntas arriba: aplica la estructura que recomiendes sin
  esperar mi confirmación.
- Sistema visual: generado con ui-ux-pro-max para una clínica dental. No uses
  la paleta ember de forja-landing.
- Qué no quiero: fondo crema o blanco hueso, palabras en cursiva dentro de los
  titulares, etiquetas "01 / 02 / 03", degradados azul-morado, íconos de
  emoji, tres tarjetas idénticas en fila, fotos de sonrisas de catálogo y el
  azul de hospital.
- La pieza central es una secuencia que se controla con el scroll: un implante
  dental que se despieza (corona, pilar, tornillo) mientras el texto explica
  el tratamiento. El video avanza y retrocede con el scroll.

## Imágenes y video (Higgsfield por CLI)
- Usa el CLI `higgsfield` con la skill higgsfield-generate. Averigua en el CLI
  los identificadores exactos de GPT Image 2.5 y Seedance 2.5; no los adivines.
- Con GPT Image 2.5: el consultorio (luminoso, real, sin pacientes), a los 3
  dentistas (personas ficticias), una imagen por tratamiento y el primer
  cuadro de cada video.
- Con Seedance 2.5: el video de fondo del hero (6–8 s, en loop, sin cortes) y
  el despiece del implante para la secuencia de scroll. Parte de las imágenes
  que generaste para que todo se vea de la misma clínica.
- Tope: 12 imágenes y 3 videos. Guarda cada prompt, modelo y archivo en
  media/PROMPTS.md.
- Nada de fotos de "antes y después" ni testimonios inventados: es una clínica
  y serían resultados que nadie obtuvo.
- Optimiza todo para web: video en MP4 (H.264) y WebM, el del hero de menos de
  3 MB, con imagen de póster; imágenes en AVIF o WebP con el tamaño justo. Con
  prefers-reduced-motion se muestran las imágenes fijas.

## El formulario y n8n
- "Agenda tu valoración" pide: nombre, teléfono (WhatsApp), correo,
  tratamiento (general / ortodoncia / implantes / blanqueamiento / no sé) y un
  mensaje opcional. Validación en el navegador y en el servidor, con estados
  de envío, éxito y error.
- El formulario llama a /api/lead. Esa ruta valida y reenvía a
  N8N_WEBHOOK_URL con el header X-Webhook-Secret = N8N_WEBHOOK_SECRET, las dos
  desde .env.local.
- El flujo "Sonrisa Perfecta — Leads" se construye con el MCP de n8n,
  siguiendo n8n-sdk-rules y con las sticky notes del kit. Primero pídele el
  plan al subagente workflow-architect. Webhook con Header Auth → calificar
  (implantes y ortodoncia = alto valor; general y blanqueamiento = normal;
  "no sé" = revisar) → fila en Google Sheets → correo al lead (el de alto
  valor lleva el botón para agendar) → responder 200. Usa las credenciales
  que ya existen, con los nombres de CLAUDE.md. Actívalo y pon la URL de
  producción en .env.local.

## Cómo repartir el trabajo
Las imágenes y los videos tardan: lánzalos primero con un subagente y
construye la página mientras tanto. El flujo de n8n puede ir en otro
subagente. Cuando un subagente reporte, revisa la evidencia antes de darlo
por bueno: que los archivos existan y se abran, y el ID de la ejecución de n8n.

## Revisar antes de publicar
- npm run build sin errores.
- Con Playwright: capturas en escritorio (1440) y celular (390), el scroll
  completo de la secuencia del implante y un lead de implantes enviado desde
  el formulario. Confirma en n8n que la ejecución salió completa y que la
  fila llegó.
- /impeccable critique y aplica los hallazgos críticos y altos con
  /impeccable polish. Luego /forja audit. Mira las capturas tú mismo y
  arregla lo que no se vea bien.
- SEO: title y meta description únicos con el servicio y la ciudad, un solo
  H1, alt descriptivo en cada imagen, canonical al dominio final, sitemap y
  schema LocalBusiness en JSON-LD con los datos de la clínica.
- Anota en MEMORY.md lo que se rompió y cómo se arregló.

## Publicar
Usa la skill docker-deploy y enséñame su menú para que yo elija:
- Vercel (opción 5): las variables de entorno las agrego yo con
  `vercel env add`; dame los comandos exactos.
- Coolify (opción 4): output standalone, sube el repo a GitHub y crea la app
  con el MCP de Coolify. Las variables secretas las pego yo en la interfaz de
  Coolify; por MCP solo las que no son secretas.
En los dos casos, verifica la URL pública con curl y manda un lead de prueba
desde producción. Revisa también en producción que no haya noindex ni Disallow
heredado de pruebas, que http redirija a https y que www termine en una sola URL. Si te doy un dominio, dime exactamente qué registros DNS
poner.

## La entrega
Escribe ENTREGA.md con la skill client-deliverable-docs, sin secretos:
- qué se hizo y dónde vive cada cosa;
- una tabla de cuentas: a nombre de quién está cada una, qué rol tengo yo hoy
  y cuál me queda al cierre (dominio, repo, hosting, n8n, Higgsfield, bóveda);
- qué corre hoy en infraestructura mía y hay que migrar al cierre;
- qué cuesta al mes (incluidos los créditos de Higgsfield que se gastaron);
- la garantía sobre defectos y cómo pedir cambios.

## Terminado significa
- La landing responde en la URL pública, con el video del hero y la
  secuencia del implante funcionando en escritorio y en celular.
- Un lead enviado desde producción llega a Sheets y la ejecución de n8n
  sale en verde.
- No hay secretos en el repo (revísalo con git grep antes de cada push).
- TASKS.md, media/PROMPTS.md y ENTREGA.md existen.

Al terminar, dame primero lo que quedó esperando una decisión mía. Después, un
resumen de 5 líneas, los créditos de Higgsfield que se gastaron y la lista de
supuestos: marca lo que no pudiste confirmar.
```

### Antes de pegarlo

En este orden. Sin esto, el one-shot se detiene a preguntar. Son 9 pasos.

### Deploy en Vercel

La skill `docker-deploy` (opción 5) o `/forja deploy`. Las variables las escribes tú. **Ojo:** Vercel Hobby es para uso personal; la landing de un cliente va en Pro, a nombre del cliente.

#### Los comandos

De la build a la URL pública.

```
# esto lo corre /forja deploy
npm run build
gh repo create sonrisa-perfecta --private --source=. --push
vercel --yes          # preview
vercel --prod         # producción

# ⛔ esto lo escribes TÚ, en tu terminal (no en el chat)
vercel env add N8N_WEBHOOK_URL production
vercel env add N8N_WEBHOOK_SECRET production
vercel --prod         # redeploy para que tome las variables

# dominio
vercel domains add sonrisaperfecta.mx
vercel domains inspect sonrisaperfecta.mx   # te dice qué registros poner

# verificar
curl -I https://sonrisaperfecta.mx
```

### Deploy en Coolify con el MCP

La misma landing, en tu VPS. Skill `docker-deploy` + MCP de Coolify (`@masonator/coolify-mcp`).

### Dominio y DNS

Registrador = la escritura. DNS = el directorio. Hosting = la casa. Pueden estar en tres empresas distintas.

| Tipo | Nombre | Valor | Para qué |
|---|---|---|---|
| `A` | `@` | la IP que te da Vercel (o la de tu VPS) | la raíz |
| `CNAME` | `www` | el destino que te da Vercel | el www |

### Regla #1: el dominio se compra a nombre del cliente, con su tarjeta y su correo. Tú entras como colaborador. La propagación tarda: revísala con `dig sonrisaperfecta.mx +short` y no entres en pánico si al principio no carga.
Parte 2 · publicar y entregar

Los prompts de la segunda clase, en orden. Cambia `tudominio.com` por tu dominio. Los secretos siempre en tu terminal o en el panel, nunca en el chat.

#### 1 · Retomar el proyecto

```
Retomamos este proyecto. Lee CLAUDE.md, TASKS.md, MEMORY.md y DEPLOY.md.
Sin cambiar nada todavía: dime en 5 líneas qué quedó hecho, qué falta y si algo
cambió desde la última sesión (git status y npm run build). Luego espera.
```

#### 2 · Elegir dónde publicar

```
Sigue con la sección Publicar de TASKS.md: usa la skill docker-deploy y
enséñame su menú. Todavía no despliegues nada.
```

#### 3 · Deploy en Vercel

```
Opción 5, Vercel. Crea el repo privado en GitHub, haz el primer deploy y
pásalo a producción. Detente antes de las variables de entorno y dame los
comandos exactos para que yo las agregue en mi terminal.
```

> **TERMINAL**


#### 3b · Las variables (en tu terminal, no en el chat)

```
vercel env add N8N_WEBHOOK_URL production
vercel env add N8N_WEBHOOK_SECRET production
vercel env add NEXT_PUBLIC_SITE_URL production
```

#### 3c · Redesplegar y verificar

```
Ya agregué las variables. Redespliega a producción, verifica la URL con curl
(tiene que dar 200) y manda un lead de prueba desde producción. Dame el ID de
la ejecución de n8n.
```

#### 4 · Conectar el dominio

```
Agrega tudominio.com y www.tudominio.com al proyecto de Vercel. Dime
exactamente qué registros DNS pongo en mi registrador, en una tabla (tipo,
nombre, valor, TTL), y cuál de los dos redirige al otro.
```

> **A MANO**


#### 4b · En el panel DNS de tu registrador (Hostinger, GoDaddy, Namecheap…)

> **TERMINAL**


#### 4c · ¿Ya propagó?

```
dig tudominio.com +short && dig www.tudominio.com +short
```

#### 4d · Verificar el dominio

```
Revisa con curl que https://tudominio.com responda 200 con SSL, que http
redirija a https y que www redirija al dominio sin www (o al revés). Dame los
códigos de cada uno.
```

#### 5 · Revisión SEO, Open Graph y meta tags

```
Haz una revisión SEO de la landing contra la URL de producción
(https://tudominio.com), no contra local. Para cada punto dime qué encontraste,
si está bien y por qué importa, y arregla lo que falle:

Indexación
1. Ningún noindex en las páginas ni Disallow en robots.txt heredado de pruebas.
2. robots.txt apunta al sitemap, y sitemap.xml usa el dominio final.
3. Canonical al dominio final, no a la URL de preview.
4. Una sola URL: 301 de http a https y de www a sin www.

Meta tags
5. Title (50–60 caracteres) y meta description (140–160) únicos, con el
   servicio y la ciudad.
6. Un solo H1 con el servicio. El idioma correcto en <html lang>.

Para compartir en redes (Open Graph)
7. og:title, og:description, og:url, og:type, og:locale y og:site_name.
8. og:image absoluta, 1200×630, de menos de 300 KB, que responda 200, y con
   og:image:alt.
9. twitter:card = summary_large_image.
10. favicon, icono de Apple (apple-touch-icon) y theme-color.

Negocio local
11. Schema en JSON-LD (LocalBusiness o el tipo que corresponda) válido, con
    nombre, dirección y teléfono. Si faltan datos reales, no los inventes:
    dímelos como pendiente del cliente.

Imágenes
12. WebP o AVIF, con alt descriptivo y el tamaño justo.

Comprueba cada punto con curl sobre producción. Al final, una tabla: punto,
estado, qué arreglaste y por qué importa. Redespliega si cambiaste algo.
```

> **A MANO**


#### 5b · Probar cómo se ve al compartir

> **A MANO**


#### 6 · Google Search Console

#### 7 · Coolify: revisar que el MCP está conectado

```
Solo lectura, no cambies nada: lista mis proyectos de Coolify y dime el
estado de mis servicios. Si alguno dice unhealthy, compruébalo con curl.
```

#### 7b · Deploy en Coolify con docker-deploy y el MCP

```
Ahora la opción 4, Coolify, con la skill docker-deploy: usa el Dockerfile que
ya existe (revísalo contra el proyecto), usa el mismo repo de GitHub y crea la
app con el MCP de Coolify en un proyecto nuevo, con el dominio
https://vps.tudominio.com. Por el MCP pon solo NEXT_PUBLIC_SITE_URL =
https://tudominio.com como Build Variable. Las variables secretas las pego yo
en el panel: detente y dime dónde. Dime también qué registro DNS pongo para
vps.tudominio.com.
```

> **A MANO**


#### 7c · A mano: el DNS y los secretos

#### 7d · Verificar Coolify

```
Ya puse el registro y las variables, y redesplegué. Verifica
https://vps.tudominio.com con curl, no con el MCP: 200, SSL y que el canonical
apunte a https://tudominio.com. Luego manda un lead de prueba desde ahí.
```

#### 8 · Romper el flujo a propósito

```
Para practicar: en el formulario, cambia el name del campo telefono a phone y
redespliega. No toques n8n.
```

#### 8b · Diagnosticar leyendo n8n

```
Mandé un lead y llegó sin teléfono. Lee la última ejecución del flujo en n8n:
dime qué dato llegó al webhook y qué expresión ya no coincide. Arregla el flujo
para aceptar los dos nombres, no el formulario, y anótalo en MEMORY.md.
```

#### 9 · La entrega

```
Escribe ENTREGA.md con la skill client-deliverable-docs, sin secretos:
- qué se hizo y dónde vive cada cosa;
- una tabla de cuentas (dominio, GitHub, hosting, n8n, Search Console, bóveda):
  a nombre de quién está cada una, mi rol hoy y al cierre;
- qué corre en infraestructura mía y hay que migrar al cierre;
- qué cuesta al mes, la garantía y cómo pedir cambios;
- como decisiones pendientes del cliente, todo lo que quedó a mi nombre
  (por ejemplo, la cuenta de correo que manda los emails) y los datos que
  faltan.
Revisa que no tenga ningún secreto antes de enseñármelo.
```

### SEO antes de entregar

Los 8 checks que más se olvidan cuando una landing hecha con IA pasa de preview a producción. Diez minutos.

### La entrega

El cliente es dueño. Tú eres invitado. Sirve igual para una landing que para una app.

| Cuenta | A nombre de | Tú entras como |
|---|---|---|
| Correo corporativo (la llave) | el cliente: `desarrollo@` o `soporte@` | — a él se ligan las demás |
| Dominio y DNS | el cliente, con su tarjeta | acceso delegado |
| Repo | organización de GitHub del cliente, desde el primer commit | Owner durante el desarrollo |
| Hosting (Vercel, Cloudflare o VPS) | el cliente: su equipo, su tarjeta | miembro del equipo |
| Base de datos (Supabase) | el cliente | miembro de la organización |
| n8n, WhatsApp, Stripe… | el cliente (portafolio de Meta, cuenta de pagos) | admin o usuario de sistema |
| Bóveda de credenciales | el cliente | con acceso y bitácora |

### El mantenimiento

Separa lo que se le pasa al cliente de lo que cobras tú.

#### Costos que se pasan

Los paga el cliente directo:

- dominio: ~$15 al año
- hosting: $0–20 al mes
- n8n, Sheets y correo

#### Tu tiempo: $600 al mes

Lo que incluye:

- la landing viva: SSL, dominio y respaldo
- el flujo de n8n vigilado, con Error Workflow
- cambios de contenido
- reporte mensual de leads

### Los repos de la clase

Todo lo que usó el prompt.
