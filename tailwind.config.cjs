/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#880E4F",
        primaryLight: "#BC477B",
        primaryDark: "#560027",
        disabledBg: "#CCC",
        disabledColor: "#666",
      },
    },
  },
  plugins: [],
};
