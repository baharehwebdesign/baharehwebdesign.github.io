#!/usr/bin/env python3
"""Generate the language entry pages (/en/, /fa/, /it/) from index.html.

WHAT CHANGED (2026-09-25) — the Persian-search fix
-------------------------------------------------
Before: /fa/ contained only ~5 Persian sentences in its HTML. Every other
string (nav, headings, about, FAQ, courses, videos, footer) was injected at
runtime by script.js -> applyLang() -> data-i18n. A crawler that does not run
JavaScript, or the first-pass HTML a search engine indexes, therefore saw an
*English* page under lang="fa". That is why a search for «بهاره کربلایی»
returned nothing while the Latin-script query worked.

Now: every language page is generated with its text already inside the HTML:

  1. all [data-i18n] / [data-i18n-placeholder] / [data-i18n-aria-label]
     elements are filled from APP_CONFIG.i18n (source: script.js),
  2. the FAQ list (#faqList) is written out statically,
  3. the video grid (#ytGrid) and the Persian course-video section
     (#courseVideoMount) are written out statically,
  4. the course catalog (#courseList) is written out statically,
  5. a localized bio block (.about__more[data-langblock="bio"]) is filled,
  6. the JSON-LD gets a localized WebPage + FAQPage node,
  7. title/description/keywords/og/twitter/canonical keep being localized.

The values used here are byte-identical to the ones script.js applies when it
localizes the page, so the running site looks exactly the same as before —
the text is simply already in the HTML when the crawler arrives.

Usage:
    python3 tools/generate_language_pages.py        (or: npm run build:languages)

Requires: node (already used by the project for terser/cleancss).
"""
from __future__ import annotations

import datetime
import html as html_mod
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://baharehwebdesign.github.io/"

# Every spelling people actually search for, declared once on the Person
# entity so search engines connect the Persian and the Latin forms.
PERSON_NAME = "Bahareh Karbalaei"
PERSON_ALTERNATE_NAMES = [
    "بهاره کربلایی",
    "بهاره کربلائی",
    "بهاره کربلایی اصفهان",
    "Bahare Karbalaei",
    "کدنویسی با بهاره",
    "Code with Bahareh",
    "Bahareh Web Design",
]

