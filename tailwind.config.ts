import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New']
      },
      colors: {
        default: '#F9F9F9',
        white: '#FFFFFF',
        primary: '#64C4D7',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-size': '24px',
              'font-weight': 500,
              'line-height': '40px',
              'letter-spacing': '0.1em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
