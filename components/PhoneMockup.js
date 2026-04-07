export default function PhoneMockup() {
  return (
    <div className="hero-visual">
      <div className="phone-wrap">

        <div className="chip chip-1"><span className="chip-dot" style={{background:'#22c55e'}}></span>Verified Sender</div>
        <div className="chip chip-2"><span className="chip-dot" style={{background:'#3b82f6'}}></span>Rich Cards</div>
        <div className="chip chip-3"><span className="chip-dot" style={{background:'#6366f1'}}></span>Read Receipts</div>
        <div className="chip chip-4"><span className="chip-dot" style={{background:'#f59e0b'}}></span>Action Buttons</div>

        <svg className="phone-svg" viewBox="0 0 300 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ph-frame"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e2840"/><stop offset="100%" stopColor="#0d1221"/></linearGradient>
            <linearGradient id="ph-screen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f1626"/><stop offset="100%" stopColor="#0a0f1e"/></linearGradient>
            <linearGradient id="ph-accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient>
            <linearGradient id="ph-card1"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#0f2040"/></linearGradient>
            <linearGradient id="ph-card2"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f2e2e"/><stop offset="100%" stopColor="#071a1a"/></linearGradient>
            <filter id="ph-shadow"><feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="rgba(59,130,246,0.25)"/></filter>
            <clipPath id="screen-clip"><rect x="18" y="18" width="264" height="524" rx="24"/></clipPath>
          </defs>

          {/* Frame */}
          <rect x="1" y="1" width="298" height="558" rx="42" fill="url(#ph-frame)" filter="url(#ph-shadow)"/>
          <rect x="1" y="1" width="298" height="558" rx="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
          <rect x="-2" y="130" width="4" height="40" rx="2" fill="#1a2035"/>
          <rect x="-2" y="180" width="4" height="60" rx="2" fill="#1a2035"/>
          <rect x="298" y="150" width="4" height="70" rx="2" fill="#1a2035"/>

          {/* Screen */}
          <rect x="18" y="18" width="264" height="524" rx="24" fill="url(#ph-screen)"/>
          <rect x="110" y="26" width="80" height="22" rx="11" fill="#07090f"/>

          <g clipPath="url(#screen-clip)">
            {/* Header */}
            <rect x="18" y="55" width="264" height="52" fill="rgba(255,255,255,0.035)"/>
            <circle cx="50" cy="81" r="15" fill="url(#ph-accent)"/>
            <text x="50" y="86" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="800" fill="white" textAnchor="middle">BM</text>
            <circle cx="62" cy="93" r="6" fill="#0a0f1e"/>
            <circle cx="62" cy="93" r="5" fill="#22c55e"/>
            <text x="62" y="96.5" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">✓</text>
            <text x="74" y="77"  fontFamily="Inter,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.9)">Branded Messaging</text>
            <text x="74" y="91"  fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="#22c55e">● Verified Business</text>

            {/* Rich card 1 */}
            <rect x="26" y="120" width="200" height="155" rx="14" fill="url(#ph-card1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
            <rect x="26" y="120" width="200" height="80"  rx="14" fill="rgba(59,130,246,0.15)"/>
            <rect x="26" y="178" width="200" height="22"        fill="rgba(59,130,246,0.15)"/>
            <circle cx="90"  cy="158" r="18" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="1"/>
            <circle cx="90"  cy="158" r="30" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
            <circle cx="140" cy="148" r="14" fill="none" stroke="rgba(6,182,212,0.3)"   strokeWidth="1"/>
            <circle cx="90"  cy="158" r="4"  fill="#3b82f6" opacity="0.9"/>
            <circle cx="140" cy="148" r="4"  fill="#06b6d4" opacity="0.9"/>
            <circle cx="115" cy="138" r="3"  fill="#6366f1" opacity="0.9"/>
            <line x1="90" y1="158" x2="140" y2="148" stroke="rgba(59,130,246,0.35)" strokeWidth="1"/>
            <line x1="90" y1="158" x2="115" y2="138" stroke="rgba(99,102,241,0.3)"  strokeWidth="1"/>
            <rect x="32" y="126" width="50" height="16" rx="5" fill="url(#ph-accent)" opacity="0.9"/>
            <text x="57" y="137.5" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.5">FEATURED</text>
            <text x="36" y="211" fontFamily="Inter,system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="rgba(255,255,255,0.9)">RCS is here for your brand</text>
            <text x="36" y="225" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5"  fill="rgba(255,255,255,0.45)">Upgrade from SMS — stand out.</text>
            <rect x="36"  y="237" width="90" height="26" rx="8" fill="url(#ph-accent)" opacity="0.9"/>
            <text x="81"  y="254" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="600" fill="white" textAnchor="middle">Learn More →</text>
            <rect x="136" y="237" width="78" height="26" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <text x="175" y="254" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.55)" textAnchor="middle">Get a Demo</text>

            {/* Text bubble */}
            <rect x="26" y="292" width="185" height="50" rx="12" fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x="37" y="313" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.78)">Your campaign went live 🎉</text>
            <text x="37" y="330" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.4)">98.6% delivered · 42% open rate</text>
            <text x="216" y="346" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#06b6d4">✓✓</text>

            {/* Newsletter card */}
            <rect x="26" y="360" width="200" height="100" rx="14" fill="url(#ph-card2)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
            <rect x="26" y="360" width="200" height="44"  rx="14" fill="rgba(6,182,212,0.12)"/>
            <rect x="26" y="390" width="200" height="14"        fill="rgba(6,182,212,0.12)"/>
            <rect x="48"  y="386" width="10" height="15" rx="3" fill="#3b82f6" opacity="0.7"/>
            <rect x="63"  y="380" width="10" height="21" rx="3" fill="#06b6d4" opacity="0.8"/>
            <rect x="78"  y="375" width="10" height="26" rx="3" fill="#3b82f6" opacity="0.9"/>
            <rect x="108" y="371" width="10" height="30" rx="3" fill="url(#ph-accent)"/>
            <rect x="138" y="368" width="10" height="33" rx="3" fill="#06b6d4"/>
            <rect x="168" y="365" width="10" height="36" rx="3" fill="url(#ph-accent)"/>
            <rect x="32" y="366" width="58" height="15" rx="5" fill="rgba(6,182,212,0.25)" stroke="rgba(6,182,212,0.4)" strokeWidth="1"/>
            <text x="61" y="377" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fontWeight="700" fill="#67e8f9" textAnchor="middle" letterSpacing="0.5">NEWSLETTER</text>
            <text x="36" y="420" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.9)">A2P Trends — May Issue</text>
            <text x="36" y="434" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.4)">RCS reaches 1B users globally</text>
            <rect x="36" y="443" width="80" height="23" rx="7" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.35)" strokeWidth="1"/>
            <text x="76" y="458.5" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#67e8f9" textAnchor="middle">Read Issue →</text>

            {/* Input bar */}
            <rect x="18" y="488" width="264" height="54" fill="rgba(255,255,255,0.03)"/>
            <rect x="26" y="496" width="204" height="34" rx="17" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            <text x="42" y="517" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.25)">Message Branded Messaging…</text>
            <circle cx="260" cy="513" r="16" fill="url(#ph-accent)"/>
            <text x="260" y="518" fontFamily="Inter,system-ui,sans-serif" fontSize="14" fill="white" textAnchor="middle">↑</text>
          </g>

          {/* Screen edge */}
          <rect x="18" y="18" width="264" height="524" rx="24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        </svg>

      </div>
    </div>
  );
}
