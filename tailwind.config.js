/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "kl-blue": "#4678F3",
        "kl-blue-light": "#5CA6F7",
        "kl-gray": "#808080",
        "ng-burple": "#7b34dd",
        "ng-dark-90": "#1c1c2de6",
        "ng-blue-gray": "#64748b",
        "ng-green": "#15803d",
      },
    },
  },
  plugins: [],
};
