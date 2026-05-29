'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { flattenDocPages } from './docs-navigation';

const docPages = flattenDocPages();

export function ArticlePagination() {
  const pathname = usePathname();
  const currentIndex = docPages.findIndex((page) => page.href === pathname);

  if (currentIndex === -1) {
    return null;
  }

  const previous = docPages[currentIndex - 1];
  const next = docPages[currentIndex + 1];

  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="mx-auto mt-12 grid max-w-3xl gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:grid-cols-2" aria-label="Article pagination">
      {previous ? (
        <Link
          href={previous.href}
          className="group rounded-lg border border-neutral-200 px-4 py-3 no-underline transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <div className="mb-1 flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-500">
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Previous
          </div>
          <div className="font-medium text-neutral-950 dark:text-neutral-50">{previous.title}</div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="group rounded-lg border border-neutral-200 px-4 py-3 text-right no-underline transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <div className="mb-1 flex items-center justify-end gap-1 text-xs text-neutral-500 dark:text-neutral-500">
            Next
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </div>
          <div className="font-medium text-neutral-950 dark:text-neutral-50">{next.title}</div>
        </Link>
      )}
    </nav>
  );
}
