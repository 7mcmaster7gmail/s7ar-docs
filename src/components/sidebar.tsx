'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Folder } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { docsNavigation, findActiveFolderTitles, type DocNavigationNode } from './docs-navigation';

function isActive(pathname: string, href: string) {
  return pathname === href;
}

type SidebarNodeProps = {
  node: DocNavigationNode;
  pathname: string;
  openFolders: string[];
  toggleFolder: (title: string) => void;
  depth?: number;
};

function SidebarNode({ node, pathname, openFolders, toggleFolder, depth = 0 }: SidebarNodeProps) {
  if (node.type === 'divider') {
    return <div className="my-4 border-t border-neutral-200 dark:border-neutral-800" />;
  }

  const indent = depth > 0 ? { paddingLeft: `${depth * 0.75 + 0.5}rem` } : undefined;

  if (node.type === 'page') {
    const active = isActive(pathname, node.href);

    return (
      <div className="space-y-1">
        <Link
          href={node.href}
          style={indent}
          className={`block rounded-md px-2 py-1.5 no-underline transition-colors ${
            active
              ? 'bg-neutral-100 font-medium text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50'
          }`}
        >
          {node.title}
        </Link>
        {node.description && <div className="px-2 text-xs leading-5 text-neutral-500 dark:text-neutral-500">{node.description}</div>}
      </div>
    );
  }

  const isOpen = openFolders.includes(node.title);

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => toggleFolder(node.title)}
        style={indent}
        className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-xs font-semibold text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-900"
        aria-expanded={isOpen}
      >
        <ChevronRight size={14} className={`shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        <Folder size={14} className="shrink-0 text-neutral-500 dark:text-neutral-500" />
        <span className="truncate">{node.title}</span>
      </button>

      {isOpen && (
        <div className="space-y-1">
          {node.children.map((child, index) => (
            <SidebarNode
              key={`${node.title}-${child.type}-${'title' in child ? child.title : index}`}
              node={child}
              pathname={pathname}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const activeFolders = useMemo(() => findActiveFolderTitles(pathname), [pathname]);
  const [openFolders, setOpenFolders] = useState<string[]>(['文章', 'S7AR Baby', ...activeFolders]);

  useEffect(() => {
    setOpenFolders((current) => Array.from(new Set([...current, ...activeFolders])));
  }, [activeFolders]);

  const toggleFolder = (title: string) => {
    setOpenFolders((current) => (current.includes(title) ? current.filter((item) => item !== title) : [...current, title]));
  };

  return (
    <aside className="hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto bg-white dark:bg-neutral-950 lg:block">
      <nav className="px-4 py-6 text-sm">
        <div className="space-y-2">
          {docsNavigation.map((node, index) => (
            <SidebarNode
              key={`${node.type}-${'title' in node ? node.title : index}`}
              node={node}
              pathname={pathname}
              openFolders={openFolders}
              toggleFolder={toggleFolder}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
