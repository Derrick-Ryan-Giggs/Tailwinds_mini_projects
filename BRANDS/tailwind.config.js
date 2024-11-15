/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors : {
        primary : '#ffd700',
        secondary : '#ff4500',
        accent : '#32cd32'
      },
      fontFamily : {
        sans: ['Inter', 'sans-serif'],
        serif : ['Merriweather', 'serif']
      },
      boxShadow : {
        'glow' : '0 0 15px rgba(255,255,255,0.5)',
      },
      spacing : {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

