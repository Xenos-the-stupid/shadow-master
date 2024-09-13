/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/App.tsx",
    "./src/main.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--text-color-light)",
        "primary-text-dark": "var(--text-color-dark)",
        "border-color": "var(--border-color)",
        "border-color-dark": "var(--border-color-dark)",
        "bg-dark": "var(--bg-dark)",
        "bg-light": "var(--bg-light)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
