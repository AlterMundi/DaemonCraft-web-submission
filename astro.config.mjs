import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Submission Hub para Gemma 4 Good Hackathon.
// Deploy: GitHub Pages → https://sairaasua.github.io/daemoncraft-submission-hub/
// Para dominio custom: cambiar `site` al dominio y `base` a '/'.
export default defineConfig({
  site: 'https://sairaasua.github.io',
  base: '/daemoncraft-submission-hub/',
  integrations: [tailwind(), react()],
  server: { port: 8772, host: true },
  vite: {
    ssr: { noExternal: ['skinview3d'] },
  },
});
