export default function InstallationPage() {
  return (
    <article className="prose-nextra">
        <h1>Installation</h1>
        <p>
          Get started with S7AR by installing it via your package manager.
        </p>
        <h2>Using npm</h2>
        <pre><code className="language-bash">npm install s7ar</code></pre>
        <h2>Using yarn</h2>
        <pre><code className="language-bash">yarn add s7ar</code></pre>
        <h2>Using pnpm</h2>
        <pre><code className="language-bash">pnpm add s7ar</code></pre>
        <h2>Verify Installation</h2>
        <p>Verify that S7AR is installed correctly:</p>
        <pre><code className="language-bash">npm list s7ar</code></pre>
        <p>You should see the version number displayed in the output.</p>
    </article>
  );
}