# ---------------------------------------------------------------------------
# per-language page metadata
# ---------------------------------------------------------------------------
LANGS = {
    "en": {
        "dir": "ltr",
        "locale": "en_US",
        "locale_alternates": ["fa_IR", "it_IT"],
        "title": "Bahareh Karbalaei — Web Developer &amp; Web Designer | Code with Bahareh",
        "description": "Bahareh Karbalaei (also written Bahare Karbalaei) — freelance web developer &amp; web designer in Isfahan, Iran. Custom web design, fast responsive websites, and free/premium HTML/CSS courses.",
        "keywords": "Bahareh Karbalaei, Bahare Karbalaei, Bahareh web developer, web developer Bahareh, web designer Bahareh, Bahareh web design, web design, web designer, designing professional website, web developer in Isfahan, web design Isfahan, hire freelance developer, learn HTML CSS, free coding courses, buy website templates, web components, coding educator, Code with Bahareh",
        "full_name": "Karbalaei",
        "person_description": "Freelance web developer, web designer in Isfahan, Iran, and coding educator. Fast, accessible websites and practical HTML/CSS courses.",
        "service_description": "Web design and development services by Bahareh Karbalaei — custom, fast and responsive pages built from Isfahan, Iran, for clients worldwide.",
        "bio": [
            "<strong>Bahareh Karbalaei</strong> (also written <em>Bahare Karbalaei</em>; in Persian: <strong>بهاره کربلایی</strong>) is a freelance web developer and web designer based in Isfahan, Iran, and the creator of <a href=\"#courses\">Code with Bahareh</a> — a course platform teaching HTML, CSS and JavaScript from scratch. She builds fast, accessible, responsive websites for founders, freelancers and small businesses, and publishes the same practical method she uses in client work as free lessons.",
            "The free track walks through HTML structure, text, lists, links, images and JavaScript from zero, with every session ending in an editable code exercise and a quiz. The premium sessions go deeper: semantic HTML and accessibility, SEO metadata and structured data, responsive layout with Flexbox and Grid, and CSS animation — including personal code review on your own build.",
            "Courses, videos and community: the tutorials are published on the Code with Bahareh YouTube channel (12K+ subscribers, 80+ videos) and shared on Instagram and Telegram. Bahareh Karbalaei takes on a limited number of freelance builds each quarter — landing pages, portfolios and small business sites; send a short brief through the <a href=\"#contact\">contact form</a> and you get a fixed price within 48 hours.",
        ],
    },
    "fa": {
        "dir": "rtl",
        "locale": "fa_IR",
        "locale_alternates": ["en_US", "it_IT"],
        "title": "بهاره کربلایی (Bahareh Karbalaei) — طراح سایت و وب دولوپر در اصفهان",
        "description": "بهاره کربلایی (به لاتین Bahareh Karbalaei و Bahare Karbalaei) — وب دولوپر و طراح صفحات وب در اصفهان؛ طراحی سایت سریع و واکنش‌گرا + دوره‌های رایگان و پرمیوم HTML/CSS.",
        "keywords": "بهاره کربلایی, بهاره کربلائی, بهاره کربلایی طراح سایت, بهاره کربلایی اصفهان, بهاره کربلایی وب دولوپر, طراح سایت اصفهان, طراحی صفحات وب, طراحی صفحه وب, طراحی سایت در اصفهان, وب دیزاین, کدنویسی با بهاره, آموزش HTML و CSS, دوره رایگان کدنویسی, طراح وب فریلنس, Bahareh Karbalaei",
        "full_name": "کربلایی",
        "person_description": "بهاره کربلایی — وب دولوپر، طراح صفحات وب در اصفهان و مدرس کدنویسی؛ طراحی وب‌سایت سریع، واکنش‌گرا و دسترس‌پذیر.",
        "service_description": "خدمات طراحی و توسعه صفحات وب توسط بهاره کربلایی — طراحی صفحه وب سفارشی، سریع و واکنش‌گرا از اصفهان برای مشتریان سراسر دنیا.",
        "bio": [
            "<strong>بهاره کربلایی</strong> (نام لاتین: <em>Bahareh Karbalaei</em>، که گاهی <em>Bahare Karbalaei</em> هم نوشته می‌شود) وب‌دولوپر و طراح صفحات وب فریلنس اهل اصفهان است و پروژه‌های «کدنویسی با بهاره» (Code with Bahareh) را اداره می‌کند. کار او ساخت صفحه‌های وب سریع، واکنش‌گرا و دسترس‌پذیر برای فریلنسرها، کسب‌وکارهای کوچک و صاحبان ایده است؛ همان روشی که در پروژه‌های واقعی به کار می‌برد، در <a href=\"#courses\">دوره‌های سایت</a> هم آموزش می‌دهد.",
            "مسیر رایگان دوره‌ها از ساختار HTML و تگ‌های معنایی شروع می‌شود و با متن، فهرست‌ها، لینک‌ها، تصویرها و جاوااسکریپت مقدماتی ادامه پیدا می‌کند؛ پایان هر جلسه یک تمرین کد قابل ویرایش و یک آزمون دارد. جلسه‌های پرمیوم کمی جلوتر می‌روند: HTML معنایی و دسترس‌پذیری، سئو و متادیتا، چیدمان ریسپانسیو با Flexbox و Grid و انیمیشن CSS — همراه با بازبینی شخصی کد شما.",
            "آموزش‌ها در کانال یوتیوب «کدنویسی با بهاره» (بیش از ۱۲ هزار مشترک و ۸۰ ویدیو) منتشر می‌شوند و در اینستاگرام و تلگرام هم در دسترس‌اند. بهاره کربلایی هر فصل تعداد محدودی پروژه‌ی فریلنس می‌پذیرد؛ لندینگ‌پیج، نمونه‌کار و سایت کسب‌وکار کوچک. برای سفارش، از <a href=\"#contact\">فرم تماس</a> توضیح کوتاهی بفرستید تا ظرف ۴۸ ساعت قیمت مقطوع بگیرید.",
        ],
    },
    "it": {
        "dir": "ltr",
        "locale": "it_IT",
        "locale_alternates": ["en_US", "fa_IR"],
        "title": "Bahareh Karbalaei — Sviluppatrice Web | Code with Bahareh",
        "description": "Bahareh Karbalaei — sviluppatrice web freelance e web designer a Isfahan (Iran): web design, siti web veloci e responsive, corsi HTML/CSS gratuiti e premium.",
        "keywords": "Bahareh Karbalaei, sviluppatrice web Bahareh, web designer Bahareh, sviluppatrice web, web designer, web design, realizzazione siti web, sviluppatrice web freelance, web developer Isfahan, web design Isfahan, corsi HTML CSS gratuiti, corsi coding premium, Code with Bahareh",
        "full_name": "Karbalaei",
        "person_description": "Sviluppatrice web freelance, web designer a Isfahan (Iran) ed educatrice di programmazione. Siti veloci, accessibili e corsi HTML/CSS pratici.",
        "service_description": "Servizi di web design e sviluppo web di Bahareh Karbalaei — pagine su misura, veloci e responsive, da Isfahan (Iran) per clienti in tutto il mondo.",
        "bio": [
            "<strong>Bahareh Karbalaei</strong> è una sviluppatrice web freelance e web designer con base a Isfahan (Iran), ideatrice di <a href=\"#courses\">Code with Bahareh</a>, una piattaforma di corsi che insegna HTML, CSS e JavaScript da zero. Realizza siti veloci, accessibili e responsive per founder, freelance e piccole imprese, e pubblica lo stesso metodo dei progetti reali come lezioni gratuite.",
            "Il percorso gratuito parte dalla struttura HTML e dai tag semantici, poi testo, liste, link, immagini e JavaScript di base: ogni sessione si chiude con un esercizio di codice modificabile e un quiz. Le sessioni premium approfondiscono HTML semantico e accessibilità, SEO e metadati, layout responsive con Flexbox e Grid e animazioni CSS, con revisione personale del tuo codice.",
            "I tutorial sono pubblicati sul canale YouTube Code with Bahareh (oltre 12.000 iscritti e più di 80 video) e condivisi su Instagram e Telegram. Bahareh Karbalaei accetta un numero limitato di progetti freelance ogni trimestre — landing page, portfolio e siti per piccole imprese; invia un brief dal <a href=\"#contact\">modulo di contatto</a>: ricevi un prezzo fisso entro 48 ore.",
        ],
    },
}

