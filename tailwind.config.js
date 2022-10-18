/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {

        'sm': '280px',

        // => @media (min-width: 576px) { ... }
        '2md': '457px',
        'md': '812px',
        // => @media (min-width: 960px) { ... }
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        Inter: ['"Inter Tight"', 'sans-serif']
      }
    },
  },
  plugins: [],
}