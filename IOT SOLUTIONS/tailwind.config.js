/** @type {import('tailwindcss').Config} */
export const content = ['./*html'];
export const theme = {
  extend: {
    screens : {
      'xs' : '475px',
       'sm' : '640px',
        'xs' : '768px',
         'xs' : '1024px',
          'xs' : '1280px',
           'xs' : '1536px'
    },
    colors : {
'blue': {
  50: '#f0f5ff',
  100 :'#e1effe',
  600 : '#2563eb',
  700: '#1d4ed8'
}
    }
  },
  boxshadow:{
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.08'
  }
};
export const plugins = [];

