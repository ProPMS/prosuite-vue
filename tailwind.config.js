/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      '9xl': '8rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#84BE35',
        },
        secondary: {
          50: '#B5B5B6'
        },
        blue: {
          50: '#54B9ED',
          100: '#2E6CA8',
          200: '#348ADD'
        }
      },
      lineHeight: {
        'extra-loose': '0.9',
      },
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}