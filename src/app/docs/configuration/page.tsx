export default function ConfigurationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>Configuration</h1>
        <p>
          Configure S7AR to suit your needs.
        </p>
        <h2>Configuration Options</h2>
        <pre><code className="language-javascript">{
  debug: true,
  timeout: 5000,
  retries: 3
}</code></pre>
        <h2>Environment Variables</h2>
        <p>Use environment variables for sensitive configuration.</p>
      </div>
    </div>
  );
}