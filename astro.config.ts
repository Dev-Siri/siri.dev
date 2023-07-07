import mdx from "@astrojs/mdx";

// @ts-expect-error
import netlify from "@astrojs/netlify/functions";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import auth from "auth-astro";

export default defineConfig({
  integrations: [tailwind(), compress(), mdx(), sitemap(), auth()],
  build: {
    format: "file",
  },
  vite: {
    optimizeDeps: { exclude: ["auth:config"] },
  },
  site: "https://aarush-dev.netlify.app/",
  output: "server",
  adapter: netlify(),
});
