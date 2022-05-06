module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1170px",
        xl: "1600px",
      },
      fontFamily: {
        sans: ["Gotham"],
      },
      colors: {
        purple: {
          primary: "#452144",
          light: "#845182",
        },
        green: {
          primary: "#074F57",
          light: "#2D8790",
          lighter: "#C5DAC7",
        },
        gray: {
          dark: "#2D3132",
          "dark-2": "#191C1F",
          light: "#F3F2F2",
        },
        red: {
          DEFAULT: "#FF0000",
        },
      },
      borderRadius: {
        large: "10px",
      },
      boxShadow: {
        medium: "0px 4px 4px 2px rgba(0, 0, 0, 0.09);",
        large: "10px 25px 60px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
