export default function ConfigurationPage() {
  return (
    <article className="prose-nextra">
        <h1>Configuration</h1>
        <p>
          Configure S7AR to suit your needs.
        </p>
        <h2>Configuration Options</h2>
        <pre><code className="language-javascript">{`{
  debug: true,
  timeout: 5000,
  retries: 3
}`}</code></pre>
        <h2>Environment Variables</h2>
        <p>Use environment variables for sensitive configuration.</p>
    </article>
  );
}