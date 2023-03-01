/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'background': '#15141F',
      'pink': '#9b368f',
      'orange_light': '#FF8F71',
      'orange_dark': '#EF2D1A'
    },
    extend: {
      fontFamily :{
        'lato' : ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}