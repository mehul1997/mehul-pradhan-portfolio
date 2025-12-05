import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalHome.css';

function PersonalHome() {
  return (
    <div className="page-container personal-home-page">
      <div className="personal-hero-section">
        <div className="hero-header">
          <span className="hero-label">Personal Space</span>
          <div className="hero-divider"></div>
        </div>
        <h1 className="hero-title">Beyond the code, there's a world of curiosity and creativity</h1>
        <p className="hero-description">
          Exploring life through photography, writing, and meaningful experiences.
          This is where I share my journey, thoughts, and the things that inspire me.
        </p>
      </div>

      <div className="personal-intro-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Philosophy</h2>
        </div>
        <p className="intro-text">
          Life is a balance between ambition and contentment, work and play, solitude and connection.
          I believe in continuous growth, genuine relationships, and finding beauty in everyday moments.
        </p>
      </div>

      <div className="personal-nav-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Explore</h2>
        </div>
        <div className="personal-nav-grid">
          <Link to="/personal/about" className="personal-nav-item">
            <div className="personal-nav-header">
              <span className="personal-nav-label">About</span>
              <span className="personal-nav-arrow">→</span>
            </div>
            <p className="personal-nav-description">Who I am beyond the profession</p>
          </Link>
          <Link to="/personal/blog" className="personal-nav-item">
            <div className="personal-nav-header">
              <span className="personal-nav-label">Writing</span>
              <span className="personal-nav-arrow">→</span>
            </div>
            <p className="personal-nav-description">Thoughts, stories, and reflections</p>
          </Link>
          <Link to="/personal/photos" className="personal-nav-item">
            <div className="personal-nav-header">
              <span className="personal-nav-label">Photography</span>
              <span className="personal-nav-arrow">→</span>
            </div>
            <p className="personal-nav-description">Moments captured through my lens</p>
          </Link>
          <Link to="/personal/instagram" className="personal-nav-item">
            <div className="personal-nav-header">
              <span className="personal-nav-label">Instagram</span>
              <span className="personal-nav-arrow">→</span>
            </div>
            <p className="personal-nav-description">Daily updates and adventures</p>
          </Link>
        </div>
      </div>

      <div className="quote-section">
        <div className="quote-mark">"</div>
        <p className="quote-text">
          Life is not measured by the number of breaths we take, but by the moments that take our breath away.
        </p>
      </div>
    </div>
  );
}

export default PersonalHome;
