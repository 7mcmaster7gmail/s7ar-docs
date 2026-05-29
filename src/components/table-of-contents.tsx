const tocItems = ['Write Anything You Want!'];

export function TableOfContents() {
  return (
    <aside className="hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto px-6 py-8 xl:block">
      <div className="sticky top-8">
        <p className="mb-3 text-xs font-semibold text-neutral-900 dark:text-neutral-100">On This Page</p>
        <nav className="space-y-2 border-l border-neutral-200 pl-4 text-xs dark:border-neutral-800">
          {tocItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="block text-neutral-500 no-underline hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-neutral-50"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
