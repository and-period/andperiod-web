import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New'],
        outfit: ['Outfit'],
      },
      colors: {
        default: '#F9F9F9',
        white: '#FFFFFF',
        primary: '#64C4D7',
        gray: '#B3B3B3',
        'body-text': '#404040',
      },
      screens: {
        '2xl': '1200px',
        tall: '1008px',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'font-size': '14px',
            'line-height': '32px',
            color: theme('colors.body-text'),
            '@media (min-width: theme("screens.md"))': {
              'font-size': '20px',
              'line-height': '48px',
            },
            h1: {
              'font-size': '16px',
              'font-weight': 500,
              'letter-spacing': '0.1em',
              'margin-bottom': '40px',
              'line-height': '32px',
              color: theme('colors.body-text'),
              '@media (min-width: theme("screens.md"))': {
                'font-size': '24px',
                'margin-bottom': '56px',
                'line-height': '48px',
              },
            },
            h2: {
              'font-size': '15px',
              'font-weight': 500,
              'line-height': '24px',
              color: theme('colors.body-text'),
              '@media (min-width: theme("screens.md"))': {
                'font-size': '20px',
                'line-height': '48px',
              },
            },
            p: {
              'font-size': '14px',
              'line-height': '32px',
              'font-weight': 500,
              color: theme('colors.body-text'),
              '@media (min-width: theme("screens.md"))': {
                'font-size': '20px',
                'line-height': '48px',
                'font-weight': 500,
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
