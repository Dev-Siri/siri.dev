import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#0E0E0E",
        "semi-dark-gray": "#1c1c1c",
        "semi-visible-blue": "rgba(0, 120, 255, 0.53)",
        "accessible-blue": "rgb(1,89,167)",
      },
    },
  },
  future: { hoverOnlyWhenSupported: true },
} satisfies Config;
