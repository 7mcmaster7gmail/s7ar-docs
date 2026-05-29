'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex h-full max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-neutral-900 no-underline hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50"
          aria-label="S7AR Docs home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-neutral-950">
            S
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">S7AR Docs</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/docs" className="text-neutral-600 no-underline hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
            Home
          </Link>
          <Link href="/about" className="text-neutral-600 no-underline hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
            About
          </Link>
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/docs" className="rounded-md px-2 py-2 text-neutral-700 no-underline hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900">
              Home
            </Link>
            <Link href="/about" className="rounded-md px-2 py-2 text-neutral-700 no-underline hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900">
              About
            </Link>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-left text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? 'Light' : 'Dark'} mode
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
