'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarEntry =
  | { type: 'section'; title: string; items: { title: string; href: string }[] }
  | { type: 'link'; title: string; href: string; description?: string }
  | { type: 'separator' };

const navItems: SidebarEntry[] = [
  {
    type: 'link',
    title: 'Home',
    href: '/docs',
    description: 'Write Anything You Want!',
  },
  {
    type: 'section',
    title: 'S7AR Baby',
    items: [
      { title: '总览', href: '/docs' },
      { title: '早期', href: '/docs/quick-start' },
      { title: '中期', href: '/docs/installation' },
      { title: '后期', href: '/docs/configuration' },
      { title: '饮食禁忌', href: '/docs/guides' },
      { title: '用药指南', href: '/docs/api' },
      { title: '产检时间表', href: '/docs/components' },
      { title: '孕期运动', href: '/docs/performance' },
      { title: '知识总结', href: '/docs/examples' },
      { title: '食谱总表', href: '/docs/deployment' },
      { title: '食谱家常版', href: '/docs/deployment' },
      { title: '激素水平(单)', href: '/docs/deployment' },
      { title: '激素水平(双)', href: '/docs/deployment' },
    ],
  },
  { type: 'separator' },
  {
    type: 'section',
    title: 'Docker',
    items: [
      { title: '开始1', href: '/docs/installation' },
      { title: 'Docker Test', href: '/docs/deployment' },
    ],
  },
  {
    type: 'section',
    title: 'MacOS',
    items: [{ title: 'Shapr3d', href: '/docs/components' }],
  },
];

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 lg:block">
      <nav className="px-4 py-6 text-sm">
        <div className="space-y-5">
          {navItems.map((entry, index) => {
            if (entry.type === 'separator') {
              return <div key={`separator-${index}`} className="my-4 border-t border-neutral-200 dark:border-neutral-800" />;
            }

            if (entry.type === 'link') {
              const active = isActive(pathname, entry.href);
              return (
                <div key={entry.title} className="space-y-1">
                  <Link
                    href={entry.href}
                    className={`block rounded-md px-2 py-1.5 font-medium no-underline transition-colors ${
                      active
                        ? 'bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-50'
                    }`}
                  >
                    {entry.title}
                  </Link>
                  {entry.description && (
                    <div className="px-2 text-xs leading-5 text-neutral-500 dark:text-neutral-500">{entry.description}</div>
                  )}
                </div>
              );
            }

            return (
              <div key={entry.title} className="space-y-2">
                <div className="px-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100">{entry.title}</div>
                <div className="space-y-1">
                  {entry.items.map((item, itemIndex) => {
                    const active = isActive(pathname, item.href) && entry.items.findIndex((candidate) => candidate.href === item.href) === itemIndex;
                    const needsDivider = entry.title === 'S7AR Baby' && [4, 9, 11].includes(itemIndex);

                    return (
                      <div key={`${item.title}-${itemIndex}`}>
                        {needsDivider && <div className="my-3 border-t border-neutral-200 dark:border-neutral-800" />}
                        <Link
                          href={item.href}
                          className={`block rounded-md px-2 py-1.5 no-underline transition-colors ${
                            active
                              ? 'bg-neutral-100 font-medium text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50'
                              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
