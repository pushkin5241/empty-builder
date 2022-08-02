module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          inter: ["Arial", "sans-serif"],
        },
        dropShadow: {
          logo: "0 0 2em #646cffaa",
          "logo-tw": "0 0 2em #38bdf8aa",
        },
        height: {
          18: "4.5rem",
        },
        colors: {
          "transparent-white": "rgba(255, 255, 255, 0.87)",
        },
      },
    },
    plugins: [],
  };