import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom retro theme colors
        "retro-pink": "hsl(var(--retro-pink))",
        "retro-blue": "hsl(var(--retro-blue))",
        "retro-yellow": "hsl(var(--retro-yellow))",
        "retro-green": "hsl(var(--retro-green))",
        "retro-purple": "hsl(var(--retro-purple))",
        "retro-orange": "hsl(var(--retro-orange))",
        "retro-cyan": "hsl(var(--retro-cyan))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px 0 rgba(255, 255, 255, 0.4), 0 0 10px 0 rgba(255, 0, 255, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.4), 0 0 30px 20px rgba(255, 0, 255, 0.2)",
          },
        },
        "pixel-shift": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(2px) translateY(2px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(-2px) translateY(-2px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "pixel-shift": "pixel-shift 0.5s steps(2) infinite",
      },
      fontFamily: {
        pixel: ["var(--font-press-start)"],
        retro: ["var(--font-vt323)"],
        silkscreen: ["var(--font-silkscreen)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

