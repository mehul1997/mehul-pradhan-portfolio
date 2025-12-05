import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-header">
          <h1 className="landing-title">Mehul Pradhan</h1>
          <div className="landing-divider"></div>
          <p className="landing-subtitle">Software Engineer & Creative Thinker</p>
        </div>

        <div className="choice-container">
          <div className="choice-card engineer-card" onClick={() => navigate('/engineer')}>
            <div className="card-header">
              <span className="card-number">01</span>
              <div className="card-line"></div>
            </div>
            <h2 className="card-title">Professional</h2>
            <p className="card-description">Resume · Experience · Projects · Recommendations</p>
            <div className="card-arrow">→</div>
          </div>

          <div className="choice-card personal-card" onClick={() => navigate('/personal')}>
            <div className="card-header">
              <span className="card-number">02</span>
              <div className="card-line"></div>
            </div>
            <h2 className="card-title">Personal</h2>
            <p className="card-description">About · Blog · Photography · Interests</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
