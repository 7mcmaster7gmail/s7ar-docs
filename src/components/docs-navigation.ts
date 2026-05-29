export type DocPage = {
  type: 'page';
  title: string;
  href: string;
  description?: string;
};

export type DocFolder = {
  type: 'folder';
  title: string;
  children: DocNavigationNode[];
};

export type DocDivider = {
  type: 'divider';
};

export type DocNavigationNode = DocPage | DocFolder | DocDivider;

export const docsNavigation: DocNavigationNode[] = [
  {
    type: 'page',
    title: 'Home',
    href: '/docs',
    description: 'Write Anything You Want!',
  },
  {
    type: 'folder',
    title: '文章',
    children: [
      {
        type: 'folder',
        title: 'S7AR Baby',
        children: [
          { type: 'page', title: '总览', href: '/docs' },
          { type: 'page', title: '早期', href: '/docs/quick-start' },
          { type: 'page', title: '中期', href: '/docs/installation' },
          { type: 'page', title: '后期', href: '/docs/configuration' },
        ],
      },
      {
        type: 'folder',
        title: '孕期指南',
        children: [
          { type: 'page', title: '饮食禁忌', href: '/docs/guides' },
          { type: 'page', title: '用药指南', href: '/docs/api' },
          { type: 'page', title: '产检时间表', href: '/docs/components' },
          { type: 'page', title: '孕期运动', href: '/docs/performance' },
        ],
      },
      {
        type: 'folder',
        title: '资料整理',
        children: [
          { type: 'page', title: '知识总结', href: '/docs/examples' },
          { type: 'page', title: '食谱总表', href: '/docs/deployment' },
        ],
      },
    ],
  },
  { type: 'divider' },
  {
    type: 'folder',
    title: 'Docker',
    children: [
      { type: 'page', title: '开始1', href: '/docs/installation' },
      { type: 'page', title: 'Docker Test', href: '/docs/deployment' },
    ],
  },
  {
    type: 'folder',
    title: 'MacOS',
    children: [{ type: 'page', title: 'Shapr3d', href: '/docs/components' }],
  },
];

export function flattenDocPages(nodes: DocNavigationNode[] = docsNavigation): DocPage[] {
  return nodes.flatMap((node) => {
    if (node.type === 'page') {
      return [node];
    }

    if (node.type === 'folder') {
      return flattenDocPages(node.children);
    }

    return [];
  });
}

export function findActiveFolderTitles(pathname: string, nodes: DocNavigationNode[] = docsNavigation): string[] {
  for (const node of nodes) {
    if (node.type !== 'folder') {
      continue;
    }

    const hasDirectActiveChild = node.children.some((child) => child.type === 'page' && child.href === pathname);
    const nestedActiveFolders = findActiveFolderTitles(pathname, node.children);

    if (hasDirectActiveChild || nestedActiveFolders.length > 0) {
      return [node.title, ...nestedActiveFolders];
    }
  }

  return [];
}
