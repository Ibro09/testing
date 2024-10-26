/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        circularMotion: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateX(100px) rotate(360deg)",
          },
        },
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(300%)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fall: "fall 4s ease-in-out infinite",
        "slide-up": "slideUp 1s ease-out",
        circle: "circularMotion 5s linear infinite",
      },
    },
  },
  plugins: [],
};

