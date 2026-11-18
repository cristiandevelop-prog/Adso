# Guion de resumen narrado

Formato para convertir un capítulo procesado (PDF + `paneles/` + `manifest.json`) en un guion de
video tipo recap narrado, en español.

## Cómo sacar la historia

1. Abre los paneles en orden (`manifest.json` → `paneles`) y míralos uno a uno con la herramienta de
   lectura de imágenes. Transcribe los globos de diálogo y anota qué pasa en cada viñeta.
2. Agrupa viñetas consecutivas en **escenas** (mismo lugar o momento).
3. Identifica personajes, conflicto principal y el gancho final del capítulo.

Si un texto no se lee bien, márcalo como `[ilegible]` en vez de inventarlo.

## Estructura del guion

Escribe `guion.md` con este formato:

```markdown
# <Título> — Capítulo <N> (resumen narrado)

**Duración estimada:** <min> min · **Palabras de narración:** <n>

## Gancho (0:00–0:15)
Narración: <una o dos frases que enganchen sin destripar el final>
Paneles: panel_001

## Escena 1 — <nombre corto>
Narración: <texto que leerá el narrador, en presente, frases cortas>
Diálogos destacados: "<cita breve>" — <personaje>
Paneles: panel_002, panel_003 (≈ <s> s cada uno)
Nota de edición: <zoom lento, paneo vertical, efecto de sonido...>

## Escena 2 — ...

## Cierre
Narración: <resumen del giro final + pregunta al público>
Paneles: panel_0NN

## Créditos (pantalla final y descripción)
<Título> por <autor> · <fuente> · Licencia: <licencia> · Cambios: viñetas recortadas y narradas
```

## Ritmo

- Unas 150 palabras de narración por minuto en español.
- Cada panel en pantalla entre 3 y 6 s; las tiras altas se muestran con paneo vertical.
- Narración en tercera persona y en presente, con frases cortas. No leas todos los diálogos:
  resume y cita solo los más fuertes.

## Lista de tomas (opcional)

Si el usuario la pide, añade `tomas.csv` con columnas
`orden,panel,inicio_s,fin_s,texto_narracion,efecto` para importarla en el editor de video.
