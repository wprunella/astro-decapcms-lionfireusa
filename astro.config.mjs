import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astro/image';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    image(),
  ],
});
