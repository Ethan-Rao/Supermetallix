import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#050810",
        "bg-secondary": "#0d1117",
        "bg-card": "#111827",
        "accent-primary": "#3b82f6",
        "accent-secondary": "#06b6d4",
        "accent-gold": "#f59e0b",
        "text-primary": "#f9fafb",
        "text-secondary": "#9ca3af",
        border: "#1f2937",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "shimmer": "shimmer 3s linear infinite",
        "count-up": "count-up 2s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
