import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0b241e",
          dark: "#0f3a30",
          green: "#19976c",
          light: "#22b386",
          gold: "#f4bf5f",
          cream: "#f9f5ec",
          accent: "#f18f01",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.12)",
        glow: "0 15px 50px rgba(20,85,60,0.25)",
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(15,45,36,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
