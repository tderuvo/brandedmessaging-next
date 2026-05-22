import Link from 'next/link';

export const metadata = {
  title: 'Campaign Benchmarks for Branded Messaging | BrandedMessaging.com',
  description: 'Explore how branded messaging experiences are changing customer engagement expectations across retail, finance, healthcare, travel, and service messaging.',
  alternates: { canonical: 'https://brandedmessaging.com/newsletter/campaign-benchmarks' },
  openGraph: {
    url: 'https://brandedmessaging.com/newsletter/campaign-benchmarks',
    title: 'Campaign Benchmarks for the Era of Branded Messaging',
    description: 'Explore how branded messaging experiences are changing customer engagement expectations across retail, finance, healthcare, travel, and service messaging.',
  },
};

export default function CampaignBenchmarks() {
  return (
    <div className="page-inner">

      {/* ── HERO ── */}
      <header className="article-hero">
        <div className="eyebrow">Newsletter · Campaign Benchmarks</div>
        <h1>Campaign Benchmarks for the Era<br /><em>of Branded Messaging</em></h1>
        <p className="article-subtitle">
          How customer expectations are shifting from anonymous SMS toward richer,
          more recognizable business messaging experiences.
        </p>
        <div className="article-meta">
          <span>Branded Messaging</span>
          <span className="article-meta-dot"></span>
          <span>Strategy &amp; Analysis</span>
          <span className="article-meta-dot"></span>
          <span>~12 min read</span>
          <span className="article-meta-dot"></span>
          <span>All Verticals</span>
        </div>
      </header>

      <div className="article-red-rule"></div>

      {/* ── BODY ── */}
      <div className="article-body">

        {/* Section 1 */}
        <div className="article-section">
          <span className="article-section-label">01 — The measurement problem</span>
          <h2 className="article-h2">Traditional SMS benchmarks measured reach. They were largely silent on trust.</h2>
          <p className="article-p">
            For years, the primary metrics in business messaging were mechanical ones.
            Delivery rate: did the message reach the handset? Assumed open rate: did the
            customer look at the notification? Link clicks: did anyone tap the URL? These
            numbers told businesses something real and useful — that the channel worked,
            that messages were arriving, that some portion of recipients were taking the
            intended action.
          </p>
          <p className="article-p">
            What those measurements largely left out was the quality of the customer
            experience at the moment of receipt. They said nothing about whether the
            customer recognized the sender immediately or had to pause to evaluate it.
            Nothing about whether the message was received with confidence or with the
            quiet cognitive friction of &ldquo;is this actually from who I think it is?&rdquo;
            Nothing about whether the customer felt, in that first moment, that the message
            was a continuation of a brand relationship they valued.
          </p>
          <p className="article-p">
            Anonymous SMS — from a short code or unfamiliar number, without a logo,
            without visual identity, without verification — can produce a high open rate
            while simultaneously creating a low-trust customer experience. Those two
            things are not in contradiction. Many customers open messages out of caution
            rather than engagement. They check to see whether the text is legitimate.
            That evaluative moment is not the same as receiving a message with confidence,
            and it is not captured anywhere in a standard delivery report.
          </p>
          <p className="article-p">
            The traditional benchmark framework was built for a channel that delivered text
            reliably but could not carry identity. Now that the channel is evolving —
            toward{' '}
            <Link href="/what-is-branded-messaging" className="article-inline-link">verified sender identity, richer content, and recognizable branded presentation</Link>
            {' '} — the measurements that matter most are evolving too.
          </p>
        </div>

        <div className="article-break"></div>

        {/* Section 2 */}
        <div className="article-section">
          <span className="article-section-label">02 — The shift</span>
          <h2 className="article-h2">Experience-based messaging changes what the first moment looks like.</h2>
          <p className="article-p">
            What changes when businesses move toward branded, verified messaging is not
            primarily the channel — it is the quality of the opening moment. A message
            that arrives with a recognizable name, a familiar logo, and a verified sender
            mark creates a fundamentally different cognitive starting point than a text
            from a five-digit short code. The customer is not beginning from zero trust
            and working forward. They are beginning from a known relationship and simply
            reading the content.
          </p>
          <p className="article-p">
            That starting point matters for everything that follows. A customer who
            immediately recognizes the sender can spend their attention on the message
            itself — the offer, the update, the action they are being invited to take.
            A customer who is uncertain about the sender is spending some portion of that
            attention on evaluation rather than engagement. The message content may be
            identical, but the psychological conditions for acting on it are not.
          </p>
          <p className="article-p">
            Technologies like RCS help enable these richer branded messaging experiences
            within the native messaging apps customers already use. Where supported,
            verified business names, logos, rich media, and suggested action buttons
            arrive as part of the message itself — not as additions requiring a separate
            app or a different channel. The experience is seamlessly richer, and the
            trust signal is built into the delivery layer rather than left to the customer
            to construct from context.
          </p>
          <p className="article-p">
            Even as richer messaging becomes more widely available, SMS fallback ensures
            that programs continue to reach every customer regardless of device or
            carrier support. But the direction of the industry is clear:{' '}
            <Link href="/the-fall-up-from-sms" className="article-inline-link">the fall up from SMS</Link>{' '}
            is about building richer, more trustworthy customer interactions wherever
            the infrastructure supports it — and the benchmarks brands care about are
            beginning to reflect that evolution.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="message-compare">
          <div className="msg-panel msg-before">
            <span className="msg-panel-label">Before — Anonymous SMS</span>
            <p className="msg-from">73947</p>
            <div className="msg-bubble">
              FLASH SALE: 30% off everything this weekend only. Shop now: bit.ly/s4Le — Reply STOP to opt out
            </div>
            <div className="bench-experience-note bench-experience-note-before">
              <span>No sender identity. No visual context. Customer must infer the brand from content alone.</span>
            </div>
          </div>
          <div className="msg-panel msg-after">
            <span className="msg-panel-label">After — Branded Messaging</span>
            <div className="msg-brand-row">
              <div className="msg-brand-avatar">HN</div>
              <div>
                <div className="msg-brand-name">Harbour &amp; Nord</div>
                <div className="msg-brand-verified">✓ Verified Business</div>
              </div>
            </div>
            <div className="msg-card">
              <div className="msg-card-title">Weekend Flash Sale — 30% Off</div>
              <div className="msg-card-body">Members-only pricing is live through Sunday. Browse new arrivals and apply your discount at checkout.</div>
              <div className="msg-card-actions">
                <span className="msg-card-btn msg-card-btn-primary">Shop Now</span>
                <span className="msg-card-btn msg-card-btn-secondary">View Wishlist</span>
              </div>
            </div>
            <div className="bench-experience-note bench-experience-note-after">
              <span>Verified identity, recognizable brand, actionable — customer arrives with confidence already established.</span>
            </div>
          </div>
        </div>

        <div className="article-break"></div>

        {/* Section 3 — Retail */}
        <div className="article-section">
          <span className="article-section-label">03 — Retail</span>
          <h2 className="article-h2">Recognition turns promotional messages into brand moments.</h2>
          <p className="article-p">
            Retail is one of the highest-frequency business messaging environments.
            Promotional offers, loyalty updates, cart reminders, order confirmations,
            and shipping notifications collectively mean that a retail brand&rsquo;s message
            thread is one of the most active customer touchpoints in the relationship.
            The challenge is that many of those messages still arrive without the visual
            identity that would immediately tell the customer who is writing to them.
          </p>
          <p className="article-p">
            A promotional SMS from an anonymous short code asks the customer to do
            interpretive work before they can engage. They need to recognize the sender
            from the content, establish the context of the relationship, and then decide
            whether to act — all before the offer itself has had a chance to land.
            A branded message that arrives with the retailer&rsquo;s name, logo, and a
            recognized visual identity eliminates that friction. The customer is already
            in context. The offer can do its full work.
          </p>
          <p className="article-p">
            Cart recovery is a particularly meaningful example. A message reminding a
            customer about an abandoned cart is only as effective as the trust the customer
            has in the sender. If the message arrives from an unknown number, the instinct
            may be to dismiss it rather than act on it. If it arrives from a verified
            brand identity with a direct &ldquo;Return to cart&rdquo; action button, the
            path from reminder to conversion is shorter and less likely to be interrupted
            by doubt. Recognition does not just make messages look better — it can make
            them work harder.
          </p>
        </div>

        <div className="bench-vertical-compare">
          <div className="bench-vc-side bench-vc-before">
            <p className="bench-vc-label">Anonymous SMS — Retail</p>
            <ul className="bench-vc-list">
              <li>Short code or unfamiliar number as sender</li>
              <li>No logo or visual brand identity</li>
              <li>Plain text with a bare link</li>
              <li>Customer reconstructs brand context from copy alone</li>
              <li>No action buttons — every interaction requires a separate app or browser</li>
            </ul>
          </div>
          <div className="bench-vc-side bench-vc-after">
            <p className="bench-vc-label">Branded Messaging — Retail</p>
            <ul className="bench-vc-list">
              <li>Verified business name and logo in the message header</li>
              <li>Rich promotional card with imagery and offer copy</li>
              <li>Tap-to-shop, wishlist, and loyalty action buttons</li>
              <li>Customer arrives with brand context already established</li>
              <li>Richer, more confident path from message to purchase</li>
            </ul>
          </div>
        </div>

        <div className="article-break"></div>

        {/* Section 4 — Finance */}
        <div className="article-section">
          <span className="article-section-label">04 — Finance &amp; banking</span>
          <h2 className="article-h2">In financial messaging, trust is not a feature — it is the prerequisite.</h2>
          <p className="article-p">
            No vertical feels the cost of anonymous messaging more acutely than financial
            services. Fraud alerts, transaction notifications, account security messages,
            and payment confirmations are exactly the category of messages that scammers
            routinely impersonate. A message claiming to be from a bank, arriving from
            an unknown number, with no visual identity attached, creates a moment of
            genuine uncertainty — even for customers who recognize the message format.
          </p>
          <p className="article-p">
            That uncertainty has consequences that extend beyond the individual message.
            Customers who are regularly uncertain about whether their bank&rsquo;s
            messages are legitimate begin to build habits of caution around the entire
            category. They delay acting on real alerts. They call customer service to
            verify messages they should have been able to trust immediately. They ignore
            notifications that required no action but reinforced the brand relationship.
            The cost of the trust gap in financial messaging is measurable in customer
            behaviour, and it compounds over time.
          </p>
          <p className="article-p">
            Verified branded messaging in financial services does not just improve the
            visual experience. It changes the customer&rsquo;s default orientation toward
            the message. A fraud alert that arrives with the bank&rsquo;s verified name,
            confirmed by the carrier, allows the customer to respond immediately rather
            than spending cognitive energy on legitimacy evaluation.{' '}
            <Link href="/why-anonymous-business-messaging-is-losing-customer-trust" className="article-inline-link">
              The cost of anonymous messaging
            </Link>{' '}
            is nowhere higher than in the category where trust is most load-bearing.
          </p>
        </div>

        <div className="bench-vertical-compare">
          <div className="bench-vc-side bench-vc-before">
            <p className="bench-vc-label">Anonymous SMS — Finance</p>
            <ul className="bench-vc-list">
              <li>Generic number or shared short code</li>
              <li>No visual connection to the financial institution</li>
              <li>Indistinguishable from phishing attempts at first glance</li>
              <li>Customer must verify legitimacy before acting</li>
              <li>Increased support calls from customers unsure if message is real</li>
            </ul>
          </div>
          <div className="bench-vc-side bench-vc-after">
            <p className="bench-vc-label">Branded Messaging — Finance</p>
            <ul className="bench-vc-list">
              <li>Carrier-verified bank name and recognized logo</li>
              <li>Fraud alert with immediate approve / decline action buttons</li>
              <li>Customer arrives with confidence — no legitimacy evaluation required</li>
              <li>Faster response to time-sensitive security notifications</li>
              <li>Reduced hesitation, reduced inbound support volume</li>
            </ul>
          </div>
        </div>

        <div className="article-break"></div>

        {/* Section 5 — Healthcare */}
        <div className="article-section">
          <span className="article-section-label">05 — Healthcare</span>
          <h2 className="article-h2">Patient communication demands the kind of clarity that anonymous messaging cannot provide.</h2>
          <p className="article-p">
            Healthcare is a context where the stakes of miscommunication are particularly
            high and the value of trust is particularly concrete. An appointment reminder
            from a recognized healthcare provider is a useful, low-friction interaction
            that helps patients manage their care. An appointment reminder from an unknown
            number is a message that a significant portion of recipients will treat with
            caution — and some will ignore entirely.
          </p>
          <p className="article-p">
            The no-show problem in healthcare has many causes, but communication
            uncertainty is among them. If a patient is not confident that a reminder
            message came from their actual healthcare provider, they are less likely
            to engage with confirmation or rescheduling options embedded in it. The
            message may have arrived. The communication may not have.
          </p>
          <p className="article-p">
            Branded messaging in healthcare creates the conditions for patient
            communication to work as intended. A verified healthcare provider name,
            a logo patients recognize from their clinic&rsquo;s materials and website,
            and a one-tap confirmation button combine to make the reminder feel like
            an extension of the care relationship — not an anonymous text that resembles
            the appointment scams that circulate on the same channel. As patient
            communication expectations evolve, recognizable messaging may increasingly
            become a standard rather than a differentiator.
          </p>
        </div>

        <div className="bench-vertical-compare">
          <div className="bench-vc-side bench-vc-before">
            <p className="bench-vc-label">Anonymous SMS — Healthcare</p>
            <ul className="bench-vc-list">
              <li>Unknown short code with no provider identity</li>
              <li>Plain text reminder with no visual context</li>
              <li>Patient cannot confirm sender is legitimate without separate verification</li>
              <li>Confirmation requires calling or visiting a separate portal</li>
              <li>Higher no-show rates from patients uncertain about message origin</li>
            </ul>
          </div>
          <div className="bench-vc-side bench-vc-after">
            <p className="bench-vc-label">Branded Messaging — Healthcare</p>
            <ul className="bench-vc-list">
              <li>Verified provider name and clinic logo</li>
              <li>Clear appointment details with confirm, reschedule, or call buttons</li>
              <li>Patient immediately recognizes the sender as their care provider</li>
              <li>One-tap confirmation without leaving the message thread</li>
              <li>Communication arrives as an extension of the care relationship</li>
            </ul>
          </div>
        </div>

        <div className="article-break"></div>

        {/* Section 6 — Delivery, Travel & Service */}
        <div className="article-section">
          <span className="article-section-label">06 — Delivery, travel &amp; service</span>
          <h2 className="article-h2">Real-time updates only deliver their full value when customers trust the source.</h2>
          <p className="article-p">
            Delivery tracking, gate change notifications, service updates, and appointment
            confirmations all share a common characteristic: they are time-sensitive
            messages where the customer needs to make a decision quickly, and the quality
            of that decision depends on their confidence in the source. A shipping
            notification from a verified courier with a real-time tracking action button
            serves the customer immediately. The same notification from an anonymous number
            with a bare link may produce hesitation — particularly when customers have been
            trained by years of smishing attempts impersonating exactly that message type.
          </p>
          <p className="article-p">
            Travel notifications are a useful lens here. A gate change or delay alert from
            a verified airline — arriving with the carrier&rsquo;s logo, the flight details
            clearly structured, and an action button to view the updated gate — reduces
            friction at a moment when the customer is already managing logistics under
            stress. The message does its job cleanly. An identical notification from an
            anonymous number requires the customer to evaluate the message before they can
            act on it — a cognitive cost that is particularly high at exactly the moment
            when cognitive load is already elevated.
          </p>
          <p className="article-p">
            Service businesses — utilities, telecommunications, home services — face a
            similar dynamic with maintenance notifications, outage updates, and
            technician arrival windows. The customer who receives a branded, verified
            arrival notification with a live tracking option and a contact button has a
            materially different experience than the customer receiving a plain text
            from a number they do not recognize. Both messages carry the same information.
            Only one of them carries the trust layer that allows the customer to engage
            with it immediately.
          </p>
        </div>

        <div className="bench-vertical-compare">
          <div className="bench-vc-side bench-vc-before">
            <p className="bench-vc-label">Anonymous SMS — Delivery &amp; Travel</p>
            <ul className="bench-vc-list">
              <li>Generic number mimicking exactly what scammers impersonate</li>
              <li>Bare tracking link requiring customer to evaluate before clicking</li>
              <li>No visual identity connecting message to the brand</li>
              <li>Customer hesitation at exactly the wrong moment</li>
              <li>Increased inbound contact from customers who dismissed real alerts</li>
            </ul>
          </div>
          <div className="bench-vc-side bench-vc-after">
            <p className="bench-vc-label">Branded Messaging — Delivery &amp; Travel</p>
            <ul className="bench-vc-list">
              <li>Verified courier or airline name and logo in the message header</li>
              <li>Rich card with status detail, map, or flight information</li>
              <li>Track, reschedule, or contact action buttons in-thread</li>
              <li>Customer acts immediately — trust is already established</li>
              <li>Better real-time response rates for time-sensitive updates</li>
            </ul>
          </div>
        </div>

        <div className="article-break"></div>

        {/* Section 7 */}
        <div className="article-section">
          <span className="article-section-label">07 — The new benchmarks</span>
          <h2 className="article-h2">The metrics that matter most may be the ones that are hardest to see in a delivery report.</h2>
          <p className="article-p">
            The traditional benchmark stack — delivery rate, open rate, click rate — will
            remain useful. It measures whether the channel is working mechanically. But as
            business messaging evolves toward richer, more recognizable branded experiences,
            the most important dimensions of campaign performance are increasingly the ones
            that existing measurement frameworks were not designed to capture.
          </p>
          <p className="article-p">
            Customer trust is the foundational one. A campaign that delivers reliably but
            arrives in a context of uncertainty — where the customer cannot immediately
            verify who sent it — is performing less well than a delivery report might
            suggest. The message got there. The relationship did not necessarily benefit.
            As{' '}
            <Link href="/newsletter/rcs-adoption-trends" className="article-inline-link">
              richer messaging becomes more widely available
            </Link>{' '}
            and as the contrast between anonymous and branded communication becomes
            more apparent to customers, the trust dimension of engagement will become
            increasingly measurable — and increasingly important.
          </p>
          <p className="article-p">
            Sender recognition is closely related. How quickly a customer identifies
            the brand behind a message, and whether that identification happens before
            or after the message has asked them to do something, affects everything from
            response speed to action confidence to the cumulative value of the brand
            relationship built through the messaging channel over time.
          </p>
          <p className="article-p">
            Action confidence — the customer&rsquo;s willingness to tap a button, follow
            a link, or take a step based on a message they received — is shaped heavily
            by trust and recognition. A customer who is confident the message is legitimate
            acts differently than a customer who is cautious. That difference is not
            visible in click rate alone. It shows up in the quality of the actions taken,
            in the reduction of abandonment between click and completion, and in the
            downstream conversion metrics that follow from an engaged rather than
            evaluative starting point.
          </p>
        </div>

        {/* Benchmark dimensions card */}
        <div className="bench-dimensions">
          <p className="bench-dimensions-label">From measuring delivery → to measuring experience</p>
          <div className="bench-dimensions-grid">
            <div className="bench-dim-item bench-dim-old">
              <p className="bench-dim-heading">Traditional SMS Metrics</p>
              <ul className="bench-dim-list">
                <li>Delivery rate</li>
                <li>Assumed open rate</li>
                <li>Link click rate</li>
                <li>Opt-out rate</li>
                <li>Message throughput</li>
              </ul>
            </div>
            <div className="bench-dim-arrow">→</div>
            <div className="bench-dim-item bench-dim-new">
              <p className="bench-dim-heading">Emerging Branded Messaging Dimensions</p>
              <ul className="bench-dim-list">
                <li>Sender recognition — did the customer immediately know who sent it?</li>
                <li>Trust confidence — did the message arrive without hesitation?</li>
                <li>Action quality — did the customer engage with intent, not caution?</li>
                <li>Conversational continuity — did the interaction extend meaningfully?</li>
                <li>Brand relationship value — did the message reinforce recognition?</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="article-section" style={{ marginTop: '2.4rem' }}>
          <p className="article-p">
            The{' '}
            <Link href="/newsletter/carrier-operator-updates" className="article-inline-link">
              carrier and operator infrastructure
            </Link>{' '}
            that enables branded messaging is making some of these dimensions more
            trackable. Verified delivery reports that distinguish rich delivery from
            SMS fallback, read receipts where supported, and action button interaction
            data all begin to surface aspects of customer engagement that delivery
            rate alone cannot capture. The measurement framework for business messaging
            is evolving alongside the channel itself.
          </p>
          <p className="article-p">
            For brands designing their{' '}
            <Link href="/guides" className="article-inline-link">messaging programs</Link>{' '}
            today, the implication is to start thinking about measurement in terms of
            the customer experience being created — not just the operational metrics
            confirming the message was sent. The questions worth asking are not only
            &ldquo;did our messages arrive?&rdquo; but &ldquo;did our customers recognize
            us?&rdquo; and &ldquo;did they feel confident enough to act?&rdquo;
          </p>
        </div>

        <div className="article-break"></div>

        {/* Section 8 */}
        <div className="article-section">
          <span className="article-section-label">08 — The philosophy</span>
          <h2 className="article-h2">The industry is evolving from &ldquo;message delivered&rdquo; to &ldquo;message recognized and trusted.&rdquo;</h2>
          <p className="article-p">
            The{' '}
            <Link href="/the-fall-up-from-sms" className="article-inline-link">fall up from SMS</Link>{' '}
            is ultimately a story about what business messaging is for. The channel
            was built to deliver information efficiently, and for a long time, efficient
            delivery was the primary standard against which campaigns were measured.
            The new standard — emerging as richer, more recognizable messaging becomes
            available — is about whether that delivery actually strengthens the customer
            relationship, or whether it arrives in a way that is neutral at best and
            eroding at worst.
          </p>
          <p className="article-p">
            Every business message is a touchpoint in a brand relationship. A touchpoint
            that arrives without identity, without recognition, without any visual or
            verified connection to the brand sends a signal — not necessarily a damaging
            one in isolation, but a cumulative one. Over hundreds of messages, over years
            of interactions, the inbox becomes either a place where the customer sees a
            brand they recognize and trusts, or a place where they see a stream of
            undifferentiated notifications from sources they are never quite sure about.
          </p>
          <p className="article-p">
            <Link href="/canada" className="article-inline-link">Across both the US and Canadian markets</Link>,
            the shift toward branded, verified messaging represents an opportunity to
            change the nature of that cumulative signal — to turn the most direct customer
            communication channel into one that reinforces recognition and trust rather
            than generating uncertainty. That is what the new benchmarks are ultimately
            measuring: not just whether the message arrived, but whether the relationship
            was served.
          </p>
        </div>

      </div>{/* /article-body */}

      {/* ── CLOSING ── */}
      <div className="article-closing">
        <p>
          The next era of messaging benchmarks may not simply measure whether a message
          arrived. They may increasingly measure whether customers recognized it,
          trusted it, and felt confident enough to engage with it.
        </p>
        <p>
          Delivery is table stakes. Recognition, trust, and action confidence are the
          dimensions that will increasingly separate the messaging programs that build
          lasting customer relationships from the ones that simply generate throughput.
        </p>
        <p>
          The businesses that start measuring what matters most now — even before the
          measurement frameworks are fully standardized — will be the ones best positioned
          when the industry catches up to where customer expectations already are.
        </p>
      </div>

      {/* ── RELATED ARTICLES ── */}
      <div className="related-articles">
        <p className="article-section-label" style={{ marginBottom: '1.2rem', display: 'block' }}>Related Articles</p>
        <div className="related-articles-grid">

          <Link href="/the-fall-up-from-sms" className="related-article-card">
            <span className="related-article-tag">Philosophy</span>
            <h3 className="related-article-title">The Fall Up From SMS</h3>
            <p className="related-article-desc">
              Why the future of business messaging is not about replacing SMS —
              but evolving toward something customers can immediately recognize and trust.
            </p>
            <span className="related-article-link">Read →</span>
          </Link>

          <Link href="/why-anonymous-business-messaging-is-losing-customer-trust" className="related-article-card">
            <span className="related-article-tag">Insights</span>
            <h3 className="related-article-title">Why Anonymous Business Messaging Is Losing Customer Trust</h3>
            <p className="related-article-desc">
              An editorial perspective on the growing gap between brand identity
              investment and how businesses still appear in many customers&rsquo; inboxes.
            </p>
            <span className="related-article-link">Read →</span>
          </Link>

          <Link href="/newsletter/rcs-adoption-trends" className="related-article-card">
            <span className="related-article-tag">Newsletter</span>
            <h3 className="related-article-title">RCS Adoption Trends Across North America</h3>
            <p className="related-article-desc">
              Tracking the device, operator, and ecosystem developments shaping
              the future of branded messaging in the US and Canada.
            </p>
            <span className="related-article-link">Read →</span>
          </Link>

          <Link href="/newsletter/carrier-operator-updates" className="related-article-card">
            <span className="related-article-tag">Newsletter</span>
            <h3 className="related-article-title">Carrier &amp; Operator Updates</h3>
            <p className="related-article-desc">
              How carrier policy changes, A2P 10DLC developments, and operator
              enablement shape what business messaging programs can deliver.
            </p>
            <span className="related-article-link">Read →</span>
          </Link>

        </div>
      </div>

      {/* ── ARTICLE NAV ── */}
      <div className="article-nav">
        <Link href="/newsletter" className="btn-secondary">
          ← Back to Newsletter
        </Link>
        <Link href="/the-fall-up-from-sms" className="btn-secondary">
          The Fall Up From SMS →
        </Link>
        <Link href="/what-is-branded-messaging" className="btn-secondary">
          What Is Branded Messaging? →
        </Link>
        <Link href="/guides" className="btn-secondary">
          Campaign Strategy Guides →
        </Link>
      </div>

    </div>
  );
}
