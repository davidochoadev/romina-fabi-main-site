import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import minify from "astro-min";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), minify()]
});