import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>
          &copy; 2026 <Link href="/">brandedmessaging.org</Link> &mdash; Promoting RCS &amp; A2P Messaging across North America.
        </span>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
