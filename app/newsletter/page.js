'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">A2P Messaging Newsletter</div>
        <h1>Weekly intelligence for <em>modern messaging teams.</em></h1>
        <p>
          Carrier updates, RCS adoption milestones, campaign benchmarks, and A2P policy changes —
          delivered every week to businesses and messaging professionals across North America.
        </p>
      </div>

      <div className="card card-lg card-accent mission">
        <h2>What You&apos;ll Get Each Week</h2>
        <p>
          The A2P Messaging Newsletter covers what matters for teams running business messaging
          programs in the US and Canada. That means <strong>carrier policy updates</strong> before
          they affect your campaigns, <strong>RCS rollout news</strong> as more devices and
          operators come online, and <strong>practical campaign insights</strong> you can apply
          the week you receive them.
        </p>
      </div>

      <div className="pillars">
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>Carrier &amp; Operator Updates</h3>
          <p>Stay ahead of policy changes, A2P 10DLC updates, and RCS enablement announcements from major US and Canadian carriers.</p>
          <Link href="/newsletter/carrier-operator-updates" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--red)', textDecoration: 'none', marginTop: '0.8rem', display: 'inline-block' }}>Read more →</Link>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>RCS Adoption Trends</h3>
          <p>Monthly device and operator coverage updates so your team always knows where RCS rich delivery is available in North America.</p>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>Campaign Benchmarks</h3>
          <p>Real delivery, read, and engagement benchmarks across verticals — retail, finance, healthcare, and more.</p>
        </div>
      </div>

      <div className="card card-lg" style={{ padding: '2.5rem 3rem', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Join the waitlist</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.6rem', lineHeight: 1.7 }}>
          The newsletter launches alongside the full site in August 2026. Enter your email and
          we&apos;ll send the first issue the day we go live.
        </p>
        {submitted ? (
          <div className="success-msg" style={{ maxWidth: '440px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            You&apos;re on the list — first issue lands at launch.
          </div>
        ) : (
          <form className="notify-form" style={{ maxWidth: '440px' }} onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            <input type="email" placeholder="your@company.com" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        )}
        <p className="form-hint" style={{ marginTop: '0.7rem', marginBottom: 0 }}>For businesses, brands &amp; messaging professionals. No spam, ever.</p>
      </div>

    </div>
  );
}
