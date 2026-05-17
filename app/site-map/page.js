import Link from 'next/link';

export const metadata = {
  title: 'Site Map — BrandedMessaging.com',
  description: 'A visual overview of the BrandedMessaging.com site structure and key content areas.',
  alternates: { canonical: 'https://brandedmessaging.com/site-map' },
};

function SiteNode({ href, label, description, accent, special }) {
  return (
    <Link
      href={href}
      className={[
        'smap-node',
        accent === 'red'   ? 'smap-node-red'   : '',
        accent === 'blue'  ? 'smap-node-blue'  : '',
        accent === 'muted' ? 'smap-node-muted' : '',
        special            ? 'smap-node-special' : '',
      ].filter(Boolean).join(' ')}
    >
      <span className="smap-node-label">{label}</span>
      {description && <span className="smap-node-desc">{description}</span>}
      <span className="smap-node-path">{href}</span>
    </Link>
  );
}

function Connector() {
  return <div className="smap-connector" aria-hidden="true" />;
}

function GroupConnector() {
  return <div className="smap-group-connector" aria-hidden="true" />;
}

export default function SiteMap() {
  return (
    <div className="page-inner smap-page">

      <header className="smap-header">
        <p className="smap-domain">brandedmessaging.com</p>
        <h1 className="smap-title">Site Map</h1>
        <p className="smap-subtitle">A visual overview of the site structure and key content areas.</p>
        <p className="smap-print-hint">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print-ready — use your browser&rsquo;s Print function to save as PDF.
        </p>
      </header>

      {/* ── CHART ── */}
      <div className="smap-chart">

        {/* HOMEPAGE */}
        <div className="smap-row smap-row-home">
          <SiteNode
            href="/"
            label="Homepage"
            description="Hero, philosophy, use cases, trust pillars"
            accent="red"
            special
          />
        </div>

        <Connector />

        {/* LEVEL 1 — main sections */}
        <div className="smap-row smap-row-main">

          {/* Thought leadership */}
          <div className="smap-group">
            <SiteNode
              href="/the-fall-up-from-sms"
              label="The Fall Up From SMS"
              description="Signature thought leadership article"
              accent="red"
              special
            />
          </div>

          {/* What is */}
          <div className="smap-group">
            <SiteNode
              href="/what-is-branded-messaging"
              label="What Is Branded Messaging?"
              description="Explainer — RCS, A2P, SMS fallback"
            />
          </div>

          {/* Guides */}
          <div className="smap-group">
            <SiteNode
              href="/guides"
              label="Campaign Guides"
              description="Strategy guides for RCS campaigns"
            />
          </div>

          {/* Newsletter */}
          <div className="smap-group">
            <SiteNode
              href="/newsletter"
              label="Newsletter"
              description="A2P Messaging Newsletter — subscribe"
            />
          </div>

          {/* Managed Services */}
          <div className="smap-group">
            <SiteNode
              href="/managed-services"
              label="Managed Services"
              description="End-to-end RCS brand registration"
            />
          </div>

        </div>

        <Connector />

        {/* LEVEL 2 — Canada cluster + About/Contact + Legal */}
        <div className="smap-row smap-row-clusters">

          {/* Canada cluster */}
          <div className="smap-cluster smap-cluster-canada">
            <div className="smap-cluster-header">
              <span className="smap-cluster-label">Canadian Market</span>
            </div>
            <SiteNode
              href="/canada"
              label="Canada"
              description="Canadian messaging landscape"
              accent="red"
            />
            <GroupConnector />
            <div className="smap-cluster-children">
              <SiteNode
                href="/canadian-business-messaging"
                label="Canadian Business Messaging"
                description="A2P strategy for Canadian brands"
                accent="red"
              />
              <SiteNode
                href="/canadian-carrier-insights"
                label="Canadian Carrier Insights"
                description="RCS rollout &amp; carrier coverage"
                accent="red"
              />
            </div>
          </div>

          {/* About / Contact */}
          <div className="smap-cluster smap-cluster-about">
            <div className="smap-cluster-header">
              <span className="smap-cluster-label">Company</span>
            </div>
            <div className="smap-cluster-children smap-cluster-children-col">
              <SiteNode
                href="/about"
                label="About"
                description="Mission, team, why RCS"
                accent="blue"
              />
              <SiteNode
                href="/contact"
                label="Contact"
                description="Get in touch"
                accent="blue"
              />
            </div>
          </div>

          {/* Legal */}
          <div className="smap-cluster smap-cluster-legal">
            <div className="smap-cluster-header">
              <span className="smap-cluster-label">Legal</span>
            </div>
            <div className="smap-cluster-children smap-cluster-children-col">
              <SiteNode
                href="/terms"
                label="Terms &amp; Conditions"
                description="Site usage terms — Ontario, Canada"
                accent="muted"
              />
              <SiteNode
                href="/privacy"
                label="Privacy Policy"
                description="PIPEDA &amp; CASL compliant"
                accent="muted"
              />
            </div>
          </div>

        </div>

      </div>{/* /smap-chart */}

      {/* ── PAGE INDEX (print-friendly fallback) ── */}
      <div className="smap-index">
        <h2 className="smap-index-heading">All Pages</h2>
        <div className="smap-index-grid">
          {[
            { href: '/',                              label: 'Homepage',                     group: 'Core' },
            { href: '/the-fall-up-from-sms',          label: 'The Fall Up From SMS',         group: 'Thought Leadership' },
            { href: '/what-is-branded-messaging',     label: 'What Is Branded Messaging?',   group: 'Content' },
            { href: '/guides',                        label: 'Campaign Guides',              group: 'Content' },
            { href: '/newsletter',                    label: 'Newsletter',                   group: 'Content' },
            { href: '/managed-services',              label: 'Managed Services',             group: 'Services' },
            { href: '/canada',                        label: 'Canada',                       group: 'Canadian Market' },
            { href: '/canadian-business-messaging',   label: 'Canadian Business Messaging',  group: 'Canadian Market' },
            { href: '/canadian-carrier-insights',     label: 'Canadian Carrier Insights',    group: 'Canadian Market' },
            { href: '/about',                         label: 'About',                        group: 'Company' },
            { href: '/contact',                       label: 'Contact',                      group: 'Company' },
            { href: '/terms',                         label: 'Terms & Conditions',           group: 'Legal' },
            { href: '/privacy',                       label: 'Privacy Policy',               group: 'Legal' },
          ].map(({ href, label, group }) => (
            <Link key={href} href={href} className="smap-index-row">
              <span className="smap-index-group">{group}</span>
              <span className="smap-index-label">{label}</span>
              <span className="smap-index-path">{href}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
