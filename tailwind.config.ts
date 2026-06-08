import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        grillRed: "#FF0000",
        grillBlack: "#111111"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-bebas)", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(17, 17, 17, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
