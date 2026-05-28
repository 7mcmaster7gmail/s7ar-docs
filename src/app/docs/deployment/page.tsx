export default function DeploymentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="prose dark:prose-dark max-w-none">
        <h1>Deployment</h1>
        <p>
          Deploy your S7AR applications to production.
        </p>
        <h2>Vercel Deployment</h2>
        <p>Deploy to Vercel with a single click:</p>
        <pre><code className="language-bash">vercel deploy</code></pre>
        <h2>Docker Deployment</h2>
        <p>Deploy using Docker for containerized environments.</p>
      </div>
    </div>
  );
}