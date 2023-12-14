import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), auth()],
  build: { format: "file" },
  vite: {
    build: { modulePreload: false },
    optimizeDeps: { exclude: ["auth:config"] },
  },
  site: "https://aarush-dev.netlify.app",
  output: "server",
  adapter: vercel(),
});
