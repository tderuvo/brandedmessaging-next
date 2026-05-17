import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-tagline">
          Independent insights on branded messaging across North America,
          with a special focus on the Canadian market.
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/what-is-branded-messaging">What Is Branded Messaging</Link>
          <Link href="/guides">Campaign Guides</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/managed-services">Managed Services</Link>
          <Link href="/canada">Canadian Market</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="socials">
          <a href="#" className="social-link" aria-label="X / Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:hello@brandedmessaging.org" className="social-link" aria-label="Email">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,13 22,4"/>
            </svg>
          </a>
        </div>
        <nav className="footer-legal" aria-label="Legal">
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <p className="footer-copy">
          &copy; 2026 <Link href="/">Branded Messaging</Link> &mdash; The human-friendly side of RCS across North America. &middot; Built in Canada.
        </p>
      </div>
    </footer>
  );
}