# ---------------------------------------------------------------------------
# tiny HTML helpers (stdlib only)
# ---------------------------------------------------------------------------
VOID_ELEMENTS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "param", "source", "track", "wbr",
}

TOKEN_RE = re.compile(
    r"<!--.*?-->"
    r"|<([a-zA-Z][\w:-]*)((?:\"[^\"]*\"|'[^']*'|[^>\"'])*?)(/?)>"
    r"|</([a-zA-Z][\w:-]*)\s*>",
    re.S,
)


class MarkupError(RuntimeError):
    pass


def _element_bounds(page: str, open_start: int) -> tuple[int, int, int, int]:
    """Return (tag_start, inner_start, inner_end, tag_end) of the element."""
    m = TOKEN_RE.match(page, open_start)
    if not m or m.group(0).startswith("<!--"):
        raise MarkupError(f"no element starts at offset {open_start}")
    name = (m.group(1) or "").lower()
    if m.group(3) == "/" or name in VOID_ELEMENTS:
        return m.start(), m.end(), m.end(), m.end()

    depth = 1
    pos = m.end()
    while True:
        t = TOKEN_RE.search(page, pos)
        if not t:
            raise MarkupError(f"unclosed <{name}> starting at offset {open_start}")
        if t.group(0).startswith("<!--"):
            pos = t.end()
            continue
        if t.group(1) and t.group(1).lower() == name and t.group(3) != "/":
            depth += 1
        elif t.group(4) and t.group(4).lower() == name:
            depth -= 1
            if depth == 0:
                return m.start(), m.end(), t.start(), t.end()
        pos = t.end()


