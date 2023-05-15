import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    tailwind(),
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
