"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const DEMO_URL = "https://demo.emerald-protocol.com";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/agents", label: "The Three Agents" },
  { href: "/phase-zero", label: "Phase Zero" },
  { href: "/questions", label: "FAQ" },
  { href: DEMO_URL, label: "Demo", external: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string, external?: boolean) => {
    if (external) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ep_bg/80 backdrop-blur-md">
      <div className="ep-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 md:h-11 md:w-11">
            <Image
              src="/emblem_1.png"
              alt="Emerald Protocol logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-bold tracking-[0.30em] text-ep_gold">
              EMERALD PROTOCOL
            </div>
            <div className="text-[8px] font-medium tracking-[0.35em] text-ep_gold_soft/50 uppercase">
              Structure the chaos
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ep-nav-link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "ep-nav-link" +
                  (isActive(item.href) ? " ep-nav-link-active" : "")
                }
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ep-btn-primary text-xs"
          >
            Try the Demo
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-ep_text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1">
            <span className="block h-[2px] w-4 rounded-full bg-ep_text" />
            <span className="block h-[2px] w-4 rounded-full bg-ep_text" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ep_bg_soft md:hidden">
          <nav className="ep-container flex flex-col py-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm ep-nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "py-2 text-sm ep-nav-link" +
                    (isActive(item.href) ? " ep-nav-link-active" : "")
                  }
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="mt-2 pb-2">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="ep-btn-primary block w-full text-center"
              >
                Try the Demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}