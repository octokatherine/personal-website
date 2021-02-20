const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      gray: colors.gray,
      blueGray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
