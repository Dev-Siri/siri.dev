import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // solidJs(),
    compress(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  build: {
    format: "file",
  },
  site: "https://siri-dev.vercel.app",
});
