// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()],
  env: {
    schema: {
      API_URL: envField.string({context: "client", access: "public"}),
      API_TEST: envField.string({context: "client", access:"public"})
    }
  }
});