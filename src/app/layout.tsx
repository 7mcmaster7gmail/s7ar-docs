import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { TableOfContents } from '@/components/table-of-contents';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'S7AR Docs',
  description: 'S7AR documentation site',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            <div className="mx-auto flex max-w-[90rem]">
              <Sidebar />
              <main className="min-w-0 flex-1 px-6 py-8 sm:px-8 lg:px-12">
                {children}
              </main>
              <TableOfContents />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
