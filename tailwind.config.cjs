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
      'black': '#000000',
      'input': '#211F30',
      "login": '#37363f',
      'background': '#15141F',
      'pink': '#9b368f',
      'orange_light': '#FF8F71',
      'orange_dark': '#EF2D1A',
      'gray_light': '#BCBCBC'
    },
    extend: {
      fontFamily :{
        'lato' : ['Lato', 'sans-serif']
      }
    },
  },
  variants:{
    fill: ['hover', 'focus']
  },
  plugins: [],
}