def replace_inner(page: str, element_id: str, new_inner: str) -> str:
    """Replace the inner HTML of the first element carrying id="element_id"."""
    opener = re.search(
        r'<[a-zA-Z][\w:-]*(?:"[^"]*"|\'[^\']*\'|[^>"\'])*?\bid="%s"' % re.escape(element_id),
        page,
    )
    if not opener:
        raise MarkupError(f'element with id="{element_id}" not found')
    if opener.group(0).startswith("</"):
        raise MarkupError(f'element with id="{element_id}" not found')
    start, inner_start, inner_end, _ = _element_bounds(page, opener.start())
    return page[:inner_start] + new_inner + page[inner_end:]


def replace_inner_by_marker(page: str, marker_regex: str, new_inner: str) -> str:
    """Replace the inner HTML of the first element matching an opening-tag regex."""
    marker = re.search(marker_regex, page)
    if not marker:
        raise MarkupError(f"marker not found: {marker_regex}")
    _, inner_start, inner_end, _ = _element_bounds(page, marker.start())
    return page[:inner_start] + new_inner + page[inner_end:]


def set_attribute(tag_source: str, attr: str, value: str) -> str:
    """Set/replace an attribute inside a single tag's source text."""
    value = html_mod.escape(value, quote=True)
    pattern = re.compile(r"(\s%s=\")[^\"]*(\")" % re.escape(attr))
    if pattern.search(tag_source):
        return pattern.sub(lambda m: m.group(1) + value + m.group(2), tag_source, count=1)
    return re.sub(
        r"\s*(/?)>\s*$",
        lambda m: f' {attr}="{value}"{m.group(1)}>',
        tag_source,
        count=1,
    )


def strip_tags(text: str) -> str:
    return html_mod.unescape(re.sub(r"<[^>]+>", " ", text or "")).strip()


# ---------------------------------------------------------------------------
# data
# ---------------------------------------------------------------------------
def load_app_config() -> dict:
    """Run tools/extract_app_config.js and return APP_CONFIG as a dict."""
    script = ROOT / "tools" / "extract_app_config.js"
    try:
        out = subprocess.run(
            ["node", str(script), str(ROOT / "script.js")],
            check=True, capture_output=True, text=True,
        )
    except FileNotFoundError:
        raise SystemExit("node is required (the project already uses it for terser/cleancss)")
    except subprocess.CalledProcessError as exc:
        raise SystemExit("extract_app_config.js failed:\n" + exc.stderr.strip())
    return json.loads(out.stdout)


def L(value: dict | str | None, lang: str) -> str:
    """Localized value with English fallback — same rule as script.js L()."""
    if isinstance(value, dict):
        return value.get(lang) or value.get("en") or ""
    return value or ""


# ---------------------------------------------------------------------------
# baking steps
# ---------------------------------------------------------------------------
def bake_i18n(page: str, i18n: dict, lang: str) -> tuple[str, int]:
    """Fill every data-i18n* element with its localized text."""
    edits: list[tuple[int, int, str]] = []
    baked = missing = 0

    for token in TOKEN_RE.finditer(page):
        if not token.group(1):          # comment or closing tag
            continue
        attrs = token.group(2)
        if "data-i18n" not in attrs:
            continue

        key_match = re.search(r'data-i18n="([^"]+)"', attrs)
        if key_match:
            key = key_match.group(1)
            if key in i18n:
                _, inner_start, inner_end, _ = _element_bounds(page, token.start())
                if inner_start != inner_end:
                    edits.append((inner_start, inner_end, i18n[key]))
                    baked += 1
            else:
                missing += 1
        tag_source = page[token.start():token.end()]
        new_tag = tag_source
        for attr_name, data_attr in (
            ("placeholder", "data-i18n-placeholder"),
            ("aria-label", "data-i18n-aria-label"),
        ):
            m = re.search(r'%s="([^"]+)"' % data_attr, attrs)
            if not m:
                continue
            if m.group(1) in i18n:
                new_tag = set_attribute(new_tag, attr_name, i18n[m.group(1)])
                baked += 1
            else:
                missing += 1
        if new_tag != tag_source:
            edits.append((token.start(), token.end(), new_tag))

    for start, end, replacement in sorted(edits, key=lambda e: e[0], reverse=True):
        page = page[:start] + replacement + page[end:]
    if missing:
        print(f"  ! {lang}: {missing} data-i18n key(s) had no translation and were left as-is")
    return page, baked


