/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
  plugins: [],
};
