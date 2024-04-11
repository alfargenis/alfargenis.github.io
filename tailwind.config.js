/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}", "./node_modules/flowbite/**/*.js"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
