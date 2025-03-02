import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), icon({ iconDir: "src/components/icons" }), svelte()],
  vite: { plugins: [tailwindcss()] },
  build: { format: "file" },
  site: "https://siri-dev.vercel.app",
  adapter: vercel({ webAnalytics: { enabled: true } }),
});
