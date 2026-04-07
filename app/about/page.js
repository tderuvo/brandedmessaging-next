import Link from 'next/link';

export const metadata = { title: 'About Us — Branded Messaging' };

export default function About() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Our Story</div>
        <h1>The organization behind<br /><em>Branded Messaging.</em></h1>
        <p>We&apos;re a North American organization on a mission to make RCS the new standard for business messaging — accessible, understandable, and powerful for every brand.</p>
      </div>

      {/* Mission */}
      <div className="card card-lg card-accent mission">
        <h2>Our Mission</h2>
        <p>
          RCS (Rich Communication Services) is the biggest upgrade to mobile messaging in a
          generation — but most businesses don&apos;t know it exists. We&apos;re here to change that.{' '}
          <strong>Branded Messaging</strong> is our people-friendly name for RCS: verified senders,
          rich media, action buttons, and real read receipts — all inside the native messaging app
          your customers already use every day. We promote, educate, and deploy RCS across North
          America so brands can finally have <strong>conversations worth having.</strong>
        </p>
      </div>

      {/* Pillars */}
      <p className="section-title">What We Do</p>
      <div className="pillars">
        <div className="card pillar">
          <div className="pillar-icon" style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(59,130,246,0.2)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>A2P Newsletter</h3>
          <p>Weekly intelligence on A2P messaging trends, carrier updates, RCS rollouts, and campaign benchmarks across the US and Canada.</p>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{background:'rgba(6,182,212,0.1)',border:'1px solid rgba(6,182,212,0.2)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Campaign Guides</h3>
          <p>Hands-on playbooks for designing rich cards, building verified sender flows, and measuring what matters in RCS campaigns.</p>
        </div>
        <div className="card pillar">
          <div className="pillar-icon" style={{background:'rgba(99,102,241,0.1)',border:'1px solid rgba(99,102,241,0.2)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>RCS Managed Services</h3>
          <p>End-to-end brand registration, campaign setup, carrier coordination, and ongoing optimization for businesses going live.</p>
        </div>
      </div>

      {/* Why RCS */}
      <div className="why-grid">
        <div className="why-content">
          <p className="section-title">Why RCS</p>
          <h2>SMS was built for<br /><em>a different era.</em></h2>
          <p>Plain text. No branding. No verification. No idea if the message was even read. Businesses have been sending millions of messages into a black box.</p>
          <p>RCS changes everything. Your brand name, logo, and colors appear right in the conversation. Customers know exactly who they&apos;re talking to — and you finally get the engagement data to prove it&apos;s working.</p>
          <div className="stat-row">
            <div className="stat"><div className="stat-num">3×</div><div className="stat-label">Higher engagement vs SMS</div></div>
            <div className="stat"><div className="stat-num">1B+</div><div className="stat-label">RCS-enabled devices globally</div></div>
            <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Native app — no install needed</div></div>
          </div>
        </div>

        <div className="card why-visual">
          <div className="compare-row compare-header">
            <div className="compare-label"></div>
            <div className="compare-sms">Plain SMS</div>
            <div className="compare-rcs">RCS / Branded</div>
          </div>
          {[
            ['Sender name',   'Phone number',           'Your brand name'],
            ['Brand logo',    'None',                   'Verified logo'],
            ['Rich media',    'No',                     'Images, cards, carousels'],
            ['Action buttons','No',                     'Tap-to-pay, links, calls'],
            ['Read receipts', 'No',                     'Yes'],
            ['Verification',  'None',                   'Carrier-verified ✓'],
          ].map(([label, sms, rcs]) => (
            <div className="compare-row" key={label}>
              <div className="compare-label">{label}</div>
              <div className="compare-sms">{sms}</div>
              <div className="compare-rcs">{rcs}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <p className="section-title">The Team</p>
      <div className="team-grid">
        <div className="card team-card">
          <div className="team-avatar" style={{background:'linear-gradient(135deg,#3b82f6,#06b6d4)'}}>AD</div>
          <h3>Antonio De Ruvo</h3>
          <div className="role">Founder &amp; CEO</div>
          <p>15 years in mobile messaging and A2P infrastructure across North American carriers. Passionate about making rich messaging accessible to every business.</p>
        </div>
        <div className="card team-card">
          <div className="team-avatar" style={{background:'linear-gradient(135deg,#6366f1,#3b82f6)'}}>MT</div>
          <h3>Messaging Team</h3>
          <div className="role">Campaign Strategists</div>
          <p>Our in-house team of A2P specialists and RCS campaign designers have launched hundreds of branded messaging programs across retail, finance, and healthcare.</p>
        </div>
        <div className="card team-card">
          <div className="team-avatar" style={{background:'linear-gradient(135deg,#06b6d4,#6366f1)'}}>+</div>
          <h3>We&apos;re Hiring</h3>
          <div className="role">Join the Team</div>
          <p>We&apos;re building something important. If you&apos;re excited about the future of mobile messaging and want to help shape it, we&apos;d love to hear from you.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="card card-lg cta-strip">
        <div>
          <h2>Ready to explore Branded Messaging?</h2>
          <p>Get in touch — we&apos;ll walk you through what RCS can do for your business.</p>
        </div>
        <Link href="/contact" className="btn-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Contact Us
        </Link>
      </div>

    </div>
  );
}
