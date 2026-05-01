import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        marfim: {
          DEFAULT: "#F4EEE4",
          50: "#FDFAF6",
          100: "#F9F4EC",
          200: "#F4EEE4",
          300: "#E8DCC8",
          400: "#D6C5A4",
          500: "#C4AE80",
        },
        cinza: {
          DEFAULT: "#9BA19A",
          100: "#BFC4BE",
          200: "#9BA19A",
          300: "#7B8179",
          400: "#5C615C",
        },
        oliva: {
          DEFAULT: "#262B21",
          50: "#4A5244",
          100: "#3A4135",
          200: "#2E3529",
          300: "#262B21",
          400: "#1A1E17",
          500: "#0F120D",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 6.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.875rem)", { lineHeight: "1.2" }],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backgroundImage: {
        "grid-subtle":
          "repeating-linear-gradient(90deg, rgba(155,161,154,0.03) 0px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(155,161,154,0.03) 0px, transparent 1px, transparent 80px)",
      },
    },
  },
  plugins: [],
};

export default config;
