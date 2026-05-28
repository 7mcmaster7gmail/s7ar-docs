export default function APIPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>API Reference</h1>
        <p>
          Complete API reference for S7AR.
        </p>
        <h2>Core Methods</h2>
        <h3>initialize()</h3>
        <p>Initializes the S7AR application.</p>
        <pre><code className="language-javascript">app.initialize();</code></pre>
        <h3>configure(options)</h3>
        <p>Configure S7AR with custom options.</p>
        <pre><code className="language-javascript">app.configure({ debug: true });</code></pre>
        <h3>use(plugin)</h3>
        <p>Register a plugin with S7AR.</p>
        <pre><code className="language-javascript">app.use(myPlugin);</code></pre>
      </div>
    </div>
  );
}