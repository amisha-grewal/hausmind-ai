/** tailwind.config.js **/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F9AFF",
          DEFAULT: "#2972FF",
          dark: "#0050CC",
        },
        accent: "#F5A623",
        neutral: {
          100: "#F7F8FA",
          200: "#E5E7EB",
          900: "#111827",
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
}
