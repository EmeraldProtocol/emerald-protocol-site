import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ep_bg: "#020611",
        ep_bg_soft: "#050b1c",
        ep_panel: "#0a1020",
        ep_emerald: "#00f2a9",
        ep_emerald_soft: "#00c98b",
        ep_gold: "#f4d38b",
        ep_gold_soft: "#e2bf70",
        ep_obsidian: "#2a2a3e",
        ep_obsidian_red: "#8B2020",
        ep_sapphire: "#60A5FA",
        ep_text: "#e5ecff",
        ep_text_muted: "#94a3b8",
        ep_text_dim: "#475569",
      },
      boxShadow: {
        "ep-glow": "0 0 40px rgba(0, 242, 169, 0.4)",
        "ep-glow-gold": "0 0 40px rgba(244, 211, 139, 0.25)",
        "ep-glow-blue": "0 0 40px rgba(96, 165, 250, 0.25)",
      },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
      maxWidth: { "ep-page": "1120px" },
    }
  },
  plugins: []
};

export default config;
