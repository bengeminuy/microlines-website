import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://microlines.example';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
