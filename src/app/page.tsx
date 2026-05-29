import Link from 'next/link';

export default function Home() {
  return (
    <article className="prose-nextra">
      <div className="breadcrumb">Home</div>
      <h1>Introduction</h1>
      <p>Welcome to S7AR Docs!</p>

      <h2 id="write-anything-you-want">Write Anything You Want!</h2>
      <p>
        <Link href="/docs" className="doc-link">
          总览
        </Link>
      </p>

      <footer className="doc-footer">© 2026 S7AR Docs.</footer>
    </article>
  );
}
