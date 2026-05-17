import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Branded Messaging',
  description: 'How Branded Messaging collects, uses, and protects your personal information in compliance with PIPEDA and applicable Canadian privacy law.',
};

const EFFECTIVE = 'May 16, 2026';

export default function Privacy() {
  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Legal</div>
        <h1>Privacy <em>Policy</em></h1>
        <p>
          We take your privacy seriously. This policy explains what personal information we
          collect, how we use it, and how we protect it — in plain language.
        </p>
        <p style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--muted-light)' }}>
          Effective date: {EFFECTIVE}
        </p>
      </div>

      <div className="legal-body">

        <div className="card legal-section">
          <h2>1. Who We Are</h2>
          <p>
            This privacy policy applies to <strong>Branded Messaging</strong>, an independent
            educational and professional services organization operating at{' '}
            <strong>brandedmessaging-next.com</strong> and <strong>brandedmessaging.org</strong>.
            We are based in Canada and are subject to the{' '}
            <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and
            applicable provincial privacy legislation.
          </p>
          <p>
            For privacy inquiries, contact us at{' '}
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>.
          </p>
        </div>

        <div className="card legal-section">
          <h2>2. Information We Collect</h2>
          <p>We collect personal information only when you voluntarily provide it:</p>
          <ul>
            <li>
              <strong>Email address</strong> — when you subscribe to our newsletter or join
              the waitlist.
            </li>
            <li>
              <strong>Name and email address</strong> — when you submit a contact or inquiry
              form.
            </li>
            <li>
              <strong>Message content</strong> — the details you include in a contact form
              submission, including company name, topic, and message body.
            </li>
          </ul>
          <p>
            We do not collect payment information, government identification, or sensitive
            personal data. We do not create user accounts.
          </p>
        </div>

        <div className="card legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information you provide solely to:</p>
          <ul>
            <li>Send you the A2P Messaging Newsletter and related updates you subscribed to.</li>
            <li>Respond to your contact or inquiry form submissions.</li>
            <li>Provide information about our managed services if you have requested it.</li>
            <li>Improve our content and services based on aggregate, non-identifying feedback.</li>
          </ul>
          <p>
            We will never use your email address for purposes unrelated to why you provided it,
            and we will never sell, rent, or trade your personal information to any third party.
          </p>
        </div>

        <div className="card legal-section">
          <h2>4. Legal Basis for Processing</h2>
          <p>
            Under PIPEDA, we rely on your <strong>consent</strong> as the legal basis for
            collecting and using your personal information. You provide consent when you
            voluntarily submit a form or subscribe to our newsletter.
          </p>
          <p>
            You may withdraw your consent at any time. To do so, unsubscribe via the link in
            any newsletter email or contact us directly at{' '}
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>.
            Withdrawal of consent will not affect any processing that occurred prior to
            your request.
          </p>
        </div>

        <div className="card legal-section">
          <h2>5. Email Marketing &amp; Unsubscribing</h2>
          <p>
            If you have subscribed to the A2P Messaging Newsletter, you will receive periodic
            emails covering industry trends, carrier updates, RCS insights, and campaign
            resources. These emails will always include a clear, functional unsubscribe link.
          </p>
          <p>
            We comply with Canada&apos;s <em>Anti-Spam Legislation</em> (CASL). We will only send
            commercial electronic messages to individuals who have given express or implied
            consent, and we will honour all unsubscribe requests within 10 business days.
          </p>
        </div>

        <div className="card legal-section">
          <h2>6. Data Retention</h2>
          <p>
            We retain your email address for as long as you remain subscribed to our newsletter
            or have an active relationship with us. Contact form submissions may be retained
            for up to 24 months for the purpose of following up on your inquiry.
          </p>
          <p>
            Upon request, we will delete your personal information from our records within a
            reasonable timeframe, subject to any legal obligations that may require us to
            retain certain records.
          </p>
        </div>

        <div className="card legal-section">
          <h2>7. Cookies &amp; Analytics</h2>
          <p>
            This website may use standard browser cookies and privacy-respecting analytics
            tools to understand general usage patterns — such as which pages are visited most
            frequently. These tools collect aggregate, anonymized data and do not identify
            individual visitors.
          </p>
          <p>
            We do not use third-party advertising cookies or behavioural tracking technologies.
            You may disable cookies in your browser settings at any time; doing so may affect
            some functionality of the site.
          </p>
        </div>

        <div className="card legal-section">
          <h2>8. Third-Party Service Providers</h2>
          <p>
            We may use trusted third-party services to help operate this website and send
            newsletters — for example, email delivery platforms and hosting providers. These
            service providers are permitted to process your information only as necessary to
            perform services on our behalf, and they are contractually required to protect it.
          </p>
          <p>
            Some of these providers may be located outside Canada, including in the United
            States. By using this site, you acknowledge that your information may be processed
            in jurisdictions with different privacy laws than your own.
          </p>
        </div>

        <div className="card legal-section">
          <h2>9. Your Rights</h2>
          <p>Under PIPEDA and applicable Canadian law, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Withdraw consent and request deletion of your personal information.</li>
            <li>File a complaint with the Office of the Privacy Commissioner of Canada
                if you believe your privacy rights have been violated.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>.
            We will respond within 30 days.
          </p>
        </div>

        <div className="card legal-section">
          <h2>10. Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your personal
            information from unauthorized access, loss, or disclosure. This includes using
            secure connections (HTTPS) for all data transmission.
          </p>
          <p>
            No method of transmission over the internet is completely secure. While we strive
            to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        <div className="card legal-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or legal obligations. The &ldquo;Effective date&rdquo; at the top of this page
            will indicate when the policy was last revised. We encourage you to review this
            page periodically.
          </p>
          <p>
            For material changes, we will make reasonable efforts to notify newsletter
            subscribers by email.
          </p>
        </div>

        <div className="card legal-section">
          <h2>12. Contact &amp; Complaints</h2>
          <p>
            For any questions, concerns, or requests related to this Privacy Policy or the
            handling of your personal information, please contact:
          </p>
          <p>
            <strong>Branded Messaging — Privacy Inquiries</strong><br />
            <a href="mailto:hello@brandedmessaging.org" className="legal-link">
              hello@brandedmessaging.org
            </a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            If you are not satisfied with our response, you may contact the{' '}
            <strong>Office of the Privacy Commissioner of Canada</strong> at{' '}
            <strong>priv.gc.ca</strong>.
          </p>
        </div>

      </div>

      <div className="legal-footer-nav">
        <Link href="/terms" className="btn-secondary">
          View Terms &amp; Conditions →
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us →
        </Link>
      </div>

    </div>
  );
}
