import React from 'react';

function HomePage() {
  return (
    <div className="bk-homepage">
      <header className="bk-hero">
        <div className="bk-hero-background">
          <div className="bk-hero-gradient"></div>
          <div className="bk-hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`bk-particle particle-${i + 1}`}></div>
            ))}
          </div>
          <div className="bk-hero-shapes">
            <div className="bk-shape shape-1"></div>
            <div className="bk-shape shape-2"></div>
            <div className="bk-shape shape-3"></div>
            <div className="bk-shape shape-4"></div>
          </div>
        </div>
        <div className="bk-hero-icons">
          <span className="bk-hero-icon floating-1">⭐</span>
          <span className="bk-hero-icon floating-2">💬</span>
          <span className="bk-hero-icon floating-3">🤖</span>
          <span className="bk-hero-icon floating-4">📊</span>
          <span className="bk-hero-icon floating-5">✉️</span>
          <span className="bk-hero-icon floating-6">🛡️</span>
          <span className="bk-hero-icon floating-7">🚀</span>
          <span className="bk-hero-icon floating-8">🎯</span>
        </div>
        <div className="container">
          <div className="bk-hero-content">
            <div className="bk-hero-badge-new">
              <span className="bk-badge-icon">✨</span>
              <span>KI-Powered Review Management</span>
            </div>
            <h1 className="bk-title">
              <span className="bk-title-gradient">BewertungKlar</span>
            </h1>
            <p className="bk-subtitle">
              Die intelligente Bewertungsverwaltung für deutsche Shopify-Stores mit 
              <span className="bk-highlight"> KI-gestützter Sentiment-Analyse</span> und 
              <span className="bk-highlight"> vollautomatischer Moderation</span>
            </p>
            <div className="bk-cta-group">
              <a 
                href="https://apps.shopify.com/bewertungklar" 
                className="bk-cta primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="bk-cta-icon">🚀</span>
                <span>Kostenlos installieren</span>
                <span className="bk-cta-arrow">→</span>
              </a>
              <a href="#features" className="bk-cta secondary">
                <span className="bk-cta-icon">✨</span>
                <span>Features entdecken</span>
              </a>
            </div>
            <div className="bk-hero-badges">
              <div className="bk-badge-item">
                <span className="bk-badge-emoji">✨</span>
                <span>Kostenlose Version</span>
              </div>
              <div className="bk-badge-item">
                <span className="bk-badge-emoji">🇩🇪</span>
                <span>100% DSGVO-konform</span>
              </div>
              <div className="bk-badge-item">
                <span className="bk-badge-emoji">🤖</span>
                <span>KI-powered</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bk-hero-scroll-indicator">
          <div className="bk-scroll-mouse">
            <div className="bk-scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </header>

      <section id="features" className="bk-features">
        <div className="container">
          <div className="bk-features-content">
            <h2 className="bk-section-title">Intelligente Features für Ihren Erfolg</h2>
            <p className="bk-section-subtitle">
              Sparen Sie Zeit und steigern Sie Ihre Conversion mit unseren KI-gestützten Automatisierungen
            </p>
            
            <div className="bk-feature-grid">
              <div className="bk-feature-card fade-in-up stagger-1">
                <div className="bk-feature-icon">🤖</div>
                <h3 className="bk-feature-title">KI Sentiment-Analyse</h3>
                <p className="bk-feature-description">
                  Multilinguales BERT-Modell analysiert automatisch die Stimmung jeder Bewertung in Deutsch, Englisch, Französisch, Spanisch, Italienisch und Niederländisch.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Multilingual</span>
                  <span className="bk-tag">Echtzeit</span>
                </div>
              </div>

              <div className="bk-feature-card fade-in-up stagger-2">
                <div className="bk-feature-icon">🎯</div>
                <h3 className="bk-feature-title">Intelligente Auto-Moderation</h3>
                <p className="bk-feature-description">
                  Regelbasierte Automatisierung: Bewertungen werden basierend auf Sternen, Sentiment, Keywords und Länge automatisch genehmigt oder abgelehnt.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Zeitersparnis</span>
                  <span className="bk-tag">Flexibel</span>
                </div>
              </div>

              <div className="bk-feature-card fade-in-up stagger-3">
                <div className="bk-feature-icon">📧</div>
                <h3 className="bk-feature-title">E-Mail Template Editor</h3>
                <p className="bk-feature-description">
                  Erstellen Sie benutzerdefinierte E-Mail-Vorlagen mit HTML/Plain Text, Variablen-Substitution und Live-Vorschau. SendGrid-Integration für professionellen Versand.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Anpassbar</span>
                  <span className="bk-tag">Professionell</span>
                </div>
              </div>

              <div className="bk-feature-card fade-in-up stagger-4">
                <div className="bk-feature-icon">📊</div>
                <h3 className="bk-feature-title">Analytics Dashboard</h3>
                <p className="bk-feature-description">
                  Umfassende Statistiken: Bewertungs-Trends, Sentiment-Verteilung, Durchschnittsbewertungen pro Monat, DSGVO-Compliance-Metriken und mehr.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Insights</span>
                  <span className="bk-tag">Echtzeit</span>
                </div>
              </div>

              <div className="bk-feature-card fade-in-up stagger-5">
                <div className="bk-feature-icon">🛡️</div>
                <h3 className="bk-feature-title">100% DSGVO-konform</h3>
                <p className="bk-feature-description">
                  Compliance-Webhooks, Consent-Tracking, Datenexport, Right-to-Erasure, konfigurierbare Datenspeicherung (30-2555 Tage) und vollständiges Audit-Trail.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Rechtsicher</span>
                  <span className="bk-tag">DSGVO</span>
                </div>
              </div>

              <div className="bk-feature-card fade-in-up stagger-6">
                <div className="bk-feature-icon">🗑️</div>
                <h3 className="bk-feature-title">Review Management</h3>
                <p className="bk-feature-description">
                  Vollständige Kontrolle: Einzelne oder Bulk-Aktionen, Löschen mit Bestätigung, Veröffentlichen, Verstecken, Händler-Antworten und mehr.
                </p>
                <div className="bk-feature-tags">
                  <span className="bk-tag">Flexibel</span>
                  <span className="bk-tag">Bulk-Actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bk-process">
        <div className="container">
          <h2 className="bk-section-title">So einfach geht's</h2>
          <p className="bk-section-subtitle">
            In wenigen Minuten zur professionellen Bewertungsverwaltung
          </p>
          <div className="bk-process-grid">
            <div className="bk-process-step">
              <div className="bk-step-number">1</div>
              <h3 className="bk-step-title">App installieren</h3>
              <p className="bk-step-description">
                Installieren Sie BewertungKlar mit einem Klick aus dem Shopify App Store - keine technischen Kenntnisse erforderlich.
              </p>
            </div>
            <div className="bk-process-step">
              <div className="bk-step-number">2</div>
              <h3 className="bk-step-title">Auto-Regeln konfigurieren</h3>
              <p className="bk-step-description">
                Richten Sie intelligente Auto-Moderation und E-Mail-Vorlagen nach Ihren Wünschen ein. Unsere KI übernimmt den Rest.
              </p>
            </div>
            <div className="bk-process-step">
              <div className="bk-step-number">3</div>
              <h3 className="bk-step-title">Bewertungen sammeln</h3>
              <p className="bk-step-description">
                Automatische E-Mails nach Kauf, Sentiment-Analyse in Echtzeit und intelligente Moderation - alles auf Autopilot.
              </p>
            </div>
            <div className="bk-process-step">
              <div className="bk-step-number">4</div>
              <h3 className="bk-step-title">Umsatz steigern</h3>
              <p className="bk-step-description">
                Mehr Vertrauen durch authentische Bewertungen = höhere Conversion-Rate = mehr Umsatz für Ihren Shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bk-cta-section">
        <div className="container">
          <div className="bk-cta-content">
            <h2 className="bk-cta-title">Bereit für intelligente Bewertungsverwaltung?</h2>
            <p className="bk-cta-description">
              Automatisieren Sie Ihre Review-Verwaltung mit KI-Power und sparen Sie täglich wertvolle Zeit bei der Moderation.
            </p>
            <div className="bk-cta-buttons">
              <a 
                href="https://apps.shopify.com/bewertungklar" 
                className="bk-cta large primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                🚀 Jetzt kostenlos starten
              </a>
              <a 
                href="mailto:support@bewertungklar.de" 
                className="bk-cta large secondary"
              >
                💬 Demo anfordern
              </a>
            </div>
            <div className="bk-cta-note">
              ✨ Kostenlose Version verfügbar  •  🎯 Setup in 5 Minuten  •  🛡️ 100% DSGVO-konform  •  🤖 KI-powered
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
