/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        //for light version
        lightPrimary: "#fff", // light version of primary
        "light-secondary": "#4B5563", // light version of secondary
        "light-tertiary": "#E5E7EB", // light version of tertiary
        "light-black-100": "#1F2937", // light version of black-100
        "light-black-200": "#374151", // light version of black-200
        "light-white-100": "#D1D5DB", // light version of white-100
      },
      boxShadow: {
        cardDark: "0px 35px 120px -15px #211e35",
        cardLightBlue: "0px 35px 120px -15px #93c5fd",
        "light-card":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)", // light theme box-shadow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
        "light-hero-pattern": "url('/src/assets/bright-herobg.jpg')",
      },
    },
  },
  plugins: [],
};
