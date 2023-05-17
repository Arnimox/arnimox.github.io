/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./source/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Exo 2', sans-serif",
      },
      colors: {
        text: "#ede9e8",
        background: "#14100f",
        primary: "#8ba2a7",
        secondary: "#261e1d",
        accent: "#121617"
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

