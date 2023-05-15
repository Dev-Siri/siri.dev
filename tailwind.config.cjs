/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-gray": "#0f0f0f",
        "semi-dark-gray": "#1c1c1c",
        "semi-visible-blue": "rgba(0, 120, 255, 0.53)",
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
};
