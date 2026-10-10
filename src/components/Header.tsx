"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О проекте" },
  { href: "/api/hello", label: "API Demo" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-primary transition-colors duration-normal">
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-brand-600 dark:text-brand-400 transition-colors duration-fast hover:text-brand-700 dark:hover:text-brand-300"
            aria-label="Next.js + Cloudflare Pages — Home"
          >
            Next.js + Cloudflare
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary dark:hover:text-text-inverse transition-colors duration-fast rounded-lg hover:bg-bg-tertiary dark:hover:bg-surface-800"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}