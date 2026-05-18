import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Submission Hub para Gemma 4 Good Hackathon.
// Deploy: GitHub Pages (AlterMundi/DaemonCraft-web-submission) con dominio custom
// → https://daemoncraft.altermundi.net (CNAME en public/CNAME).
export default defineConfig({
  site: 'https://daemoncraft.altermundi.net',
  base: '/',
  integrations: [tailwind(), react()],
  server: { port: 8772, host: true },
  vite: {
    ssr: { noExternal: ['skinview3d'] },
  },
});
