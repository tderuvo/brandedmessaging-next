export default function PhoneMockup() {
  return (
    <div className="hero-visual">
      <div className="phone-wrap">

        <div className="chip chip-1"><span className="chip-dot" style={{background:'#15803d'}}></span>Verified Sender</div>
        <div className="chip chip-2"><span className="chip-dot" style={{background:'#c41230'}}></span>Rich Cards</div>
        <div className="chip chip-3"><span className="chip-dot" style={{background:'#1a4a8a'}}></span>Read Receipts</div>
        <div className="chip chip-4"><span className="chip-dot" style={{background:'#f59e0b'}}></span>Tap Actions</div>

        <svg className="phone-svg" viewBox="0 0 300 580" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ph-frame-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e5de"/>
              <stop offset="100%" stopColor="#d8d4cc"/>
            </linearGradient>
            <linearGradient id="btn-red-g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c41230"/>
              <stop offset="100%" stopColor="#e0243e"/>
            </linearGradient>
            <linearGradient id="btn-blue-g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a4a8a"/>
              <stop offset="100%" stopColor="#2563c4"/>
            </linearGradient>
            <linearGradient id="card-img-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef2f4"/>
              <stop offset="100%" stopColor="#fde8eb"/>
            </linearGradient>
            <filter id="ph-drop">
              <feDropShadow dx="0" dy="14" stdDeviation="24" floodColor="rgba(0,0,0,0.13)"/>
            </filter>
            <clipPath id="sc">
              <rect x="18" y="18" width="264" height="544" rx="26"/>
            </clipPath>
          </defs>

          {/* Phone frame — warm silver */}
          <rect x="1" y="1" width="298" height="578" rx="44" fill="url(#ph-frame-light)" filter="url(#ph-drop)"/>
          <rect x="1" y="1" width="298" height="578" rx="44" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5"/>

          {/* Side buttons */}
          <rect x="-2" y="130" width="4" height="38" rx="2" fill="#ccc8c0"/>
          <rect x="-2" y="178" width="4" height="58" rx="2" fill="#ccc8c0"/>
          <rect x="298" y="150" width="4" height="68" rx="2" fill="#ccc8c0"/>

          {/* Screen */}
          <rect x="18" y="18" width="264" height="544" rx="26" fill="#f9f7f4"/>

          {/* Dynamic island */}
          <rect x="111" y="26" width="78" height="20" rx="10" fill="#dedad3"/>

          <g clipPath="url(#sc)">

            {/* Status bar */}
            <text x="30" y="55" fontFamily="Inter,system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#171717">9:41</text>
            {/* Battery */}
            <rect x="248" y="46" width="22" height="11" rx="3" fill="none" stroke="#6b7280" strokeWidth="1.2"/>
            <rect x="250" y="48" width="15" height="7" rx="1.5" fill="#6b7280"/>
            <rect x="271" y="49" width="2" height="5" rx="1" fill="#6b7280"/>
            {/* Signal dots */}
            <circle cx="238" cy="51" r="2" fill="#6b7280"/>
            <circle cx="231" cy="51" r="2" fill="#6b7280"/>
            <circle cx="224" cy="51" r="2" fill="#6b7280"/>

            {/* Nav bar */}
            <rect x="18" y="62" width="264" height="1" fill="#ede9e2"/>
            <text x="150" y="84" fontFamily="Inter,system-ui,sans-serif" fontSize="13" fontWeight="700" fill="#171717" textAnchor="middle">Messages</text>
            <rect x="18" y="91" width="264" height="1" fill="#ede9e2"/>

            {/* ── BEFORE section label ── */}
            <rect x="18" y="92" width="264" height="26" fill="#f4f1ec"/>
            <text x="30" y="109" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#9ca3af" letterSpacing="0.07em">BEFORE — PLAIN SMS</text>

            {/* Unknown sender row */}
            <text x="30" y="135" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#9ca3af">+1 (800) 555-0198</text>
            <text x="248" y="135" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="#9ca3af" textAnchor="end">8:12 AM</text>

            {/* Plain SMS bubble */}
            <rect x="30" y="140" width="178" height="50" rx="14" fill="#e8e5de"/>
            <text x="44" y="161" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fill="#4b5563">Pkg #3394 has shipped.</text>
            <text x="44" y="177" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fill="#4b5563">Track: bit.ly/x9kz2</text>

            {/* ── Upgrade divider ── */}
            <rect x="30" y="206" width="240" height="1" fill="#ede9e2"/>
            <rect x="105" y="198" width="90" height="18" rx="9" fill="#ede9e2"/>
            <text x="150" y="210" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#9ca3af" textAnchor="middle">upgraded to RCS ↓</text>

            {/* ── AFTER section label ── */}
            <rect x="18" y="222" width="264" height="26" fill="#fef2f4"/>
            <text x="30" y="239" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#c41230" letterSpacing="0.07em">AFTER — BRANDED MESSAGING</text>

            {/* ── Branded message card ── */}
            <rect x="22" y="255" width="256" height="262" rx="18" fill="#ffffff" stroke="#ede9e2" strokeWidth="1.2"/>

            {/* Card header stripe */}
            <rect x="22" y="255" width="256" height="50" rx="18" fill="#fef2f4"/>
            <rect x="22" y="285" width="256" height="20" fill="#fef2f4"/>

            {/* Brand avatar */}
            <circle cx="50" cy="279" r="15" fill="url(#btn-red-g)"/>
            <text x="50" y="284" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="800" fill="white" textAnchor="middle">ML</text>

            {/* Verified badge */}
            <circle cx="61" cy="290" r="7" fill="#f9f7f4"/>
            <circle cx="61" cy="290" r="6" fill="#15803d"/>
            <text x="61" y="294" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fontWeight="700" fill="white" textAnchor="middle">✓</text>

            {/* Brand name + verified pill */}
            <text x="74" y="273" fontFamily="Inter,system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#171717">Maple Leaf Retail</text>
            <rect x="74" y="278" width="64" height="14" rx="7" fill="rgba(21,128,61,0.1)"/>
            <text x="106" y="289" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="600" fill="#15803d" textAnchor="middle">✓ Verified Business</text>

            {/* Rich card image area */}
            <rect x="30" y="311" width="240" height="76" rx="10" fill="url(#card-img-g)"/>
            {/* Package icon — shapes */}
            <rect x="88" y="328" width="34" height="30" rx="4" fill="url(#btn-red-g)" opacity="0.85"/>
            <rect x="92" y="328" width="26" height="8" rx="2" fill="rgba(255,255,255,0.35)"/>
            <line x1="105" y1="328" x2="105" y2="358" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
            {/* Delivery info */}
            <rect x="132" y="328" width="130" height="16" rx="4" fill="rgba(255,255,255,0.6)"/>
            <text x="197" y="339.5" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#c41230" textAnchor="middle">Estimated Delivery</text>
            <rect x="132" y="350" width="130" height="16" rx="4" fill="rgba(255,255,255,0.6)"/>
            <text x="197" y="361.5" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#171717" textAnchor="middle">Today by 6:00 PM</text>

            {/* Message text */}
            <text x="38" y="404" fontFamily="Inter,system-ui,sans-serif" fontSize="11" fontWeight="700" fill="#171717">Your order is on its way!</text>
            <text x="38" y="420" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#6b7280">Order #3394 · 3 items · Free shipping</text>

            {/* Action buttons */}
            <rect x="30" y="432" width="116" height="27" rx="8" fill="url(#btn-red-g)"/>
            <text x="88" y="449.5" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="600" fill="white" textAnchor="middle">Track Package</text>
            <rect x="154" y="432" width="116" height="27" rx="8" fill="none" stroke="rgba(26,74,138,0.28)" strokeWidth="1.2"/>
            <text x="212" y="449.5" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="600" fill="#1a4a8a" textAnchor="middle">Contact Us</text>

            {/* Read receipt */}
            <text x="262" y="470" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#3b82f6" textAnchor="end">✓✓ Read</text>

            {/* ── Input bar ── */}
            <rect x="18" y="524" width="264" height="54" fill="#f4f1ec"/>
            <rect x="26" y="532" width="212" height="34" rx="17" fill="#ffffff" stroke="#ded9d0" strokeWidth="1.2"/>
            <text x="44" y="553" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#9ca3af">Reply to Maple Leaf Retail…</text>
            <circle cx="261" cy="549" r="13" fill="url(#btn-red-g)"/>
            <text x="261" y="554" fontFamily="Inter,system-ui,sans-serif" fontSize="14" fill="white" textAnchor="middle">↑</text>

          </g>

          {/* Screen edge highlight */}
          <rect x="18" y="18" width="264" height="544" rx="26" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
        </svg>

      </div>
    </div>
  );
}
