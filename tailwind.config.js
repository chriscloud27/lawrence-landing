/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lawrence brand. Swap these values to re-skin the site.
        brand: {
          DEFAULT: "#1e3a8a", // blue-900, favicon and primary buttons
          hover: "#172554", // blue-950
          subtle: "#eff6ff", // blue-50
        },
        ink: {
          DEFAULT: "#18181b", // zinc-900, headings and body text
          secondary: "#52525b", // zinc-600
          muted: "#a1a1aa", // zinc-400
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#fafafa", // zinc-50
          card: "#f4f4f5", // zinc-100
        },
        line: "#e4e4e7", // zinc-200
        dark: "#111827", // dark CTA blocks and footer
        danger: "#dc2626", // inline form errors only
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        lw: "12px",
        "lw-lg": "16px",
      },
    },
  },
  plugins: [],
};
