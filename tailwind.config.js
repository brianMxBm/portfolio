import { colors } from "./src/utils/style/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
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
