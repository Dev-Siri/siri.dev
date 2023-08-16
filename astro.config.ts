import { defineConfig } from "astro/config";

// @ts-expect-error
import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import auth from "auth-astro";

export default defineConfig({
  integrations: [tailwind(), compress(), mdx(), sitemap(), auth()],
  build: {
    format: "file",
  },
  vite: {
    build: {
      modulePreload: false,
    },
    optimizeDeps: { exclude: ["auth:config"] },
  },
  site: "https://aarush-dev.netlify.app/",
  output: "server",
  adapter: netlify(),
});
