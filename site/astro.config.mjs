import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.new/config
export default defineConfig({
  site: 'https://realfshaw-crypto.github.io',
  base: '/muse-space',
  output: 'static',
  integrations: [sitemap()],
});
