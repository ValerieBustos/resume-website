import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: { "base-color": "#a081d9", "action-color": "#59c7d0" },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
