/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeatriceRegular: ["BeatriceTRIAL-Regular", "sans-serif"],
        BeatriceExtraBold: ["BeatriceDeckTRIAL-Extraboldr", "sans-serif"],
        general: ["general", "sans-serif"],
      },
      colors: {
        black:{
          50:"#D9D9D9",
          75:"#A3A3A3",
          100:"#000000",

        },
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        offWhite: {
          300: "#A3A3A3",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      }
    },
  },
  plugins: [],
}