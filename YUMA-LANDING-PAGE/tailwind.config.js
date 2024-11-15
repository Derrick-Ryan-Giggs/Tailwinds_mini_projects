/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: { 

      screens : {
        'xs':'475px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}

