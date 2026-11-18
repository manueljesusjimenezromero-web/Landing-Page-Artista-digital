## Estructura del directorio
 
```
/
├── index.html
├── css.css
├── README.md
└── assets/
    ├── audio/
    │   └── audio.mp3
    ├── img/
    │   ├── concert1.webp
    │   ├── concert2.webp
    │   ├── concert3.webp
    │   ├── contacto_neon.gif
    │   ├── estrellado.webp
    │   └── Logo.svg
    └── video/
        └── video.mp4
```
 
---
 
##  Tabla de Recursos y Licencias
 
| Archivo | URL de descarga original | Autor / Fuente | Tipo de licencia |
|---|---|---|---|
| estrellado.webp | https://pixabay.com/es/photosestrellas-cielo-noche-1837306/ | PixaBay | Dominio Publico |
| Logo.svg | Lo cree yo | --- | Dominio Publico |
| concert1.webp | https://pixabay.com/es/photos/espacio-universo-cielo-nocturno-11099/ | Pixabay | Dominio publico |
| concert2.webp | https://pixabay.com/es/illustrations/fondo-de-galaxia-imagen-de-estrella-9060733/ | Pixabay | Dominio publico |
| concert3.webp | https://pixabay.com/es/illustrations/digital-generado-nebulosa-espacio-8287812/ | Pixabay | Dominio publico |
| contacto_neon.gif | lo cree yo | --- | Dominio Publico |
| video.mp4 | https://pixabay.com/es/videos/nebulosa-espacio-universo-210884/ | Pixabay | Dominio publico |
 
---
 
##  Justificación Técnica de Formatos
 
### Imágenes: `.webp` frente a `.jpg` / `.png`
 
- Elegí `.webp` porque, con una calidad visual equivalente, los archivos pesan menos que un `.jpg` y bastante menos que un `.png`, lo que reduce el tiempo de carga de la web.
### Vídeo: `.mp4` frente a `.avi` / `.mov`
 
- Elegí `.mp4` con códec H.264 porque tiene la mayor compatibilidad.
### Audio: `.mp3` frente a `.wav`
 
- Elegí `.mp3` porque su compresión con pérdida reduce el archivo a una décima parte del tamaño de un `.wav` sin comprimir, con una calidad suficiente para escucharlo en web.

### Logo: `.svg` frente a `.png` / `.jpg`

- Elegí `.svg` para el logo porque es un formato vectorial: se escala a cualquier tamaño sin perder nitidez ni calidad, y el archivo pesa muy poco al estar definido por código y no por píxeles.

### Animación: `.gif` frente a vídeo / `.webp` animado

- Elegí `.gif` para el botón de contacto porque se reproduce automáticamente en bucle dentro de una etiqueta `<img>`, sin necesidad de controles ni de JavaScript.
---
 
##  Herramientas Utilizadas
 
| Herramienta | Proceso realizado | Tipo de archivo afectado |
|---|---|---|
| Pinta | Redimensionado / recorte / exportación a .webp | Imágenes |
| Canva | Edicion de logo | imagenes |
| Gimp | edicion del gif | gif |
| online video converter | conversion de video | videos |
| online audio converter | conversion de audio | audios |
| Online MP3 Cutter | recortar audio | audios |
 

---

##  Licencia de la Obra

Esta web se publica bajo **CC BY 4.0**: se puede copiar, modificar y usar
comercialmente citando la autoría. Está declarada en el `<footer>` y las atribuciones
de cada recurso en `credits.html`.

### Compatibilidad de licencias

Los recursos de terceros son de Pixabay, cuya licencia equivale a dominio público: no
es *copyleft*, así que no impone condiciones a la obra derivada y puedo elegir
libremente la mía. El logo y el gif son propios. Bootstrap es MIT, licencia permisiva y
compatible, y además se carga desde CDN sin redistribuir su código.

### Escenario hipotético: ¿y si un recurso fuera CC BY-SA?

La cláusula **SA** (*ShareAlike*) es *copyleft*: obliga a publicar la obra derivada con
la misma licencia. Si `concert2.webp` fuera CC BY-SA 4.0:

1. Mi web tendría que ser CC BY-SA 4.0, no CC BY.
2. No podría añadir restricciones (quedan fuera las variantes NC y ND).
3. Tendría que citar autor, título y licencia, e indicar que lo he modificado.
4. Quien reutilizara mi web heredaría la misma obligación.

Para evitarlo, o se enlaza el recurso en lugar de incrustarlo (la mera agregación no
crea obra derivada) o se sustituye por uno de dominio público, que es lo que he hecho.

---

##  Verificación Cross-Browser y Multi-Dispositivo

### Responsive

| Punto de ruptura | Cambios |
|---|---|
| Hasta 900px | Galería a 2 columnas |
| Hasta 600px | Cabecera apilada, galería a 1 columna, menú con 44px de alto, botones del audio en columna |

`--alto-cabecera` se redefine en la media query de 600px porque la cabecera apilada
crece y el `padding-top` del `body` depende de ella.

### Objetivos táctiles (mínimo 44x44 px)

Cumplen el mínimo el logo (86px), el menú en móvil, el botón de contacto (60px), el del
reel (`btn-lg`, 48px), los del audio y las miniaturas. La única excepción es el
`btn-close` del modal, de 32px, que es el componente de Bootstrap; el modal también se
cierra con clic fuera y con Escape, así que la acción sigue siendo accesible.

Para comprobarlo se pega esto en la consola (F12) y avisa de los que no llegan:

```js
document.querySelectorAll('a, button').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width < 44 || r.height < 44) {
        console.warn(Math.round(r.width) + 'x' + Math.round(r.height), el);
    }
});
```

### Tabla de pruebas

Probado en cada navegador y repetido con F12 en modo dispositivo (375px y 768px).
PENDIENTE DE COMPLETAR:

| Funcionalidad | Chrome | Firefox | Edge |
|---|---|---|---|
| Logo cambia de color en hover y foco | | | |
| Galería: la miniatura cambia la imagen con fundido | | | |
| Modal: abre y el vídeo arranca solo | | | |
| Modal: el vídeo se pausa al cerrar (botón, fuera, Escape) | | | |
| Audio: reproduce, pausa y silencia | | | |
| Responsive 375px y 768px | | | |
| Objetivos táctiles de 44x44 px | | | |
| Consola sin errores | | | |

### Compatibilidad

Todas las técnicas usadas (SVG inline estilado con CSS, `aspect-ratio`,
`:focus-visible`, `gap` en Flexbox, `prefers-reduced-motion`, la API HTMLMediaElement y
Bootstrap 5.3) están soportadas en las versiones actuales de los tres navegadores. El
autoplay requiere interacción del usuario en todos, y aquí siempre parte de un clic.
Edge y Chrome comparten el motor Blink, así que las pruebas en Firefox (Gecko) son las
que de verdad aportan información.
