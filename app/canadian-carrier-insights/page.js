import Link from 'next/link';

export const metadata = {
  title: 'Canadian Carrier Insights — RCS & A2P Messaging in Canada',
  description: 'Coverage of Canadian carrier developments in RCS, A2P messaging, and verified business messaging. Understanding the Canadian carrier landscape for North American messaging programs.',
  alternates: { canonical: 'https://brandedmessaging.com/canadian-carrier-insights' },
  openGraph: {
    url: 'https://brandedmessaging.com/canadian-carrier-insights',
    title: 'Canadian Carrier Insights',
    description: 'Coverage of Canadian carrier developments in RCS, A2P messaging, and verified business messaging.',
  },
};

export default function CanadianCarrierInsights() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Canadian Carriers</div>
        <h1>Canadian carrier <em>insights.</em></h1>
        <p>
          Understanding the Canadian carrier landscape is essential for any North American
          messaging program. This page covers how Canadian carriers are approaching RCS,
          A2P messaging, and branded business communication.
        </p>
      </div>

      <div className="card card-lg card-accent mission">
        <h2>The Canadian Carrier Context</h2>
        <p>
          Canada&apos;s wireless carrier market is concentrated among a small number of major
          national operators, with regional providers serving specific markets. This structure
          means that reaching broad Canadian coverage through A2P messaging requires working
          with the right aggregators and understanding how each carrier approaches message
          routing, delivery, and brand registration.
        </p>
        <p>
          Canadian carriers are advancing their capabilities in response to global RCS
          momentum — driven in part by adoption on major platforms and growing demand from
          enterprise customers for richer, more verifiable messaging experiences. The pace
          and shape of that evolution varies by carrier, which is why we track it closely.
        </p>
      </div>

      <p className="section-title">What We Track</p>
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
          <h3>RCS Rollout Status</h3>
          <p>
            We monitor Canadian carrier RCS enablement — which networks support rich
            messaging delivery, how device coverage is expanding, and what that means
            for campaign planning and SMS fallback strategy.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(26,74,138,0.07)', border: '1px solid rgba(26,74,138,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3>Brand Registration & Compliance</h3>
          <p>
            A2P messaging in Canada requires carrier-level brand registration and
            use-case approval. We cover how these processes work, what brands need
            to prepare, and how Canadian requirements differ from US 10DLC processes.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Delivery & Routing</h3>
          <p>
            Understanding how messages route through Canadian carrier networks — including
            aggregator relationships, short code versus long code options, and toll-free
            number usage — is foundational to building reliable Canadian messaging campaigns.
          </p>
        </div>

      </div>

      <div className="card card-lg card-accent mission" style={{ marginBottom: '2rem' }}>
        <h2>Cross-Border Considerations</h2>
        <p>
          Many North American brands run messaging programs that span both the US and Canada.
          These programs cannot simply treat Canada as an extension of a US campaign. Carrier
          routing, regulatory requirements under CASL, registration processes, and customer
          expectations differ meaningfully between markets.
        </p>
        <p>
          Effective cross-border branded messaging requires separate planning for Canadian
          audiences — including distinct sender registration, CASL-compliant opt-in flows,
          and an understanding of which Canadian carriers support the message features the
          campaign relies on.
        </p>
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Stay current on Canadian carrier news</h2>
          <p>The A2P Messaging Newsletter includes Canadian carrier updates alongside broader North American coverage.</p>
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
