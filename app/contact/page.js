'use client';

import { useState } from 'react';

export default function Contact() {
  const [status,   setStatus]   = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ firstName:'', lastName:'', email:'', company:'', topic:'', message:'' });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="page-inner">

      <div className="page-header">
        <div className="eyebrow">Get in Touch</div>
        <h1>Let&apos;s talk <em>Branded Messaging.</em></h1>
        <p>Whether you&apos;re a brand ready to launch RCS, a messaging professional with questions, or a potential partner — we&apos;d love to hear from you.</p>
      </div>

      <div className="contact-grid">

        {/* Form */}
        <div className="card card-lg card-accent form-card">
          <h2>Send us a message</h2>

          {status === 'success' && (
            <div className="alert alert-success">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              Message received — we&apos;ll get back to you within one business day.
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Something went wrong — please try again or email us directly.
            </div>
          )}

          {status !== 'success' && (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label>First Name *</label>
                  <input type="text" name="firstName" placeholder="Jane" required onChange={handleChange} value={formData.firstName}/>
                </div>
                <div className="field">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" placeholder="Smith" required onChange={handleChange} value={formData.lastName}/>
                </div>
              </div>
              <div className="field">
                <label>Work Email *</label>
                <input type="email" name="email" placeholder="jane@yourcompany.com" required onChange={handleChange} value={formData.email}/>
              </div>
              <div className="field">
                <label>Company / Organization</label>
                <input type="text" name="company" placeholder="Acme Corp" onChange={handleChange} value={formData.company}/>
              </div>
              <div className="field">
                <label>I&apos;m interested in…</label>
                <select name="topic" onChange={handleChange} value={formData.topic}>
                  <option value="" disabled>Select a topic</option>
                  <option>RCS / Branded Messaging for my business</option>
                  <option>A2P Newsletter subscription</option>
                  <option>Campaign strategy &amp; consulting</option>
                  <option>Partnership or reseller inquiry</option>
                  <option>Press or media inquiry</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label>Message *</label>
                <textarea name="message" placeholder="Tell us a bit about what you're looking to do…" required onChange={handleChange} value={formData.message}></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="contact-sidebar">

          <div className="card info-card">
            <div className="response-badge">
              <span className="response-dot"></span>
              <span>We typically reply within 1 business day</span>
            </div>
          </div>

          <div className="card info-card">
            <h3>Contact Details</h3>
            <div className="contact-item">
              <div className="ci-icon" style={{background:'rgba(59,130,246,0.1)'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <div className="ci-text">
                <strong>Email</strong>
                <a href="mailto:hello@brandedmessaging.org">hello@brandedmessaging.org</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon" style={{background:'rgba(6,182,212,0.1)'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="ci-text">
                <strong>Region</strong>
                <span>North America — US &amp; Canada</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon" style={{background:'rgba(99,102,241,0.1)'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="ci-text">
                <strong>Business Hours</strong>
                <span>Mon–Fri, 9am–6pm ET</span>
              </div>
            </div>
          </div>

          <div className="card info-card">
            <h3>We Can Help With</h3>
            <div className="topics">
              {['RCS setup & registration','A2P compliance','Rich card design','Carrier approvals','Campaign strategy','Newsletter','Partnerships','Press inquiries'].map(t => (
                <span className="topic-chip" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
