// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        title: ['Poppins'],
        body: ['Lato']
      },
      colors: {
        indigo: {
          default: '#7C6BF9',
          lighter: '#F0EDFE',
          dark: '#0D2665'
        },
        gray: {
          default: '#F4F8FB',
          lighter: '#E3EAF2',
          muted: '#AAAAAA'
        },
        blue: '#4298FE',
        red: '#FE346E'
      },
      flex: {
        fixed: '0 0 20em'
      }
    }
  },
  variants: {},
  plugins: []
};
