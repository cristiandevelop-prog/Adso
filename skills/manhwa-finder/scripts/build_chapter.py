#!/usr/bin/env python3
"""Arma un capítulo de manhwa/webtoon a partir de imágenes locales.

Produce, dentro de --out:
  <titulo>.pdf      PDF del capítulo (las tiras largas se cortan en páginas)
  paneles/          viñetas recortadas una a una (para usar en el editor de video)
  manifest.json     orden de páginas y paneles, tamaños y datos de licencia

Solo trabaja con archivos que ya están en disco: no descarga nada de internet.

Uso:
  python build_chapter.py --input carpeta_imagenes --out salida \
      --title "Mi manhwa - Cap 1" --license "CC BY 4.0" \
      --author "Autora" --source "https://..."
"""
import argparse
import json
import re
import sys
from pathlib import Path

from PIL import Image

EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"}


def natural_key(p: Path):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", p.name)]


def load_images(folder: Path):
    files = sorted((p for p in folder.iterdir() if p.suffix.lower() in EXTS), key=natural_key)
    if not files:
        sys.exit(f"No hay imágenes en {folder}")
    imgs = []
    for f in files:
        im = Image.open(f)
        im.load()
        imgs.append((f.name, im.convert("RGB")))
    return imgs


def stitch(imgs, width):
    """Une todas las imágenes en una tira vertical con el mismo ancho."""
    scaled = []
    for _, im in imgs:
        if im.width != width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        scaled.append(im)
    strip = Image.new("RGB", (width, sum(i.height for i in scaled)), "white")
    y = 0
    for im in scaled:
        strip.paste(im, (0, y))
        y += im.height
    return strip


def gutter_rows(strip, tolerance=12, min_ratio=0.995):
    """Devuelve una lista de booleanos: True si la fila es 'vacía' (color casi uniforme)."""
    gray = strip.convert("L")
    w, h = gray.size
    px = gray.load()
    step = max(1, w // 200)  # muestreo para ir rápido
    rows = []
    for y in range(h):
        samples = [px[x, y] for x in range(0, w, step)]
        ref = samples[0]
        same = sum(1 for s in samples if abs(s - ref) <= tolerance)
        rows.append(same / len(samples) >= min_ratio)
    return rows


def find_panels(strip, min_gap=20, min_panel=80):
    """Corta la tira en viñetas usando los espacios vacíos horizontales entre ellas."""
    rows = gutter_rows(strip)
    panels, start, gap = [], None, 0
    for y, empty in enumerate(rows):
        if not empty:
            if start is None:
                start = y
            gap = 0
        elif start is not None:
            gap += 1
            if gap >= min_gap:
                end = y - gap + 1
                if end - start >= min_panel:
                    panels.append((start, end))
                start, gap = None, 0
    if start is not None and len(rows) - start >= min_panel:
        panels.append((start, len(rows)))
    return panels


def paginate(strip, panels, page_h):
    """Corta la tira en páginas de ~page_h px, prefiriendo cortar entre viñetas."""
    h = strip.height
    cuts = sorted({e for _, e in panels})
    pages, top = [], 0
    while top < h:
        limit = top + page_h
        if limit >= h:
            pages.append((top, h))
            break
        candidates = [c for c in cuts if top + page_h * 0.5 <= c <= limit]
        bottom = candidates[-1] if candidates else limit
        pages.append((top, bottom))
        top = bottom
    return pages


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--input", required=True, help="Carpeta con las imágenes del capítulo")
    ap.add_argument("--out", required=True, help="Carpeta de salida")
    ap.add_argument("--title", required=True)
    ap.add_argument("--license", required=True, help='p. ej. "CC BY 4.0", "Dominio público", "Obra propia", "Permiso del autor"')
    ap.add_argument("--author", default="")
    ap.add_argument("--source", default="", help="URL o descripción de dónde viene el material")
    ap.add_argument("--width", type=int, default=800, help="Ancho de la tira en px (por defecto 800)")
    ap.add_argument("--page-ratio", type=float, default=1.414, help="Alto/ancho de cada página del PDF (A4 = 1.414)")
    ap.add_argument("--no-panels", action="store_true", help="No recortar viñetas")
    args = ap.parse_args()

    src, out = Path(args.input), Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    imgs = load_images(src)
    strip = stitch(imgs, args.width)
    panels = [] if args.no_panels else find_panels(strip)
    pages = paginate(strip, panels, round(args.width * args.page_ratio))

    safe = re.sub(r"[^\w\- ]+", "", args.title).strip().replace(" ", "_") or "capitulo"
    pdf_path = out / f"{safe}.pdf"
    page_imgs = [strip.crop((0, t, args.width, b)) for t, b in pages]
    page_imgs[0].save(pdf_path, save_all=True, append_images=page_imgs[1:], resolution=96,
                      title=args.title, author=args.author)

    panel_entries = []
    if panels:
        pdir = out / "paneles"
        pdir.mkdir(exist_ok=True)
        for i, (t, b) in enumerate(panels, 1):
            name = f"panel_{i:03d}.png"
            strip.crop((0, t, args.width, b)).save(pdir / name)
            panel_entries.append({"n": i, "archivo": f"paneles/{name}", "y": [t, b], "alto": b - t})

    manifest = {
        "titulo": args.title,
        "autor": args.author,
        "licencia": args.license,
        "fuente": args.source,
        "imagenes_origen": [n for n, _ in imgs],
        "pdf": pdf_path.name,
        "paginas_pdf": len(pages),
        "ancho": args.width,
        "paneles": panel_entries,
    }
    (out / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"PDF: {pdf_path} ({len(pages)} páginas)")
    print(f"Paneles: {len(panel_entries)}")
    print(f"Manifest: {out / 'manifest.json'}")


if __name__ == "__main__":
    main()
