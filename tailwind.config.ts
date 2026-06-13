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
        grillRed: "#B90E16",
        grillBlack: "#140909"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-bebas)", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(55, 12, 12, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
