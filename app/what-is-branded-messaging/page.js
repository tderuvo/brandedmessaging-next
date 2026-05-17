import Link from 'next/link';

export const metadata = {
  title: 'What Is Branded Messaging? — The Human-Friendly Side of RCS',
  description: 'Branded Messaging is the upgrade from anonymous business texts to trusted, recognizable customer conversations powered by RCS, verified sender identity, and SMS fallback.',
};

export default function WhatIsBrandedMessaging() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">The Basics</div>
        <h1>What is <em>Branded Messaging?</em></h1>
        <p>
          The upgrade from anonymous business texts to trusted, recognizable conversations —
          powered by verified sender identity, richer content, and intelligent SMS fallback.
        </p>
      </div>

      <div className="card card-lg card-accent mission">
        <h2>The Simple Explanation</h2>
        <p>
          Branded Messaging is the upgrade from anonymous business texts to trusted, recognizable
          customer conversations. Instead of sending from a short code or unknown number alone,
          brands can show up with <strong>verified identity</strong>, richer content, logos,
          suggested actions, and a more useful customer experience.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Technologies like <strong>RCS (Rich Communication Services)</strong> help power this
          richer experience, while <strong>SMS fallback</strong> helps preserve reach when rich
          delivery is not available.
        </p>
      </div>

      <div className="why-grid" style={{ marginTop: '3rem' }}>
        <div className="why-content">
          <p className="section-title">Why It Matters</p>
          <h2>SMS was built for <em>a different era.</em></h2>
          <p>Plain text, no branding, no verification. Customers receive messages from unknown numbers and have no way to confirm they are legitimate. Branded Messaging solves that.</p>
          <p>With verified sender identity, customers see a brand name, logo, and recognizable presentation — not just a number. That recognition builds trust, and trust drives action.</p>
          <div className="stat-row">
            <div className="stat"><div className="stat-num">3×</div><div className="stat-label">Higher engagement vs plain SMS</div></div>
            <div className="stat"><div className="stat-num">1B+</div><div className="stat-label">RCS-enabled devices globally</div></div>
          </div>
        </div>

        <div className="card why-visual">
          <div className="compare-row compare-header">
            <div className="compare-label"></div>
            <div className="compare-sms">Plain SMS</div>
            <div className="compare-rcs">Branded Messaging</div>
          </div>
          {[
            ['Sender name',    'Phone number',             'Your brand name'],
            ['Brand logo',     'None',                     'Verified logo'],
            ['Rich media',     'No',                       'Images, cards, carousels'],
            ['Action buttons', 'No',                       'Tap-to-act buttons'],
            ['Read receipts',  'No',                       'Yes'],
            ['Verification',   'None',                     'Carrier-verified ✓'],
            ['Fallback',       'Always SMS',               'SMS when RCS unavailable'],
          ].map(([label, sms, rcs]) => (
            <div className="compare-row" key={label}>
              <div className="compare-label">{label}</div>
              <div className="compare-sms">{sms}</div>
              <div className="compare-rcs">{rcs}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="section-title" style={{ marginTop: '3rem' }}>Key Concepts</p>
      <div className="pillars">
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3>RCS (Rich Communication Services)</h3>
          <p>The messaging standard that enables branded sender identity, rich media, action buttons, and read receipts — built into the native messaging app on supported devices.</p>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>A2P Messaging</h3>
          <p>Application-to-Person messaging is the category covering all business-to-consumer messages — from marketing campaigns to transaction alerts and appointment reminders.</p>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>SMS Fallback</h3>
          <p>When RCS is not available on a customer&apos;s device or network, a well-designed branded messaging campaign automatically falls back to SMS — preserving reach without sacrificing compliance.</p>
        </div>
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Ready to go deeper?</h2>
          <p>Explore our campaign strategy guides for practical playbooks on designing branded messaging programs that convert.</p>
        </div>
        <Link href="/guides" className="btn-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Explore Campaign Guides
        </Link>
      </div>

    </div>
  );
}
