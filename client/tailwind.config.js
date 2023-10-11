/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6a6767',

          secondary: '#f8f8ff',

          accent: '#FFC757',

          'accent-focus': '#FFB624',

          neutral: '#D9D9D9',

          'base-100': '#1a1a22',

          'base-200': '#1e1e1e',

          'base-300': '#383838',

          'base-content': '#050505',

          info: '#3ABFF8',

          success: '#78dcca',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {},
  },
  plugins: [require('daisyui')],
};

