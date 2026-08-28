#!/usr/bin/env python3
"""Generate crawler/share-friendly language entry pages from index.html.

The app remains one codebase. Each generated page contains language-specific
static metadata for crawlers that do not execute JavaScript, while script.js
selects the same language from the /en/, /fa/, or /it/ path for real users.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://baharehwebdesign.github.io/"

LANGS = {
    "en": {
        "dir": "ltr",
        "locale": "en_US",
        "title": "Code with Bahareh — Free & Premium HTML/CSS Courses",
        "description": "Practical lessons. Real projects. Clean code. Interactive HTML/CSS courses and ready-made components.",
        "hero_sub": "Free & Premium HTML/CSS Courses",
        "hero_slogan": "Practical lessons .Real projects .Clean code",
    },
    "fa": {
        "dir": "rtl",
        "locale": "fa_IR",
        "title": "کدنویسی با بهاره — دوره‌های رایگان و پرمیوم HTML/CSS",
        "description": "درس‌های کاربردی، پروژه‌های واقعی و کد تمیز؛ دوره‌های تعاملی HTML/CSS و کامپوننت‌های آماده.",
        "hero_sub": "از یادگیری تا ساخت پروژه",
        "hero_slogan": "آموزش کاربردی، تمرین واقعی، کد تمیز",
    },
    "it": {
        "dir": "ltr",
        "locale": "it_IT",
        "title": "Code with Bahareh — Corsi HTML/CSS gratuiti e premium",
        "description": "Lezioni pratiche, progetti reali e codice pulito; corsi HTML/CSS interattivi e componenti pronti.",
        "hero_sub": "Corsi HTML/CSS gratuiti e premium",
        "hero_slogan": "Lezioni pratiche. Progetti reali. Codice pulito",
    },
}


def replace_meta(source: str, selector: str, value: str) -> str:
    pattern = rf'(<meta\s+{selector}\s+content=")[^"]*(">)'
    updated, count = re.subn(pattern, lambda m: m.group(1) + value + m.group(2), source, count=1)
    if count != 1:
        raise RuntimeError(f"Could not update meta tag: {selector}")
    return updated


def build(lang: str, data: dict[str, str], template: str) -> None:
    page = template
    page = re.sub(r'<html\s+lang="[^"]+"\s+dir="[^"]+"', f'<html lang="{lang}" dir="{data["dir"]}"', page, count=1)
    page = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', page, count=1, flags=re.S)
    page = replace_meta(page, r'name="description"', data["description"])
    page = replace_meta(page, r'property="og:title"', data["title"])
    page = replace_meta(page, r'property="og:description"', data["description"])
    page = replace_meta(page, r'property="og:url"', ORIGIN + lang + "/")
    page = replace_meta(page, r'property="og:locale"', data["locale"])
    page = replace_meta(page, r'name="twitter:title"', data["title"])
    page = replace_meta(page, r'name="twitter:description"', data["description"])
    page = re.sub(r'(<link\s+rel="canonical"\s+href=")[^"]+("\s*/?>)', rf'\g<1>{ORIGIN}{lang}/\2', page, count=1)

    # Avoid a flash of outdated hero copy before script.js localizes the page.
    page = re.sub(
        r'(<p class="hero__sub" data-i18n="hero_sub">).*?(</p>)',
        lambda m: m.group(1) + data["hero_sub"] + m.group(2),
        page,
        count=1,
        flags=re.S,
    )
    page = re.sub(
        r'(<p class="hero__slogan" data-i18n="hero_slogan">).*?(</p>)',
        lambda m: m.group(1) + data["hero_slogan"] + m.group(2),
        page,
        count=1,
        flags=re.S,
    )

    # Generated pages live one directory deeper. Relative assets work both
    # on GitHub Pages and when the complete project is previewed in a local
    # subfolder such as http://127.0.0.1:5500/12-edit/.
    page = re.sub(r'href="/?styles\.min\.css([^"]*)"', r'href="../styles.min.css\1"', page)
    page = re.sub(r'href="/?styles\.css([^"]*)"', r'href="../styles.css\1"', page)
    page = re.sub(r'src="/?script\.min\.js([^"]*)"', r'src="../script.min.js\1"', page)
    page = re.sub(r'src="/?script\.js([^"]*)"', r'src="../script.js\1"', page)
    page = page.replace('src="./img/', 'src="../img/')
    page = page.replace('src="/img/', 'src="../img/')
    page = page.replace('href="sitemap.xml"', 'href="../sitemap.xml"')
    page = page.replace('href="/sitemap.xml"', 'href="../sitemap.xml"')
    page = page.replace('href="site.webmanifest"', 'href="../site.webmanifest"')
    page = page.replace('href="/site.webmanifest"', 'href="../site.webmanifest"')
    page = page.replace('href="img/', 'href="../img/')
    page = page.replace('href="/img/', 'href="../img/')

    destination = ROOT / lang / "index.html"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(page, encoding="utf-8")
    print(f"generated {destination.relative_to(ROOT)}")


def main() -> None:
    template = (ROOT / "index.html").read_text(encoding="utf-8")
    for language, metadata in LANGS.items():
        build(language, metadata, template)


if __name__ == "__main__":
    main()
