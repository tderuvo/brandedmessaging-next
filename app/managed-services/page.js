import Link from 'next/link';

export const metadata = {
  title: 'RCS Managed Services — Branded Messaging',
  description: 'End-to-end brand registration, RCS campaign setup, and delivery management across all major US and Canadian carriers.',
};

const SERVICES = [
  {
    title: 'Brand Registration',
    desc: 'We handle the full carrier registration process — brand verification, use-case approval, and sender ID setup across major US and Canadian networks.',
    stroke: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.22)',
  },
  {
    title: 'Campaign Setup & Design',
    desc: 'From rich card templates to suggested reply flows and action button logic — we build campaign experiences that work across devices and carriers.',
    stroke: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.22)',
  },
  {
    title: 'Carrier Coordination',
    desc: 'We manage relationships with major US and Canadian carriers so your campaigns launch on time and stay compliant with evolving A2P policies.',
    stroke: '#6366f1', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.22)',
  },
  {
    title: 'SMS Fallback Management',
    desc: 'Every campaign is built with a reliable SMS fallback so your message reaches customers even when RCS is not available on their device.',
    stroke: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)',
  },
  {
    title: 'Delivery & Performance Monitoring',
    desc: 'Ongoing delivery tracking, read-rate reporting, and engagement benchmarking so you always know how your campaigns are performing.',
    stroke: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)',
  },
  {
    title: 'Ongoing Optimization',
    desc: 'Monthly reviews of campaign performance with actionable recommendations — A/B testing, message timing, action button copy, and more.',
    stroke: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.2)',
  },
];

export default function ManagedServices() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">RCS Managed Services</div>
        <h1>End-to-end branded messaging, <em>done for you.</em></h1>
        <p>
          From brand registration to live campaign delivery — we handle the complexity of RCS
          and A2P messaging so your team can focus on the customer experience, not the carrier
          infrastructure.
        </p>
      </div>

      <p className="section-title">What Is Included</p>
      <div className="pillars">
        {SERVICES.map(({ title, desc, stroke, bg, border }) => (
          <div key={title} className="card pillar" style={{ borderColor: border }}>
            <div className="pillar-icon" style={{ background: bg, border: `1px solid ${border}` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="card card-lg card-accent mission" style={{ marginBottom: '2rem' }}>
        <h2>Who This Is For</h2>
        <p>
          Managed Services is designed for brands and enterprise messaging teams that want the
          full benefit of <strong>RCS and branded messaging</strong> without building carrier
          relationships or managing A2P compliance in-house. We work across retail, financial
          services, healthcare, travel, and logistics — any vertical where trusted, verified
          customer messaging creates measurable value.
        </p>
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Ready to get started?</h2>
          <p>Tell us about your messaging program and we&apos;ll walk you through what RCS Managed Services looks like for your business.</p>
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
