import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>
          &copy; 2026 <Link href="/">Branded Messaging</Link> &mdash; The human-friendly side of RCS across North America.
        </span>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/what-is-branded-messaging">What Is Branded Messaging</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/managed-services">Managed Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
