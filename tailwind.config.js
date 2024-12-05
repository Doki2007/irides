/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'i-blue': '#348AB8',
        'i-green': '#65AA44',
        'i-red': '#6D2111',
        'i-yellow': '#FDC63B',
      }
    },
  },
  plugins: [],
}

