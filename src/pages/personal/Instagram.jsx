import React from 'react';
import './Instagram.css';

function Instagram() {
  return (
    <div className="page-container instagram-page">
      <div className="instagram-header">
        <div className="instagram-icon">📱</div>
        <h1>Follow Me on Instagram</h1>
        <p className="instagram-tagline">Stay connected with my daily adventures</p>
      </div>

      <div className="instagram-content">
        <div className="instagram-info-card">
          <h2>@mehulpradhan</h2>
          <p>
            Join me on Instagram for daily updates, behind-the-scenes moments, travel
            adventures, and everything in between. Let's stay connected!
          </p>

          <div className="instagram-stats">
            <div className="stat-item">
              <div className="stat-number">📸</div>
              <div className="stat-label">Daily Stories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">🌍</div>
              <div className="stat-label">Travel Updates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">💭</div>
              <div className="stat-label">Life Moments</div>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="instagram-preview">
          <h3>Recent Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-circle">
                <span>🏔️</span>
              </div>
              <p>Adventures</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-circle">
                <span>☕</span>
              </div>
              <p>Daily Life</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-circle">
                <span>📚</span>
              </div>
              <p>Books</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-circle">
                <span>🎨</span>
              </div>
              <p>Creative</p>
            </div>
          </div>
        </div>

        <div className="instagram-cta">
          <h3>Let's Connect</h3>
          <p>
            Don't miss out on updates! Hit that follow button and let's build
            an amazing community together. Drop a DM and say hi! 👋
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
