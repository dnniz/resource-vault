---
kicker: "hyperframes · anatomía"
kind: content
notes:
  - "La isla es el único lugar donde vive la estructura del deck."
  - "Regla de oro: la isla va duplicada en el wrapper, porque el componente lee su propio innerHTML."
---

# Una isla JSON declara todo

La estructura del deck — orden, reveals, ramas y notas — vive en un solo bloque
de script. Es la fuente de verdad.

~~~html
<script type="application/hyperframes-slideshow+json">
{
  "slides": [
    { "sceneId": "portada", "notes": "Abrí con la promesa." },
    {
      "sceneId": "problema",
      "fragments": [11.0, 15.0],
      "hotspots": [
        {
          "id": "h1",
          "label": "¿De dónde sale ese número?",
          "target": "market-detail",
          "region": { "x": 55, "y": 60, "w": 40, "h": 20 }
        }
      ]
    }
  ],
  "slideSequences": [
    { "id": "market-detail", "label": "Metodología", "slides": [{ "sceneId": "mkt-math" }] }
  ]
}
</script>
~~~

- **`sceneId`** tiene que coincidir exacto con un `data-composition-id`
- **`fragments`** son tiempos absolutos del timeline, dentro del rango del slide
- **`hotspot.target`** tiene que apuntar a un `id` de `slideSequences`
- **`notes`** las ve el presentador; la audiencia nunca las ve
- **Las slides de rama** viven solo en `slideSequences`, nunca en el array `slides` principal