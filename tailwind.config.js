/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "'Courier New'", "monospace"],
        sans: ["'Inter'", "'system-ui'", "-apple-system", "sans-serif"],
        display: ["'Space Grotesk'", "'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};