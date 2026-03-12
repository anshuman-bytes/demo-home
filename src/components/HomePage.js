import React, { useEffect, useRef, useState } from 'react';

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function HomePage() {
  const [featuresRef, featuresInView] = useScrollReveal(0.08);
  const [processRef, processInView] = useScrollReveal(0.08);
  const [ctaRef, ctaInView] = useScrollReveal(0.2);

  return (
    <div className="bk-homepage">
      {/* ═══════════════════════════════════════════════════════════
          HERO — Dark mesh, orbs, staggered text, glow CTAs
      ═══════════════════════════════════════════════════════════ */}
      <header className="bk-hero">
        <div className="bk-hero-bg">
          <div className="bk-hero-mesh" />
          <div className="bk-hero-orb bk-hero-orb-1" />
          <div className="bk-hero-orb bk-hero-orb-2" />
          <div className="bk-hero-orb bk-hero-orb-3" />
          <div className="bk-hero-grid" />
          <div className="bk-hero-noise" />
        </div>

        <div className="bk-hero-sides" aria-hidden="true">
          <div className="bk-side-card bk-side-card-left">
            <div className="bk-side-card-kicker">Vertrauen</div>
            <div className="bk-side-card-stat">+28% Conversion</div>
            <div className="bk-side-card-desc">Mit echten Bewertungen & klarer Moderation.</div>
            <div className="bk-side-card-chips">
              <span>⭐ Social Proof</span>
              <span>🛡️ DSGVO</span>
            </div>
          </div>

          <div className="bk-side-card bk-side-card-right">
            <div className="bk-side-card-kicker">Automatisierung</div>
            <div className="bk-side-card-stat">5 Min Setup</div>
            <div className="bk-side-card-desc">Regeln, Benachrichtigungen, Analytics — done.</div>
            <div className="bk-side-card-chips">
              <span>🤖 KI</span>
              <span>⚡ Echtzeit</span>
            </div>
          </div>
        </div>

        <div className="bk-hero-inner container">
          <div className="bk-hero-badge reveal-1">
            <span className="bk-hero-badge-dot" />
            <span>KI-gestützte Bewertungsverwaltung</span>
          </div>

          <h1 className="bk-hero-title">
            <span className="bk-hero-title-line bk-hero-title-line-main">
              <span className="bk-hero-title-word">Bewertung</span>
              <span className="bk-hero-title-word bk-hero-title-accent">Klar</span>
            </span>
            <span className="bk-hero-title-line reveal-3">
              Einfach. Automatisch. DSGVO-sicher.
            </span>
          </h1>

          <p className="bk-hero-subtitle reveal-4">
            Sentiment-Analyse in Echtzeit, intelligente Moderation und Analytics
            für Ihren Shopify-Store — mit einem Klick installiert.
          </p>

          <div className="bk-hero-cta reveal-5">
            <a
              href="https://apps.shopify.com/bewertungklar"
              className="bk-btn bk-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bk-btn-shine" />
              <span className="bk-btn-text">Kostenlos installieren</span>
              <span className="bk-btn-arrow">→</span>
            </a>
            <a href="#features" className="bk-btn bk-btn-ghost">
              <span>Features ansehen</span>
            </a>
          </div>

          <div className="bk-hero-pills reveal-6">
            <span className="bk-pill"><span className="bk-pill-icon">✨</span> Kostenlos</span>
            <span className="bk-pill"><span className="bk-pill-icon">🇩🇪</span> DSGVO</span>
            <span className="bk-pill"><span className="bk-pill-icon">🤖</span> KI</span>
          </div>
        </div>

        <div className="bk-hero-scroll">
          <div className="bk-hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES — Bento grid, scroll-reveal, hover tilt/glow
      ═══════════════════════════════════════════════════════════ */}
      <section id="features" className="bk-features" ref={featuresRef}>
        <div className="container">
          <div className={`bk-features-head ${featuresInView ? 'in-view' : ''}`}>
            <h2 className="bk-features-title">Alles für Ihren Review-Erfolg</h2>
            <p className="bk-features-subtitle">
              Eine Plattform: KI-Moderation, Analytics und Compliance — ohne Aufwand.
            </p>
          </div>

          <div className="bk-bento">
            <div className={`bk-bento-card bk-bento-large reveal-card ${featuresInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="bk-bento-glow" />
              <div className="bk-bento-icon">🤖</div>
              <h3>KI Sentiment-Analyse</h3>
              <p>Multilinguales BERT-Modell: Stimmung jeder Bewertung in 6 Sprachen — automatisch und in Echtzeit.</p>
              <div className="bk-bento-tags">
                <span>Multilingual</span><span>Echtzeit</span>
              </div>
            </div>

            <div className={`bk-bento-card reveal-card ${featuresInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bk-bento-glow" />
              <div className="bk-bento-icon">🎯</div>
              <h3>Auto-Moderation</h3>
              <p>Regeln nach Sternen, Sentiment und Keywords — Bewertungen automatisch freigeben oder ablehnen.</p>
              <div className="bk-bento-tags">
                <span>Zeitersparnis</span><span>Flexibel</span>
              </div>
            </div>

            <div className={`bk-bento-card reveal-card ${featuresInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.25s' }}>
              <div className="bk-bento-glow" />
              <div className="bk-bento-icon">📊</div>
              <h3>Analytics</h3>
              <p>Trends, Sentiment-Verteilung, DSGVO-Metriken — alles auf einen Blick.</p>
              <div className="bk-bento-tags">
                <span>Insights</span><span>Echtzeit</span>
              </div>
            </div>

            <div className={`bk-bento-card bk-bento-wide reveal-card ${featuresInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.15s' }}>
              <div className="bk-bento-glow" />
              <div className="bk-bento-icon">🛡️</div>
              <h3>100% DSGVO-konform</h3>
              <p>Compliance-Webhooks, Consent-Tracking, Datenexport, Right-to-Erasure und konfigurierbare Speicherfristen mit vollständigem Audit-Trail.</p>
              <div className="bk-bento-tags">
                <span>Rechtsicher</span><span>DSGVO</span>
              </div>
            </div>

            <div className={`bk-bento-card reveal-card ${featuresInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="bk-bento-glow" />
              <div className="bk-bento-icon">⚡</div>
              <h3>Review Management</h3>
              <p>Bulk-Aktionen, Händler-Antworten, Veröffentlichen & Verstecken — volle Kontrolle.</p>
              <div className="bk-bento-tags">
                <span>Flexibel</span><span>Bulk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESS — Timeline with animated steps
      ═══════════════════════════════════════════════════════════ */}
      <section className="bk-process" ref={processRef}>
        <div className="bk-process-bg" />
        <div className="container">
          <div className={`bk-process-head ${processInView ? 'in-view' : ''}`}>
            <h2 className="bk-process-title">In 4 Schritten live</h2>
            <p className="bk-process-subtitle">Installation, Konfiguration, Automatisierung — dann läuft es.</p>
          </div>

          <div className="bk-timeline">
            {[
              { num: '01', title: 'App installieren', desc: 'Ein Klick im Shopify App Store, keine Technik nötig.' },
              { num: '02', title: 'Regeln einrichten', desc: 'Auto-Moderation und Benachrichtigungen nach Ihren Wünschen.' },
              { num: '03', title: 'Bewertungen sammeln', desc: 'Sentiment-Analyse und Moderation laufen automatisch.' },
              { num: '04', title: 'Umsatz steigern', desc: 'Mehr Vertrauen durch echte Bewertungen = mehr Conversion.' },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`bk-timeline-step ${processInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${0.15 * i}s` }}
              >
                <div className="bk-timeline-marker">
                  <span className="bk-timeline-num">{step.num}</span>
                  {i < 3 && <div className="bk-timeline-line" />}
                </div>
                <div className="bk-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Full-width glow, strong primary button
      ═══════════════════════════════════════════════════════════ */}
      <section className="bk-cta" ref={ctaRef}>
        <div className="bk-cta-bg" />
        <div className="container">
          <div className={`bk-cta-inner ${ctaInView ? 'in-view' : ''}`}>
            <h2 className="bk-cta-title">Bereit für weniger Arbeit, mehr Bewertungen?</h2>
            <p className="bk-cta-desc">KI übernimmt die Moderation — Sie behalten die Kontrolle.</p>
            <div className="bk-cta-buttons">
              <a
                href="https://apps.shopify.com/bewertungklar"
                className="bk-btn bk-btn-primary bk-btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bk-btn-shine" />
                <span className="bk-btn-text">Jetzt kostenlos starten</span>
                <span className="bk-btn-arrow">→</span>
              </a>
              <a href="mailto:support@bewertungklar.de" className="bk-btn bk-btn-ghost bk-btn-lg">
                Demo anfordern
              </a>
            </div>
            <p className="bk-cta-note">Kostenlose Version · Setup in 5 Min · DSGVO-konform · KI-powered</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
