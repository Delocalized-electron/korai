/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  container: {
    center: true,
  },
  plugins: [],
  theme: {},
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
};
