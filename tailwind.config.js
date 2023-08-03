/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#1e3a8a",
        color2: "#0ea5e9",
        color3: "#60a5fa",
        color4: "#fff",
        color5: "#34d399",
        color6: "#facc15",
      },
      backgroundImage: {
        cloud: "url(./assets/cloud.jpg)",
      },
    },
  },
  plugins: [],
};
