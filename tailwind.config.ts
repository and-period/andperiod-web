import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New'],
      },
      colors: {
        default: '#F9F9F9',
        white: '#FFFFFF',
        primary: '#64C4D7',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'font-size': '20px',
            'line-height': '48px',
            h1: {
              'font-size': '24px',
              'font-weight': 500,
              'letter-spacing': '0.1em',
            },
            a: {
              color: theme('colors.primary'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
