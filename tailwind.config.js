/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'i-blue': '#348AB8',
        'i-blue-2': '#c6e0f1',
        'i-blue-3': '#94c8e5',
        'i-blue-4': '#5baad5',
        'i-green': '#65AA44',
        'i-red': '#6D2111',
        'i-red-2': '#8A2B1F',
        'i-yellow': '#FDC63B',
        'i-yellow-2': '#fef0c7',
      },
      backgroundImage: {
        'quinoa-field': "url('./assets/images/quinoa-field.webp')",
        'coffe-field': "url('./assets/images/coffe-field.webp')",
        'coffee-plantation': "url('./assets/images/coffee_plantation.webp')",
        'red-quinoa': "url('./assets/images/red-quinoa.webp')",
        'white-quinoa': "url('./assets/images/white-quinoa.webp')",
        'coffee': "url('./assets/images/coffee.webp')",
        'i-background': "url('./assets/images/bg-white.jpg')",
        'i-texture': "url('./assets/images/texture.webp')",
        'i-bg': "url('./assets/images/patron_irides.png')",
      },
      fontFamily: {
        'i-k2d': ['K2D', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}

