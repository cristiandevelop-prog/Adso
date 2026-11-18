---
name: manhwa-finder
description: Busca manhwas, webtoons y manhuas (sinopsis, autor, estado, capítulos, géneros, dónde leerlos legalmente y recomendaciones parecidas) y convierte capítulos de fuentes permitidas (obra propia, licencia Creative Commons o dominio público, o con permiso del autor) en PDF y viñetas recortadas, y saca la historia para escribir guiones de video narrado en español. Úsala siempre que el usuario hable de manhwas, webtoons, manhuas o cómics coreanos, pida recomendaciones o información de uno, quiera pasar un capítulo a PDF, recortar viñetas, o preparar un resumen, recap o guion de video de un cómic, aunque no diga "skill" ni "manhwa-finder".
---

# Manhwa Finder

Ayuda a un creador de videos a encontrar manhwas y a convertir capítulos que puede usar en material
listo para editar un **resumen narrado en español**: PDF del capítulo, viñetas sueltas y un guion.

Responde siempre en español salvo que el usuario pida otro idioma.

## 1. Buscar manhwas

Usa búsqueda web (WebSearch / WebFetch). Para cada título que devuelvas, prepara una ficha:

```markdown
### <Título en español / título original>
- **Autor(es):** guion / arte
- **Géneros:** ...
- **Estado:** en emisión / completo / en pausa · **Capítulos:** <n> (fecha del dato)
- **Sinopsis:** 2-3 frases, sin spoilers
- **Dónde leer legalmente:** plataformas oficiales con enlace (Webtoon, Tapas, Lezhin, Tappytoon...)
- **Licencia:** derechos reservados / CC <variante> / dominio público. Di si se puede usar en video
- **Parecidos:** 2-3 títulos
```

Cuántos capítulos lleva y en qué estado está cambian cada semana, así que contrástalo con la plataforma
oficial y pon la fecha del dato. Enlaza solo a plataformas oficiales o a la página del autor, nunca a
sitios de scans.

Si el usuario busca material **para usarlo en videos**, da prioridad a obras con licencia libre o a
autores independientes que aceptan colaboraciones, y marca claramente cuáles se pueden usar.

## 2. Comprobar que el material se puede usar

Antes de procesar un capítulo, lee `references/licencias.md` y confirma de dónde viene. Hay tres
casos que valen: obra propia, licencia CC o dominio público, o permiso del autor. Esto protege el
canal del usuario frente a reclamaciones de copyright y respeta a los autores.

No descargues capítulos de sitios de scans ni te saltes el login, el pago o la protección de las
plataformas oficiales. Si te lo piden, explica el motivo en una o dos frases y ofrece las
alternativas de `references/licencias.md` (pedir permiso al autor, obras parecidas con licencia libre
o un video de reseña).

Las imágenes con licencia libre que el usuario indique se pueden descargar a una carpeta con
`curl`/`wget`, solo desde la página del autor o del repositorio que publica la licencia.

## 3. Convertir el capítulo a PDF y viñetas

Pon las imágenes del capítulo en una carpeta y ejecuta el script incluido (solo necesita Pillow):

```bash
python <ruta-de-esta-skill>/scripts/build_chapter.py \
  --input <carpeta_imagenes> --out <carpeta_salida> \
  --title "<Título> - Cap <N>" --license "<licencia>" \
  --author "<autor>" --source "<url o 'archivos del usuario'>"
```

Hace lo siguiente:
- Ordena las imágenes por nombre (1, 2, 10 en orden numérico) y las une en una tira vertical.
- Corta la tira en páginas de PDF, eligiendo como punto de corte los espacios entre viñetas.
- Recorta cada viñeta en `paneles/panel_NNN.png`, el material para el editor de video.
- Escribe `manifest.json` con el orden, los tamaños y los datos de licencia y fuente.

Opciones útiles: `--width` (ancho en px, 800 por defecto), `--page-ratio` (proporción de página,
A4 por defecto) y `--no-panels`.

Mira un par de paneles después de ejecutarlo. Si una viñeta salió partida o dos salieron juntas
(pasa con fondos oscuros o viñetas sin espacio entre ellas), avísalo y propón usar las páginas del
PDF en su lugar o ajustar los cortes a mano.

## 4. Escribir el guion del video

Sigue `references/guion.md`: revisa los paneles en orden, transcribe los diálogos, agrupa las
viñetas en escenas y escribe `guion.md` (gancho, escenas con los paneles asignados, cierre y
créditos). Pon el `guion.md` en la misma carpeta de salida.

Los créditos (autor, enlace, licencia y cambios hechos) salen de `manifest.json` y van siempre al
final del guion, para la pantalla final y la descripción del video.

## Qué entregar

Al terminar, resume en pocas líneas:
- Ruta del PDF y número de páginas.
- Número de paneles y la carpeta donde están.
- Ruta de `guion.md` y su duración estimada.
- Avisos: viñetas mal cortadas, texto ilegible o una licencia que no permite monetizar (CC NC) o
  modificar (CC ND).
