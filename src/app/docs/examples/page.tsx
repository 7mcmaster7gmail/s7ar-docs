export default function ExamplesPage() {
  return (
    <article className="prose-nextra">
        <h1>Examples</h1>
        <p>
          Practical examples to help you get started with S7AR.
        </p>
        <h2>Basic Example</h2>
        <pre><code className="language-javascript">{`import { S7AR } from 's7ar';

const app = new S7AR();
app.start();`}</code></pre>
        <h2>Advanced Example</h2>
        <p>For more advanced use cases, see the guides section.</p>
    </article>
  );
}