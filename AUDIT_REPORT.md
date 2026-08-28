# Final production audit

Audit date: 2026-08-17

## Automated results

Local Lighthouse mobile simulation after optimization:

- Performance: **79/100** (lab result; hosting/network conditions vary)
- Accessibility: **100/100**
- Best Practices: **100/100**
- SEO: **100/100**
- Total Blocking Time: approximately **120 ms**
- Cumulative Layout Shift: approximately **0.003**

Axe WCAG 2/2.1 A+AA checks returned **0 violations** for:

- Desktop English
- Mobile Persian
- Tablet Italian
- Both the lightweight initial page and hydrated course content

## Verified

- No duplicate IDs
- No broken static `aria-controls`, `aria-labelledby`, or `aria-describedby` references
- No `mailto:` links
- Visible email is plain selectable text
- GitHub links point only to `github.com/codewithbahareh`
- Instagram links point to `instagram.com/code_with_bahareh`
- EN/FA/IT static metadata pages and canonical URLs
- Keyboard-focusable horizontal code samples
- Touch and keyboard course navigation
- Root/x-default enters in English dark mode
- Persian desktop course popovers remain open during wheel input
- Header CSS Session 3 settles at its own heading, not the previous session
- Header Contact settles directly below the fixed header in EN/FA/IT
- Language-aware share URLs reopen the selected session on GitHub Pages
- WebSite name/alternateName, manifest, icons, canonical and hreflang signals
- Minified production assets
- Zero npm audit vulnerabilities

## Manual step still required

FormSubmit must be activated from the destination email inbox after the first live form submission. Follow `FORM_SETUP.md`.

## Optional future speed work

For performance above the current lab score, split the large course data and course-only CSS into per-session files, then fetch only the selected session. Self-hosting/subsetting fonts and reducing the decorative footer SVG would further reduce initial rendering work.
