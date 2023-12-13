const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffb300",

          secondary: "#008fff",

          accent: "#3300ff",

          neutral: "#212656",

          base: "#0B0D1E",

          info: "#00baff",

          success: "#5ed000",

          warning: "#ff4e00",

          error: "#cc002f",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#ffb300",

        secondary: "#008fff",

        accent: "#3300ff",

        neutral: "#212656",

        base: "#0B0D1E",

        info: "#00baff",

        success: "#5ed000",

        warning: "#ff4e00",

        error: "#cc002f",
      },
    },
  },

  plugins: [forms, typography, daisyui],
};

module.exports = config;
