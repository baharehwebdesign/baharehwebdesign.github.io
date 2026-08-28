# Google Search launch checklist

The technical SEO files are already included. Complete these account-level steps after the first GitHub Pages deployment:

1. Open Google Search Console and add the URL-prefix property:
   `https://baharehwebdesign.github.io/`
2. Complete the verification method offered by Search Console.
3. Submit:
   `https://baharehwebdesign.github.io/sitemap.xml`
4. Use URL Inspection and request indexing for:
   - `https://baharehwebdesign.github.io/`
   - `https://baharehwebdesign.github.io/en/`
   - `https://baharehwebdesign.github.io/fa/`
   - `https://baharehwebdesign.github.io/it/`
5. Test the home page with Google Rich Results Test.
6. Test the Open Graph image with the sharing debuggers of the target social platforms.

## Site-name signals already included

- Consistent visible name: `Code with Bahareh`
- `<title>` and application name
- `og:site_name`
- WebSite structured data with `name` and `alternateName`
- Canonical URLs and hreflang language pages
- Favicon, Apple touch icon, and web app manifest

Google chooses and updates a displayed site name algorithmically; no markup can guarantee the exact timing or wording. Search Console submission and consistent naming are the correct final steps.

## Session share links

A URL such as `https://baharehwebdesign.github.io/en/#html-s1` opens correctly when pasted into a browser address bar. The fragment after `#` is handled by the site after GitHub Pages serves the language page. Fragment URLs are not normally indexed as separate Google result pages; the language landing pages are the intended indexable URLs.
