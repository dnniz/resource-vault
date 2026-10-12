---
kicker: "fase 01 · captura"
kind: content
notes:
  - "Insistir en el objetivo de la fase: no es vender, es capturar la verdad de dónde vino y arrancar el reloj de SLA. Si fallás acá, todo lo demás es ficción."
  - "El paso 7 parece menor y es el más importante: un lead_id inmutable es lo que permite que todo el resto del sistema referencie a la misma persona."
  - "first_response_due_at se calcula contra captured_at más la ventana del canal. Por eso el canal hay que capturarlo en el paso 1, no después."
---

# Fase 01 · Captura: el contrato de entrada

Objetivo: no es vender. Es capturar la verdad de dónde vino y arrancar el reloj de SLA.

1. Identificación del canal y origen: orgánico, paid, referido, outbound, lista, evento.
2. Captura de parámetros: UTM, `source`, `campaign_id`, `ad_id`, `creative_id` si aplica.
3. Registro del input crudo: qué escribió, qué dijo, qué buscó. Texto exacto.
4. Asignación automática por ruleset: territorio, idioma, capacidad del rep, hora.
5. Arranque del SLA timer de primera respuesta.
6. Notificación al rep responsable (o al bot que abre conversación).
7. Creación del `lead_id` único e inmutable.

Los campos que no son opcionales:

| Campo | Tipo | Por qué |
|---|---|---|
| `lead_id` | uuid | Identificador inmutable. Nunca reusar, nunca reciclar. |
| `captured_at` | timestamp | Momento exacto del primer touch. Base de las métricas de velocidad. |
| `source` | enum | organic, paid_meta, paid_google, referral, outbound, evento, otro. |
| `sub_source` | enum | Específico al source (ej. paid_meta → campaign_id concreto). |
| `channel` | enum | whatsapp, instagram_dm, web_form, llamada, email, referido_persona. |
| `raw_input` | texto | Lo que el lead dijo o escribió, palabra por palabra. |
| `consent_*` | bool | Flags de consentimiento (marketing, datos, llamadas). Obligatorio legal. |
| `assigned_to` | user_id | Rep o bot responsable. Evento de re-asignación si cambia. |
| `first_response_due_at` | timestamp | SLA. Se calcula contra `captured_at` + ventana del canal. |