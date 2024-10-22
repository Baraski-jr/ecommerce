import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero/hero-bg.jpeg')",
        'Promotion-bg':"url(/background/bg-shoes.jpg)",
        'subHero-bg':"url(/background/bg-shoes-slide.jpeg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config