// Muse Space preview site — Astro 5, static output.
// Scaffold only in this stage: the full site (home + 20 template pages,
// SEO/GEO meta, structured data) is built in a later stage.
// Sitemap plan: add @astrojs/sitemap (already in package.json) to
// integrations once `site` is set to the GitHub Pages URL, so
// sitemap.xml is generated automatically at build time. robots.txt,
// favicon.svg and OG image live in public/.
import { defineConfig } from 'astro/config';

export default defineConfig({
  // site: 'https://realfshaw-crypto.github.io/muse-space/',
  output: 'static',
});
