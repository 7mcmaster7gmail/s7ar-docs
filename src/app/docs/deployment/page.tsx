export default function DeploymentPage() {
  return (
    <article className="prose-nextra">
        <h1>Deployment</h1>
        <p>
          Deploy your S7AR applications to production.
        </p>
        <h2>Vercel Deployment</h2>
        <p>Deploy to Vercel with a single click:</p>
        <pre><code className="language-bash">vercel deploy</code></pre>
        <h2>Docker Deployment</h2>
        <p>Deploy using Docker for containerized environments.</p>
    </article>
  );
}