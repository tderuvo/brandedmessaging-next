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

export default function Home() {
  const { days, hours, mins, secs } = useCountdown();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-home">
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
                <strong>A2P Messaging Newsletter</strong>
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
                <strong>Campaign Strategy Guides</strong>
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
                <strong>RCS Managed Services</strong>
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

      </div>
    </div>
  );
}
