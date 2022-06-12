module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1110px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "s-dark-blue": "#14213D",
        "s-orange": "#FCA311",
        "s-dark-grey": "#E5E5E5",
        "s-light-grey": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
