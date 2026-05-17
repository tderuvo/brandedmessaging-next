'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PhoneMockup from '@/components/PhoneMockup';

const LAUNCH = new Date('2026-08-01T00:00:00');
const pad    = n => String(n).padStart(2, '0');

function useCountdown() {
  const [time, setTime] = useState({ days:'00', hours:'00', mins:'00', secs:'00' });
  useEffect(() => {
    function tick() {
      const d = LAUNCH - new Date();
      if (d <= 0) return;
      setTime({
        days:  pad(Math.floor(d / 86400000)),
        hours: pad(Math.floor((d % 86400000) / 3600000)),
        mins:  pad(Math.floor((d % 3600000)  / 60000)),
        secs:  pad(Math.floor((d % 60000)    / 1000)),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const USE_CASES = [
  {
    title: 'Retail Promotions',
    desc: 'Deliver timely offers with rich visuals and tap-to-redeem action buttons that drive in-store and online conversions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.22)',
  },
  {
    title: 'Banking & Fraud Alerts',
    desc: 'Reach customers instantly with verified sender identity, so fraud notifications and transaction alerts feel trustworthy.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    color: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.22)',
  },
  {
    title: 'Appointment Reminders',
    desc: 'Reduce no-shows with branded reminders, one-tap confirmation buttons, and easy rescheduling — all in the same message.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    color: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.22)',
  },
  {
    title: 'Travel Updates',
    desc: 'Keep travelers informed in real time with gate changes, delays, and boarding notifications delivered with brand recognition.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 4.2c-.5-.1-.9.1-1.1.5L1 7c-.1.4 0 .7.3.9L7 11 5 13H3l-1 2 3 1 1 3 2-1v-2l2-2 3.7 5.7c.2.3.5.4.9.3l1.5-.7c.4-.2.6-.6.5-1.1z"/>
      </svg>
    ),
    color: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
  },
  {
    title: 'Delivery Notifications',
    desc: 'Give customers live package tracking updates and flexible delivery options — all inside a single branded, verified message.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    title: 'Customer Support',
    desc: 'Start support conversations with suggested replies and quick-action buttons, reducing inbound call volume and wait times.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    color: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
];

export default function Home() {
  const { days, hours, mins, secs } = useCountdown();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-home">

      {/* ── EYEBROW ── */}
      <div className="home-eyebrow-wrap">
        <div className="eyebrow">The Evolution of Business Messaging</div>
      </div>

      {/* ── HERO ── */}
      <div className="hero">

        {/* ── LEFT ── */}
        <div className="hero-content">

          <div className="badge">
            <span className="badge-dot"></span>
            Launching across North America
          </div>

          <h1>
            Messaging that<br />
            <em>shows who you are.</em>
          </h1>

          <p className="subtitle">
            Branded Messaging is the human-friendly side of RCS — richer, smarter, verified
            business messaging. We help brands move beyond plain SMS into conversations that
            build trust, drive action, and look the part.
          </p>

          <div className="features">
            <div className="feature-row">
              <div className="feature-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>
                  <Link href="/newsletter" className="feature-link">A2P Messaging Newsletter</Link>
                </strong>
                <span>Weekly trends, carrier updates &amp; RCS adoption insights for North America.</span>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>
                  <Link href="/guides" className="feature-link">Campaign Strategy Guides</Link>
                </strong>
                <span>How to design rich cards, action buttons &amp; verified sender flows that convert.</span>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="feature-text">
                <strong>
                  <Link href="/managed-services" className="feature-link">RCS Managed Services</Link>
                </strong>
                <span>End-to-end brand registration, campaign setup &amp; delivery across all major US &amp; CA carriers.</span>
              </div>
            </div>
          </div>

          <p className="form-label">Get early access &amp; the newsletter</p>
          {submitted ? (
            <div className="success-msg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              You&apos;re on the list — first issue lands at launch.
            </div>
          ) : (
            <form className="notify-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <input type="email" placeholder="your@company.com" required />
              <button type="submit" className="btn-primary">Join Waitlist</button>
            </form>
          )}
          <p className="form-hint">For businesses, brands &amp; messaging professionals. No spam, ever.</p>

          <p className="countdown-label">Launching in</p>
          <div className="countdown">
            <div className="cd-unit"><div className="cd-val">{days}</div><span>Days</span></div>
            <div className="cd-unit"><div className="cd-val">{hours}</div><span>Hours</span></div>
            <div className="cd-unit"><div className="cd-val">{mins}</div><span>Mins</span></div>
            <div className="cd-unit"><div className="cd-val">{secs}</div><span>Secs</span></div>
          </div>

          <div className="divider"></div>

          <div className="socials">
            <a href="#" className="social-link" aria-label="X / Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:hello@brandedmessaging.org" className="social-link" aria-label="Email">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
            </a>
          </div>

        </div>{/* /hero-content */}

        {/* ── RIGHT ── */}
        <PhoneMockup />

      </div>{/* /hero */}

      {/* ── WHAT IS BRANDED MESSAGING ── */}
      <section className="home-section" id="what-is-branded-messaging" aria-labelledby="what-is-heading">
        <div className="home-section-inner home-section-card">
          <p className="section-label">The Basics</p>
          <h2 id="what-is-heading" className="home-section-title">What Is Branded Messaging?</h2>
          <p className="home-section-body">
            Branded Messaging is the upgrade from anonymous business texts to trusted, recognizable
            customer conversations. Instead of sending from a short code or unknown number alone,
            brands can show up with verified identity, richer content, logos, suggested actions,
            and a more useful customer experience.
          </p>
          <p className="home-section-body">
            Technologies like RCS help power this richer experience, while SMS fallback helps
            preserve reach when rich delivery is not available.
          </p>
          <Link href="/what-is-branded-messaging" className="home-section-link">
            Learn more about branded messaging
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── THE FALL UP FROM SMS ── */}
      <section className="home-section" aria-labelledby="fallup-heading">
        <div className="home-section-inner home-section-card home-section-accent">
          <p className="section-label">Philosophy</p>
          <h2 id="fallup-heading" className="home-section-title">The Fall Up From SMS</h2>
          <p className="home-section-body">
            Branded Messaging is not about abandoning SMS. It is about improving the customer
            experience whenever richer messaging is available. When supported, a customer receives
            a more visual, verified, and interactive message. When not supported, SMS fallback
            keeps the campaign moving.
          </p>
          <p className="home-section-body">
            That is the fall up from SMS: better when possible, reachable when necessary.
          </p>
        </div>
      </section>

      {/* ── WHERE BRANDED MESSAGING CREATES VALUE ── */}
      <section className="home-section" aria-labelledby="value-heading">
        <div className="home-section-inner">
          <p className="section-label home-section-centered-label">Use Cases</p>
          <h2 id="value-heading" className="home-section-title home-section-title-centered">Where Branded Messaging Creates Value</h2>
          <div className="use-case-grid">
            {USE_CASES.map(({ title, desc, icon, color, border }) => (
              <div
                key={title}
                className="use-case-card"
                style={{ '--uc-color': color, '--uc-border': border }}
              >
                <div className="use-case-icon" style={{ background: color, border: `1px solid ${border}` }}>
                  {icon}
                </div>
                <h3 className="use-case-title">{title}</h3>
                <p className="use-case-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR TRUST, RECOGNITION, AND REACH ── */}
      <section className="home-section" aria-labelledby="trust-heading">
        <div className="home-section-inner">
          <p className="section-label home-section-centered-label">Three Pillars</p>
          <h2 id="trust-heading" className="home-section-title home-section-title-centered">Built for Trust, Recognition, and Reach</h2>
          <div className="trust-grid">

            <div className="trust-card card card-accent">
              <div className="trust-icon" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.22)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3 className="trust-title">Trust</h3>
              <p className="trust-body">
                Verified sender identity helps customers feel confident the message is legitimate —
                not a phishing attempt or an unknown number.
              </p>
            </div>

            <div className="trust-card card card-accent">
              <div className="trust-icon" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.22)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <h3 className="trust-title">Recognition</h3>
              <p className="trust-body">
                Brand name, logo, and richer presentation make messages feel connected to the
                business — not a generic notification from an unknown sender.
              </p>
            </div>

            <div className="trust-card card card-accent">
              <div className="trust-icon" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.22)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1.42 9a16 16 0 0121.16 0"/>
                  <path d="M5 12.55a11 11 0 0114.08 0"/>
                  <path d="M10.54 16.1a6 6 0 012.92 0"/>
                  <circle cx="12" cy="20" r="1" fill="#6366f1"/>
                </svg>
              </div>
              <h3 className="trust-title">Reach</h3>
              <p className="trust-body">
                SMS fallback helps campaigns continue even when rich messaging is not available,
                so no customer is left out of the conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="home-cta-section" aria-label="Get started with campaign guides">
        <div className="home-cta-inner card card-lg">
          <p className="home-cta-label">Ready to go deeper?</p>
          <h2 className="home-cta-heading">Start learning how modern business messaging works.</h2>
          <Link href="/guides" className="btn-primary">
            Explore Campaign Guides
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
