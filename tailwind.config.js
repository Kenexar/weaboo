/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'base': '#1A1C23',
        'secondary': '#242731',
        'button': '#313543',
        'button-selected': '#454A5D',
        'accent': '#2993bf'
      }
    },
  },
  plugins: [],
}
