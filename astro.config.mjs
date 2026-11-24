import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beacon-repair-cafe.github.io',
  base: '/web',
  vite: {
    plugins: [tailwindcss()],
  },
});
