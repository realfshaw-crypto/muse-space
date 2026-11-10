# Muse Space preview site (Astro 5)

Static preview site for Muse Space, deployed to GitHub Pages at
https://realfshaw-crypto.github.io/muse-space/

- Data source: `../templates.json` (single source of truth, imported at build time).
- Pages: home (hero, 6 categories, 20 template cards, search, FAQ) plus one
  detail page per template at `/templates/<slug>/`.
- Design: Astryx tokens copied verbatim to `src/styles/tokens.css`; components
  use only `var(--...)`.
- SEO/GEO: per-page title/description, canonical, Open Graph / Twitter Card,
  JSON-LD (WebSite + ItemList + FAQPage on home, SoftwareApplication on detail
  pages), sitemap via @astrojs/sitemap, `public/robots.txt` allowing search and
  AI crawlers, and `public/llms.txt`.

Build: `npm install && npm run build` (output in `dist/`).
Deploy: `.github/workflows/pages.yml` (requires Pages Source = GitHub Actions).
