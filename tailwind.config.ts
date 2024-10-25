import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sfPro: ["var(--font-sfPro)", "sans-serif"],
        sfSemi: ["var(--font-sfSemi)", "sans-serif"],
        monumentExt: ["var(--font-monumentExt)", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(105deg, rgba(210, 212, 214, 0.70) 0.6%, rgba(166, 165, 173, 0.70) 10.44%, rgba(138, 137, 150, 0.80) 37.41%, rgba(96, 95, 110, 0.80) 61.79%, #3C3B49 75.38%)',
      },
    },
  },
  plugins: [],
};
export default config;
