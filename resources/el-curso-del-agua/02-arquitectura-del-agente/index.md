---
title: "La arquitectura del agente que no inventa"
order: 2
summary: "El pipeline de cuatro capas que el autor construyó después de agotar la vía del prompt: router, extractor de parámetros y fact-checker, cada uno atacando una clase distinta de fallo."
objectives:
  - "Dibujar el pipeline de cuatro capas y explicar qué capa previene qué fallo"
  - "Diagnosticar en qué capa está la falla cuando un agente devuelve datos falsos"
  - "Explicar por qué un modelo pequeño y barato es la opción correcta para el enrutamiento"
  - "Separar lo que debe ser exacto de lo que puede quedar en manos del modelo"
prerequisites: [01-el-bot-que-inventa]
duration: "32 min"
---

Esta es la parte técnica del curso. Construyes el pipeline capa por capa,
siguiendo el orden en que aparecieron los fallos: primero el agente olvidaba
consultar, después armaba mal la búsqueda, después inflaba la respuesta con la
data correcta. Cada capa existe porque hubo un síntoma concreto detrás.