#!/usr/bin/env python3
"""Generate crawler/share-friendly language entry pages from index.html.

The app remains one codebase. Each generated page contains language-specific
static metadata for crawlers that do not execute JavaScript, while script.js
selects the same language from the /en/, /fa/, or /it/ path for real users.

SEO notes (2026-09):
  * Title/description/keywords, og:* and twitter:* are localized per language.
  * og:locale:alternate now lists the OTHER two locales (fixes the bug where
    fa/it pages declared their own locale twice).
  * JSON-LD Person/ProfessionalService descriptions are localized; the Person
    entity carries the full name "Bahareh Karbalaei" plus Persian alternates
    so name-based searches resolve to this site.
  * The static default of the about paragraph (data-i18n="about_p1") is
    localized too, so the full name is visible even without JavaScript.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://baharehwebdesign.github.io/"

# Must match the strings embedded in the template (index.html) JSON-LD block.
PERSON_DESC_TEMPLATE = "Freelance web developer, web designer in Isfahan, Iran, and coding educator. Fast, accessible websites and practical HTML/CSS courses."
SERVICE_DESC_TEMPLATE = "Web design and development services by Bahareh Karbalaei — custom, fast and responsive pages built from Isfahan, Iran, for clients worldwide."

LANGS = {
    "en": {
        "dir": "ltr",
        "locale": "en_US",
        "locale_alternates": ["fa_IR", "it_IT"],
        "title": "Bahareh Karbalaei — Web Developer &amp; Web Designer | Code with Bahareh",
        "description": "Bahareh Karbalaei — freelance web developer &amp; web designer in Isfahan, Iran. Custom web design, fast responsive websites, and free/premium HTML/CSS courses.",
        "keywords": "Bahareh Karbalaei, Bahareh web developer, web developer Bahareh, web designer Bahareh, Bahareh web design, web design, web designer, designing professional website, web developer in Isfahan, web design Isfahan, hire freelance developer, learn HTML CSS, free coding courses, buy website templates, web components, coding educator, Code with Bahareh",
        "person_description": PERSON_DESC_TEMPLATE,
        "service_description": SERVICE_DESC_TEMPLATE,
        "hero_sub": "Free &amp; Premium HTML/CSS Courses",
        "hero_slogan": "Practical lessons .Real projects .Clean code",
        "about_p1": "I'm <strong>Bahareh Karbalaei</strong> — a freelance web developer &amp; web designer in Isfahan, Iran, and a coding educator. What I do:",
    },
    "fa": {
        "dir": "rtl",
        "locale": "fa_IR",
        "locale_alternates": ["en_US", "it_IT"],
        "title": "بهاره کربلایی | طراحی صفحات وب — وب دولوپر در اصفهان",
        "description": "بهاره کربلایی — وب دولوپر و طراح صفحات وب در اصفهان؛ طراحی سایت و صفحه وب حرفه‌ای، سریع و واکنش‌گرا + دوره‌های رایگان و پرمیوم HTML/CSS.",
        "keywords": "بهاره کربلایی, بهاره کربلایی طراح سایت, بهاره وب دولوپر, وب دولوپر بهاره, طراحی صفحات وب, طراحی صفحه وب, طراحی صفحه وب در اصفهان, طراحی سایت در اصفهان, وب دیزاین, کدنویسی با بهاره, آموزش HTML و CSS, دوره رایگان کدنویسی, طراح وب فریلنس",
        "person_description": "بهاره کربلایی — وب دولوپر، طراح صفحات وب در اصفهان و مدرس کدنویسی؛ طراحی وب‌سایت سریع، واکنش‌گرا و دسترس‌پذیر.",
        "service_description": "خدمات طراحی و توسعه صفحات وب توسط بهاره کربلایی — طراحی صفحه وب سفارشی، سریع و واکنش‌گرا از اصفهان برای مشتریان سراسر دنیا.",
        "hero_sub": "از یادگیری تا ساخت پروژه",
        "hero_slogan": "آموزش کاربردی، تمرین واقعی، کد تمیز",
        "about_p1": "<strong>بهاره کربلایی</strong> هستم — وب دولوپر و طراح صفحات وب فریلنس ساکن اصفهان و مدرس کدنویسی. این‌ها کارهایی هست که انجام می‌دهم:",
    },
    "it": {
        "dir": "ltr",
        "locale": "it_IT",
        "locale_alternates": ["en_US", "fa_IR"],
        "title": "Bahareh Karbalaei — Sviluppatrice Web | Code with Bahareh",
        "description": "Bahareh Karbalaei — sviluppatrice web freelance e web designer a Isfahan (Iran): web design, siti web veloci e responsive, corsi HTML/CSS gratuiti e premium.",
        "keywords": "Bahareh Karbalaei, sviluppatrice web Bahareh, web designer Bahareh, sviluppatrice web, web designer, web design, realizzazione siti web, sviluppatrice web freelance, web developer Isfahan, web design Isfahan, corsi HTML CSS gratuiti, corsi coding premium, Code with Bahareh",
        "person_description": "Sviluppatrice web freelance, web designer a Isfahan (Iran) ed educatrice di programmazione. Siti veloci, accessibili e corsi HTML/CSS pratici.",
        "service_description": "Servizi di web design e sviluppo web di Bahareh Karbalaei — pagine su misura, veloci e responsive, da Isfahan (Iran) per clienti in tutto il mondo.",
        "hero_sub": "Corsi HTML/CSS gratuiti e premium",
        "hero_slogan": "Lezioni pratiche. Progetti reali. Codice pulito",
        "about_p1": "Sono <strong>Bahareh Karbalaei</strong> — sviluppatrice web freelance e web designer a Isfahan (Iran), ed educatrice di programmazione. Cosa faccio:",
    },
}


def replace_meta(source: str, selector: str, value: str) -> str:
    pattern = rf'(<meta\s+{selector}\s+content=")[^"]*(">)'
    updated, count = re.subn(pattern, lambda m: m.group(1) + value + m.group(2), source, count=1)
    if count != 1:
        raise RuntimeError(f"Could not update meta tag: {selector}")
    return updated


def build(lang: str, data: dict, template: str) -> None:
    page = template
    page = re.sub(r'<html\s+lang="[^"]+"\s+dir="[^"]+"', f'<html lang="{lang}" dir="{data["dir"]}"', page, count=1)
    page = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', page, count=1, flags=re.S)
    page = replace_meta(page, r'name="description"', data["description"])
    page = replace_meta(page, r'name="keywords"', data["keywords"])
    page = replace_meta(page, r'property="og:title"', data["title"])
    page = replace_meta(page, r'property="og:description"', data["description"])
    page = replace_meta(page, r'property="og:url"', ORIGIN + lang + "/")
    page = replace_meta(page, r'property="og:locale"', data["locale"])
    page = replace_meta(page, r'name="twitter:title"', data["title"])
    page = replace_meta(page, r'name="twitter:description"', data["description"])
    page = re.sub(r'(<link\s+rel="canonical"\s+href=")[^"]+("\s*/?>)', rf'\g<1>{ORIGIN}{lang}/\2', page, count=1)

    # og:locale:alternate must list the OTHER locales (not the page's own).
    alternates = iter(data["locale_alternates"])
    page = re.sub(
        r'property="og:locale:alternate" content="[^"]*"',
        lambda m: f'property="og:locale:alternate" content="{next(alternates)}"',
        page,
    )

    # Localize the JSON-LD Person / ProfessionalService descriptions.
    page = page.replace(PERSON_DESC_TEMPLATE, data["person_description"])
    page = page.replace(SERVICE_DESC_TEMPLATE, data["service_description"])

    # Avoid a flash of outdated copy before script.js localizes the page, and
    # keep the text crawlable when JavaScript does not run.
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
    page = re.sub(
        r'(<p data-i18n="about_p1">).*?(</p>)',
        lambda m: m.group(1) + data["about_p1"] + m.group(2),
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
    if PERSON_DESC_TEMPLATE not in template or SERVICE_DESC_TEMPLATE not in template:
        raise RuntimeError("Template JSON-LD marker descriptions not found in index.html")
    for language, metadata in LANGS.items():
        build(language, metadata, template)


if __name__ == "__main__":
    main()
