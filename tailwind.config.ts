import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zen Kaku Gothic New"],
        outfit: ["Outfit"],
      },
      colors: {
        default: "#F9F9F9",
        white: "#FFFFFF",
        primary: "#64C4D7",
        gray: "#B3B3B3",
        "body-text": "#404040",
      },
      screens: {
        tall: "1008px",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "font-size": "14px",
            "line-height": "32px",
            '@media (min-width: theme("screens.md"))': {
              "font-size": "20px",
              "line-height": "48px",
            },
            h1: {
              "font-size": "16px",
              "font-weight": 500,
              "letter-spacing": "0.1em",
              "margin-bottom": "40px",
              '@media (min-width: theme("screens.md"))': {
                "font-size": "24px",
                "margin-bottom": "56px",
              },
            },
            p: {
              "font-size": "14px",
              "line-height": "32px",
              "font-weight": 500,
              '@media (min-width: theme("screens.md"))': {
                "font-size": "20px",
                "line-height": "48px",
                "font-weight": 500,
              },
            },
            a: {
              color: theme("colors.primary"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
