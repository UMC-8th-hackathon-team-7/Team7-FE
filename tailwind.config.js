import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        suit: ["SUIT", "sans-serif"],
      },
      colors: {
        "fill-regular": "var(--color-fill-regular)",
        "fill-strong": "var(--color-fill-strong)",
        "fill-static": "var(--color-fill-static)",
        "fill-interactive": "var(--color-fill-interactive)",
        "fill-inverted": "var(--color-fill-inverted)",
        base: "var(--color-base)",
        additive: "var(--color-additive)",
        assistive: "var(--color-assistive)",
        disabled: "var(--color-disabled)",
        inverted: "var(--color-inverted)",
        elevated: "var(--color-elevated)",
      },
    },
  },
  plugins: [],
});
