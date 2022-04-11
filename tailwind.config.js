module.exports = {
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
