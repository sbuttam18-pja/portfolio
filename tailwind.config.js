/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060912",
        panel: "#0b1120",
        line: "#1a2440",
        mist: "#9aa7c7",
        accent: "#7c9cff",
        py: "#ffd43b",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: { glow: "0 0 40px -12px rgba(124,156,255,.55)" },
    },
  },
  plugins: [],
};
