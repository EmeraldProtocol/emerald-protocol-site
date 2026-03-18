import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Emerald Protocol – Learn Python from Absolute Zero",
  description:
    "Emerald Protocol is an AI-powered Python learning platform with three intelligent agents. Phase 0 teaches the alphabet. Phases 1-7 teach the code. Structure the chaos.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body id="top" className="min-h-screen bg-ep_bg text-ep_text">
        <Navbar />
        <main className="ep-container py-10 md:py-16">{children}</main>

        <footer className="ep-footer">
          <div className="ep-footer-inner">
            <div className="ep-footer-left">
              <div className="ep-footer-brand">
                <span className="text-ep_gold">EMERALD PROTOCOL</span>
                <span className="block text-[8px] tracking-[0.3em] text-ep_gold_soft/40 uppercase mt-0.5">
                  Structure the chaos
                </span>
              </div>
              <div className="ep-footer-meta">
                © 2025 Emerald Protocol. All rights reserved.
              </div>
            </div>

            <div className="ep-footer-socials">
              <span className="ep-footer-social-label">Follow Emerald</span>

              <a
                href="https://x.com/EmeraldProtocol"
                aria-label="X"
                className="ep-footer-icon-only flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.18)] group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.75)]"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.5l-7.52 8.59L23 22h-7.406l-5.8-7.59L3.14 22H0l8.06-9.21L1 2h7.594l5.28 6.93L18.244 2zm-1.3 18h2.04L7.96 4H5.82l11.124 16z" />
                </svg>
              </a>

              <a
                href="https://www.reddit.com/user/EmeraldProtocol/"
                aria-label="Reddit"
                className="ep-footer-icon-only flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.18)] group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.75)]"
                  aria-hidden="true"
                >
                  <path d="M14.17 15.32c.1.1.1.26 0 .36-.7.7-1.84.7-2.54 0-.1-.1-.1-.26 0-.36.1-.1.26-.1.36 0 .5.5 1.32.5 1.82 0 .1-.1.26-.1.36 0Zm-3.84-2.1c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm5.34-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm6.33.78c0-1.6-1.2-2.94-2.8-3.2.04-.17.06-.35.06-.53 0-1.36-1.1-2.47-2.47-2.47-.93 0-1.74.52-2.16 1.28-1.2-.8-2.77-1.28-4.47-1.32l.95-3.02 2.6.61a1.75 1.75 0 1 0 .16-.69l-2.97-.7a.37.37 0 0 0-.44.25l-1.08 3.45c-1.77.03-3.4.52-4.64 1.34A2.46 2.46 0 0 0 4.13 6.8c-1.36 0-2.47 1.1-2.47 2.47 0 .18.02.36.06.53A3.24 3.24 0 0 0 0 13c0 1.16.62 2.18 1.54 2.74-.03.2-.04.4-.04.61 0 3.32 3.83 6.01 8.55 6.01s8.55-2.69 8.55-6.01c0-.2-.01-.41-.04-.61A3.22 3.22 0 0 0 22 13Z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@emeraldprotocol?lang=bg"
                aria-label="TikTok"
                className="ep-footer-icon-only flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.18)] group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.75)]"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v13.24a2.67 2.67 0 1 1-2.67-2.67c.23 0 .45.03.67.08V9.48c-.22-.03-.44-.05-.67-.05A5.79 5.79 0 1 0 15.82 15V8.77a7.9 7.9 0 0 0 4.63 1.49V7.14c-.29 0-.58-.15-.86-.45Z" />
                </svg>
              </a>

              <a
                href="https://discord.gg/rx6U5YQF"
                aria-label="Discord"
                className="ep-footer-icon-only flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.18)] group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.75)]"
                  aria-hidden="true"
                >
                  <path d="M20.32 4.37A19.8 19.8 0 0 0 15.45 3l-.24.49a18.27 18.27 0 0 1 4.4 1.34 13.4 13.4 0 0 0-5.58-1.13c-1.89 0-3.85.35-5.59 1.13A18.2 18.2 0 0 1 12.84 3l-.24-.49a19.73 19.73 0 0 0-4.88 1.37C4.63 8.46 3.8 12.93 4.21 17.33A19.95 19.95 0 0 0 9.9 20l.76-1.03c-.99-.37-1.93-.87-2.81-1.5.23.17.48.33.73.47 2.42 1.32 5.05 1.32 7.47 0 .26-.14.5-.3.73-.47-.88.63-1.82 1.13-2.81 1.5l.76 1.03a19.84 19.84 0 0 0 5.7-2.67c.47-5.11-.8-9.54-4.11-12.96ZM9.75 14.6c-.8 0-1.45-.73-1.45-1.62s.64-1.62 1.45-1.62c.81 0 1.46.73 1.45 1.62 0 .89-.64 1.62-1.45 1.62Zm4.5 0c-.8 0-1.45-.73-1.45-1.62s.64-1.62 1.45-1.62c.81 0 1.46.73 1.45 1.62 0 .89-.64 1.62-1.45 1.62Z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

        <Script
          defer
          data-domain="emerald-protocol.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}