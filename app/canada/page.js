import Link from 'next/link';

export const metadata = {
  title: 'Branded Messaging in Canada — Canadian Market Insights',
  description: 'Independent insights on branded messaging, RCS adoption, and verified business messaging in Canada. Covering Canadian carriers, A2P messaging trends, and business messaging strategy for the Canadian market.',
  alternates: { canonical: 'https://brandedmessaging.com/canada' },
  openGraph: {
    url: 'https://brandedmessaging.com/canada',
    title: 'Branded Messaging in Canada',
    description: 'Independent insights on branded messaging, RCS adoption, and verified business messaging in Canada.',
  },
};

export default function Canada() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Canadian Market</div>
        <h1>Branded messaging in <em>Canada.</em></h1>
        <p>
          Independent analysis of how branded messaging, RCS, and verified business
          communication are evolving across the Canadian market — and what it means
          for businesses operating in Canada today.
        </p>
      </div>

      <div className="card card-lg card-accent mission">
        <h2>The Canadian Opportunity</h2>
        <p>
          Canada is an underserved but strategically significant market in the North American
          messaging landscape. While much of the industry conversation centres on US scale,
          the Canadian market offers distinct advantages for businesses that move early:
          lower competitive noise, a customer base that already values trust and verification,
          and a carrier ecosystem that is actively advancing its capabilities.
        </p>
        <p>
          For Canadian businesses, the shift from anonymous SMS to verified, branded messaging
          is not just a technical upgrade — it is a customer experience decision. Customers who
          receive a message from a name they recognize, with a logo they know, and an action
          they can take immediately, respond differently than customers receiving a text from
          an unknown number.
        </p>
      </div>

      <p className="section-title">Key Areas of Coverage</p>
      <div className="pillars">

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1.42 9a16 16 0 0121.16 0"/>
              <path d="M5 12.55a11 11 0 0114.08 0"/>
              <path d="M10.54 16.1a6 6 0 012.92 0"/>
              <circle cx="12" cy="20" r="1" fill="#c41230"/>
            </svg>
          </div>
          <h3>Canadian Carrier Developments</h3>
          <p>
            We track how Canadian carriers are advancing RCS and branded messaging capabilities,
            and what that means for delivery, reach, and campaign planning.
          </p>
          <Link href="/canadian-carrier-insights" style={{ fontSize: '0.82rem', color: 'var(--red)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '0.8rem' }}>
            Canadian Carrier Insights →
          </Link>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(26,74,138,0.07)', border: '1px solid rgba(26,74,138,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>Canadian Business Messaging</h3>
          <p>
            Practical guidance for Canadian businesses exploring A2P messaging, brand
            registration, and the transition from plain SMS to verified, rich messaging.
          </p>
          <Link href="/canadian-business-messaging" style={{ fontSize: '0.82rem', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '0.8rem' }}>
            Business Messaging in Canada →
          </Link>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h3>Newsletter</h3>
          <p>
            The A2P Messaging Newsletter covers Canadian carrier updates, RCS rollout news,
            and business messaging trends alongside broader North American developments.
          </p>
          <Link href="/newsletter" style={{ fontSize: '0.82rem', color: 'var(--red)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '0.8rem' }}>
            Subscribe →
          </Link>
        </div>

      </div>

      <div className="card card-lg card-accent mission" style={{ marginBottom: '2rem' }}>
        <h2>North American Context, Canadian Focus</h2>
        <p>
          Branded Messaging covers North America broadly — but we give the Canadian market
          dedicated attention. Canada&apos;s regulatory environment under the{' '}
          <em>Canadian Radio-television and Telecommunications Commission</em> (CRTC),
          its distinct carrier landscape, and the evolving compliance requirements under
          CASL all shape how business messaging programs need to be designed and managed
          for Canadian audiences.
        </p>
        <p>
          Whether you are a Canadian business exploring RCS for the first time, a messaging
          provider entering the Canadian market, or a North American brand managing campaigns
          across both countries, the Canadian context matters — and we cover it.
        </p>
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Ready to explore campaign strategy?</h2>
          <p>Our guides cover rich card design, verified sender flows, and SMS fallback — all relevant to Canadian and North American campaigns.</p>
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
