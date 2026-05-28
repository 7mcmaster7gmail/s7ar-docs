export default function QuickStartPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>Quick Start</h1>
        <p>
          Get up and running with S7AR in just a few minutes.
        </p>
        <h2>Basic Setup</h2>
        <pre><code className="language-javascript">{`import { S7AR } from 's7ar';

const app = new S7AR();
app.initialize();`}</code></pre>
        <h2>Hello World</h2>
        <pre><code className="language-javascript">{`app.hello('World');
// Output: Hello, World!`}</code></pre>
        <h2>Next Steps</h2>
        <ul>
          <li>Read the API documentation</li>
          <li>Explore the examples</li>
          <li>Check out the guides</li>
        </ul>
      </div>
    </div>
  );
}