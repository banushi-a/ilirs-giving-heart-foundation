import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors: {
        "gh-red-200": "#f06059",
        "gh-red-400": "#ee483e",
        "gh-red-600": "#db2a21",
        "gh-red-800": "#c91910",
      },
    },
    animation: {
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    keyframes: {
      pulse: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" },
      },
    },
  },
};
export default config;