def bake_bio(page: str, lang: str) -> str:
    """Fill the localized author bio (.about__more) with real prose paragraphs."""
    paragraphs = "\n        ".join(f"<p>{text}</p>" for text in LANGS[lang]["bio"])
    return replace_inner_by_marker(
        page,
        r'<div class="about__more" data-langblock="bio">',
        "\n        " + paragraphs + "\n      ",
    )


def bake_faq(page: str, faq: list, lang: str, i18n: dict) -> str:
    """Write the FAQ list out statically (same markup as renderFaq())."""
    items = []
    for i, item in enumerate(faq):
        items.append(
            '<article class="faq__item">'
            f'<button class="faq__q" type="button" aria-expanded="false" aria-controls="faqA{i}">'
            f'<span>{L(item["q"], lang)}</span>'
            '<svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            'stroke-width="2.6" stroke-linecap="round" aria-hidden="true">'
            '<path d="M12 5v14M5 12h14"/></svg>'
            "</button>"
            f'<div class="faq__a" id="faqA{i}"><div><p>{L(item["a"], lang)}</p></div></div>'
            "</article>"
        )
    return replace_inner(page, "faqList", "\n      " + "\n      ".join(items) + "\n    ")


def bake_videos(page: str, videos: list, lang: str) -> str:
    """Write the featured-video grid out statically (same markup as renderVideos())."""
    cards = []
    for video in videos:
        title = L(video["title"], lang)
        alt = title.replace("&", "&amp;").replace('"', "&quot;")
        cards.append(
            f'<a class="yt__card reveal" href="{video["url"]}" target="_blank" rel="noopener" '
            f'aria-label="{alt} — YouTube">'
            f'<div class="yt__thumb yt__thumb--{video["thumb"]}">'
            f'<img class="yt__image" src="../img/{video["thumbFile"]}" width="480" height="360" '
            'loading="lazy" decoding="async" fetchpriority="low" alt="" onerror="this.remove()">'
            '<span class="yt__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">'
            '<path d="M8 5v14l11-7z"/></svg></span>'
            f'<span class="yt__dur">{video["dur"]}</span></div>'
            f'<div class="yt__body"><h3 class="yt__title">{title}</h3>'
            f'<p class="yt__meta">{L(video["meta"], lang)}</p></div></a>'
        )
    return replace_inner(page, "ytGrid", "\n        " + "\n        ".join(cards) + "\n      ")


def bake_course_videos(page: str, lang: str, i18n: dict) -> str:
    """The Persian-only YouTube course section is injected by script.js today;
    write it into the HTML so the crawler sees it too (Persian page only)."""
    if lang != "fa":
        return replace_inner(page, "courseVideoMount", "")
    section = (
        '<section class="course-videos reveal" id="courseVideos" '
        'aria-labelledby="courseVideosTitle">'
        '<header class="course-videos__head">'
        f'<span class="course-videos__eyebrow" data-i18n="course_videos_eyebrow">{i18n.get("course_videos_eyebrow", "")}</span>'
        f'<h3 class="course-videos__title" id="courseVideosTitle" data-i18n="course_videos_title">{i18n.get("course_videos_title", "")}</h3>'
        f'<p class="course-videos__lead" data-i18n="course_videos_lead">{i18n.get("course_videos_lead", "")}</p>'
        "</header>"
        '<div class="yt__grid course-videos__grid" id="ytGrid"></div>'
        "</section>"
    )
    return replace_inner(page, "courseVideoMount", section)


