import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), icon({ iconDir: "src/components/icons" })],
  build: { format: "file" },
  site: "https://siri-dev.vercel.app",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
