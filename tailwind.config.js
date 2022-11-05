/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  // add daisyUI plugin
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    //["pastel", "dracula"],
    themes: [
      {
        "lm-theme": {
          primary: "#fdba74",
          secondary: "#d8b4fe",
          accent: "#a5b4fc",
          neutral: "#374151",
          "base-100": "#e5e7eb",
          info: "#ccfbf1",
          success: "#86efac",
          warning: "#fef3c7",
          error: "#fda4af",
        },
      },
    ],
  },
  content: ["./public/**/*.html", "./src/**/*.vue"],
};
