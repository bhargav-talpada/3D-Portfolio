/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        rotate1: 'rotate1 1.15s linear infinite',
        rotate2: 'rotate2 1.15s linear infinite',
        rotate3: 'rotate3 1.15s linear infinite',
      },
      keyframes: {
        rotate1: {
          '0%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)' },
        },
        rotate2: {
          '0%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)' },
        },
        rotate3: {
          '0%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

