"""Fetch the curated, free Unsplash photographs and official Fontshare fonts."""

import concurrent.futures
import io
import json
from pathlib import Path
import re
import urllib.request

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent


def fetch(url):
    with urllib.request.urlopen(url, timeout=60) as response:
        return response.read()


def download_photo(item):
    if not item["download"].startswith("https://images.unsplash.com/photo-"):
        raise ValueError("Only curated free Unsplash downloads are permitted")
    target = ROOT / "public/images" / item["file"]
    target.parent.mkdir(parents=True, exist_ok=True)
    width = 2400 if item["file"].startswith("general/") else 1800
    if not target.exists():
        raw = fetch(item["download"] + f"?w={width}&fit=max&fm=jpg&q=90")
        image = ImageOps.exif_transpose(Image.open(io.BytesIO(raw))).convert("RGB")
        image.thumbnail((width, width * 2))
        image.save(target, "WEBP", quality=84, method=6)
    with Image.open(target) as image:
        return item["file"].removesuffix(".webp"), {
            "src": "/images/" + item["file"],
            "width": image.width,
            "height": image.height,
        }


def main():
    sources = json.loads((ROOT / "docs/image-sources.json").read_text(encoding="utf8"))
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        images = dict(pool.map(download_photo, sources))
    data_dir = ROOT / "src/data"
    data_dir.mkdir(parents=True, exist_ok=True)
    (data_dir / "images.json").write_text(json.dumps(images, indent=2) + "\n", encoding="utf8")
    fonts = ROOT / "public/fonts"
    fonts.mkdir(exist_ok=True)
    for family in ["clash-grotesk", "cabinet-grotesk"]:
        css = fetch(f"https://api.fontshare.com/v2/css?f[]={family}@400,500&display=swap").decode()
        urls = re.findall(r"url\('//([^']+\.woff2)'\)", css)
        for weight, url in zip([400, 500], urls, strict=True):
            (fonts / f"{family}-{weight}.woff2").write_bytes(fetch("https://" + url))
    print(f"Downloaded {len(images)} photographs and four font files")


if __name__ == "__main__":
    main()
