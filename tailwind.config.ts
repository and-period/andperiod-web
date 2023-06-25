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
        gray: '#B3B3B3',
        'body-text': '#404040',
      },
      screens: {
        tall: '1008px',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'font-size': '14px',
            'line-height': '48px',
            '@media (min-width: theme("screens.md"))': {
              'font-size': '20px',
            },
            h1: {
              'font-size': '16px',
              'font-weight': 500,
              'letter-spacing': '0.1em',
              '@media (min-width: theme("screens.md"))': {
                'font-size': '24px',
              },
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
