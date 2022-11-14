/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-DmSans)", ...fontFamily.sans],
        body: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      primary: {
        "max-00": "#F0FFFC",
        50: "#CCEAE4",
        100: "#ADDED4",
        200: "#82CDBD",
        300: "#57BBA7",
        400: "#2BAA90",
        500: "#009879",
        600: "#007E64",
        700: "#006450",
        800: "#004A3B",
        900: "#003127",
      },
      neutral: {
        50: "#F6F6F6",
        100: "#EDEDEE",
        200: "#E4E4E5",
        300: "#DADBDD",
        400: "#D1D2D4",
        500: "#818489",
        600: "#3C4148",
        700: "#161A22",
        800: "#0E1116",
        900: "#07080A",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    fontSize: {
      // Heading -  Desktop
      "h1-desktop": ["96px", { lineHeight: "112px", letterSpacing: "-2%" }],
      "h2-desktop": ["60px", { lineHeight: "72px", letterSpacing: "-2%" }],
      "h3-desktop": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
      "h4-desktop": ["34px", { lineHeight: "42px", letterSpacing: "-2%" }],
      "h5-desktop": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],
      "h6-desktop": ["20px", { lineHeight: "32px", letterSpacing: "0" }],

      // Heading -  Mobile
      "h1-mobile": ["60px", { lineHeight: "72px", letterSpacing: "-2%" }],
      "h2-mobile": ["48px", { lineHeight: "56px", letterSpacing: "-2%" }],
      "h3-mobile": ["34px", { lineHeight: "42px", letterSpacing: "-2%" }],
      "h4-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-2%" }],
      "h5-mobile": ["20px", { lineHeight: "32px", letterSpacing: "0%" }],
      "h6-mobile": ["18px", { lineHeight: "24px", letterSpacing: "0%" }],

      // Body
      "body-1": ["16px", { lineHeight: "24px", letterSpacing: "0%" }],
      "body-2": ["14px", { lineHeight: "20px", letterSpacing: "0%" }],

      // Subtitle
      1: ["16px", { lineHeight: "28px", letterSpacing: "0%" }],
      2: ["14px", { lineHeight: "22px", letterSpacing: "0%" }],

      // Button
      button: ["14px", { lineHeight: "16px", letterSpacing: "0%" }],

      // Caption
      caption: ["12px", { lineHeight: "20px", letterSpacing: "0%" }],

      // Label
      "label-1": ["18px", { lineHeight: "28px", letterSpacing: "0%" }],
      "label-2": ["16px", { lineHeight: "24px", letterSpacing: "0%" }],
      "label-3": ["14px", { lineHeight: "20px", letterSpacing: "0%" }],
      "label-4": ["12px", { lineHeight: "20px", letterSpacing: "0%" }],
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("flowbite/plugin")],
};
