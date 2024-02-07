/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "violet-blue": "#6425d3",
        "violet-blue-dark": "#381b6b",
        "black-off": "#0d0e14",
        primary: "#606060",
      },

      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },

      screens: {
        mobile: "320px",
        mobileM: "475px",
        mobileL: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
