/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      md900: "900px",
      lg: "1024px",
      lg1200: "1200px",
      lg1160: "1160px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#ee9826",
        text: "#434343",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/images/bicycle.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
