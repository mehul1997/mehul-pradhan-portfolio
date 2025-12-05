import React from 'react';
import { Link } from 'react-router-dom';
import './EngineerHome.css';

function EngineerHome() {
  return (
    <div className="page-container engineer-home-page">
      <div className="hero-section">
        <div className="hero-header">
          <span className="hero-label">Professional Portfolio</span>
          <div className="hero-divider"></div>
        </div>
        <div className="hero-profile">
          <img src="/assets/profile.jpg" alt="Mehul Pradhan" className="profile-image" />
        </div>
        <h1 className="hero-title">Building digital experiences through code and design</h1>
        <p className="hero-description">
          Software engineer focused on creating scalable solutions and meaningful products.
          Specialized in full-stack development with a passion for clean architecture.
        </p>
      </div>

      <div className="skills-section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Core Competencies</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Frontend Development</h3>
            <p>React · JavaScript · TypeScript · HTML5 · CSS3</p>
          </div>
          <div className="skill-item">
            <h3>Backend Development</h3>
            <p>Node.js · Python · Java · RESTful APIs</p>
          </div>
          <div className="skill-item">
            <h3>Tools & Infrastructure</h3>
            <p>Git · Docker · AWS · CI/CD · Agile</p>
          </div>
        </div>
      </div>

      <div className="navigation-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Portfolio Sections</h2>
        </div>
        <div className="nav-links-grid">
          <Link to="/engineer/resume" className="nav-link-item">
            <div className="nav-link-header">
              <span className="nav-link-label">Resume</span>
              <span className="nav-link-arrow">→</span>
            </div>
            <p className="nav-link-description">Professional background and qualifications</p>
          </Link>
          <Link to="/engineer/experience" className="nav-link-item">
            <div className="nav-link-header">
              <span className="nav-link-label">Experience</span>
              <span className="nav-link-arrow">→</span>
            </div>
            <p className="nav-link-description">Work history and key projects</p>
          </Link>
          <Link to="/engineer/recommendations" className="nav-link-item">
            <div className="nav-link-header">
              <span className="nav-link-label">Recommendations</span>
              <span className="nav-link-arrow">→</span>
            </div>
            <p className="nav-link-description">Testimonials from colleagues and clients</p>
          </Link>
          <Link to="/engineer/github" className="nav-link-item">
            <div className="nav-link-header">
              <span className="nav-link-label">GitHub</span>
              <span className="nav-link-arrow">→</span>
            </div>
            <p className="nav-link-description">Open source contributions and projects</p>
          </Link>
        </div>
      </div>

      <div className="contact-section">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <p className="contact-description">Available for collaboration and consulting opportunities.</p>
        <div className="contact-links">
          <a href="mailto:mehul@example.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/mehul-pradhan-rourkela/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/mehul1997" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default EngineerHome;
