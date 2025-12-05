import React from 'react';
import './GitHub.css';

function GitHub() {
  const GITHUB_USERNAME = 'mehul1997';

  return (
    <div className="page-container github-page">
      <div className="github-header">
        <div className="header-top">
          <span className="header-label">GitHub Profile</span>
          <div className="header-divider"></div>
        </div>
        <h1 className="page-title">Open Source & Projects</h1>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="github-content">
        <section className="github-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">About</h2>
          </div>
          <div className="bio-grid">
            <div className="bio-item">
              <span className="bio-label">Role</span>
              <p className="bio-text">Web Developer from India</p>
            </div>
            <div className="bio-item">
              <span className="bio-label">Focus</span>
              <p className="bio-text">Passionate about Data Science and art</p>
            </div>
            <div className="bio-item">
              <span className="bio-label">Company</span>
              <p className="bio-text">Working at Backlight</p>
            </div>
            <div className="bio-item">
              <span className="bio-label">Contact</span>
              <p className="bio-text">
                <a href="mailto:mehulpradhan1997@gmail.com" className="bio-link">
                  mehulpradhan1997@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="github-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Certifications</h2>
          </div>
          <ul className="item-list">
            <li>Agile Software Development</li>
            <li>Python Data Structures and Algorithms</li>
          </ul>
        </section>

        <section className="github-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Achievements</h2>
          </div>
          <p className="achievement-text">
            Book chapter contribution on statistical methods for reproducible data analysis
          </p>
        </section>

        <section className="github-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Contribution Activity</h2>
          </div>
          <div className="activity-container">
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt="GitHub Contribution Chart"
              className="contribution-chart"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default GitHub;
