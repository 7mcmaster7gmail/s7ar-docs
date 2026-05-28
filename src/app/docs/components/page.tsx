export default function ComponentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>Components</h1>
        <p>
          S7AR includes a collection of reusable components.
        </p>
        <h2>Button Component</h2>
        <p>A versatile button component for user interactions.</p>
        <pre><code className="language-jsx">&lt;Button&gt;Click me&lt;/Button&gt;</code></pre>
        <h2>Card Component</h2>
        <p>A flexible card component for content organization.</p>
        <pre><code className="language-jsx">&lt;Card&gt;Content here&lt;/Card&gt;</code></pre>
      </div>
    </div>
  );
}