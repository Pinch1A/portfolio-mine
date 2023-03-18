/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        type: "type 3s ease-out 2s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0%)" },
          "5%, 10%": { transform: "translateX(10%)" },
          "15%, 20%": { transform: "translateX(20%)" },
          "25%, 30%": { transform: "translateX(30%)" },
          "35%, 40%": { transform: "translateX(40%)" },
          "45%, 50%": { transform: "translateX(50%)" },
          "55%, 60%": { transform: "translateX(60%)" },
          "65%, 70%": { transform: "translateX(70%)" },
          "75%, 80%": { transform: "translateX(80%)" },
          "85%, 90%": { transform: "translateX(90%)" },
          "95%, 100%": { transform: "translateX(100%)" },
        },
      },
    },
    // hljs: {
    //   theme: "vue-highlight-code/dist/style",
    // },
  },
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  // add daisyUI plugin
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-highlightjs"),
  ],

  // daisyUI config (optional)
  daisyui: {
    //["pastel", "dracula"],
    themes: [
      {
        "lm-theme": {
          primary: "#65C3C8",
          "primary-focus": "#65C3C8",
          "primary-content": "#B4E9D6",
          secondary: "#d8b4fe",
          "secondary-focus": "#EF9FBC",
          "secondary-content": "#D1C1D7",
          accent: "#a5b4fc",
          "accent-content": "#70ACC7",
          "accent-focus": "#EEAF3A",
          neutral: "#374151",
          "neutral-focus": "#291334",
          "neutral-content": "#1E293B",
          "base-100": "#FAF7F5",
          "base-300": "#e5e7eb",
          info: "#ccfbf1",
          "info-focus": "#3ABFF8",
          success: "#86efac",
          "success-focus": "#36D399",
          warning: "#fdba74",
          "warning-focus": "#FBBD23",
          error: "#fda4af",
          "error-focus": "#F87272",
        },
      },
    ],
  },
  content: ["./public/**/*.html", "./src/**/*.vue"],
};
