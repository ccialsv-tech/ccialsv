# Juegos CCI AL

Generador de juegos grupales con IA para CCI América Latina.

## Archivos

```
juegos-ccial/
├── index.html      # Estructura principal
├── styles.css      # Estilos (identidad CCI AL)
├── app.js          # Lógica e integración con Claude API
├── logo-ccial.png  # Logo oficial CCI AL
└── README.md       # Este archivo
```

## Integración en tu sitio web

### Opción A — Página independiente
Sube los 4 archivos a tu servidor y accede a `index.html`.

### Opción B — Dentro de otra página (iframe)
```html
<iframe
  src="juegos-ccial/index.html"
  width="100%"
  height="800px"
  frameborder="0"
  style="border-radius: 16px;"
></iframe>
```

### Opción C — Incrustar como sección
Copia el contenido de `index.html` dentro de tu `<body>` existente,
e importa `styles.css` y `app.js` en tu página principal.

## Notas

- La app llama directamente a la API de Anthropic desde el navegador.
- El modelo utilizado es `claude-sonnet-4-20250514`.
- Requiere conexión a internet para funcionar.
- Responsive: funciona en móvil y desktop.
