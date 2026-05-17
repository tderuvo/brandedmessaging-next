import Link from 'next/link';

export const metadata = {
  title: 'Canadian Business Messaging — A2P, RCS & Branded Messaging in Canada',
  description: 'How Canadian businesses can modernize customer messaging with verified sender identity, RCS, and A2P campaigns. Strategy, compliance, and carrier context for the Canadian market.',
  alternates: { canonical: 'https://brandedmessaging.com/canadian-business-messaging' },
  openGraph: {
    url: 'https://brandedmessaging.com/canadian-business-messaging',
    title: 'Canadian Business Messaging',
    description: 'How Canadian businesses can modernize customer messaging with verified sender identity, RCS, and A2P campaigns.',
  },
};

export default function CanadianBusinessMessaging() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Canadian Market</div>
        <h1>Business messaging <em>in Canada.</em></h1>
        <p>
          How Canadian businesses across retail, banking, healthcare, and logistics are
          beginning to explore verified, branded messaging — and what makes the Canadian
          context distinct from the broader North American landscape.
        </p>
      </div>

      <div className="card card-lg card-accent mission">
        <h2>The Shift from Anonymous to Branded</h2>
        <p>
          Most Canadian businesses currently send A2P messages — appointment reminders,
          fraud alerts, order confirmations, delivery notifications — through short codes
          or long codes that tell the customer very little about who is sending. The
          recipient sees a number, not a name.
        </p>
        <p>
          Branded messaging changes that. With verified sender identity, a Canadian
          business can send messages that display its name, logo, and a clear relationship
          to the customer — the same way an email from a recognized brand looks different
          from an unknown sender. That recognition is not cosmetic; it directly affects
          whether customers engage, trust, and act on the message.
        </p>
      </div>

      <p className="section-title">What This Means for Canadian Businesses</p>
      <div className="pillars">

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3>CASL Compliance Context</h3>
          <p>
            Canada&apos;s Anti-Spam Legislation (CASL) governs commercial electronic messages
            including SMS and RCS. A2P messaging programs in Canada must be designed with
            consent, identification, and unsubscribe requirements built in from the start.
            Branded messaging, done correctly, supports CASL compliance by making sender
            identity clear and visible.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(26,74,138,0.07)', border: '1px solid rgba(26,74,138,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Carrier Registration in Canada</h3>
          <p>
            Sending A2P messages in Canada requires working with Canadian carriers or
            aggregators who have direct relationships with the major networks. Brand
            registration and use-case approval processes exist at the carrier level
            and must be completed before campaigns can go live.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillar-icon" style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.18)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41230" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h3>Campaign Design for Canadian Audiences</h3>
          <p>
            Effective A2P campaigns in Canada are built around clarity, brevity, and
            trust. Canadian consumers respond well to messages that are clearly
            identified, easy to act on, and simple to opt out of. Rich cards and
            action buttons reduce friction without adding confusion.
          </p>
        </div>

      </div>

      <div className="why-grid">
        <div className="why-content">
          <p className="section-title">Why Canadian Brands Should Move Now</p>
          <h2>Early movers in Canada have <em>room to lead.</em></h2>
          <p>
            The Canadian branded messaging market is earlier-stage than the US equivalent.
            That means less noise, fewer established incumbents, and a genuine opportunity
            for Canadian brands to define what good business messaging looks like in
            their category.
          </p>
          <p>
            Businesses that establish verified sender identity and build well-designed
            messaging programs now are building a customer experience asset that compounds
            over time — every message that arrives with a recognizable name and clear
            intent reinforces the brand relationship.
          </p>
        </div>

        <div className="card why-visual">
          <div className="compare-row compare-header">
            <div className="compare-label"></div>
            <div className="compare-sms">Plain SMS</div>
            <div className="compare-rcs">Branded Messaging</div>
          </div>
          {[
            ['Sender display',  'Unknown number',         'Verified brand name'],
            ['Logo visible',    'No',                     'Yes'],
            ['CASL alignment',  'Manual opt-out text',    'Structured & visible'],
            ['Action buttons',  'No',                     'One-tap actions'],
            ['SMS fallback',    'Default',                'Automatic fallback'],
            ['Recognition',     'Low',                    'High'],
          ].map(([label, sms, rcs]) => (
            <div className="compare-row" key={label}>
              <div className="compare-label">{label}</div>
              <div className="compare-sms">{sms}</div>
              <div className="compare-rcs">{rcs}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-lg cta-strip">
        <div>
          <h2>Learn the landscape</h2>
          <p>The A2P Messaging Newsletter covers Canadian carrier updates and business messaging strategy every week.</p>
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
