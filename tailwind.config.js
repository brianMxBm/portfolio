import { colors } from "./src/utils/style/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "block-reveal": "block-reveal 1.5s ease-in-out ",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
            opacity: 0,
          },

          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        "block-reveal": {
          "0%": {
            transform: "translateY(100%) translateZ(0px)",
          },
          "100%": {
            transform: "translateY(0%) translateZ(100px)",
          },
        },
        "scroll-scale": {
          "0%": {
            opacity: 1,
            transform: "translateY(0%) ",
            scale: 100,
          },
          "100%": {
            transform: "translateY(100%) translateZ(0px)",
            scale: 90,
            opacity: 0.5,
          },
        },
      },
    },
    colors,
    fontFamily: {
      GeneralSans: ["GeneralSans"],
      Grotesk: ["CabinetGrotesk"],
      Montreal: ["MontrealMono"],
    },
  },
  plugins: [],
};
