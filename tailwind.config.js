/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#31313c",
        layout: "#171A21",
        header: "#5383e8",
      },
      backgroundImage: {
        homeBackground: "url('/assets/images/background/homeBackground.webp')",
      },
    },
    screens: {
      sm: { max: "375px" },
      md: { max: "640px" },
      lg: { max: "1024px" },
      xl: { max: "1200px" },
    },
  },
  plugins: [],
};
