import React, { useState, useEffect } from 'react';

function CookieBanner({ isVisible, onAccept, onReject, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <h3>🍪 Cookie-Einstellungen</h3>
          <p>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Diese Cookies helfen uns dabei, die Website-Performance zu analysieren und Ihnen relevante 
            Inhalte anzuzeigen.
          </p>
          
          <div className="cookie-categories">
            <div className="cookie-category">
              <h4>Notwendige Cookies</h4>
              <p>Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.</p>
              <label className="cookie-toggle">
                <input type="checkbox" checked disabled />
                <span className="slider"></span>
                Immer aktiv
              </label>
            </div>
            
            <div className="cookie-category">
              <h4>Analytische Cookies</h4>
              <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
              <label className="cookie-toggle">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
                Optional
              </label>
            </div>
            
            <div className="cookie-category">
              <h4>Marketing Cookies</h4>
              <p>Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen.</p>
              <label className="cookie-toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                Optional
              </label>
            </div>
          </div>
          
          <div className="cookie-banner-buttons">
            <button className="cookie-btn reject" onClick={onReject}>
              Alle ablehnen
            </button>
            <button className="cookie-btn accept-selected" onClick={onAccept}>
              Auswahl akzeptieren
            </button>
            <button className="cookie-btn accept-all" onClick={onAccept}>
              Alle akzeptieren
            </button>
          </div>
          
          <button className="cookie-close" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;

