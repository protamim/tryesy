/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#A4FF5C',
        'secondary-color': '#FFEF5B',
        'body-color': '#141820'
      },
      backgroundImage: {
        'about-pattern': 'url("/assets/services-line-bg.png")',
        'newsLetter-bg': 'url("/assets/newsletter-bg.png")'
      }
    },
  },
  plugins: [],
}

