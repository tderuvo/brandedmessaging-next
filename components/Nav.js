'use client';

import Link     from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="logo">
        <div className="logo-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  fill="white" fillOpacity="0.95"/>
            <circle cx="8.5"  cy="11" r="1.2" fill="#3b82f6"/>
            <circle cx="12"   cy="11" r="1.2" fill="#3b82f6"/>
            <circle cx="15.5" cy="11" r="1.2" fill="#3b82f6"/>
          </svg>
        </div>
        <div className="logo-text">
          <strong>Branded Messaging</strong>
          <span>brandedmessaging.org</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link href="/"        className={`nav-link ${path === '/'        ? 'active' : ''}`}>Home</Link>
        <Link href="/about"   className={`nav-link ${path === '/about'   ? 'active' : ''}`}>About</Link>
        <Link href="/contact" className={`nav-link ${path === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>

      <Link href="/contact" className="nav-cta">Get in Touch →</Link>
    </nav>
  );
}
