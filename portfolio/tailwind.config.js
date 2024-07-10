/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        RichBlack: "#0D1F22",
        Fulvous: "#E18726",
        DarkCyan: "#0B7A75",
        Black: "#161616",
      },
      fontFamily: {
        RobotoSlab: ["Roboto Slab", "sans-serif"],
        Roash: ["Roash", "sans-serif"],
      },
      backgroundImage: {
        MenuImage: `url('../src/assets/images/wallpaper.jpeg')`,
      },
    },
  },
  plugins: [],
};
