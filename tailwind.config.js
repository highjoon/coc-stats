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
        default: "#e5e7eb",
        layout: "#171A21",
      },
      backgroundImage: {
        homeBackground: "url('/assets/images/background/homeBackground.webp')",
      },
    },
  },
  plugins: [],
};
