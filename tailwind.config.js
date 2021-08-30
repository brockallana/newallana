const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./index.html" 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        teal: colors.teal,
        cyan: colors.cyan,
        purple: colors.purple,
        indigo: colors.indigo,
        grey: colors.grey,
      }
     },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
