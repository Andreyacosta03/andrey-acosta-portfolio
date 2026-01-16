// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import robotTxt from "astro-robots-txt";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), robotTxt()],
  },
});