def bake_courses(page: str, courses: list, lang: str, i18n: dict) -> str:
    """Write a static, semantic catalog of every course/component.

    script.js re-renders #courseList with the interactive cards (code editors,
    quizzes, actions) as soon as the section is near the viewport, so visitors
    keep the full experience. Without JavaScript — or for a crawler that only
    reads the HTML — the catalog below is what the page shows.
    """
    cards = []
    for c in courses:
        chips = []
        chips.append(
            '<span class="chip chip--topic">%s</span>'
            % html_mod.escape(
                i18n.get("chip_comp", "Components") if c["topic"] == "comp" else c["topic"].upper()
            )
        )
        if c.get("price"):
            chips.append(
                '<span class="chip chip--premium">%s · $%s</span>'
                % (html_mod.escape(i18n.get("premium", "Premium")), c["price"])
            )
        else:
            chips.append('<span class="chip chip--free">%s</span>' % html_mod.escape(i18n.get("free", "Free")))
        if c.get("kind") == "course" and c.get("sess"):
            chips.append('<span class="chip">%s</span>' % html_mod.escape(L(c["sess"], lang)))

        body = ""
        if c.get("kind") == "component" and c.get("features"):
            body = '<ul class="comp__features">' + "".join(
                "<li><span>%s</span></li>" % L(f, lang) for f in c["features"]
            ) + "</ul>"

        cards.append(
            '<article class="course%s" id="%s">'
            '<header class="course__head">'
            '<div class="course__meta">%s</div>'
            '<h3 class="course__title">%s</h3>'
            '<p class="course__sub">%s</p>'
            "</header>%s</article>"
            % (
                " is-premium" if c.get("price") else "",
                c["id"],
                "".join(chips),
                L(c["title"], lang),
                L(c["desc"], lang),
                body,
            )
        )
    return replace_inner(page, "courseList", "\n      " + "\n      ".join(cards) + "\n    ")


def bake_name(page: str, lang: str) -> str:
    """Complete the <h1> with the surname as screen-reader text.

    The visible H1 is the brand line "code with Bahareh" / «کدنویسی با بهاره»;
    the hidden part turns it into the full name for assistive tech, and search
    engines read the complete name in the H1 of every language page."""
    return replace_inner_by_marker(
        page,
        r'<span class="u-sr" data-langblock="name">',
        LANGS[lang]["full_name"],
    )


def bake_jsonld(page: str, lang: str, app: dict) -> str:
    """Localize the Person/Service descriptions and add WebPage + FAQPage nodes."""
    pattern = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
    match = pattern.search(page)
    if not match:
        raise MarkupError("JSON-LD block not found in index.html")
    data = json.loads(match.group(2))
    graph = data.setdefault("@graph", [])
    meta = LANGS[lang]

    for node in graph:
        node_id = node.get("@id", "")
        if node_id.endswith("#person"):
            node["description"] = meta["person_description"]
            node["name"] = PERSON_NAME
            node["alternateName"] = list(PERSON_ALTERNATE_NAMES)
            node["url"] = ORIGIN + (lang + "/" if lang != "en" else "")
        elif node_id.endswith("#service"):
            node["description"] = meta["service_description"]

    # drop previously generated nodes so re-runs stay idempotent
    keep = ("#webpage", "#faq")
    graph[:] = [n for n in graph if not str(n.get("@id", "")).endswith(keep)]

    page_url = f"{ORIGIN}{lang}/"
    graph.append({
        "@type": "WebPage",
        "@id": page_url + "#webpage",
        "url": page_url,
        "name": re.sub(r"<[^>]+>", "", html_mod.unescape(meta["title"])),
        "description": html_mod.unescape(meta["description"]),
        "inLanguage": lang,
        "isPartOf": {"@id": ORIGIN + "#website"},
        "about": {"@id": ORIGIN + "#person"},
        "primaryImageOfPage": ORIGIN + "img/og-cover.png",
    })
    graph.append({
        "@type": "FAQPage",
        "@id": page_url + "#faq",
        "inLanguage": lang,
        "isPartOf": {"@id": page_url + "#webpage"},
        "mainEntity": [
            {
                "@type": "Question",
                "name": strip_tags(L(item["q"], lang)),
                "acceptedAnswer": {"@type": "Answer", "text": strip_tags(L(item["a"], lang))},
            }
            for item in app["faq"]
        ],
    })

    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    # keep the original two-line layout of the JSON-LD block in the source
    return page[: match.start(2)] + "\n" + payload + "\n" + page[match.end(2):]


# ---------------------------------------------------------------------------
# page assembly
# ---------------------------------------------------------------------------
def replace_meta(source: str, selector: str, value: str) -> str:
    pattern = rf'(<meta\s+{selector}\s+content=")[^"]*(">)'
    updated, count = re.subn(pattern, lambda m: m.group(1) + value + m.group(2), source, count=1)
    if count != 1:
        raise RuntimeError(f"Could not update meta tag: {selector}")
    return updated


