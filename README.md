# Radiadores Campanella – Landing Page

## Estructura del proyecto

```
radiadores-campanella/
├── index.html          ← Página principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← WhatsApp popup + animaciones + navbar
└── recursos/
    ├── logo.png        ← Logo RC sin fondo (PNG transparente)
    ├── hero-bg.jpg     ← Foto de fondo del hero (sección inicio)
    └── taller.jpg      ← Foto de la sección "Nosotros"
```

## Cambios rápidos frecuentes

### Cambiar número de WhatsApp
Buscar `543515731625` en index.html y reemplazar por el nuevo número.
Formato: código de país (54) + número sin 0 ni 15.

### Cambiar horarios
En index.html, buscar `horario-row` y editar el texto de las etiquetas `.day` y `.time`.

### Cambiar foto del hero
Reemplazar el archivo `recursos/hero-bg.jpg` con la nueva imagen.
También se puede cambiar la opacidad en styles.css buscando `.hero-photo { opacity: ... }`.

### Cambiar foto de Nosotros
Reemplazar `recursos/taller.jpg`.

### Agregar un servicio
En index.html, dentro de `.services-grid`, copiar un bloque `<article class="service-card">` 
y modificar el emoji, título y descripción.

### Cambiar colores
En styles.css, al principio del archivo en `:root { }` están todas las variables de color.

## Requisitos
- No requiere servidor ni instalación.
- Abrir index.html directamente en el navegador funciona en desarrollo.
- Para producción: subir todos los archivos tal como están a cualquier hosting.
- Fuentes cargadas desde Google Fonts (requiere internet).

## Paleta de colores
| Variable        | Valor     | Uso                  |
|----------------|-----------|----------------------|
| --orange        | #F26A1B   | Color principal       |
| --orange-light  | #FF8533   | Hover de botones      |
| --black         | #0A0A0A   | Fondo general         |
| --dark          | #111111   | Fondo secciones alt.  |
| --dark2         | #1A1A1A   | Tarjetas              |
| --white         | #F5F5F5   | Texto principal       |
