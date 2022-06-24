import('tailwindcss').Config
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#010409',
        'secondary': '#0d1117',
        'button': '#30363e',
        'button-selected': '#30363e',
        'status-online': '#5CDD8B',
        'status-offline': '#DC3545',
        'accent': '#2993bf'
      },
    },
  },
  plugins: [],
}
