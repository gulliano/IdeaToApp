/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ".text-title": {
            "color": "#FF0000",
          },
          ".text-title-secondary": {
            "color": "#FBBF24",
          },
          "primary": "#FF0000",
          "secondary": "#FBBF24",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "dark",
      "retro",
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}

