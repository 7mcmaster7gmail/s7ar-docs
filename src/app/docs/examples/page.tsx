export default function ExamplesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>Examples</h1>
        <p>
          Practical examples to help you get started with S7AR.
        </p>
        <h2>Basic Example</h2>
        <pre><code className="language-javascript">import { S7AR } from 's7ar';

const app = new S7AR();
app.start();</code></pre>
        <h2>Advanced Example</h2>
        <p>For more advanced use cases, see the guides section.</p>
      </div>
    </div>
  );
}