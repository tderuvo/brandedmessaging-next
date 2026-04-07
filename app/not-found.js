import Link from 'next/link';

export const metadata = { title: '404 — Branded Messaging' };

export default function NotFound() {
  return (
    <div className="page-404">
      <div className="page-404-num">404</div>
      <h1>Page not found</h1>
      <p>That page doesn&apos;t exist. Head back home.</p>
      <Link href="/" className="btn-primary">← Back to Home</Link>
    </div>
  );
}
