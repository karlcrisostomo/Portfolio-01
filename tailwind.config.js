/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "def-theme": "url('/light_bg.svg')",
        "dark-theme": "url('/dark_bg.svg')",
      },

      fontFamily: {
        roobert: ["Roobert", "sans-serif"],
      },
      animation: {
        "custom-spin": "spin  5s linear infinite",
      },
      boxShadow: {
        "df-shadow": "0px 0px 77px 5px rgba(34,5,153,0.88)",
        "scroll-shadow": "0px 0px 77px 5px rgba(101,22,204,0.88)",
      },

      backgroundColor: {
        blur: "rgba(255,255,255,0.55) blur(6px)",
      },
      colors: {
        "custom-blue": "#474bff",
        "custom-purple": "#bc48ff",
      },
    },
  },
  plugins: [],
};
