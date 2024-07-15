/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "#2ab2af",
        lightCyan: "#4abebd",
        brightYellow: "#c0df34",
        lightGrey: "#e5eff5",
        grayishBlue: "#98a6bd",
      },
    },
  },
  plugins: [],
};
