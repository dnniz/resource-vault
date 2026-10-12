---
title: "Los detalles que matan la confianza"
order: 3
summary: "El bug de memoria que ensuciaba el contexto, el output de texto plano que lo arregló, y las decisiones de infraestructura, canal y costo que sostienen al agente en producción."
objectives:
  - "Diagnosticar la contaminación de memoria al llamar herramientas y explicar su efecto en las respuestas"
  - "Diseñar el contrato de salida de una herramienta para que sea legible y auditable"
  - "Justificar un modelo barato en las capas de decisión acotada a partir de casos reales"
  - "Distinguir qué infraestructura conviene construir y cuál conviene rentar"
prerequisites: [02-arquitectura-del-agente]
duration: "26 min"
---

La arquitectura del pipeline resuelve el problema de las respuestas. Esta parte
resuelve los que vienen alrededor: la memoria que se ensucia, los backups que
no existen, el canal que no es tuyo, el costo que nadie muestra y los detalles de
experiencia que hacen que el cliente confíe en lo que ve.