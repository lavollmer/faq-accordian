/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "0, 0%, 100%",
        "light-pink": "275, 100%, 97%",
        "grayish-purple": "292, 16%, 49%",
        "dark-purple": "292, 42%, 14%",
      },
      font: {
        worksans: ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
