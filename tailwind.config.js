/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js,css}", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "rgb(var(--color-base-100) / <alpha-value>)",
          200: "rgb(var(--color-base-200) / <alpha-value>)",
          300: "rgb(var(--color-base-300) / <alpha-value>)",
          content: "rgb(var(--color-base-content) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
