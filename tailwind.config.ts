import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: {
          DEFAULT: "rgb(243, 249, 248)",
          DARK: "rgb(12, 12, 12)",
        },
        backgroundDark: {
          DEFAULT: "rgb(12, 12, 12)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius",
      },
      keyframes: {
        bouncing: {
          "0%": {},

          "50%": {
            transform: "translateY(10px) scale(1.6) scalex(2)",
          },
          "100%": {
            transform: "translateY(0) scale(2.5) scalex(2)",
          },
        },
      },
      animation: {
        bounce: "bouncing 4s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
