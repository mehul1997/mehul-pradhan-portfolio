import React from 'react';
import './GitHub.css';

function GitHub() {
  const GITHUB_USERNAME = 'mehul1997';

  return (
    <div className="page-container github-page">
      <div className="github-header">
        <h1>GitHub Profile</h1>
        <div className="github-bio">
          <p>Hi! I am Mehul Pradhan.</p>
          <p>Currently Web Developer.</p>
          <p>Passionate about Data Science and art as well.</p>
          <p>Working in Backlight.</p>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-profile-btn"
        >
          View Full Profile
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginLeft: '8px' }}>
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>

      <div className="github-readme-section">
        <h2>About Me</h2>
        <div className="readme-content">
          <div className="readme-info">
            <p><strong>Web Developer from India</strong></p>
            <p>📧 Email: <a href="mailto:mehulpradhan1997@gmail.com">mehulpradhan1997@gmail.com</a></p>
          </div>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>Agile Software Development</li>
              <li>Python Data Structures and Algorithms</li>
            </ul>
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <p>Book chapter contribution on statistical methods for reproducible data analysis</p>
          </div>
        </div>
      </div>

      <div className="github-activity-section">
        <h2>GitHub Activity</h2>
        <div className="github-embed">
          <img
            src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
            alt="GitHub Contribution Chart"
            className="contribution-chart"
          />
        </div>
      </div>
    </div>
  );
}

export default GitHub;
