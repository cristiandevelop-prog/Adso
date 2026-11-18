# Licencias y fuentes permitidas

Lee esto antes de convertir cualquier capítulo a PDF o de preparar un video con sus imágenes.

## Por qué importa

Casi todos los manhwas que se leen en Webtoon, Tapas, Lezhin, Tappytoon, Kakao o Naver tienen
derechos de autor, y los sitios de "scans" los publican sin permiso. Si se descargan y se usan en un
video, el usuario se expone a reclamaciones de copyright: en YouTube y TikTok eso suele terminar en
videos bloqueados, sin monetización o con avisos ("strikes") contra el canal. La skill está pensada
para que el canal crezca sin esos riesgos, así que solo trabaja con material que se puede usar.

## Fuentes que sí se aceptan

| Tipo | Qué comprobar | Qué anotar en `--license` |
|---|---|---|
| Obra propia | Que la dibujó el usuario o la encargó con derechos | `Obra propia` |
| Creative Commons | La licencia exacta en la página del autor. CC BY y CC BY-SA permiten uso comercial; las variantes **NC** no permiten monetizar; las **ND** no permiten editar (recortar viñetas o montar un video ya cuenta como obra derivada) | `CC BY 4.0`, `CC BY-SA 4.0`... |
| Dominio público | Autor fallecido hace el tiempo que marca la ley del país, o renuncia expresa (CC0) | `Dominio público` o `CC0` |
| Permiso del autor | Un mensaje o correo del autor que autorice el uso en video, idealmente por escrito y guardado | `Permiso del autor (fecha)` |

Si el usuario no sabe la licencia, ayúdale a averiguarla (página "about" del autor, pie del cómic,
ficha en la plataforma) antes de procesar nada.

## Qué no hace la skill

- Descargar capítulos de sitios de scans o lectores no oficiales.
- Saltarse el login, el pago o la protección contra copia de plataformas oficiales (Webtoon, Lezhin, etc.).
- Preparar videos con imágenes de obras protegidas sin permiso.

Si el usuario lo pide, explícale brevemente el motivo (el riesgo para su canal y para los autores) y ofrécele
lo que sí sirve:
- Pedir permiso al autor: muchos creadores independientes aceptan a cambio de crédito y enlace.
  Ofrece redactar el mensaje.
- Buscar obras parecidas con licencia libre.
- Hacer un video de reseña u opinión, con la portada oficial y enlaces a la plataforma legal, sin
  reproducir capítulos.

## Atribución en el video

Con CC BY / BY-SA, y en general por cortesía, el video y su descripción deben indicar:
título, autor, enlace a la obra, licencia (con enlace) y si se hicieron cambios ("viñetas recortadas
y narradas"). El script guarda estos datos en `manifest.json`; úsalos para generar el bloque de
créditos del guion.
