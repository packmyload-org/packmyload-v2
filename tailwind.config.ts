import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-100": "#4bcbfe",
        "blue-300": "#2E5F9E",
        "blue-700": "#2C3B5A",
        "blue-800": "#243247",
        "gray-100": "#ffffff",
        "gray-200": "#f9f9f9",
        "gray-300": "#F4F5F7",
        "gray-600": "#B3B8C3",
        "gray-700": "#9d9d9d",
        "gray-950": "#ffffff36",
      },
       keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        change: "change 10s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

