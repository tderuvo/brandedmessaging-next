import Link from 'next/link';

export const metadata = {
  title: 'Campaign Strategy Guides — Branded Messaging',
  description: 'Learn how to design rich cards, action buttons, and verified sender flows for RCS and A2P campaigns across North America.',
};

const GUIDES = [
  {
    label: 'Getting Started',
    title: 'Designing Your First Rich Card Campaign',
    desc: 'A step-by-step walkthrough of RCS rich card anatomy — hero image, title, description, and action buttons — with North American carrier specs.',
    color: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.22)', stroke: '#3b82f6',
  },
  {
    label: 'Sender Verification',
    title: 'Getting Your Brand Verified as a Trusted Sender',
    desc: 'How to complete brand registration with major US and Canadian carriers, what to expect from the approval process, and how to maintain good standing.',
    color: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.22)', stroke: '#06b6d4',
  },
  {
    label: 'Strategy',
    title: 'SMS Fallback: Keeping Campaigns Moving',
    desc: "How to design a message flow that delivers a rich RCS experience when available and falls back gracefully to SMS — so no customer gets left out.",
    color: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.22)', stroke: '#6366f1',
  },
  {
    label: 'Measurement',
    title: 'What to Measure in a Branded Messaging Campaign',
    desc: 'Delivery rate, read rate, suggested-action tap rate, and conversion lift — the metrics that matter and how to track them across carriers.',
    color: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', stroke: '#22c55e',
  },
  {
    label: 'Templates',
    title: 'Action Button Patterns That Convert',
    desc: 'Curated button copy, placement, and flow patterns for retail promotions, appointment reminders, banking alerts, and delivery notifications.',
    color: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', stroke: '#f59e0b',
  },
  {
    label: 'Compliance',
    title: 'A2P 10DLC and RCS Registration: What Brands Need to Know',
    desc: 'A plain-English overview of A2P 10DLC registration, use-case classification, and how RCS brand verification fits alongside it.',
    color: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.2)', stroke: '#ec4899',
  },
];

export default function Guides() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Campaign Strategy</div>
        <h1>Guides for <em>modern business messaging.</em></h1>
        <p>
          Practical playbooks for teams building RCS and A2P campaigns — from your first rich card
          to verified sender flows that convert across North America.
        </p>
      </div>

      <p className="section-title">All Guides</p>
      <div className="pillars">
        {GUIDES.map(({ label, title, desc, color, border, stroke }) => (
          <div key={title} className="card pillar" style={{ borderColor: border }}>
            <div className="pillar-icon" style={{ background: color, border: `1px solid ${border}` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: stroke, marginBottom: '0.4rem' }}>{label}</p>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Stay current with A2P trends</h2>
          <p>The weekly newsletter covers carrier updates, RCS rollouts, and campaign benchmarks across North America.</p>
        </div>
        <Link href="/newsletter" className="btn-primary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Subscribe to the Newsletter
        </Link>
      </div>

    </div>
  );
}
