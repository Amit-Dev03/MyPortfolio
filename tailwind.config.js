/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 1. Add the 'animation' utility
      animation: {
        scroll: "scroll 100s linear infinite",
      },
      // 2. Move 'keyframes' inside 'theme.extend'
      keyframes: {
        scroll: {
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
