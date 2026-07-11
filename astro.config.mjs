import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://megumi-observe.github.io',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'poimandres', wrap: true },
  },
});