def localize_links(page: str) -> str:
    """Generated pages live one directory deeper than the template."""
    page = re.sub(r'href="/?styles\.min\.css([^"]*)"', r'href="../styles.min.css\1"', page)
    page = re.sub(r'href="/?styles\.css([^"]*)"', r'href="../styles.css\1"', page)
    page = re.sub(r'src="/?script\.min\.js([^"]*)"', r'src="../script.min.js\1"', page)
    page = re.sub(r'src="/?script\.js([^"]*)"', r'src="../script.js\1"', page)
    for old, new in (
        ('src="./img/', 'src="../img/'),
        ('src="/img/', 'src="../img/'),
        ('href="sitemap.xml"', 'href="../sitemap.xml"'),
        ('href="/sitemap.xml"', 'href="../sitemap.xml"'),
        ('href="site.webmanifest"', 'href="../site.webmanifest"'),
        ('href="/site.webmanifest"', 'href="../site.webmanifest"'),
        ('href="img/', 'href="../img/'),
        ('href="/img/', 'href="../img/'),
    ):
        page = page.replace(old, new)
    return page


def build(lang: str, template: str, app: dict) -> bool:
    data = LANGS[lang]
    i18n = app["i18n"][lang]
    page = template

    page = re.sub(r'<html\s+lang="[^"]+"\s+dir="[^"]+"',
                  f'<html lang="{lang}" dir="{data["dir"]}"', page, count=1)
    page = re.sub(r"<title>.*?</title>", f'<title>{data["title"]}</title>', page, count=1, flags=re.S)
    page = replace_meta(page, r'name="description"', data["description"])
    page = replace_meta(page, r'name="keywords"', data["keywords"])
    page = replace_meta(page, r'property="og:title"', data["title"])
    page = replace_meta(page, r'property="og:description"', data["description"])
    page = replace_meta(page, r'property="og:url"', f"{ORIGIN}{lang}/")
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

    # ---- the actual fix: real text in the HTML, not only after JS runs ----
    page, baked = bake_i18n(page, i18n, lang)
    page = bake_bio(page, lang)
    page = bake_name(page, lang)
    page = bake_faq(page, app["faq"], lang, i18n)
    page = bake_course_videos(page, lang, i18n)
    if lang == "fa":  # the course-video section only exists on the Persian page
        page = bake_videos(page, app["videos"], lang)
    page = bake_courses(page, app["courses"], lang, i18n)
    page = bake_jsonld(page, lang, app)
    page = localize_links(page)

    destination = ROOT / lang / "index.html"
    destination.parent.mkdir(parents=True, exist_ok=True)
    previous = destination.read_text(encoding="utf-8") if destination.exists() else ""
    destination.write_text(page, encoding="utf-8")
    changed = page != previous
    print(
        f"generated {destination.relative_to(ROOT)} — {baked} localized strings, "
        f"{len(app['faq'])} FAQ, {len(app['courses'])} catalog entries, "
        f"{len(page) // 1024} KB{' (updated)' if changed else ' (unchanged)'}"
    )
    return changed


def update_sitemap(changed_langs: list[str]) -> None:
    """Refresh <lastmod> for the pages that actually changed."""
    path = ROOT / "sitemap.xml"
    if not path.exists() or not changed_langs:
        return
    today = datetime.date.today().isoformat()
    xml = path.read_text(encoding="utf-8")
    for lang in changed_langs:
        xml = re.sub(
            r"(<loc>%s%s/</loc>\s*<lastmod>)[^<]*(</lastmod>)" % (re.escape(ORIGIN), lang),
            rf"\g<1>{today}\g<2>",
            xml,
        )
    path.write_text(xml, encoding="utf-8")
    print("sitemap.xml lastmod →", today, "for", ", ".join(changed_langs))


def main() -> None:
    template = (ROOT / "index.html").read_text(encoding="utf-8")
    if 'data-langblock="bio"' not in template:
        raise SystemExit(
            'index.html must contain <div class="about__more" data-langblock="bio">…</div> '
            "so the bio can be localized."
        )
    app = load_app_config()
    changed = [lang for lang in LANGS if build(lang, template, app)]
    update_sitemap(changed)


if __name__ == "__main__":
    sys.exit(main())
