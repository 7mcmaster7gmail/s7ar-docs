'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg" />
            <span className="font-bold text-lg text-gray-900 dark:text-white">S7AR</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/docs/api" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              API
            </Link>
            <Link href="/docs/examples" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Examples
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800">
            <Link href="/docs" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Documentation
            </Link>
            <Link href="/docs/api" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              API
            </Link>
            <Link href="/docs/examples" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Examples
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}