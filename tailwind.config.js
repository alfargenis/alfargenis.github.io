/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
  },
};
