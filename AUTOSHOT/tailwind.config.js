/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      screens : {
        'xs' : '475px',
         'sm' : '640px',
          'md' : '768px',
           'lg' : '1024px',
            'xl' : '1280px',
             '2xl' : '1536px'
      },
      colors : {
        'primary' :{
          default :'#7c3aed',// purple 600
          hover : '#6d28d9' //purple 700
        }
      }
    },
  },
  
  plugins: [],
}

