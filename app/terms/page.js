import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions — Branded Messaging',
  description: 'Terms and conditions governing use of the Branded Messaging website, content, newsletter, and managed services.',
};

const EFFECTIVE = 'May 16, 2026';

export default function Terms() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Legal</div>
        <h1>Terms &amp; <em>Conditions</em></h1>
        <p>
          Please read these terms carefully before using this website or subscribing to any
          Branded Messaging service. By accessing this site you agree to be bound by these terms.
        </p>
        <p style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--muted-light)' }}>
          Effective date: {EFFECTIVE}
        </p>
      </div>

      <div className="legal-body">

        <div className="card legal-section">
          <h2>1. About This Site</h2>
          <p>
            This website is operated by <strong>Branded Messaging</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), an independent educational and professional services organization focused
            on RCS, A2P messaging, and branded business communication across North America.
            Our primary domain is <strong>brandedmessaging.com</strong> and we also operate
            under <strong>brandedmessaging.org</strong>.
          </p>
          <p>
            We are based in Canada and operate in accordance with the laws of the Province of
            Ontario and the applicable federal laws of Canada.
          </p>
        </div>

        <div className="card legal-section">
          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, subscribing to our newsletter, submitting a
            contact form, or engaging any managed service, you confirm that you have read,
            understood, and agree to be bound by these Terms &amp; Conditions and our{' '}
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>.
          </p>
          <p>
            If you do not agree with any part of these terms, you must not use this website or
            its services.
          </p>
        </div>

        <div className="card legal-section">
          <h2>3. Permitted Use</h2>
          <p>You may use this website for lawful purposes only. You agree not to:</p>
          <ul>
            <li>Reproduce, distribute, or republish any content from this site without prior written permission.</li>
            <li>Use the site in any way that could damage, disable, or impair its operation.</li>
            <li>Attempt to gain unauthorized access to any part of the site or its systems.</li>
            <li>Use automated tools to scrape, index, or harvest content without permission.</li>
            <li>Submit false, misleading, or fraudulent information through any form on this site.</li>
          </ul>
        </div>

        <div className="card legal-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, icons, layout, and
            code — is the property of Branded Messaging or its content contributors and is
            protected by applicable Canadian and international copyright laws.
          </p>
          <p>
            You may share or link to our articles and guides for non-commercial, informational
            purposes with attribution. Any other reproduction or commercial use requires our
            express written consent.
          </p>
        </div>

        <div className="card legal-section">
          <h2>5. Newsletter &amp; Email Communications</h2>
          <p>
            By subscribing to the A2P Messaging Newsletter or joining the waitlist, you consent
            to receive periodic email communications from Branded Messaging. These may include
            industry news, carrier updates, RCS adoption insights, campaign guides, and
            service announcements.
          </p>
          <p>
            You may unsubscribe at any time by clicking the unsubscribe link in any email we
            send, or by contacting us at{' '}
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>. We will process all unsubscribe requests promptly.
          </p>
        </div>

        <div className="card legal-section">
          <h2>6. Managed Services</h2>
          <p>
            Engagement with our RCS Managed Services — including brand registration, campaign
            setup, and carrier coordination — is subject to a separate services agreement
            provided at the time of engagement. These Terms &amp; Conditions apply to your general
            use of this website and do not constitute a services contract.
          </p>
        </div>

        <div className="card legal-section">
          <h2>7. Third-Party Links</h2>
          <p>
            This site may contain links to external websites operated by third parties, including
            carriers, industry organizations, and other resources. These links are provided for
            your convenience only. We do not endorse, control, or accept responsibility for
            the content or practices of any third-party site.
          </p>
        </div>

        <div className="card legal-section">
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
            without warranties of any kind, either express or implied. We do not warrant that
            the site will be uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>
          <p>
            Content published on this site is intended for general informational and educational
            purposes. It does not constitute legal, regulatory, technical, or carrier-specific
            advice. You should seek independent professional advice before making decisions based
            on information found here.
          </p>
        </div>

        <div className="card legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Branded Messaging and its contributors
            shall not be liable for any direct, indirect, incidental, special, or consequential
            damages arising from your use of — or inability to use — this website or its
            content, even if we have been advised of the possibility of such damages.
          </p>
        </div>

        <div className="card legal-section">
          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms &amp; Conditions at any time
            without prior notice. Changes will be effective upon posting to this page. The
            &ldquo;Effective date&rdquo; at the top of this page will reflect the date of the most
            recent revision. Continued use of the site following any changes constitutes
            your acceptance of the revised terms.
          </p>
        </div>

        <div className="card legal-section">
          <h2>11. Governing Law</h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the
            laws of the Province of Ontario and the applicable federal laws of Canada, without
            regard to conflict of law principles. Any disputes arising under these terms shall
            be subject to the exclusive jurisdiction of the courts of Ontario, Canada.
          </p>
        </div>

        <div className="card legal-section">
          <h2>12. Contact</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact us at:
          </p>
          <p>
            <strong>Branded Messaging</strong><br />
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>
          </p>
        </div>

      </div>

      <div className="legal-footer-nav">
        <Link href="/privacy" className="btn-secondary">
          View Privacy Policy →
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us →
        </Link>
      </div>

    </div>
  );
}
