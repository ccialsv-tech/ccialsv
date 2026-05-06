# Juegos CCI AL

Generador de juegos grupales para CCI América Latina.

## Archivos

```text
juegos-ccial/
├── index.html      # Estructura principal
├── styles.css      # Estilos de la herramienta
├── app.js          # Lógica de generación local
├── logo-ccial.png  # Logo oficial CCI AL
└── README.md       # Este archivo
```

## Uso

La página está pensada para publicarse como una ruta estática:

```text
/juegos-ccial
```

Los recursos se cargan con rutas absolutas dentro de `/juegos-ccial/`, para que funcionen aunque el navegador abra la ruta sin barra final.

## Notas

- No requiere clave de API ni backend.
- La generación se hace en el navegador con plantillas locales.
- Funciona en móvil y desktop.
