// src/app/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Emerald Protocol – Learn Python from Absolute Zero",
  description:
    "Emerald Protocol is an AI-powered Python learning platform with three intelligent agents. Phase 0 teaches the alphabet. Phases 1-7 teach the code. Structure the chaos.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
</head>
      <body id="top" className="min-h-screen bg-ep_bg text-ep_text">
  <Navbar />
  <main className="ep-container py-10 md:py-16">{children}</main>

        <footer className="ep-footer">
          <div className="ep-footer-inner">
            <div className="ep-footer-left">
              <div className="ep-footer-brand">
                <span className="text-ep_gold">EMERALD PROTOCOL</span>
                <span className="block text-[8px] tracking-[0.3em] text-ep_gold_soft/40 uppercase mt-0.5">Structure the chaos</span>
              </div>
              <div className="ep-footer-meta">
                © 2025 Emerald Protocol. All rights reserved.
              </div>
            </div>

            <div className="ep-footer-socials">
              <span className="ep-footer-social-label">Follow Emerald</span>
              <a href="https://x.com/EmeraldProtocol" aria-label="X" className="ep-footer-icon-only" target="_blank" rel="noopener noreferrer">
                <img src="/social/x.svg" alt="X" className="ep-footer-icon-img" />
              </a>
              <a href="https://www.reddit.com/user/EmeraldProtocol/" aria-label="Reddit" className="ep-footer-icon-only" target="_blank" rel="noopener noreferrer">
                <img src="/social/reddit.svg" alt="Reddit" className="ep-footer-icon-img" />
              </a>
              <a href="https://www.tiktok.com/@emeraldprotocol?lang=bg" aria-label="TikTok" className="ep-footer-icon-only" target="_blank" rel="noopener noreferrer">
                <img src="/social/tiktok.svg" alt="TikTok" className="ep-footer-icon-img" />
              </a>
              <a href="https://discord.gg/rx6U5YQF" aria-label="Discord" className="ep-footer-icon-only" target="_blank" rel="noopener noreferrer">
                <img src="/social/discord.svg" alt="Discord" className="ep-footer-icon-img" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
