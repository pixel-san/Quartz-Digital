import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: "#0a0a0b",
        surface: "#121214",
        raised: "#1a1a1d",
        line: "rgba(255,255,255,0.08)",
        cream: "#f5f2ee",
        muted: "#9b9ba1",
        quartz: {
          DEFAULT: "#009087",
          bright: "#00b3a6",
          dim: "#00665f",
        },
        background: "#0a0a0b",
        foreground: "#f5f2ee",
        primary: { DEFAULT: "#009087", foreground: "#f5f2ee" },
        secondary: { DEFAULT: "#1a1a1d", foreground: "#f5f2ee" },
        ring: "#009087",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.35)",
        glowsoft: "0 0 60px rgba(0,144,135,0.12)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
