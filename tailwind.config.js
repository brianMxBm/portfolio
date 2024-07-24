import { colors } from "./src/utils/style/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    fontFamily: {
      GeneralSans: ["GeneralSans"],
      Grotesk: ["CabinetGrotesk"],
      Montreal: ["MontrealMono"],
    },
  },
  plugins: [],
};
