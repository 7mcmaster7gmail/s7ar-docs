'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const navItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Documentation',
    items: [
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Components', href: '/docs/components' },
      { title: 'Examples', href: '/docs/examples' },
      { title: 'Guides', href: '/docs/guides' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Configuration', href: '/docs/configuration' },
      { title: 'Performance', href: '/docs/performance' },
      { title: 'Deployment', href: '/docs/deployment' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(['Getting Started', 'Documentation']);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 h-[calc(100vh-64px)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navItems.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {section.title}
              <ChevronDown
                size={18}
                className={`transition-transform ${openSections.includes(section.title) ? '' : '-rotate-90'}`}
              />
            </button>
            {openSections.includes(section.title) && (
              <div className="pl-4 space-y-1 mt-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}