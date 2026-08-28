# Code with Bahareh

A production-ready multilingual static course website with English, Persian, and Italian entry pages, interactive HTML/CSS lessons, quizzes, editable exercises, components, and accessible responsive navigation.

**Live website:** https://baharehwebdesign.github.io/

## Public identities

- Public GitHub profile shown to visitors: https://github.com/codewithbahareh
- Instagram: https://www.instagram.com/code_with_bahareh
- YouTube: https://www.youtube.com/@CodeWithBahareh
- Telegram: https://t.me/code_with_bahareh
- Email is displayed as plain, non-clickable text: `codewithbahareh@gmail.com`

The website contains no link to the source GitHub profile. The repository owner remains `baharehwebdesign` because that account hosts the GitHub Pages site. Visitors cannot switch accounts through the website. Because the Pages URL and a public repository expose their owner by design, complete technical concealment of the hosting account would require a custom domain and/or a private source repository supported by the selected GitHub plan.

## Highlights

- Root/x-default always opens in English with dark mode; explicit user choices remain available afterward.
- Responsive EN/IT header and mirrored RTL Persian navigation.
- Hover-only Free/Premium popovers on large desktop; click/tap/keyboard-only disclosure on mobile and tablet.
- Large-screen session fly-outs open right in English/Italian and left in Persian, with automatic viewport collision fallback.
- Mobile course cards remain inside the viewport down to 320px in EN/FA/IT.
- Mobile/tablet course dropdowns expose independent outer-topic and inner-session scroll regions.
- Keyboard support with Tab, Enter, Escape, focus trapping, `inert`, and ARIA state synchronization.
- Dark/light themes and EN/FA/IT localization.
- Interruptible eased scrolling for sections, sessions, filter navigation, and Back to Top.
- EN/FA/IT hero layouts place Free/Premium actions together when space allows and stack them cleanly on narrow phones.
- Quiz feedback uses two distinct Web Audio tones and reduced-motion-aware confetti for correct answers.
- Share buttons always copy the final language-specific GitHub Pages session URL.
- SEO, Open Graph, Twitter Card, JSON-LD, `robots.txt`, and multilingual `sitemap.xml`.
- Dedicated `/en/`, `/fa/`, and `/it/` HTML entry pages so social crawlers receive language-specific metadata without executing JavaScript.
- Lazy course rendering and near-viewport iframe hydration.
- Minified production CSS/JavaScript generated from readable source files.
- 12px minimum supporting text, improved contrast, and keyboard-focusable horizontal code samples.

## Project structure

```text
code-with-bahareh-production/
├── .github/workflows/deploy-pages.yml
├── .gitignore
├── .nojekyll
├── AUDIT_REPORT.md
├── FORM_SETUP.md
├── GITHUB_TREE.md
├── SEO_CHECKLIST.md
├── README.md
├── index.html
├── site.webmanifest
├── package.json
├── package-lock.json
├── robots.txt
├── sitemap.xml
├── script.js
├── script.min.js
├── styles.css
├── styles.min.css
├── tools/
│   └── generate_language_pages.py
├── en/index.html
├── fa/index.html
├── it/index.html
└── img/
    ├── code-with-bahareh-logo-2400.png
    ├── code-with-bahareh-logo.svg
    ├── icon-180.png
    ├── icon-192.png
    ├── icon-512.png
    ├── og-cover.png
    └── transparent-profile-430-580.png
```

## Run locally

Production files are already included, so a simple static server is enough:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/.

To regenerate optimized assets and language pages after editing source files:

```bash
npm ci
npm run build
```

## Editing content

- Structure and base metadata: `index.html`
- Design and responsive behavior: `styles.css`
- Courses, translations, FAQ, quizzes, components, and configuration: `APP_CONFIG` in `script.js`
- Social preview: `img/og-cover.png`
- Language-page metadata: `tools/generate_language_pages.py`

Always run `npm run build` after editing `index.html`, `styles.css`, or `script.js`.

## Deploy to GitHub Pages

The included workflow builds and deploys every push to `main`.

1. Place the contents of this folder in the root of the `baharehwebdesign.github.io` repository.
2. Commit and push to `main`.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. Confirm that **Deploy static site to GitHub Pages** succeeds in the Actions tab.
5. Complete the one-time FormSubmit confirmation described in `FORM_SETUP.md`.
6. Complete the Google Search Console steps in `SEO_CHECKLIST.md`.

```bash
git init
git add .
git commit -m "Launch Code with Bahareh website"
git branch -M main
git remote add origin https://github.com/baharehwebdesign/baharehwebdesign.github.io.git
git push -u origin main
```

## SEO and multilingual sharing

- Root/x-default: https://baharehwebdesign.github.io/
- English: https://baharehwebdesign.github.io/en/
- Persian: https://baharehwebdesign.github.io/fa/
- Italian: https://baharehwebdesign.github.io/it/

Each language entry page contains static localized title, description, canonical, Open Graph, Twitter Card, locale, and hero copy. This solves the common problem where social bots show English metadata because they do not execute client-side JavaScript.

## Contact form

The visible email is not a link. The contact form sends through FormSubmit's HTTPS AJAX endpoint and includes a honeypot. FormSubmit activation requires one manual confirmation from the destination inbox after deployment; see `FORM_SETUP.md`.

## Performance strategy

- Course DOM is created only when the course section approaches the viewport.
- Optional code-preview iframes are hydrated near the viewport and use `loading="lazy"`.
- Production assets are minified by Clean CSS and Terser.
- Images use explicit dimensions, lazy loading, asynchronous decoding, and low fetch priority.
- Scripts use `defer`; web fonts use `font-display: swap`.
- Off-screen course cards use `content-visibility: auto`.

For an additional future improvement, split the large `APP_CONFIG` course data into per-course JSON files and fetch only the selected session.
